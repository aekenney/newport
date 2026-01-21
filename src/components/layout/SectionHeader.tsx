import React from 'react';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
    <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-neutral-800"></div>
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-600 uppercase">{subtitle || 'Registry'}</span>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-white uppercase">{title}</h2>
    </div>
);

export default SectionHeader;
