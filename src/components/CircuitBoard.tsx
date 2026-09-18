import { useCallback, useMemo } from 'react';
import type { Cell, Position, InventoryItem } from '../types/game';
import { TileSVG } from './CircuitTile';

interface CircuitBoardProps {
  grid: Cell[][];
  gridSize: number;
  selectedCell: Position | null;
  selectedInventoryItem: InventoryItem | null;
  energizedPath: Position[];
  onCellClick: (pos: Position) => void;
  onCellRightClick: (pos: Position) => void;
}

/**
 * Builds a continuous SVG path string following the circuit routing from source to current leading tile
 */
function buildContinuousCircuitPath(path: Position[], cellSize: number = 80): string {
  if (path.length < 2) return '';

  const half = cellSize / 2;
  const getCenter = (p: Position) => ({
    x: p.col * cellSize + half,
    y: p.row * cellSize + half,
  });

  let d = '';

  for (let i = 0; i < path.length; i++) {
    const cur = path[i];
    const { x: cx, y: cy } = getCenter(cur);

    if (i === 0) {
      // Source node: start from center and extend towards the exit boundary
      const next = path[1];
      const exX = cx + (next.col - cur.col) * half;
      const exY = cy + (next.row - cur.row) * half;
      d += `M ${cx} ${cy} L ${exX} ${exY}`;
    } else if (i === path.length - 1) {
      // Current leading tile or final target
      const prev = path[i - 1];
      const enX = cx + (prev.col - cur.col) * half;
      const enY = cy + (prev.row - cur.row) * half;
      d += ` L ${enX} ${enY} L ${cx} ${cy}`;
    } else {
      // Intermediate tile: enter from prev, exit to next
      const prev = path[i - 1];
      const next = path[i + 1];

      const dRowIn = prev.row - cur.row;
      const dColIn = prev.col - cur.col;
      const dRowOut = next.row - cur.row;
      const dColOut = next.col - cur.col;

      const enX = cx + dColIn * half;
      const enY = cy + dRowIn * half;
      const exX = cx + dColOut * half;
      const exY = cy + dRowOut * half;

      // Check if straight line
      if (dRowIn === -dRowOut && dColIn === -dColOut) {
        d += ` L ${exX} ${exY}`;
      } else {
        // Corner turn: smooth quadratic bezier curve through tile center
        d += ` L ${enX} ${enY} Q ${cx} ${cy} ${exX} ${exY}`;
      }
    }
  }

  return d;
}

