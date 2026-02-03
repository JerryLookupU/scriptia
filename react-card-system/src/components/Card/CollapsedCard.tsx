import React, { useState, useCallback } from 'react';
import { CardData, ImageRatio, getCardTypeConfig } from '../../types';
import { Button, ExpandButton } from '../Button/Button';

// Collapsed Card Styles
const collapsedStyles = `
.card-collapsed-wrapper {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  width: fit-content;
  min-width: 320px;
  overflow: hidden;
}

.card-collapsed-wrapper.expanded {
  border-color: var(--border-light);
}

.card-collapsed {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg-card);
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
}

.card-collapsed:hover {
  background: var(--bg-card-hover);
}

.card-collapsed-wrapper.expanded .card-collapsed {
  border-bottom: 1px solid var(--border);
}

/* 图片区域 - 三种比例 */
.collapsed-image-area {
  flex-shrink: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
}

/* 竖图 9:16 */
.collapsed-image-area.ratio-9-16 {
  width: 45px;
  height: 68px;
}

/* 横图 16:9 */
.collapsed-image-area.ratio-16-9 {
  width: 68px;
  height: 38px;
}

/* 方图 1:1 */
.collapsed-image-area.ratio-1-1 {
  width: 48px;
  height: 48px;
}

.collapsed-image-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-mini {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.mini-info {
  flex: 1;
  min-width: 0;
}

.mini-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mini-type {
  font-size: 11px;
  color: var(--text-muted);
}

.mini-ratio-badge {
  font-size: 10px;
  padding: 2px 6px;
  background: var(--bg-dark);
  border-radius: 4px;
  color: var(--text-muted);
  margin-left: 8px;
}

.card-collapsed-expand {
  padding: 12px 14px;
  background: var(--bg-dark);
  display: none;
}

.card-collapsed-wrapper.expanded .card-collapsed-expand {
  display: block;
}

.expand-fields {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.expand-field {
  display: flex;
  gap: 8px;
  font-size: 13px;
  line-height: 1.5;
}

.expand-field-label {
  color: var(--text-muted);
  flex-shrink: 0;
}

.expand-field-value {
  color: var(--text-secondary);
}

.expand-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.expand-tag {
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 11px;
  color: var(--text-secondary);
}

.expand-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleId = 'collapsed-card-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = collapsedStyles;
    document.head.appendChild(style);
  }
}

// Collapsed Card Component
export interface CollapsedCardProps {
  data: CardData;
  fields?: { label: string; value: string }[];
  onQuote?: (data: CardData) => void;
  onEdit?: (data: CardData) => void;
}

export const CollapsedCard: React.FC<CollapsedCardProps> = ({
  data,
  fields = [],
  onQuote,
  onEdit,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = getCardTypeConfig(data);
  const ratio: ImageRatio = data.imageRatio || '9:16';

  const handleToggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleQuote = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onQuote?.(data);
  }, [onQuote, data]);

  const handleEdit = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(data);
  }, [onEdit, data]);

  // 比例中文标签
  const ratioLabel = {
    '9:16': '竖图',
    '16:9': '横图',
    '1:1': '方图',
  }[ratio];

  return (
    <div className={`card-collapsed-wrapper ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-collapsed" onClick={handleToggle}>
        {/* 图片区域 - 根据比例变化 */}
        <div className={`collapsed-image-area ratio-${ratio.replace(':', '-')}`}>
          {data.imageUrl ? (
            <img src={data.imageUrl} alt={data.name} />
          ) : (
            <div
              className="placeholder-mini"
              style={{ background: config.gradient }}
            >
              {data.icon || config.icon}
            </div>
          )}
        </div>

        <div className="mini-info">
          <div className="mini-title">
            {data.name}
            <span className="mini-ratio-badge">{ratioLabel}</span>
          </div>
          <div className="mini-type">
            {config.label} · {data.tags.join('/')}
          </div>
        </div>
        <ExpandButton expanded={isExpanded} onClick={handleToggle} />
      </div>

      <div className="card-collapsed-expand">
        {fields.length > 0 && (
          <div className="expand-fields">
            {fields.map((field, index) => (
              <div key={index} className="expand-field">
                <span className="expand-field-label">{field.label}：</span>
                <span className="expand-field-value">{field.value}</span>
              </div>
            ))}
          </div>
        )}
        {data.tags.length > 0 && (
          <div className="expand-tags">
            {data.tags.map((tag, index) => (
              <span key={index} className="expand-tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="expand-actions">
          <Button variant="secondary" size="text" onClick={handleQuote}>
            引用
          </Button>
          <Button variant="primary" size="text" onClick={handleEdit}>
            编辑
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollapsedCard;
