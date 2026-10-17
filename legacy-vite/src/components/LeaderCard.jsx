import React from 'react';

export default function LeaderCard({ 
  name, 
  role, 
  classYear, 
  imageUrl, 
  colorClass = 'hover:border-modernist-blue', 
  overlayClass = 'bg-modernist-blue/10', 
  badgeColor = 'text-modernist-blue border-modernist-blue/30',
  onEmailClick,
  onLinkClick
}) {
  const firstName = name.split(' ')[0] || '';
  const lastName = name.split(' ').slice(1).join(' ') || '';

  return (
    <article 
      className={`group relative flex flex-col bg-surface-container-low border border-surface-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${colorClass}`}
    >
      <div className="absolute top-4 right-4 z-10">
        <span className={`bg-surface/80 backdrop-blur-sm px-3 py-1 font-label-mono-sm text-[10px] sm:text-xs border rounded-full uppercase ${badgeColor}`}>
          {role}
        </span>
      </div>
      <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
        <div className={`absolute inset-0 ${overlayClass} group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay`}></div>
        <img 
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
          src={imageUrl} 
          alt={name}
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col gap-4 bg-surface-container-low relative z-20">
        <div className="flex flex-col">
          <h3 className="font-headline-md text-2xl leading-tight text-on-surface uppercase">
            {firstName}<br/>{lastName}
          </h3>
          <span className="font-label-mono-sm text-xs text-annotation-gray uppercase mt-2">{classYear}</span>
        </div>
        <div className="h-px w-full bg-surface-white/10 my-2"></div>
        <div className="flex gap-4">
          <a 
            className="text-on-surface-variant hover:text-on-surface transition-colors" 
            href="#email" 
            onClick={(e) => {
              e.preventDefault();
              if (onEmailClick) onEmailClick();
            }}
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
          <a 
            className="text-on-surface-variant hover:text-on-surface transition-colors" 
            href="#link" 
            onClick={(e) => {
              e.preventDefault();
              if (onLinkClick) onLinkClick();
            }}
          >
            <span className="material-symbols-outlined text-[20px]">link</span>
          </a>
        </div>
      </div>
    </article>
  );
}
