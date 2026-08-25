import React from 'react';

export default function ProjectCard({ title, category, desc, imageUrl, themeColor = 'modernist-blue', onClick }) {
  const isYellow = themeColor === 'modernist-yellow';
  
  // Choose button hover styling based on theme color
  const getButtonBg = () => {
    switch (themeColor) {
      case 'modernist-yellow':
        return 'group-hover:bg-modernist-yellow group-hover:border-modernist-yellow group-hover:text-background';
      case 'modernist-blue':
      default:
        return 'group-hover:bg-modernist-blue group-hover:border-modernist-blue group-hover:text-on-primary-container';
    }
  };

  const getCategoryBg = () => {
    switch (themeColor) {
      case 'modernist-yellow':
        return 'bg-modernist-yellow text-background font-bold';
      case 'modernist-blue':
      default:
        return 'bg-modernist-blue text-on-primary-container';
    }
  };

  const getTitleHoverClass = () => {
    switch (themeColor) {
      case 'modernist-yellow':
        return 'group-hover:text-modernist-yellow';
      case 'modernist-blue':
      default:
        return 'group-hover:text-modernist-blue';
    }
  };

  return (
    <div className="group cursor-pointer w-full" onClick={onClick}>
      <div className="relative w-full h-[300px] md:h-[400px] mb-6 overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        <div className={`absolute top-4 left-4 px-3 py-1 font-label-mono-sm text-label-mono-sm rounded ${getCategoryBg()}`}>
          {category}
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`font-headline-md text-2xl md:text-3xl text-on-surface mb-2 transition-colors uppercase ${getTitleHoverClass()}`}>
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm line-clamp-2">
            {desc}
          </p>
        </div>
        <div className={`w-12 h-12 rounded-full border border-surface-white/20 flex items-center justify-center transition-colors text-on-surface shrink-0 ml-4 ${getButtonBg()}`}>
          <span className="material-symbols-outlined">north_east</span>
        </div>
      </div>
    </div>
  );
}
