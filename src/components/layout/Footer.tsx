import React from 'react';
import { SITE_CONFIG } from '@/constants';

const Footer: React.FC = () => {
    return (
        <footer className="max-w-7xl mx-auto px-10 py-40 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-20">
            <div className="space-y-6">
                <span className="text-white font-black text-2xl tracking-[0.3em]">{SITE_CONFIG.name}</span>
                <p className="text-[10px] mono text-neutral-700 uppercase tracking-[0.3em] max-w-xs leading-loose">
                    {SITE_CONFIG.footer.taglines.map((line, i) => (
                        <React.Fragment key={i}>
                            {line} <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <div className="flex flex-wrap gap-16 text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em]">
                <a href={SITE_CONFIG.social.linkedin} className="hover:text-white transition-all hover:tracking-[0.5em]">LinkedIn</a>
                <a href={SITE_CONFIG.social.github} className="hover:text-white transition-all hover:tracking-[0.5em]">GitHub</a>
                <a href={SITE_CONFIG.social.email} className="hover:text-white transition-all hover:tracking-[0.5em]">Email</a>
            </div>
        </footer>
    );
};

export default Footer;
