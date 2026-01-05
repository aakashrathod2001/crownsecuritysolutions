// components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

// Reusable arrow icon SVG
export const ArrowIcon: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#FFFFFF'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    className={className}
  >
    <path
      d="M10.3603 6.82812H0.5V6.0118H10.3603L5.63186 1.28339L6.21429 0.705673L11.9286 6.41995L6.21429 12.1342L5.63186 11.5565L10.3603 6.82812Z"
      fill={color}
      stroke={color}
    />
  </svg>
);

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  iconBgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  icon,
  className = '',
  backgroundColor,
  textColor,
  iconBgColor,
}) => {
  const buttonStyle = iconBgColor ? { '--icon-clr': iconBgColor } as React.CSSProperties : undefined;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      style={buttonStyle}
    >
      <span className={styles.buttonDecor}></span>
      <div className={styles.buttonContent}>
        <div
          className={`${styles.buttonIcon} ${iconBgColor ? styles.customIconBg : ''}`}
          style={iconBgColor ? { backgroundColor: iconBgColor } : undefined}
        >
          <span className={styles.icon}>{icon}</span>
        </div>
        <span
          className={styles.buttonText}
          style={textColor ? { color: textColor } : undefined}
        >
          {text}
        </span>
      </div>
    </button>
  );
};

export default Button;
