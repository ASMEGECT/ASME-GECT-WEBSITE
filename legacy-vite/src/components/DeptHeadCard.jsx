import React from 'react';

export default function DeptHeadCard({ 
  name, 
  role, 
  tag, 
  icon, 
  activeColor = 'group-hover:bg-modernist-purple group-hover:border-modernist-purple', 
  linkColor = 'text-modernist-purple',
  onContactClick
}) {
  return (
    <div 
      className="bg-surface border border-surface-white/10 p-6 flex flex-col gap-6 hover:bg-surface-container-high transition-colors group w-full"
    >
      <div className="flex justify-between items-start">
        <span className={`w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-surface-white/5 transition-all duration-300 ${activeColor}`}>
          <span className="material-symbols-outlined text-[20px] text-on-surface group-hover:text-background transition-colors">
            {icon}
          </span>
        </span>
        <span className="font-label-mono-sm text-xs text-annotation-gray uppercase border border-surface-white/10 px-2 py-1">
          {tag}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-headline-md text-[20px] leading-tight text-on-surface uppercase">
          {name}
        </h4>
        <span className="font-label-mono-sm text-xs text-on-surface-variant">{role}</span>
      </div>
      <a 
        className={`font-label-mono-sm text-xs hover:underline uppercase mt-auto flex items-center gap-2 ${linkColor}`}
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          if (onContactClick) onContactClick();
        }}
      >
        Contact 
        <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
      </a>
    </div>
  );
}
