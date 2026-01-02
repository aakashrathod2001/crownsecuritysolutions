// components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

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
  const buttonStyle = iconBgColor ? { '--clr': iconBgColor } as React.CSSProperties : undefined;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      style={buttonStyle}
    >
      <span className={styles.buttonDecor}></span>
      <div className={styles.buttonContent}>
        <div 
          className={styles.buttonIcon}
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