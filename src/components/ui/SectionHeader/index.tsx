import React from 'react';
import type { SectionHeaderProps } from '@/types/components';
import { cn } from '@/utils';
import { sectionHeaderStyles } from './styles';

/**
 * Reusable section header component
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className={cn(sectionHeaderStyles.container)}>
            <h2 className={cn(sectionHeaderStyles.title)}>{title}</h2>
            {subtitle && <p className={cn(sectionHeaderStyles.subtitle)}>{subtitle}</p>}
        </div>
    );
};
