// ============================================================
// CIRCUIT TRAVERSAL - BFS/DFS path finding through the grid
// ============================================================

import type { Cell, Position } from '../types/game';
import {
  getCellConnections,
  getNeighbor,
  isInBounds,
  areCellsConnected,
  ALL_DIRECTIONS,
} from './circuitLogic';

export interface TraversalResult {
  connected: boolean;
  path: Position[];
  finalVoltage: number;
  reachedTarget: boolean;
}

/**
 * Traverse the circuit from source to target.
 * Uses BFS to find a path, respecting connection directions.
 */
export function traverseCircuit(
  grid: Cell[][],
  source: Position,
  target: Position,
  sourceVoltage: number
): TraversalResult {
  const gridSize = grid.length;
  const visited = new Set<string>();
  const posKey = (p: Position) => `${p.row},${p.col}`;

  // BFS queue entries: [position, path so far, current voltage]
  const queue: Array<{ pos: Position; path: Position[]; voltage: number }> = [
    { pos: source, path: [source], voltage: sourceVoltage },
  ];
  visited.add(posKey(source));

  while (queue.length > 0) {
    const { pos, path, voltage } = queue.shift()!;
    const currentCell = grid[pos.row][pos.col];
    const currentConns = getCellConnections(currentCell);

    for (const dir of ALL_DIRECTIONS) {
      if (!currentConns[dir]) continue;

      const neighborPos = getNeighbor(pos, dir);
      if (!isInBounds(neighborPos, gridSize)) continue;
      if (visited.has(posKey(neighborPos))) continue;

      const neighborCell = grid[neighborPos.row][neighborPos.col];
      if (neighborCell.type === 'empty' || neighborCell.type === 'blocked') continue;

      if (!areCellsConnected(currentCell, neighborCell, dir)) continue;

      visited.add(posKey(neighborPos));

      // Calculate voltage after passing through this tile
      let newVoltage = voltage;
      if (neighborCell.type === 'voltage' && neighborCell.voltageModifier !== undefined) {
        newVoltage += neighborCell.voltageModifier;
      }

      const newPath = [...path, neighborPos];

      // Check if we reached the target
      if (neighborPos.row === target.row && neighborPos.col === target.col) {
        return {
          connected: true,
          path: newPath,
          finalVoltage: newVoltage,
          reachedTarget: true,
        };
      }

      queue.push({ pos: neighborPos, path: newPath, voltage: newVoltage });
    }
  }

  return {
    connected: false,
    path: [],
    finalVoltage: sourceVoltage,
    reachedTarget: false,
  };
}

/**
 * Validate the full puzzle state
 */
export interface ValidationResult {
  status: 'success' | 'incomplete' | 'voltage_mismatch';
  path: Position[];
  actualVoltage: number;
}

export function validatePuzzle(
  grid: Cell[][],
  source: Position,
  target: Position,
  sourceVoltage: number,
  targetVoltage: number
): ValidationResult {
  const result = traverseCircuit(grid, source, target, sourceVoltage);

  if (!result.reachedTarget) {
    return {
      status: 'incomplete',
      path: result.path,
      actualVoltage: result.finalVoltage,
    };
  }

  if (result.finalVoltage !== targetVoltage) {
    return {
      status: 'voltage_mismatch',
      path: result.path,
      actualVoltage: result.finalVoltage,
    };
  }

  return {
    status: 'success',
    path: result.path,
    actualVoltage: result.finalVoltage,
  };
}
