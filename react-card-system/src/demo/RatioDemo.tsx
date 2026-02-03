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
} from '../index';
import './demo.css';

// ============================================
// 注册自定义类型示例
// ============================================
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

// ============================================
// 演示数据 - 每种类型三种比例
// ============================================

// IP角色 - 三种比例
const ipPortrait: CardData = {
  id: 'ip-1', typeId: 'ip', name: '毒舌测评博主', description: '专业数码测评', tags: ['测评'], icon: '🎭', imageRatio: '9:16',
};
const ipLandscape: CardData = {
  id: 'ip-2', typeId: 'ip', name: '毒舌测评博主', description: '专业数码测评', tags: ['测评'], icon: '🎭', imageRatio: '16:9',
};
const ipSquare: CardData = {
  id: 'ip-3', typeId: 'ip', name: '毒舌测评博主', description: '专业数码测评', tags: ['测评'], icon: '🎭', imageRatio: '1:1',
};

// 剧情 - 三种比例
const plotPortrait: CardData = {
  id: 'plot-1', typeId: 'plot', name: '悬疑开箱', description: '深夜收到神秘包裹', tags: ['悬疑'], icon: '🎬', imageRatio: '9:16',
};
const plotLandscape: CardData = {
  id: 'plot-2', typeId: 'plot', name: '悬疑开箱', description: '深夜收到神秘包裹', tags: ['悬疑'], icon: '🎬', imageRatio: '16:9',
};
const plotSquare: CardData = {
  id: 'plot-3', typeId: 'plot', name: '悬疑开箱', description: '深夜收到神秘包裹', tags: ['悬疑'], icon: '🎬', imageRatio: '1:1',
};

// 商品 - 三种比例
const productPortrait: CardData = {
  id: 'product-1', typeId: 'product', name: '限量手办', description: '精致收藏级手办', tags: ['限量'], icon: '📦', imageRatio: '9:16',
};
const productLandscape: CardData = {
  id: 'product-2', typeId: 'product', name: '限量手办', description: '精致收藏级手办', tags: ['限量'], icon: '📦', imageRatio: '16:9',
};
const productSquare: CardData = {
  id: 'product-3', typeId: 'product', name: '限量手办', description: '精致收藏级手办', tags: ['限量'], icon: '📦', imageRatio: '1:1',
};

