import React from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
