'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/', num: '01' },
  { name: 'About', href: '/about', num: '02' },
  { name: 'Events', href: '/events', num: '03' },
  { name: 'Projects', href: '/projects', num: '04' },
  { name: 'Team', href: '/team', num: '05' },
  { name: 'Membership', href: '/membership', num: '06' },
  { name: 'Contact', href: '/contact', num: '07' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#090B0E]/95 backdrop-blur-md border-white/10 shadow-2xl shadow-black/50'
          : 'bg-[#090B0E]/80 backdrop-blur-sm border-white/[0.08]'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="ASME GECT Home"
        >
          <div className="w-10 h-10 bg-asme-red text-white flex items-center justify-center font-bold font-mono tracking-tighter text-sm rounded-sm transition-transform duration-200 group-hover:scale-105 shadow-lg shadow-asme-red/20">
            ASME
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-tight text-foreground group-hover:text-white transition-colors">
                GECT
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-muted-foreground border border-white/10">
                SEC.8040
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest -mt-0.5">
              Govt. Eng. College Thrissur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-colors duration-150 rounded ${
                  isActive
                    ? 'text-white font-medium bg-white/[0.06]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-asme-red" />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/membership"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-asme-red hover:bg-asme-red-hover text-white text-xs font-mono font-medium tracking-wider uppercase transition-all duration-150 rounded-sm shadow-md shadow-asme-red/20 hover:shadow-asme-red/30 active:scale-95"
          >
            <span>Join Chapter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded border border-white/10 text-foreground hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-asme-red" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(5rem+1px)] bottom-0 bg-[#090B0E]/98 backdrop-blur-xl border-b border-white/10 overflow-y-auto px-6 py-8 flex flex-col justify-between z-50">
          <div className="space-y-6">
            <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest pb-3 border-b border-white/10 flex items-center justify-between">
              <span>Navigation Directory</span>
              <span>7 Modules</span>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between py-3 px-4 rounded text-base font-mono uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-asme-red/10 text-asme-red border-l-2 border-asme-red font-semibold'
                        : 'text-foreground/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {link.num}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Footer Info */}
          <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
              <Cpu className="w-4 h-4 text-asme-red" />
              <span>GEC Thrissur • Dept. of Mechanical Engg.</span>
            </div>
            <Link
              href="/membership"
              className="w-full flex items-center justify-center gap-2 py-3 bg-asme-red hover:bg-asme-red-hover text-white text-xs font-mono font-medium tracking-wider uppercase rounded-sm"
            >
              <span>Apply for ASME Membership</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
