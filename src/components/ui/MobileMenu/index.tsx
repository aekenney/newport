import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { cn } from '@/utils';
import { mobileMenuStyles } from './styles';

interface MobileMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

/**
 * Mobile navigation menu component
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
    return (
        <>
            <button
                onClick={onToggle}
                className={cn(mobileMenuStyles.button)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <>
                    <div
                        className={cn(mobileMenuStyles.overlay)}
                        onClick={onToggle}
                        aria-hidden="true"
                    />
                    <nav className={cn(mobileMenuStyles.nav)}>
                        <div className={cn(mobileMenuStyles.links)}>
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={onToggle}
                                    className={cn(mobileMenuStyles.link)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                </>
            )}
        </>
    );
};
