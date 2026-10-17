import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ModernistButton from '../components/ModernistButton';

export default function Projects() {
  const ongoingProjects = [
    {
      title: 'PROJECT VORTEX',
      category: 'AERO-DYNAMICS',
      themeColor: 'modernist-blue',
      desc: 'Advanced fluid dynamics research applied to micro-turbine efficiency. Next-generation structural testing underway.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLXRsg3vSzCXMKvodIMkQw8KDCRqPcveZqWKExELjM72sp-n9eUEUDtKjwdKUacAjLagZeqIq1zGMhii5-Gqq3KOsGXV9PWRJ9j1P4LXIVDJKLTBGtwb7J_fj1cx6EQRsC_bbj3oIUebGvA0-GSuJk5xLQdZI11hrNkBHo_Df4glCbH6goPRg_HiG8gSlJWgcAvGO2xNtDefMRRIY2BnmW8p2xzzZKpUA_yrdpkgfEqawKBZysNF9jSw'
    },
    {
      title: 'IGNIS PROTOCOL',
      category: 'THERMAL SYSTEMS',
      themeColor: 'modernist-yellow',
      desc: 'Mapping heat dissipation in high-stress architectural joints. A joint venture with the materials science division.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcKpxRLgkEQda8kGWT1FF6-qLEbB3qgC-fTVZ1KFBhoMtnmQUbJ2tfm-fzP3DKglQVmZNF5m0lwApXqsUfkfrL354kkYr2-liO8yV76R7Cd77kWPY_k1KerUANkwMNzP0TOrY4AiS5TCn1m8JOremQm66K2lF4bCPM9YKUbXYonrWv6qo-5m8xRXjlv83Q7eXK40AUUPW1NJqNBnqdUqo5kMvN53AGE1bv-vci2Wc8ditkNyZK-hKt0A'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Billboard Hero Section */}
      <section className="relative w-full pt-margin-desktop pb-32 overflow-hidden flex flex-col items-center border-b border-surface-white/10">
        <div className="max-w-[1440px] w-full px-margin-mobile md:px-margin-desktop relative z-10">
          
          {/* Overline */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-modernist-red"></span>
            <span className="font-label-mono text-label-mono text-modernist-red tracking-[0.2em] uppercase">UPCOMING INITIATIVE</span>
          </div>

          {/* Massive Billboard Text & Marquee */}
          <div className="relative w-full">
            <h1 className="font-display-xl text-5xl sm:text-7xl md:text-8xl lg:text-[120px] text-on-background uppercase tracking-tighter mix-blend-difference relative z-20 leading-none">
              SYNERGIA<br/>
              <span className="text-modernist-red">24</span> / HORIZON
            </h1>
            
            {/* Sliding Marquee */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] flex gap-8 opacity-20 pointer-events-none select-none overflow-hidden animate-marquee">
              <span className="font-display-xl text-3xl sm:text-5xl md:text-7xl lg:text-[120px] text-surface-white/50 whitespace-nowrap">
                BUILDING THE FUTURE • SYNERGIA 24 • INNOVATION •
              </span>
              <span className="font-display-xl text-3xl sm:text-5xl md:text-7xl lg:text-[120px] text-surface-white/50 whitespace-nowrap">
                BUILDING THE FUTURE • SYNERGIA 24 • INNOVATION •
              </span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-16 relative z-30">
            {/* Left Panel: Context */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8 text-base md:text-lg">
                  A confluence of mechanical precision and visionary design. Join us for a multi-day symposium dedicated to pushing the boundaries of what is possible in modern engineering.
                </p>
                <div className="flex flex-col gap-4 font-label-mono text-label-mono text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-modernist-red">calendar_today</span>
                    <span>OCTOBER 15-18, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-modernist-red">location_on</span>
                    <span>MAIN CAMPUS, ENGINEERING WING</span>
                  </div>
                </div>
              </div>
              <ModernistButton onClick={() => alert('Initiating Synergia Registration')}>
                REGISTER NOW
              </ModernistButton>
            </div>

            {/* Right Panel: Visual Brutalist Image */}
            <div className="md:col-span-7 h-[300px] md:h-[500px] relative group">
              <div 
                className="w-full h-full bg-cover bg-center rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out border border-surface-white/10" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQiGKVOqzQ-QIXuIsjNUniQfTQOrPUGvPd2Pg3mwqyQOcgk8DzJTnGvZ6R4GoMvdIvjNm4F0RBtkNhHCSdyA0y4n9FFVq9plJ-IgYJxRCST0udy2nva1dzuddnbtXf6eawYcWA6EvrS70KMao54iZ2egYpm3SYZKTk5PliTHYBf2UcpnL7cAXxkO4xUPKXwZ7xT6DcjiUfNKP5ky7kIc93b9HY_9XBenrlI5_mwH1IPf0NR9V4D-3qfw')` }}
              ></div>
              {/* Technical Overlay */}
              <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md border border-surface-white/20 p-4 rounded-lg flex flex-col gap-2">
                <span className="font-label-mono-sm text-label-mono-sm text-modernist-red">IMG_REF: SYNERGIA_01</span>
                <div className="w-full h-px bg-surface-white/20"></div>
                <div className="flex gap-4 font-label-mono-sm text-label-mono-sm text-on-surface-variant text-[10px] sm:text-xs">
                  <span>LAT: 34.0522 N</span>
                  <span>LON: 118.2437 W</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Billboard Grid */}
      <section className="w-full py-margin-desktop bg-surface-container-lowest">
        <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase leading-tight">
              ONGOING<br/>INITIATIVES
            </h2>
            <span className="font-label-mono text-label-mono text-annotation-gray tracking-widest text-xs">
              STATUS: ACTIVE PORTFOLIO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {ongoingProjects.map((project, idx) => (
              <ProjectCard 
                key={idx}
                {...project}
                onClick={() => alert(`Reviewing details for ${project.title}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
