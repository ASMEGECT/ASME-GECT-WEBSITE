import React from 'react';

export default function TimelineFolder({ 
  year, 
  title, 
  award, 
  location, 
  desc, 
  colorClass, 
  icon, 
  stats, 
  imageUrl, 
  hasLink, 
  linkLabel, 
  isOpen, 
  onToggle, 
  stackIndex 
}) {
  return (
    <div
      style={{ zIndex: isOpen ? 40 : stackIndex * 10 }}
      className="relative w-full transition-all duration-500 ease-in-out cursor-pointer"
      onClick={onToggle}
    >
      {/* Folder Tab */}
      <div className="flex">
        <div
          className={`${colorClass} text-on-primary-container px-8 py-3 tab-angle font-headline-md text-xl md:text-2xl inline-flex items-center min-w-[150px] sm:min-w-[200px] z-10 relative`}
        >
          {year}
        </div>
        <div
          className={`${colorClass} text-on-primary-container/80 px-4 md:px-6 py-4 flex-grow flex justify-end items-center -ml-4 z-0 rounded-tr-lg border-t border-r border-surface-white/20`}
        >
          <span className="font-label-mono text-[10px] sm:text-xs md:text-sm uppercase flex items-center gap-2">
            {title}
            <span
              className={`material-symbols-outlined align-middle ml-2 text-[18px] transition-transform duration-300 ${
                isOpen ? 'rotate-90' : '-rotate-90'
              }`}
            >
              chevron_left
            </span>
          </span>
        </div>
      </div>

      {/* Folder Content Body */}
      <div
        className={`${colorClass} w-full overflow-hidden transition-all duration-500 border-l border-r border-b border-surface-white/20 rounded-b-lg ${
          isOpen ? 'max-h-[1000px] p-8 md:p-12 opacity-100' : 'max-h-0 p-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="font-headline-lg text-2xl md:text-[36px] text-on-primary-container mb-4 uppercase leading-tight">
                {award}
              </h3>
              <p className="font-label-mono-sm text-xs text-on-primary-container/70 mb-6 uppercase tracking-widest">
                {location}
              </p>
            </div>
            {icon && (
              <div className="mt-8 lg:mt-0">
                <span className="material-symbols-outlined text-[48px] text-on-primary-container/30">
                  {icon}
                </span>
              </div>
            )}
          </div>

          {/* Right Column Details */}
          <div className="lg:col-span-8">
            <p className="font-body-md text-body-md text-on-primary-container/90 leading-relaxed max-w-3xl mb-8 text-base">
              {desc}
            </p>

            {/* Render Stats list if provided */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-8 border-t border-on-primary-container/20 pt-8">
                {stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <div className="font-display-xl-mobile text-2xl sm:text-3xl md:text-[40px] text-on-primary-container leading-none">
                      {stat.value}
                    </div>
                    <div className="font-label-mono-sm text-[10px] md:text-xs text-on-primary-container/70 mt-2 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Design Spec Link */}
            {hasLink && (
              <div className="flex gap-4">
                <a
                  className="px-6 py-3 bg-surface-white text-modernist-green font-label-mono text-xs md:text-sm rounded-lg hover:bg-surface-white/90 transition-colors uppercase font-bold"
                  href="#spec"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  {linkLabel || 'View Details'}
                </a>
              </div>
            )}

            {/* Image Block */}
            {imageUrl && (
              <div
                className="w-full h-48 bg-cover bg-center rounded-lg flex items-center justify-center border border-surface-white/20 relative group"
                style={{ backgroundImage: `url('${imageUrl}')` }}
              >
                <div className="absolute inset-0 bg-black/25 mix-blend-multiply rounded-lg"></div>
                <span className="relative z-10 font-label-mono text-xs text-surface-white uppercase tracking-widest opacity-50 bg-background/80 px-4 py-2">
                  Visual Documentation
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
