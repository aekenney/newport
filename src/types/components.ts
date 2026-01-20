import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

/**
 * Button size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    children: ReactNode;
}

/**
 * Card component props
 */
export interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

/**
 * Badge component props
 */
export interface BadgeProps {
    children: ReactNode;
    variant?: 'orange' | 'blue' | 'neutral';
    className?: string;
}

/**
 * Section header props
 */
export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}
