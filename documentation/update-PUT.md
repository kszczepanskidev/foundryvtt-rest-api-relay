## **PUT** /update

## Updates and entity with the given JSON props

### Request

#### Request URL

```
$baseUrl/update?clientId=$clientId&uuid=uuid
```

#### Request Headers

| Key | Value | Description |
| --- | ----- | ----------- |
| x-api-key | \{\{apiKey\}\} |   |

#### Request Parameters

| Parameter Type | Key | Value | Description |
| -------------- | --- | ----- | ----------- |
| Query String Parameter | clientId | \{\{clientId\}\} | Auth token to connect to specific Foundry world |
| Query String Parameter | uuid | uuid |   |
| Query String Parameter | selected | true |   |
| Query String Parameter | actor | true |   |

#### Request Payload

```json
{
  "name": "BIG APE",
  "system": {
    "abilities": {
      "str": {
        "value": 20,
        "proficient": 0,
        "bonuses": {
          "check": "",
          "save": ""
        },
        "max": null
      },
      "dex": {
        "value": 20,
        "proficient": 0,
        "bonuses": {
          "check": "",
          "save": ""
        },
        "max": null
      },
      "con": {
        "value": 20,
        "proficient": 0,
        "bonuses": {
          "check": "",
          "save": ""
        },
        "max": null
      },
      "int": {
        "value": 20,
        "proficient": 0,
        "bonuses": {
          "check": "",
          "save": ""
        },
        "max": null
      },
      "wis": {
        "value": 20,
        "proficient": 0,
        "bonuses": {
          "check": "",
          "save": ""
        },
        "max": null
      },
      "cha": {
        "value": 20,
        "proficient": 0,
        "bonuses": {
          "check": "",
          "save": ""
        },
        "max": null
      }
    },
    "attributes": {
      "ac": {
        "flat": 20,
        "calc": "natural",
        "formula": ""
      },
      "hp": {
        "value": 19,
        "max": 19,
        "temp": 0,
        "tempmax": 0,
        "formula": "3d8 + 6"
      },
      "init": {
        "ability": "",
        "bonus": "0",
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "movement": {
        "burrow": 0,
        "climb": 30,
        "fly": 0,
        "swim": 0,
        "walk": 30,
        "units": "ft",
        "hover": false
      },
      "attunement": {
        "max": 3
      },
      "senses": {
        "darkvision": 0,
        "blindsight": 0,
        "tremorsense": 0,
        "truesight": 0,
        "units": "ft",
        "special": ""
      },
      "spellcasting": "",
      "exhaustion": 0,
      "concentration": {
        "ability": "",
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        },
        "bonuses": {
          "save": ""
        },
        "limit": 1
      },
      "hd": {
        "spent": 0
      },
      "death": {
        "ability": "",
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        },
        "success": 0,
        "failure": 0
      }
    },
    "details": {
      "biography": {
        "value": "<p>\n        <em>\n          Token artwork by\n          <a href=\"https://www.forgotten-adventures.net/\" target=\"_blank\" rel=\"noopener\">Forgotten Adventures</a>.\n        </em>      \n      </p>",
        "public": ""
      },
      "alignment": "Unaligned",
      "race": null,
      "type": {
        "value": "beast",
        "subtype": "",
        "swarm": "",
        "custom": ""
      },
      "environment": "Forest",
      "cr": 0.5,
      "spellLevel": 0,
      "source": {
        "custom": "",
        "book": "SRD 5.1",
        "page": "",
        "license": "CC-BY-4.0"
      },
      "ideal": "",
      "bond": "",
      "flaw": ""
    },
    "traits": {
      "size": "med",
      "di": {
        "value": [],
        "bypasses": [],
        "custom": ""
      },
      "dr": {
        "value": [],
        "bypasses": [],
        "custom": ""
      },
      "dv": {
        "value": [],
        "bypasses": [],
        "custom": ""
      },
      "ci": {
        "value": [],
        "custom": ""
      },
      "languages": {
        "value": [],
        "custom": ""
      },
      "dm": {
        "amount": {},
        "bypasses": []
      }
    },
    "currency": {
      "pp": 0,
      "gp": 0,
      "ep": 0,
      "sp": 0,
      "cp": 0
    },
    "skills": {
      "acr": {
        "value": 0,
        "ability": "dex",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "ani": {
        "value": 0,
        "ability": "wis",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "arc": {
        "value": 0,
        "ability": "int",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "ath": {
        "value": 1,
        "ability": "str",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "dec": {
        "value": 0,
        "ability": "cha",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "his": {
        "value": 0,
        "ability": "int",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "ins": {
        "value": 0,
        "ability": "wis",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "itm": {
        "value": 0,
        "ability": "cha",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "inv": {
        "value": 0,
        "ability": "int",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "med": {
        "value": 0,
        "ability": "wis",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "nat": {
        "value": 0,
        "ability": "int",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "prc": {
        "value": 1,
        "ability": "wis",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "prf": {
        "value": 0,
        "ability": "cha",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "per": {
        "value": 0,
        "ability": "cha",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "rel": {
        "value": 0,
        "ability": "int",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "slt": {
        "value": 0,
        "ability": "dex",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "ste": {
        "value": 0,
        "ability": "dex",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      },
      "sur": {
        "value": 0,
        "ability": "wis",
        "bonuses": {
          "check": "",
          "passive": ""
        },
        "roll": {
          "min": null,
          "max": null,
          "mode": 0
        }
      }
    },
    "spells": {
      "spell1": {
        "value": 0,
        "override": null
      },
      "spell2": {
        "value": 0,
        "override": null
      },
      "spell3": {
        "value": 0,
        "override": null
      },
      "spell4": {
        "value": 0,
        "override": null
      },
      "spell5": {
        "value": 0,
        "override": null
      },
      "spell6": {
        "value": 0,
        "override": null
      },
      "spell7": {
        "value": 0,
        "override": null
      },
      "spell8": {
        "value": 0,
        "override": null
      },
      "spell9": {
        "value": 0,
        "override": null
      },
      "pact": {
        "value": 0,
        "override": null
      },
      "spell0": {
        "value": 0,
        "override": null
      }
    },
    "bonuses": {
      "mwak": {
        "attack": "",
        "damage": ""
      },
      "rwak": {
        "attack": "",
        "damage": ""
      },
      "msak": {
        "attack": "",
        "damage": ""
      },
      "rsak": {
        "attack": "",
        "damage": ""
      },
      "abilities": {
        "check": "",
        "save": "",
        "skill": ""
      },
      "spell": {
        "dc": ""
      }
    },
    "resources": {
      "legact": {
        "value": 0,
        "max": 0
      },
      "legres": {
        "value": 0,
        "max": 0
      },
      "lair": {
        "value": false,
        "initiative": null
      }
    },
    "tools": {}
  }
}
```

