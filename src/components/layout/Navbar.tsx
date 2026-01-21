import React from 'react';
import { Github } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/constants';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 z-[60] w-full bg-black/50 backdrop-blur-2xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
                <div className="flex items-center gap-16">
                    <span className="font-black text-sm tracking-[0.4em] cursor-default">{SITE_CONFIG.name}</span>
                    <div className="hidden lg:flex gap-12 text-[10px] font-black text-neutral-500 uppercase tracking-widest">
                        {NAV_LINKS.map(link => (
                            <a key={link.href} href={link.href} className="hover:text-white transition-all hover:tracking-[0.2em]">{link.label}</a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <button className="bg-white text-black px-8 py-2 rounded-full text-[10px] font-black tracking-widest hover:bg-neutral-200 transition-all uppercase">
                        Resume
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
