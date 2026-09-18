// ============================================================
// GAME STATE HOOK - Central state management
// ============================================================

import { useReducer } from 'react';
import type { GameState, GameAction, Cell, InventoryItem } from '../types/game';
import { LEVELS, initializeLevelGrid } from '../data/levels';

const MAX_UNDO = 50;

interface FullState extends GameState {
  undoStack: Array<{ grid: Cell[][]; inventory: InventoryItem[] }>;
}

function cloneGrid(grid: Cell[][]): Cell[][] {
  return grid.map(row => row.map(cell => ({ ...cell })));
}

function cloneInventory(inv: InventoryItem[]): InventoryItem[] {
  return inv.map(i => ({ ...i }));
}

function initLevel(levelIndex: number): FullState {
  const level = LEVELS[levelIndex];
  const grid = initializeLevelGrid(level);
  return {
    currentLevel: levelIndex,
    grid,
    inventory: cloneInventory(level.inventory),
    selectedInventoryItem: null,
    selectedCell: null,
    energizedPath: [],
    isAnimating: false,
    puzzleStatus: 'playing',
    actualVoltage: 0,
    showHelp: false,
    showSuccess: false,
    undoStack: [],
  };
}

function getNextRotation(r: number): number {
  return (r + 90) % 360;
}
function getPrevRotation(r: number): number {
  return (r + 270) % 360;
}

