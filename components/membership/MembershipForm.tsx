'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, ArrowUpRight, Send } from 'lucide-react';

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    branch: 'Mechanical Engineering',
    semester: 'S1/S2 (First Year)',
    interest: 'Aerodynamics & CFD',
    statement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rollNo) {
      setError('Please provide your full name, institutional email, and roll number.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(
      `ASME GECT Student Membership Application - ${formData.name} (${formData.rollNo})`
    );
    const body = encodeURIComponent(
      `Candidate Name: ${formData.name}\n` +
        `Institutional Email: ${formData.email}\n` +
        `Roll Number / Admission No: ${formData.rollNo}\n` +
        `Branch / Department: ${formData.branch}\n` +
        `Current Semester: ${formData.semester}\n` +
        `Primary Technical Wing of Interest: ${formData.interest}\n\n` +
        `Statement of Intent / Prior Experience:\n${formData.statement || 'N/A'}\n\n` +
        `Submitted via ASME GECT Official Portal`
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
            Application Transmission Recorded
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Thank you, <span className="text-white font-medium">{formData.name}</span>. Your details for the{' '}
            <span className="text-asme-red">{formData.interest}</span> wing have been compiled.
          </p>
        </div>

        <div className="p-4 rounded bg-white/[0.02] border border-white/10 text-xs font-mono text-left space-y-2 max-w-md mx-auto">
          <div className="flex justify-between text-muted-foreground">
            <span>STUDENT</span>
            <span className="text-white">{formData.name}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>ROLL NUMBER</span>
            <span className="text-white">{formData.rollNo}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>EMAIL</span>
            <span className="text-white">{formData.email}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>WING</span>
            <span className="text-asme-cyan">{formData.interest}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleMailtoFallback}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-asme-red hover:bg-asme-red-hover text-white text-xs font-mono font-medium transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open in Mail Client to Confirm</span>
          </button>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-muted-foreground hover:text-white"
          >
            Submit Another Entry
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
            Membership Registration Intent
          </h3>
          <p className="text-xs font-mono text-muted-foreground mt-0.5">
            Submit credentials to register for active section roster.
          </p>
        </div>
        <span className="text-[10px] font-mono text-asme-red font-semibold uppercase hidden sm:inline">
          OFFICIAL FORM
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
            placeholder="e.g. Rahul Krishnan"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors"
          />
        </div>

        {/* Institutional Email */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Institutional Email *
          </label>
          <input
            type="email"
            required
            placeholder="engineer@gectcr.ac.in"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors"
          />
        </div>

        {/* Roll / Register Number */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            College Roll / Admission No *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 23ME104"
            value={formData.rollNo}
            onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors"
          />
        </div>

        {/* Branch */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Branch / Department
          </label>
          <select
            value={formData.branch}
            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white focus:border-asme-red focus:outline-none transition-colors"
          >
            <option>Mechanical Engineering</option>
            <option>Production Engineering</option>
            <option>Electrical & Electronics</option>
            <option>Chemical Engineering</option>
            <option>Civil Engineering</option>
            <option>Computer Science / AI</option>
          </select>
        </div>

        {/* Semester */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Academic Year / Semester
          </label>
          <select
            value={formData.semester}
            onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white focus:border-asme-red focus:outline-none transition-colors"
          >
            <option>S1/S2 (First Year)</option>
            <option>S3/S4 (Second Year)</option>
            <option>S5/S6 (Third Year)</option>
            <option>S7/S8 (Final Year)</option>
          </select>
        </div>

        {/* Technical Wing */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-muted-foreground uppercase block">
            Primary Interest Wing
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white focus:border-asme-red focus:outline-none transition-colors"
          >
            <option>Aerodynamics & CFD (Project Vortex)</option>
            <option>Automotive & HPVC Racing</option>
            <option>Robotics & Kinematics Control</option>
            <option>Additive Manufacturing & FabLab</option>
            <option>Thermal Systems & Renewable Energy</option>
            <option>Design & Editorial Media</option>
          </select>
        </div>
      </div>

      {/* Statement */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-muted-foreground uppercase block">
          Statement of Interest / Prior Engineering Projects (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Briefly describe what CAD software you use or what you hope to build with ASME GECT..."
          value={formData.statement}
          onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
          className="w-full bg-[#121622] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-muted-foreground/40 focus:border-asme-red focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-muted-foreground">
          Submission routes to <span className="text-white font-medium">{siteConfig.contacts.officialEmail}</span>
        </p>
        <Button type="submit" size="md" variant="primary">
          <span>Transmit Application</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </form>
  );
}
