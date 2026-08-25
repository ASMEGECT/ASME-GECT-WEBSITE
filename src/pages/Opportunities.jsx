import React, { useState, useEffect } from 'react';
import ModernistButton from '../components/ModernistButton';

export default function Opportunities() {
  const [countdown, setCountdown] = useState({ days: 4, hours: 12 });
  const [activeFolder, setActiveFolder] = useState('scholarships');

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate real-time countdown decrementing
      setCountdown((prev) => {
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23 };
        }
        return prev;
      });
    }, 3600000); // every hour

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      
      {/* Hero Section */}
      <section className="w-full pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-12 relative flex justify-center items-center h-[200px] md:h-[307px]">
            <h1 className="font-display-xl text-4xl sm:text-7xl md:text-[120px] text-surface-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full whitespace-nowrap select-none pointer-events-none mix-blend-overlay">
              OPPORTUNITIES
            </h1>
            <div className="relative z-10 text-center">
              <h2 className="font-headline-lg text-lg sm:text-2xl text-on-surface uppercase tracking-widest bg-surface px-4 py-2 border border-surface-white/10 inline-block">
                FILE_08: OPPORTUNITIES
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6 text-base md:text-lg">
                A curated repository of active scholarships, technical workshops, and global ASME mandates. Precision focus on deadlines and deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-32">
        
        {/* Active Deadlines Banner */}
        <div className="w-full bg-modernist-red text-on-primary-container p-4 flex flex-col md:flex-row items-center justify-between border-t-2 border-b-2 border-surface-white/20 mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] animate-pulse">warning</span>
            <span className="font-label-mono text-label-mono text-xs sm:text-sm uppercase tracking-widest">
              CRITICAL DEADLINE APPROACHING
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="font-headline-md font-bold text-xl sm:text-2xl tabular-nums">
              {countdown.days.toString().padStart(2, '0')}
              <span className="font-label-mono text-xs opacity-70 ml-1">DAYS</span>
            </div>
            <div className="font-headline-md font-bold text-xl sm:text-2xl tabular-nums">
              {countdown.hours.toString().padStart(2, '0')}
              <span className="font-label-mono text-xs opacity-70 ml-1">HRS</span>
            </div>
            <a 
              className="px-6 py-2 bg-surface text-on-surface font-label-mono text-xs hover:bg-surface-white hover:text-surface transition-colors border border-transparent font-bold" 
              href="#scholarships"
              onClick={(e) => {
                e.preventDefault();
                setActiveFolder('scholarships');
              }}
            >
              REVIEW MANDATE
            </a>
          </div>
        </div>

        {/* Folder Layout Container */}
        <div className="relative w-full flex flex-col gap-8">
          
          {/* Scholarships Folder (Modernist Blue) */}
          <div 
            className={`relative transition-all duration-500 ${
              activeFolder === 'scholarships' ? 'z-30 scale-100' : 'z-10 opacity-70 hover:opacity-100'
            }`}
          >
            {/* Folder Tab */}
            <div className="flex cursor-pointer" onClick={() => setActiveFolder('scholarships')}>
              <div className="bg-modernist-blue text-on-primary-container px-8 py-3 rounded-t-xl font-headline-md text-xl md:text-2xl flex items-center gap-4 min-w-[200px] sm:min-w-[250px] shadow-lg tab-angle">
                SCHOLARSHIPS
              </div>
              <div className="flex-grow flex justify-end items-end pb-2 pr-4 border-b border-modernist-blue">
                <span className="font-label-mono text-xs text-modernist-blue uppercase tracking-widest hidden sm:inline">
                  GRANTS & FUNDING &lt;
                </span>
              </div>
            </div>

            {/* Folder Body Content */}
            <div className="bg-modernist-blue text-on-primary-container p-8 md:p-12 shadow-2xl rounded-tr-xl rounded-b-xl border border-surface-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Scholarship Card 1 */}
                <div className="bg-surface/10 border border-surface-white/20 p-6 flex flex-col h-full hover:bg-surface/20 transition-colors group">
                  <div className="flex justify-between items-start mb-6 border-b border-surface-white/20 pb-4">
                    <span className="font-label-mono-sm text-xs uppercase tracking-widest opacity-80">REF: S-24-01</span>
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">school</span>
                  </div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-on-primary-container mb-4 uppercase">
                    ASME Foundation Scholarship
                  </h3>
                  <p className="font-body-md text-sm opacity-90 mb-6 flex-grow">
                    Annual funding for outstanding student members pursuing mechanical engineering degrees. Merit-based evaluation.
                  </p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex justify-between items-center bg-surface-container/30 px-3 py-2 text-xs">
                      <span className="font-label-mono-sm opacity-80">AMOUNT</span>
                      <span className="font-label-mono font-bold">$5,000</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container/30 px-3 py-2 text-modernist-yellow text-xs">
                      <span className="font-label-mono-sm">DEADLINE</span>
                      <span className="font-label-mono font-bold">OCT 15, 2024</span>
                    </div>
                    <button 
                      className="w-full mt-4 bg-surface-white text-modernist-blue font-label-mono py-3 hover:bg-surface-white/90 transition-colors uppercase tracking-wider font-bold text-xs"
                      onClick={() => alert('Initiating ASME Foundation Scholarship Application')}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                {/* Scholarship Card 2 */}
                <div className="bg-surface/10 border border-surface-white/20 p-6 flex flex-col h-full hover:bg-surface/20 transition-colors group">
                  <div className="flex justify-between items-start mb-6 border-b border-surface-white/20 pb-4">
                    <span className="font-label-mono-sm text-xs uppercase tracking-widest opacity-80">REF: G-24-03</span>
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">engineering</span>
                  </div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-on-primary-container mb-4 uppercase">
                    Undergraduate Research Grant
                  </h3>
                  <p className="font-body-md text-sm opacity-90 mb-6 flex-grow">
                    Funding to support localized research projects in sustainable manufacturing and applied mechanics.
                  </p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex justify-between items-center bg-surface-container/30 px-3 py-2 text-xs">
                      <span className="font-label-mono-sm opacity-80">AMOUNT</span>
                      <span className="font-label-mono font-bold">$2,500</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container/30 px-3 py-2 text-surface-white text-xs">
                      <span className="font-label-mono-sm">DEADLINE</span>
                      <span className="font-label-mono font-bold">NOV 01, 2024</span>
                    </div>
                    <button 
                      className="w-full mt-4 border border-surface-white text-surface-white font-label-mono py-3 hover:bg-surface-white hover:text-modernist-blue transition-colors uppercase tracking-wider font-bold text-xs"
                      onClick={() => alert('Opening Research Grant Brief')}
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Right blueprint illustration block */}
                <div className="hidden lg:flex items-center justify-center p-6 border border-surface-white/10 bg-gradient-to-br from-surface-white/5 to-transparent">
                  <div className="relative w-full h-full min-h-[200px] flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full text-surface-white/20 absolute" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="100" y1="0" y2="100"></line>
                      <line stroke="currentColor" strokeWidth="0.5" x1="100" x2="0" y1="0" y2="100"></line>
                      <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.5"></circle>
                      <rect fill="none" height="60" stroke="currentColor" strokeWidth="1" width="60" x="20" y="20"></rect>
                    </svg>
                    <span className="font-display-xl-mobile text-3xl text-surface-white/30 mix-blend-overlay">FUND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshops Folder (Modernist Green) */}
          <div 
            className={`relative transition-all duration-500 -mt-6 ${
              activeFolder === 'workshops' ? 'z-30 scale-100' : 'z-10 opacity-70 hover:opacity-100'
            }`}
          >
            {/* Folder Tab */}
            <div className="flex cursor-pointer" onClick={() => setActiveFolder('workshops')}>
              <div className="bg-modernist-green text-on-primary-container px-8 py-3 rounded-t-xl font-headline-md text-xl md:text-2xl flex items-center gap-4 min-w-[200px] sm:min-w-[250px] shadow-lg tab-angle ml-12">
                WORKSHOPS
              </div>
              <div className="flex-grow flex justify-end items-end pb-2 pr-4 border-b border-modernist-green">
                <span className="font-label-mono text-xs text-modernist-green uppercase tracking-widest hidden sm:inline">
                  SKILL ACQUISITION &lt;
                </span>
              </div>
            </div>

            {/* Folder Body Content */}
            <div className="bg-modernist-green text-on-primary-container p-8 md:p-12 shadow-2xl rounded-tr-xl rounded-b-xl rounded-tl-xl border border-surface-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Workshops List */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  {/* Workshop Item 1 */}
                  <div className="bg-surface/10 border border-surface-white/20 p-4 flex flex-col sm:flex-row justify-between items-center gap-6 hover:bg-surface/20 transition-colors group">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-label-mono-sm text-[10px] bg-surface-white text-modernist-green px-2 py-1 font-bold">
                          UPCOMING
                        </span>
                        <span className="font-label-mono text-xs text-surface-white/80">WK-114</span>
                      </div>
                      <h4 className="font-headline-md text-lg md:text-xl text-on-primary-container uppercase">
                        Advanced CAD: Surface Modeling
                      </h4>
                      <p className="font-body-md text-xs text-surface-white/80 mt-1">
                        Master complex lofts, sweeps, and organic forms in SolidWorks.
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 shrink-0 w-full sm:w-auto text-xs">
                      <span className="font-label-mono text-sm md:text-base font-bold">OCT 20 // 14:00</span>
                      <span className="font-label-mono-sm text-surface-white/70">LAB 402</span>
                      <button 
                        className="mt-2 px-6 py-2 bg-surface-white text-modernist-green font-label-mono hover:bg-surface-container hover:text-surface-white transition-colors w-full sm:w-auto font-bold text-[10px]"
                        onClick={() => alert('Registering for Surface Modeling Workshop')}
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>

                  {/* Workshop Item 2 */}
                  <div className="bg-surface/10 border border-surface-white/20 p-4 flex flex-col sm:flex-row justify-between items-center gap-6 hover:bg-surface/20 transition-colors group">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-label-mono-sm text-[10px] bg-surface-white/20 text-surface-white px-2 py-1 font-bold">
                          REG OPEN
                        </span>
                        <span className="font-label-mono text-xs text-surface-white/80">WK-115</span>
                      </div>
                      <h4 className="font-headline-md text-lg md:text-xl text-on-primary-container uppercase">
                        FEA Simulation Basics
                      </h4>
                      <p className="font-body-md text-xs text-surface-white/80 mt-1">
                        Introduction to finite element analysis using ANSYS.
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 shrink-0 w-full sm:w-auto text-xs">
                      <span className="font-label-mono text-sm md:text-base font-bold">NOV 05 // 10:00</span>
                      <span className="font-label-mono-sm text-surface-white/70">VIRTUAL</span>
                      <button 
                        className="mt-2 px-6 py-2 border border-surface-white text-surface-white font-label-mono hover:bg-surface-white hover:text-modernist-green transition-colors w-full sm:w-auto font-bold text-[10px]"
                        onClick={() => alert('Registering for FEA Simulation Workshop')}
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right screenshot side */}
                <div className="lg:col-span-4 hidden lg:block">
                  <div className="w-full h-full min-h-[250px] border border-surface-white/20 p-2 relative bg-surface/10">
                    <img 
                      className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" 
                      data-alt="Wireframe modeling" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpAefmRzA7VJxcraTbDdXJEJzLGBAOYSQaBthRzG398DbrWMEj8jGv26RqOI5a-NkuQaCqUudW3Rp9vLWcCCynYsFJ4q9VnOXb6ZX7qsiG-gYLDjbLvdjysCQIwboCcag9uhBmGZ59bYlxuhVrgr1PZmoU2l4JMxy9ABno-k1dOlzQhdxhw1_pSgkHRoDkbn4n5LjQNwmqBhXOOpi5l7bmcJyp0oaPi4jmC10vTYnKDJyJNk2bJEh0Gg"
                      alt="CAD wireframe modeling screen"
                    />
                    <div className="absolute bottom-4 right-4 bg-surface-white text-modernist-green px-3 py-1 font-label-mono font-bold text-xs">
                      CAPACITY: 30
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Mandates Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <h3 className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-4 uppercase">
              GLOBAL<br/>MANDATES
            </h3>
            <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
              Access the latest directives, competitions, and opportunities directly from ASME International.
            </p>
            <div className="w-16 h-1 bg-modernist-red mb-8"></div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Mandate Card 1 */}
            <div 
              className="border border-surface-white/10 p-6 bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group"
              onClick={() => alert('Opening Student Design Competition briefcase')}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-modernist-yellow text-[32px]">emoji_events</span>
                <span className="font-label-mono-sm text-xs text-annotation-gray">[COMPETITION]</span>
              </div>
              <h4 className="font-headline-md text-lg md:text-xl text-on-surface mb-2 group-hover:text-modernist-yellow transition-colors uppercase">
                Student Design Competition (SDC)
              </h4>
              <p className="font-body-md text-on-surface-variant mb-4 text-xs line-clamp-3 leading-relaxed">
                Compete globally in designing, building, and operating a remote-controlled device to solve a specified engineering problem.
              </p>
              <div className="flex items-center gap-2 text-modernist-yellow font-label-mono text-xs">
                <span>READ BRIEF</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>

            {/* Mandate Card 2 */}
            <div 
              className="border border-surface-white/10 p-6 bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group"
              onClick={() => alert('Locating nearest EFx Festivals coordinates')}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-modernist-blue text-[32px]">public</span>
                <span className="font-label-mono-sm text-xs text-annotation-gray">[CONFERENCE]</span>
              </div>
              <h4 className="font-headline-md text-lg md:text-xl text-on-surface mb-2 group-hover:text-modernist-blue transition-colors uppercase">
                EFx Festivals
              </h4>
              <p className="font-body-md text-on-surface-variant mb-4 text-xs line-clamp-3 leading-relaxed">
                Regional engineering festivals featuring competitions, career development, and networking with industry leaders.
              </p>
              <div className="flex items-center gap-2 text-modernist-blue font-label-mono text-xs">
                <span>FIND LOCATION</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
