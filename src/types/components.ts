import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    children: ReactNode;
}

export interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export interface BadgeProps {
    children: ReactNode;
    variant?: 'orange' | 'blue' | 'neutral';
    className?: string;
}

export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}
