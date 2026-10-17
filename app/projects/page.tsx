import React from 'react';
import type { Metadata } from 'next';
import ProjectsPortfolio from '@/components/projects/ProjectsPortfolio';
import { projectsData } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Engineering Projects Portfolio',
  description:
    'Curated mechanical engineering journal featuring aerodynamics, human-powered vehicles, robotics, and thermal management at ASME GECT.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-asme-red mb-4">
            <span>MODULE 04 // ENGINEERING DOSSIER</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            Engineering Journal & Portfolio
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Detailed technical disclosures, aerodynamic test findings, vehicle
            dynamics specifications, and mechanical prototypes developed by the
            research wings of ASME GECT.
          </p>
        </div>

        {/* Portfolio Showcase */}
        <ProjectsPortfolio projects={projectsData} />
      </div>
    </div>
  );
}
