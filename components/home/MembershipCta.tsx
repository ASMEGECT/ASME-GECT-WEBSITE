import React from 'react';
import Button from '@/components/ui/Button';
import { ArrowUpRight, CheckSquare, Zap, BookOpen, Users } from 'lucide-react';

export default function MembershipCta() {
  const perks = [
    {
      icon: <BookOpen className="w-4 h-4 text-asme-red" />,
      text: 'Global ASME digital engineering library and standards access',
    },
    {
      icon: <Zap className="w-4 h-4 text-asme-cyan" />,
      text: 'Hands-on CAD, CFD, and FabLab workshop allocations at GECT',
    },
    {
      icon: <Users className="w-4 h-4 text-asme-amber" />,
      text: 'Eligibility for HPVC, robotics racing teams, and E-Fest delegations',
    },
    {
      icon: <CheckSquare className="w-4 h-4 text-asme-emerald" />,
      text: 'Leadership opportunities in student executive committees & symposiums',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0D13]">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-asme-red/10 blur-[160px] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-8 relative z-10">
        <div className="rounded border border-white/10 bg-[#0E121A] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Top telemetry tag */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <span className="font-mono text-xs text-asme-red uppercase tracking-widest font-semibold">
              // ONBOARDING INITIATIVE 2024-25
            </span>
            <span className="font-mono text-[10px] text-muted-foreground uppercase hidden sm:inline">
              ENROLLMENT WINDOW ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight">
                Build Your Mechanical Future With ASME GECT
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                Whether you aspire to simulate aerodynamic hypersonic airfoils,
                engineer high-efficiency composite vehicles, or command 6-DOF
                robotic kinematics, ASME GECT provides the community, resources,
                and fabrication platforms to accelerate your ambition.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/membership" size="lg" variant="primary">
                  <span>Register as Student Member</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button href="/contact" size="lg" variant="outline">
                  Contact Student Secretariat
                </Button>
              </div>
            </div>

            {/* Right Perks Checklist */}
            <div className="lg:col-span-5 bg-[#141822] p-6 sm:p-8 rounded border border-white/[0.08] space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold pb-2 border-b border-white/10">
                Chapter Membership Privileges
              </div>

              <div className="space-y-3.5">
                {perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded bg-white/[0.04] shrink-0 mt-0.5">
                      {perk.icon}
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed font-sans">
                      {perk.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Affiliation: ASME International</span>
                <span className="text-asme-red">GECT Chapter #8040</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
