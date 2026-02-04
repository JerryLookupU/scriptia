import React from 'react';

// Reference Tag Styles
const referenceStyles = `
.input-area {
  background: #f9fafb;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  margin-bottom: 24px;
  transition: all 0.2s ease;
}

.input-area:focus-within {
  border-color: #d1d5db;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-placeholder {
  color: #9ca3af;
  font-size: 14px;
  margin-bottom: 12px;
}

.reference-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 12px;
  color: #4b5563;
  margin-right: 8px;
  margin-bottom: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
}

.reference-tag:hover {
  border-color: #d1d5db;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.reference-tag .remove-btn {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  margin-left: 2px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.reference-tag .remove-btn:hover {
  background: #f3f4f6;
  color: #ef4444;
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
