import React from 'react';

export default function DocumentCard({ 
  title, 
  author, 
  type, 
  typeColor, 
  icon, 
  iconColor, 
  desc, 
  cta, 
  onCtaClick 
}) {
  return (
    <a 
      className="group block bg-surface-container hover:bg-surface-container-high transition-all border border-surface-white/10 p-6 relative overflow-hidden w-full" 
      href="#action"
      onClick={(e) => {
        e.preventDefault();
        if (onCtaClick) onCtaClick();
      }}
    >
      <div className={`absolute top-0 right-0 p-3 text-xs font-bold font-label-mono-sm ${typeColor}`}>
        {type}
      </div>
      <div className="mb-8">
        <span className={`material-symbols-outlined text-[32px] mb-4 ${iconColor}`}>
          {icon}
        </span>
        <h3 className="font-headline-md text-on-surface text-xl mb-2 group-hover:text-modernist-red transition-colors uppercase">
          {title}
        </h3>
        <p className="font-label-mono text-xs text-annotation-gray">
          {author}
        </p>
      </div>
      <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6 text-sm">
        {desc}
      </p>
      <div className={`flex items-center gap-2 text-xs md:text-sm font-label-mono-sm group-hover:gap-4 transition-all ${iconColor}`}>
        <span>{cta}</span>
        <span className="material-symbols-outlined text-[16px]">
          {cta.includes('DOWNLOAD') ? 'arrow_downward' : 'arrow_forward'}
        </span>
      </div>
    </a>
  );
}
