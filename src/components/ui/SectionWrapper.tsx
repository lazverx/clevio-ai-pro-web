import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
  snap?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className,
  containerClassName,
  eyebrow,
  title,
  subtitle,
  children,
  dark = false,
  snap = true,
}) => {
  return (
    <section
      id={id}
      className={cn(
        snap ? 'snap-section' : '',
        'py-14 sm:py-20 lg:py-24 relative overflow-hidden box-border',
        dark ? 'bg-surface-dark text-white' : 'bg-[#FAFAF8] text-[#111110]',
        className
      )}
    >
      <div className={cn('container-executive', containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className="mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
            {eyebrow && (
              <div className="flex items-center gap-2">
                <span className={cn('w-5 sm:w-6 h-0.5 inline-block', dark ? 'bg-brand-400' : 'bg-brand-600')} />
                <span className={cn('text-[10px] sm:text-xs font-bold uppercase tracking-widest font-display', dark ? 'text-brand-400' : 'text-slate-500')}>
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className={cn('text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-display', dark ? 'text-white' : 'text-slate-950')}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('text-sm sm:text-base leading-relaxed max-w-2xl', dark ? 'text-slate-400' : 'text-slate-600')}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

