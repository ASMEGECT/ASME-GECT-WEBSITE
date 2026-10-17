import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import FlagshipShowcase from '@/components/home/FlagshipShowcase';
import UpcomingEventsPreview from '@/components/home/UpcomingEventsPreview';
import TechnicalWorkshops from '@/components/home/TechnicalWorkshops';
import TelemetryStats from '@/components/home/TelemetryStats';
import MembershipCta from '@/components/home/MembershipCta';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutPreview />
      <FlagshipShowcase />
      <UpcomingEventsPreview />
      <TechnicalWorkshops />
      <TelemetryStats />
      <MembershipCta />
    </div>
  );
}
