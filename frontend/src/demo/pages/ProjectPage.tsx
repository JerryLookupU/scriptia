import React, { useState } from 'react';
import {
  CardData,
  RatioCard,
  CollapsedCard,
  MessageCard,
  CardModal,
  InputReferenceArea,
  ReferenceTag,
  typeRegistry,
} from '../../index';
import './InspirationsPage.css'; // 复用相同样式

// 演示数据 - 项目相关
const demoCards: CardData[] = [
  { id: 'script-1', typeId: 'plot', name: '产品开箱脚本', description: '数码产品开箱测评脚本', tags: ['脚本'], icon: '📝', imageRatio: '16:9' },
  { id: 'ip-1', typeId: 'ip', name: '科技博主', description: '专注科技产品评测', tags: ['IP'], icon: '🎭', imageRatio: '9:16' },
  { id: 'scene-1', typeId: 'scene', name: '工作室', description: '专业拍摄场景', tags: ['场景'], icon: '🏙️', imageRatio: '16:9' },
];

const ProjectPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData>(demoCards[0]);
  const [referenceTags, setReferenceTags] = useState([
    { icon: '📝', name: '产品开箱脚本' },
  ]);
  const [generatedCards, setGeneratedCards] = useState<CardData[]>([]);

  const handleDetail = (data: CardData) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const handleRemoveTag = (index: number) => {
    setReferenceTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGenerateScript = () => {
    const randomCard = demoCards[Math.floor(Math.random() * demoCards.length)];
    const newCard = { ...randomCard, id: `${randomCard.id}-${Date.now()}` };
    setGeneratedCards(prev => [...prev, newCard]);
  };

  return (
    <div className="inspirations-chat-page">
      {/* 欢迎消息 */}
      <div className="welcome-message">
        <div className="message-avatar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="message-content">
          <div className="message-sender">项目助手</div>
          <div className="message-bubble">
            <h1>📁 项目工作台</h1>
            <p>从需求到脚本产出，管理项目卡片和生成脚本</p>
            <div className="quick-actions">
              <button className="quick-action-btn" onClick={handleGenerateScript}>
                <span>🎲</span> 生成脚本
              </button>
              <button className="quick-action-btn">
                <span>📰</span> 新闻选题
              </button>
              <button className="quick-action-btn">
                <span>🎬</span> 脚本模板
              </button>
              <button className="quick-action-btn">
                <span>📋</span> 草稿区
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 生成的卡片展示区 */}
      {generatedCards.length > 0 && (
        <div className="generated-cards">
          <h3 className="section-title">
            <span>🃏</span> 项目卡片 ({generatedCards.length})
          </h3>
          <div className="cards-grid">
            {generatedCards.map((card) => (
              <RatioCard
                key={card.id}
                data={card}
                onDetail={handleDetail}
              />
            ))}
          </div>
        </div>
      )}

      {/* 功能提示 */}
      <div className="feature-tips">
        <div className="tip-card">
          <div className="tip-icon">📰</div>
          <div className="tip-content">
            <h4>新闻选题发散</h4>
            <p>输入新闻内容，AI生成多个选题方向</p>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">📝</div>
          <div className="tip-content">
            <h4>脚本结构化产出</h4>
            <p>生成标题/开场/转折/结尾的完整脚本</p>
          </div>
        </div>
      </div>

      <CardModal
        data={selectedCard}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fields={[
          { label: 'ID', value: selectedCard.id },
          { label: '类型', value: selectedCard.typeId },
          { label: '比例', value: selectedCard.imageRatio },
        ]}
      />
    </div>
  );
};

export default ProjectPage;
