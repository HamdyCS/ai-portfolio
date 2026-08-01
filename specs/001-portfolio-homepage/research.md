# Research: Portfolio Homepage

**Feature**: `001-portfolio-homepage`
**Date**: 2026-07-31

## Research Tasks

### 1. React 19 + TypeScript Strict Mode Setup

**Decision**: Use React 19 with TypeScript 6.0 in strict mode, matching existing `tsconfig.app.json` configuration.

**Rationale**: The project already has React 19 (`^19.2.8`) and TypeScript (`~6.0.2`) configured. Strict mode is enforced via `tsconfig.app.json` with `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`. No additional configuration needed.

**Alternatives considered**:
- Using `any` type for rapid prototyping: Rejected per Constitution Principle I (TypeScript Strictness). All types must be explicit.

### 2. i18next Internationalization Setup

**Decision**: Use i18next with `react-i18next` for Arabic/English support. Auto-detect browser language, persist user choice in localStorage.

**Rationale**: Constitution mandates i18next for all user-visible text. The spec clarifies:
- Auto-detect from browser language
- Manual toggle button in navigation
- Persist choice in localStorage
- Support Arabic and English

**Implementation approach**:
- Configure i18next in `src/i18n.ts`
- Create locale files: `src/locales/en.json` and `src/locales/ar.json`
- Use `i18next-browser-languagedetector` for auto-detection
- Use `i18next-localstorage-backend` for persistence
- Arabic requires RTL support via `dir="rtl"` on `<html>` element

**Alternatives considered**:
- Context API for language state: Rejected per Constitution (no Context API unless explicitly requested). Jotai atom for language state instead.
- Hardcoded strings: Rejected per Constitution (all text must be translatable).

### 3. Framer Motion Animations

**Decision**: Use Framer Motion for section transitions and scroll-triggered animations. CSS animations only for micro-interactions (keyframes, gradients).

**Rationale**: Constitution specifies Framer Motion for almost all animations. The design uses "Refined Floating Cards" which benefits from smooth entrance animations.

**Implementation approach**:
- `whileInView` for scroll-triggered section reveals
- `AnimatePresence` for language switch transitions
- `motion.div` with `initial`, `animate`, `exit` props
- CSS `@keyframes` for gradient backgrounds and subtle pulse effects

**Alternatives considered**:
- React Spring: Not in approved dependency list per Constitution.
- Pure CSS transitions: Too limited for complex orchestration. Framer Motion provides better API.

### 4. Tailwind CSS Styling Strategy

**Decision**: Use Tailwind CSS as primary styling. Extend with custom theme tokens matching Stitch design system.

**Rationale**: Constitution mandates Tailwind CSS. The Stitch design system provides specific tokens:
- Colors: `#051424` (background), `#2DD4BF` (primary teal), `#38BDF8` (secondary sky)
- Typography: Inter for body, Cairo for Arabic, JetBrains Mono for code
- Spacing: 4px base, tokens: xs(4), sm(8), md(16), lg(24), xl(48)
- Roundedness: sm(4), DEFAULT(8), md(12), lg(16), xl(24), full(9999px)

**Implementation approach**:
- Extend `tailwind.config.js` with design tokens
- Use CSS custom properties for theme colors
- Mobile-first responsive: `sm:`, `md:`, `lg:`, `xl:` prefixes
- Dark mode only (no light mode toggle)

**Alternatives considered**:
- Custom CSS: Rejected per Constitution (Tailwind is primary).
- CSS Modules: Less consistent than Tailwind utility classes.

### 5. Static Data Management

**Decision**: Hardcoded TypeScript files in `src/data/` with typed exports.

**Rationale**: Spec clarifies all data is hardcoded with no backend. Small volumes (≤8 projects, ≤6 certificates, ≤15 skills per category).

**Implementation approach**:
- `src/data/projects.ts`: Array of project objects with typed interfaces
- `src/data/certificates.ts`: Array of certificate objects
- `src/data/skills.ts`: Categorized skill groups (Backend, Frontend, Tools)
- `src/data/personal.ts`: Name, title, summary, contact info
- All strings in data files use i18next `t()` function for translation

