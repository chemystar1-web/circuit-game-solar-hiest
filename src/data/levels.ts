// ============================================================
// LEVEL DEFINITIONS - 60 Hard Circuit Calibration Puzzles
// All levels verified with voltage modifiers & solvable paths
// ============================================================

import type { LevelData, Cell } from '../types/game';

export const LEVELS: LevelData[] = [
  {
    "id": 1,
    "name": "Substation Primary",
    "subtitle": "CALIBRATE INCOMING HIGH-VOLTAGE FEED",
    "gridSize": 6,
    "sourceVoltage": 13,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 9
      },
      {
        "type": "corner",
        "quantity": 5
      }
    ]
  },
  {
    "id": 2,
    "name": "Phase Modulation Matrix",
    "subtitle": "SYNCHRONIZE HARMONIC WAVEFORMS",
    "gridSize": 6,
    "sourceVoltage": 16,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 5
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 3,
          "col": 0
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 2
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 11
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 9
      }
    ]
  },
  {
    "id": 3,
    "name": "Ionization Conduit",
    "subtitle": "ROUTE FLUX THROUGH SECONDARY COILS",
    "gridSize": 6,
    "sourceVoltage": 11,
    "targetVoltage": 6,
    "source": {
      "row": 5,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 4,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 3,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 1
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "straight",
        "quantity": 5
      },
      {
        "type": "corner",
        "quantity": 14
      }
    ]
  },
  {
    "id": 4,
    "name": "Plasma Step-Down Relay",
    "subtitle": "ATTENUATE TRANSIENT POWER SURGES",
    "gridSize": 6,
    "sourceVoltage": 11,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 8
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 4
      }
    ]
  },
  {
    "id": 5,
    "name": "Flux Gate Calibration",
    "subtitle": "STABILIZE MAGNETIC BOTTLE POTENTIAL",
    "gridSize": 6,
    "sourceVoltage": 15,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 5
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 19
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 3
      }
    ]
  },
  {
    "id": 6,
    "name": "Superconducting Busbar",
    "subtitle": "BALANCE DUAL-BUS CURRENT DENSITY",
    "gridSize": 6,
    "sourceVoltage": 12,
    "targetVoltage": 5,
    "source": {
      "row": 5,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 5,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 3,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 9
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 7,
    "name": "Thermal Dissipation Core",
    "subtitle": "BYPASS OVERHEATED JUNCTION NODES",
    "gridSize": 6,
    "sourceVoltage": 15,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 11
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 4
      }
    ]
  },
  {
    "id": 8,
    "name": "Resonance Harmonizer",
    "subtitle": "DAMPEN PHASE-DRIFT OSCILLATIONS",
    "gridSize": 6,
    "sourceVoltage": 13,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 5
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 8
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 7
      }
    ]
  },
  {
    "id": 9,
    "name": "Photonic Waveguide Link",
    "subtitle": "ALIGN MULTI-FREQUENCY EMITTERS",
    "gridSize": 6,
    "sourceVoltage": 9,
    "targetVoltage": 4,
    "source": {
      "row": 5,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 4
        },
        "type": "corner",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 9
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 7
      }
    ]
  },
  {
    "id": 10,
    "name": "Inductive Choke Array",
    "subtitle": "REGULATE REACTIVE IMPEDANCE LOADS",
    "gridSize": 6,
    "sourceVoltage": 14,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 16
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "straight",
        "quantity": 3
      }
    ]
  },
  {
    "id": 11,
    "name": "Capacitive Bleeder Grid",
    "subtitle": "DISCHARGE PARASITIC CAPACITANCE",
    "gridSize": 6,
    "sourceVoltage": 18,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 5
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 13
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 6
      }
    ]
  },
  {
    "id": 12,
    "name": "Relativistic Shunt Relay",
    "subtitle": "ISOLATE HIGH-IMPEDANCE ARC CHANNELS",
    "gridSize": 6,
    "sourceVoltage": 9,
    "targetVoltage": 3,
    "source": {
      "row": 5,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 4
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 5
      },
      {
        "type": "straight",
        "quantity": 12
      }
    ]
  },
  {
    "id": 13,
    "name": "Quantum Tunneling Matrix",
    "subtitle": "MODULATE BARRIER PENETRATION BIAS",
    "gridSize": 6,
    "sourceVoltage": 11,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 17
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 5
      }
    ]
  },
  {
    "id": 14,
    "name": "Synchrotron Beam Deflector",
    "subtitle": "SYNCHRONIZE ACCELERATOR DIPOLES",
    "gridSize": 6,
    "sourceVoltage": 17,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 5
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 3,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 10
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "straight",
        "quantity": 6
      }
    ]
  },
  {
    "id": 15,
    "name": "Cryogenic Isolation Bus",
    "subtitle": "PREVENT SUPERCONDUCTING QUENCH",
    "gridSize": 6,
    "sourceVoltage": 11,
    "targetVoltage": 6,
    "source": {
      "row": 5,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 5,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 3
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "straight",
        "quantity": 5
      },
      {
        "type": "corner",
        "quantity": 12
      }
    ]
  },
  {
    "id": 16,
    "name": "Sub-Harmonic Resonator",
    "subtitle": "CANCEL INTERMODULATION DISTORTION",
    "gridSize": 6,
    "sourceVoltage": 12,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 7
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 9
      }
    ]
  },
  {
    "id": 17,
    "name": "Galvanic Barrier Decoupler",
    "subtitle": "ELIMINATE GROUND-LOOP INTERFERENCE",
    "gridSize": 6,
    "sourceVoltage": 15,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 5
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 5,
          "col": 4
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 3,
          "col": 2
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 1
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 17
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 5
      }
    ]
  },
  {
    "id": 18,
    "name": "Dielectric Breakdown Shield",
    "subtitle": "REINFORCE CRITICAL INSULATION PATH",
    "gridSize": 6,
    "sourceVoltage": 10,
    "targetVoltage": 5,
    "source": {
      "row": 5,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 13
      },
      {
        "type": "straight",
        "quantity": 4
      }
    ]
  },
  {
    "id": 19,
    "name": "Tachyon Flux Commutator",
    "subtitle": "BALANCE REVERSED-POLARITY SURGES",
    "gridSize": 6,
    "sourceVoltage": 14,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 7
      },
      {
        "type": "corner",
        "quantity": 12
      }
    ]
  },
  {
    "id": 20,
    "name": "Bifurcated Power Splitter",
    "subtitle": "EQUALIZE DUAL-LOAD DRAW CHANNELS",
    "gridSize": 6,
    "sourceVoltage": 14,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 5
    },
    "target": {
      "row": 5,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "corner",
        "quantity": 6
      },
      {
        "type": "straight",
        "quantity": 2
      }
    ]
  },
  {
    "id": 21,
    "name": "Neutrino Siphon Circuit",
    "subtitle": "EXTRACTION VECTOR STABILIZATION",
    "gridSize": 7,
    "sourceVoltage": 11,
    "targetVoltage": 4,
    "source": {
      "row": 6,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 6,
          "col": 4
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 11
      },
      {
        "type": "straight",
        "quantity": 3
      }
    ]
  },
  {
    "id": 22,
    "name": "Anomalous Wardenclyffe Array",
    "subtitle": "RESONANT LONG-DISTANCE TRANSMISSION",
    "gridSize": 7,
    "sourceVoltage": 14,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 18
      },
      {
        "type": "straight",
        "quantity": 13
      }
    ]
  },
  {
    "id": 23,
    "name": "Tokamak Poloidal Injector",
    "subtitle": "MAINTAIN CONFINEMENT FIELD SYMMETRY",
    "gridSize": 7,
    "sourceVoltage": 16,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 6
    },
    "target": {
      "row": 6,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 6
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 2,
          "col": 6
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "corner",
        "quantity": 14
      },
      {
        "type": "straight",
        "quantity": 5
      }
    ]
  },
  {
    "id": 24,
    "name": "Optical Isolator Bank",
    "subtitle": "PREVENT REFLECTIVE LASER BACKFIRE",
    "gridSize": 7,
    "sourceVoltage": 8,
    "targetVoltage": 3,
    "source": {
      "row": 6,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 5,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "straight",
        "quantity": 6
      },
      {
        "type": "corner",
        "quantity": 11
      }
    ]
  },
  {
    "id": 25,
    "name": "Superradiance Amplifier",
    "subtitle": "INDUCED EMISSION COHERENCE LOCK",
    "gridSize": 7,
    "sourceVoltage": 13,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 0
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "corner",
        "rotation": 180
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 9
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 26,
    "name": "Magnetohydrodynamic Core",
    "subtitle": "CONDUCTING FLUID VOLTAGE EXTRACTION",
    "gridSize": 7,
    "sourceVoltage": 17,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 6
    },
    "target": {
      "row": 6,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 13
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 3
      }
    ]
  },
  {
    "id": 27,
    "name": "Kerr Cell Shutter Matrix",
    "subtitle": "MICROSECOND POLARIZATION SWITCHING",
    "gridSize": 7,
    "sourceVoltage": 12,
    "targetVoltage": 6,
    "source": {
      "row": 6,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 16
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 12
      }
    ]
  },
  {
    "id": 28,
    "name": "Peltier Cascading Array",
    "subtitle": "EXTREME THERMAL GRADIENT ISOLATION",
    "gridSize": 7,
    "sourceVoltage": 10,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "corner",
        "quantity": 16
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 29,
    "name": "Josephson Junction Lattice",
    "subtitle": "QUANTUM VOLTAGE STANDARD LOCK",
    "gridSize": 7,
    "sourceVoltage": 16,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 6
    },
    "target": {
      "row": 6,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "corner",
        "rotation": 180
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 13
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 7
      }
    ]
  },
  {
    "id": 30,
    "name": "Spintronic Valve Cluster",
    "subtitle": "PRECESSION-CONTROLLED ELECTRON STEERING",
    "gridSize": 7,
    "sourceVoltage": 10,
    "targetVoltage": 5,
    "source": {
      "row": 6,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 9
      },
      {
        "type": "straight",
        "quantity": 4
      }
    ]
  },
  {
    "id": 31,
    "name": "Piezoelectric Feedback Loop",
    "subtitle": "STRAIN-INDUCED CHARGE COMPENSATION",
    "gridSize": 7,
    "sourceVoltage": 15,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 8
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "straight",
        "quantity": 7
      }
    ]
  },
  {
    "id": 32,
    "name": "Barkhausen Jitter Filter",
    "subtitle": "SUPPRESS DOMAIN-WALL NOISE BURSTS",
    "gridSize": 7,
    "sourceVoltage": 14,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 6
    },
    "target": {
      "row": 6,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 4
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 16
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 7
      }
    ]
  },
  {
    "id": 33,
    "name": "Metamaterial Invisibility Bus",
    "subtitle": "BEND EM FIELD AROUND FAILED SECTORS",
    "gridSize": 7,
    "sourceVoltage": 9,
    "targetVoltage": 4,
    "source": {
      "row": 6,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 6,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "straight",
        "quantity": 17
      },
      {
        "type": "corner",
        "quantity": 17
      }
    ]
  },
  {
    "id": 34,
    "name": "Cherenkov Radiation Damper",
    "subtitle": "THRESHOLD VELOCITY SHOCK ABSORPTION",
    "gridSize": 7,
    "sourceVoltage": 13,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "corner",
        "quantity": 13
      },
      {
        "type": "straight",
        "quantity": 5
      }
    ]
  },
  {
    "id": 35,
    "name": "Faraday Rotator Channel",
    "subtitle": "NON-RECIPROCAL SIGNAL ISOLATION",
    "gridSize": 7,
    "sourceVoltage": 17,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 6
    },
    "target": {
      "row": 6,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 6
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "corner",
        "rotation": 180
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 17
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 6
      }
    ]
  },
  {
    "id": 36,
    "name": "Graphene Nanoribbon Grid",
    "subtitle": "BALLISTIC ELECTRON TRANSPORT ROUTE",
    "gridSize": 7,
    "sourceVoltage": 10,
    "targetVoltage": 3,
    "source": {
      "row": 6,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 10
      },
      {
        "type": "straight",
        "quantity": 3
      }
    ]
  },
  {
    "id": 37,
    "name": "Stirling Cryo-Cooler Circuit",
    "subtitle": "RESTORE LOW-TEMPERATURE CONTINUITY",
    "gridSize": 7,
    "sourceVoltage": 13,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "corner",
        "rotation": 180
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 6
      },
      {
        "type": "corner",
        "quantity": 15
      }
    ]
  },
  {
    "id": 38,
    "name": "Van der Waals Heterojunction",
    "subtitle": "INTERLAYER TUNNELING RESISTANCE BIAS",
    "gridSize": 7,
    "sourceVoltage": 15,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 6
    },
    "target": {
      "row": 6,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 6,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 19
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 9
      }
    ]
  },
  {
    "id": 39,
    "name": "Casimir Cavity Attenuator",
    "subtitle": "VACUUM FLUCTUATION SUPPRESSION",
    "gridSize": 7,
    "sourceVoltage": 11,
    "targetVoltage": 6,
    "source": {
      "row": 6,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "corner",
        "quantity": 10
      },
      {
        "type": "straight",
        "quantity": 6
      }
    ]
  },
  {
    "id": 40,
    "name": "Bloch Oscillation Waveguide",
    "subtitle": "LATTICE-ACCELERATED DRIFT STABILIZER",
    "gridSize": 7,
    "sourceVoltage": 12,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 6,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 21
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "straight",
        "quantity": 6
      }
    ]
  },
  {
    "id": 41,
    "name": "Super-Toroidal Stator Loop",
    "subtitle": "HIGH-FREQUENCY ROTOR EXCITATION",
    "gridSize": 8,
    "sourceVoltage": 16,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 7
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 6
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 3,
          "col": 2
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 12
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 5
      }
    ]
  },
  {
    "id": 42,
    "name": "Dark Matter Scintillator",
    "subtitle": "WIMP DETECTION VOLTAGE THRESHOLD",
    "gridSize": 8,
    "sourceVoltage": 11,
    "targetVoltage": 5,
    "source": {
      "row": 7,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 7,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 7,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 5,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 6,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 7,
          "col": 6
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 6
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 14
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 43,
    "name": "Antimatter Containment Ring",
    "subtitle": "MAGNETIC TRAP VOLTAGE REDUNDANCY",
    "gridSize": 8,
    "sourceVoltage": 13,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 7,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 0,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 3,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 7,
          "col": 3
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "corner",
        "rotation": 180
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 10
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 10
      }
    ]
  },
  {
    "id": 44,
    "name": "Zero-Point Energy Extractor",
    "subtitle": "SUB-QUANTUM HARVESTING REGULATOR",
    "gridSize": 8,
    "sourceVoltage": 15,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 7
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 6
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 3,
          "col": 6
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 7
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 5,
          "col": 2
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 0,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 1
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 5,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 7,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 25
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "straight",
        "quantity": 15
      }
    ]
  },
  {
    "id": 45,
    "name": "Graviton Coupling Network",
    "subtitle": "LOCAL METRIC STABILIZATION CIRCUIT",
    "gridSize": 8,
    "sourceVoltage": 9,
    "targetVoltage": 4,
    "source": {
      "row": 7,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 5,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 2
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 1
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 9
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 7
      }
    ]
  },
  {
    "id": 46,
    "name": "Wormhole Throat Stabilizer",
    "subtitle": "EXOTIC MATTER INJECTION CONTROLLER",
    "gridSize": 8,
    "sourceVoltage": 14,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 7,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 3,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 0,
          "col": 6
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 3,
          "col": 7
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 5,
          "col": 7
        },
        "type": "corner",
        "rotation": 180
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 15
      },
      {
        "type": "straight",
        "quantity": 10
      }
    ]
  },
  {
    "id": 47,
    "name": "Chronotopological Loop",
    "subtitle": "CAUSALITY-PRESERVING CURRENT DELAY",
    "gridSize": 8,
    "sourceVoltage": 17,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 7
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 7
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 2,
          "col": 7
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 3
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 6,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 2
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 2,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "corner",
        "quantity": 9
      },
      {
        "type": "straight",
        "quantity": 13
      }
    ]
  },
  {
    "id": 48,
    "name": "Hyperdimensional Interlink",
    "subtitle": "FOURTH-SPATIAL-AXIS BALANCING",
    "gridSize": 8,
    "sourceVoltage": 8,
    "targetVoltage": 3,
    "source": {
      "row": 7,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 5,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 7,
          "col": 6
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 6
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 7
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 1,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 15
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 49,
    "name": "String Resonance Harmonic",
    "subtitle": "CALIBRATE VIBRATIONAL TENSION MODES",
    "gridSize": 8,
    "sourceVoltage": 12,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 7,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 5
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "corner",
        "quantity": 15
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 50,
    "name": "Cosmic Ray Deflection Grid",
    "subtitle": "HIGH-ALTITUDE IONIZING SHIELD",
    "gridSize": 8,
    "sourceVoltage": 16,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 7
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 6
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 7
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 3,
          "col": 7
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 7
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 3,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 0,
          "col": 1
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 7,
          "col": 2
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 19
      },
      {
        "type": "straight",
        "quantity": 9
      }
    ]
  },
  {
    "id": 51,
    "name": "Micro-Singularity Governor",
    "subtitle": "HAWKING EMISSION RATE REGULATION",
    "gridSize": 8,
    "sourceVoltage": 13,
    "targetVoltage": 6,
    "source": {
      "row": 7,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 5,
          "col": 6
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 2,
          "col": 7
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 0,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 12
      },
      {
        "type": "straight",
        "quantity": 11
      }
    ]
  },
  {
    "id": 52,
    "name": "Planar Inductance Matrix",
    "subtitle": "SURFACE CURRENT DISTRIBUTION BALANCE",
    "gridSize": 8,
    "sourceVoltage": 12,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 7,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 0,
          "col": 6
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 3,
          "col": 7
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 6,
          "col": 6
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 14
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 53,
    "name": "Non-Abelian Anyon Switch",
    "subtitle": "TOPOLOGICAL BRAIDING INTERCONNECT",
    "gridSize": 8,
    "sourceVoltage": 14,
    "targetVoltage": 4,
    "source": {
      "row": 0,
      "col": 7
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 6
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 0,
          "col": 5
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 3,
          "col": 6
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 2,
          "col": 7
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 7
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 6
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 5
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 4
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 2,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "voltage",
        "quantity": 2,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "corner",
        "quantity": 17
      },
      {
        "type": "straight",
        "quantity": 15
      }
    ]
  },
  {
    "id": 54,
    "name": "Dirac Semi-Metal Conduit",
    "subtitle": "MASSLESS FERMION SPEED ROUTING",
    "gridSize": 8,
    "sourceVoltage": 10,
    "targetVoltage": 5,
    "source": {
      "row": 7,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 1
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 7,
          "col": 3
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 7,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 5
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 6
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 10
      },
      {
        "type": "straight",
        "quantity": 9
      }
    ]
  },
  {
    "id": 55,
    "name": "Entanglement Teleportation Bus",
    "subtitle": "BELL-STATE COMPATIBILITY MATRIX",
    "gridSize": 8,
    "sourceVoltage": 15,
    "targetVoltage": 6,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 7,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 0
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 0
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 3
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 1,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 7
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 2
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 4
        },
        "type": "corner",
        "rotation": 90
      },
      {
        "position": {
          "row": 6,
          "col": 6
        },
        "type": "corner",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 32
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -4
      },
      {
        "type": "straight",
        "quantity": 8
      }
    ]
  },
  {
    "id": 56,
    "name": "Solar Flare Hardened Bus",
    "subtitle": "CORONAL MASS EJECTION RESISTOR",
    "gridSize": 8,
    "sourceVoltage": 15,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 7
    },
    "target": {
      "row": 7,
      "col": 0
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 6
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 0,
          "col": 5
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 2,
          "col": 5
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 4,
          "col": 3
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 0
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 6,
          "col": 3
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 7,
          "col": 4
        },
        "type": "corner",
        "rotation": 270
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 9
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "straight",
        "quantity": 11
      }
    ]
  },
  {
    "id": 57,
    "name": "Axion Dark-Sector Coupler",
    "subtitle": "PRIMAKOFF EFFECT VOLTAGE TRACE",
    "gridSize": 8,
    "sourceVoltage": 10,
    "targetVoltage": 4,
    "source": {
      "row": 7,
      "col": 0
    },
    "target": {
      "row": 0,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 6,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -4
      },
      {
        "position": {
          "row": 5,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 5,
          "col": 2
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 5,
          "col": 6
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 5
        },
        "type": "corner",
        "rotation": 0
      },
      {
        "position": {
          "row": 3,
          "col": 6
        },
        "type": "corner",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 10
      },
      {
        "type": "straight",
        "quantity": 9
      }
    ]
  },
  {
    "id": 58,
    "name": "Unified Field Calibration",
    "subtitle": "FINAL MULTI-DISCIPLINARY COHERENCE",
    "gridSize": 8,
    "sourceVoltage": 12,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 7,
      "col": 7
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 1,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "corner",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 0
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 4,
          "col": 2
        },
        "type": "corner",
        "rotation": 180
      },
      {
        "position": {
          "row": 6,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      },
      {
        "position": {
          "row": 4,
          "col": 6
        },
        "type": "straight",
        "rotation": 0
      },
      {
        "position": {
          "row": 5,
          "col": 7
        },
        "type": "straight",
        "rotation": 0
      }
    ],
    "inventory": [
      {
        "type": "corner",
        "quantity": 15
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -2
      },
      {
        "type": "straight",
        "quantity": 7
      }
    ]
  },
  {
    "id": 59,
    "name": "Precision Calibration",
    "subtitle": "BALANCE POSITIVE AND NEGATIVE CHARGE FIELDS",
    "gridSize": 6,
    "sourceVoltage": 10,
    "targetVoltage": 3,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 5,
      "col": 5
    },
    "lockedTiles": [
      {
        "position": {
          "row": 1,
          "col": 1
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 3,
          "col": 2
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      }
    ],
    "inventory": [
      {
        "type": "straight",
        "quantity": 5
      },
      {
        "type": "corner",
        "quantity": 5
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -3
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": 1
      }
    ]
  },
  {
    "id": 60,
    "name": "Quantum Targeting System",
    "subtitle": "MAXIMUM COMPLEXITY — ROUTE THROUGH ALL SUBSYSTEMS",
    "gridSize": 7,
    "sourceVoltage": 12,
    "targetVoltage": 5,
    "source": {
      "row": 0,
      "col": 0
    },
    "target": {
      "row": 6,
      "col": 6
    },
    "lockedTiles": [
      {
        "position": {
          "row": 0,
          "col": 2
        },
        "type": "voltage",
        "rotation": 0,
        "voltageModifier": -3
      },
      {
        "position": {
          "row": 2,
          "col": 2
        },
        "type": "cross",
        "rotation": 0
      },
      {
        "position": {
          "row": 2,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 4,
          "col": 1
        },
        "type": "tee",
        "rotation": 270
      },
      {
        "position": {
          "row": 4,
          "col": 4
        },
        "type": "voltage",
        "rotation": 90,
        "voltageModifier": -2
      },
      {
        "position": {
          "row": 6,
          "col": 4
        },
        "type": "straight",
        "rotation": 90
      }
    ],
    "inventory": [
      {
        "type": "straight",
        "quantity": 8
      },
      {
        "type": "corner",
        "quantity": 6
      },
      {
        "type": "tee",
        "quantity": 2
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": -1
      },
      {
        "type": "voltage",
        "quantity": 1,
        "voltageModifier": 1
      }
    ]
  }
];

export function createEmptyGrid(size: number): Cell[][] {
  return Array.from({ length: size }, (_, r) =>
    Array.from({ length: size }, (_, c) => ({
      row: r,
      col: c,
      type: 'empty',
      locked: false,
      rotation: 0,
      energized: false,
      energizedProgress: 0,
    }))
  );
}

export function initializeLevelGrid(level: LevelData): Cell[][] {
  const grid = createEmptyGrid(level.gridSize);

  grid[level.source.row][level.source.col] = {
    row: level.source.row,
    col: level.source.col,
    type: 'source',
    locked: true,
    rotation: 0,
    energized: false,
    energizedProgress: 0,
  };

  grid[level.target.row][level.target.col] = {
    row: level.target.row,
    col: level.target.col,
    type: 'target',
    locked: true,
    rotation: 0,
    energized: false,
    energizedProgress: 0,
  };

  for (const t of level.lockedTiles) {
    grid[t.position.row][t.position.col] = {
      row: t.position.row,
      col: t.position.col,
      type: t.type,
      locked: true,
      rotation: t.rotation,
      voltageModifier: t.voltageModifier,
      energized: false,
      energizedProgress: 0,
    };
  }

  return grid;
}
