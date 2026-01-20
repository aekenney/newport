import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
    'inline-flex items-center px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-200 border',
    {
        variants: {
            variant: {
                neutral: 'bg-white/5 text-neutral-400 border-white/10',
                orange: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
                blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            },
        },
        defaultVariants: {
            variant: 'neutral',
        },
    }
);
