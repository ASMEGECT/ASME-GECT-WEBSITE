import React, { useState } from 'react';
import ModernistButton from '../components/ModernistButton';

export default function Home() {
  const [activeTab, setActiveTab] = useState('history');

  const tabs = [
    { id: 'history', label: 'History', colorClass: 'bg-modernist-blue' },
    { id: 'vision', label: 'Vision', colorClass: 'bg-modernist-green' },
    { id: 'mission', label: 'Mission', colorClass: 'bg-modernist-red' }
  ];

  // Helper to adjust dynamic border and background color of content container
  const getContainerBg = () => {
    switch (activeTab) {
      case 'vision':
        return 'bg-modernist-green';
      case 'mission':
        return 'bg-modernist-red';
      case 'history':
      default:
        return 'bg-modernist-blue';
    }
  };

  const scrollToTabs = (e) => {
    e.preventDefault();
    const element = document.getElementById('about-tabs-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-32 overflow-hidden px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
          <span className="font-display-xl text-[20vw] whitespace-nowrap text-surface-white select-none">ASME GEC</span>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="font-display-xl text-4xl sm:text-6xl md:text-[100px] text-on-surface mb-6 uppercase tracking-tighter mix-blend-difference leading-none">
            ASME GEC SECTION
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
            The American Society of Mechanical Engineers (ASME) Student Section at Government Engineering College (GEC) Thrissur is a premier community dedicated to advancing engineering knowledge, professional development, and practical skills.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <ModernistButton onClick={scrollToTabs}>
              Explore Legacy
            </ModernistButton>
          </div>
        </div>
      </section>

      {/* Content Sections as Folder Tabs */}
      <section id="about-tabs-section" className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32">
        {/* Tabbed Navigation - Non-wrapping and responsive sizing */}
        <div className="relative z-20 flex flex-nowrap overflow-x-auto scrollbar-none mb-tab-overlap items-end ml-2 sm:ml-8 gap-x-1">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            // Define active overlap layers
            let zIndexClass = 'z-10 opacity-80';
            if (isActive) {
              zIndexClass = 'z-30 opacity-100';
            } else if (idx < tabs.findIndex(t => t.id === activeTab)) {
              zIndexClass = 'z-20 opacity-80';
            }

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-angle px-4 pt-3 pb-5 text-sm sm:px-8 sm:pt-4 sm:pb-6 font-headline-md text-base sm:text-2xl text-on-primary-container transition-all hover:-translate-y-1 relative ${tab.colorClass} ${zIndexClass}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Contents - Using relative flow for dynamic height scaling */}
        <div className={`relative z-10 w-full shadow-2xl rounded-tr-xl rounded-b-xl overflow-hidden transition-colors duration-500 ${getContainerBg()}`}>
          
          {/* History Content */}
          {activeTab === 'history' && (
            <div className="w-full p-8 md:p-16 flex flex-col md:flex-row gap-12 transition-all duration-500 animate-fadeIn">
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="font-label-mono text-on-primary-container/80 uppercase tracking-widest mb-4">01 // Foundations</div>
                  <h2 className="font-display-xl-mobile text-on-primary-container mb-6 leading-tight text-3xl md:text-5xl uppercase">THE GENESIS OF GEC THRISSUR</h2>
                  <p className="font-body-md text-on-primary-container/90 mb-6 leading-relaxed">
                    Government Engineering College (GEC) Thrissur, established in 1957, stands as one of the most prestigious engineering institutions in Kerala, India. Known for its academic excellence, vibrant campus life, and strong alumni network, GEC Thrissur has consistently produced top-tier engineers who contribute significantly to various industries globally.
                  </p>
                  <p className="font-body-md text-on-primary-container/90 leading-relaxed">
                    The institution fosters a culture of innovation, research, and practical application, making it fertile ground for professional societies like ASME to thrive and empower the next generation of mechanical engineers.
                  </p>
                </div>
                <div className="mt-8 flex gap-4 opacity-50">
                  <span className="material-symbols-outlined text-[32px] text-on-primary-container">architecture</span>
                  <span className="material-symbols-outlined text-[32px] text-on-primary-container">engineering</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden border border-white/20 relative group">
                <div className="absolute inset-0 bg-modernist-blue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 min-h-[300px]"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjiUE-msU01XRtXsKHBJs4IQP4jLwn8xFDna9hRwl87ddnyFFAKD8StozsrGA_8_xxF4jhiteBZtOkiHU1yXKslUAg_wepvfnsYNVJYh1hemcsPBDAgROJfVaY2kUJLOi-Uwvu71FAflibeC-zKNW_F5NREj4TMY8YMoZosM8BxIPcXyDklj9EQxzWQ0R_rmGe7ukecpCgTn-lyw2IWjdyakN0lyH2biVYcQHnuPOXfaPJ-iANMlr9Yg')`
                  }}
                ></div>
                <div className="absolute bottom-4 right-4 z-20 font-label-mono-sm text-surface-white bg-surface/80 px-2 py-1">ARCHIVE_1957.IMG</div>
              </div>
            </div>
          )}

          {/* Vision Content */}
          {activeTab === 'vision' && (
            <div className="w-full p-8 md:p-16 flex flex-col md:flex-row gap-12 transition-all duration-500 animate-fadeIn">
              <div className="w-full md:w-1/2 order-2 md:order-1 h-64 md:h-auto rounded-lg overflow-hidden border border-white/20 relative group">
                <div className="absolute inset-0 bg-modernist-green/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div
                  className="w-full h-full bg-cover bg-center min-h-[300px]"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfECI5Vzh1Jdcl1ryev7zu_DPyt1hOyHpD3tBY87ceYjgGvkVGT4Q5oXXCNkSQPdHvGOL565MIlf3rkmWta_eAP6bqiM7Dyf9Xkd_OvuAZc9iujRB-4OWjKSDXl8QevCGawREQz0KLCCOHKYT87ti3DWYjsR13yAI6GEi7KJoJVZ7WyRzJYDhikMWHenAVq5WM1TDJs--aoOYhqgsxOC1NE7Ueddp_AE0DO3o7wjsSxogo46YipT43kg')`
                  }}
                ></div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center">
                <div className="font-label-mono text-on-primary-container/80 uppercase tracking-widest mb-4">02 // Foresight</div>
                <h2 className="font-display-xl-mobile text-on-primary-container mb-6 leading-tight text-3xl md:text-5xl uppercase">OUR VISION</h2>
                <p className="font-body-lg text-on-primary-container mb-8 border-l-4 border-on-primary-container pl-6 py-2 leading-relaxed text-lg md:text-xl">
                  To be the premier platform for aspiring mechanical engineers, fostering innovation, professional excellence, and a collaborative community that bridges the gap between academic learning and industry demands.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="border border-white/20 p-4 rounded bg-white/5">
                    <span className="material-symbols-outlined text-on-primary-container mb-2">lightbulb</span>
                    <h3 className="font-label-mono text-on-primary-container uppercase">Innovation</h3>
                  </div>
                  <div className="border border-white/20 p-4 rounded bg-white/5">
                    <span className="material-symbols-outlined text-on-primary-container mb-2">handshake</span>
                    <h3 className="font-label-mono text-on-primary-container uppercase">Community</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission Content */}
          {activeTab === 'mission' && (
            <div className="w-full p-8 md:p-16 flex flex-col gap-12 transition-all duration-500 animate-fadeIn">
              <div className="w-full text-center max-w-3xl mx-auto">
                <div className="font-label-mono text-on-primary-container/80 uppercase tracking-widest mb-4">03 // Objective</div>
                <h2 className="font-display-xl-mobile text-on-primary-container mb-2 leading-tight text-3xl md:text-5xl uppercase">OUR MISSION</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission 1 */}
                <div className="bg-white/10 p-8 rounded-lg border border-white/20 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-on-primary-container text-modernist-red rounded-full flex items-center justify-center font-headline-md text-xl mb-6">1</div>
                  <p className="font-body-md text-on-primary-container leading-relaxed">
                    To cultivate a strong foundation in mechanical engineering principles through workshops, seminars, and hands-on projects.
                  </p>
                </div>
                {/* Mission 2 */}
                <div className="bg-white/10 p-8 rounded-lg border border-white/20 hover:-translate-y-2 transition-transform duration-300 md:mt-12">
                  <div className="w-12 h-12 bg-on-primary-container text-modernist-red rounded-full flex items-center justify-center font-headline-md text-xl mb-6">2</div>
                  <p className="font-body-md text-on-primary-container leading-relaxed">
                    To facilitate networking opportunities with industry professionals, alumni, and peers to enhance career prospects and knowledge sharing.
                  </p>
                </div>
                {/* Mission 3 */}
                <div className="bg-white/10 p-8 rounded-lg border border-white/20 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-on-primary-container text-modernist-red rounded-full flex items-center justify-center font-headline-md text-xl mb-6">3</div>
                  <p className="font-body-md text-on-primary-container leading-relaxed">
                    To inspire and support students in participating in national and international engineering competitions, promoting technical prowess and teamwork.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
