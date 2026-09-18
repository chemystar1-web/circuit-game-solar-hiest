// ============================================================
// CIRCUIT LOGIC - Connection system and tile rotations
// ============================================================

import type { TileType, Direction, TileConnections, Cell, Position } from '../types/game';

// Base connections for each tile type (at rotation 0)
export const BASE_CONNECTIONS: Record<TileType, TileConnections> = {
  straight: { top: true, right: false, bottom: true, left: false },
  corner: { top: true, right: true, bottom: false, left: false },
  tee: { top: true, right: true, bottom: false, left: true },
  cross: { top: true, right: true, bottom: true, left: true },
  source: { top: true, right: true, bottom: true, left: true },
  target: { top: true, right: true, bottom: true, left: true },
  voltage: { top: false, right: true, bottom: false, left: true },
  empty: { top: false, right: false, bottom: false, left: false },
  blocked: { top: false, right: false, bottom: false, left: false },
};

/**
 * Rotate a connections object by 90 degrees clockwise N times
 */
export function rotateConnections(conn: TileConnections, rotation: number): TileConnections {
  const steps = ((rotation / 90) % 4 + 4) % 4;
  let c = { ...conn };
  for (let i = 0; i < steps; i++) {
    c = {
      top: c.left,       // From left to top is CCW! Clockwise means what was at top goes to right, so new top comes from left!
      right: c.top,      // new right comes from old top
      bottom: c.right,   // new bottom comes from old right
      left: c.bottom,    // new left comes from old bottom
    };
  }
  return c;
}

/**
 * Get the active connections for a cell given its type and rotation
 */
export function getCellConnections(cell: Cell): TileConnections {
  if (cell.type === 'empty' || cell.type === 'blocked') {
    return { top: false, right: false, bottom: false, left: false };
  }
  const base = BASE_CONNECTIONS[cell.type];
  return rotateConnections(base, cell.rotation);
}

/**
 * Get the opposite direction
 */
export function opposite(dir: Direction): Direction {
  const map: Record<Direction, Direction> = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  };
  return map[dir];
}

/**
 * Get the neighbor position in a direction
 */
export function getNeighbor(pos: Position, dir: Direction): Position {
  switch (dir) {
    case 'top': return { row: pos.row - 1, col: pos.col };
    case 'bottom': return { row: pos.row + 1, col: pos.col };
    case 'left': return { row: pos.row, col: pos.col - 1 };
    case 'right': return { row: pos.row, col: pos.col + 1 };
  }
}

/**
 * Check if a position is within grid bounds
 */
export function isInBounds(pos: Position, gridSize: number): boolean {
  return pos.row >= 0 && pos.row < gridSize && pos.col >= 0 && pos.col < gridSize;
}

/**
 * Check if two cells are mutually connected in a direction
 */
export function areCellsConnected(
  fromCell: Cell,
  toCell: Cell,
  direction: Direction
): boolean {
  const fromConn = getCellConnections(fromCell);
  const toConn = getCellConnections(toCell);
  return fromConn[direction] && toConn[opposite(direction)];
}

export const ALL_DIRECTIONS: Direction[] = ['top', 'right', 'bottom', 'left'];
