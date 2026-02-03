import React from 'react';

// Reference Tag Styles
const referenceStyles = `
.input-area {
  background: var(--bg-dark);
  border-radius: var(--radius-xl);
  padding: 16px;
  border: 1px solid var(--border);
  margin-bottom: 24px;
}

.input-placeholder {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 12px;
}

.reference-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f1f3f4;
  border-radius: 20px;
  font-size: 12px;
  color: #5f6368;
  margin-right: 8px;
  margin-bottom: 8px;
}

.reference-tag .remove-btn {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  margin-left: 4px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.reference-tag .remove-btn:hover {
  background: #f1f3f4;
  color: #5f6368;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleId = 'reference-tag-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = referenceStyles;
    document.head.appendChild(style);
  }
}

// Reference Tag Component
export interface ReferenceTagProps {
  icon: string;
  name: string;
  onRemove?: () => void;
}

export const ReferenceTag: React.FC<ReferenceTagProps> = ({
  icon,
  name,
  onRemove,
}) => {
  return (
    <span className="reference-tag">
      <span>{icon}</span>
      {name}
      <button className="remove-btn" onClick={onRemove}>
        ×
      </button>
    </span>
  );
};

// Input Area Component
export interface InputReferenceAreaProps {
  placeholder?: string;
  tags?: ReferenceTagProps[];
  onRemoveTag?: (index: number) => void;
}

export const InputReferenceArea: React.FC<InputReferenceAreaProps> = ({
  placeholder = '输入消息或引用卡片...',
  tags = [],
  onRemoveTag,
}) => {
  return (
    <div className="input-area">
      <p className="input-placeholder">{placeholder}</p>
      <div>
        {tags.map((tag, index) => (
          <ReferenceTag
            key={index}
            icon={tag.icon}
            name={tag.name}
            onRemove={() => onRemoveTag?.(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReferenceTag;
