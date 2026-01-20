import React from 'react';
import type { CardProps } from '@/types/components';
import styles from './Card.module.css';

/**
 * Reusable Card component for consistent container styling
 */
export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = false,
}) => {
    const cardClasses = [
        styles.card,
        hover && styles['card--hover'],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={cardClasses}>{children}</div>;
};
