import React from 'react';
import {
    Github,
    Car,
    Terminal,
    Star,
    GitBranch,
    Box,
    ArrowRight,
    Droplets,
    ChevronRight,
    Cpu,
    Layers,
    FlaskConical
} from 'lucide-react';
import BurnoutHero from '@/components/features/BurnoutHero';
import { PROJECTS, EXPERIENCES, REPOS, CLUBS, SITE_CONFIG } from '@/constants';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
    <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-neutral-800"></div>
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">{subtitle || 'Registry'}</span>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-white uppercase">{title}</h2>
    </div>
);

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 z-[60] w-full bg-black/50 backdrop-blur-2xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-16">
                        <span className="font-black text-sm tracking-[0.4em] cursor-default">{SITE_CONFIG.name}</span>
                        <div className="hidden lg:flex gap-12 text-[10px] font-black text-neutral-500 uppercase tracking-widest">
                            <a href="#repos" className="hover:text-white transition-all hover:tracking-[0.2em]">Manifest</a>
                            <a href="#projects" className="hover:text-white transition-all hover:tracking-[0.2em]">Engineering</a>
                            <a href="#experience" className="hover:text-white transition-all hover:tracking-[0.2em]">History</a>
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

            {/* Hero */}
            <BurnoutHero />

            <main className="max-w-7xl mx-auto px-10 py-40 space-y-72">

                {/* Core Capabilities */}
                <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="flex items-center gap-4 text-orange-500">
                            <Cpu size={18} />
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase">Core Mission</span>
                        </div>
                        <p className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.0] text-neutral-100">
                            Engineering <span className="text-orange-500 italic">robust</span> systems for <span className="text-blue-500 italic">volatile</span> environments.
                        </p>
                        <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl font-medium">
                            Developing critical infrastructure at the intersection of software and physical reality.
                            Specializing in high-throughput data processing for industrial SCADA and performance automotive telemetry.
                        </p>

                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-orange-500">
                                    <Car size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Low Latency</span>
                                </div>
                                <p className="text-sm text-neutral-400 leading-relaxed">Reducing execution overhead in performance-critical C++ environments for real-time sensor ingestion.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-blue-500">
                                    <Droplets size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Fluid Dynamics</span>
                                </div>
                                <p className="text-sm text-neutral-400 leading-relaxed">Modeling complex hydraulic logic and automated valve control for regional wastewater management.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Repos */}
                <section id="repos">
                    <SectionHeader title="Source Registry" subtitle="Software Infrastructure" />
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

                {/* Projects */}
                <section id="projects">
                    <SectionHeader title="Case Studies" subtitle="Physical Systems" />
                    <div className="space-y-12">
                        {PROJECTS.map(project => (
                            <div
                                key={project.id}
                                className="p-12 rounded-3xl bg-neutral-900/20 border border-white/5 flex flex-col lg:flex-row gap-16 group hover:border-white/20 transition-all"
                            >
                                <div className="w-full lg:w-[450px] aspect-video rounded-2xl overflow-hidden bg-neutral-900 shrink-0 border border-white/5">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className={`text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-md ${project.category === 'automotive' ? 'text-orange-500 bg-orange-500/5' : 'text-blue-400 bg-blue-400/5'}`}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-bold mb-6 flex items-center gap-6">
                                        {project.title}
                                        <ArrowRight size={24} className="opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-neutral-600" />
                                    </h3>
                                    <p className="text-neutral-500 text-lg leading-relaxed mb-12 max-w-3xl">{project.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-5 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] text-neutral-500 font-bold uppercase tracking-widest group-hover:text-white group-hover:bg-white/10 transition-all">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience & Orgs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
                    <section id="experience">
                        <SectionHeader title="Professional" subtitle="History" />
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
                        <SectionHeader title="Leadership" subtitle="Organizations" />
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
        </div>
    );
};

export default App;
