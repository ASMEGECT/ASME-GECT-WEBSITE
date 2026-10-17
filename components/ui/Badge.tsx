import React from 'react';

type BadgeVariant =
  | 'default'
  | 'upcoming'
  | 'completed'
  | 'active'
  | 'red'
  | 'cyan'
  | 'amber';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    default:
      'bg-white/[0.05] text-muted-foreground border-white/10 hover:border-white/20',
    upcoming:
      'bg-asme-emerald/10 text-asme-emerald border-asme-emerald/30',
    completed:
      'bg-white/[0.04] text-muted-foreground/80 border-white/[0.08]',
    active:
      'bg-asme-cyan/10 text-asme-cyan border-asme-cyan/30',
    red: 'bg-asme-red/10 text-asme-red border-asme-red/30',
    cyan: 'bg-asme-cyan/10 text-asme-cyan border-asme-cyan/30',
    amber: 'bg-asme-amber/10 text-asme-amber border-asme-amber/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium uppercase tracking-wider border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {variant === 'upcoming' && (
        <span className="w-1.5 h-1.5 rounded-full bg-asme-emerald animate-pulse" />
      )}
      {variant === 'active' && (
        <span className="w-1.5 h-1.5 rounded-full bg-asme-cyan animate-pulse" />
      )}
      {children}
    </span>
  );
}
