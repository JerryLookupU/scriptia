import React, { useState } from 'react';
import { CardData, getCardTypeConfig } from '../../types';
import { Button, CloseButton } from '../Button/Button';

// Modal Styles
const modalStyles = `
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: #ffffff;
  border-radius: 20px;
  width: 90%;
  max-width: 720px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #f3f4f6;
  background: linear-gradient(90deg, #f9fafb, #ffffff);
}

.modal-header h3 {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1f2937;
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
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.prompt-box {
  padding: 12px;
  background: #f9fafb;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
}

.prompt-box label {
  font-size: 11px;
  color: #9ca3af;
  margin-bottom: 6px;
  display: block;
  font-weight: 500;
}

.prompt-box textarea {
  width: 100%;
  background: transparent;
  border: none;
  color: #4b5563;
  font-size: 12px;
  resize: none;
  height: 60px;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
}

.generate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.generate-btn:hover {
  background: linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transform: translateY(-1px);
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
  background: #f9fafb;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
}

.info-section.priority {
  background: linear-gradient(135deg, #f5f3ff 0%, #faf5ff 100%);
  border-color: #ddd6fe;
}

.info-section h4 {
  font-size: 11px;
  color: #9ca3af;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.info-section .editable-field {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: text;
  color: #1f2937;
  background: #ffffff;
}

.info-section .editable-field:hover {
  border-color: #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.info-section .editable-field:focus {
  border-color: #667eea;
  background: #ffffff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.info-section .field-name {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  letter-spacing: -0.01em;
}

.info-section .field-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #6b7280;
}

.type-info-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.type-info-card .type-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.type-info-card .type-details h5 {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.type-info-card .type-details p {
  font-size: 12px;
  color: #9ca3af;
}

.fields-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.field-box {
  padding: 12px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
}

.field-box label {
  font-size: 11px;
  color: #9ca3af;
  margin-bottom: 6px;
  display: block;
  font-weight: 500;
}

.field-box .field-value {
  font-size: 13px;
  color: #4b5563;
  font-weight: 500;
}

.tags-area {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 12px;
  color: #4b5563;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.tag-item:hover {
  border-color: #d1d5db;
}

.tag-item .tag-remove {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.tag-item .tag-remove:hover {
  background: #f3f4f6;
  color: #ef4444;
}

.tag-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-add:hover {
  background: #e5e7eb;
  color: #374151;
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
