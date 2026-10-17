import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { eventsData } from '@/data/events';
import { Calendar, Clock, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function UpcomingEventsPreview() {
  const upcomingEvents = eventsData
    .filter((e) => e.status === 'upcoming')
    .slice(0, 3);

  return (
    <section className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        <SectionHeader
          indexNumber="03"
          category="Conferences & Practicums"
          title="Events & Technical Symposia"
          description="High-velocity workshops, national design symposiums, and hands-on laboratory sessions organized by ASME GECT for the engineering fraternity."
          action={
            <Button href="/events" variant="outline" size="sm">
              <span>View All Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          }
        />

        {/* Events Stack Layout */}
        <div className="space-y-6">
          {upcomingEvents.map((event, idx) => (
            <div
              key={event.id}
              className="p-6 sm:p-8 rounded bg-[#0D1017] border border-white/[0.08] hover:border-white/20 transition-all duration-200 group grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Date & Sequence */}
              <div className="lg:col-span-3 space-y-2 border-b lg:border-b-0 lg:border-r border-white/[0.06] pb-4 lg:pb-0 lg:pr-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-asme-red uppercase tracking-widest">
                    SESSION #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <Badge variant="upcoming">Upcoming</Badge>
                </div>
                <div className="flex items-center gap-2 text-foreground font-display font-bold text-xl sm:text-2xl">
                  <Calendar className="w-4 h-4 text-asme-red shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-asme-cyan shrink-0" />
                  <span>{event.time}</span>
                </div>
              </div>

              {/* Center Column: Title, Subtitle, Highlights */}
              <div className="lg:col-span-6 space-y-3">
                <div className="text-[11px] font-mono text-asme-cyan uppercase tracking-wider">
                  {event.category}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-asme-red transition-colors leading-snug">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground pt-1">
                  <MapPin className="w-3.5 h-3.5 text-asme-red shrink-0" />
                  <span>{event.venue}</span>
                </div>
              </div>

              {/* Right Column: CTA */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
                <div className="text-right hidden lg:block">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                    Admissions
                  </span>
                  <span className="text-xs font-mono text-asme-emerald font-semibold uppercase">
                    Registration Open
                  </span>
                </div>
                <Button href={event.registrationLink} size="sm" variant="primary">
                  <span>Register Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
