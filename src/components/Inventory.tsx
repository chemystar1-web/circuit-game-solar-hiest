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
              const isCompleted = completedLevels.includes(idx);
              // A level is unlocked if it has been completed OR it's the lowest-index uncompleted level
              // (i.e. one step beyond the highest completed level, or level 0 if nothing done yet)
              const maxUnlocked = completedLevels.length === 0 ? 0 : Math.max(...completedLevels) + 1;
              const isLocked = idx > maxUnlocked;
              const isCurrent = idx === currentLevel;
              return (
                <div
                  key={idx}
                  className={`level-dot${isCurrent ? ' active' : ''}${isCompleted ? ' completed' : ''}${isLocked ? ' locked' : ''}`}
                  onClick={() => !isLocked && onSelectLevel(idx)}
                  title={isLocked ? 'Complete previous level to unlock' : lvl.name}
                  style={{ cursor: isLocked ? 'not-allowed' : 'pointer' }}
                >
                  {isLocked ? '🔒' : idx + 1}
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
    </aside>
  );
}
