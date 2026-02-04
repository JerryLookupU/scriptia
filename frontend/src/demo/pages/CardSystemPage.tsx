import { useState } from 'react';
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
import './CardSystemPage.css';

// 注册自定义类型
typeRegistry.register({
  id: 'pet',
  label: '宠物',
  color: '#ec4899',
  gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
  icon: '🐱',
  defaultRatio: '1:1',
});

typeRegistry.register({
  id: 'food',
  label: '美食',
  color: '#f97316',
  gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
  icon: '🍜',
  defaultRatio: '16:9',
});

// 演示数据 - 每种类型三种比例
const ipPortrait: CardData = { id: 'ip-1', typeId: 'ip', name: '毒舌测评博主', description: '专业数码测评', tags: ['测评'], icon: '🎭', imageRatio: '9:16' };
const ipLandscape: CardData = { id: 'ip-2', typeId: 'ip', name: '毒舌测评博主', description: '专业数码测评', tags: ['测评'], icon: '🎭', imageRatio: '16:9' };
const ipSquare: CardData = { id: 'ip-3', typeId: 'ip', name: '毒舌测评博主', description: '专业数码测评', tags: ['测评'], icon: '🎭', imageRatio: '1:1' };

const plotPortrait: CardData = { id: 'plot-1', typeId: 'plot', name: '悬疑开箱', description: '深夜收到神秘包裹', tags: ['悬疑'], icon: '🎬', imageRatio: '9:16' };
const plotLandscape: CardData = { id: 'plot-2', typeId: 'plot', name: '悬疑开箱', description: '深夜收到神秘包裹', tags: ['悬疑'], icon: '🎬', imageRatio: '16:9' };
const plotSquare: CardData = { id: 'plot-3', typeId: 'plot', name: '悬疑开箱', description: '深夜收到神秘包裹', tags: ['悬疑'], icon: '🎬', imageRatio: '1:1' };

const productPortrait: CardData = { id: 'product-1', typeId: 'product', name: '限量手办', description: '精致收藏级手办', tags: ['限量'], icon: '📦', imageRatio: '9:16' };
const productLandscape: CardData = { id: 'product-2', typeId: 'product', name: '限量手办', description: '精致收藏级手办', tags: ['限量'], icon: '📦', imageRatio: '16:9' };
const productSquare: CardData = { id: 'product-3', typeId: 'product', name: '限量手办', description: '精致收藏级手办', tags: ['限量'], icon: '📦', imageRatio: '1:1' };

// 无图片演示数据 - 展示占位符效果
const noImagePortrait: CardData = { id: 'noimg-1', typeId: 'scene', name: '赛博朋克城市', description: '霓虹灯下的未来都市', tags: ['场景'], icon: '🏙️', imageRatio: '9:16' };
const noImageLandscape: CardData = { id: 'noimg-2', typeId: 'plot', name: '终极对决', description: '最后的决战时刻', tags: ['剧情'], icon: '🎬', imageRatio: '16:9' };
const noImageSquare: CardData = { id: 'noimg-3', typeId: 'user', name: '创意设计师', description: '专注用户体验设计', tags: ['用户'], icon: '👤', imageRatio: '1:1' };

// 无配图专用比例 - none
const noImageNone: CardData = { id: 'noimg-4', typeId: 'meme', name: '热梗速递', description: '今日网络流行语速览', tags: ['梗指南'], icon: '🚀', imageRatio: 'none' };

function CardSystemPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData>(ipPortrait);
  const [referenceTags, setReferenceTags] = useState([
    { icon: '🎭', name: '毒舌测评博主' },
    { icon: '🏙️', name: '赛博朋克夜景' },
  ]);

  const handleDetail = (data: CardData) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const handleRemoveTag = (index: number) => {
    setReferenceTags((prev) => prev.filter((_, i) => i !== index));
  };

  const allTypes = typeRegistry.getAll();

  const sectionTitle = (icon: string, title: string) => (
    <h2 className="section-title">{icon} {title}</h2>
  );

  const ratioLabel = (ratio: string, desc: string) => (
    <h3 className="ratio-label">{ratio} - {desc}</h3>
  );

  return (
    <div className="card-system-page">
      {/* 类型色板 */}
      <section className="demo-section">
        {sectionTitle('🎨', '卡片类型色板')}
        <p className="section-desc">{allTypes.length}种内置类型 + 运行时注册的自定义类型</p>
        <div className="type-grid">
          {allTypes.map((type) => (
            <div key={type.id} className="type-item">
              <div className="type-icon-box" style={{ background: type.gradient }}>{type.icon}</div>
              <div className="type-name">{type.label}</div>
              <div className="type-ratio">{type.defaultRatio || '9:16'}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 主卡片 */}
      <section className="demo-section">
        {sectionTitle('🃏', '主卡片 (RatioCard)')}
        <p className="section-desc">容器固定 9:16 (200×300px)，根据 imageRatio 改变排版</p>

        {/* 竖图 */}
        {ratioLabel('📱 竖图 9:16', '图片填满，内容覆盖底部')}
        <div className="card-row">
          <RatioCard data={ipPortrait} onDetail={handleDetail} />
          <RatioCard data={plotPortrait} onDetail={handleDetail} />
          <RatioCard data={productPortrait} onDetail={handleDetail} />
        </div>

        {/* 横图 */}
        {ratioLabel('💻 横图 16:9', '图片顶部 112px，内容下方')}
        <div className="card-row">
          <RatioCard data={ipLandscape} onDetail={handleDetail} />
          <RatioCard data={plotLandscape} onDetail={handleDetail} />
          <RatioCard data={productLandscape} onDetail={handleDetail} />
        </div>

        {/* 方图 */}
        {ratioLabel('⬜ 方图 1:1', '图片顶部 140px，内容下方')}
        <div className="card-row">
          <RatioCard data={ipSquare} onDetail={handleDetail} />
          <RatioCard data={plotSquare} onDetail={handleDetail} />
          <RatioCard data={productSquare} onDetail={handleDetail} />
        </div>

        {/* 无配图 - 专用比例 */}
        {ratioLabel('🚫 无配图 none', '卡片 200×300px，纯图标居中展示')}
        <div className="card-row">
          <RatioCard data={noImageNone} onDetail={handleDetail} />
        </div>
      </section>

      {/* 无图片卡片 - 占位符展示 */}
      <section className="demo-section">
        {sectionTitle('🖼️', '无图片卡片 (Placeholder)')}
        <p className="section-desc">当没有图片时，显示类型渐变色和图标作为占位符</p>

        {ratioLabel('📱 竖图 9:16', '渐变背景 + 大图标占位')}
        <div className="card-row">
          <RatioCard data={noImagePortrait} onDetail={handleDetail} />
          <RatioCard data={noImageLandscape} onDetail={handleDetail} />
          <RatioCard data={noImageSquare} onDetail={handleDetail} />
        </div>
      </section>

      {/* 折叠卡片 */}
      <section className="demo-section">
        {sectionTitle('📋', '折叠卡片 (CollapsedCard)')}

        {ratioLabel('📱 竖图 9:16', '缩略图 45×68px')}
        <div className="collapsed-list">
          <CollapsedCard data={ipPortrait} fields={[{ label: '口头禅', value: '"这玩意儿值不值？"' }]} />
          <CollapsedCard data={plotPortrait} fields={[{ label: '时长', value: '30秒' }]} />
        </div>

        {ratioLabel('💻 横图 16:9', '缩略图 68×38px')}
        <div className="collapsed-list">
          <CollapsedCard data={ipLandscape} fields={[{ label: '口头禅', value: '"这玩意儿值不值？"' }]} />
          <CollapsedCard data={plotLandscape} fields={[{ label: '时长', value: '30秒' }]} />
        </div>

        {ratioLabel('⬜ 方图 1:1', '缩略图 48×48px')}
        <div className="collapsed-list">
          <CollapsedCard data={ipSquare} fields={[{ label: '口头禅', value: '"这玩意儿值不值？"' }]} />
          <CollapsedCard data={plotSquare} fields={[{ label: '时长', value: '30秒' }]} />
        </div>

        {ratioLabel('🖼️ 无图片', '显示类型图标占位')}
        <div className="collapsed-list">
          <CollapsedCard data={noImagePortrait} fields={[{ label: '风格', value: '赛博朋克' }]} />
          <CollapsedCard data={noImageSquare} fields={[{ label: '角色', value: '设计师' }]} />
        </div>
      </section>

      {/* 消息卡片 */}
      <section className="demo-section">
        {sectionTitle('💬', '消息卡片 (MessageCard)')}

        {ratioLabel('📱 竖图 9:16', '图片 80×142px')}
        <MessageCard data={ipPortrait} additionalText="专业测评博主，擅长数码产品评测" />

        {ratioLabel('💻 横图 16:9', '图片 142×80px')}
        <MessageCard data={ipLandscape} additionalText="专业测评博主，擅长数码产品评测" />

        {ratioLabel('⬜ 方图 1:1', '图片 80×80px')}
        <MessageCard data={ipSquare} additionalText="专业测评博主，擅长数码产品评测" />

        {ratioLabel('🖼️ 无图片', '类型渐变色背景 + 图标')}
        <MessageCard data={noImageLandscape} additionalText="暂无配图的剧情卡片，显示类型图标" />
      </section>

      {/* 输入框引用 */}
      <section className="demo-section">
        {sectionTitle('✏️', '输入框引用 (InputReferenceArea)')}
        <InputReferenceArea
          placeholder="输入消息或引用卡片..."
          tags={referenceTags}
          onRemoveTag={handleRemoveTag}
        />
      </section>

      {/* 引用标签 */}
      <section className="demo-section">
        {sectionTitle('🏷️', '引用标签 (ReferenceTag)')}
        <div className="tag-row">
          <ReferenceTag icon="🎭" name="毒舌测评博主" />
          <ReferenceTag icon="🎬" name="悬疑开箱剧情" />
          <ReferenceTag icon="📦" name="限量手办" />
        </div>
      </section>

      {/* 弹窗详情 */}
      <section className="demo-section">
        {sectionTitle('🎯', '弹窗详情 (CardModal)')}
        <p className="section-desc">点击任意卡片的右上角「⋮」按钮查看详情</p>
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>打开弹窗详情</button>
      </section>

      {/* 交互说明 */}
      <section className="demo-section">
        {sectionTitle('💡', '交互说明')}
        <div className="guide-note">
          <strong>主卡片：</strong>点击 ↻ 翻转，点击 ⋮ 查看详情<br/>
          <strong>折叠卡片：</strong>点击展开/收起详情<br/>
          <strong>消息卡片：</strong>左侧图片比例自适应<br/>
          <strong>无图片：</strong>显示类型渐变色背景 + 图标占位符<br/>
          <strong>类型系统：</strong>使用 typeRegistry.register() 动态注册新类型
        </div>
      </section>

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
}

export default CardSystemPage;
