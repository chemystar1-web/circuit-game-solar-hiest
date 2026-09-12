// ============================================================
// GAME TYPES - Circuit Calibration Puzzle
// ============================================================

export type Direction = 'top' | 'right' | 'bottom' | 'left';

export type TileType =
  | 'straight'
  | 'corner'
  | 'tee'
  | 'cross'
  | 'source'
  | 'target'
  | 'voltage'
  | 'empty'
  | 'blocked';

export interface TileConnections {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

export interface Cell {
  row: number;
  col: number;
  type: TileType;
  locked: boolean;
  rotation: number; // 0, 90, 180, 270
  voltageModifier?: number; // for voltage tiles: +/-
  energized?: boolean;
  energizedProgress?: number; // 0..1 for animation
}

export interface Position {
  row: number;
  col: number;
}

export interface InventoryItem {
  type: TileType;
  quantity: number;
  voltageModifier?: number;
}

export interface LevelData {
  id: number;
  name: string;
  subtitle: string;
  gridSize: number;
  sourceVoltage: number;
  targetVoltage: number;
  source: Position;
  target: Position;
  lockedTiles: Array<{
    position: Position;
    type: TileType;
    rotation: number;
    voltageModifier?: number;
  }>;
  inventory: InventoryItem[];
}

export interface GameState {
  currentLevel: number;
  grid: Cell[][];
  inventory: InventoryItem[];
  selectedInventoryItem: InventoryItem | null;
  selectedCell: Position | null;
  energizedPath: Position[];
  isAnimating: boolean;
  puzzleStatus: 'playing' | 'success' | 'voltage_mismatch' | 'incomplete';
  actualVoltage: number;
  showHelp: boolean;
  showSuccess: boolean;
}

export type GameAction =
  | { type: 'SELECT_INVENTORY'; item: InventoryItem }
  | { type: 'DESELECT' }
  | { type: 'PLACE_TILE'; position: Position }
  | { type: 'SELECT_CELL'; position: Position }
  | { type: 'REMOVE_TILE'; position: Position }
  | { type: 'ROTATE_CW' }
  | { type: 'ROTATE_CCW' }
  | { type: 'RESET_LEVEL' }
  | { type: 'NEXT_LEVEL' }
  | { type: 'GOTO_LEVEL'; level: number }
  | { type: 'UNDO' }
  | { type: 'SET_ENERGIZED'; path: Position[]; voltage: number }
  | { type: 'CLEAR_ENERGIZED' }
  | { type: 'SHOW_HELP' }
  | { type: 'HIDE_HELP' }
  | { type: 'SHOW_SUCCESS' }
  | { type: 'HIDE_SUCCESS' }
  | { type: 'SET_ANIMATING'; value: boolean };

export interface UndoRecord {
  grid: Cell[][];
  inventory: InventoryItem[];
}
