export type EventCategory =
  | 'Workshop'
  | 'Competition'
  | 'Symposium'
  | 'Lecture'
  | 'Industrial Visit';

export type EventStatus = 'upcoming' | 'ongoing' | 'completed';

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  status: EventStatus;
  description: string;
  prerequisites: string[];
  registrationLink: string;
  registrationStatus: 'open' | 'closed' | 'waitlist';
  coverImage: string;
  featured?: boolean;
  speakers?: {
    name: string;
    role: string;
    affiliation: string;
  }[];
  highlights?: string[];
}

export type ProjectCategory =
  | 'Aerospace & Fluid Dynamics'
  | 'Automotive & HPVC'
  | 'Robotics & Automation'
  | 'Thermal Systems'
  | 'Sustainable Tech';

export interface ProjectItem {
  id: string;
  title: string;
  code: string;
  category: ProjectCategory;
  status: 'Active Research' | 'Fabrication Phase' | 'Field Tested' | 'Archived';
  lead: string;
  timeline: string;
  overview: string;
  specs: {
    label: string;
    value: string;
  }[];
  keyInnovations: string[];
  coverImage: string;
  featured: boolean;
  repoOrDocumentation?: string;
}

export type TeamDivision =
  | 'Faculty Advisors'
  | 'Executive Committee'
  | 'Technical & Fabrication'
  | 'Design & Editorial'
  | 'Public Relations & Outreach';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: TeamDivision;
  department: string;
  academicYear?: string;
  bio?: string;
  image: string;
  links?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
  verified: boolean;
}
