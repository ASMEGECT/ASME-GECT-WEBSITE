import React, { useState } from 'react';
import DocumentCard from '../components/DocumentCard';

const repositories = {
  documentation: {
    label: 'DOCUMENTATION',
    colorClass: 'bg-modernist-blue',
    files: [
      {
        title: 'Structural Pavilion Spec v1.0',
        author: 'Team Gamma',
        type: 'PDF',
        typeColor: 'bg-modernist-red',
        icon: 'description',
        iconColor: 'text-modernist-blue',
        desc: 'Detailed specifications and material studies for the new structural engineering pavilion. Includes load calculations and environmental impact assessments.',
        cta: 'DOWNLOAD'
      },
      {
        title: 'CAD Block Library v2.4',
        author: 'Design Team Alpha',
        type: 'ZIP',
        typeColor: 'bg-modernist-yellow text-background',
        icon: 'folder_zip',
        iconColor: 'text-modernist-yellow',
        desc: 'Standardized DWG components for HVAC, structural steel detailing, and architectural fenestration. Updated for Q3 project requirements.',
        cta: 'DOWNLOAD ARCHIVE'
      },
      {
        title: 'Workshop: Parametric Design',
        author: 'Prof. H. Roark',
        type: 'DOCX',
        typeColor: 'bg-modernist-green',
        icon: 'edit_document',
        iconColor: 'text-modernist-green',
        desc: 'Syllabus and preliminary reading materials for the upcoming intensive on algorithmic form generation using Grasshopper and Rhino.',
        cta: 'VIEW ONLINE'
      }
    ]
  },
  workshops: {
    label: 'WORKSHOPS',
    colorClass: 'bg-modernist-purple',
    files: [
      {
        title: 'FEA Simulation Practicum',
        author: 'Dr. Ellie Arroway',
        type: 'PDF',
        typeColor: 'bg-modernist-red',
        icon: 'description',
        iconColor: 'text-modernist-purple',
        desc: 'A complete handbook for setting up boundary conditions and mesh refinement grids in finite element structural solvers.',
        cta: 'DOWNLOAD PDF'
      },
      {
        title: 'CNC G-Code Script Kit',
        author: 'Tech Lab GEC',
        type: 'ZIP',
        typeColor: 'bg-modernist-yellow text-background',
        icon: 'folder_zip',
        iconColor: 'text-modernist-yellow',
        desc: 'Sample toolpaths and configuration setups for high-speed machining exercises on standard lab milling machines.',
        cta: 'DOWNLOAD SCRIPTS'
      }
    ]
  },
  'case-studies': {
    label: 'CASE STUDIES',
    colorClass: 'bg-modernist-yellow text-background',
    files: [
      {
        title: 'Brutalist Concrete Decay',
        author: 'Materials Div',
        type: 'PDF',
        typeColor: 'bg-modernist-red text-white',
        icon: 'description',
        iconColor: 'text-modernist-blue',
        desc: 'Investigating carbonation rates and rebar corrosion profiles in mid-century institutional structures on campus.',
        cta: 'READ ANALYSIS'
      },
      {
        title: 'HPVC Aerodynamic Shell',
        author: 'ASME GEC 2022',
        type: 'PDF',
        typeColor: 'bg-modernist-red text-white',
        icon: 'description',
        iconColor: 'text-modernist-green',
        desc: 'Structural detailing of custom sandwich carbon-composite fairing. Reviewing computational fluid dynamics vs physical wind tunnel tests.',
        cta: 'OPEN ARCHIVE'
      }
    ]
  }
};