### Response

#### Status: 200 OK

```json
{
  "requestId": "update_1743294317087_jq6g27p",
  "clientId": "foundry-DKL4ZKK80lUZFgSJ",
  "uuid": "Actor.MoqzrjLjj5mlMARQ",
  "entities": [
    {
      "name": "BIG APE",
      "type": "npc",
      "img": "systems/dnd5e/tokens/beast/Ape.webp",
      "system": {
        "abilities": {
          "str": {
            "value": 20,
            "proficient": 0,
            "bonuses": {
              "check": "",
              "save": ""
            },
            "max": null
          },
          "dex": {
            "value": 20,
            "proficient": 0,
            "bonuses": {
              "check": "",
              "save": ""
            },
            "max": null
          },
          "con": {
            "value": 20,
            "proficient": 0,
            "bonuses": {
              "check": "",
              "save": ""
            },
            "max": null
          },
          "int": {
            "value": 20,
            "proficient": 0,
            "bonuses": {
              "check": "",
              "save": ""
            },
            "max": null
          },
          "wis": {
            "value": 20,
            "proficient": 0,
            "bonuses": {
              "check": "",
              "save": ""
            },
            "max": null
          },
          "cha": {
            "value": 20,
            "proficient": 0,
            "bonuses": {
              "check": "",
              "save": ""
            },
            "max": null
          },
          "san": {
            "value": 12,
            "proficient": 0,
            "max": null,
            "bonuses": {
              "check": "",
              "save": ""
            }
          }
        },
        "attributes": {
          "ac": {
            "flat": 20,
            "calc": "natural",
            "formula": ""
          },
          "hp": {
            "value": 19,
            "max": 19,
            "temp": 0,
            "tempmax": 0,
            "formula": "3d8 + 6"
          },
          "init": {
            "ability": "",
            "bonus": "0",
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "movement": {
            "burrow": 0,
            "climb": 30,
            "fly": 0,
            "swim": 0,
            "walk": 30,
            "units": "ft",
            "hover": false
          },
          "attunement": {
            "max": 3
          },
          "senses": {
            "darkvision": 0,
            "blindsight": 0,
            "tremorsense": 0,
            "truesight": 0,
            "units": "ft",
            "special": ""
          },
          "spellcasting": "",
          "exhaustion": 0,
          "concentration": {
            "ability": "",
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            },
            "bonuses": {
              "save": ""
            },
            "limit": 1
          },
          "hd": {
            "spent": 0
          },
          "death": {
            "ability": "",
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            },
            "success": 0,
            "failure": 0
          }
        },
        "details": {
          "biography": {
            "value": "<p>\n        <em>\n          Token artwork by\n          <a href=\"https://www.forgotten-adventures.net/\" target=\"_blank\" rel=\"noopener\">Forgotten Adventures</a>.\n        </em>      \n      </p>",
            "public": ""
          },
          "alignment": "Unaligned",
          "race": null,
          "type": {
            "value": "beast",
            "subtype": "",
            "swarm": "",
            "custom": ""
          },
          "environment": "Forest",
          "cr": 0.5,
          "spellLevel": 0,
          "source": {
            "custom": "",
            "book": "SRD 5.1",
            "page": "",
            "license": "CC-BY-4.0"
          },
          "ideal": "",
          "bond": "",
          "flaw": ""
        },
        "traits": {
          "size": "med",
          "di": {
            "value": [],
            "bypasses": [],
            "custom": ""
          },
          "dr": {
            "value": [],
            "bypasses": [],
            "custom": ""
          },
          "dv": {
            "value": [],
            "bypasses": [],
            "custom": ""
          },
          "ci": {
            "value": [],
            "custom": ""
          },
          "languages": {
            "value": [],
            "custom": ""
          },
          "dm": {
            "amount": {},
            "bypasses": []
          }
        },
        "currency": {
          "pp": 0,
          "gp": 0,
          "ep": 0,
          "sp": 0,
          "cp": 0
        },
        "skills": {
          "acr": {
            "value": 0,
            "ability": "dex",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "ani": {
            "value": 0,
            "ability": "wis",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "arc": {
            "value": 0,
            "ability": "int",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "ath": {
            "value": 1,
            "ability": "str",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "dec": {
            "value": 0,
            "ability": "cha",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "his": {
            "value": 0,
            "ability": "int",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "ins": {
            "value": 0,
            "ability": "wis",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "itm": {
            "value": 0,
            "ability": "cha",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "inv": {
            "value": 0,
            "ability": "int",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "med": {
            "value": 0,
            "ability": "wis",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "nat": {
            "value": 0,
            "ability": "int",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "prc": {
            "value": 1,
            "ability": "wis",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "prf": {
            "value": 0,
            "ability": "cha",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "per": {
            "value": 0,
            "ability": "cha",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "rel": {
            "value": 0,
            "ability": "int",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "slt": {
            "value": 0,
            "ability": "dex",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "ste": {
            "value": 0,
            "ability": "dex",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          },
          "sur": {
            "value": 0,
            "ability": "wis",
            "bonuses": {
              "check": "",
              "passive": ""
            },
            "roll": {
              "min": null,
              "max": null,
              "mode": 0
            }
          }
        },
        "spells": {
          "spell1": {
            "value": 0,
            "override": null
          },
          "spell2": {
            "value": 0,
            "override": null
          },
          "spell3": {
            "value": 0,
            "override": null
          },
          "spell4": {
            "value": 0,
            "override": null
          },
          "spell5": {
            "value": 0,
            "override": null
          },
          "spell6": {
            "value": 0,
            "override": null
          },
          "spell7": {
            "value": 0,
            "override": null
          },
          "spell8": {
            "value": 0,
            "override": null
          },
          "spell9": {
            "value": 0,
            "override": null
          },
          "pact": {
            "value": 0,
            "override": null
          },
          "spell0": {
            "value": 0,
            "override": null
          }
        },
        "bonuses": {
          "mwak": {
            "attack": "",
            "damage": ""
          },
          "rwak": {
            "attack": "",
            "damage": ""
          },
          "msak": {
            "attack": "",
            "damage": ""
          },
          "rsak": {
            "attack": "",
            "damage": ""
          },
          "abilities": {
            "check": "",
            "save": "",
            "skill": ""
          },
          "spell": {
            "dc": ""
          }
        },
        "resources": {
          "legact": {
            "value": 0,
            "max": 0
          },
          "legres": {
            "value": 0,
            "max": 0
          },
          "lair": {
            "value": false,
            "initiative": null
          }
        },
        "tools": {}
      },
      "prototypeToken": {
        "name": "Ape",
        "displayName": 20,
        "actorLink": false,
        "width": 1,
        "height": 1,
        "lockRotation": false,
        "rotation": 0,
        "disposition": -1,
        "displayBars": 40,
        "bar1": {
          "attribute": "attributes.hp"
        },
        "bar2": {
          "attribute": null
        },
        "flags": {},
        "randomImg": false,
        "alpha": 1,
        "light": {
          "alpha": 1,
          "angle": 360,
          "bright": 0,
          "coloration": 1,
          "dim": 0,
          "luminosity": 0.5,
          "saturation": 0,
          "contrast": 0,
          "shadows": 0,
          "animation": {
            "speed": 5,
            "intensity": 5,
            "type": null,
            "reverse": false
          },
          "darkness": {
            "min": 0,
            "max": 1
          },
          "attenuation": 0.5,
          "color": null,
          "negative": false,
          "priority": 0
        },
        "texture": {
          "src": "systems/dnd5e/tokens/beast/Ape.webp",
          "tint": "#ffffff",
          "scaleX": 1.5,
          "scaleY": 1.5,
          "offsetX": 0,
          "offsetY": 0,
          "rotation": 0,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "fit": "contain",
          "alphaThreshold": 0.75
        },
        "sight": {
          "angle": 360,
          "enabled": false,
          "range": 0,
          "brightness": 1,
          "visionMode": "basic",
          "color": null,
          "attenuation": 0.1,
          "saturation": 0,
          "contrast": 0
        },
        "detectionModes": [],
        "appendNumber": false,
        "prependAdjective": false,
        "hexagonalShape": 0,
        "occludable": {
          "radius": 0
        },
        "ring": {
          "enabled": false,
          "colors": {
            "ring": null,
            "background": null
          },
          "effects": 1,
          "subject": {
            "scale": 1,
            "texture": null
          }
        }
      },
      "items": [
        {
          "_id": "hbxC3Wg3H8cSIvM0",
          "name": "Multiattack",
          "type": "feat",
          "img": "icons/skills/melee/blade-tips-triple-steel.webp",
          "system": {
            "description": {
              "value": "<p>The ape makes two fist attacks.</p>",
              "chat": ""
            },
            "source": {
              "custom": "",
              "book": "SRD 5.1",
              "page": "",
              "license": "CC-BY-4.0"
            },
            "activation": {
              "type": "action",
              "cost": 1,
              "condition": ""
            },
            "duration": {
              "value": "",
              "units": ""
            },
            "cover": null,
            "target": {
              "value": "",
              "width": null,
              "units": "",
              "type": "",
              "prompt": true
            },
            "range": {
              "value": null,
              "long": null,
              "units": ""
            },
            "uses": {
              "value": null,
              "max": "",
              "per": null,
              "recovery": "",
              "prompt": true
            },
            "consume": {
              "type": "",
              "target": null,
              "amount": null,
              "scale": false
            },
            "ability": "",
            "actionType": "",
            "chatFlavor": "",
            "critical": {
              "threshold": null,
              "damage": ""
            },
            "damage": {
              "parts": [],
              "versatile": ""
            },
            "formula": "",
            "save": {
              "ability": "",
              "dc": null,
              "scaling": "spell"
            },
            "type": {
              "value": "",
              "subtype": ""
            },
            "requirements": "",
            "recharge": {
              "value": null,
              "charged": false
            },
            "crewed": false,
            "properties": [],
            "attack": {
              "bonus": "",
              "flat": false
            },
            "enchantment": null,
            "summons": null,
            "prerequisites": {
              "level": null
            }
          },
          "effects": [],
          "folder": null,
          "sort": 0,
          "ownership": {
            "default": 0
          },
          "flags": {
            "core": {
              "sourceId": "Compendium.dnd5e.monsterfeatures.EqoLg8T8EHvhJgKE"
            }
          },
          "_stats": {
            "compendiumSource": "Compendium.dnd5e.monsterfeatures.EqoLg8T8EHvhJgKE",
            "duplicateSource": null,
            "coreVersion": "12.331",
            "systemId": "dnd5e",
            "systemVersion": "3.3.1",
            "createdTime": null,
            "modifiedTime": null,
            "lastModifiedBy": null
          }
        },
        {
          "_id": "jxC1VNaCf2VXlD6C",
          "name": "Fist",
          "type": "weapon",
          "img": "icons/magic/fire/flame-burning-fist-strike.webp",
          "system": {
            "description": {
              "value": "<section class=\"secret\">\n<p><em>Melee Weapon Attack:</em><strong>+5 to hit,</strong>, <strong>5 ft.,</strong> one target. Hit: <strong>6 (1d6 + 3) <em>bludgeoning damage</em></strong>.</p></section>\n<p>The Ape attacks with its Fist.</p>",
              "chat": ""
            },
            "source": {
              "custom": "",
              "book": "SRD 5.1",
              "page": "",
              "license": "CC-BY-4.0"
            },
            "quantity": 1,
            "weight": {
              "value": 0,
              "units": "lb"
            },
            "price": {
              "value": 0,
              "denomination": "gp"
            },
            "attunement": "",
            "equipped": true,
            "rarity": "",
            "identified": true,
            "activation": {
              "type": "action",
              "cost": 1,
              "condition": ""
            },
            "duration": {
              "value": "",
              "units": ""
            },
            "cover": null,
            "target": {
              "value": "",
              "width": null,
              "units": "",
              "type": "",
              "prompt": true
            },
            "range": {
              "value": 5,
              "long": null,
              "units": "ft"
            },
            "uses": {
              "value": null,
              "max": "",
              "per": null,
              "recovery": "",
              "prompt": true
            },
            "consume": {
              "type": "",
              "target": null,
              "amount": null,
              "scale": false
            },
            "ability": "str",
            "actionType": "mwak",
            "chatFlavor": "",
            "critical": {
              "threshold": null,
              "damage": ""
            },
            "damage": {
              "parts": [
                [
                  "1d6 + @mod",
                  "bludgeoning"
                ]
              ],
              "versatile": ""
            },
            "formula": "",
            "save": {
              "ability": "",
              "dc": null,
              "scaling": "spell"
            },
            "armor": {
              "value": 10
            },
            "hp": {
              "value": 0,
              "max": 0,
              "dt": null,
              "conditions": ""
            },
            "properties": [],
            "proficient": 1,
            "unidentified": {
              "description": ""
            },
            "type": {
              "value": "natural",
              "baseItem": ""
            },
            "container": null,
            "crewed": false,
            "attack": {
              "bonus": "",
              "flat": false
            },
            "attuned": false,
            "enchantment": null,
            "summons": null,
            "magicalBonus": null
          },
          "effects": [],
          "folder": null,
          "sort": 0,
          "ownership": {
            "default": 0
          },
          "flags": {},
          "_stats": {
            "compendiumSource": null,
            "duplicateSource": null,
            "coreVersion": "12.331",
            "systemId": "dnd5e",
            "systemVersion": "3.3.1",
            "createdTime": null,
            "modifiedTime": null,
            "lastModifiedBy": null
          }
        },
        {
          "_id": "NsTx3MUaYkEI2t8M",
          "name": "Rock",
          "type": "weapon",
          "img": "icons/magic/earth/projectile-stone-ball-brown.webp",
          "system": {
            "description": {
              "value": "<section class=\"secret\">\n<p>Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: <strong>6 (1d6 + 3) <em>bludgeoning damage</em></strong>.</p></section>\n<p>The Ape attacks with its Rock.</p>",
              "chat": ""
            },
            "source": {
              "custom": "",
              "book": "SRD 5.1",
              "page": "",
              "license": "CC-BY-4.0"
            },
            "quantity": 1,
            "weight": {
              "value": 0,
              "units": "lb"
            },
            "price": {
              "value": 0,
              "denomination": "gp"
            },
            "attunement": "",
            "equipped": true,
            "rarity": "",
            "identified": true,
            "activation": {
              "type": "action",
              "cost": 1,
              "condition": ""
            },
            "duration": {
              "value": "",
              "units": ""
            },
            "cover": null,
            "target": {
              "value": "",
              "width": null,
              "units": "",
              "type": "",
              "prompt": true
            },
            "range": {
              "value": 25,
              "long": 50,
              "units": "ft"
            },
            "uses": {
              "value": null,
              "max": "",
              "per": null,
              "recovery": "",
              "prompt": true
            },
            "consume": {
              "type": "",
              "target": null,
              "amount": null,
              "scale": false
            },
            "ability": "str",
            "actionType": "rwak",
            "chatFlavor": "",
            "critical": {
              "threshold": null,
              "damage": ""
            },
            "damage": {
              "parts": [
                [
                  "1d6 + @mod",
                  "bludgeoning"
                ]
              ],
              "versatile": ""
            },
            "formula": "",
            "save": {
              "ability": "",
              "dc": null,
              "scaling": "spell"
            },
            "armor": {
              "value": 10
            },
            "hp": {
              "value": 0,
              "max": 0,
              "dt": null,
              "conditions": ""
            },
            "properties": [
              "amm"
            ],
            "proficient": 1,
            "unidentified": {
              "description": ""
            },
            "type": {
              "value": "natural",
              "baseItem": ""
            },
            "container": null,
            "crewed": false,
            "attack": {
              "bonus": "",
              "flat": false
            },
            "attuned": false,
            "enchantment": null,
            "summons": null,
            "magicalBonus": null
          },
          "effects": [],
          "folder": null,
          "sort": 0,
          "ownership": {
            "default": 0
          },
          "flags": {},
          "_stats": {
            "compendiumSource": null,
            "duplicateSource": null,
            "coreVersion": "12.331",
            "systemId": "dnd5e",
            "systemVersion": "3.3.1",
            "createdTime": null,
            "modifiedTime": null,
            "lastModifiedBy": null
          }
        }
      ],
      "effects": [],
      "folder": null,
      "flags": {
        "exportSource": {
          "world": "5e-faerun-map",
          "system": "dnd5e",
          "coreVersion": "12.331",
          "systemVersion": "3.3.1"
        }
      },
      "_stats": {
        "compendiumSource": null,
        "duplicateSource": null,
        "coreVersion": "12.331",
        "systemId": "dnd5e",
        "systemVersion": "3.3.1",
        "createdTime": 1743294103864,
        "modifiedTime": 1743294316328,
        "lastModifiedBy": "DKL4ZKK80lUZFgSJ"
      },
      "_id": "MoqzrjLjj5mlMARQ",
      "sort": 0,
      "ownership": {
        "default": 0,
        "DKL4ZKK80lUZFgSJ": 3
      }
    }
  ]
}
```


