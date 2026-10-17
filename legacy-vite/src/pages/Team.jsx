import React from 'react';
import LeaderCard from '../components/LeaderCard';
import DeptHeadCard from '../components/DeptHeadCard';

export default function Team() {
  const leaders = [
    {
      name: 'AARAV MENON',
      role: 'CHAIR',
      classYear: "B.Tech Mechanical '25",
      colorClass: 'hover:border-modernist-blue',
      overlayClass: 'bg-modernist-blue/10',
      badgeColor: 'text-modernist-blue border-modernist-blue/30',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3xCh9mIqcMjLzpXVR-4Ebrpz9th3pgkrdL0nfnqV8ooff9SbTTnq9MkXXOilYOwCip-3RcnG1gKUUH2ouPiXjE5fcRglFAV-6bZ-FumVGsm4YlltBGvtj5WhQHetPrnnog7dlY07GRq9EaNm-t4xlo15igywx3_t-8G7E7IDA1FN9BZWSW7ZHpruPz6drJy7g2PpDSJqPh-Da4lbvCY28-H3o9Fszn_6pblVy_YxKDGdGKxZYTnVZSA'
    },
    {
      name: 'SARA KOSHY',
      role: 'VICE CHAIR',
      classYear: "B.Tech Mechanical '25",
      colorClass: 'hover:border-modernist-red',
      overlayClass: 'bg-modernist-red/10',
      badgeColor: 'text-modernist-red border-modernist-red/30',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAAAxlm-TOK2gqpQ9v_ZnxXDCAvljQqQeMh3GhU6NuEoqi80_ggjeAT0JhHISWFPHxjakVh6U9Jz4DI0fMBTpYksYiuQcLSxe3f5KZuginnpY7klPfFTwSKbKsSpO9JIZNSI3ZLw6RSdg1N0Ze5g5MFQYsZ4-HQkKO2D6EBZWgwU86_ZU6g57LmAp4J0MfL95Jxf9hjN4IxfmUy0zdVYPv6Sq6Y-81ErOMKVbs4g2CId3HaU7a3QKw3w'
    },
    {
      name: 'ROHAN VERGHESE',
      role: 'SECRETARY',
      classYear: "B.Tech Mechanical '26",
      colorClass: 'hover:border-modernist-green',
      overlayClass: 'bg-modernist-green/10',
      badgeColor: 'text-modernist-green border-modernist-green/30',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7jD8YS17kOGztxKsq_HU7aY1kL1MEZW36F4n8LlB_eETFU-tbYMN0I6tnub6P9qy8Qf_276c6YO33eAplerZEM7DKkCvFDR41ST8IwOxzEL7iFLhucojzyKr-U0hZSFoDqNpcNnZR2N7Yg87lRuNFiC4agqcaxQkSH6aNcefiV8uL4bFNoiJQRt9wlHOHbigmNWF_x2bCAod9vquP4pwU6X3QIFNCDbNzPeHiCKkTK6lWbKRV8bh_yg'
    }
  ];

  const departments = [
    { name: 'Kiran R.', role: 'Webmaster', tag: 'TECH', icon: 'code', activeColor: 'group-hover:bg-modernist-purple group-hover:border-modernist-purple', linkColor: 'text-modernist-purple' },
    { name: 'Maya T.', role: 'Design Lead', tag: 'DESIGN', icon: 'palette', activeColor: 'group-hover:bg-modernist-yellow group-hover:border-modernist-yellow', linkColor: 'text-modernist-yellow' },
    { name: 'Dev S.', role: 'Chief Editor', tag: 'EDITORIAL', icon: 'article', activeColor: 'group-hover:bg-modernist-blue group-hover:border-modernist-blue', linkColor: 'text-modernist-blue' },
    { name: 'Anjali P.', role: 'PR Head', tag: 'PR', icon: 'campaign', activeColor: 'group-hover:bg-modernist-green group-hover:border-modernist-green', linkColor: 'text-modernist-green' }
  ];

  return (
    <div className="flex flex-col w-full px-margin-mobile md:px-margin-desktop py-12 md:py-24 max-w-[1440px] mx-auto gap-16 md:gap-32">
      {/* Page Header */}
      <section className="flex flex-col gap-6 md:gap-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-display-xl text-5xl sm:text-7xl md:text-[100px] text-on-surface uppercase leading-[0.85] tracking-tighter mix-blend-difference">
              THE <br/>EXECOM
            </h1>
          </div>
          <div className="max-w-md font-body-md text-body-md text-on-surface-variant md:text-right border-l md:border-l-0 md:border-r 4 border-surface-white/20 pl-4 md:pl-0 md:pr-4 text-base leading-relaxed">
            Driving innovation, fostering community, and pushing the boundaries of mechanical engineering documentation at the GEC Section.
          </div>
        </div>
      </section>

      {/* Core Team Grid */}
      <section className="flex flex-col gap-12 relative z-20">
        <div className="flex items-center gap-4 border-b border-surface-white/10 pb-4">
          <span className="font-label-mono text-label-mono text-modernist-red uppercase tracking-widest">01 //</span>
          <h2 className="font-headline-md text-2xl text-on-surface uppercase">CORE LEADERSHIP</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={index}
              {...leader}
              onEmailClick={() => alert(`Opening mail representative link for ${leader.name}`)}
              onLinkClick={() => alert(`Opening professional profile link for ${leader.name}`)}
            />
          ))}
        </div>
      </section>

      {/* Keynotes Section */}
      <section className="flex flex-col gap-12 relative z-30">
        <div className="flex items-center gap-4 border-b border-surface-white/10 pb-4">
          <span className="font-label-mono text-label-mono text-modernist-yellow uppercase tracking-widest">02 //</span>
          <h2 className="font-headline-md text-2xl text-on-surface uppercase">VISION & MANDATE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 relative">
          
          {/* Keynote 1: Blue */}
          <div className="md:col-span-8 bg-modernist-blue text-on-primary-container p-8 md:py-16 md:pl-16 md:pr-32 relative md:tab-angle shadow-2xl z-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-8 right-16 opacity-20">
              <span className="material-symbols-outlined text-[64px]">format_quote</span>
            </div>
            <div className="flex flex-col gap-6 max-w-2xl relative z-10">
              <span className="font-label-mono text-xs opacity-80 uppercase tracking-widest border-l-2 border-on-primary-container pl-4">FROM THE CHAIR</span>
              <blockquote className="font-headline-md text-xl sm:text-2xl md:text-[32px] leading-snug">
                "Our mandate is not just to document engineering feats, but to redefine the architectural language of how we present them. Rigor meets radical design."
              </blockquote>
              <div className="mt-4 font-label-mono-sm text-xs uppercase tracking-widest opacity-70">
                Aarav Menon // 2024
              </div>
            </div>
          </div>

          {/* Keynote 2: Red Overlap */}
          <div className="md:col-span-7 md:-mt-16 md:ml-auto bg-modernist-red text-on-primary-container p-8 md:py-16 md:pl-16 md:pr-32 relative md:tab-angle shadow-2xl z-20 hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-8 right-16 opacity-20">
              <span className="material-symbols-outlined text-[64px]">format_quote</span>
            </div>
            <div className="flex flex-col gap-6 max-w-xl relative z-10">
              <span className="font-label-mono text-xs opacity-80 uppercase tracking-widest border-l-2 border-on-primary-container pl-4">FROM THE VICE CHAIR</span>
              <blockquote className="font-body-lg text-lg italic leading-relaxed">
                "We treat every project as a structural entity. Whitespace is a load-bearing wall; typography is the steel frame. Form follows function, relentlessly."
              </blockquote>
              <div className="mt-4 font-label-mono-sm text-xs uppercase tracking-widest opacity-70">
                Sara Koshy // 2024
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Department Heads Grid */}
      <section className="flex flex-col gap-12 relative z-10">
        <div className="flex items-center gap-4 border-b border-surface-white/10 pb-4">
          <span className="font-label-mono text-label-mono text-modernist-purple uppercase tracking-widest">03 //</span>
          <h2 className="font-headline-md text-2xl text-on-surface uppercase">DEPARTMENT HEADS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((dept, idx) => (
            <DeptHeadCard
              key={idx}
              {...dept}
              onContactClick={() => alert(`Routing contact support request to ${dept.name} (${dept.role})`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
