'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { EventItem, EventCategory, EventStatus } from '@/types';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  ArrowUpRight,
  Filter,
  Sparkles,
  Info,
} from 'lucide-react';

interface EventsExplorerProps {
  events: EventItem[];
}

export default function EventsExplorer({ events }: EventsExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(
    null
  );

  const categories = ['All', 'Workshop', 'Competition', 'Symposium'];

  const filteredEvents = events.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesStatus =
      selectedStatus === 'all' || item.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-12">
      {/* Filter Toolbar */}
      <div className="p-4 sm:p-6 rounded bg-[#0D1017] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-asme-red" />
            CATEGORY:
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

        {/* Status Toggle Buttons */}
        <div className="flex items-center gap-2 border-t md:border-t-0 border-white/[0.06] pt-4 md:pt-0">
          <span className="text-xs font-mono text-muted-foreground mr-1">
            STATUS:
          </span>
          {[
            { label: 'All', value: 'all' },
            { label: 'Upcoming', value: 'upcoming' },
            { label: 'Completed', value: 'completed' },
          ].map((st) => (
            <button
              key={st.value}
              onClick={() => setSelectedStatus(st.value)}
              className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                selectedStatus === st.value
                  ? 'bg-white/15 text-white font-medium border border-white/20'
                  : 'bg-white/[0.02] text-muted-foreground hover:text-white border border-white/[0.04]'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events Results Count */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
        <span>
          Showing {filteredEvents.length} of {events.length} sessions
        </span>
        <span className="text-asme-red uppercase">
          {selectedCategory.toUpperCase()} // {selectedStatus.toUpperCase()}
        </span>
      </div>

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-20 p-8 rounded bg-[#0D1017] border border-white/[0.08] space-y-3">
          <Info className="w-8 h-8 text-asme-red mx-auto" />
          <h3 className="font-display font-bold text-lg text-white">
            No Sessions Match Filter Criteria
          </h3>
          <p className="text-xs font-mono text-muted-foreground">
            Try resetting your category or status filters to view all scheduled
            symposia.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedStatus('all');
            }}
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded bg-[#0F131D] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Event Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/[0.06]">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F131D] via-transparent to-transparent opacity-80" />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white/90 border border-white/10">
                      {event.category}
                    </span>
                    <Badge
                      variant={
                        event.status === 'upcoming' ? 'upcoming' : 'completed'
                      }
                    >
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </Badge>
                  </div>
                </div>

                {/* Event Card Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-asme-red">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-asme-cyan" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-asme-red transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-muted-foreground border-t border-white/[0.06]">
                    <MapPin className="w-3.5 h-3.5 text-asme-red shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => setActiveModalEvent(event)}
                  className="w-full py-2.5 px-3 rounded bg-white/[0.04] hover:bg-white/[0.08] text-foreground hover:text-white transition-colors text-xs font-mono flex items-center justify-center gap-1.5 border border-white/[0.06]"
                >
                  <Info className="w-3.5 h-3.5 text-asme-cyan" />
                  <span>View Full Schedule & Details</span>
                </button>

                {event.status === 'upcoming' && (
                  <Button
                    href={event.registrationLink}
                    size="sm"
                    variant="primary"
                    className="w-full"
                  >
                    <span>Register for Session</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Event Details Modal */}
      {activeModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0D1017] border border-white/15 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl my-8 text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-asme-red/10 text-asme-red text-[10px] font-mono border border-asme-red/20 uppercase">
                    {activeModalEvent.category}
                  </span>
                  <Badge
                    variant={
                      activeModalEvent.status === 'upcoming'
                        ? 'upcoming'
                        : 'completed'
                    }
                  >
                    {activeModalEvent.status}
                  </Badge>
                </div>
                <h3
                  id="modal-event-title"
                  className="font-display font-bold text-2xl text-white leading-tight"
                >
                  {activeModalEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalEvent(null)}
                aria-label="Close modal dialog"
                className="p-1 rounded text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Time & Venue Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono bg-white/[0.02] p-4 rounded border border-white/[0.06]">
              <div className="space-y-1">
                <span className="text-muted-foreground uppercase text-[10px] block">
                  Date & Time
                </span>
                <span className="text-white font-medium">
                  {activeModalEvent.date}
                </span>
                <div className="text-asme-cyan">{activeModalEvent.time}</div>
              </div>
              <div className="space-y-1">
                <span className="text-muted-foreground uppercase text-[10px] block">
                  Location Venue
                </span>
                <span className="text-white font-medium">
                  {activeModalEvent.venue}
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/80">
                Detailed Briefing
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {activeModalEvent.description}
              </p>
            </div>

            {/* Highlights */}
            {activeModalEvent.highlights &&
              activeModalEvent.highlights.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-asme-cyan">
                    Session Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs font-mono text-foreground/80">
                    {activeModalEvent.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-asme-red shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Prerequisites */}
            {activeModalEvent.prerequisites &&
              activeModalEvent.prerequisites.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-asme-amber">
                    Participant Prerequisites
                  </h4>
                  <ul className="space-y-1 text-xs font-mono text-muted-foreground">
                    {activeModalEvent.prerequisites.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-asme-emerald shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Speakers / Mentors */}
            {activeModalEvent.speakers &&
              activeModalEvent.speakers.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/80">
                    Keynote & Facilitators
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalEvent.speakers.map((sp, i) => (
                      <div
                        key={i}
                        className="p-3 rounded bg-white/[0.02] border border-white/[0.06] text-xs font-mono space-y-0.5"
                      >
                        <div className="text-white font-medium">{sp.name}</div>
                        <div className="text-[11px] text-asme-red">
                          {sp.role}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {sp.affiliation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Footer / CTA */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalEvent(null)}
                className="px-4 py-2 rounded text-xs font-mono text-muted-foreground hover:text-white"
              >
                Close
              </button>
              {activeModalEvent.status === 'upcoming' && (
                <Button
                  href={activeModalEvent.registrationLink}
                  size="sm"
                  variant="primary"
                >
                  <span>Register for Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
