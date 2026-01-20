import React from 'react';
import type { BadgeProps } from '@/types/components';
import styles from './Badge.module.css';

/**
 * Reusable Badge component for tags and labels
 */
export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
    className = '',
}) => {
    const badgeClasses = [
        styles.badge,
        styles[`badge--${variant}`],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return <span className={badgeClasses}>{children}</span>;
};
