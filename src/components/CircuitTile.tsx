// ============================================================
// CIRCUIT TILE SVG RENDERER
// Renders each tile type as SVG paths
// ============================================================

import type { ReactNode } from 'react';
import type { Cell, TileConnections } from '../types/game';
import { BASE_CONNECTIONS } from '../game/circuitLogic';

interface TileSVGProps {
  cell: Cell;
  size?: number;
  selected?: boolean;
  preview?: boolean;
}

// Colors
const COLOR = {
  bg: '#0c1a26',
  bgLocked: '#091318',
  bgSource: '#061a10',
  bgTarget: '#1a0c06',
  trackInactive: '#1a3a4a',
  trackActive: '#00ff88',
  trackSource: '#00ff88',
  trackTarget: '#ff8c00',
  trackVoltagePos: '#00cc88',
  trackVoltageNeg: '#cc3344',
  corner: '#1e3a4e',
  cornerLocked: '#182e3e',
  border: '#1e4060',
  borderLocked: '#142530',
  borderSource: '#005533',
  borderTarget: '#553300',
  glowGreen: '#00ff88',
  glowOrange: '#ff8c00',
  nodeGreen: '#00ff88',
  nodeOrange: '#ff8c00',
  dot: '#0d2030',
};

const TRACK = {
  stroke: 3,
  cornerRadius: 8,
};

// SVG helpers
function trackPath(connections: TileConnections, size: number, isActive: boolean): ReactNode[] {
  const c = size / 2;
  const e = size - 6;
  const pathElements: ReactNode[] = [];
  const color = isActive ? COLOR.trackActive : COLOR.trackInactive;

  if (connections.top && connections.bottom && !connections.left && !connections.right) {
    // Straight vertical
    pathElements.push(
      <line key="v" x1={c} y1={6} x2={c} y2={e} stroke={color} strokeWidth={TRACK.stroke} strokeLinecap="round" />
    );
  } else if (connections.left && connections.right && !connections.top && !connections.bottom) {
    // Straight horizontal
    pathElements.push(
      <line key="h" x1={6} y1={c} x2={e} y2={c} stroke={color} strokeWidth={TRACK.stroke} strokeLinecap="round" />
    );
  } else if (connections.top && connections.right && !connections.bottom && !connections.left) {
    // Corner: top-right
    pathElements.push(
      <path key="tr" d={`M${c} 6 L${c} ${c} Q${c} ${c} ${e} ${c}`} fill="none" stroke={color} strokeWidth={TRACK.stroke} strokeLinecap="round" strokeLinejoin="round" />
    );
  } else if (connections.right && connections.bottom && !connections.top && !connections.left) {
    // Corner: right-bottom
    pathElements.push(
      <path key="rb" d={`M${e} ${c} L${c} ${c} Q${c} ${c} ${c} ${e}`} fill="none" stroke={color} strokeWidth={TRACK.stroke} strokeLinecap="round" strokeLinejoin="round" />
    );
  } else if (connections.bottom && connections.left && !connections.top && !connections.right) {
    // Corner: bottom-left
    pathElements.push(
      <path key="bl" d={`M${c} ${e} L${c} ${c} Q${c} ${c} ${6} ${c}`} fill="none" stroke={color} strokeWidth={TRACK.stroke} strokeLinecap="round" strokeLinejoin="round" />
    );
  } else if (connections.left && connections.top && !connections.right && !connections.bottom) {
    // Corner: left-top
    pathElements.push(
      <path key="lt" d={`M${6} ${c} L${c} ${c} Q${c} ${c} ${c} ${6}`} fill="none" stroke={color} strokeWidth={TRACK.stroke} strokeLinecap="round" strokeLinejoin="round" />
    );
  } else {
    // Multi-direction: draw lines from center to each connected edge
    const dirs = {
      top: [c, 6],
      right: [e, c],
      bottom: [c, e],
      left: [6, c],
    };
    Object.entries(connections).forEach(([dir, connected]) => {
      if (connected) {
        const [ex, ey] = dirs[dir as keyof typeof dirs];
        pathElements.push(
          <line key={dir} x1={c} y1={c} x2={ex} y2={ey} stroke={color} strokeWidth={TRACK.stroke} strokeLinecap="round" />
        );
      }
    });
  }

  return pathElements;
}

