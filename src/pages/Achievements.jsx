import React, { useState } from 'react';
import TimelineFolder from '../components/TimelineFolder';

export default function Achievements() {
  const [expandedFolder, setExpandedFolder] = useState('2023');

  const folders = [
    {
      year: '2023',
      title: 'Global Recognition & Leadership',
      award: 'Outstanding Student Section Award',
      location: 'ASME E-Fests Asia Pacific',
      desc: "Recognized globally for exceptional programming, membership growth, and engagement in engineering design competitions. This award highlights the chapter's dedication to providing hands-on technical experience and professional development opportunities to its members.",
      colorClass: 'bg-modernist-blue',
      icon: 'emoji_events',
      stats: [
        { value: '1st', label: 'Place Regional' },
        { value: '50+', label: 'Active Projects' },
        { value: '200', label: 'New Members' }
      ]
    },
    {
      year: '2022',
      title: 'Design Competition Excellence',
      award: 'HPVC Best Innovation',
      location: 'National Level',
      desc: 'The GEC Section dominated the Human Powered Vehicle Challenge (HPVC), showcasing advanced aerodynamic design and composite materials manufacturing. The vehicle design emphasized safety, sustainability, and high-speed maneuverability.',
      colorClass: 'bg-modernist-green',
      icon: 'precision_manufacturing',
      hasLink: true,
      linkLabel: 'View Design Spec'
    },
    {
      year: '2021',
      title: 'Community Outreach & STEM',
      award: 'Ignite STEM Initiative',
      location: 'Local Outreach',
      desc: 'Launched a comprehensive STEM outreach program aimed at local high schools, providing interactive robotics and fundamental mechanics workshops to over 500 students, fostering the next generation of engineers.',
      colorClass: 'bg-modernist-purple',
      icon: 'school',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANZ-DJkWGoSoRG4lkqgxHRowa5R6lFxX0wWyPHgPlm8IxPjRgGv-U9vwEHDf7xsiRfQENS3ZXcLLsNevG0XeJJKz5u8VHRpEhhmRpZvdb9YYgqZC_2gvxV_Ak3kBicFhJWouFWrvdodw-a0nlwyaeCxUvyay_kIwmyPLEs5a-lVgoIz183TvJaW97R6IsYnfI7yFgg5aaaX8fprnoZHlhTS11FVAGwat95hw7RS1MJzoBOBlI8MNmUJg'
    }
  ];

  return (
    <div className="flex flex-col w-full px-margin-mobile md:px-margin-desktop py-margin-desktop mt-8 relative z-10 max-w-[1440px] mx-auto">
      {/* Title Header */}
      <div className="text-center mb-16 relative">
        <h1 className="font-display-xl text-5xl sm:text-7xl md:text-[120px] text-surface-white/10 uppercase relative z-0 mix-blend-overlay">
          MILESTONES
        </h1>
        <h2 className="font-label-mono text-label-mono text-surface-white tracking-[0.2em] uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-background px-4 whitespace-nowrap text-xs sm:text-sm">
          ASME GEC ACHIEVEMENTS
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-8 relative z-10 text-base md:text-lg">
          A chronological record of engineering excellence, design innovation, and community impact. Documenting the structural progress of the GEC Section.
        </p>
      </div>

      {/* Reusable Expandable Folder Grid */}
      <div className="relative w-full mt-12 shadow-xl flex flex-col gap-tab-overlap">
        {folders.map((folder, index) => {
          const isOpen = expandedFolder === folder.year;
          const stackIndex = folders.length - index;

          return (
            <TimelineFolder
              key={folder.year}
              {...folder}
              isOpen={isOpen}
              stackIndex={stackIndex}
              onToggle={() => setExpandedFolder(folder.year)}
            />
          );
        })}
      </div>
    </div>
  );
}
