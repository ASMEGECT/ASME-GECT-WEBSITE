'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Send, ArrowUpRight, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please provide your name, contact email, and message body.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleOpenMail = () => {
    const subject = encodeURIComponent(
      `[ASME GECT Inquiry - ${formData.inquiryType}] ${formData.subject || 'Direct Communication'}`
    );
    const body = encodeURIComponent(
      `Sender: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Affiliation / College: ${formData.organization || 'Not Specified'}\n` +
        `Inquiry Nature: ${formData.inquiryType}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nTransmitted via ASME GECT Official Communication Desk`
    );
    window.location.href = `mailto:${siteConfig.contacts.officialEmail}?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-lg bg-[#0C1017] border border-asme-emerald/30 space-y-6 text-center animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-asme-emerald/10 text-asme-emerald flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display font-bold text-2xl text-white">
            Inquiry Prepared For Transmission
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Your message has been compiled for the ASME GECT Secretariat. Click
            below to launch your mail client and send it directly to{' '}
            <span className="text-asme-red">{siteConfig.contacts.officialEmail}</span>.
          </p>
        </div>

        <div className="p-4 rounded bg-white/[0.02] border border-white/10 text-xs font-mono text-left space-y-2 max-w-md mx-auto">
          <div className="flex justify-between text-muted-foreground">
            <span>SENDER</span>
            <span className="text-white">{formData.name}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>EMAIL</span>
            <span className="text-white">{formData.email}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>TYPE</span>
            <span className="text-asme-cyan">{formData.inquiryType}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>SUBJECT</span>
            <span className="text-white truncate max-w-[200px]">
              {formData.subject || 'General Inquiry'}
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleOpenMail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-asme-red hover:bg-asme-red-hover text-white text-xs font-mono font-medium transition-colors shadow-lg shadow-asme-red/20"
          >
            <Send className="w-4 h-4" />
            <span>Open in Mail Client & Send</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-muted-foreground hover:text-white"
          >
            Edit Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-lg bg-[#0C1017] border border-white/[0.08] space-y-6 shadow-xl"
    >
      <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
        <div>
          <h3 className="font-display font-bold text-xl text-white uppercase">
            Direct Transmission Desk
          </h3>
          <p className="text-xs font-mono text-muted-foreground mt-0.5">
            Direct routing to ASME GECT office bearers and faculty advisors.
          </p>
        </div>
        <span className="text-[10px] font-mono text-asme-emerald font-semibold uppercase hidden sm:inline">
          OFFICIAL SECRETARIAT
        </span>
      </div>

      {error && (
        <div className="p-3 rounded bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="your.email@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors"
          />
        </div>

        {/* Organization / College */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Organization / College
          </label>
          <input
            type="text"
            placeholder="e.g. GEC Thrissur / Industry Partner"
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors"
          />
        </div>

        {/* Inquiry Type */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Inquiry Category
          </label>
          <select
            value={formData.inquiryType}
            onChange={(e) =>
              setFormData({ ...formData, inquiryType: e.target.value })
            }
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white focus:border-asme-red focus:outline-none transition-colors"
          >
            <option>General Inquiry</option>
            <option>Technical Collaboration / Research</option>
            <option>Industry Sponsorship & Mentorship</option>
            <option>Symposium & Event Participation</option>
            <option>Membership Verification</option>
          </select>
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-muted-foreground uppercase block">
          Subject Line
        </label>
        <input
          type="text"
          placeholder="Brief summary of inquiry..."
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-muted-foreground uppercase block">
          Message Body *
        </label>
        <textarea
          rows={4}
          required
          placeholder="State your technical query, project collaboration proposal, or event inquiry..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Mail className="w-3.5 h-3.5 text-asme-red" />
          <span>Routes to asme@gectcr.ac.in</span>
        </div>
        <Button type="submit" size="md" variant="primary">
          <span>Review & Send Inquiry</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </form>
  );
}
