import React from 'react';
import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import MembershipForm from '@/components/membership/MembershipForm';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Award,
  HelpCircle,
  Layers,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Membership & Student Onboarding',
  description:
    'Join the ASME GECT Student Section. Access global engineering standards, advanced CAD/CFD labs, HPVC racing teams, and student mentorship.',
};

export default function MembershipPage() {
  const steps = [
    {
      num: '01',
      title: 'Collegiate Verification',
      detail:
        'Must be an enrolled student (B.Tech or Diploma) at Government Engineering College Thrissur across any engineering branch.',
    },
    {
      num: '02',
      title: 'Technical Wing Selection',
      detail:
        'Choose your primary specialization area: Aerodynamics & CFD, HPVC & Fabrication, Robotics & Automation, or Editorial & Media.',
    },
    {
      num: '03',
      title: 'ASME Global Enrollment',
      detail:
        'Receive your official international ASME Student Membership ID granting digital access to ASME codes, journals, and conference discounts.',
    },
    {
      num: '04',
      title: 'Lab & Tooling Access',
      detail:
        'Induction into the GECT mechanical workshops, central FabLab resources, compute workstations, and ongoing research clusters.',
    },
  ];

  const faqs = [
    {
      q: 'Do I need to be a Mechanical Engineering student to join ASME GECT?',
      a: 'No. While anchored in the Mechanical Engineering Department, ASME GECT welcomes students from Production, Electrical, Chemical, and Computer Science departments for robotics, autonomous kinematics, control systems, and computational modeling.',
    },
    {
      q: 'What is the commitment expected from student members?',
      a: 'Members typically participate in 2–4 hours of weekly workshop sessions, technical discussions, or hands-on fabrication sprints during active competition preparations.',
    },
    {
      q: 'How does ASME GECT membership assist in higher studies or employment?',
      a: 'Active membership provides verifiable experience in industry-standard software (ANSYS, Siemens NX, ROS2), published symposium papers, ASME E-Fest participation credentials, and access to a worldwide professional alumni network.',
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-asme-red mb-4">
            <span>MODULE 06 // ONBOARDING & ROSTER</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            Join the ASME GECT Community
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Become an authorized member of Section #8040. Access global
            engineering standards, hands-on fabrication facilities at GECT, and
            national design competition teams.
          </p>
        </div>

        {/* 4-Step Onboarding Workflow */}
        <section className="mb-20">
          <SectionHeader
            indexNumber="01"
            category="Onboarding Process"
            title="The Path to Membership"
            description="A transparent four-step progression from initial application to active participation in laboratory research clusters."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded bg-[#0D1017] border border-white/[0.08] hover:border-white/20 transition-colors space-y-3 relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-asme-red block mb-2">
                    {st.num} //
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    {st.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                    {st.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form & Privileges Split */}
        <section className="mb-20">
          <SectionHeader
            indexNumber="02"
            category="Intent Submission"
            title="Register for Active Chapter Roster"
            description="Complete the official form below. Your credentials will be queued for the section membership secretary."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <MembershipForm />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-lg bg-[#0E121A] border border-white/[0.08] space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-asme-cyan flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-asme-cyan" />
                  Membership Entitlements
                </div>
                <ul className="space-y-3 text-xs font-mono text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-asme-emerald shrink-0 mt-0.5" />
                    <span>Official ASME Global Student Member ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-asme-emerald shrink-0 mt-0.5" />
                    <span>Free subscription to Mechanical Engineering Magazine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-asme-emerald shrink-0 mt-0.5" />
                    <span>Access to ASME Digital Collection research papers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-asme-emerald shrink-0 mt-0.5" />
                    <span>Eligibility for HPVC & Robotics competition squads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-asme-emerald shrink-0 mt-0.5" />
                    <span>Priority workstation bookings in GECT CAD/CAM labs</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono space-y-2">
                <span className="text-muted-foreground uppercase text-[10px]">
                  Direct Verification Desk
                </span>
                <p className="text-white">
                  Questions regarding membership? Contact the Chapter Secretariat directly at{' '}
                  <span className="text-asme-red">asme@gectcr.ac.in</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section>
          <SectionHeader
            indexNumber="03"
            category="Clarifications"
            title="Frequently Asked Questions"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded bg-[#0D1017] border border-white/[0.08] space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-asme-red">
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ 0{i + 1}</span>
                </div>
                <h4 className="font-display font-bold text-base text-white">
                  {faq.q}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
