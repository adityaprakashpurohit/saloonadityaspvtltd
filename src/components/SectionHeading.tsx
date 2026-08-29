import React from 'react';
import { cn } from '../utils/cn';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  label, 
  title, 
  subtitle, 
  align = 'center',
  className
}) => {
  return (
    <div className={cn(
      "flex flex-col max-w-3xl",
      {
        'items-start text-left': align === 'left',
        'items-center text-center mx-auto': align === 'center',
        'items-end text-right ml-auto': align === 'right',
      },
      className
    )}>
      {label && (
        <span className="text-rose font-sans text-xs tracking-[0.2em] uppercase mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-serif text-espresso leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate text-lg max-w-2xl font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
