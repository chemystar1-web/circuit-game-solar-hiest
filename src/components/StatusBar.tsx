// ============================================================
// STATUS BAR - Bottom status strip (no rotation icons, no duplicate undo/reset)
// ============================================================

import type { Position } from '../types/game';

interface StatusBarProps {
  puzzleStatus: 'playing' | 'success' | 'voltage_mismatch' | 'incomplete';
  selectedCell: Position | null;
  actualVoltage: number;
  targetVoltage: number;
  onRemove: () => void;
}

const STATUS_MESSAGES = {
  playing: '● AWAITING CIRCUIT COMPLETION',
  incomplete: '○ CIRCUIT INCOMPLETE — CONTINUE ROUTING',
  voltage_mismatch: '⚠ CONNECTION ESTABLISHED — VOLTAGE MISMATCH',
  success: '✓ SYSTEM CALIBRATED — POWER ROUTE ESTABLISHED',
};

export function StatusBar({
  puzzleStatus,
  selectedCell,
  actualVoltage,
  targetVoltage,
  onRemove,
}: StatusBarProps) {
  return (
    <footer className="status-bar">
      {/* Left: tile controls (shown only when a cell is selected) */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', minWidth: 120 }}>
        {selectedCell && (
          <>
            <button
              className="status-control"
              onClick={onRemove}
              title="Remove tile (Backspace)"
            >
              <span className="status-key">⌫</span>
              REMOVE
            </button>
          </>
        )}
      </div>

      {/* Center: status message */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <div className={`status-message ${puzzleStatus}`}>
          {STATUS_MESSAGES[puzzleStatus]}
        </div>

        {puzzleStatus === 'voltage_mismatch' && (
          <div className="voltage-mismatch-display">
            <div className="mismatch-label">VOLTAGE MISMATCH</div>
            <div className="mismatch-values">
              CURRENT: <span>{actualVoltage}V</span> — REQUIRED: <span>{targetVoltage}V</span>
            </div>
          </div>
        )}
      </div>

      {/* Right: hint text */}
      <div style={{ minWidth: 120, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {selectedCell && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}>
            R/Q to rotate
          </span>
        )}
      </div>
    </footer>
  );
}
