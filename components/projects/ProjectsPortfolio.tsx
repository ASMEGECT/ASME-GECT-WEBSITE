'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectItem, ProjectCategory } from '@/types';
import Badge from '@/components/ui/Badge';
import {
  Layers,
  Cpu,
  Compass,
  CheckCircle2,
  ExternalLink,
  Github,
  Filter,
  Sparkles,
} from 'lucide-react';

interface ProjectsPortfolioProps {
  projects: ProjectItem[];
}

export default function ProjectsPortfolio({
  projects,
}: ProjectsPortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Aerospace & Fluid Dynamics',
    'Automotive & HPVC',
    'Robotics & Automation',
    'Thermal Systems',
    'Sustainable Tech',
  ];

  const filteredProjects = projects.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="space-y-12">
      {/* Category Filter Bar */}
      <div className="p-4 sm:p-6 rounded bg-[#0D1017] border border-white/[0.08] flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-muted-foreground mr-2 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-asme-red" />
          RESEARCH DISCIPLINE:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
              selectedCategory === cat
                ? 'bg-asme-red text-white font-medium shadow-md shadow-asme-red/20'
                : 'bg-white/[0.04] text-muted-foreground hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List - Editorial Journal Style */}
      <div className="space-y-16">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            id={project.id}
            className="p-8 sm:p-10 rounded-lg bg-[#0C0F16] border border-white/[0.08] relative overflow-hidden shadow-2xl group"
          >
            {/* Top Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-asme-red font-bold tracking-widest uppercase">
                  RECORD #{String(idx + 1).padStart(2, '0')} //
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/[0.04] text-white/90 border border-white/10">
                  {project.code}
                </span>
                <Badge
                  variant={
                    project.status === 'Active Research'
                      ? 'active'
                      : project.status === 'Field Tested'
                      ? 'upcoming'
                      : 'amber'
                  }
                >
                  {project.status}
                </Badge>
              </div>

              <div className="text-xs font-mono text-muted-foreground">
                TIMELINE: <span className="text-white">{project.timeline}</span>
              </div>
            </div>

            {/* Split Content: Specs + Narrative vs Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Title & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono text-asme-cyan uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-asme-red transition-colors leading-snug">
                    {project.title}
                  </h2>
                  <div className="text-xs font-mono text-muted-foreground mt-1">
                    Lead: {project.lead}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>

                {/* Key Innovations */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white/90 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-asme-red" />
                    Key Innovations & Findings
                  </h3>
                  <ul className="space-y-2 text-xs font-mono text-foreground/80">
                    {project.keyInnovations.map((inn, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-asme-emerald shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{inn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Documentation / Code Link */}
                {project.repoOrDocumentation && (
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={project.repoOrDocumentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-white border border-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Technical Repository</span>
                      <ExternalLink className="w-3 h-3 text-asme-red ml-1" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Visual & Telemetry Specifications Matrix */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Image */}
                <div className="relative aspect-[16/10] w-full rounded border border-white/10 overflow-hidden bg-neutral-900">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F16] via-transparent to-transparent opacity-60" />
                </div>

                {/* Specifications Matrix Table */}
                <div className="bg-[#10141E] rounded border border-white/[0.08] p-5 space-y-3 font-mono text-xs">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground pb-2 border-b border-white/[0.06]">
                    Technical Specifications
                  </div>
                  <div className="space-y-2.5">
                    {project.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between pb-1.5 border-b border-white/[0.04] last:border-b-0"
                      >
                        <span className="text-muted-foreground">
                          {spec.label}
                        </span>
                        <span className="text-white font-medium text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
