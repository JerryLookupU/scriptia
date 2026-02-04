import React from 'react';
import './StagingArea.css';

const StagingArea: React.FC = () => {
  return (
    <div className="staging-area">
      <div className="staging-area-header">
        <h3 className="staging-area-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="9" y1="3" x2="9" y2="21"/>
          </svg>
          会话暂存区
        </h3>
        <span className="staging-area-count">0</span>
      </div>

      <div className="staging-area-content">
        {/* 暂存区空状态 */}
        <div className="staging-area-empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10"/>
          </svg>
          <p>暂存区为空</p>
          <span>对话中的卡片可以保存到这里</span>
        </div>

        {/* 示例：暂存卡片列表（后续开发） */}
        {/*
        <div className="staging-list">
          <div className="staging-card">...</div>
        </div>
        */}
      </div>

      <div className="staging-area-footer">
        <button className="staging-action-btn" disabled>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
          </svg>
          保存到卡片库
        </button>
      </div>
    </div>
  );
};

export default StagingArea;
