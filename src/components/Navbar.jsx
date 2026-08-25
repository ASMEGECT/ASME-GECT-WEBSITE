import React, { useState } from 'react';

const navLinks = [
  { name: 'HOME', path: 'home', num: '01' },
  { name: 'ACHIEVEMENTS', path: 'achievements', num: '02' },
  { name: 'PROJECTS', path: 'projects', num: '03' },
  { name: 'TEAM', path: 'team', num: '04' },
  { name: 'MEMBERSHIP', path: 'membership', num: '05' },
  { name: 'LEARNING HUB', path: 'learning-hub', num: '06' },
  { name: 'OPPORTUNITIES', path: 'opportunities', num: '07' },
  { name: 'CONTACT', path: 'contact', num: '08' }
];

export default function Navbar({ activePath, setActivePath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (path, e) => {
    e.preventDefault();
    setActivePath(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-surface-white/10">
        <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActivePath('home')}>
            <div className="bg-modernist-red p-2 rounded-lg">
              <span className="font-display-xl-mobile text-[24px] text-on-primary-container leading-none uppercase">ASME</span>
            </div>
            <div className="h-8 w-px bg-surface-white/20"></div>
            <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-widest hidden sm:inline">GEC SECTION</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-unit">
            {navLinks.map((link) => {
              const isActive = activePath === link.path;
              return (
                <a
                  key={link.path}
                  href={`#${link.path}`}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`px-4 py-2 font-label-mono text-label-mono transition-all ${
                    isActive
                      ? 'text-modernist-red border-b-2 border-modernist-red'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* User Icon & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center bg-surface-container rounded-lg border border-surface-white/10 hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-surface flex flex-col transition-opacity duration-300">
          <div className="p-margin-mobile flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <span className="font-label-mono text-label-mono text-on-surface-variant">INDEX / NAV</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center bg-modernist-red text-white rounded-full hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-4 font-headline-lg text-[36px] uppercase">
              {navLinks.map((link) => {
                const isActive = activePath === link.path;
                return (
                  <a
                    key={link.path}
                    href={`#${link.path}`}
                    onClick={(e) => handleLinkClick(link.path, e)}
                    className={`flex items-center justify-between border-b border-surface-variant pb-2 transition-all ${
                      isActive ? 'text-modernist-red italic' : 'text-on-surface'
                    }`}
                  >
                    {link.name}
                    <span className="text-label-mono font-label-mono text-annotation-gray opacity-40">{link.num}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
