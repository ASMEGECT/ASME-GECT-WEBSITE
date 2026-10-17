import React from 'react';
import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import EventsExplorer from '@/components/events/EventsExplorer';
import { eventsData } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events & Symposia',
  description:
    'Discover upcoming mechanical engineering workshops, the Synergia national symposium, CFD practicums, and design competitions at ASME GECT.',
};

export default function EventsPage() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-asme-red mb-4">
            <span>MODULE 03 // SYMPOSIA & SCHEDULES</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            Technical Sessions & Symposia
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            From deep-dive finite volume aerodynamics to collegiate racecar
            defenses and regional student conferences—explore the active calendar
            of ASME GECT.
          </p>
        </div>

        {/* Interactive Explorer with Filtering and Modal */}
        <EventsExplorer events={eventsData} />
      </div>
    </div>
  );
}
