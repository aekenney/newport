import React from 'react';
import type { ButtonProps } from '@/types/components';
import styles from './Button.module.css';

/**
 * Reusable Button component with variants and sizes
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    className = '',
    children,
    ...props
}) => {
    const buttonClasses = [
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        isLoading && styles['button--loading'],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={buttonClasses}
            disabled={disabled || isLoading}
            {...props}
        >
            {children}
        </button>
    );
};
