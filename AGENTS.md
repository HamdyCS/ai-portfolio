# AGENTS.md

Compact instructions for AI agents working in this repository.

## Project Overview

Personal **Frontend Portfolio** showcasing Full Stack .NET Developer work. **No backend**.

## Tech Stack

- React 19, TypeScript (strict), Vite 8, Tailwind CSS, Framer Motion, React Router, React Icons, Jotai, i18next
- No other state libraries (Redux, Zustand, Context API, etc.) unless explicitly requested.
- Future UI libraries (e.g., shadcn/ui) may be added.

## Commands

- `npm run dev` – Start Vite dev server
- `npm run build` – `tsc -b && vite build` (type‑check then bundle)
- `npm run lint` – ESLint for all `.ts/.tsx` files
- `npm run preview` – Preview production build

**Order:** Run `lint` before `build` to catch issues early.

## Project Structure

```
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── ui/
│   └── sections/
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Projects/
│   ├── Certificates/
│   ├── Archive/
│   └── Contact/
├── data/
│   ├── projects.ts
│   ├── certificates.ts
│   ├── skills.ts
│   └── ...
├── hooks/
├── routes/
├── locales/
├── constants/
├── utils/
├── types/
└── i18n.ts
```

Keep pages lightweight; extract sections into reusable components. Prefer composition over duplication.

## TypeScript

- Strict mode. Never use `any`. Prefer explicit typing.
- Create interfaces/types for component props. Place shared types in `types/`.
- `tsconfig.app.json` enforces: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`.

## Styling

- Tailwind CSS is primary. Avoid unnecessary custom CSS.
- For tiny custom animations or browser‑specific fixes, create a CSS file next to the component.

## Animations

- Use Framer Motion for most animations. CSS animations only for very small effects (keyframes, gradients).
- Keep animations smooth, subtle, professional. Avoid excess.

## Icons

Use **react-icons** consistently.

## Internationalization

- Use **i18next**. Never hardcode user‑visible strings.
- All visible text must support translation.

## Code Quality

- Production‑quality code. Follow Clean Code/SOLID where applicable.
- Small focused components, reusable logic, meaningful naming, no duplication, remove unused code.
- Prefer readability over cleverness.

## Performance

- Lazy‑load pages when appropriate. Avoid unnecessary re‑renders.
- Memoize only when it provides real value. Keep bundle lightweight.

## Responsive Design

Mobile‑first approach. Every component must work well on mobile, tablet, desktop, and large screens.

## Accessibility

- Semantic HTML, keyboard accessibility, proper heading hierarchy, alt text, accessible buttons/links.

## Design Implementation

The UI/UX design is prepared in **Google Stitch**. Reproduce that design as faithfully as possible. Only make improvements that clearly enhance maintainability, responsiveness, accessibility, or performance without changing the intended visual design.

## General Behavior

- Before creating new components, check if an existing reusable component can be used.
- Before adding a new dependency, verify it is truly necessary.
- Favor simple, maintainable solutions over complex abstractions.
- Preserve existing architecture and coding conventions when implementing new features.

## How to Investigate

Read highest‑value sources first:
- `README*`, root manifests, lockfiles
- Build/lint/typecheck config (`package.json`, `tsconfig*.json`, `eslint.config.js`, `vite.config.ts`)
- Existing instruction files (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`, `.cursorrules`, `.github/copilot-instructions.md`)
- Repo‑local OpenCode config (`opencode.json`)

If architecture is unclear, inspect a few representative code files to find entrypoints and execution flow. Prefer executable sources of truth over prose.

## Constraints

- No backend.
- No testing framework currently configured (no test script in `package.json`).
- Use Jotai for state only.
- All text must be translatable via i18next.