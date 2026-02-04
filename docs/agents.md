# Agent 协作指南与错题本

> **项目定位**：Scriptia 是一个剧本和文档多媒体生成工具，专注于将文本内容转化为结构化的卡片式多媒体展示。

本文档记录与 AI Agent 协作时的注意事项和常见错误，避免重复犯错。

---

## 🚨 关键禁忌 - 绝对不要修改

### 1. 卡片翻转特效 (RatioCard Flip Animation)

**问题描述**：
在优化卡片样式时，多次意外破坏了卡片的 3D 翻转特效。

**错误代码示例** (不要这样做)：
```css
/* ❌ 错误：使用 transition: all 会覆盖翻转动画 */
.ratio-card-front,
.ratio-card-back {
  transition: all 0.35s ease;  /* 这会影响 transform! */
}

/* ❌ 错误：悬停时使用 transform 会覆盖 rotateY(180deg) */
.ratio-card-wrapper:hover .ratio-card-front,
.ratio-card-wrapper:hover .ratio-card-back {
  transform: scale(1.02);  /* 这会覆盖背面的 rotateY(180deg) ! */
}
```

**正确做法**：
```css
/* ✅ 正确：只过渡阴影，不过渡 transform */
.ratio-card-front,
.ratio-card-back {
  transition: box-shadow 0.35s ease;  /* 只改阴影 */
}

/* ✅ 正确：悬停只改阴影，不动 transform */
.ratio-card-wrapper:hover .ratio-card-front,
.ratio-card-wrapper:hover .ratio-card-back {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* ✅ 正确：背面的 rotateY(180deg) 必须独立且不被覆盖 */
.ratio-card-back {
  transform: rotateY(180deg);  /* 这是翻转的核心！ */
}
```

**关键原理**：
- 翻转动画依赖 `.ratio-card-back { transform: rotateY(180deg); }`
- `.ratio-card-inner` 通过 `transform: rotateY(180deg)` 实现翻转
- 任何在 `.ratio-card-front` 或 `.ratio-card-back` 上的 `transform` 都会**覆盖**翻转效果
- `transition: all` 会包含 `transform`，导致翻转动画失效或异常

**涉及文件**：
- `react-card-system/src/components/Card/RatioCard.css`
- `react-card-system/src/components/Card/RatioCard.tsx`

**相关类名**：
- `.ratio-card-wrapper` - 3D 透视容器
- `.ratio-card-inner` - 翻转动画层
- `.ratio-card-front` - 正面
- `.ratio-card-back` - 背面（必须有 `transform: rotateY(180deg)`）

---

## 📝 协作规范

### 修改前必读

1. **查看现有实现** - 在修改任何 CSS 前，先查看当前的 transition 和 transform 属性
2. **使用特定属性** - 避免使用 `transition: all`，改为 `transition: property1, property2`
3. **测试交互** - 修改后必须测试所有交互状态（悬停、点击、翻转等）

### CSS 修改清单

修改 CSS 前检查以下属性：
- [ ] 是否有 `transition: all`？改为具体属性
- [ ] 是否添加了 `transform`？检查是否会覆盖现有 transform
- [ ] 是否修改了 `.ratio-card-back`？确保 `rotateY(180deg)` 不被覆盖
- [ ] 是否测试了翻转按钮？

---

## 🔧 常见问题速查

### 翻转动画失效
**症状**：点击翻转按钮，卡片没有 3D 翻转效果
**原因**：`.ratio-card-back` 的 `transform: rotateY(180deg)` 被覆盖
**解决**：检查是否有其他 transform 规则，确保使用 `transition: box-shadow` 而非 `all`

---

## 🌳 Worktree 开发规划

每个页面使用独立的 git worktree 进行开发，避免相互干扰。

| 页面 | Worktree 名称 | 实际路径 | 说明 |
|------|--------------|----------|------|
| **首页** | `feat/home-page` | `../frontend-home/frontend/` | 入口页面，意图路由，历史会话列表 |
| **项目** | `feat/project-page` | `../frontend-project/frontend/` | 脚本产出主场，选题发散，版本对比 |
| **灵感** | `feat/inspirations-page` | `../frontend-inspirations/frontend/` | 抽卡组合，卡片拖拽工作区 |
| **AI角色聊天室** | `feat/chat-room-page` | `../frontend-chat-room/frontend/` | 角色驱动对话，手动/自动调度 |
| **卡片库** | `feat/card-library-page` | `../frontend-card-library/frontend/` | 全局卡片管理，类型配置 |
| **AI工具箱** | `feat/toolbox-page` | `../frontend-toolbox/frontend/` | 图片/视频生成，媒体产出 |
| **资料库** | `feat/database-page` | `../frontend-database/frontend/` | 资料导入，切分卡片化 |

> **注意**：所有 worktree 位于 `/Users/linzhenjie/code/scriptia-series/` 目录下，与主仓库平级

### 📁 目录结构说明

```
scriptia-series/
├── scriptia/                    # 主仓库 (main分支)
│   └── frontend/                # 前端项目主目录
│       ├── src/
│       │   ├── components/      # 卡片组件库（共享）
│       │   ├── demo/            # 页面风格示例（参考用，只读）
│       │   └── pages/           # 实际页面开发目录
│       └── ...
├── frontend-home/               # 首页 worktree
│   └── frontend/
├── frontend-project/            # 项目页 worktree
│   └── frontend/
├── frontend-inspirations/       # 灵感页 worktree
│   └── frontend/
├── frontend-chat-room/          # AI角色聊天室 worktree
│   └── frontend/
├── frontend-card-library/       # 卡片库 worktree
│   └── frontend/
├── frontend-toolbox/            # AI工具箱 worktree
│   └── frontend/
└── frontend-database/           # 资料库 worktree
    └── frontend/
```

### ⚠️ 重要：demo 目录是示例参考

- `src/demo/` 目录包含**页面风格示例**，用于视觉和交互参考
- **不要修改** `src/demo/` 中的代码
- 实际页面开发在 `src/pages/` 目录下进行

### Worktree 开发规范

1. **每个 worktree 只修改对应页面的代码**
   - ✅ `frontend/src/pages/<PageName>.tsx` - 实际页面开发
   - ✅ `frontend/src/pages/<PageName>.css` - 页面样式
   - ✅ `frontend/src/components/` - 新增可复用组件
   - ❌ `frontend/src/demo/` - **不要修改**，仅作参考

2. **共享代码在主仓库维护**
   - 卡片组件库 (`frontend/src/components/` 下的基础卡片)
   - 全局样式 (`frontend/src/styles/`)
   - 类型定义 (`frontend/src/types/`)
   - 导航配置 (`frontend/src/demo/config/navigation.tsx`)

3. **开发流程**
   ```bash
   # 1. 进入对应 worktree
   cd ../frontend-home

   # 2. 创建页面文件
   touch frontend/src/pages/HomePage.tsx

   # 3. 开发完成后提交
   git add .
   git commit -m "feat: 完成首页开发"

   # 4. 回到主仓库合并
   cd ../scriptia
   git merge feat/home-page
   ```

4. **合并后清理**
   ```bash
   git worktree remove ../frontend-home
   git branch -d feat/home-page
   ```

---

## 📚 参考文档

- [INTERACTIONS.md](./INTERACTIONS.md) - 交互清单
- [CARD_DESIGN_SPEC.md](./CARD_DESIGN_SPEC.md) - 卡片设计规范
- [PAGES.md](./PAGES.md) - 页面需求细化
