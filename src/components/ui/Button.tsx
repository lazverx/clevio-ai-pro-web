import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none font-display';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-lg gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-lg gap-2',
    lg: 'text-sm sm:text-base px-6 py-3.5 rounded-lg gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-slate-950 hover:bg-slate-800 text-white shadow-sm hover:shadow border border-slate-950',
    secondary: 'border border-slate-300 hover:border-slate-400 bg-white hover:bg-[#F3F3EE] text-slate-900 shadow-sm',
    outline: 'border border-white/60 hover:border-white bg-white/10 hover:bg-white/20 text-white',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800',
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

