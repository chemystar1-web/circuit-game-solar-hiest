// ============================================================
// INVENTORY PANEL
// ============================================================

import type { InventoryItem } from '../types/game';
import { TilePreviewSVG } from './CircuitTile';
import { LEVELS } from '../data/levels';

interface InventoryProps {
  inventory: InventoryItem[];
  selectedItem: InventoryItem | null;
  currentLevel: number;
  completedLevels: number[];
  onSelectItem: (item: InventoryItem) => void;
  onSelectLevel: (idx: number) => void;
}

const TILE_LABELS: Record<string, string> = {
  straight: 'Straight',
  corner: 'Corner',
  tee: 'T-Junction',
  cross: 'Cross',
  voltage: 'V-Mod',
  source: 'Source',
  target: 'Target',
};

export function InventoryPanel({
  inventory,
  selectedItem,
  currentLevel,
  completedLevels,
  onSelectItem,
  onSelectLevel,
}: InventoryProps) {
  const level = LEVELS[currentLevel];

  return (
    <aside className="side-panel">
      {/* Project Info */}
      <div className="panel-header">
        <div className="hud-title" style={{ fontSize: 10, marginBottom: 2 }}>
          SOLARIS // CIRCUIT DIV.
        </div>
        <div className="project-name">{level.name}</div>
        <div className="hud-subtitle" style={{ fontSize: 9 }}>{level.subtitle}</div>

        {/* Level Selector */}
        <div className="level-select-header">
          <div className="panel-title">LEVELS</div>
          <div className="level-dots">
            {LEVELS.map((lvl, idx) => {
              const isUnlocked = idx === 0 || completedLevels.includes(idx - 1);
              return (
                <div
                  key={idx}
                  className={`level-dot ${idx === currentLevel ? 'active' : ''} ${completedLevels.includes(idx) ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}`}
                  onClick={() => {
                    if (isUnlocked) onSelectLevel(idx);
                  }}
                  title={isUnlocked ? lvl.name : 'LOCKED'}
                  style={{ opacity: isUnlocked ? 1 : 0.3, cursor: isUnlocked ? 'pointer' : 'not-allowed' }}
                >
                  {idx + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Inventory */}
      <div className="inventory-section">
        <div className="inventory-title">INVENTORY</div>

        {inventory.length === 0 && (
          <div style={{ color: 'var(--text-muted)', fontSize: 10, fontFamily: 'var(--font-mono)', padding: '8px 0' }}>
            NO COMPONENTS AVAILABLE
          </div>
        )}

        {inventory.map((item, idx) => {
          const isSelected =
            selectedItem?.type === item.type &&
            selectedItem?.voltageModifier === item.voltageModifier;
          const isDepleted = item.quantity <= 0;

          return (
            <div
              key={idx}
              className={`inventory-item ${isSelected ? 'selected' : ''} ${isDepleted ? 'depleted' : ''}`}
              onClick={() => !isDepleted && onSelectItem(item)}
              title={isDepleted ? 'DEPLETED' : `Select ${TILE_LABELS[item.type] || item.type}`}
            >
              <div className="inventory-tile-preview">
                <TilePreviewSVG
                  type={item.type}
                  voltageModifier={item.voltageModifier}
                />
              </div>

              <div className="inventory-item-info">
                <div className="inventory-item-name" style={{ fontSize: 11 }}>
                  {TILE_LABELS[item.type] || item.type}
                </div>
                <div className="inventory-item-detail" style={{ fontSize: 10 }}>
                  {item.type === 'voltage' && item.voltageModifier !== undefined
                    ? `${item.voltageModifier > 0 ? '+' : ''}${item.voltageModifier}V modifier`
                    : item.type === 'cross'
                    ? '4-way junction'
                    : item.type === 'tee'
                    ? '3-way junction'
                    : item.type === 'straight'
                    ? '2-way straight'
                    : item.type === 'corner'
                    ? '90° turn'
                    : ''}
                </div>
              </div>

              <div className={`inventory-item-qty ${item.quantity === 0 ? 'depleted' : ''}`}>
                {item.quantity}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls Reference */}
      <div className="controls-section">
        <div className="controls-title" style={{ fontSize: 10 }}>CONTROLS</div>
        <div className="control-hint">
          <span className="control-key">R</span>
          <span className="control-desc" style={{ fontSize: 11 }}>Rotate CW</span>
        </div>
        <div className="control-hint">
          <span className="control-key">Q</span>
          <span className="control-desc" style={{ fontSize: 11 }}>Rotate CCW</span>
        </div>
        <div className="control-hint">
          <span className="control-key">⌫</span>
          <span className="control-desc" style={{ fontSize: 11 }}>Remove tile</span>
        </div>
        <div className="control-hint">
          <span className="control-key">Ctrl+Z</span>
          <span className="control-desc" style={{ fontSize: 11 }}>Undo</span>
        </div>
        <div className="control-hint">
          <span className="control-key">ESC</span>
          <span className="control-desc" style={{ fontSize: 11 }}>Deselect</span>
        </div>
        <div className="control-hint">
          <span className="control-key">H</span>
          <span className="control-desc" style={{ fontSize: 11 }}>Help</span>
        </div>
      </div>
    </aside>
  );
}
