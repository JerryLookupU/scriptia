import React from 'react';
import { classNames } from '../../utils/classNames';
import './Button.css';

// ============================================
// Base Button
// ============================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'text';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        size === 'text' ? 'btn-text' : 'btn',
        variant === 'primary' ? 'btn-primary' : 'btn-secondary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================================
// Control Button (Card Corner)
// ============================================

export interface ControlButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  title?: string;
}

export const ControlButton: React.FC<ControlButtonProps> = ({
  icon,
  title,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className="control-btn"
      title={title}
      onClick={handleClick}
      {...props}
    >
      {icon}
    </button>
  );
};

// ============================================
// Close Button
// ============================================

export const CloseButton: React.FC<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>> = (props) => {
  return (
    <button type="button" className="close-btn" {...props}>
      ✕
    </button>
  );
};

// ============================================
// Expand Button
// ============================================

export interface ExpandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  expanded: boolean;
}

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  expanded,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className="expand-btn"
      onClick={handleClick}
      {...props}
    >
      {expanded ? '收起' : '展开'}
    </button>
  );
};
