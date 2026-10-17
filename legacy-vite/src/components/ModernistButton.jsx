import React from 'react';

export default function ModernistButton({ children, onClick, icon = 'arrow_forward', className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-modernist-red hover:bg-on-primary-fixed-variant transition-colors text-on-primary-container px-8 py-6 rounded-lg font-label-mono text-label-mono uppercase tracking-widest flex items-center justify-between w-fit group font-bold ${className}`}
    >
      {children}
      {icon && (
        <span className="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">
          {icon}
        </span>
      )}
    </button>
  );
}
