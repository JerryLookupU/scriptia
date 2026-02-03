import React from 'react';
import { CardData, getCardTypeConfig } from '../../types';
import { Button } from '../Button/Button';

// Message Card Styles
const messageStyles = `
.chat-message {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  max-width: 600px;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #495057, #adb5bd);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.chat-content {
  flex: 1;
}

.chat-sender {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.message-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-message);
}

.message-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
}

.message-card-header .type-icon {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.message-card-header .card-title {
  font-size: 14px;
  font-weight: 600;
  flex: 1;
  color: var(--text-primary);
}

.message-card-header .card-actions {
  display: flex;
  gap: 6px;
}

.message-card-body {
  padding: 12px;
}

.message-card-layout {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.message-card-layout .layout-image {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.message-card-layout .layout-image.ratio-1-1 {
  width: 80px;
  height: 80px;
}

.message-card-layout .layout-image.ratio-9-16 {
  width: 80px;
  height: 142px;
}

.message-card-layout .layout-image.ratio-16-9 {
  width: 142px;
  height: 80px;
}

.message-card-layout .layout-text {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
}

.message-card-bottom {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.message-card-footer {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--border);
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleId = 'message-card-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = messageStyles;
    document.head.appendChild(style);
  }
}

// Message Card Component
export interface MessageCardProps {
  data: CardData;
  ratio?: '1:1' | '9:16' | '16:9';
  avatar?: string;
  sender?: string;
  additionalText?: string;
  onQuote?: (data: CardData) => void;
  onView?: (data: CardData) => void;
  onCollapse?: (data: CardData) => void;
  onAttachImage?: (data: CardData) => void;
  onSave?: (data: CardData) => void;
}

export const MessageCard: React.FC<MessageCardProps> = ({
  data,
  ratio,
  avatar = '🤖',
  sender = 'Scriptia AI',
  additionalText,
  onQuote,
  onView,
  onCollapse,
  onAttachImage,
  onSave,
}) => {
  const config = getCardTypeConfig(data);
  // 优先使用传入的 ratio，否则使用 data.imageRatio
  const imageRatio = ratio || data.imageRatio || '1:1';
  const ratioClass = `ratio-${imageRatio.replace(':', '-')}`;

  return (
    <div className="chat-message">
      <div className="chat-avatar">{avatar}</div>
      <div className="chat-content">
        <div className="chat-sender">{sender}</div>
        <div className="message-card">
          <div className="message-card-header">
            <div
              className="type-icon"
              style={{ background: config.gradient }}
            >
              {data.icon || config.icon}
            </div>
            <span className="card-title">{data.name}</span>
            <div className="card-actions">
              <Button variant="secondary" size="text" onClick={() => onQuote?.(data)}>
                引用
              </Button>
              <Button variant="primary" size="text" onClick={() => onView?.(data)}>
                查看
              </Button>
            </div>
          </div>
          <div className="message-card-body">
            <div className="message-card-layout">
              <div
                className={`layout-image ${ratioClass}`}
                style={{
                  background: config.gradient,
                  color: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                {data.icon || config.icon}
              </div>
              <div className="layout-text">{data.description}</div>
            </div>
            {additionalText && (
              <div className="message-card-bottom">{additionalText}</div>
            )}
          </div>
          <div className="message-card-footer">
            <Button variant="secondary" size="text" onClick={() => onCollapse?.(data)}>
              折叠
            </Button>
            <Button variant="secondary" size="text" onClick={() => onAttachImage?.(data)}>
              配图
            </Button>
            <Button variant="primary" size="text" onClick={() => onSave?.(data)}>
              保存
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
