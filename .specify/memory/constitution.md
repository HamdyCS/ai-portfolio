<!--
  Sync Impact Report
  Version change: 0.0.0 → 1.0.0
  Modified principles: N/A (initial creation)
  Added sections: Core Principles (5), Technology Stack, Code Quality Standards, Styling & Animations, Internationalization, Design Implementation, Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/plan-template.md ✅ aligned (no changes needed)
    - .specify/templates/spec-template.md ✅ aligned (no changes needed)
    - .specify/templates/tasks-template.md ✅ aligned (no changes needed)
  Follow-up TODOs: None
-->

# AI Portfolio Constitution

## Core Principles

### I. TypeScript Strictness

All code MUST use strict TypeScript. The `any` type is prohibited. Prefer explicit typing for all variables, function parameters, and return types. Create interfaces or types for component props and place shared types in the `types/` directory. The `tsconfig.app.json` enforces `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`.

**Rationale**: Type safety catches errors at compile time, improves developer experience, and serves as living documentation.

### II. Component Composition

Every major section MUST be extracted into reusable components. Pages must remain lightweight. Prefer composition over duplication. Before creating new components, check whether an existing reusable component can be used. Build reusable UI components whenever possible. Keep responsibilities separated.

**Rationale**: Reusable components reduce code duplication, improve maintainability, and ensure visual consistency across the application.

### III. Mobile-First Responsive Design

Every component MUST work well on mobile, tablet, desktop, and large screens. Use a mobile-first approach with Tailwind CSS responsive prefixes. Test all layouts across breakpoints before finalizing.

**Rationale**: Users access portfolios from diverse devices. Mobile-first ensures accessibility and optimal experience everywhere.

### IV. Accessibility by Default

Follow accessibility best practices: semantic HTML, keyboard accessibility, proper heading hierarchy, alt text for images, accessible buttons and links. Every interactive element MUST be reachable and operable via keyboard.

**Rationale**: Accessibility is a legal and ethical requirement. It also improves SEO and usability for all users.

### V. Performance Conscious

Lazy-load pages when appropriate. Avoid unnecessary re-renders. Memoize only when it provides real value. Keep the bundle lightweight. No heavy dependencies without justification.

**Rationale**: Fast load times and smooth interactions are critical for portfolio sites. Performance directly impacts user perception and retention.

## Technology Stack

The following technologies are approved for use in this project:

- **React 19** with TypeScript (strict mode)
- **Vite 8** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Icons** for iconography
- **Jotai** for state management
- **i18next** for internationalization

Do not introduce Redux, Zustand, Context API, MobX, or other state libraries unless explicitly requested. Future UI libraries (e.g., shadcn/ui) may be added if required by the design. No backend is included in this project.

## Code Quality Standards

Write production-quality code following Clean Code and SOLID principles where applicable. Maintain small focused components, reusable logic, meaningful naming, no duplication, and remove unused code. Prefer readability over cleverness. Favor simple, maintainable solutions over complex abstractions.

Before adding a new dependency, verify that it is truly necessary. Preserve existing architecture and coding conventions when implementing new features.

## Styling & Animations

Tailwind CSS is the primary styling solution. Avoid unnecessary custom CSS. For tiny custom animations or browser-specific fixes, create a CSS file next to that component. Do not replace Tailwind with plain CSS.

Use Framer Motion for almost all animations. CSS animations are acceptable only for very small effects (keyframes, gradients, etc.). Keep animations smooth, subtle, and professional. Avoid excessive animation.

Use **react-icons** consistently for all iconography.

## Internationalization

The project uses **i18next**. Never hardcode user-facing strings. All visible text MUST support translation. The i18n configuration resides in `src/i18n.ts` with locale files in `src/locales/`.

## Design Implementation

The UI/UX design is prepared in **Google Stitch**. Reproduce that design as faithfully as possible. Only make improvements when they clearly enhance maintainability, responsiveness, accessibility, or performance without changing the intended visual design.

## Governance

This constitution supersedes all other practices when conflicts arise. All pull requests and code reviews MUST verify compliance with these principles.

Amendments require:
1. Documentation of the proposed change
2. Justification for the amendment
3. Version bump following semantic versioning (MAJOR for principle removals/redefinitions, MINOR for new principles/materially expanded guidance, PATCH for clarifications/wording)
4. Update of all dependent templates and documentation

Compliance review is expected at each pull request. Complexity must be justified when it conflicts with simplicity principles.

**Version**: 1.0.0 | **Ratified**: 2026-07-31 | **Last Amended**: 2026-07-31