function RatioDemo() {
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

  return (
    <div className="container">
      <h1 className="page-title">🎴 Scriptia 比例卡片系统</h1>
      <p className="page-subtitle">统一卡片容器 9:16，三种图片排版：竖图 / 横图 / 方图</p>

      {/* 1. 类型色板 */}
      <section className="section">
        <h2 className="section-title">🎨 卡片类型色板 ({allTypes.length}种)</h2>
        <p className="section-desc">内置类型 + 运行时注册的自定义类型，支持动态扩展</p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {allTypes.map((type) => (
            <div key={type.id} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 60, height: 60, borderRadius: 12,
                  background: type.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24,
                }}
              >
                {type.icon}
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{type.label}</div>
              <div style={{ fontSize: 10, color: '#868e96' }}>{type.defaultRatio || '9:16'}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 主卡片 - 三种比例对比 */}
      <section className="section">
        <h2 className="section-title">🃏 主卡片组件 (RatioCard)</h2>
        <p className="section-desc">卡片容器固定 9:16 (200×300px)，根据 imageRatio 改变图片排版</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* 竖图 9:16 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>📱 竖图 9:16 - 图片填满卡片，内容覆盖在图片底部</h3>
            <div className="card-showcase">
              <div className="demo-item"><p className="demo-label">IP角色</p><RatioCard data={ipPortrait} onDetail={handleDetail} /></div>
              <div className="demo-item"><p className="demo-label">剧情</p><RatioCard data={plotPortrait} onDetail={handleDetail} /></div>
              <div className="demo-item"><p className="demo-label">商品</p><RatioCard data={productPortrait} onDetail={handleDetail} /></div>
            </div>
          </div>

          {/* 横图 16:9 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>💻 横图 16:9 - 图片在顶部 (112px)，内容在下方白色区域</h3>
            <div className="card-showcase">
              <div className="demo-item"><p className="demo-label">IP角色</p><RatioCard data={ipLandscape} onDetail={handleDetail} /></div>
              <div className="demo-item"><p className="demo-label">剧情</p><RatioCard data={plotLandscape} onDetail={handleDetail} /></div>
              <div className="demo-item"><p className="demo-label">商品</p><RatioCard data={productLandscape} onDetail={handleDetail} /></div>
            </div>
          </div>

          {/* 方图 1:1 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>⬜ 方图 1:1 - 图片在顶部 (140px正方形)，内容在下方</h3>
            <div className="card-showcase">
              <div className="demo-item"><p className="demo-label">IP角色</p><RatioCard data={ipSquare} onDetail={handleDetail} /></div>
              <div className="demo-item"><p className="demo-label">剧情</p><RatioCard data={plotSquare} onDetail={handleDetail} /></div>
              <div className="demo-item"><p className="demo-label">商品</p><RatioCard data={productSquare} onDetail={handleDetail} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 折叠卡片 - 三种比例 */}
      <section className="section">
        <h2 className="section-title">📋 折叠卡片 (CollapsedCard)</h2>
        <p className="section-desc">表格列表样式，左侧缩略图根据比例变化</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* 竖图 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>📱 竖图 9:16 - 缩略图 45×68px</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <CollapsedCard data={ipPortrait} fields={[{ label: '口头禅', value: '"这玩意儿值不值？"' }]} />
              <CollapsedCard data={plotPortrait} fields={[{ label: '时长', value: '30秒' }]} />
            </div>
          </div>

          {/* 横图 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>💻 横图 16:9 - 缩略图 68×38px</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <CollapsedCard data={ipLandscape} fields={[{ label: '口头禅', value: '"这玩意儿值不值？"' }]} />
              <CollapsedCard data={plotLandscape} fields={[{ label: '时长', value: '30秒' }]} />
            </div>
          </div>

          {/* 方图 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>⬜ 方图 1:1 - 缩略图 48×48px</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <CollapsedCard data={ipSquare} fields={[{ label: '口头禅', value: '"这玩意儿值不值？"' }]} />
              <CollapsedCard data={plotSquare} fields={[{ label: '时长', value: '30秒' }]} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. 消息卡片 - 三种比例 */}
      <section className="section">
        <h2 className="section-title">💬 消息卡片 (MessageCard)</h2>
        <p className="section-desc">对话消息中的卡片，左侧图片根据比例变化</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* 竖图 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>📱 竖图 9:16 - 图片 80×142px</h3>
            <MessageCard data={ipPortrait} additionalText="专业测评博主，擅长数码产品评测" />
          </div>

          {/* 横图 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>💻 横图 16:9 - 图片 142×80px</h3>
            <MessageCard data={ipLandscape} additionalText="专业测评博主，擅长数码产品评测" />
          </div>

          {/* 方图 */}
          <div>
            <h3 style={{ fontSize: 14, color: '#495057', marginBottom: 12 }}>⬜ 方图 1:1 - 图片 80×80px</h3>
            <MessageCard data={ipSquare} additionalText="专业测评博主，擅长数码产品评测" />
          </div>
        </div>
      </section>

      {/* 5. 输入框引用 */}
      <section className="section">
        <h2 className="section-title">✏️ 输入框引用 (InputReferenceArea)</h2>
        <p className="section-desc">输入框中引用的卡片标签，点击可移除</p>
        <InputReferenceArea
          placeholder="输入消息或引用卡片..."
          tags={referenceTags}
          onRemoveTag={handleRemoveTag}
        />
      </section>

      {/* 6. 引用标签 */}
      <section className="section">
        <h2 className="section-title">🏷️ 引用标签 (ReferenceTag)</h2>
        <p className="section-desc">单独的引用标签组件</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <ReferenceTag icon="🎭" name="毒舌测评博主" />
          <ReferenceTag icon="🎬" name="悬疑开箱剧情" />
          <ReferenceTag icon="📦" name="限量手办" />
        </div>
      </section>

      {/* 7. 弹窗详情 */}
      <section className="section">
        <h2 className="section-title">🎯 弹窗详情 (CardModal)</h2>
        <p className="section-desc">点击任意卡片的右上角"⋮"按钮查看详情弹窗</p>
        <div
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: '16px 24px', background: '#2d3436', color: 'white',
            borderRadius: 8, cursor: 'pointer', display: 'inline-block',
          }}
        >
          点击打开弹窗详情
        </div>
      </section>

      {/* 8. 交互说明 */}
      <section className="section">
        <h2 className="section-title">💡 交互说明</h2>
        <div className="note">
          <strong>主卡片 (RatioCard):</strong><br />
          • 点击右上角 ↻ 按钮翻转卡片，查看背面图片<br />
          • 点击 ⋮ 按钮查看卡片详情弹窗<br />
          • 竖图：内容覆盖在图片底部渐变层上<br />
          • 横图/方图：内容显示在图片下方白色区域<br /><br />
          <strong>折叠卡片 (CollapsedCard):</strong><br />
          • 点击展开/收起详情<br />
          • 左侧缩略图根据图片比例自动调整尺寸<br /><br />
          <strong>消息卡片 (MessageCard):</strong><br />
          • 左侧图片根据比例显示不同尺寸<br />
          • 右侧显示描述文字<br /><br />
          <strong>类型系统:</strong><br />
          • 使用 typeRegistry.register() 动态注册新类型<br />
          • 每种类型可设置默认图片比例<br />
          • 单张卡片可通过 imageRatio 覆盖默认比例
        </div>
      </section>

      {/* Modal */}
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

export default RatioDemo;
