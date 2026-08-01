# Implementation Plan: Portfolio Homepage

**Branch**: `001-portfolio-homepage` | **Date**: 2026-07-31 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-homepage/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command; its definition describes the execution workflow.

## Summary

Build a single-page portfolio homepage for Hamdy Khaled (Full Stack .NET Developer) that showcases hero section, skills, projects, certificates, and contact information. The page is a static React 19 SPA with no backend, using i18next for Arabic/English internationalization, Framer Motion for animations, and Tailwind CSS for styling. All content is hardcoded in static data files. The design follows the Stitch design system with dark theme, teal primary (#2DD4BF), and floating card layout.

## Technical Context

**Language/Version**: TypeScript 6.0 (strict mode), React 19

**Primary Dependencies**: Vite 8, Tailwind CSS, Framer Motion, React Router, React Icons, Jotai, i18next

**Storage**: N/A (static frontend, no backend)

**Testing**: No testing framework configured currently. Manual validation via `npm run dev` and `npm run build`.

**Target Platform**: Modern browsers (desktop, tablet, mobile). Responsive from 320px to 2560px.

**Project Type**: Frontend SPA (single-page application)

**Performance Goals**: Lighthouse score ≥90, homepage loads within 3s desktop / 5s mobile

**Constraints**: No backend. No heavy dependencies. Mobile-first responsive. All text translatable via i18next.

**Scale/Scope**: ≤8 projects, ≤6 certificates, ≤15 skills per category. All data hardcoded in `src/data/`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. TypeScript Strictness | ✅ PASS | Strict mode enforced. `any` prohibited. Interfaces for props. |
| II. Component Composition | ✅ PASS | Sections extracted into reusable components under `src/components/sections/`. |
| III. Mobile-First Responsive | ✅ PASS | Tailwind responsive prefixes. All components work on mobile/tablet/desktop. |
| IV. Accessibility by Default | ✅ PASS | Semantic HTML, keyboard nav, ARIA labels, alt text. |
| V. Performance Conscious | ✅ PASS | Lazy-load pages, minimal re-renders, lightweight bundle. |

**Gate Result (Pre-Design)**: PASS - No violations detected. Proceeding to Phase 0.

**Gate Result (Post-Design)**: PASS - All design artifacts comply with constitution principles. No violations detected.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-homepage/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (UI contracts)
└── tasks.md             # Phase 2 output (NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── App.tsx                    # Main app with React Router
├── main.tsx                   # Entry point
├── i18n.ts                    # i18next configuration
├── assets/                    # Static assets (images, icons)
├── components/
│   ├── common/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Chip.tsx
│   │   └── LanguageToggle.tsx
│   ├── layout/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx
│   ├── ui/                    # UI primitives
│   │   └── ...
│   └── sections/              # Page sections
│       ├── HeroSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── CertificatesSection.tsx
│       └── ContactSection.tsx
├── pages/
│   └── Home.tsx               # Homepage composing all sections
├── data/
│   ├── projects.ts            # Hardcoded project data
│   ├── certificates.ts        # Hardcoded certificate data
│   ├── skills.ts              # Hardcoded skills data
│   └── personal.ts            # Name, title, contact info
├── hooks/                     # Custom hooks (e.g., useScrollAnimation)
├── routes/                    # Route definitions
├── locales/
│   ├── en.json                # English translations
│   └── ar.json                # Arabic translations
├── constants/                 # App constants
├── utils/                     # Utility functions
└── types/                     # Shared TypeScript types
```

**Structure Decision**: Frontend-only SPA following existing project structure. Sections extracted into `src/components/sections/` per Constitution Principle II. Data files in `src/data/` keep content separate from presentation.

## Complexity Tracking

> No Constitution Check violations. Complexity tracking not required.
