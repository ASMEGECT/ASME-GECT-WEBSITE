import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Terminal, Box, Wrench, Activity } from 'lucide-react';

export default function TechnicalWorkshops() {
  const tracks = [
    {
      icon: <Box className="w-5 h-5 text-asme-red" />,
      num: '01',
      title: 'Parametric CAD & GD&T Detailing',
      software: 'Siemens NX • SolidWorks • Fusion 360',
      description:
        'From master drafting to complex surface lofts and ASME Y14.5 Geometric Dimensioning and Tolerancing for production-grade fabrication.',
      topics: ['Surface Modeling', 'Assembly Constraints', 'ASME Y14.5 GD&T Standards', 'Draft Analysis'],
    },
    {
      icon: <Activity className="w-5 h-5 text-asme-cyan" />,
      num: '02',
      title: 'Aerodynamic CFD & Structural FEA',
      software: 'ANSYS Fluent • OpenFOAM • Abaqus',
      description:
        'Structured boundary-layer prism meshing, convergence diagnostics, Von-Mises stress analysis, and modal frequency vibration calculations.',
      topics: ['Boundary Layer Meshing', 'k-omega SST Turbulence', 'Static & Dynamic FEA', 'Modal Vibration'],
    },
    {
      icon: <Wrench className="w-5 h-5 text-asme-amber" />,
      num: '03',
      title: 'CNC Machining & Additive Tooling',
      software: 'Slic3r • Fusion CAM • G-Code Post',
      description:
        'Toolpath generation, feed and speed optimization for alloy steels, carbon-fiber nylon sintering, and vacuum infusion composite layups.',
      topics: ['3-Axis CNC Machining', 'SLA/SLM 3D Printing', 'Composite Vacuum Bagging', 'TIG Welding Alloys'],
    },
    {
      icon: <Terminal className="w-5 h-5 text-asme-emerald" />,
      num: '04',
      title: 'Industrial Robotics & Embedded ROS2',
      software: 'ROS2 Humble • STM32 Cube • Python',
      description:
        'Multi-axis manipulator kinematics, cycloidal gearbox tuning, Field Oriented Control (FOC) for BLDC actuators, and hardware control pipelines.',
      topics: ['Denavit-Hartenberg Matrices', 'Micro-ROS Hardware Nodes', 'BLDC Motor FOC', 'Cycloidal Reducer Machining'],
    },
  ];

  return (
    <section className="py-24 border-b border-white/[0.08] relative bg-[#090C11]">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        <SectionHeader
          indexNumber="04"
          category="Skill Development & Laboratory Practicums"
          title="Technical Learning Curricula"
          description="ASME GECT runs intensive, student-led practicums designed to take undergraduates far beyond textbook theory into industry-standard computational and manufacturing software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <div
              key={track.num}
              className="p-8 rounded bg-[#10141D] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                    {track.icon}
                  </div>
                  <span className="font-mono text-xs text-asme-red font-semibold">
                    MODULE // {track.num}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-asme-red transition-colors">
                    {track.title}
                  </h3>
                  <div className="text-[11px] font-mono text-asme-cyan tracking-wider mt-1 uppercase">
                    {track.software}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {track.description}
                </p>

                {/* Sub-topics list */}
                <div className="pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[11px] font-mono text-foreground/80">
                  {track.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-asme-red" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
