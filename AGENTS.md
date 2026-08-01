# AGENTS.md

Compact instructions for AI agents working in this repository.

## Project Overview

Personal **Frontend Portfolio** showcasing Full Stack .NET Developer work. **No backend.**

## Tech Stack

- React 19, TypeScript (strict), Vite 8, Tailwind CSS v4, Framer Motion, React Router, React Icons, Jotai, i18next
- No other state libraries (Redux, Zustand, Context API, etc.) unless explicitly requested.

## Commands

- `npm run dev` – Start Vite dev server
- `npm run lint` – ESLint for all `.ts/.tsx` files (`eslint .`)
- `npm run build` – `tsc -b && vite build` (type-check then bundle)
- `npm run preview` – Preview production build

**Order:** Run `lint` before `build` to catch issues early. **No test script exists.**

## Project Structure

```
src/
├── main.tsx / App.tsx     # entry; BrowserRouter, theme class + RTL wiring
├── atoms/                 # Jotai atoms (theme, language, project filter)
├── components/
│   ├── common/            # Button, Card, Chip, LanguageToggle
│   ├── layout/            # Navbar, Footer, SectionWrapper
│   └── sections/          # Hero, Skills, Projects, Certificates, Contact
├── pages/Home.tsx         # only route is "/" (single-page so far)
├── data/                  # projects.ts, certificates.ts, skills.ts, personal.ts
├── locales/en.json, ar.json
├── hooks/
├── types/index.ts
└── i18n.ts                # inits i18next; imported in main.tsx
```

Root `Screens/` + `specs/` hold the **Google Stitch design reference** (one markdown file per screen, with screen IDs). Reproduce that design faithfully. `.specify/` is speckit workflow tooling, not app code — leave it alone.

Keep pages lightweight; extract sections into reusable components. Prefer composition over duplication.

## Internationalization (high-signal)

- Bilingual **English + Arabic**. Every user-visible string lives in `locales/en.json` **and** `ar.json` — always add both.
- Data files carry paired fields: `title`/`titleAr`, `description`/`descriptionAr`, etc.
- Language is persisted in `localStorage` key `language` (`src/i18n.ts`). Root `div` sets `dir={i18n.dir()}` for RTL.

## Theming

- Light/dark theme via Jotai `themeAtom` (`atoms/themeAtom.ts`), persisted in `localStorage` key `theme`. `App.tsx` toggles `.dark` on `<html>`; dark styles use Tailwind `dark:` variants.

## Styling

- **Tailwind v4, CSS-first.** Design tokens (colors, fonts) are defined in the `@theme` block in `src/index.css` — that is the source of truth, **not** `tailwind.config.js` (legacy). Custom dark variant: `@custom-variant dark`.
- Shared visual utilities (`.glass-card`, `.hero-*`) also live in `src/index.css`.

## TypeScript

- Strict mode. Never use `any`. Prefer explicit typing.
- `verbatimModuleSyntax` is on: type-only imports must use `import type { ... }`.
- `tsconfig.app.json` enforces `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`.

## Icons

Use **react-icons** consistently.

## Animations

Framer Motion for most animations; CSS only for very small effects.

## General Conventions

- Mobile-first responsive. Semantic HTML, keyboard accessibility, proper heading hierarchy, alt text.
- Before creating new components, check for an existing reusable one.
- Before adding a dependency, verify it is truly necessary.
- Memoize/lazy-load only where it provides real value.
