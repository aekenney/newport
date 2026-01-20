import { cva } from 'class-variance-authority';

export const cardVariants = cva(
    'p-10 rounded-2xl bg-neutral-900/30 border border-white/5 transition-all duration-200',
    {
        variants: {
            hover: {
                true: 'hover:border-white/20 hover:bg-white/[0.02] hover:-translate-y-0.5',
            },
        },
        defaultVariants: {
            hover: false,
        },
    }
);
