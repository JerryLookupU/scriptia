# Scriptia Card System - React 组件库

基于 Scriptia 卡片设计系统的 React 组件实现。

## 安装

```bash
npm install
npm run dev
```

## 组件列表

### 卡片组件

| 组件名 | 描述 | 尺寸 |
|--------|------|------|
| `FlipCard` | 9:16 人物卡，支持翻转 | 200px × 300px |
| `SceneCard` | 16:9 场景卡，支持翻转 | 200px × 300px |
| `CollapsedCard` | 折叠卡片（表格单行） | 自适应 |
| `MessageCard` | 对话消息卡片 | 自适应 |

### 其他组件

| 组件名 | 描述 |
|--------|------|
| `CardModal` | 卡片详情弹窗 |
| `ReferenceTag` | 输入框引用标签 |
| `InputReferenceArea` | 带引用的输入框区域 |
| `Button` | 基础按钮 |
| `ControlButton` | 卡片控制按钮 |

## 使用示例

### FlipCard (9:16 人物卡)

```tsx
import { FlipCard } from '@scriptia/card-system';

const data = {
  id: 'card-1',
  type: 'ip' as const,
  name: '毒舌测评博主 · 小李',
  description: '专业测评博主，擅长数码产品评测...',
  tags: ['测评', '数码'],
  icon: '🎭',
};

<FlipCard
  data={data}
  backTitle="全身立绘"
  backDescription="完整形象展示"
  onDetail={(data) => console.log('Detail:', data)}
/>
```

### SceneCard (16:9 场景卡)

```tsx
import { SceneCard } from '@scriptia/card-system';

const data = {
  id: 'card-3',
  type: 'plot' as const,
  name: '悬疑开箱剧情',
  description: '开场：主角在深夜收到神秘包裹...',
  tags: ['悬疑', '开箱'],
  icon: '🎬',
  meta: {
    duration: '⏱ 30秒',
    genre: '🔥 悬疑',
  },
};

<SceneCard
  data={data}
  backTitle="剧中场景"
  backDescription="场景描述"
  onDetail={(data) => console.log('Detail:', data)}
/>
```

### CollapsedCard (折叠卡片)

```tsx
import { CollapsedCard } from '@scriptia/card-system';

<CollapsedCard
  data={data}
  fields={[
    { label: '口头禅', value: '"这玩意儿值不值？"' },
    { label: '擅长领域', value: '3C数码、生活用品' },
  ]}
  onQuote={(data) => console.log('Quote:', data)}
  onEdit={(data) => console.log('Edit:', data)}
/>
```

### MessageCard (消息卡片)

```tsx
import { MessageCard } from '@scriptia/card-system';

<MessageCard
  data={data}
  ratio="9:16"  // 支持 "1:1" | "9:16" | "16:9"
  avatar="🤖"
  sender="Scriptia AI"
  additionalText="补充说明文字"
  onQuote={(data) => console.log('Quote:', data)}
  onView={(data) => console.log('View:', data)}
/>
```

### CardModal (弹窗详情)

```tsx
import { CardModal } from '@scriptia/card-system';

<CardModal
  data={data}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  prompt="图片生成提示词..."
  fields={[
    { label: '口头禅', value: '"..."' },
    { label: '擅长领域', value: '...' },
  ]}
/>
```

## 卡片类型

| 类型 | 颜色 | 图标 | 用途 |
|------|------|------|------|
| `ip` | #e8590c (橙色) | 🎭 | IP角色 |
| `scene` | #2f9e44 (绿色) | 🏙️ | 场景 |
| `plot` | #1971c2 (蓝色) | 🎬 | 剧情 |
| `meme` | #be4bdb (紫色) | 🚀 | 梗指南 |

## 类型定义

```tsx
interface CardData {
  id: string;
  type: 'ip' | 'scene' | 'plot' | 'meme';
  name: string;
  description: string;
  tags: string[];
  icon?: string;
  imageUrl?: string;
  backImageUrl?: string;
  meta?: Record<string, string>;
}
```

## 项目结构

```
react-card-system/
├── src/
│   ├── components/
│   │   ├── Button/          # 按钮组件
│   │   ├── Card/            # 卡片组件
│   │   │   ├── FlipCard.tsx
│   │   │   ├── SceneCard.tsx
│   │   │   ├── CollapsedCard.tsx
│   │   │   └── MessageCard.tsx
│   │   ├── Modal/           # 弹窗组件
│   │   └── ReferenceTag/    # 引用标签
│   ├── demo/                # 演示页面
│   ├── styles/              # 样式变量
│   ├── types/               # 类型定义
│   └── utils/               # 工具函数
├── package.json
└── README.md
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

## 设计规范

详见 `docs/card-design-system.md`
