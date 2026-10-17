import React from 'react';

export default function Footer({ setActivePath }) {
  const handleNavClick = (path, e) => {
    e.preventDefault();
    setActivePath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-white/10 pt-margin-desktop pb-margin-mobile">
      <div className="max-w-[1440px] mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          {/* Logo & Intro */}
          <div className="md:col-span-4">
            <div className="font-headline-lg text-headline-lg text-on-surface mb-6">ASME GEC</div>
            <p className="font-body-md text-on-surface-variant max-w-sm mb-8">
              Pushing the boundaries of mechanical engineering documentation and architectural innovation at the GEC Section.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 border border-surface-white/20 flex items-center justify-center hover:bg-modernist-red hover:border-modernist-red transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a className="w-10 h-10 border border-surface-white/20 flex items-center justify-center hover:bg-modernist-red hover:border-modernist-red transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">link</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-label-mono text-label-mono text-on-surface uppercase mb-6">NAVIGATION</h4>
            <nav className="flex flex-col gap-4">
              <a
                className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-modernist-red"
                href="#home"
                onClick={(e) => handleNavClick('home', e)}
              >
                HOME
              </a>
              <a
                className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-modernist-red"
                href="#achievements"
                onClick={(e) => handleNavClick('achievements', e)}
              >
                ACHIEVEMENTS
              </a>
              <a
                className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-modernist-red"
                href="#projects"
                onClick={(e) => handleNavClick('projects', e)}
              >
                PROJECTS
              </a>
            </nav>
          </div>

          {/* Community Links */}
          <div className="md:col-span-2">
            <h4 className="font-label-mono text-label-mono text-on-surface uppercase mb-6">COMMUNITY</h4>
            <nav className="flex flex-col gap-4">
              <a
                className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-modernist-red"
                href="#team"
                onClick={(e) => handleNavClick('team', e)}
              >
                EXECOM
              </a>
              <a
                className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-modernist-red"
                href="#membership"
                onClick={(e) => handleNavClick('membership', e)}
              >
                JOIN US
              </a>
              <a
                className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-modernist-red"
                href="#learning-hub"
                onClick={(e) => handleNavClick('learning-hub', e)}
              >
                HUB
              </a>
            </nav>
          </div>

          {/* Newsletter subscription form */}
          <div className="md:col-span-3">
            <h4 className="font-label-mono text-label-mono text-on-surface uppercase mb-6">NEWSLETTER</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-0">
              <input
                className="bg-surface-container-high border-none px-4 py-3 font-label-mono text-label-mono text-on-surface flex-grow focus:ring-1 focus:ring-modernist-red outline-none"
                placeholder="ENGINEER@GEC.EDU"
                type="email"
              />
              <button type="submit" className="bg-modernist-red text-on-primary-container px-6 py-3 font-label-mono text-label-mono uppercase hover:bg-on-primary-fixed-variant transition-colors">
                JOIN
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 border-t border-surface-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-label-mono-sm text-label-mono-sm text-annotation-gray tracking-[0.2em]">
            SCALE: 0 // 04 // 08 // 16 // 32
          </div>
          <div className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase text-center md:text-right">
            © 2024 ASME GEC SECTION. ALL SPECIFICATIONS SUBJECT TO RIGOR.
          </div>
        </div>
      </div>
    </footer>
  );
}
