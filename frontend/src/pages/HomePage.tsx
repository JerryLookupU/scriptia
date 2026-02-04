import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-badge">Scriptia Card System</div>
        <h1 className="hero-title">卡片设计系统演示</h1>
        <p className="hero-subtitle">
          基于比例的卡片组件库，支持竖图(9:16)、横图(16:9)、方图(1:1)三种排版方式
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">🎴</div>
          <h3>比例卡片</h3>
          <p>统一容器 9:16，根据图片比例自动调整内部排版</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>折叠卡片</h3>
          <p>表格列表样式，支持展开/收起详情</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>消息卡片</h3>
          <p>对话消息中的卡片展示</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>动态类型</h3>
          <p>支持运行时注册新的卡片类型</p>
        </div>
      </div>

      <div className="guide-section">
        <h2>使用指南</h2>
        <div className="guide-steps">
          <div className="step">
            <span className="step-num">1</span>
            <p>点击左侧导航「卡片系统」查看所有组件展示</p>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <p>每种组件都展示了竖图、横图、方图三种样式</p>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <p>点击卡片可翻转查看背面，点击 ⋮ 查看详情弹窗</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
