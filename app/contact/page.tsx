import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { siteConfig } from '@/data/siteConfig';
import {
  MapPin,
  Mail,
  Phone,
  Compass,
  Building,
  ExternalLink,
  ShieldCheck,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Secretariat',
  description:
    'Connect with the ASME Student Section at Government Engineering College Thrissur. Official addresses, physical coordinates, and inquiry desk.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-asme-red mb-4">
            <span>MODULE 07 // DIRECT COMMUNICATION</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            Contact & Location Telemetry
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Direct routing for academic collaborations, industry sponsorships,
            event registration assistance, and general correspondence.
          </p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Physical Coordinates & Secretariat Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location & Coordinates Card */}
            <div className="p-6 sm:p-8 rounded-lg bg-[#0C1017] border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono text-asme-red font-semibold uppercase">
                  <Compass className="w-4 h-4" />
                  <span>Physical Coordinates</span>
                </div>
                <span className="text-[10px] font-mono text-asme-cyan">
                  {siteConfig.institution.coordinates.raw}
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-asme-red shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">
                      {siteConfig.institution.department}
                    </div>
                    <div className="text-muted-foreground">
                      {siteConfig.contacts.officeLocation}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-asme-red shrink-0 mt-0.5" />
                  <div className="text-muted-foreground leading-relaxed">
                    {siteConfig.institution.name},<br />
                    {siteConfig.institution.address}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.04]">
                  <Mail className="w-4 h-4 text-asme-red shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contacts.officialEmail}`}
                    className="text-foreground hover:text-asme-red transition-colors"
                  >
                    {siteConfig.contacts.officialEmail}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-asme-red shrink-0" />
                  <span className="text-foreground">
                    {siteConfig.contacts.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-asme-cyan shrink-0" />
                  <span className="text-muted-foreground">
                    Working Hours: Mon–Fri, 09:00–16:30 IST
                  </span>
                </div>
              </div>
            </div>

            {/* External Portals & Social Navigation */}
            <div className="p-6 rounded-lg bg-[#0E121A] border border-white/[0.08] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/90">
                Official External Portals
              </h3>
              <div className="space-y-2">
                {siteConfig.socialLinks.map((item) => (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] text-xs font-mono text-muted-foreground hover:text-white transition-colors"
                  >
                    <span>{item.platform}</span>
                    <div className="flex items-center gap-1 text-asme-red">
                      <span className="text-[10px] text-muted-foreground">
                        {item.handle}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Verification Badge */}
            <div className="p-4 rounded bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs font-mono text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-asme-emerald shrink-0" />
              <span>
                Collegiate Section #8040 operating under ASME Asia-Pacific
                District jurisdiction.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
