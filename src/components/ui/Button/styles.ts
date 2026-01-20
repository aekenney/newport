import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    'inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 border border-transparent',
    {
        variants: {
            variant: {
                primary: 'bg-white text-black hover:bg-neutral-200',
                secondary: 'bg-neutral-800 text-white border-white/10 hover:bg-neutral-700 hover:border-white/20',
                ghost: 'bg-transparent text-neutral-400 hover:text-white hover:bg-white/5',
            },
            size: {
                sm: 'px-4 py-1 text-[10px] rounded-lg',
                md: 'px-6 py-2 text-xs rounded-xl',
                lg: 'px-8 py-4 text-sm rounded-2xl',
            },
            isLoading: {
                true: 'text-transparent relative pointer-events-none after:absolute after:w-4 after:h-4 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-2 after:border-current after:rounded-full after:border-t-transparent after:animate-spin',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);
