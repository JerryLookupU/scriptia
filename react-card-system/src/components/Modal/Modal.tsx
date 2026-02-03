import React, { useState } from 'react';
import { CardData, getCardTypeConfig } from '../../types';
import { Button, CloseButton } from '../Button/Button';

// Modal Styles
const modalStyles = `
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: var(--bg-dark);
  border-radius: var(--radius-3xl);
  width: 90%;
  max-width: 720px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: var(--shadow-modal);
  border: 1px solid var(--border);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(90deg, rgba(73, 80, 87, 0.08), transparent);
}

.modal-header h3 {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
}

.modal-header .modal-actions {
  display: flex;
  gap: 8px;
}

.modal-body {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
  padding: 20px;
}

/* Left: Image Area */
.modal-image-area {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-image-wrapper {
  width: 200px;
  height: 356px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border);
}

.prompt-box {
  padding: 10px;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.prompt-box label {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 6px;
  display: block;
}

.prompt-box textarea {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 12px;
  resize: none;
  height: 60px;
  outline: none;
  font-family: inherit;
}

.generate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background: #2d3436;
  border: none;
  border-radius: var(--radius-md);
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.generate-btn:hover {
  background: #636e72;
}

.generate-btn:active {
  transform: scale(0.98);
}

/* Right: Info Area */
.modal-info-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-section {
  padding: 14px;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
}

.info-section.priority {
  background: linear-gradient(135deg, rgba(73, 80, 87, 0.08), rgba(108, 117, 125, 0.04));
  border-color: rgba(73, 80, 87, 0.2);
}

.info-section h4 {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-section .editable-field {
  padding: 8px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: all 0.2s;
  cursor: text;
  color: var(--text-primary);
}

.info-section .editable-field:hover {
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.info-section .editable-field:focus {
  border-color: #495057;
  background: rgba(73, 80, 87, 0.05);
  outline: none;
  box-shadow: 0 0 0 3px rgba(73, 80, 87, 0.1);
}

.info-section .field-name {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
}

.info-section .field-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.type-info-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--bg-dark);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.type-info-card .type-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.type-info-card .type-details h5 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.type-info-card .type-details p {
  font-size: 12px;
  color: var(--text-muted);
}

.fields-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.field-box {
  padding: 10px;
  background: var(--bg-dark);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.field-box label {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 4px;
  display: block;
}

.field-box .field-value {
  font-size: 13px;
  color: var(--text-primary);
}

.tags-area {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f1f3f4;
  border-radius: 16px;
  font-size: 12px;
  color: #5f6368;
}

.tag-item .tag-remove {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.tag-item .tag-remove:hover {
  background: #f1f3f4;
  color: #5f6368;
}

.tag-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: #f1f3f4;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 500;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-add:hover {
  background: #e8eaed;
  color: #3c4043;
}

.tag-add:active {
  transform: scale(0.95);
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleId = 'modal-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = modalStyles;
    document.head.appendChild(style);
  }
}

// Modal Component
export interface CardModalProps {
  data: CardData;
  isOpen: boolean;
  onClose: () => void;
  onQuote?: (data: CardData) => void;
  onSave?: (data: CardData) => void;
  prompt?: string;
  fields?: { label: string; value: string }[];
}

export const CardModal: React.FC<CardModalProps> = ({
  data,
  isOpen,
  onClose,
  onQuote,
  onSave,
  prompt = '',
  fields = [],
}) => {
  const config = getCardTypeConfig(data);
  const [editedPrompt, setEditedPrompt] = useState(prompt);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            <span>{data.icon || config.icon}</span> 卡片详情
          </h3>
          <div className="modal-actions">
            <Button variant="secondary" onClick={() => onQuote?.(data)}>
              引用
            </Button>
            <Button variant="primary" onClick={() => onSave?.(data)}>
              保存
            </Button>
            <CloseButton onClick={onClose} />
          </div>
        </div>
        <div className="modal-body">
          {/* Left: Image Area */}
          <div className="modal-image-area">
            <div className="modal-image-wrapper">
              {data.imageUrl ? (
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 64,
                    background: config.gradient,
                    color: 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {data.icon || config.icon}
                </div>
              )}
            </div>
            <div className="prompt-box">
              <label>💡 图片生成提示词</label>
              <textarea
                placeholder="输入提示词生成图片..."
                value={editedPrompt}
                onChange={(e) => setEditedPrompt(e.target.value)}
              />
            </div>
            <button className="generate-btn">生成图片</button>
          </div>

          {/* Right: Info Area */}
          <div className="modal-info-area">
            <div className="info-section priority">
              <h4>📝 优先展示</h4>
              <div className="editable-field field-name" contentEditable>
                {data.name}
              </div>
              <div className="editable-field field-desc" style={{ marginTop: 10 }} contentEditable>
                {data.description}
              </div>
            </div>

            <div className="type-info-card">
              <div
                className="type-icon"
                style={{ background: config.gradient }}
              >
                {data.icon || config.icon}
              </div>
              <div className="type-details">
                <h5>{config.label}</h5>
                <p>9:16 全身立绘</p>
              </div>
            </div>

            {fields.length > 0 && (
              <div className="info-section">
                <h4>自定义字段</h4>
                <div className="fields-grid">
                  {fields.map((field, index) => (
                    <div key={index} className="field-box">
                      <label>{field.label}</label>
                      <div className="editable-field field-value" contentEditable>
                        {field.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="info-section">
              <h4>标签</h4>
              <div className="tags-area">
                {data.tags.map((tag, index) => (
                  <span key={index} className="tag-item">
                    {tag}
                    <button className="tag-remove">×</button>
                  </span>
                ))}
                <button className="tag-add">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
