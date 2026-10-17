import React from 'react';

interface SectionHeaderProps {
  indexNumber: string;
  category: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  indexNumber,
  category,
  title,
  description,
  action,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div
      className={`w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08] mb-12 ${
        align === 'center' ? 'md:text-center md:items-center' : ''
      }`}
    >
      <div className="space-y-3 max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-asme-red tracking-widest uppercase">
            {indexNumber} //
          </span>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            {category}
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05]">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
