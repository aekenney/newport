import React from 'react';
import { Car, Droplets, Terminal } from 'lucide-react';
import { CLUBS } from '@/constants';
import SectionHeader from '@/components/layout/SectionHeader';

const Community: React.FC = () => {
    return (
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
    );
};

export default Community;