**Alternatives considered**:
- JSON files: Less type safety than TypeScript. TypeScript allows computed values and type checking.
- CMS integration: Explicitly out of scope per spec.

### 6. Project Filtering

**Decision**: Client-side filtering using React state with Jotai atom.

**Rationale**: Spec requires filter tabs (All, Full-Stack, Backend) for projects section. Jotai is approved for state management per Constitution.

**Implementation approach**:
- Create `filterAtom` in Jotai for active filter state
- Filter projects array based on `category` field
- Animate filter transitions with Framer Motion `layout` prop

**Alternatives considered**:
- useState: Works but Jotai provides better composability for future state needs.
- URL-based filtering: Overkill for single-page section filtering.

### 7. Image Handling

**Decision**: External images from Google CDN with fallback placeholders.

**Rationale**: Spec assumes images hosted externally. Edge case handling: fallback placeholder or gradient background for broken images.

**Implementation approach**:
- `<img>` with `onError` handler to swap to placeholder
- `loading="lazy"` for performance (FR-013)
- `alt` text for accessibility (FR-012)
- Profile image: `<picture>` with WebP/AVIF fallbacks if available

**Alternatives considered**:
- Next.js Image component: Not applicable (Vite project).
- Base64 embedding: Increases bundle size significantly.

### 8. RTL Support for Arabic

**Decision**: Use `dir="rtl"` attribute on `<html>` element, toggled by language state. Tailwind RTL plugin for directional utilities.

**Rationale**: Arabic is RTL language. Design must flip layout direction when Arabic is active.

**Implementation approach**:
- Jotai atom for `direction` state ("ltr" | "rtl")
- Update `document.documentElement.dir` on language change
- Use Tailwind's logical properties: `ms-` (margin-start), `me-` (margin-end), `ps-` (padding-start), `pe-` (padding-end)
- Avoid directional classes like `ml-`/`mr-` in favor of logical equivalents

**Alternatives considered**:
- CSS `direction` property: Less granular than HTML `dir` attribute.
- Manual layout flipping: Error-prone and maintenance-heavy.

### 9. Smooth Scrolling Navigation

**Decision**: Use React Router with hash-based navigation and smooth scroll behavior.

**Rationale**: Navigation links point to sections (Projects, Skills, Certificates, About, Contact). Single-page layout with section scrolling.

**Implementation approach**:
- React Router with `HashRouter` for section anchors
- CSS `scroll-behavior: smooth` on `<html>`
- Optional: Framer Motion `useScroll` for scroll progress indicator

**Alternatives considered**:
- Full React Router with routes per section: Overkill for single-page portfolio.
- Third-party scroll library: Adds unnecessary bundle size.

## Resolved Unknowns

| Unknown | Resolution |
|---------|------------|
| Testing framework | No framework configured. Manual validation via `npm run dev` and `npm run build`. |
| State management | Jotai (approved in Constitution) for filter state and language direction. |
| Font loading | Google Fonts for Inter, Cairo, JetBrains Mono. Use `<link rel="preconnect">` for performance. |
| Deployment target | Not specified. Assume Vercel/Netlify static hosting. Build output in `dist/`. |

## Dependencies Summary

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.8 | UI framework |
| react-dom | ^19.2.8 | DOM renderer |
| framer-motion | ^11.x | Animations |
| react-router | ^7.x | Routing/navigation |
| react-icons | ^5.x | Iconography |
| jotai | ^2.x | State management |
| i18next | ^24.x | Internationalization |
| react-i18next | ^15.x | React bindings for i18next |
| i18next-browser-languagedetector | ^8.x | Auto-detect browser language |
| tailwindcss | ^4.x | Styling |
| @tailwindcss/typography | ^0.5.x | Prose styling (optional) |

## Research Output

All NEEDS CLARIFICATION items resolved. No blocking unknowns remain. Ready for Phase 1 design.
