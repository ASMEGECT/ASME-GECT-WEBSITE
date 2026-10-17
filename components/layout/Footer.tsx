import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Globe,
  ExternalLink,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#060709] border-t border-white/10 relative overflow-hidden">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-8 py-16 relative z-10">
        {/* Top Tier: Identity & Quick Inquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Col 1-5: Section Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-asme-red text-white flex items-center justify-center font-bold font-mono tracking-tighter text-sm rounded-sm shadow-lg shadow-asme-red/20">
                ASME
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  ASME GECT
                </h3>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
                  Government Engineering College Thrissur
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              The premier student chapter advancing mechanical engineering,
              applied robotics, computational modeling, and student leadership at
              Government Engineering College Thrissur since chapter inception.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-foreground/80">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-asme-emerald" />
                Chartered Student Section
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10">
                <Globe className="w-3.5 h-3.5 text-asme-cyan" />
                District Asia-Pacific
              </span>
            </div>
          </div>

          {/* Col 6-8: Navigation Modules */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/90 pb-2 border-b border-white/10">
              01 // Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Overview / Home</span>
                  <span className="text-[10px] text-white/30">01</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>About & History</span>
                  <span className="text-[10px] text-white/30">02</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Events & Symposia</span>
                  <span className="text-[10px] text-white/30">03</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Engineering Showcase</span>
                  <span className="text-[10px] text-white/30">04</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Executive Committee</span>
                  <span className="text-[10px] text-white/30">05</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-muted-foreground hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Join Section / Roster</span>
                  <span className="text-[10px] text-white/30">06</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Contact & Coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/90 pb-2 border-b border-white/10">
              02 // Secretariat & Location
            </h4>
            <div className="space-y-3 text-xs font-mono text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-asme-red shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {siteConfig.institution.department},<br />
                  {siteConfig.institution.name},<br />
                  {siteConfig.institution.address}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-asme-red shrink-0" />
                <a
                  href={`mailto:${siteConfig.contacts.officialEmail}`}
                  className="text-foreground hover:text-asme-red transition-colors"
                >
                  {siteConfig.contacts.officialEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-asme-red shrink-0" />
                <span className="text-foreground">{siteConfig.contacts.phone}</span>
              </div>
            </div>

            {/* Social Link Badges */}
            <div className="pt-3 flex flex-wrap gap-2">
              {siteConfig.socialLinks.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-muted-foreground hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded transition-colors"
                >
                  <span>{item.platform}</span>
                  <ExternalLink className="w-3 h-3 text-asme-red" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal, Disclaimer & Rights */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] font-mono text-muted-foreground/80">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} ASME GECT Student Section. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground/60 max-w-2xl">
              ASME® and the ASME logo are registered trademarks of the American
              Society of Mechanical Engineers. ASME GECT is an affiliated student
              organization operating under collegiate charter at Government Engineering
              College Thrissur.
            </p>
          </div>

          <div className="flex items-center gap-4 text-white/50 shrink-0">
            <a
              href="https://www.asme.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>ASME Global</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href="https://gectcr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GEC Thrissur</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
