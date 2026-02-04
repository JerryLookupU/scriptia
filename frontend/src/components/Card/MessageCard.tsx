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
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
}

.chat-content {
  flex: 1;
}

.chat-sender {
  font-size: 12px;
  color: #9ca3af;
  margin-bottom: 6px;
  font-weight: 500;
}

.message-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
}

.message-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.message-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-bottom: 1px solid #f3f4f6;
}

.message-card-header .type-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.message-card-header .card-title {
  font-size: 14px;
  font-weight: 600;
  flex: 1;
  color: #1f2937;
  letter-spacing: -0.01em;
}

.message-card-header .card-actions {
  display: flex;
  gap: 8px;
}

.message-card-body {
  padding: 14px;
}

.message-card-layout {
  display: flex;
  gap: 14px;
  margin-bottom: 14px;
}

.message-card-layout .layout-image {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  line-height: 1.6;
  color: #6b7280;
  display: flex;
  align-items: center;
}

.message-card-bottom {
  font-size: 13px;
  line-height: 1.6;
  color: #4b5563;
  padding-top: 14px;
  border-top: 1px solid #f3f4f6;
}

.message-card-footer {
  display: flex;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid #f3f4f6;
  background: #fafafa;
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
