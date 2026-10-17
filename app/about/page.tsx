import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import {
  Compass,
  Award,
  BookOpen,
  Users,
  Building,
  Target,
  ArrowRight,
  Shield,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ASME GECT',
  description:
    'Discover the legacy, mission, and mechanical engineering ethos of the ASME Student Section at Government Engineering College Thrissur (est. 1957).',
};

export default function AboutPage() {
  const milestones = [
    {
      year: '1957',
      title: 'Foundation of GEC Thrissur',
      description:
        'Government Engineering College Thrissur is established by the Government of Kerala, quickly rising to prominence as one of South India’s premier technical institutions.',
    },
    {
      year: 'Collegiate Charter',
      title: 'Establishment of ASME Student Section',
      description:
        'The ASME Student Section is officially chartered under the Department of Mechanical Engineering, connecting GECT scholars to global codes, standards, and competitions.',
    },
    {
      year: '2023 - 2024',
      title: 'Human Powered Vehicle (HPVC) Racing Defense',
      description:
        'The section engineers the Aeolus recumbent vehicle, achieving a verified drag coefficient of 0.142 and completing multi-stage roll-over protection crash tests.',
    },
    {
      year: '2025 & Beyond',
      title: 'Autonomous Robotics & Aerodynamic Research',
      description:
        'Expanding research clusters into biomimetic turbine airfoils (Project Vortex), cycloidal robot joints, and hosting the national Synergia symposium.',
    },
  ];

  const values = [
    {
      icon: <Target className="w-5 h-5 text-asme-red" />,
      title: 'Engineering Rigor',
      description:
        'We believe in physics first. Every prototype is underpinned by mathematical governing equations, boundary condition simulations, and failure mode effects analysis.',
    },
    {
      icon: <Layers className="w-5 h-5 text-asme-cyan" />,
      title: 'Workshop Fabrication',
      description:
        'Knowledge without hands-on realization is incomplete. Our members gain proficiency in lathe operations, CNC G-code, TIG welding, and composite vacuum infusion.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-asme-amber" />,
      title: 'Open Technical Dissemination',
      description:
        'We run student-to-student practicums in CFD, FEA, CAD, and embedded systems, ensuring technical acumen is passed down and elevated across student batches.',
    },
    {
      icon: <Shield className="w-5 h-5 text-asme-emerald" />,
      title: 'Professional Integrity',
      description:
        'Adhering strictly to the ASME Code of Ethics for Engineers—upholding safety, transparency, sustainability, and technological stewardship in all pursuits.',
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      {/* Page Header */}
      <section className="border-b border-white/[0.08] pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-asme-red mb-6">
            <span>MODULE 02 // INSTITUTIONAL DOSSIER</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95]">
                Pioneering Mechanical Innovation at GECT
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                ASME GECT is the collegiate student section of the American
                Society of Mechanical Engineers at Government Engineering College
                Thrissur, Kerala.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#0E121A] border border-white/10 p-6 rounded space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-white/[0.06]">
                <span>PARENT CAMPUS</span>
                <span className="text-white">GEC Thrissur (1957)</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-white/[0.06]">
                <span>DEPARTMENT</span>
                <span className="text-white">Mechanical Engineering</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>SECTION ID</span>
                <span className="text-asme-red font-semibold">#8040 (Asia-Pacific)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="py-20 border-b border-white/[0.08]">
        <div className="max-w-container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Imagery Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded border border-white/10 overflow-hidden bg-neutral-900 group">
                <Image
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                  alt="GEC Thrissur Mechanical Engineering Department & Laboratories"
                  fill
                  className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded border border-white/10 text-xs font-mono flex items-center justify-between">
                  <span className="text-white font-medium">Mechanical Block // Labs</span>
                  <span className="text-asme-cyan">GECT CAMPUS</span>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono text-asme-red uppercase tracking-widest">
                // About the Society & Section
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-snug">
                An International Standard on an Historic Campus
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Government Engineering College Thrissur (GECT), established in
                  1957 by the first elected government of Kerala, is the second
                  oldest engineering college in the state. Over six decades, GECT
                  has cultivated an illustrious alumni network shaping global
                  aerospace agencies, automotive giants, and industrial research
                  institutes.
                </p>
                <p>
                  Within this historic institution, the ASME Student Section serves
                  as a premier catalyst for technical growth. Affiliated with the
                  American Society of Mechanical Engineers—the global standard-setting
                  body founded in 1880—our student section connects GECT
                  undergraduates directly with worldwide engineering knowledge,
                  peer-reviewed research, and competitive design forums.
                </p>
                <p>
                  Our focus is uncompromising: we train students in industry-grade
                  finite element solvers, boundary layer CFD physics, robotic
                  actuation, and physical prototype assembly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Ethos Grid */}
      <section className="py-20 border-b border-white/[0.08] bg-[#07090C]">
        <div className="max-w-container mx-auto px-4 sm:px-8">
          <SectionHeader
            indexNumber="02"
            category="Ethos & Standards"
            title="Our Engineering Directives"
            description="The four foundational principles that govern our projects, workshops, and student leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="p-6 rounded bg-[#0E121A] border border-white/[0.08] hover:border-white/20 transition-colors space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded bg-white/[0.04] border border-white/10 w-fit">
                    {val.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Milestones */}
      <section className="py-20 border-b border-white/[0.08]">
        <div className="max-w-container mx-auto px-4 sm:px-8">
          <SectionHeader
            indexNumber="03"
            category="Historical Trajectory"
            title="Milestones of Mechanical Progress"
            description="A timeline highlighting key moments from GECT's foundation to the section's cutting-edge aerodynamic and robotic initiatives."
          />

          <div className="space-y-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded bg-[#0D1017] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="md:w-1/4 font-mono">
                  <span className="text-xs text-asme-red uppercase tracking-widest block mb-1">
                    EPOCH // {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {item.year}
                  </span>
                </div>

                <div className="md:w-3/4 space-y-2 border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-8">
                  <h3 className="font-display font-bold text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pt-20">
        <div className="max-w-container mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Ready to Explore Our Work?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            View our student engineering projects or inspect upcoming symposia and
            workshops scheduled for this semester.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="/projects" size="md" variant="primary">
              View Engineering Projects
            </Button>
            <Button href="/team" size="md" variant="outline">
              Meet the Leadership Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
