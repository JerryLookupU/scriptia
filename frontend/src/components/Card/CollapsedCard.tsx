import React, { useState, useCallback } from 'react';
import { CardData, ImageRatio, getCardTypeConfig } from '../../types';
import { Button, ExpandButton } from '../Button/Button';

// Collapsed Card Styles
const collapsedStyles = `
.card-collapsed-wrapper {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  width: fit-content;
  min-width: 320px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
}

.card-collapsed-wrapper:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.card-collapsed-wrapper.expanded {
  border-color: #d1d5db;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.card-collapsed {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.card-collapsed:hover {
  background: #f9fafb;
}

.card-collapsed-wrapper.expanded .card-collapsed {
  border-bottom: 1px solid #f3f4f6;
}

/* 图片区域 - 三种比例 */
.collapsed-image-area {
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
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
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}

.mini-type {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 2px;
}

.mini-ratio-badge {
  font-size: 10px;
  padding: 2px 8px;
  background: #f3f4f6;
  border-radius: 6px;
  color: #6b7280;
  margin-left: 8px;
  font-weight: 500;
}

.card-collapsed-expand {
  padding: 14px 16px;
  background: #f9fafb;
  display: none;
}

.card-collapsed-wrapper.expanded .card-collapsed-expand {
  display: block;
}

.expand-fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 14px;
}

.expand-field {
  display: flex;
  gap: 10px;
  font-size: 13px;
  line-height: 1.5;
}

.expand-field-label {
  color: #9ca3af;
  flex-shrink: 0;
  font-weight: 500;
}

.expand-field-value {
  color: #4b5563;
}

.expand-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.expand-tag {
  padding: 3px 10px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 11px;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  font-weight: 500;
}

.expand-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
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
    'none': '无图',
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
