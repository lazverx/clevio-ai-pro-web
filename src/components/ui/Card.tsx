import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 transition-all',
        dark
          ? 'bg-slate-900/80 border border-slate-800 text-white'
          : 'bg-white border border-slate-200/80 text-slate-900 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

