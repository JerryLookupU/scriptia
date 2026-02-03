# Scriptia 卡片设计系统文档

## 概述

Scriptia 卡片设计系统是一个用于展示和管理创意内容的组件库，支持四种卡片类型：IP角色、场景、剧情、梗指南。采用 9:16 和 16:9 两种比例，支持翻转、折叠、弹窗等多种展示形式。

## 设计规范

### 颜色系统

#### 主题色（四种卡片类型）

| 类型 | 变量名 | 色值 | 用途 |
|------|--------|------|------|
| IP角色 | `--ip-color` | #e8590c | 角色卡片标识 |
| 场景 | `--scene-color` | #2f9e44 | 场景卡片标识 |
| 剧情 | `--plot-color` | #1971c2 | 剧情卡片标识 |
| 梗指南 | `--meme-color` | #be4bdb | 梗指南卡片标识 |

#### 中性色

| 变量名 | 色值 | 用途 |
|--------|------|------|
| `--primary` | #495057 | 主要强调色 |
| `--primary-light` | #adb5bd | 次要强调色 |
| `--text-primary` | #212529 | 主要文字 |
| `--text-secondary` | #495057 | 次要文字 |
| `--text-muted` | #868e96 | 辅助文字 |

#### 背景色

| 变量名 | 色值 | 用途 |
|--------|------|------|
| `--bg-page` | 渐变 | 页面背景 |
| `--bg-dark` | #f1f3f5 | 深色背景区域 |
| `--bg-card` | #ffffff | 卡片背景 |
| `--bg-card-hover` | #f8f9fa | 卡片悬停背景 |

### 尺寸规范

| 元素 | 尺寸 | 说明 |
|------|------|------|
| 9:16 卡片 | 200px × 300px | 人物卡/场景卡 |
| 16:9 卡片 | 200px × 300px | 剧情卡/梗指南卡 |
| 弹窗图片 | 200px × 356px | 9:16 全身立绘 |
| 消息图片 1:1 | 80px × 80px | 头像/图标 |
| 消息图片 9:16 | 80px × 142px | 角色立绘 |
| 消息图片 16:9 | 142px × 80px | 场景图 |

### 圆角规范

| 变量名 | 值 | 用途 |
|--------|-----|------|
| `--radius-sm` | 6px | 小按钮、标签 |
| `--radius-md` | 8px | 普通按钮 |
| `--radius-lg` | 10px | 折叠卡片 |
| `--radius-xl` | 12px | 消息卡片 |
| `--radius-2xl` | 16px | 基础卡片 |
| `--radius-3xl` | 20px | 弹窗 |

## 组件文档

### 1. 基础按钮 (Button)

#### 类名结构
```
.btn              # 基础按钮样式
├── .btn-primary  # 主要按钮（深灰）
└── .btn-secondary # 次要按钮（浅灰）
```

#### 使用示例
```html
<!-- 主要按钮 -->
<button class="btn btn-primary">保存</button>

<!-- 次要按钮 -->
<button class="btn btn-secondary">引用</button>
```

#### 按钮尺寸
- 标准按钮：`height: 32px`, `padding: 8px 16px`
- 小号按钮 (`.btn-text`)：`height: 26px`, `padding: 0 10px`

---

### 2. 控制按钮 (Control Button)

用于卡片右上角的控制操作。

#### 类名
- `.control-btn` - 控制按钮（翻转、详情）
- `.close-btn` - 关闭按钮
- `.expand-btn` - 展开/收起按钮

#### 使用示例
```html
<div class="card-controls">
  <button class="control-btn" onclick="flipCard('card-1', event)">↻</button>
  <button class="control-btn" onclick="showDetail('IP角色', event)">⋮</button>
</div>
```

---

### 3. 9:16 人物卡 (Character Card)

支持正反面翻转的竖版卡片。