export function CircuitBoard({
  grid,
  gridSize,
  selectedCell,
  selectedInventoryItem,
  energizedPath,
  onCellClick,
  onCellRightClick,
}: CircuitBoardProps) {
  const energizedSet = useMemo(
    () => new Set(energizedPath.map(p => `${p.row},${p.col}`)),
    [energizedPath]
  );

  const cellSize = 80;
  const circuitPathD = useMemo(
    () => buildContinuousCircuitPath(energizedPath, cellSize),
    [energizedPath, cellSize]
  );

  const isCellSelected = useCallback(
    (pos: Position) => selectedCell?.row === pos.row && selectedCell?.col === pos.col,
    [selectedCell]
  );

  const getCellHoverClass = useCallback(
    (cell: Cell) => {
      if (!selectedInventoryItem) return '';
      if (cell.type === 'empty') return 'hover-valid';
      return 'hover-invalid';
    },
    [selectedInventoryItem]
  );

  // Position of the current leading pulse head
  const leadPos = energizedPath.length > 0 ? energizedPath[energizedPath.length - 1] : null;
  const leadCenter = leadPos
    ? { x: leadPos.col * cellSize + cellSize / 2, y: leadPos.row * cellSize + cellSize / 2 }
    : null;



  return (
    <div
      className={`circuit-board ${energizedPath.length > 1 ? 'is-energized' : ''}`}
      style={{
        gridTemplateColumns: `repeat(${gridSize}, var(--cell-size))`,
        gridTemplateRows: `repeat(${gridSize}, var(--cell-size))`,
      }}
    >
      {grid.map((row, ri) =>
        row.map((cell, ci) => {
          const pos = { row: ri, col: ci };
          const isEnergized = energizedSet.has(`${ri},${ci}`);
          const enrichedCell: Cell = { ...cell, energized: isEnergized };

          return (
            <div
              key={`${ri}-${ci}`}
              className={`grid-cell ${getCellHoverClass(cell)} ${isCellSelected(pos) ? 'selected' : ''}`}
              onClick={() => onCellClick(pos)}
              onContextMenu={(e) => {
                e.preventDefault();
                onCellRightClick(pos);
              }}
              data-row={ri}
              data-col={ci}
              title={
                cell.type !== 'empty'
                  ? `${cell.type.toUpperCase()}${cell.locked ? ' (LOCKED)' : ''} — R${cell.rotation}°`
                  : `[${ri},${ci}]`
              }
            >
              <div className="tile-wrapper">
                <TileSVG
                  cell={enrichedCell}
                  selected={isCellSelected(pos) && !cell.locked}
                  size={76}
                />
              </div>
            </div>
          );
        })
      )}

      {/* Dynamic Animated High-Voltage Electric Flow Layer */}
      {energizedPath.length > 0 && (
        <svg
          className="energy-flow-svg"
          style={{
            position: 'absolute',
            top: 4,
            left: 4,
            right: 4,
            bottom: 4,
            width: 'calc(100% - 8px)',
            height: 'calc(100% - 8px)',
            pointerEvents: 'none',
            zIndex: 25,
            overflow: 'visible',
          }}
          viewBox={`0 0 ${gridSize * cellSize} ${gridSize * cellSize}`}
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="laser-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="plasma-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="plasma-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#00ffff" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#00ff88" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="target-burst-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="35%" stopColor="#ffaa00" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ff5500" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff3300" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Continuous Glowing Laser Wire */}
          {circuitPathD && (
            <g>
              {/* Outer atmospheric aura */}
              <path
                d={circuitPathD}
                fill="none"
                stroke="rgba(0, 255, 136, 0.35)"
                strokeWidth={14}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#laser-glow)"
              />
              {/* Neon Green Conduit */}
              <path
                d={circuitPathD}
                fill="none"
                stroke="#00ff88"
                strokeWidth={5.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.9}
              />
              {/* High-speed animated electric pulse dashes */}
              <path
                d={circuitPathD}
                fill="none"
                stroke="#00ffff"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="12 18"
                className="electric-pulse-flow"
              />
              {/* Super-bright white core */}
              <path
                d={circuitPathD}
                fill="none"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.95}
              />
            </g>
          )}

          {/* Spark rings along intermediate nodes */}
          {energizedPath.map((p, idx) => {
            if (idx === 0 || idx === energizedPath.length - 1) return null;
            const cx = p.col * cellSize + cellSize / 2;
            const cy = p.row * cellSize + cellSize / 2;
            return (
              <g key={`spark-${idx}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={8}
                  fill="none"
                  stroke="#00ffff"
                  strokeWidth={1.5}
                  opacity={0.7}
                  className="spark-ring"
                />
                <circle cx={cx} cy={cy} r={3} fill="#ffffff" filter="url(#laser-glow)" />
              </g>
            );
          })}

          {/* Source node energy generator surge effect */}
          {energizedPath.length > 0 && (
            <g className="source-generator-burst">
              <circle
                cx={energizedPath[0].col * cellSize + cellSize / 2}
                cy={energizedPath[0].row * cellSize + cellSize / 2}
                r={24}
                fill="none"
                stroke="#00ff88"
                strokeWidth={2}
                opacity={0.8}
                className="generator-ring"
              />
              <circle
                cx={energizedPath[0].col * cellSize + cellSize / 2}
                cy={energizedPath[0].row * cellSize + cellSize / 2}
                r={12}
                fill="url(#plasma-gradient)"
                filter="url(#plasma-blur)"
              />
            </g>
          )}

          {/* Traveling Plasma Bolt Head */}
          {leadCenter && (
            <g transform={`translate(${leadCenter.x}, ${leadCenter.y})`} className="plasma-head-group">
              <circle r={20} fill="url(#plasma-gradient)" filter="url(#plasma-blur)" opacity={0.8} />
              <circle r={9} fill="#ffffff" filter="url(#laser-glow)" />
              <circle
                r={16}
                fill="none"
                stroke="#00ffff"
                strokeWidth={2}
                className="plasma-pulse-corona"
              />
            </g>
          )}

        </svg>
      )}
    </div>
  );
}

