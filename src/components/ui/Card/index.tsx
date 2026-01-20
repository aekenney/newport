import React from 'react';
import type { CardProps } from '@/types/components';
import { cn } from '@/utils';
import { cardVariants } from './styles';

/**
 * Reusable Card component for consistent container styling
 */
export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = false,
}) => {
    return (
        <div className={cn(cardVariants({ hover }), className)}>
            {children}
        </div>
    );
};
