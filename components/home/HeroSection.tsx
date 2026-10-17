import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ArrowUpRight, Shield, Layers, Compass, Activity } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden border-b border-white/[0.08]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-asme-red/10 blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-8 relative z-10">
        {/* Micro-Telemetry Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-asme-red animate-pulse" />
          <span className="text-foreground font-medium">ASME GECT CHAPTER</span>
          <span className="text-white/20">/</span>
          <span>COLLEGIATE CHARTER #8040</span>
        </div>

        {/* Hero Grid Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Typography & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-[80px] text-white tracking-tight uppercase leading-[0.95]">
              RIGOR IN MOTION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-asme-red">
                ENGINEERED
              </span>{' '}
              AT GEC THRISSUR.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              The premier collegiate section of the American Society of Mechanical
              Engineers at Government Engineering College Thrissur. We bridge
              computational aerodynamics, human-powered vehicle dynamics, and
              industrial robotics with disciplined mechanical fabrication.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/projects" size="lg" variant="primary">
                Explore Engineering Portfolio
              </Button>
              <Button href="/membership" size="lg" variant="outline">
                Join the Section
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="font-display font-bold text-2xl text-white">
                  1957
                </div>
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                  GECT Legacy
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-asme-red">
                  250+
                </div>
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                  Student Roster
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-white">
                  14+
                </div>
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                  R&D Projects
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-asme-emerald">
                  0.142
                </div>
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                  HPVC Drag (Cd)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Technical Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full rounded border border-white/10 bg-[#0E1117] p-3 shadow-2xl overflow-hidden group">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-white/30 select-none">
                + [SYS.VIEW 01]
              </div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-white/30 select-none">
                GECT // 10.55°N
              </div>

              {/* Main Technical Hero Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-neutral-900 mt-5">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="ASME GECT Mechanical Engineering Workshop & Prototyping"
                  fill
                  priority
                  className="object-cover object-center grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-transparent to-transparent opacity-80" />
                
                {/* Visual Telemetry Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#090B0E]/90 backdrop-blur-md rounded border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-asme-red" />
                    <span className="text-xs font-mono font-medium text-foreground">
                      PRJ-AERO-01 // Wind Tunnel Sinter
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-asme-cyan">
                    ACTIVE TELEMETRY
                  </span>
                </div>
              </div>

              {/* Technical Specifications Panel Below */}
              <div className="mt-4 p-3 bg-white/[0.02] border border-white/[0.06] rounded text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>FACILITY</span>
                  <span className="text-foreground">Dept. of Mechanical Engineering</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>AFFILIATION</span>
                  <span className="text-foreground">American Society of Mech. Engineers</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>LAB CAPABILITIES</span>
                  <span className="text-asme-red">CFD • FEA • CNC • 3D SLA • ROS2</span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Metric Pill */}
            <div className="hidden sm:flex absolute -bottom-6 -left-8 p-4 bg-[#141822] border border-white/10 rounded shadow-2xl items-center gap-4 z-20">
              <div className="w-10 h-10 rounded bg-asme-red/10 border border-asme-red/30 flex items-center justify-center text-asme-red">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">
                  ASME E-FEST ASIA PACIFIC
                </div>
                <div className="text-sm font-display font-bold text-white">
                  HPVC & Student Design Defense
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
