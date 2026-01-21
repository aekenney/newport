import React from 'react';
import { ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '@/constants';
import SectionHeader from '@/components/layout/SectionHeader';

const Experience: React.FC = () => {
    return (
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
    );
};

export default Experience;
