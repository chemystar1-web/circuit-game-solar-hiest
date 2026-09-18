// ============================================================
// HUD - Top header bar
// ============================================================

import { LEVELS } from '../data/levels';

interface HUDProps {
  currentLevel: number;
  actualVoltage: number;
  puzzleStatus: 'playing' | 'success' | 'voltage_mismatch' | 'incomplete';
  onReset: () => void;
  onHelp: () => void;
  onUndo: () => void;
  canUndo: boolean;
}

export function HUD({
  currentLevel,
  actualVoltage,
  puzzleStatus,
  onReset,
  onHelp,
  onUndo,
  canUndo,
}: HUDProps) {
  const level = LEVELS[currentLevel];
  const targetVoltage = level.targetVoltage;
  const sourceVoltage = level.sourceVoltage;
  const isSuccess = puzzleStatus === 'success';
  const isMismatch = puzzleStatus === 'voltage_mismatch';

  return (
    <header className="hud">
      {/* Left: Project info */}
      <div className="hud-left">
        <div className="hud-title">SOLARIS // CIRCUIT CALIBRATION</div>
        <div className="hud-subtitle">DIAGNOSTIC INTERFACE v2.4.1</div>
        <div className="hud-level-info">
          LEVEL {currentLevel + 1}/{LEVELS.length} — {level.name.toUpperCase()}
        </div>
      </div>

      {/* Center: Three equal voltage columns — SOURCE | ACTUAL | TARGET */}
      <div className="hud-center">
        <div className="voltage-trio">
          {/* SOURCE */}
          <div className="voltage-col">
            <div className="v-label">SOURCE</div>
            <div className="v-value v-source">{sourceVoltage}<span className="v-unit">V</span></div>
          </div>

          <div className="voltage-divider" />

          {/* ACTUAL — colour changes based on status */}
          <div className="voltage-col">
            <div className="v-label">ACTUAL</div>
            <div
              className="v-value v-actual"
              style={{
                color: isSuccess
                  ? 'var(--neon-green)'
                  : isMismatch
                  ? 'var(--orange-bright)'
                  : 'var(--neon-cyan)',
              }}
            >
              {actualVoltage}<span className="v-unit">V</span>
            </div>
          </div>

          <div className="voltage-divider" />

          {/* TARGET */}
          <div className="voltage-col">
            <div className="v-label">TARGET</div>
            <div className="v-value v-target">{targetVoltage}<span className="v-unit">V</span></div>
          </div>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="hud-right">
        <button
          className="hud-btn"
          onClick={onUndo}
          disabled={!canUndo}
          style={{ opacity: canUndo ? 1 : 0.4 }}
          title="Undo last action (Ctrl+Z)"
        >
          <span className="btn-key">Ctrl+Z</span>
          UNDO
        </button>
        <button
          className="hud-btn danger"
          onClick={onReset}
          title="Reset level (Backspace)"
        >
          <span className="btn-key">⌫</span>
          RESET
        </button>
        <button
          className="hud-btn"
          onClick={onHelp}
          title="How to play (H)"
        >
          <span className="btn-key">H</span>
          HELP
        </button>
      </div>
    </header>
  );
}
