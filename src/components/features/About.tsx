import React from 'react';
import { Cpu, Car, Droplets } from 'lucide-react';

const About: React.FC = () => {
    return (
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
    );
};

export default About;
