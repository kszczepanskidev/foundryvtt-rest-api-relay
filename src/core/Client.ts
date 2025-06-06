import { log } from "../middleware/logger";
import { WebSocket } from "ws";
import { ClientManager } from "./ClientManager";

// Read inactivity timeout from environment variable, default to 60 seconds
const CLIENT_INACTIVITY_TIMEOUT_MS = parseInt(process.env.CLIENT_INACTIVITY_TIMEOUT_MS || '60000', 10);

export class Client {
  private ws: WebSocket;
  private id: string;
  private apiKey: string;
  private lastSeen: number;
  private connectedSince: number; // Add this
  private connected: boolean;

  constructor(ws: WebSocket, id: string, apiKey: string) {
    this.ws = ws;
    this.id = id;
    this.apiKey = apiKey;
    this.lastSeen = Date.now();
    this.connectedSince = Date.now(); // Add this
    this.connected = true;
    this.setupHandlers();
  }

  private setupHandlers(): void {
    this.ws.on("message", (data: Buffer) => {
      try {
        const message = JSON.parse(data.toString());
        log.info(`Received message from client ${this.id}: ${message.type}`);
        this.handleMessage(data);
      } catch (error) {
        log.error(`Error processing WebSocket message: ${error}`);
      }
    });

    this.ws.on("close", () => {
      this.connected = false;
      this.handleClose();
    });
  }

  private ping(): void {
    if (this.isAlive()) {
      try {
        this.ws.send(JSON.stringify({ type: "ping" }));
      } catch (err) {
        // Connection might be dead
        this.connected = false;
      }
    }
  }

  private handleMessage(data: Buffer): void {
    try {
      const message = JSON.parse(data.toString());
      this.updateLastSeen();

      // Handle ping messages directly without broadcasting
      if (message.type === "ping") {
        this.send({ type: "pong" });
        return;
      }
      
      // For all other messages
      ClientManager.handleIncomingMessage(this.id, message);
      
      // Only broadcast non-ping/pong messages
      if (message.type !== "pong") {
        this.broadcast(message);
      }
    } catch (error) {
      log.error("Error handling message", { error, clientId: this.id });
    }
  }

  private handleClose(): void {
    log.info("Client disconnected", { clientId: this.id });
    ClientManager.removeClient(this.id);
  }

  public send(data: unknown): boolean {
    if (!this.isAlive()) return false;
    
    try {
      this.ws.send(typeof data === 'string' ? data : JSON.stringify(data));
      return true;
    } catch (error) {
      log.error("Error sending message", { error, clientId: this.id });
      this.connected = false;
      return false;
    }
  }

  private broadcast(message: unknown): void {
    ClientManager.broadcastToGroup(this.id, message);
  }

  public getId(): string {
    return this.id;
  }

  public getApiKey(): string {
    return this.apiKey;
  }

  public updateLastSeen(): void {
    this.lastSeen = Date.now();
  }

  public getLastSeen(): number {
    return this.lastSeen;
  }

  public isAlive(): boolean {
    // Give new connections at least 6 minutes before cleanup
    const newConnectionGracePeriod = 360000;
    const isNewConnection = Date.now() - this.connectedSince < newConnectionGracePeriod;
    
    // Use the configured inactivity timeout
    return (this.connected && 
            this.ws.readyState === WebSocket.OPEN && 
            (isNewConnection || Date.now() - this.lastSeen < CLIENT_INACTIVITY_TIMEOUT_MS));
  }

  public disconnect(): void {
    if (this.connected && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.close();
      } catch (error) {
        log.error("Error closing WebSocket", { error, clientId: this.id });
      }
    }
    this.connected = false;
  }

  public markDisconnected(): void {
    this.connected = false;
  }
}
