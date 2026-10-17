import { ProjectItem } from '@/types';

export const projectsData: ProjectItem[] = [
  {
    id: 'project-vortex',
    title: 'Project Vortex: Micro-Turbine Blade Aerodynamics',
    code: 'PRJ-AERO-01',
    category: 'Aerospace & Fluid Dynamics',
    status: 'Active Research',
    lead: 'Student Research Cluster // Aerodynamics Wing',
    timeline: '2024 - Present',
    overview:
      'Investigation into trailing-edge serrations and biomimetic leading-edge tubercles to eliminate stall flutter on low-Reynolds micro wind turbines. Combining computational fluid dynamics (CFD) in OpenFOAM with subsonic wind-tunnel validation.',
    specs: [
      { label: 'Rotor Diameter', value: '850 mm' },
      { label: 'Airfoil Profile', value: 'NACA 63-415 (Modified)' },
      { label: 'Reynolds Number', value: '1.2 × 10⁵' },
      { label: 'Power Coefficient (Cp)', value: '0.43 (Simulated)' },
      { label: 'Fabrication', value: 'SLS Carbon-Nylon Sintering' },
    ],
    keyInnovations: [
      'Biomimetic tubercle leading edge reducing boundary layer separation by 18%',
      'Integrated optical pressure tap telemetry for wind tunnel verification',
      'Structural resonant frequency decoupled from rotational harmonic range',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    repoOrDocumentation: 'https://github.com/ASMEGECT/ASME-GECT-WEBSITE',
  },
  {
    id: 'aeolus-hpvc',
    title: 'Aeolus: Aerodynamic Human-Powered Recumbent Vehicle',
    code: 'PRJ-AUTO-02',
    category: 'Automotive & HPVC',
    status: 'Field Tested',
    lead: 'ASME GECT HPVC Racing Team',
    timeline: '2023 - 2024',
    overview:
      'Engineered for the ASME Asia-Pacific Human Powered Vehicle Challenge (HPVC). Features an ultra-rigid aluminum 7005-T6 delta spaceframe wrapped in a vacuum-infused Kevlar/Carbon-fiber monocoque fairing with sub-0.15 drag coefficient.',
    specs: [
      { label: 'Curb Weight', value: '19.4 kg' },
      { label: 'Coefficient of Drag (Cd)', value: '0.142' },
      { label: 'Rollover Protection (RPS)', value: '12.8 kN Top / 5.2 kN Side' },
      { label: 'Transmission', value: 'Dual-Stage 68T Front / 11-36T Rear' },
      { label: 'Top Track Velocity', value: '64.2 km/h' },
    ],
    keyInnovations: [
      'Monocoque composite skin acting as both aerodynamic boundary and primary torsion brace',
      'Hydraulic dual-circuit disc braking with real-time wheel speed logging',
      'Overhead periscope camera system eliminating parasitic optical canopy turbulence',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    repoOrDocumentation: 'https://github.com/ASMEGECT/ASME-GECT-WEBSITE',
  },
  {
    id: 'ignis-thermal',
    title: 'Ignis Protocol: High-Flux Battery Module Thermal Management',
    code: 'PRJ-THERM-03',
    category: 'Thermal Systems',
    status: 'Fabrication Phase',
    lead: 'Thermal Sciences Division // GECT Lab',
    timeline: '2024 - 2025',
    overview:
      'Experimental design of oscillating heat pipes (OHP) integrated into lithium-iron-phosphate (LiFePO4) cylindrical cell modules. Designed to maintain cell surface delta-T under 3.5°C during rapid 3C discharge cycles.',
    specs: [
      { label: 'Working Fluid', value: 'Deionized Water / Ethanol Blend' },
      { label: 'Max Heat Flux', value: '45 W/cm²' },
      { label: 'Effective Thermal Conductivity', value: '8,500 W/m·K' },
      { label: 'Module Operating Temp', value: '25°C - 38°C' },
    ],
    keyInnovations: [
      'Additive-manufactured copper microchannels directly forming the structural battery partition',
      'Zero-parasitic-power passive phase-change dissipation loop',
      'Tested against thermal runaway propagation under simulated puncture conditions',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'kratos-6dof',
    title: 'Kratos: 6-Axis Articulated Robotic Arm with Cycloidal Drives',
    code: 'PRJ-ROBO-04',
    category: 'Robotics & Automation',
    status: 'Active Research',
    lead: 'Mechatronics & Robotics Wing',
    timeline: '2024 - Present',
    overview:
      'Design and machining of a 5 kg payload articulated industrial robot arm utilizing custom 3D-printed and CNC-milled zero-backlash cycloidal speed reducers. Powered by brushless DC motors with field-oriented control (FOC).',
    specs: [
      { label: 'Payload Capacity', value: '5.0 kg' },
      { label: 'Reach Radius', value: '720 mm' },
      { label: 'Repeatability', value: '±0.08 mm' },
      { label: 'Reduction Ratio (Axis 1-3)', value: '40:1 Cycloidal' },
      { label: 'Controller', value: 'STM32 Micro-ROS + Jetson Nano' },
    ],
    keyInnovations: [
      'In-house designed bi-directional cycloidal discs with needle roller pin arrangement',
      'Closed-loop magnetic encoder feedback on both motor shaft and output flange',
      'Safety-rated torque sensing via motor phase current monitoring',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 'solar-track-axial',
    title: 'Helios: Dual-Axis Solar Concentrator with Geneve Drive',
    code: 'PRJ-SUST-05',
    category: 'Sustainable Tech',
    status: 'Archived',
    lead: 'Energy Systems Student Cell',
    timeline: '2023',
    overview:
      'Low-power astronomical ephemeris solar tracking system driving parabolic dish thermal concentrators. Employed intermittent Geneva wheel mechanics to ensure step precision while reducing parasitic standby energy draw to under 0.8 Watts.',
    specs: [
      { label: 'Tracking Accuracy', value: '±0.25°' },
      { label: 'Aperture Area', value: '2.4 m²' },
      { label: 'Concentration Ratio', value: '45x' },
      { label: 'Thermal Efficiency', value: '62%' },
    ],
    keyInnovations: [
      'Mechanical positive-locking Geneva drive holding dish stationary in high crosswinds',
      'Hybrid GPS calendar lookup with photodiode micro-alignment override',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
];