#### HTML 结构
```html
<div class="card-flip-container" id="card-1">
  <div class="card-flip-inner">
    <!-- 正面 -->
    <div class="card-flip-front">
      <div class="image-area">
        <div class="placeholder-img ip">🎭</div>
        <span class="type-badge bg-ip">IP角色</span>
        <div class="card-controls">...</div>
        <div class="content-overlay">
          <h3 class="card-name">角色名称</h3>
          <p class="card-desc">角色描述...</p>
          <div class="card-tags">
            <span class="card-tag">标签1</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 背面 -->
    <div class="card-flip-back">
      <div class="image-area">
        <div class="placeholder-img ip" style="font-size: 80px;">🎭</div>
        <div class="card-controls">...</div>
        <div class="scene-context-overlay">
          <div class="scene-context-title">全身立绘</div>
          <div class="scene-context-desc">完整形象展示</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### 交互说明
- 点击 ↻ 按钮翻转卡片
- 点击 ⋮ 按钮显示详情
- 正面显示半身/头像，背面显示全身立绘

---

### 4. 16:9 场景卡 (Scene Card)

支持正反面翻转的横版卡片，正面上图下文，背面为剧中场景。

#### HTML 结构
```html
<div class="card-scene-wrapper" id="card-3">
  <div class="card-scene-inner">
    <!-- 正面 -->
    <div class="card-scene-front">
      <div class="image-area">
        <div class="placeholder-img plot">🎬</div>
        <span class="type-badge bg-plot">剧情</span>
        <div class="card-controls">...</div>
      </div>
      <div class="content-area">
        <span class="content-type type-plot">剧情脚本</span>
        <p class="scene-desc">剧情描述...</p>
        <div class="scene-meta">
          <span>⏱ 30秒</span>
          <span>·</span>
          <span>🔥 悬疑</span>
        </div>
      </div>
    </div>
    <!-- 背面 -->
    <div class="card-scene-back">
      <div class="scene-image-full">
        <div class="placeholder-img scene-context">📦</div>
        <div class="card-controls">...</div>
        <div class="scene-context-overlay">
          <div class="scene-context-title">剧中场景</div>
          <div class="scene-context-desc">场景描述</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 5. 折叠卡片 (Collapsed Card)

用于表格单行展示，支持展开/收起。

#### HTML 结构
```html
<div class="card-collapsed-wrapper" id="collapsed-1">
  <!-- 折叠状态 -->
  <div class="card-collapsed" onclick="toggleCollapse('collapsed-1', event)">
    <div class="mini-icon bg-ip">🎭</div>
    <div class="mini-info">
      <div class="mini-title">标题</div>
      <div class="mini-type">类型 · 标签</div>
    </div>
    <button class="expand-btn" onclick="event.stopPropagation(); toggleCollapse('collapsed-1', event);">
      展开
    </button>
  </div>
  <!-- 展开区域 -->
  <div class="card-collapsed-expand">
    <div class="expand-fields">
      <div class="expand-field">
        <span class="expand-field-label">字段名：</span>
        <span class="expand-field-value">字段值</span>
      </div>
    </div>
    <div class="expand-tags">
      <span class="expand-tag">标签</span>
    </div>
    <div class="expand-actions">
      <button class="btn-text btn-secondary" onclick="quoteCard('类型', event)">引用</button>
      <button class="btn-text btn-primary" onclick="editCard('id', event)">编辑</button>
    </div>
  </div>
</div>
```

#### 状态类
- `.expanded` - 展开状态（添加到 wrapper）

---

### 6. 输入框引用 (Input Reference)

用于输入框中显示已引用的卡片。

#### HTML 结构
```html
<div class="input-area">
  <p class="input-placeholder">输入消息或引用卡片...</p>
  <div>
    <span class="reference-tag">
      <span>🎭</span>
      毒舌测评博主
      <span class="remove-btn">×</span>
    </span>
  </div>
</div>
```

---

### 7. 对话消息卡片 (Chat Message)

用于对话中展示卡片信息。

