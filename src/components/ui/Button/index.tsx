import React from 'react';
import type { ButtonProps } from '@/types/components';
import { cn } from '@/utils';
import { buttonVariants } from './styles';

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
    return (
        <button
            className={cn(buttonVariants({ variant, size, isLoading }), className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {children}
        </button>
    );
};