function OctagonClip({ id, size }: { id: string; size: number }) {
  const cut = size * 0.15;
  const pts = [
    `${cut},0`, `${size - cut},0`,
    `${size},${cut}`, `${size},${size - cut}`,
    `${size - cut},${size}`, `${cut},${size}`,
    `0,${size - cut}`, `0,${cut}`,
  ].join(' ');
  return (
    <defs>
      <clipPath id={id}>
        <polygon points={pts} />
      </clipPath>
    </defs>
  );
}

export function TileSVG({ cell, size = 76, selected = false, preview = false }: TileSVGProps) {
  const isEnergized = cell.energized || false;
  const isLocked = cell.locked && cell.type !== 'source' && cell.type !== 'target';
  const clipId = `clip-${cell.row}-${cell.col}-${preview ? 'p' : ''}`;
  const c = size / 2;

  const getBackgroundColor = () => {
    if (cell.type === 'source') return COLOR.bgSource;
    if (cell.type === 'target') return COLOR.bgTarget;
    if (isLocked) return COLOR.bgLocked;
    return COLOR.bg;
  };

  const getBorderColor = () => {
    if (cell.type === 'source') return isEnergized ? '#00ff88' : '#005533';
    if (cell.type === 'target') return isEnergized ? '#ff8c00' : '#553300';
    if (selected) return '#00d4ff';
    if (isEnergized) return '#00cc55';
    if (isLocked) return COLOR.borderLocked;
    return COLOR.border;
  };

  const cut = size * 0.15;
  const pts = [
    `${cut},2`, `${size - cut},2`,
    `${size - 2},${cut}`, `${size - 2},${size - cut}`,
    `${size - cut},${size - 2}`, `${cut},${size - 2}`,
    `2,${size - cut}`, `2,${cut}`,
  ].join(' ');

  const innerPts = [
    `${cut + 3},4`, `${size - cut - 3},4`,
    `${size - 4},${cut + 3}`, `${size - 4},${size - cut - 3}`,
    `${size - cut - 3},${size - 4}`, `${cut + 3},${size - 4}`,
    `4,${size - cut - 3}`, `4,${cut + 3}`,
  ].join(' ');

  if (cell.type === 'empty') {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <polygon points={pts} fill="rgba(0,0,0,0.3)" stroke="rgba(0,200,220,0.08)" strokeWidth="1" />
        {/* Corner dots */}
        <circle cx={cut + 4} cy={cut + 4} r={1.5} fill="rgba(0,200,220,0.15)" />
        <circle cx={size - cut - 4} cy={cut + 4} r={1.5} fill="rgba(0,200,220,0.15)" />
        <circle cx={cut + 4} cy={size - cut - 4} r={1.5} fill="rgba(0,200,220,0.15)" />
        <circle cx={size - cut - 4} cy={size - cut - 4} r={1.5} fill="rgba(0,200,220,0.15)" />
      </svg>
    );
  }

  if (cell.type === 'blocked') {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <polygon points={pts} fill="rgba(20,0,0,0.6)" stroke="rgba(80,20,20,0.4)" strokeWidth="1" />
        <line x1={cut + 6} y1={cut + 6} x2={size - cut - 6} y2={size - cut - 6} stroke="rgba(180,30,30,0.3)" strokeWidth={2} />
        <line x1={size - cut - 6} y1={cut + 6} x2={cut + 6} y2={size - cut - 6} stroke="rgba(180,30,30,0.3)" strokeWidth={2} />
      </svg>
    );
  }

  // Determine base tracks for the unrotated tile
  const baseConn = BASE_CONNECTIONS[cell.type];

  return (
    <svg
      className={`tile-svg ${cell.type} ${isEnergized ? 'energized' : ''} ${selected ? 'selected' : ''} ${isLocked ? 'locked' : ''}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        transform: cell.type === 'source' || cell.type === 'target' ? 'none' : `rotate(${cell.rotation}deg)`,
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      <OctagonClip id={clipId} size={size} />

      {/* Base plate */}
      <polygon
        points={pts}
        fill={getBackgroundColor()}
        stroke={getBorderColor()}
        strokeWidth={selected ? 1.5 : 1}
        clipPath={`url(#${clipId})`}
      />

      {/* Inner recess */}
      <polygon
        points={innerPts}
        fill="none"
        stroke={isLocked ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.05)'}
        strokeWidth="1"
      />

      {/* Circuit micro-dots in corners */}
      {[
        [cut + 5, cut + 5],
        [size - cut - 5, cut + 5],
        [cut + 5, size - cut - 5],
        [size - cut - 5, size - cut - 5],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={1.5}
          fill={isEnergized ? (cell.type === 'target' ? COLOR.trackTarget : COLOR.trackActive) : 'rgba(0,200,220,0.2)'}
          opacity={isEnergized ? 0.8 : 0.4}
        />
      ))}

      {/* SOURCE NODE */}
      {cell.type === 'source' && (
        <g>
          {/* Outer ring */}
          <circle cx={c} cy={c} r={c - 12} fill="none" stroke={isEnergized ? '#00ff88' : '#004422'} strokeWidth={1.5} opacity={0.7} />
          {/* Inner symbol */}
          <circle cx={c} cy={c} r={c - 22} fill={isEnergized ? 'rgba(0,255,136,0.2)' : 'rgba(0,100,60,0.2)'} stroke={isEnergized ? '#00ff88' : '#004422'} strokeWidth={1} />
          {/* Lightning bolt */}
          <path
            d={`M${c - 4} ${c - 10} L${c - 8} ${c} L${c - 1} ${c} L${c + 5} ${c + 10} L${c + 2} ${c} L${c + 8} ${c} Z`}
            fill={isEnergized ? '#00ff88' : '#006644'}
            opacity={0.9}
          />
          {/* Connection lines to all four sides */}
          <line x1={c} y1={6} x2={c} y2={c - (c - 22)} stroke={isEnergized ? '#00ff88' : '#004422'} strokeWidth={2.5} opacity={0.8} />
          <line x1={c + (c - 22)} y1={c} x2={size - 6} y2={c} stroke={isEnergized ? '#00ff88' : '#004422'} strokeWidth={2.5} opacity={0.8} />
          <line x1={c} y1={c + (c - 22)} x2={c} y2={size - 6} stroke={isEnergized ? '#00ff88' : '#004422'} strokeWidth={2.5} opacity={0.8} />
          <line x1={6} y1={c} x2={c - (c - 22)} y2={c} stroke={isEnergized ? '#00ff88' : '#004422'} strokeWidth={2.5} opacity={0.8} />
          {/* "SRC" label */}
          <text x={c} y={c + 22} textAnchor="middle" fontSize={7} fill={isEnergized ? '#00ff88' : '#006644'} fontFamily="monospace" letterSpacing={1}>SRC</text>
        </g>
      )}

      {/* TARGET NODE */}
      {cell.type === 'target' && (
        <g>
          {/* Outer ring */}
          <circle cx={c} cy={c} r={c - 12} fill="none" stroke={isEnergized ? '#ff8c00' : '#553300'} strokeWidth={1.5} opacity={0.7} />
          {/* Inner octagon */}
          <polygon
            points={`${c},${c-14} ${c+10},${c-10} ${c+14},${c} ${c+10},${c+10} ${c},${c+14} ${c-10},${c+10} ${c-14},${c} ${c-10},${c-10}`}
            fill={isEnergized ? 'rgba(255,140,0,0.3)' : 'rgba(100,50,0,0.2)'}
            stroke={isEnergized ? '#ff8c00' : '#553300'}
            strokeWidth={1}
          />
          {/* Target crosshair */}
          <line x1={c - 8} y1={c} x2={c + 8} y2={c} stroke={isEnergized ? '#ff8c00' : '#553300'} strokeWidth={1.5} />
          <line x1={c} y1={c - 8} x2={c} y2={c + 8} stroke={isEnergized ? '#ff8c00' : '#553300'} strokeWidth={1.5} />
          {/* Connection lines */}
          <line x1={c} y1={6} x2={c} y2={c - 14} stroke={isEnergized ? '#ff8c00' : '#553300'} strokeWidth={2.5} opacity={0.8} />
          <line x1={c + 14} y1={c} x2={size - 6} y2={c} stroke={isEnergized ? '#ff8c00' : '#553300'} strokeWidth={2.5} opacity={0.8} />
          <line x1={c} y1={c + 14} x2={c} y2={size - 6} stroke={isEnergized ? '#ff8c00' : '#553300'} strokeWidth={2.5} opacity={0.8} />
          <line x1={6} y1={c} x2={c - 14} y2={c} stroke={isEnergized ? '#ff8c00' : '#553300'} strokeWidth={2.5} opacity={0.8} />
          <text x={c} y={c + 22} textAnchor="middle" fontSize={7} fill={isEnergized ? '#ff8c00' : '#553300'} fontFamily="monospace" letterSpacing={1}>TGT</text>
        </g>
      )}

      {/* VOLTAGE TILE */}
      {cell.type === 'voltage' && (
        <g>
          {/* Track lines unrotated base */}
          {trackPath(baseConn, size, isEnergized)}
          {/* Background panel */}
          <rect x={c - 18} y={c - 14} width={36} height={28} rx={3}
            fill={cell.voltageModifier && cell.voltageModifier > 0 ? 'rgba(0,80,50,0.7)' : 'rgba(80,0,30,0.7)'}
            stroke={cell.voltageModifier && cell.voltageModifier > 0 ? '#00aa66' : '#aa0033'}
            strokeWidth={1.5}
          />
          {/* Value - counter rotate text so it remains upright */}
          <g transform={`rotate(${-cell.rotation} ${c} ${c})`}>
            <text
              x={c} y={c + 5}
              textAnchor="middle"
              fontSize={13}
              fontWeight="bold"
              fontFamily="monospace"
              fill={cell.voltageModifier && cell.voltageModifier > 0 ? (isEnergized ? '#00ff88' : '#00ee77') : (isEnergized ? '#ff4466' : '#ff2244')}
              letterSpacing={-0.5}
            >
              {cell.voltageModifier && cell.voltageModifier > 0 ? '+' : ''}{cell.voltageModifier}V
            </text>
          </g>
        </g>
      )}

      {/* REGULAR TILES (straight, corner, tee, cross) */}
      {(cell.type === 'straight' || cell.type === 'corner' || cell.type === 'tee' || cell.type === 'cross') && (
        <g>
          {/* Background circuit pattern */}
          {[6, 12, 18].map(offset => (
            <line
              key={`bg-h-${offset}`}
              x1={cut + offset} y1={cut + offset}
              x2={size - cut - offset} y2={cut + offset}
              stroke="rgba(0,200,220,0.03)" strokeWidth={0.5}
            />
          ))}
          {/* Main tracks rendered with unrotated base connections */}
          {trackPath(baseConn, size, isEnergized)}
          {/* Connection endpoint dots */}
          {baseConn.top && <circle cx={c} cy={7} r={2.5} fill={isEnergized ? COLOR.trackActive : COLOR.trackInactive} />}
          {baseConn.right && <circle cx={size - 7} cy={c} r={2.5} fill={isEnergized ? COLOR.trackActive : COLOR.trackInactive} />}
          {baseConn.bottom && <circle cx={c} cy={size - 7} r={2.5} fill={isEnergized ? COLOR.trackActive : COLOR.trackInactive} />}
          {baseConn.left && <circle cx={7} cy={c} r={2.5} fill={isEnergized ? COLOR.trackActive : COLOR.trackInactive} />}
          {/* Center node */}
          <circle cx={c} cy={c} r={3}
            fill={isEnergized ? COLOR.trackActive : COLOR.dot}
            stroke={isEnergized ? 'rgba(0,255,136,0.5)' : 'rgba(0,200,220,0.2)'}
            strokeWidth={1}
          />
        </g>
      )}

      {/* Locked overlay */}
      {isLocked && cell.type !== 'source' && cell.type !== 'target' && (
        <g opacity={0.3}>
          {/* Lock icon in corner */}
          <rect x={size - 18} y={4} width={12} height={9} rx={1} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth={0.8} />
          <rect x={size - 16} y={7} width={8} height={6} rx={1} fill="rgba(255,255,255,0.2)" />
        </g>
      )}

      {/* Selected highlight */}
      {selected && (
        <polygon
          points={pts}
          fill="none"
          stroke="#00d4ff"
          strokeWidth={2}
          opacity={0.6}
        />
      )}


    </svg>
  );
}

// Preview version for inventory (no rotation applied, always upright)
export function TilePreviewSVG({ type, voltageModifier, rotation = 0 }: {
  type: import('../types/game').TileType;
  voltageModifier?: number;
  rotation?: number;
}) {
  const mockCell: Cell = {
    row: -1, col: -1,
    type,
    locked: false,
    rotation,
    voltageModifier,
    energized: false,
    energizedProgress: 0,
  };
  return <TileSVG cell={mockCell} size={44} preview />;
}
