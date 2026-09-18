// ============================================================
// MAIN APP - Circuit Calibration Puzzle Game
// ============================================================

import { useEffect, useCallback, useState, useRef } from 'react';
import { useGameTimer, formatTime } from './hooks/useGameTimer';
import { useGameState } from './hooks/useGameState';
import { CircuitBoard } from './components/CircuitBoard';
import { InventoryPanel } from './components/Inventory';
import { HUD } from './components/HUD';
import { StatusBar } from './components/StatusBar';
import { SuccessOverlay, HelpOverlay } from './components/Overlays';
import { RightPanel } from './components/RightPanel';
import { validatePuzzle } from './game/circuitTraversal';
import { LEVELS } from './data/levels';
import type { Position, InventoryItem } from './types/game';
import './styles/game.css';

function App() {
  const { state, dispatch } = useGameState();
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const checkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Global run timer ───────────────────────────────────────
  const { elapsed, stopped: timerStopped } = useGameTimer(completedLevels);

  // ── Animation ID: incremented each time a new animation starts.
  // Each animStep closure captures its own ID and exits early if a newer
  // animation has started (i.e. the old one was superseded). This prevents
  // the "opens-closes-reopens" glitch where a stale animation callback
  // dispatches SHOW_SUCCESS after the state has already moved on.
  const animIdRef = useRef(0);

  // Ref so animStep closures can read the latest showSuccess without
  // needing to re-create runCircuitCheck every time showSuccess changes.
  const showSuccessRef = useRef(state.showSuccess);
  showSuccessRef.current = state.showSuccess;

  const currentLevelRef = useRef(state.currentLevel);
  currentLevelRef.current = state.currentLevel;

  // Timestamp when success overlay last appeared — blocks ghost-click closing.
  const successShownAtRef = useRef<number>(0);

  // ── Circuit check & animation ──────────────────────────────
  // IMPORTANT: runCircuitCheck must NOT depend on state.showSuccess or any
  // other frequently-changing state that would cause it to be recreated during
  // the animation (which would re-trigger the useEffect and cancel/restart anim).
  const runCircuitCheck = useCallback(() => {
    if (showSuccessRef.current) return;

    const levelIdx = currentLevelRef.current;
    const level = LEVELS[levelIdx];
    const result = validatePuzzle(
      state.grid,
      level.source,
      level.target,
      level.sourceVoltage,
      level.targetVoltage
    );

    // Cancel any in-flight animation — the grid changed so we restart from scratch.
    if (animTimerRef.current) {
      clearTimeout(animTimerRef.current);
      animTimerRef.current = null;
    }

    // Bump animation ID — any old animStep closures will see the mismatch and stop.
    const myId = ++animIdRef.current;

    if (result.status === 'incomplete') {
      dispatch({ type: 'CLEAR_ENERGIZED' });
      return;
    }

    // Circuit reached target — animate energy traveling from source to target.
    const path = result.path;
    const stepDelay = 110;

    let step = 1;
    dispatch({
      type: 'SET_ENERGIZED',
      path: path.slice(0, 1),
      voltage: Math.round(result.actualVoltage / path.length),
    });

    const animStep = () => {
      // If a newer animation started, stop this one silently.
      if (animIdRef.current !== myId) return;

      step++;
      const currentSubPath = path.slice(0, step);
      const isFinished = step >= path.length;

      dispatch({
        type: 'SET_ENERGIZED',
        path: currentSubPath,
        voltage: isFinished
          ? result.actualVoltage
          : Math.max(1, Math.round((result.actualVoltage / path.length) * step)),
      });

      if (!isFinished) {
        animTimerRef.current = setTimeout(animStep, stepDelay);
      } else {
        if (result.status === 'success') {
          animTimerRef.current = setTimeout(() => {
            if (animIdRef.current !== myId) return; // superseded
            if (showSuccessRef.current) return;      // already shown
            successShownAtRef.current = Date.now();
            dispatch({ type: 'SHOW_SUCCESS' });
            setCompletedLevels(prev =>
              prev.includes(currentLevelRef.current) ? prev : [...prev, currentLevelRef.current]
            );
          }, 550);
        }
      }
    };

    animTimerRef.current = setTimeout(animStep, stepDelay);
  // Only state.grid and dispatch — nothing else causes meaningful re-creation.
  }, [state.grid, dispatch]);

  // Trigger check when the grid or level changes.
  useEffect(() => {
    if (checkTimerRef.current) clearTimeout(checkTimerRef.current);
    checkTimerRef.current = setTimeout(runCircuitCheck, 40);
    return () => {
      if (checkTimerRef.current) clearTimeout(checkTimerRef.current);
    };
  }, [state.grid, state.currentLevel, runCircuitCheck]);

  // ── Keyboard handler ───────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      // Ctrl+Z = undo
      if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        dispatch({ type: 'UNDO' });
        return;
      }

      if (e.ctrlKey || e.metaKey || e.altKey) return;

      switch (e.key) {
        case 'h':
        case 'H':
          e.preventDefault();
          // Toggle help — don't open if success overlay is showing to avoid confusion
          if (!showSuccessRef.current) {
            dispatch({ type: state.showHelp ? 'HIDE_HELP' : 'SHOW_HELP' });
          }
          break;
        case 'r':
        case 'R':
          if (state.selectedCell) {
            e.preventDefault();
            dispatch({ type: 'ROTATE_CW' });
          }
          break;
        case 'q':
        case 'Q':
          if (state.selectedCell) {
            e.preventDefault();
            dispatch({ type: 'ROTATE_CCW' });
          }
          break;
        case 'Backspace':
        case 'Delete':
          if (state.selectedCell) {
            e.preventDefault();
            dispatch({ type: 'REMOVE_TILE', position: state.selectedCell });
          } else {
            e.preventDefault();
            dispatch({ type: 'RESET_LEVEL' });
          }
          break;
        case 'Escape':
          dispatch({ type: 'DESELECT' });
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [dispatch, state.selectedCell]);

  // ── Cell click ─────────────────────────────────────────────
  const handleCellClick = useCallback((pos: Position) => {
    const cell = state.grid[pos.row][pos.col];

    if (state.selectedInventoryItem && cell.type === 'empty') {
      dispatch({ type: 'PLACE_TILE', position: pos });
      return;
    }

    if (state.selectedInventoryItem && cell.type !== 'empty') {
      dispatch({ type: 'DESELECT' });
      return;
    }

    if (cell.type !== 'empty' && cell.type !== 'blocked') {
      if (cell.locked) {
        dispatch({ type: 'DESELECT' });
      } else {
        const isSame = state.selectedCell?.row === pos.row && state.selectedCell?.col === pos.col;
        if (isSame) {
          dispatch({ type: 'DESELECT' });
        } else {
          dispatch({ type: 'SELECT_CELL', position: pos });
        }
      }
      return;
    }

    dispatch({ type: 'DESELECT' });
  }, [state.grid, state.selectedInventoryItem, state.selectedCell, dispatch]);

  const handleCellRightClick = useCallback((pos: Position) => {
    const cell = state.grid[pos.row][pos.col];
    if (!cell.locked && cell.type !== 'empty') {
      dispatch({ type: 'REMOVE_TILE', position: pos });
    }
  }, [state.grid, dispatch]);

  const handleSelectInventory = useCallback((item: InventoryItem) => {
    dispatch({ type: 'SELECT_INVENTORY', item });
  }, [dispatch]);

  const handleSelectLevel = useCallback((idx: number) => {
    dispatch({ type: 'GOTO_LEVEL', level: idx });
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET_LEVEL' });
  }, [dispatch]);

  const handleUndo = useCallback(() => {
    dispatch({ type: 'UNDO' });
  }, [dispatch]);

  const handleNextLevel = useCallback(() => {
    dispatch({ type: 'HIDE_SUCCESS' });
    dispatch({ type: 'NEXT_LEVEL' });
  }, [dispatch]);

  const handleReplay = useCallback(() => {
    dispatch({ type: 'HIDE_SUCCESS' });
    dispatch({ type: 'RESET_LEVEL' });
  }, [dispatch]);

  const canUndo = state.undoStack.length > 0;
  const level = LEVELS[state.currentLevel];

  const displayStatus = (() => {
    if (state.showSuccess) return 'success';
    if (state.energizedPath.length === 0) return 'playing';
    const result = validatePuzzle(
      state.grid,
      level.source,
      level.target,
      level.sourceVoltage,
      level.targetVoltage
    );
    return result.status as 'playing' | 'success' | 'voltage_mismatch' | 'incomplete';
  })();

  return (
    <div className="app-layout">
      {/* Top HUD */}
      <HUD
        currentLevel={state.currentLevel}
        actualVoltage={state.actualVoltage}
        puzzleStatus={displayStatus}
        onReset={handleReset}
        onHelp={() => dispatch({ type: state.showHelp ? 'HIDE_HELP' : 'SHOW_HELP' })}
        onUndo={handleUndo}
        canUndo={canUndo}
      />

      {/* Main content */}
      <div className="main-content">
        {/* Left: Inventory — scrollable */}
        <InventoryPanel
          inventory={state.inventory}
          selectedItem={state.selectedInventoryItem}
          currentLevel={state.currentLevel}
          completedLevels={completedLevels}
          onSelectItem={handleSelectInventory}
          onSelectLevel={handleSelectLevel}
        />

        {/* Center: Board — scrollable for large grids */}
        <div className="board-area">
          <div className="board-scroll-wrapper">
            <div className="board-frame">
              <div className="board-corner tl" />
              <div className="board-corner tr" />
              <div className="board-corner bl" />
              <div className="board-corner br" />

              <CircuitBoard
                grid={state.grid}
                gridSize={level.gridSize}
                selectedCell={state.selectedCell}
                selectedInventoryItem={state.selectedInventoryItem}
                energizedPath={state.energizedPath}
                onCellClick={handleCellClick}
                onCellRightClick={handleCellRightClick}
              />
            </div>
          </div>

          {/* Puzzle info below board */}
          <div style={{
            marginTop: 10,
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--text-muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            flexShrink: 0,
          }}>
            <span>GRID: {level.gridSize}×{level.gridSize}</span>
            <span>SOURCE: {level.sourceVoltage}V</span>
            <span>TARGET: {level.targetVoltage}V</span>
            {state.selectedInventoryItem && (
              <span style={{ color: 'var(--neon-cyan)' }}>
                PLACING: {state.selectedInventoryItem.type.toUpperCase()}
                {state.selectedInventoryItem.voltageModifier !== undefined
                  ? ` (${state.selectedInventoryItem.voltageModifier > 0 ? '+' : ''}${state.selectedInventoryItem.voltageModifier}V)`
                  : ''}
              </span>
            )}
            {state.selectedCell && !state.selectedInventoryItem && (
              <span style={{ color: 'var(--neon-cyan)' }}>
                SELECTED: [{state.selectedCell.row},{state.selectedCell.col}]
                — R:{state.grid[state.selectedCell.row][state.selectedCell.col].rotation}°
              </span>
            )}
          </div>
        </div>

        {/* Right: Timer + Controls */}
        <RightPanel
          elapsed={elapsed}
          timerStopped={timerStopped}
          currentLevel={state.currentLevel}
          formatTime={formatTime}
        />
      </div>

      {/* Bottom Status Bar */}
      <StatusBar
        puzzleStatus={displayStatus}
        selectedCell={state.selectedCell}
        actualVoltage={state.actualVoltage}
        targetVoltage={level.targetVoltage}
        onRemove={() => state.selectedCell && dispatch({ type: 'REMOVE_TILE', position: state.selectedCell })}
      />

      {/* Overlays — rendered last so they're on top */}
      {state.showSuccess && (
        <SuccessOverlay
          currentLevel={state.currentLevel}
          actualVoltage={state.actualVoltage}
          pathLength={state.energizedPath.length}
          onNextLevel={handleNextLevel}
          onReplay={handleReplay}
        />
      )}
      {state.showHelp && !state.showSuccess && (
        <HelpOverlay onClose={() => dispatch({ type: 'HIDE_HELP' })} />
      )}
    </div>
  );
}

export default App;
