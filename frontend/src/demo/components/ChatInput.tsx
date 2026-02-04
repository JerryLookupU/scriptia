import React, { useState } from 'react';
import './ChatInput.css';

interface ChatInputProps {
  onSend?: (message: string) => void;
  onRandomCard?: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, onRandomCard }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend?.(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`chat-input-container ${isFocused ? 'focused' : ''}`}>
      {/* 引用标签区域 */}
      <div className="chat-input-tags">
        {/* 动态渲染引用标签 */}
      </div>

      {/* 输入框主体 */}
      <div className="chat-input-main">
        <textarea
          className="chat-input-textarea"
          placeholder="输入消息或引用卡片..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          rows={1}
        />

        <div className="chat-input-actions">
          {/* 引用卡片按钮 */}
          <button className="chat-input-btn" title="引用卡片">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </button>

          {/* 随机生成卡片按钮 */}
          <button
            className="chat-input-btn random-card-btn"
            onClick={onRandomCard}
            title="随机生成卡片"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>随机卡片</span>
          </button>

          {/* 发送按钮 */}
          <button
            className={`chat-input-send ${inputValue.trim() ? 'active' : ''}`}
            onClick={handleSend}
            disabled={!inputValue.trim()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      {/* 快捷提示 */}
      <div className="chat-input-hint">
        <span>按 Enter 发送，Shift + Enter 换行</span>
      </div>
    </div>
  );
};

export default ChatInput;
