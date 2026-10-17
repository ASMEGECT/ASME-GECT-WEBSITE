import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { CheckCircle2 } from 'lucide-react';

export default function TelemetryStats() {
  return (
    <section className="py-20 border-b border-white/[0.08] relative bg-[#06080B]">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-asme-emerald animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Verified Chapter Metrics // GEC Thrissur Section
            </span>
          </div>
          <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
            ASME SECTION AUDIT 2024-25
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.sectionStats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded bg-[#0D1017] border border-white/[0.08] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                <CheckCircle2 className="w-12 h-12 text-asme-red" />
              </div>

              <div className="space-y-2 relative z-10">
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-white group-hover:text-asme-red transition-colors">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                  {stat.label}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] font-mono text-asme-emerald">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Section Benchmark</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
