import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-sans font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-espresso focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            'bg-espresso text-ivory hover:bg-black hover:-translate-y-0.5': variant === 'primary',
            'bg-rose text-white hover:bg-[#A3865A] hover:-translate-y-0.5': variant === 'secondary',
            'border border-espresso text-espresso hover:bg-espresso hover:text-ivory': variant === 'outline',
            'text-espresso hover:bg-champagne/50': variant === 'ghost',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
