# Scriptia

剧本和文档多媒体生成工具，专注于将文本内容转化为结构化的卡片式多媒体展示。

## 项目结构

```
scriptia/
├── frontend/                 # 前端主项目
│   ├── src/
│   │   ├── components/       # 卡片组件库 (RatioCard, CollapsedCard, MessageCard 等)
│   │   ├── demo/             # 页面风格例子（完整应用界面设计）
│   │   ├── pages/            # 独立页面组件
│   │   └── ...
│   └── index.html
├──
└── docs/                     # 文档
    └── agents.md             # Agent 协作指南
```

## 目录说明

| 目录 | 用途 |
|------|------|
| `frontend/src/components/` | **页面元素设计** - 可复用的卡片组件库 |
| `frontend/src/demo/` | **页面风格例子** - 完整的应用界面设计，展示组件组合效果 |
| `frontend/src/pages/` | 独立页面组件（如首页） |

## 启动项目

```bash
cd frontend
npm install
npm run dev
```

访问 http://localhost:5173/
