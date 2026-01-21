import React from 'react';
import { Layers, Star, GitBranch } from 'lucide-react';
import { REPOS } from '@/constants';
import SectionHeader from '@/components/layout/SectionHeader';

const RepoList: React.FC = () => {
    return (
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
    );
};

export default RepoList;
