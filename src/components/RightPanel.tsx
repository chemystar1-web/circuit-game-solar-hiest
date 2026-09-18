// ============================================================
// RIGHT PANEL — Timer + Controls
// ============================================================

interface RightPanelProps {
  elapsed: number;
  timerStopped: boolean;
  currentLevel: number;
  formatTime: (ms: number) => string;
}

export function RightPanel({ elapsed, timerStopped, currentLevel, formatTime }: RightPanelProps) {
  return (
    <aside className="right-panel">
      {/* Timer */}
      <div className={`timer-section${timerStopped ? ' timer-stopped' : ''}`}>
        <div className="timer-label">
          {timerStopped ? '✓ FINAL TIME' : '⬤ ELAPSED'}
        </div>
        <div className="timer-display">
          {formatTime(elapsed)}
        </div>
        <div className="timer-subtext">
          {timerStopped
            ? 'ALL LEVELS COMPLETE'
            : `LEVEL ${currentLevel + 1} / 8`}
        </div>
      </div>

      {/* Controls Reference */}
      <div className="controls-section">
        <div className="controls-title">CONTROLS</div>
        <div className="control-hint">
          <span className="control-key">R</span>
          <span className="control-desc">Rotate CW</span>
        </div>
        <div className="control-hint">
          <span className="control-key">Q</span>
          <span className="control-desc">Rotate CCW</span>
        </div>
        <div className="control-hint">
          <span className="control-key">⌫</span>
          <span className="control-desc">Remove tile</span>
        </div>
        <div className="control-hint">
          <span className="control-key">Ctrl+Z</span>
          <span className="control-desc">Undo</span>
        </div>
        <div className="control-hint">
          <span className="control-key">ESC</span>
          <span className="control-desc">Deselect</span>
        </div>
        <div className="control-hint">
          <span className="control-key">H</span>
          <span className="control-desc">Help</span>
        </div>
      </div>
    </aside>
  );
}
