import React from 'react';
import type { SectionHeaderProps } from '@/types/components';
import styles from './SectionHeader.module.css';

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className={styles['section-header']}>
            <h2 className={styles['section-header__title']}>{title}</h2>
            {subtitle && <p className={styles['section-header__subtitle']}>{subtitle}</p>}
        </div>
    );
};
