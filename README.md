# ASME GECT — Official Website

> **American Society of Mechanical Engineers (ASME) Student Section #8040**  
> **Government Engineering College Thrissur (GECT), Kerala, India (Est. 1957)**  
> Department of Mechanical Engineering

---

## Overview

The official digital home of **ASME GECT**, representing undergraduate engineering research, design competitions, and technical workshops. Built with an industrial editorial aesthetic combining engineering precision, architectural typography, and responsive modern web technologies.

- **Campus Location**: Government Engineering College Thrissur, Kerala - 680009
- **Coordinates**: `10.5513° N, 76.2223° E`
- **Official Contact**: `asme@gectcr.ac.in`
- **Repository**: [https://github.com/ASMEGECT/ASME-GECT-WEBSITE](https://github.com/ASMEGECT/ASME-GECT-WEBSITE)

---

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Runtime**: [React 19](https://react.dev/)
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom industrial tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Site Architecture

- **`/` (Overview)**: Live telemetry ribbon, hero split composition, institutional introduction, featured engineering showcase, upcoming events preview, technical curricula tracks, verified statistics, and membership onboarding.
- **`/about`**: History of GEC Thrissur (founded 1957), ASME international charter, four core directives (Rigor, Fabrication, Dissemination, Integrity), and chronological milestones.
- **`/events`**: Interactive symposium and workshop explorer with category filters (`Workshop`, `Competition`, `Symposium`), status toggles (`Upcoming`, `Completed`), and deep-dive session modal with prerequisites and speaker credentials.
- **`/projects`**: Engineering journal detailing student R&D projects (Project Vortex micro-turbine aerodynamics, Aeolus HPVC recumbent vehicle, Ignis thermal protocol, 6-DOF robotic manipulator) with full specification tables.
- **`/team`**: Faculty advisors, student executive committee, technical leads, design, and public relations teams.
- **`/membership`**: Four-step onboarding roadmap, chapter privileges, FAQs, and interactive student application form with direct email fallback.
- **`/contact`**: Physical coordinates, office locations, telephone, and interactive transmission desk routing to the secretariat.
- **`/_not-found`**: Architectural error page.

---

## Getting Started Locally

### Prerequisites

- Node.js `v20+` or `v24+`
- npm `v10+`

### Installation

```bash
# Clone the repository
git clone https://github.com/ASMEGECT/ASME-GECT-WEBSITE.git
cd ASME-GECT-WEBSITE

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Verification

```bash
# Type check with strict TypeScript
npm run lint

# Compile optimized static production build
npm run build

# Run production server
npm run start
```

---

## Maintaining & Updating Content

Content is centralized in the `data/` directory so student webmasters and office bearers can update details without touching JSX components:

| File | Content Controlled |
| :--- | :--- |
| [`data/siteConfig.ts`](./data/siteConfig.ts) | Institutional addresses, official email, phone, social handles, and verified stats. |
| [`data/events.ts`](./data/events.ts) | Upcoming symposia (e.g. Synergia), workshops, registration links, schedules, and past event archives. |
| [`data/projects.ts`](./data/projects.ts) | Engineering portfolio entries, technical specifications, research leads, and repository links. |
| [`data/team.ts`](./data/team.ts) | Elected office-bearer names, roles, academic years, department details, and contact links. |

---

## License & Trademark Notice

ASME® is a registered trademark of the American Society of Mechanical Engineers. ASME GECT operates as an affiliated collegiate section under collegiate charter.