function reducer(state: FullState, action: GameAction): FullState {
  switch (action.type) {
    case 'SELECT_INVENTORY': {
      // If clicking selected inventory, deselect
      if (
        state.selectedInventoryItem?.type === action.item.type &&
        state.selectedInventoryItem?.voltageModifier === action.item.voltageModifier
      ) {
        return { ...state, selectedInventoryItem: null, selectedCell: null };
      }
      return { ...state, selectedInventoryItem: action.item, selectedCell: null };
    }

    case 'DESELECT': {
      return { ...state, selectedInventoryItem: null, selectedCell: null };
    }

    case 'SELECT_CELL': {
      const cell = state.grid[action.position.row][action.position.col];
      // If we have an inventory item selected, place it
      if (state.selectedInventoryItem && cell.type === 'empty') {
        return reducer(state, { type: 'PLACE_TILE', position: action.position });
      }
      // If clicked on a placed (non-locked) cell, select it
      if (cell.type !== 'empty' && cell.type !== 'blocked' && !cell.locked) {
        return { ...state, selectedCell: action.position, selectedInventoryItem: null };
      }
      // If clicked on empty with no selection, deselect
      return { ...state, selectedCell: null };
    }

    case 'PLACE_TILE': {
      if (!state.selectedInventoryItem) return state;
      const { row, col } = action.position;
      const cell = state.grid[row][col];
      if (cell.type !== 'empty') return state;
      const item = state.selectedInventoryItem;
      if (item.quantity <= 0) return state;

      // Save undo state
      const undoEntry = {
        grid: cloneGrid(state.grid),
        inventory: cloneInventory(state.inventory),
      };
      const newUndo = [...state.undoStack.slice(-MAX_UNDO + 1), undoEntry];

      // Build new grid
      const newGrid = cloneGrid(state.grid);
      newGrid[row][col] = {
        row, col,
        type: item.type,
        locked: false,
        rotation: 0,
        voltageModifier: item.voltageModifier,
        energized: false,
        energizedProgress: 0,
      };

      // Decrement inventory
      const newInventory = cloneInventory(state.inventory);
      const idx = newInventory.findIndex(
        i => i.type === item.type && i.voltageModifier === item.voltageModifier
      );
      if (idx >= 0) newInventory[idx] = { ...newInventory[idx], quantity: newInventory[idx].quantity - 1 };

      // Find updated item for selection state
      const updatedItem = newInventory[idx];
      const nextSelected = updatedItem && updatedItem.quantity > 0 ? updatedItem : null;

      return {
        ...state,
        grid: newGrid,
        inventory: newInventory,
        selectedInventoryItem: nextSelected,
        selectedCell: null,
        undoStack: newUndo,
        energizedPath: [],
        puzzleStatus: 'playing',
      };
    }

    case 'REMOVE_TILE': {
      const { row, col } = action.position;
      const cell = state.grid[row][col];
      if (cell.locked || cell.type === 'empty' || cell.type === 'blocked') return state;

      const undoEntry = {
        grid: cloneGrid(state.grid),
        inventory: cloneInventory(state.inventory),
      };
      const newUndo = [...state.undoStack.slice(-MAX_UNDO + 1), undoEntry];

      const newGrid = cloneGrid(state.grid);
      const removedType = cell.type;
      const removedVMod = cell.voltageModifier;

      newGrid[row][col] = {
        row, col, type: 'empty', locked: false, rotation: 0,
        energized: false, energizedProgress: 0,
      };

      const newInventory = cloneInventory(state.inventory);
      const idx = newInventory.findIndex(
        i => i.type === removedType && i.voltageModifier === removedVMod
      );
      if (idx >= 0) newInventory[idx] = { ...newInventory[idx], quantity: newInventory[idx].quantity + 1 };

      return {
        ...state,
        grid: newGrid,
        inventory: newInventory,
        selectedCell: null,
        undoStack: newUndo,
        energizedPath: [],
        puzzleStatus: 'playing',
      };
    }

    case 'ROTATE_CW': {
      // Rotate selected placed tile
      if (state.selectedCell) {
        const { row, col } = state.selectedCell;
        const cell = state.grid[row][col];
        if (cell.locked) return state;

        const undoEntry = { grid: cloneGrid(state.grid), inventory: cloneInventory(state.inventory) };
        const newUndo = [...state.undoStack.slice(-MAX_UNDO + 1), undoEntry];

        const newGrid = cloneGrid(state.grid);
        newGrid[row][col] = { ...cell, rotation: getNextRotation(cell.rotation) };

        return {
          ...state,
          grid: newGrid,
          undoStack: newUndo,
          energizedPath: [],
          puzzleStatus: 'playing',
        };
      }
      return state;
    }

    case 'ROTATE_CCW': {
      if (state.selectedCell) {
        const { row, col } = state.selectedCell;
        const cell = state.grid[row][col];
        if (cell.locked) return state;

        const undoEntry = { grid: cloneGrid(state.grid), inventory: cloneInventory(state.inventory) };
        const newUndo = [...state.undoStack.slice(-MAX_UNDO + 1), undoEntry];

        const newGrid = cloneGrid(state.grid);
        newGrid[row][col] = { ...cell, rotation: getPrevRotation(cell.rotation) };

        return {
          ...state,
          grid: newGrid,
          undoStack: newUndo,
          energizedPath: [],
          puzzleStatus: 'playing',
        };
      }
      return state;
    }

    case 'RESET_LEVEL': {
      return initLevel(state.currentLevel);
    }

    case 'NEXT_LEVEL': {
      const nextIdx = state.currentLevel + 1;
      if (nextIdx >= LEVELS.length) return state;
      return initLevel(nextIdx);
    }

    case 'GOTO_LEVEL': {
      return initLevel(action.level);
    }

    case 'UNDO': {
      if (state.undoStack.length === 0) return state;
      const newUndo = [...state.undoStack];
      const last = newUndo.pop()!;
      return {
        ...state,
        grid: last.grid,
        inventory: last.inventory,
        undoStack: newUndo,
        selectedCell: null,
        energizedPath: [],
        puzzleStatus: 'playing',
      };
    }

    case 'SET_ENERGIZED': {
      return {
        ...state,
        energizedPath: action.path,
        actualVoltage: action.voltage,
      };
    }

    case 'CLEAR_ENERGIZED': {
      return {
        ...state,
        energizedPath: [],
        actualVoltage: 0,
      };
    }

    case 'SHOW_HELP': return { ...state, showHelp: true };
    case 'HIDE_HELP': return { ...state, showHelp: false };
    case 'SHOW_SUCCESS': return { ...state, showSuccess: true };
    case 'HIDE_SUCCESS': return { ...state, showSuccess: false };
    case 'SET_ANIMATING': return { ...state, isAnimating: action.value };

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, undefined, () => initLevel(0));
  return { state, dispatch };
}
