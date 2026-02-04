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
import './InspirationsPage.css';

// 演示数据
const demoCards: CardData[] = [
  { id: 'ip-1', typeId: 'ip', name: '毒舌测评博主', description: '专业数码测评', tags: ['测评'], icon: '🎭', imageRatio: '9:16' },
  { id: 'scene-1', typeId: 'scene', name: '赛博朋克城市', description: '霓虹灯下的未来都市', tags: ['场景'], icon: '🏙️', imageRatio: '16:9' },
  { id: 'plot-1', typeId: 'plot', name: '悬疑开箱', description: '深夜收到神秘包裹', tags: ['悬疑'], icon: '🎬', imageRatio: '1:1' },
];

const InspirationsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData>(demoCards[0]);
  const [referenceTags, setReferenceTags] = useState([
    { icon: '🎭', name: '毒舌测评博主' },
  ]);
  const [generatedCards, setGeneratedCards] = useState<CardData[]>([]);

  const handleDetail = (data: CardData) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const handleRemoveTag = (index: number) => {
    setReferenceTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRandomCard = () => {
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
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className="message-content">
          <div className="message-sender">灵感助手</div>
          <div className="message-bubble">
            <h1>💡 灵感抽卡</h1>
            <p>输入创意需求或点击随机生成，获取灵感卡片进行组合创作</p>
            <div className="quick-actions">
              <button className="quick-action-btn" onClick={handleRandomCard}>
                <span>🎲</span> 随机抽取
              </button>
              <button className="quick-action-btn">
                <span>🎭</span> IP角色
              </button>
              <button className="quick-action-btn">
                <span>🏙️</span> 场景
              </button>
              <button className="quick-action-btn">
                <span>🎬</span> 剧情
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 生成的卡片展示区 */}
      {generatedCards.length > 0 && (
        <div className="generated-cards">
          <h3 className="section-title">
            <span>🃏</span> 已生成的卡片 ({generatedCards.length})
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
          <div className="tip-icon">🎲</div>
          <div className="tip-content">
            <h4>随机抽卡</h4>
            <p>从卡片库随机抽取，获得意想不到的灵感组合</p>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🔗</div>
          <div className="tip-content">
            <h4>拖拽组合</h4>
            <p>将卡片拖拽组合，生成新的创意方案</p>
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

export default InspirationsPage;
