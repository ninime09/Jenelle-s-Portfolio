import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-black text-white hover:bg-black/80 active:scale-95 shadow-sm',
      secondary: 'bg-white/80 backdrop-blur-md text-black border border-black/5 hover:bg-white active:scale-95 shadow-sm',
      ghost: 'bg-transparent text-black/60 hover:text-black hover:bg-black/5',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs rounded-full',
      md: 'px-5 py-2.5 text-sm rounded-full',
      lg: 'px-8 py-3.5 text-base rounded-full',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
