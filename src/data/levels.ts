// ============================================================
// LEVEL DATA - 8 hand-crafted circuit puzzle levels
// ============================================================

import type { LevelData } from '../types/game';

export const LEVELS: LevelData[] = [
  // ─────────────────────────────────────────────────────────────
  // LEVEL 1: Basic Signal Path (6×6, simple straight+corner)
  // Source: (0,0) → Target: (0,5)
  // Path: source(0,0)→straight(0,1)→straight(0,2)→straight(0,3)→straight(0,4)→target(0,5)
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Signal Calibration',
    subtitle: 'RESTORE PRIMARY POWER FLOW',
    gridSize: 6,
    sourceVoltage: 3,
    targetVoltage: 3,
    source: { row: 0, col: 0 },
    target: { row: 0, col: 5 },
    lockedTiles: [],
    inventory: [
      { type: 'straight', quantity: 4 },
      { type: 'corner', quantity: 2 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LEVEL 2: Multi-Turn Routing (6×6)
  // Source: (0,0) → Target: (5,5)
  // Path: source→right×2→corner→down×3→corner→right×2→target
  // straight(0,1), straight(0,2), corner-rotation270(0,3→1,3), 
  // straight(1,3), straight(2,3), corner(3,3→3,4), straight(3,5→no), 
  // Actually: (0,0)→(0,1)→(0,2)→corner(0,3)→(1,3)→(2,3)→(3,3)→corner(4,3)→(4,4)→(4,5)→corner(5,5)
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    name: 'Multi-Route Channel',
    subtitle: 'NAVIGATE THROUGH CIRCUIT JUNCTIONS',
    gridSize: 6,
    sourceVoltage: 3,
    targetVoltage: 3,
    source: { row: 0, col: 0 },
    target: { row: 5, col: 5 },
    lockedTiles: [
      // Pre-placed: straight going right at (0,1)
      { position: { row: 0, col: 1 }, type: 'straight', rotation: 90 },
    ],
    inventory: [
      { type: 'straight', quantity: 6 },
      { type: 'corner', quantity: 4 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LEVEL 3: Locked Pieces (6×6)
  // Source: (0,0) → Target: (5,0)
  // Solution path:
  //   (0,0)→corner(1,0,rot=0,top+right)→straight(1,1,rot=90,h)→corner(1,2,rot=90,right+bottom)
  //   →straight(2,2,rot=0)→straight(3,2,rot=0)→corner(4,2,rot=270,top+left)
  //   →straight(4,1,rot=90,h)→corner(4,0,rot=90,right+bottom)→target(5,0)
  //
  // Rotation logic (rotateConnections: top←left, right←top, bottom←right, left←bottom):
  //   corner base {T,R,F,F}: rot=0→top+right, rot=90→right+bottom, rot=180→bottom+left, rot=270→top+left
  //
  // Locked tiles: corner(1,0,rot=0), straight(2,2,rot=0), corner(4,2,rot=270), corner(4,0,rot=90)
  // Player places: straight(1,1), corner(1,2), straight(3,2), straight(4,1)
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    name: 'Fixed Network Nodes',
    subtitle: 'ROUTE AROUND PRE-INSTALLED COMPONENTS',
    gridSize: 6,
    sourceVoltage: 5,
    targetVoltage: 5,
    source: { row: 0, col: 0 },
    target: { row: 5, col: 0 },
    lockedTiles: [
      // Corner turning east at (1,0): top+right (receives from source above, exits right)
      { position: { row: 1, col: 0 }, type: 'corner', rotation: 0 },
      // Straight vertical through the middle column
      { position: { row: 2, col: 2 }, type: 'straight', rotation: 0 },   // top+bottom
      // Corner at (4,2): top+left (receives from top, exits left)
      { position: { row: 4, col: 2 }, type: 'corner', rotation: 270 },
      // Corner at (4,0): right+bottom (receives from right (4,1), exits down to target)
      // rot=90 → {top:F, right:T, bottom:T, left:F} = right+bottom ✓
      { position: { row: 4, col: 0 }, type: 'corner', rotation: 90 },
    ],
    inventory: [
      { type: 'straight', quantity: 3 },
      { type: 'corner', quantity: 2 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LEVEL 4: Long Route (7×7)
  // Source: (0,0) → Target: (6,6)
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    name: 'Extended Relay Network',
    subtitle: 'ESTABLISH LONG-RANGE POWER TRANSFER',
    gridSize: 7,
    sourceVoltage: 4,
    targetVoltage: 4,
    source: { row: 0, col: 0 },
    target: { row: 6, col: 6 },
    lockedTiles: [
      { position: { row: 0, col: 3 }, type: 'straight', rotation: 90 },
      { position: { row: 3, col: 3 }, type: 'cross', rotation: 0 },
      { position: { row: 6, col: 3 }, type: 'straight', rotation: 90 },
    ],
    inventory: [
      { type: 'straight', quantity: 8 },
      { type: 'corner', quantity: 6 },
      { type: 'tee', quantity: 2 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LEVEL 5: T-Junction Routing (6×6)
  // Source: (0,2) → Target: (5,2)
  // Uses T-junctions  
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    name: 'Junction Array',
    subtitle: 'MASTER THREE-WAY CIRCUIT BRANCHING',
    gridSize: 6,
    sourceVoltage: 6,
    targetVoltage: 6,
    source: { row: 0, col: 2 },
    target: { row: 5, col: 2 },
    lockedTiles: [
      { position: { row: 2, col: 2 }, type: 'tee', rotation: 0 },
      { position: { row: 2, col: 1 }, type: 'corner', rotation: 270 },
      { position: { row: 2, col: 3 }, type: 'corner', rotation: 180 },
    ],
    inventory: [
      { type: 'straight', quantity: 4 },
      { type: 'corner', quantity: 4 },
      { type: 'tee', quantity: 2 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LEVEL 6: Voltage Introduction (6×6)
  // Source 5V → Target 3V
  // Must route through a -2 modifier
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    name: 'Voltage Regulation',
    subtitle: 'CALIBRATE POWER OUTPUT TO SPECIFICATION',
    gridSize: 6,
    sourceVoltage: 5,
    targetVoltage: 3,
    source: { row: 0, col: 0 },
    target: { row: 5, col: 5 },
    lockedTiles: [
      // Locked voltage modifier: -2 at center
      { position: { row: 2, col: 2 }, type: 'voltage', rotation: 90, voltageModifier: -2 },
      { position: { row: 2, col: 3 }, type: 'straight', rotation: 0 },
    ],
    inventory: [
      { type: 'straight', quantity: 6 },
      { type: 'corner', quantity: 4 },
      { type: 'voltage', quantity: 1, voltageModifier: -2 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LEVEL 7: Multiple Voltage Modifiers (6×6)
  // Source 10V → Target 3V
  // Must route through specific modifiers
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    name: 'Precision Calibration',
    subtitle: 'BALANCE POSITIVE AND NEGATIVE CHARGE FIELDS',
    gridSize: 6,
    sourceVoltage: 10,
    targetVoltage: 3,
    source: { row: 0, col: 0 },
    target: { row: 5, col: 5 },
    lockedTiles: [
      { position: { row: 1, col: 1 }, type: 'voltage', rotation: 90, voltageModifier: -3 },
      { position: { row: 3, col: 2 }, type: 'voltage', rotation: 90, voltageModifier: -2 },
      { position: { row: 4, col: 4 }, type: 'voltage', rotation: 90, voltageModifier: -2 },
    ],
    inventory: [
      { type: 'straight', quantity: 5 },
      { type: 'corner', quantity: 5 },
      { type: 'voltage', quantity: 1, voltageModifier: -3 },
      { type: 'voltage', quantity: 1, voltageModifier: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // LEVEL 8: Complex Puzzle (7×7)
  // Source 12V → Target 5V  (need exactly -7V total from modifiers)
  //
  // Solution path (snake route):
  //   source(0,0) → corner(1,0,rot=0,top+right)
  //   → voltage(1,1,rot=0,-3V,left+right) → str(1,2) → str(1,3) → str(1,4) → str(1,5)
  //   → corner(1,6,rot=90,right+bottom)
  //   → str(2,6,rot=0) → corner(3,6,rot=180,bottom+left)
  //   → str(3,5) → voltage(3,4,rot=0,-2V,left+right) → str(3,3)
  //   → corner(3,2,rot=180,bottom+left)
  //   → str(4,2,rot=0) → corner(5,2,rot=0,top+right)
  //   → voltage(5,3,rot=0,-2V,left+right) → str(5,4) → str(5,5)
  //   → corner(5,6,rot=90,right+bottom) → target(6,6)
  //
  // Voltage: 12 - 3 - 2 - 2 = 5V ✓
  //
  // Locked: voltage(1,1,-3V), voltage(3,4,-2V), voltage(5,3,-2V), str(2,6), corner(3,6)
  // Player places: corner(1,0), str(1,2..1,5)×4, corner(1,6), corner(3,2),
  //                str(3,3), str(3,5), str(4,2), corner(5,2), str(5,4), str(5,5), corner(5,6)
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    name: 'Quantum Targeting System',
    subtitle: 'MAXIMUM COMPLEXITY — ROUTE THROUGH ALL SUBSYSTEMS',
    gridSize: 7,
    sourceVoltage: 12,
    targetVoltage: 5,
    source: { row: 0, col: 0 },
    target: { row: 6, col: 6 },
    lockedTiles: [
      // -3V modifier, left+right pass-through (voltage rot=0: left+right)
      { position: { row: 1, col: 1 }, type: 'voltage', rotation: 0, voltageModifier: -3 },
      // -2V modifier on the way back west
      { position: { row: 3, col: 4 }, type: 'voltage', rotation: 0, voltageModifier: -2 },
      // Straight vertical at (2,6) bridging the turn
      { position: { row: 2, col: 6 }, type: 'straight', rotation: 0 },
      // Corner turning south-to-west at (3,6)
      { position: { row: 3, col: 6 }, type: 'corner', rotation: 180 },
      // -2V modifier on southern branch
      { position: { row: 5, col: 3 }, type: 'voltage', rotation: 0, voltageModifier: -2 },
    ],
    inventory: [
      { type: 'straight', quantity: 10 },
      { type: 'corner', quantity: 6 },
    ],
  },
];

/**
 * Create an empty grid of given size
 */
export function createEmptyGrid(size: number): import('../types/game').Cell[][] {
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => ({
      row,
      col,
      type: 'empty' as const,
      locked: false,
      rotation: 0,
      energized: false,
      energizedProgress: 0,
    }))
  );
}

/**
 * Initialize a grid from level data
 */
export function initializeLevelGrid(level: LevelData): import('../types/game').Cell[][] {
  const grid = createEmptyGrid(level.gridSize);

  // Place source
  grid[level.source.row][level.source.col] = {
    row: level.source.row,
    col: level.source.col,
    type: 'source',
    locked: true,
    rotation: 0,
    energized: false,
    energizedProgress: 0,
  };

  // Place target
  grid[level.target.row][level.target.col] = {
    row: level.target.row,
    col: level.target.col,
    type: 'target',
    locked: true,
    rotation: 0,
    energized: false,
    energizedProgress: 0,
  };

  // Place locked tiles
  for (const locked of level.lockedTiles) {
    grid[locked.position.row][locked.position.col] = {
      row: locked.position.row,
      col: locked.position.col,
      type: locked.type,
      locked: true,
      rotation: locked.rotation,
      voltageModifier: locked.voltageModifier,
      energized: false,
      energizedProgress: 0,
    };
  }

  return grid;
}
