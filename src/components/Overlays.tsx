// ============================================================
// SUCCESS OVERLAY
// ============================================================

import { LEVELS } from '../data/levels';

interface SuccessOverlayProps {
  currentLevel: number;
  actualVoltage: number;
  pathLength: number;
  onNextLevel: () => void;
  onReplay: () => void;
}

export function SuccessOverlay({
  currentLevel,
  actualVoltage,
  pathLength,
  onNextLevel,
  onReplay,
}: SuccessOverlayProps) {
  const level = LEVELS[currentLevel];
  const isLastLevel = currentLevel >= LEVELS.length - 1;

  return (
    // No onClick on backdrop — prevents ghost-click from tile placement immediately closing it
    <div className="overlay success-overlay">
      <div className="success-panel">

        {/* Circular lightning bolt icon */}
        <div className="success-icon-ring">
          <div className="success-icon-inner">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3L6 16h8l-2 9 12-13h-8l2-9z" fill="#FF6B35" stroke="#FF6B35" strokeWidth="0.5" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="success-title">CALIBRATED</div>
        <div className="success-subtitle">POWER ROUTE ESTABLISHED</div>

        {/* Stats box */}
        <div className="success-stats">
          <div className="success-stat">
            <span className="success-stat-label">LEVEL</span>
            <span className="success-stat-value">{currentLevel + 1}</span>
          </div>
          <div className="success-stat-divider" />
          <div className="success-stat">
            <span className="success-stat-label">VOLTAGE</span>
            <span className="success-stat-value">{actualVoltage}V</span>
          </div>
          <div className="success-stat-divider" />
          <div className="success-stat">
            <span className="success-stat-label">TILES</span>
            <span className="success-stat-value">{pathLength}</span>
          </div>
        </div>

        {/* Level subtitle */}
        <div className="success-level-subtitle">
          {level.subtitle}
        </div>

        {/* Buttons */}
        <div className="success-buttons">
          <button
            className="success-btn secondary"
            onClick={(e) => {
              e.stopPropagation();
              onReplay();
            }}
          >
            REPLAY
          </button>
          {!isLastLevel && (
            <button
              className="success-btn primary"
              onClick={(e) => {
                e.stopPropagation();
                onNextLevel();
              }}
            >
              NEXT LEVEL →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// HELP OVERLAY
// ============================================================

interface HelpOverlayProps {
  onClose: () => void;
}

export function HelpOverlay({ onClose }: HelpOverlayProps) {
  return (
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="help-panel">
        <div className="help-title">HOW TO PLAY</div>

        <div className="help-section">
          <div className="help-section-title">OBJECTIVE</div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)', lineHeight: 1.7 }}>
            Connect the <span style={{ color: 'var(--neon-green)' }}>POWER SOURCE</span> to
            the <span style={{ color: 'var(--orange-primary)' }}>TARGET NODE</span> by placing
            and rotating circuit tiles. Match the required target voltage.
          </p>
        </div>

        <div className="help-section">
          <div className="help-section-title">CONTROLS</div>
          {[
            ['CLICK', 'Select from inventory / Place tile'],
            ['R', 'Rotate selected tile clockwise'],
            ['Q', 'Rotate selected tile counterclockwise'],
            ['⌫ / DEL', 'Remove selected tile'],
            ['Ctrl+Z', 'Undo last action'],
            ['ESC', 'Deselect tile'],
            ['H', 'Open this help panel'],
            ['Right-click', 'Remove placed tile'],
          ].map(([key, desc]) => (
            <div key={key} className="help-item">
              <span className="help-key">{key}</span>
              <span className="help-desc" style={{ fontSize: 13 }}>{desc}</span>
            </div>
          ))}
        </div>

        <div className="help-section">
          <div className="help-section-title">TILE TYPES</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {[
              ['Straight', 'Connects opposite sides'],
              ['Corner', 'Connects two adjacent sides'],
              ['T-Junction', 'Connects three sides'],
              ['Cross', 'Connects all four sides'],
              ['V-Mod (+)', 'Increases voltage when traversed'],
              ['V-Mod (−)', 'Decreases voltage when traversed'],
            ].map(([name, desc]) => (
              <div key={name} style={{ fontSize: 12, color: 'var(--text-secondary)', padding: '4px 0', fontFamily: 'var(--font-ui)' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{name}</span>
                <br />
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <button className="success-btn secondary" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
