import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { projectsData } from '@/data/projects';
import { ArrowUpRight, ArrowRight, Gauge, Layers, Cpu } from 'lucide-react';

export default function FlagshipShowcase() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 border-b border-white/[0.08] relative bg-[#07090C]">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        <SectionHeader
          indexNumber="02"
          category="Engineering Showcase"
          title="Flagship Technical R&D"
          description="Curated student engineering initiatives spanning aerodynamic testing, human-powered composite transport, and phase-change thermal science."
          action={
            <Button href="/projects" variant="outline" size="sm">
              <span>View All 5 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          }
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded bg-[#0F131C] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Image Container with Telemetry Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/[0.06]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F131C] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white/90 border border-white/10">
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
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="text-[11px] font-mono text-asme-red uppercase tracking-widest">
                    {project.category}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-asme-red transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Key Specifications Grid */}
                  <div className="pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[11px] font-mono">
                    {project.specs.slice(0, 4).map((spec, i) => (
                      <div key={i} className="bg-white/[0.02] p-2 rounded">
                        <div className="text-muted-foreground/70 text-[9px] uppercase">
                          {spec.label}
                        </div>
                        <div className="text-foreground font-medium truncate">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <Link
                  href={`/projects#${project.id}`}
                  className="w-full inline-flex items-center justify-between py-2.5 px-3 rounded bg-white/[0.03] hover:bg-asme-red text-muted-foreground hover:text-white transition-all duration-200 text-xs font-mono group/btn"
                >
                  <span>Inspect Technical Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
