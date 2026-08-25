import React, { useState } from 'react';
import InquiryForm from '../components/InquiryForm';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('location');

  const tabs = [
    { id: 'general', label: 'General', colorClass: 'bg-modernist-blue' },
    { id: 'support', label: 'Support', colorClass: 'bg-modernist-green' },
    { id: 'location', label: 'Location', colorClass: 'bg-modernist-red' }
  ];

  const handleInquirySubmit = (formData) => {
    alert(`Data successfully transmitted!\nIdentity: ${formData.name}\nRouting: ${formData.email}\nMessage length: ${formData.message.length} chars`);
  };

  // Helper to adjust header banner color
  const getBannerColor = () => {
    switch (activeTab) {
      case 'general':
        return 'bg-modernist-blue';
      case 'support':
        return 'bg-modernist-green';
      case 'location':
      default:
        return 'bg-modernist-red';
    }
  };

  return (
    <div className="flex flex-col w-full relative pb-margin-desktop">
      
      {/* Header Section */}
      <section className="max-w-[1440px] mx-auto px-margin-desktop pt-24 pb-16 w-full relative z-10 text-center">
        <h1 className="font-display-xl text-5xl sm:text-7xl md:text-[120px] text-surface-white/10 uppercase absolute inset-0 flex items-center justify-center pointer-events-none -z-10 translate-y-12">
          CONNECT
        </h1>
        <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase mb-6 mt-8 relative z-10">
          Contact & Support
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg">
          Direct communication channels for inquiries, collaborations, and membership support.
        </p>
      </section>

      {/* Folder Navigation */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-20">
        
        {/* Overlapping Tabs */}
        <div className="flex flex-wrap items-end -mb-tab-overlap relative z-30 ml-4">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
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
                className={`tab-angle px-8 pt-4 pb-8 pr-12 sm:pr-16 relative hover:-translate-y-2 transition-all font-headline-md text-lg sm:text-2xl text-on-primary-container ${tab.colorClass} ${zIndexClass}`}
              >
                {tab.label}
              </button>
            );
          })}

          {/* Banner Fill Header */}
          <div className={`flex-grow h-20 self-end -ml-4 z-10 border-t border-surface-white/20 transition-colors duration-500 ${getBannerColor()}`}>
            <div className="h-full flex items-center justify-end px-8">
              <span className="font-label-mono text-xs text-on-primary-container uppercase opacity-70 tracking-widest hidden md:inline">
                Physical Coordinates & Routing &lt;
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className={`w-full transition-colors duration-500 rounded-tr-xl pt-16 pb-24 px-6 sm:px-12 md:px-24 relative shadow-2xl border border-surface-white/10 ${getBannerColor()}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter text-on-primary-container">
            
            {/* Contact Info & Direct Inquiry Form */}
            <div className="lg:col-span-6 lg:col-start-1 flex flex-col gap-12">
              <div>
                <h3 className="font-label-mono text-xs uppercase mb-4 opacity-80 tracking-widest border-b border-on-primary-container/20 pb-2">
                  Primary Channels: {activeTab.toUpperCase()}
                </h3>
                
                {/* Dynamically adjust info details depending on active folder */}
                <div className="space-y-6 mt-8">
                  <a 
                    className="group flex items-center gap-4 hover:bg-surface-white/5 p-4 rounded-lg transition-colors -ml-4" 
                    href={`mailto:${activeTab === 'support' ? 'support@gectcr.ac.in' : 'asme@gectcr.ac.in'}`}
                  >
                    <div className="w-12 h-12 bg-on-primary-container rounded-full flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-modernist-red text-[24px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                        mail
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-base sm:text-lg md:text-xl leading-none mb-2">
                        {activeTab === 'support' ? 'support@gectcr.ac.in' : 'asme@gectcr.ac.in'}
                      </h4>
                      <p className="font-label-mono-sm text-[10px] sm:text-xs text-on-primary-container/70 uppercase">
                        {activeTab === 'support' ? 'Technical Support Desk' : 'Official Correspondence'}
                      </p>
                    </div>
                  </a>
                  
                  <a className="group flex items-center gap-4 hover:bg-surface-white/5 p-4 rounded-lg transition-colors -ml-4" href="tel:+919876543210">
                    <div className="w-12 h-12 bg-on-primary-container rounded-full flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-modernist-red text-[24px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                        call
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-base sm:text-lg md:text-xl leading-none mb-2">
                        +91 98765 43210
                      </h4>
                      <p className="font-label-mono-sm text-[10px] sm:text-xs text-on-primary-container/70 uppercase">
                        Section Representative
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Reusable Inquiry Form Component */}
              <InquiryForm onSubmitSuccess={handleInquirySubmit} />
            </div>

            {/* Map & Coordinates */}
            <div className="lg:col-span-5 lg:col-start-8 mt-16 lg:mt-0">
              <h3 className="font-label-mono text-xs uppercase mb-4 opacity-80 tracking-widest border-b border-on-primary-container/20 pb-2">
                Physical Location
              </h3>
              
              {/* Brutalist GEC Map visual */}
              <div className="bg-surface-container p-4 rounded-xl shadow-xl border border-surface-white/10 mt-8 group relative overflow-hidden">
                <div 
                  className="w-full h-80 bg-cover bg-center rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg85yW4EpXT8XqpyFJNnXlbXRcLHrewgdl8Ojn6_3R6RJ498qwRVxyizIW1YDkg4194mNwvZvON9gn6Qc3hXeWPhteTiRyN5o1J62BoNpeoXEMzNDaE93fzw4pvVB-Qkx1UOYY1hvlqEr5v3DWxyMLMHdC07rK5QdrusLitXV4cVFv7AVkFsEp49UPbmKdWF0FSeD4t9NVv_ctjxCJsSxfmzl1UUIaU550G04SIqZeT9ZYKMk2VJM16Q')` }}
                ></div>
                {/* Overlay target radar */}
                <div className="absolute inset-4 border border-surface-white/20 pointer-events-none rounded-lg mix-blend-overlay"></div>
                <div className="absolute top-8 right-8 bg-modernist-red/90 backdrop-blur-sm p-3 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container text-[20px]">my_location</span>
                </div>
              </div>

              <div className="mt-8 text-on-primary-container">
                <h4 className="font-headline-md text-xl md:text-2xl mb-2">GEC Thrissur</h4>
                <p className="font-body-md text-sm opacity-90 leading-relaxed">
                  Department of Mechanical Engineering,<br/>
                  Government Engineering College,<br/>
                  Thrissur, Kerala - 680009
                </p>
              </div>

              {/* Technical Compass Primitives */}
              <div className="grid grid-cols-4 gap-4 mt-12 opacity-50 text-on-primary-container">
                <div className="aspect-square border border-on-primary-container/30 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute w-full h-[1px] bg-on-primary-container/30 rotate-45"></div>
                  <span className="material-symbols-outlined text-on-primary-container transform -rotate-45 text-sm md:text-base">
                    navigation
                  </span>
                </div>
                <div className="aspect-square border border-on-primary-container/30 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute w-full h-[1px] bg-on-primary-container/30 -rotate-45"></div>
                  <span className="font-label-mono-sm text-xs">N</span>
                </div>
                <div className="aspect-square border border-on-primary-container/30 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container text-sm md:text-base">explore</span>
                </div>
                <div className="aspect-square border border-on-primary-container/30 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container text-sm md:text-base">radar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
