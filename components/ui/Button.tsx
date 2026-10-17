import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  external,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-asme-red disabled:opacity-50 disabled:pointer-events-none rounded-sm';

  const sizeStyles = {
    sm: 'text-[11px] px-3.5 py-1.5',
    md: 'text-xs px-5 py-2.5',
    lg: 'text-sm px-6 py-3.5',
  };

  const variantStyles = {
    primary:
      'bg-asme-red hover:bg-asme-red-hover text-white shadow-lg shadow-asme-red/20 hover:shadow-asme-red/30 active:scale-[0.98]',
    secondary:
      'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-white/[0.05] text-foreground hover:text-white border border-white/20 hover:border-white/40 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-white/[0.05] text-muted-foreground hover:text-white active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          <span>{children}</span>
          {icon || <ArrowUpRight className="w-3.5 h-3.5" />}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