export default function LearningHub() {
  const [activeRepo, setActiveRepo] = useState('documentation');

  const currentRepo = repositories[activeRepo];

  return (
    <div className="flex flex-col w-full px-margin-mobile md:px-margin-desktop py-margin-desktop">
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        
        {/* Page Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-surface-white/10 pb-8">
          <div className="max-w-2xl">
            <h1 className="font-display-xl text-5xl sm:text-7xl md:text-[100px] text-on-surface uppercase tracking-tight -ml-1">
              LEARNING HUB
            </h1>
            <p className="font-body-lg text-on-surface-variant mt-6 text-base md:text-lg leading-relaxed">
              A curated repository of architectural documentation, workshop materials, and historical precedents. Select a file to open.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="font-label-mono text-label-mono text-annotation-gray uppercase tracking-widest md:[writing-mode:vertical-rl] md:transform md:rotate-180 text-xs sm:text-sm">
              INDEX // 007
            </div>
          </div>
        </div>

        {/* Filter Navigation / File Folders */}
        <div className="relative w-full z-20 mb-margin-desktop">
          {/* Folders Layer */}
          <div className="relative flex w-full flex-wrap">
            <button 
              onClick={() => setActiveRepo('documentation')}
              className={`relative z-30 px-8 py-4 font-label-mono text-xs sm:text-sm hover:brightness-110 transition-all tab-angle ${
                activeRepo === 'documentation' 
                  ? 'bg-modernist-blue text-on-primary-container' 
                  : 'bg-modernist-blue/40 text-on-primary-container/60'
              }`}
            >
              <span className="relative z-10 block pr-8">DOCUMENTATION</span>
            </button>
            <button 
              onClick={() => setActiveRepo('workshops')}
              className={`relative z-20 px-8 py-4 font-label-mono text-xs sm:text-sm hover:brightness-110 transition-all tab-angle -ml-6 ${
                activeRepo === 'workshops' 
                  ? 'bg-modernist-purple text-on-primary-container' 
                  : 'bg-modernist-purple/40 text-on-primary-container/60'
              }`}
            >
              <span className="relative z-10 block pr-8">WORKSHOPS</span>
            </button>
            <button 
              onClick={() => setActiveRepo('case-studies')}
              className={`relative z-10 px-8 py-4 font-label-mono text-xs sm:text-sm hover:brightness-110 transition-all tab-angle -ml-6 ${
                activeRepo === 'case-studies' 
                  ? 'bg-modernist-yellow text-background font-bold' 
                  : 'bg-modernist-yellow/40 text-background/60'
              }`}
            >
              <span className="relative z-10 block pr-8">CASE STUDIES</span>
            </button>
          </div>

          {/* Active Folder Content Area */}
          <div className={`relative z-40 w-full p-8 md:p-12 -mt-1 rounded-tr-xl rounded-b-xl shadow-2xl border border-surface-white/20 transition-all duration-500 ${currentRepo.colorClass}`}>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-12 border-b border-surface-white/20 pb-4 gap-4">
              <h2 className="font-headline-md text-xl md:text-2xl text-on-primary-container uppercase">
                CURRENT REPOSITORY: {currentRepo.label}
              </h2>
              <span className="font-label-mono-sm text-xs text-on-primary-container/80 tracking-widest uppercase">
                {currentRepo.files.length} FILES FOUND
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentRepo.files.map((file, idx) => (
                <DocumentCard
                  key={idx}
                  {...file}
                  onCtaClick={() => alert(`Initiating file transfer for: ${file.title}`)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Resource Section */}
        <div className="mt-24 mb-12">
          <h3 className="font-label-mono text-xs md:text-sm text-annotation-gray uppercase tracking-widest border-b border-surface-white/10 pb-4 mb-8">
            FEATURED RESOURCE
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container p-8 border border-surface-white/10">
            <div className="lg:col-span-5 h-64 md:h-full min-h-[300px] w-full relative">
              <div 
                className="absolute inset-0 bg-cover bg-center rounded border border-surface-white/20 grayscale mix-blend-screen opacity-80" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPDsmzdMAjZPeMWlpPUm_MIdzKA4fybuIKTs7YpnA70Wjdd1oUr-VOeUJSB7pYOTw12knchzKy0wVLOlascrLfIDWwn9tRMNKwpcHRe3uIj8a3qLielWfCHVb4dkhlw4zb0tj7YIxHi8IYIj87j4SieyBd6e9vbKqfh0wCH0i-sTK2LJZr9G3EuBbbX39UJSBbZJf83Bj5HE6yCQ4XiuNyUsRyxZvsn6flgUUcHwM8gcjYWB6kHXqCxg')` }}
              ></div>
              <div className="absolute bottom-4 left-4 bg-background px-3 py-1 font-label-mono-sm text-xs text-annotation-gray border border-surface-white/20">
                ARCHIVE REF: 1958-A
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 pl-0 lg:pl-8">
              <h4 className="font-headline-lg text-2xl md:text-3xl text-on-surface uppercase">THE MOSBY ARCHIVES</h4>
              <p className="font-body-lg text-on-surface-variant text-base md:text-lg">
                A comprehensive digitized collection exploring early 20th-century American architects, contrasting their functionalist approach with European Modernism.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="px-4 py-2 border border-modernist-red text-modernist-red font-label-mono-sm text-xs">HISTORY</span>
                <span className="px-4 py-2 border border-modernist-blue text-modernist-blue font-label-mono-sm text-xs">THEORY</span>
                <span className="px-4 py-2 border border-surface-white/30 text-annotation-gray font-label-mono-sm text-xs">450+ PAGES</span>
              </div>
              <button 
                className="mt-4 bg-modernist-red text-on-primary-container px-8 py-4 font-label-mono hover:bg-on-primary-fixed-variant transition-colors w-max flex items-center gap-2 text-xs md:text-sm font-bold"
                onClick={() => alert('Accessing Mosby Archives...')}
              >
                ACCESS ARCHIVE
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
