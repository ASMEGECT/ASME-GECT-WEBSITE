import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  // Faculty Advisors
  {
    id: 'faculty-advisor-1',
    name: 'Prof. Harikrishnan V.',
    role: 'Faculty Advisor',
    division: 'Faculty Advisors',
    department: 'Department of Mechanical Engineering, GECT',
    academicYear: 'Faculty Lead',
    bio: 'Guiding the ASME GECT student section with a focus on machine design, computational mechanics, and fostering hands-on research culture among undergraduate scholars.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    links: {
      email: 'advisor.asme@gectcr.ac.in',
    },
  },
  {
    id: 'faculty-advisor-2',
    name: 'Dr. C. P. Sunil Kumar',
    role: 'Head of Department (Honorary Patron)',
    division: 'Faculty Advisors',
    department: 'Department of Mechanical Engineering, GECT',
    academicYear: 'Patron',
    bio: 'Overseeing curriculum integration, FabLab and mechanical laboratory resources, and industry linkages for student professional bodies at GEC Thrissur.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    links: {
      email: 'hod.me@gectcr.ac.in',
    },
  },

  // Executive Committee (Office Bearers)
  {
    id: 'chairperson',
    name: 'Student Section Chairperson',
    role: 'Chairperson',
    division: 'Executive Committee',
    department: 'Mechanical Engineering',
    academicYear: 'Final Year B.Tech',
    bio: 'Steering overall section operations, national ASME chapter representation, inter-college collaborations, and annual strategic symposium roadmaps.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    links: {
      linkedin: 'https://linkedin.com',
      email: 'chair.asme@gectcr.ac.in',
    },
  },
  {
    id: 'vice-chairperson',
    name: 'Student Section Vice Chairperson',
    role: 'Vice Chairperson',
    division: 'Executive Committee',
    department: 'Mechanical Engineering',
    academicYear: 'Final Year B.Tech',
    bio: 'Managing internal committee synchronization, event logistics, project resource allocation, and mentorship of junior engineering cohorts.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    links: {
      linkedin: 'https://linkedin.com',
      email: 'vicechair.asme@gectcr.ac.in',
    },
  },
  {
    id: 'secretary',
    name: 'Student Section Secretary',
    role: 'Secretary',
    division: 'Executive Committee',
    department: 'Mechanical Engineering',
    academicYear: 'Third Year B.Tech',
    bio: 'Responsible for official ASME communications, chapter annual activity reports, membership roster administration, and meeting records.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    links: {
      linkedin: 'https://linkedin.com',
      email: 'secretary.asme@gectcr.ac.in',
    },
  },
  {
    id: 'treasurer',
    name: 'Student Section Treasurer',
    role: 'Treasurer',
    division: 'Executive Committee',
    department: 'Mechanical Engineering',
    academicYear: 'Third Year B.Tech',
    bio: 'Overseeing chapter fiscal budgets, workshop grant management, project material procurement, and event balance audits.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    links: {
      email: 'treasurer.asme@gectcr.ac.in',
    },
  },

  // Technical & Fabrication Leads
  {
    id: 'tech-lead-aero',
    name: 'Aerodynamics & CFD Lead',
    role: 'Technical Lead — Aerodynamics',
    division: 'Technical & Fabrication',
    department: 'Mechanical Engineering',
    academicYear: 'Third Year B.Tech',
    bio: 'Leading OpenFOAM/Fluent simulation pipelines, wind tunnel instrumentation, and Project Vortex blade aerodynamic experiments.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    links: {
      github: 'https://github.com',
    },
  },
  {
    id: 'tech-lead-hpvc',
    name: 'Vehicle Dynamics Lead',
    role: 'Technical Lead — HPVC & Fabrication',
    division: 'Technical & Fabrication',
    department: 'Mechanical Engineering',
    academicYear: 'Final Year B.Tech',
    bio: 'Directing composite layup, tube-bending, rollover cage FEA analysis, and human-powered vehicle chassis manufacturing.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    links: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'tech-lead-robotics',
    name: 'Robotics & Control Lead',
    role: 'Technical Lead — Mechatronics',
    division: 'Technical & Fabrication',
    department: 'Mechanical / Mechatronics',
    academicYear: 'Third Year B.Tech',
    bio: 'Overseeing 6-DOF manipulator inverse kinematics, STM32 micro-ROS embedded stacks, and cycloidal gear drive machining.',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    links: {
      github: 'https://github.com',
    },
  },

  // Design, Web & Editorial
  {
    id: 'webmaster',
    name: 'Section Webmaster & Systems Lead',
    role: 'Lead Webmaster',
    division: 'Design & Editorial',
    department: 'Mechanical & Computing',
    academicYear: 'Third Year B.Tech',
    bio: 'Architecting and maintaining the ASME GECT digital platform, telemetry interfaces, member database pipelines, and serverless infrastructure.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'design-lead',
    name: 'Brand & Visual Identity Lead',
    role: 'Design Director',
    division: 'Design & Editorial',
    department: 'Mechanical Engineering',
    academicYear: 'Second Year B.Tech',
    bio: 'Crafting industrial editorial graphics, technical poster systems, symposium merchandise, and visual guidelines.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    links: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'pr-lead',
    name: 'Public Relations & Industry Outreach',
    role: 'Head of Outreach',
    division: 'Public Relations & Outreach',
    department: 'Mechanical Engineering',
    academicYear: 'Third Year B.Tech',
    bio: 'Liaising with ASME Kerala & India Section, industrial sponsors, alumni networks, and inter-collegiate technical symposiums.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    links: {
      email: 'outreach.asme@gectcr.ac.in',
    },
  },
];