#### HTML 结构
```html
<div class="chat-message">
  <div class="chat-avatar">🤖</div>
  <div class="chat-content">
    <div class="chat-sender">Scriptia AI</div>
    <div class="message-card">
      <!-- 头部 -->
      <div class="message-card-header">
        <div class="type-icon bg-ip">🎭</div>
        <span class="card-title">标题</span>
        <div class="card-actions">
          <button class="btn btn-secondary">引用</button>
          <button class="btn btn-primary">查看</button>
        </div>
      </div>
      <!-- 内容 -->
      <div class="message-card-body">
        <div class="message-card-layout">
          <div class="layout-image ratio-9-16 placeholder-img ip">🧙</div>
          <div class="layout-text">描述文字</div>
        </div>
        <div class="message-card-bottom">补充说明</div>
      </div>
      <!-- 底部 -->
      <div class="message-card-footer">
        <button class="btn btn-secondary">折叠</button>
        <button class="btn btn-secondary">配图</button>
        <button class="btn btn-primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

#### 图片比例类
- `.ratio-1-1` - 1:1 正方形
- `.ratio-9-16` - 9:16 竖版
- `.ratio-16-9` - 16:9 横版

---

### 8. 弹窗详情 (Modal)

用于展示和编辑卡片完整信息。

#### HTML 结构
```html
<div class="modal-content">
  <div class="modal-header">
    <h3><span>🎭</span> 卡片详情</h3>
    <div class="modal-actions">
      <button class="btn btn-secondary">引用</button>
      <button class="btn btn-primary">保存</button>
      <button class="close-btn">✕</button>
    </div>
  </div>
  <div class="modal-body">
    <!-- 左侧：图片区 -->
    <div class="modal-image-area">
      <div class="modal-image-wrapper">
        <div class="placeholder-img ip">🎭</div>
      </div>
      <div class="prompt-box">
        <label>💡 图片生成提示词</label>
        <textarea>...</textarea>
      </div>
      <button class="generate-btn">生成图片</button>
    </div>
    <!-- 右侧：信息区 -->
    <div class="modal-info-area">
      <div class="info-section priority">
        <h4>📝 优先展示</h4>
        <div class="editable-field field-name" contenteditable>名称</div>
        <div class="editable-field field-desc" contenteditable>描述</div>
      </div>
      <!-- 更多信息区域... -->
    </div>
  </div>
</div>
```

---

## JavaScript API

### 函数列表

#### flipCard(cardId, event)
翻转卡片
- **参数**
  - `cardId` (string): 卡片容器ID
  - `event` (Event): 点击事件对象
- **示例**
```javascript
<button onclick="flipCard('card-1', event)">↻</button>
```

#### showDetail(cardType, event)
显示卡片详情
- **参数**
  - `cardType` (string): 卡片类型名称
  - `event` (Event): 点击事件对象
- **示例**
```javascript
<button onclick="showDetail('IP角色', event)">⋮</button>
```

#### toggleCollapse(wrapperId, event)
切换折叠/展开状态
- **参数**
  - `wrapperId` (string): 折叠容器ID
  - `event` (Event): 点击事件对象
- **注意**: 展开按钮需要阻止事件冒泡
```javascript
<button onclick="event.stopPropagation(); toggleCollapse('id', event);">展开</button>
```

#### quoteCard(cardType, event)
引用卡片到输入框
- **参数**
  - `cardType` (string): 卡片类型
  - `event` (Event): 点击事件对象

#### editCard(cardId, event)
编辑卡片
- **参数**
  - `cardId` (string): 卡片ID
  - `event` (Event): 点击事件对象

---

## 工具类

### 类型颜色

用于标识四种卡片类型的背景色：

```html
<div class="bg-ip">IP角色</div>
<div class="bg-scene">场景</div>
<div class="bg-plot">剧情</div>
<div class="bg-meme">梗指南</div>
```

### 类型标签色

用于文字标签：

```html
<span class="type-ip">标签</span>
<span class="type-scene">标签</span>
<span class="type-plot">标签</span>
<span class="type-meme">标签</span>
```

### 占位图片

用于演示的渐变背景图片：

```html
<div class="placeholder-img ip">🎭</div>
<div class="placeholder-img scene">🏙️</div>
<div class="placeholder-img plot">🎬</div>
<div class="placeholder-img meme">🚀</div>
<div class="placeholder-img scene-context">📦</div>
```

---

## 文件结构

```
demo/
└── card-design.html          # 完整演示文件

docs/
└── card-design-system.md     # 本文档
```

---

## 最佳实践

### 1. 按钮使用规范

所有按钮必须包含基础类：
- ❌ `<button class="btn-primary">`
- ✅ `<button class="btn btn-primary">`

### 2. 事件处理规范

折叠卡片的展开按钮需要阻止事件冒泡：
```javascript
onclick="event.stopPropagation(); toggleCollapse('id', event);"
```

### 3. CSS 变量使用

优先使用 CSS 变量而非硬编码值：
- ❌ `border-radius: 8px;`
- ✅ `border-radius: var(--radius-md);`

### 4. 图片比例

根据内容选择合适的图片比例：
- 头像/图标 → `.ratio-1-1`
- 角色全身照 → `.ratio-9-16`
- 场景图 → `.ratio-16-9`

---

## 浏览器兼容性

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

需要支持：
- CSS Variables
- Flexbox
- CSS Grid
- backdrop-filter（控制按钮毛玻璃效果）
