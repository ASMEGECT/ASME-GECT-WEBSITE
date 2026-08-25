import React, { useState, useEffect } from 'react';
import ModernistButton from '../components/ModernistButton';

export default function Membership() {
  const [rosterCount, setRosterCount] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0%');

  useEffect(() => {
    const targetNumber = 428;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = Math.floor(duration / steps);
    let currentNumber = 0;

    // Trigger progress bar width animation
    const percentage = (targetNumber / 500) * 100;
    setProgressWidth(`${percentage}%`);

    const timer = setInterval(() => {
      currentNumber += Math.ceil(targetNumber / steps);
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(timer);
      }
      setRosterCount(currentNumber);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      {/* Hero / Introduction */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-margin-desktop pb-32 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          
          {/* Big Typographic Title */}
          <div className="col-span-1 md:col-span-12 relative mb-8">
            <h1 className="font-display-xl text-5xl sm:text-7xl md:text-[120px] text-surface-white uppercase z-10 relative break-words leading-[0.85]">
              MEMBERSHIP
            </h1>
            <div className="absolute -top-16 left-0 font-display-xl text-[120px] sm:text-[200px] md:text-[300px] text-surface-white/5 uppercase select-none z-0 whitespace-nowrap leading-none tracking-tighter mix-blend-overlay">
              JOIN US
            </div>
          </div>

          {/* Description Block */}
          <div className="col-span-1 md:col-start-3 md:col-span-5 relative z-10">
            <div className="w-16 h-1 bg-modernist-red mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8 text-base md:text-lg">
              The ASME GEC Section is a collective of forward-thinking engineering students, architectural innovators, and technical documentarians. We build the future through rigorous analysis and bold design.
            </p>
          </div>

          {/* Dynamic Counter */}
          <div className="col-span-1 md:col-start-9 md:col-span-4 flex flex-col items-start md:items-end relative z-10 w-full">
            <div className="font-label-mono text-label-mono text-modernist-red tracking-[0.2em] uppercase mb-4 flex items-center gap-2 text-xs md:text-sm">
              <span className="w-2 h-2 rounded-full bg-modernist-red animate-pulse"></span>
              Active Roster
            </div>
            <div className="font-display-xl text-[64px] sm:text-[80px] md:text-[120px] leading-none text-surface-white tabular-nums">
              {rosterCount.toString().padStart(3, '0')}
            </div>
            <div className="w-full h-px bg-surface-white/20 mt-4 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-modernist-red origin-left transition-all duration-1000 ease-out" 
                style={{ width: progressWidth }}
              ></div>
            </div>
            <div className="w-full flex justify-between mt-2 font-label-mono-sm text-label-mono-sm text-annotation-gray text-[10px] sm:text-xs">
              <span>0</span>
              <span>CAPACITY: 500</span>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-container-max mx-auto w-full relative z-20 mt-16 md:mt-32 px-margin-mobile md:px-margin-desktop">
        
        {/* Tab 1: Access */}
        <div className="w-full md:pl-[10%] relative z-[30] -mb-[tab-overlap] mt-8">
          <div className="bg-modernist-blue text-on-primary-container p-6 md:py-16 md:pl-16 md:pr-32 rounded-tr-3xl rounded-tl-xl border border-surface-white/20 shadow-2xl md:tab-angle relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-surface-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10 gap-4">
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl uppercase">Technical Access</h2>
              <div className="font-label-mono text-xs bg-surface-container-highest text-surface-white px-4 py-2 rounded-full border border-surface-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">vpn_key</span>
                BENEFIT_01
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
              <div>
                <p className="font-body-md text-body-md mb-8 max-w-md opacity-90 text-sm md:text-base">
                  Unrestricted access to the GEC fabrication labs, high-performance computing clusters, and comprehensive engineering documentation archives. 
                </p>
                <ul className="flex flex-col gap-4 font-label-mono text-label-mono text-xs md:text-sm">
                  <li className="flex items-center gap-3 border-b border-surface-white/10 pb-3">
                    <span className="material-symbols-outlined text-surface-white">check</span> CNC Milling Certification
                  </li>
                  <li className="flex items-center gap-3 border-b border-surface-white/10 pb-3">
                    <span className="material-symbols-outlined text-surface-white">check</span> CAD/CAM Software Licenses
                  </li>
                  <li className="flex items-center gap-3 border-b border-surface-white/10 pb-3">
                    <span className="material-symbols-outlined text-surface-white">check</span> Materials Testing Facility
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden border border-surface-white/20">
                <div 
                  className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuACK3y8CeCtsHVU2_FmFvR-XZAAw0b-D1E_NO_fymsP961Znt4S0vEuGq4rI6ozZZ_1FLD090gZTn_0wWoIXdKZBRz6bLyOCa9f6qNV4DcJri-hz1cSGVV3N0fEjoRMMOs6vR6ca1bk_n9e9JX1S74lyj8NG7skmnVQo5PILnL18HeF84Cpwg-Nxc8ZA99eOV3rFIIvsjNiJdMajWRSkwGSXDzm8tAQItXkbk3uydDAImUkWLrzkjwzbg')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-modernist-blue/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 2: Network */}
        <div className="w-full md:pr-[5%] relative z-[40] -mb-[tab-overlap] mt-8">
          <div className="bg-modernist-purple text-on-primary-container p-6 md:py-16 md:pl-16 md:pr-32 rounded-tl-3xl rounded-tr-xl border border-surface-white/20 shadow-2xl md:tab-angle relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-white/20 via-transparent to-transparent opacity-50"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10 gap-4">
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl uppercase">Professional Network</h2>
              <div className="font-label-mono text-xs bg-surface-container-highest text-surface-white px-4 py-2 rounded-full border border-surface-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">hub</span>
                BENEFIT_02
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
              <div className="col-span-1 md:col-span-5 relative h-64 md:h-auto min-h-[300px] rounded-xl overflow-hidden border border-surface-white/20 order-2 md:order-1">
                <div 
                  className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80 grayscale" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFAkvCOYPWaUv0YQPM9ULDlFPLEoxyEY_ZPH_eLKzsnbTKjzXnPVwXzfnCJr6HWyeuJks0-qf7zBQXVyAtx0m1fc2iOnwjyG2BoBtA9thVW86Gq2MqpysYDqUSgU6wAxqwyyoAVe8gN-SAkc39iI77R0BFFRL8bZMUmgdJoHXmuC3JgG-oMo5OBs-MuRNses4HAanSt6lcbHDxR4bNx2kTKPcd0hxHjJcCeQrYk4ecknMhfusCAvfYPQ')` }}
                ></div>
                <div className="absolute bottom-4 left-4 font-label-mono-sm text-[10px] bg-surface-white text-modernist-purple px-2 py-1 uppercase">
                  INDUSTRY MIXERS
                </div>
              </div>
              <div className="col-span-1 md:col-span-7 md:pl-8 order-1 md:order-2 flex flex-col justify-center">
                <p className="font-body-md text-body-md mb-8 max-w-lg opacity-90 text-sm md:text-base">
                  Connect with alumni, industry leaders, and peer innovators through exclusive symposia, mentorship programs, and collaborative project sprints.
                </p>
                {/* Network SVG Graph */}
                <div className="w-full h-32 relative border border-surface-white/10 rounded-lg bg-surface-container-highest/30 flex items-center justify-center overflow-hidden mb-6">
                  <svg className="absolute inset-0 w-full h-full text-surface-white/25" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <line stroke="currentColor" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="20"></line>
                    <line stroke="currentColor" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="80"></line>
                    <line stroke="currentColor" strokeWidth="0.5" x1="90" x2="90" y1="20" y2="80"></line>
                    <circle cx="10" cy="50" fill="currentColor" r="3"></circle>
                    <circle cx="90" cy="20" fill="currentColor" r="3"></circle>
                    <circle cx="90" cy="80" fill="currentColor" r="3"></circle>
                    <circle className="animate-ping" cx="50" cy="35" fill="currentColor" r="2"></circle>
                  </svg>
                  <span className="font-label-mono-sm text-surface-white/50 tracking-widest text-[10px] sm:text-xs">
                    ALUMNI DATABASE ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 3: Action / Join */}
        <div className="w-full relative z-[50] mt-8">
          <div className="bg-modernist-red text-on-primary-container p-6 md:p-16 rounded-t-3xl rounded-b-none border border-surface-white/20 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div className="flex flex-col justify-center">
                <h2 className="font-display-xl-mobile text-3xl sm:text-5xl md:text-7xl uppercase leading-none mb-6">
                  Initiate <br/>Transfer
                </h2>
                <p className="font-body-lg text-body-lg max-w-md opacity-90 mb-10 text-base">
                  Submit your credentials to the GEC roster. Membership is subject to academic review and commitment to the society's rigorous standards.
                </p>
                
                {/* Reusable ModernistButton with custom colors */}
                <ModernistButton 
                  onClick={() => alert('Opening Roster Application Form')}
                  className="bg-surface-white text-modernist-red hover:bg-surface-container-highest hover:text-surface-white"
                >
                  APPLICATION FORM
                </ModernistButton>
              </div>

              {/* Demographics data chart */}
              <div className="relative flex flex-col justify-center border-l border-surface-white/20 pl-0 md:pl-16 pt-16 md:pt-0 border-t md:border-t-0 mt-8 md:mt-0">
                <h3 className="font-label-mono text-xs md:text-sm uppercase tracking-widest mb-8 opacity-70">
                  Current Cohort Demographics
                </h3>
                <div className="space-y-6">
                  {/* Bar 1 */}
                  <div>
                    <div className="flex justify-between font-label-mono-sm text-[10px] md:text-xs mb-2">
                      <span>MECHANICAL ENG.</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-surface-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-surface-white w-[65%]"></div>
                    </div>
                  </div>
                  {/* Bar 2 */}
                  <div>
                    <div className="flex justify-between font-label-mono-sm text-[10px] md:text-xs mb-2">
                      <span>ROBOTICS / AI</span>
                      <span>20%</span>
                    </div>
                    <div className="h-2 bg-surface-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-surface-white w-[20%]"></div>
                    </div>
                  </div>
                  {/* Bar 3 */}
                  <div>
                    <div className="flex justify-between font-label-mono-sm text-[10px] md:text-xs mb-2">
                      <span>ARCHITECTURAL DESIGN</span>
                      <span>15%</span>
                    </div>
                    <div className="h-2 bg-surface-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-surface-white w-[15%]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex items-center gap-4 text-surface-white/50">
                  <span className="material-symbols-outlined text-[24px]">architecture</span>
                  <span className="font-label-mono-sm text-[10px] md:text-xs tracking-[0.2em] uppercase">
                    Data verified: Q4 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
