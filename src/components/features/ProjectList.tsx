import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/constants';
import SectionHeader from '@/components/layout/SectionHeader';

const ProjectList: React.FC = () => {
    return (
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
    );
};

export default ProjectList;
