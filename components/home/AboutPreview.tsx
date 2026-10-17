import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { Cpu, Wind, Cog, Award, ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  const pillars = [
    {
      icon: <Wind className="w-5 h-5 text-asme-red" />,
      code: 'PILLAR-01',
      title: 'Computational Fluid & Thermal Sciences',
      description:
        'Applied CFD modeling in OpenFOAM and ANSYS Fluent. Simulating transonic boundary layers, convective cooling for EV battery cells, and aerodynamic skin friction.',
    },
    {
      icon: <Cog className="w-5 h-5 text-asme-cyan" />,
      code: 'PILLAR-02',
      title: 'Precision Fabrication & Composites',
      description:
        'Hands-on machining, TIG welding of aerospace aluminum, multi-layer carbon fiber vacuum bagging, and CNC milling within GECT’s central workshops.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-asme-amber" />,
      code: 'PILLAR-03',
      title: 'Robotics & Autonomous Kinematics',
      description:
        'Custom cycloidal drive reducers, inverse kinematics algorithms, ROS2 integration, and micro-controller hardware programming for multi-axis manipulators.',
    },
    {
      icon: <Award className="w-5 h-5 text-asme-emerald" />,
      code: 'PILLAR-04',
      title: 'ASME Global Collegiate Competitions',
      description:
        'Representing GECT at ASME E-Fests, the Human Powered Vehicle Challenge (HPVC), student design defenses, and international technical symposiums.',
    },
  ];

  return (
    <section className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        <SectionHeader
          indexNumber="01"
          category="Institutional Identity"
          title="Bridging Engineering Theory & Fabrication"
          description="Rooted in the 1957 heritage of Government Engineering College Thrissur, ASME GECT serves as the technical crucible where student engineers transform mathematical models into physical prototypes."
          action={
            <Button href="/about" variant="outline" size="sm">
              <span>Read Full History</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          }
        />

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>
              The American Society of Mechanical Engineers (ASME) Student Section
              at Government Engineering College Thrissur operates directly under
              the Department of Mechanical Engineering. Founded with the mission to
              instill professional engineering rigor, our chapter fosters a culture
              where undergraduate students take charge of complex technical
              challenges.
            </p>
            <p>
              Rather than generic lectures, our focus is grounded in the workshop:
              meshing aerodynamic airfoils, programming robotic control loops,
              validating finite element stress concentrations, and fabricating
              competition-ready vehicles for international benchmarks.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#0E121A] border border-white/10 p-6 sm:p-8 rounded relative">
            <div className="text-[11px] font-mono text-asme-red uppercase tracking-widest mb-3">
              // Chapter Mandate
            </div>
            <blockquote className="font-display font-medium text-lg sm:text-xl text-white leading-snug">
              “Engineering education reaches its zenith when calculation meets
              material reality. At ASME GECT, our members do not just study
              mechanical principles—they machine, simulate, and defend them.”
            </blockquote>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Section Executive Mandate</span>
              <span className="text-white/60">GEC Thrissur Chapter</span>
            </div>
          </div>
        </div>

        {/* Four Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.code}
              className="p-6 rounded bg-[#10141D] border border-white/[0.08] hover:border-white/20 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                    {pillar.code}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-asme-red transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
