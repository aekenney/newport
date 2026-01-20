import React, { useState } from 'react';
import {
    Car,
    Terminal,
    Star,
    GitBranch,
    Layers,
    Droplets,
    ChevronRight,
    Cpu
} from 'lucide-react';
import { BurnoutHero } from '@/components/features/BurnoutHero';
import { Button, SectionHeader, MobileMenu } from '@/components/ui';
import {
    EXPERIENCES,
    REPOS,
    CLUBS,
    SITE_CONFIG,
    SOCIAL_LINKS,
    NAV_LINKS,
    FOOTER_LINKS,
    ABOUT_CONTENT,
    SECTION_HEADERS,
    FOOTER_CONTENT
} from '@/constants';

const App: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-bold"
            >
                Skip to main content
            </a>
            <nav className="fixed top-0 z-[60] w-full bg-black/50 backdrop-blur-2xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-16">
                        <span className="font-black text-sm tracking-[0.4em] cursor-default">{SITE_CONFIG.name.toUpperCase()}</span>
                        <div className="hidden lg:flex gap-12 text-[10px] font-black text-neutral-500 uppercase tracking-widest">
                            {NAV_LINKS.map(link => (
                                <a key={link.href} href={link.href} className="hover:text-white transition-all hover:tracking-[0.2em]">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded" aria-label="GitHub Profile">
                            <Github size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.resume} download>
                            <Button>Resume</Button>
                        </a>
                        <MobileMenu isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </div>
                </div>
            </nav>
            <BurnoutHero />
            <main id="main" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-40 space-y-36 md:space-y-72">
                <section id="about" className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="flex items-center gap-4 text-orange-500 justify-center">
                        <Cpu size={18} />
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase">{ABOUT_CONTENT.badge}</span>
                    </div>
                    <p className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.0] text-neutral-100">
                        {ABOUT_CONTENT.headline.prefix} <span className="text-orange-500 italic">{ABOUT_CONTENT.headline.highlight1}</span> {ABOUT_CONTENT.headline.middle} <span className="text-blue-500 italic">{ABOUT_CONTENT.headline.highlight2}</span> {ABOUT_CONTENT.headline.suffix}
                    </p>
                    <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl font-medium mx-auto">
                        {ABOUT_CONTENT.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5 max-w-3xl mx-auto">
                        {ABOUT_CONTENT.capabilities.map((capability, index) => (
                            <div key={index} className="space-y-4">
                                <div className={`flex items-center gap-3 text-${capability.color}-500 justify-center`}>
                                    {capability.icon === 'car' ? <Car size={16} /> : <Droplets size={16} />}
                                    <span className="text-[10px] font-black uppercase tracking-widest">{capability.title}</span>
                                </div>
                                <p className="text-sm text-neutral-400 leading-relaxed">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="repos">
                    <SectionHeader title={SECTION_HEADERS.repos.title} subtitle={SECTION_HEADERS.repos.subtitle} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {REPOS.map(repo => (
                            <a
                                key={repo.id}
                                href={repo.url}
                                className="p-10 rounded-3xl bg-neutral-900/30 border border-white/5 group hover:border-white/20 transition-all hover:-translate-y-2 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-10">
                                        <Layers size={22} className="text-neutral-700 group-hover:text-white transition-colors" />
                                        <div className="flex gap-4 text-[10px] text-neutral-600 font-bold mono">
                                            <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                                            <span className="flex items-center gap-1"><GitBranch size={12} /> {repo.forks}</span>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 group-hover:text-white transition-colors">{repo.name}</h3>
                                    <p className="text-neutral-500 text-sm mb-12 line-clamp-3 leading-relaxed">
                                        {repo.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${repo.language === 'C++' ? 'bg-orange-500' : 'bg-blue-400'}`}></div>
                                    <span className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.2em]">{repo.language}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
                    <section id="experience">
                        <SectionHeader title={SECTION_HEADERS.experience.title} subtitle={SECTION_HEADERS.experience.subtitle} />
                        <div className="space-y-24">
                            {EXPERIENCES.map(exp => (
                                <div key={exp.id} className="group">
                                    <div className="mb-8">
                                        <h4 className="font-bold text-2xl mb-2 group-hover:text-orange-500 transition-colors">{exp.role}</h4>
                                        <div className="flex items-center gap-4 text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">
                                            <span className="text-neutral-300">{exp.company}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-5">
                                        {exp.description.map((p, i) => (
                                            <li key={i} className="text-sm text-neutral-500 leading-relaxed flex gap-6">
                                                <ChevronRight size={16} className="mt-1 shrink-0 text-neutral-800 group-hover:text-orange-500 transition-colors" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="community">
                        <SectionHeader title={SECTION_HEADERS.community.title} subtitle={SECTION_HEADERS.community.subtitle} />
                        <div className="space-y-12">
                            {CLUBS.map(club => (
                                <div key={club.id} className="flex gap-10 group p-8 rounded-3xl hover:bg-white/[0.02] transition-all border border-transparent hover:border-white/5">
                                    <div className="w-16 h-16 bg-neutral-900 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                                        {club.icon === 'car' ? <Car size={28} className="text-orange-500" /> : club.icon === 'droplet' ? <Droplets size={28} className="text-blue-500" /> : <Terminal size={28} className="text-white" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">{club.name}</h4>
                                        <span className="block text-[10px] text-neutral-600 font-black uppercase tracking-[0.2em] mb-4">{club.role}</span>
                                        <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">{club.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <footer className="max-w-7xl mx-auto px-10 py-40 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-20">
                <div className="space-y-6">
                    <span className="text-white font-black text-2xl tracking-[0.3em]">{SITE_CONFIG.name.toUpperCase()}</span>
                    <p className="text-[10px] mono text-neutral-700 uppercase tracking-[0.3em] max-w-xs leading-loose">
                        {FOOTER_CONTENT.taglines.map((tagline, index) => (
                            <React.Fragment key={index}>
                                {tagline}
                                {index < FOOTER_CONTENT.taglines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                <div className="flex flex-wrap gap-16 text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em]">
                    {FOOTER_LINKS.map(link => (
                        <a key={link.label} href={link.href} className="hover:text-white transition-all hover:tracking-[0.5em]" target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default App;
