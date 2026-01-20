import React from 'react';
import type { BadgeProps } from '@/types/components';
import { cn } from '@/utils';
import { badgeVariants } from './styles';

/**
 * Reusable Badge component for tags and labels
 */
export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
    className = '',
}) => {
    return (
        <span className={cn(badgeVariants({ variant }), className)}>
            {children}
        </span>
    );
};
