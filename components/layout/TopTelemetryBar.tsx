'use client';

import React, { useEffect, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

export default function TopTelemetryBar() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside aria-label="System status telemetry" className="w-full bg-[#07090C] border-b border-white/[0.07] text-[11px] font-mono text-muted-foreground py-1.5 px-4 sm:px-8 select-none">
      <div className="max-w-container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
        {/* Left: Location & Coordinates */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-foreground/90 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-asme-emerald animate-pulse"></span>
            SYS.STATUS: OPERATIONAL
          </span>
          <span className="text-white/20 hidden md:inline">|</span>
          <span className="hidden md:inline text-muted-foreground">
            LOC: GEC THRISSUR [{siteConfig.institution.coordinates.latitude},{' '}
            {siteConfig.institution.coordinates.longitude}]
          </span>
        </div>

        {/* Center: Section Designation */}
        <div className="hidden lg:flex items-center gap-2 text-foreground/70">
          <span>ASME STUDENT SECTION #8040</span>
          <span className="text-white/20">•</span>
          <span className="text-asme-red font-semibold">DEPT. OF MECHANICAL ENGINEERING</span>
        </div>

        {/* Right: Live Telemetry Clock */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0 font-medium">
          <span className="text-foreground/80">{currentTime || '12:00:00 IST'}</span>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="text-asme-cyan hidden sm:inline">CYCLE 2024-25</span>
        </div>
      </div>
    </aside>
  );
}
