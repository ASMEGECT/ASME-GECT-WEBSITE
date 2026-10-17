import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { teamMembers } from '@/data/team';
import { TeamDivision } from '@/types';
import { Mail, Linkedin, Github, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Executive Committee & Leadership Team',
  description:
    'Meet the faculty advisors, student office-bearers, and technical research leads driving ASME GECT at Government Engineering College Thrissur.',
};

export default function TeamPage() {
  const divisions: TeamDivision[] = [
    'Faculty Advisors',
    'Executive Committee',
    'Technical & Fabrication',
    'Design & Editorial',
    'Public Relations & Outreach',
  ];

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-asme-red mb-4">
            <span>MODULE 05 // LEADERSHIP ROSTER</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            The Executive Committee & Advisors
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            The dedicated faculty mentors and undergraduate engineers responsible
            for steering section operations, laboratory practicums, and national
            design challenges.
          </p>
        </div>

        {/* Note on Transparency & Customization */}
        <div className="p-4 rounded bg-[#0D1017] border border-white/[0.08] flex items-center justify-between text-xs font-mono text-muted-foreground mb-16">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-asme-emerald shrink-0" />
            <span>
              ROSTER CYCLE: 2024–2025 // All roles are elected and mentored under
              the Dept. of Mechanical Engineering, GECT.
            </span>
          </div>
          <span className="hidden md:inline text-white/40">
            CONFIG: data/team.ts
          </span>
        </div>

        {/* Divisions Stack */}
        <div className="space-y-20">
          {divisions.map((division, divIdx) => {
            const members = teamMembers.filter((m) => m.division === division);
            if (members.length === 0) return null;

            return (
              <section key={division} className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-xs font-semibold text-asme-red">
                    0{divIdx + 1} //
                  </span>
                  <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
                    {division}
                  </h2>
                  <span className="text-xs font-mono text-muted-foreground ml-auto">
                    {members.length} {members.length === 1 ? 'Member' : 'Members'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="rounded bg-[#0C0F16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
                    >
                      <div>
                        {/* Member Photo */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border-b border-white/[0.06]">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F16] via-transparent to-transparent opacity-80" />

                          {/* Academic year badge */}
                          {member.academicYear && (
                            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono text-white/90 border border-white/10">
                              {member.academicYear}
                            </span>
                          )}
                        </div>

                        {/* Card Body */}
                        <div className="p-5 space-y-2">
                          <div className="text-[11px] font-mono text-asme-red font-semibold uppercase tracking-wider">
                            {member.role}
                          </div>
                          <h3 className="font-display font-bold text-lg text-white group-hover:text-asme-red transition-colors leading-tight">
                            {member.name}
                          </h3>
                          <div className="text-xs font-mono text-muted-foreground">
                            {member.department}
                          </div>

                          {member.bio && (
                            <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-white/[0.04]">
                              {member.bio}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Card Footer: Social / Contact Links */}
                      {member.links && (
                        <div className="p-5 pt-0 flex items-center gap-2 border-t border-white/[0.04] mt-2">
                          {member.links.email && (
                            <a
                              href={`mailto:${member.links.email}`}
                              aria-label={`Email ${member.name}`}
                              className="p-2 rounded bg-white/[0.04] hover:bg-asme-red text-muted-foreground hover:text-white transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {member.links.linkedin && (
                            <a
                              href={member.links.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`LinkedIn profile for ${member.name}`}
                              className="p-2 rounded bg-white/[0.04] hover:bg-asme-red text-muted-foreground hover:text-white transition-colors"
                            >
                              <Linkedin className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {member.links.github && (
                            <a
                              href={member.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`GitHub profile for ${member.name}`}
                              className="p-2 rounded bg-white/[0.04] hover:bg-asme-red text-muted-foreground hover:text-white transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Sub-Committee Recruitment Callout */}
        <section className="mt-24 p-8 sm:p-12 rounded-lg bg-[#0E121A] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display font-bold text-2xl text-white uppercase">
              Join a Technical Sub-Committee
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Junior cohorts at GECT can apprentice directly under our leads in
              Aerodynamics, Vehicle Fabrication, Robotics, and Editorial Media.
            </p>
          </div>
          <Button href="/membership" size="md" variant="primary">
            <span>Apply for Committee Roster</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </section>
      </div>
    </div>
  );
}
