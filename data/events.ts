import { EventItem } from '@/types';

export const eventsData: EventItem[] = [
  {
    id: 'synergia-2025',
    slug: 'synergia-2025',
    title: 'SYNERGIA 2025: Annual Mechanical Engineering Symposium',
    subtitle: 'The flagship national technical confluence of ASME GECT',
    category: 'Symposium',
    date: 'March 28-30, 2025',
    time: '09:00 AM - 05:30 PM IST',
    venue: 'Eastern Amphitheatre & Central CAD Labs, GEC Thrissur',
    status: 'upcoming',
    description:
      'Synergia is ASME GECT’s flagship multidisciplinary symposium bridging precision mechanical design with emerging automation. Features 3 days of intensive engineering challenges, keynote lectures from aerospace researchers, rapid prototyping sprints, and research paper defenses.',
    prerequisites: [
      'Open to all engineering undergrads & diploma scholars',
      'Laptops required for computational design tracks',
      'Prior CAD knowledge helpful but not mandatory',
    ],
    registrationLink: '/contact?subject=Synergia+2025+Registration',
    registrationStatus: 'open',
    coverImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    highlights: [
      '₹75,000 Total Prize Pool across technical tracks',
      'Keynote lecture on Hypersonic Aerodynamics',
      'Live 24-hour CAD Modeling & FEA Stress Marathon',
      'ASME Section Certificate of Distinction for all finalists',
    ],
    speakers: [
      {
        name: 'Dr. K. S. Radhakrishnan',
        role: 'Former Scientist',
        affiliation: 'ISRO Propulsion Research Complex',
      },
      {
        name: 'Prof. Harikrishnan V.',
        role: 'Faculty Advisor',
        affiliation: 'Dept. of Mechanical Engineering, GECT',
      },
    ],
  },
  {
    id: 'cfd-fluent-masterclass',
    slug: 'cfd-fluent-masterclass',
    title: 'Computational Fluid Dynamics & Aerodynamics Practicum',
    subtitle: 'Mesh convergence, Navier-Stokes solvers, and boundary layer physics',
    category: 'Workshop',
    date: 'April 12, 2025',
    time: '10:00 AM - 04:30 PM IST',
    venue: 'Advanced CAD/CAM Lab, Mechanical Dept, GECT',
    status: 'upcoming',
    description:
      'A deep dive into finite volume methods and industrial fluid dynamics simulation. Participants will build structured meshes, configure turbulence models (k-epsilon & k-omega SST), and simulate transonic flow regimes over custom airfoil geometries.',
    prerequisites: [
      'Fluid Mechanics fundamentals (2nd year onwards)',
      'Basic workstation familiarity with ANSYS Fluent or OpenFOAM',
    ],
    registrationLink: '/contact?subject=CFD+Masterclass+Enrollment',
    registrationStatus: 'open',
    coverImage:
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    highlights: [
      'Hands-on transonic airfoil boundary layer analysis',
      'Grid independence testing methodology',
      'Dedicated compute workstation allocated per team',
    ],
  },
  {
    id: 'hpvc-design-defense',
    slug: 'hpvc-design-defense',
    title: 'Human Powered Vehicle (HPVC) Aerodynamic Rollout',
    subtitle: 'Annual design inspection and structural FEA verification',
    category: 'Competition',
    date: 'January 18, 2025',
    time: '02:00 PM - 05:00 PM IST',
    venue: 'Main Auditorium, GEC Thrissur',
    status: 'completed',
    description:
      'The section engineering team presented the technical defense of the 2025 HPVC vehicle prototype. Detailed disclosures included carbon fiber monocoque FEA stress matrices, rollover protection system (RPS) crashworthiness simulations, and rider ergometrics.',
    prerequisites: ['Section members & invited faculty review board'],
    registrationLink: '/projects',
    registrationStatus: 'closed',
    coverImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    highlights: [
      'Validated 12.8G top impact rollover cage',
      'Coefficient of drag (Cd) reduced to 0.142',
      'Commended by collegiate vehicle inspection committee',
    ],
  },
  {
    id: 'additive-manufacturing-symposium',
    slug: 'additive-manufacturing-symposium',
    title: 'Additive Manufacturing & Metal 3D Printing Practicum',
    subtitle: 'Generative design, SLA/SLM metallurgy, and rapid tooling',
    category: 'Workshop',
    date: 'November 22, 2024',
    time: '09:30 AM - 04:00 PM IST',
    venue: 'Central Workshop FabLab, GECT',
    status: 'completed',
    description:
      'Hands-on workshop exploring industrial 3D printing technologies. Covered topology optimization in Autodesk Fusion 360, slicing parameters for structural filaments (Carbon-fiber nylon, PETG), and post-processing thermal stress relief.',
    prerequisites: ['Basic 3D CAD modeling'],
    registrationLink: '/projects',
    registrationStatus: 'closed',
    coverImage:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    highlights: [
      'Printed 40+ topology-optimized test brackets',
      'Tensile testing until mechanical fracture',
      'Sponsored by Kerala Tech FabLab network',
    ],
  },
  {
    id: 'robotics-ros2-kinematics',
    slug: 'robotics-ros2-kinematics',
    title: 'Industrial Kinematics & ROS2 Control Systems',
    subtitle: 'From Denavit-Hartenberg parameters to hardware trajectory planning',
    category: 'Workshop',
    date: 'May 04, 2025',
    time: '10:00 AM - 05:00 PM IST',
    venue: 'Robotics & Mechatronics Research Centre, GECT',
    status: 'upcoming',
    description:
      'Comprehensive masterclass on controlling 6-axis articulated robotic arms. Bridges mechanical linkages, planetary gearbox backlash compensation, and ROS2 MoveIt trajectory execution.',
    prerequisites: ['Python / C++ basics', 'Elementary matrix algebra'],
    registrationLink: '/contact?subject=Robotics+ROS2+Workshop',
    registrationStatus: 'open',
    coverImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    highlights: [
      'Direct hardware interfacing with physical 6-DOF robot arm',
      'Real-time collision avoidance pipeline',
      'Certificate issued under ASME Robotics Chapter initiative',
    ],
  },
];
