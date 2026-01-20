import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import styles from './MobileMenu.module.css';

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
                className={styles['mobile-menu__button']}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <>
                    <div
                        className={styles['mobile-menu__overlay']}
                        onClick={onToggle}
                        aria-hidden="true"
                    />
                    <nav className={styles['mobile-menu__nav']}>
                        <div className={styles['mobile-menu__links']}>
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={onToggle}
                                    className={styles['mobile-menu__link']}
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
