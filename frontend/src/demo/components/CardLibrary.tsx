import React, { useState } from 'react';
import './CardLibrary.css';

const cardTypes = [
  { id: 'all', label: '全部', icon: '📚' },
  { id: 'ip', label: 'IP角色', icon: '🎭' },
  { id: 'scene', label: '场景', icon: '🏙️' },
  { id: 'plot', label: '剧情', icon: '🎬' },
  { id: 'meme', label: '梗指南', icon: '🚀' },
];

const CardLibrary: React.FC = () => {
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="card-library">
      <div className="card-library-header">
        <h3 className="card-library-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
          </svg>
          卡片库
        </h3>
      </div>

      {/* 搜索框 */}
      <div className="card-library-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="搜索卡片..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 类型筛选 */}
      <div className="card-library-filters">
        {cardTypes.map((type) => (
          <button
            key={type.id}
            className={`filter-tab ${activeType === type.id ? 'active' : ''}`}
            onClick={() => setActiveType(type.id)}
          >
            <span>{type.icon}</span>
            <span>{type.label}</span>
          </button>
        ))}
      </div>

      {/* 卡片列表 */}
      <div className="card-library-content">
        {/* 空状态 */}
        <div className="card-library-empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="9" y1="9" x2="15" y2="9"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
          <p>卡片库为空</p>
          <span>从对话中保存卡片到此处</span>
        </div>

        {/* 示例：卡片列表（后续开发） */}
        {/*
        <div className="library-grid">
          <div className="library-card">...</div>
        </div>
        */}
      </div>
    </div>
  );
};

export default CardLibrary;
