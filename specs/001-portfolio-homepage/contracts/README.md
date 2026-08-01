# UI Contracts: Portfolio Homepage

**Feature**: `001-portfolio-homepage`
**Date**: 2026-07-31

## Overview

This document defines the component interfaces and behavioral contracts for the portfolio homepage. As a frontend-only application, these contracts describe the expected props, rendering behavior, and user interactions for each component.

## Component Contracts

### Header

**File**: `src/components/layout/Header.tsx`

**Props Interface**:
```typescript
interface HeaderProps {
  navigationItems: NavigationItem[];
  currentLanguage: "en" | "ar";
  onLanguageToggle: () => void;
}
```

**Behavioral Contract**:
- Renders fixed/sticky navigation bar at top of viewport
- Displays logo/name on left, navigation links in center, language toggle + dark mode on right
- On mobile (<768px): Collapses to hamburger menu
- Active section highlighted based on scroll position
- All links use smooth scroll to section anchors

**Accessibility Contract**:
- `<nav>` element with `aria-label="Main navigation"`
- All links have visible focus indicators
- Hamburger menu is keyboard accessible (Enter/Space to toggle)

### HeroSection

**File**: `src/components/sections/HeroSection.tsx`

**Props Interface**:
```typescript
interface HeroSectionProps {
  personalInfo: PersonalInfo;
}
```

**Behavioral Contract**:
- Renders full-viewport-height hero section
- Displays name, title, summary, profile image, CTA buttons
- Profile image has alt text and lazy loading
- CTA buttons: "View Projects" → scrolls to #projects, "Contact Me" → scrolls to #contact
- Entrance animation using Framer Motion (fade-in + slide-up)

**Accessibility Contract**:
- `<section>` with `aria-labelledby="hero-heading"`
- `<h1>` for name
- Profile image has descriptive `alt` text
- CTA buttons have descriptive `aria-label` attributes

### SkillsSection

**File**: `src/components/sections/SkillsSection.tsx`

**Props Interface**:
```typescript
interface SkillsSectionProps {
  skills: Skill[];
}
```

**Behavioral Contract**:
- Groups skills by `category` (backend, frontend, tools)
- Each category displays as a card with icon grid
- Skills rendered with react-icons icon and label text
- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- Scroll-triggered entrance animation

**Accessibility Contract**:
- `<section>` with `aria-labelledby="skills-heading"`
- Each category group has `<h2>` heading
- Icons have `aria-hidden="true"` with text labels

### ProjectsSection

**File**: `src/components/sections/ProjectsSection.tsx`

**Props Interface**:
```typescript
interface ProjectsSectionProps {
  projects: Project[];
  activeFilter: FilterState;
  onFilterChange: (filter: FilterState) => void;
}
```

**Behavioral Contract**:
- Displays filter tabs: All, Full-Stack, Backend
- Projects filtered by `category` field
- Each project card shows: image, title, description, tech tags
- Tech tags use Chip component with pill styling
- External links open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
- Filter transitions animated with Framer Motion `layout` prop
- Broken images show fallback placeholder

**Accessibility Contract**:
- `<section>` with `aria-labelledby="projects-heading"`
- Filter tabs use `role="tablist"` and `role="tab"`
- Project cards have `<article>` wrapper
- Images have `alt` text

### CertificatesSection

**File**: `src/components/sections/CertificatesSection.tsx`

**Props Interface**:
```typescript
interface CertificatesSectionProps {
  certificates: Certificate[];
}
```

**Behavioral Contract**:
- Displays certificate cards in grid layout
- Each card shows: course name, issuer, category, verification link
- "View Certificate" link opens verification URL in new tab
- "View All Certificates" navigates to `/certificates` route
- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile

**Accessibility Contract**:
- `<section>` with `aria-labelledby="certificates-heading"`
- Cards use `<article>` wrapper
- Links have descriptive text (not "click here")

### ContactSection

**File**: `src/components/sections/ContactSection.tsx`

**Props Interface**:
```typescript
interface ContactSectionProps {
  personalInfo: PersonalInfo;
}
```

**Behavioral Contract**:
- Displays contact methods: email, LinkedIn, GitHub
- "Contact Me" button opens `mailto:` link
- LinkedIn/GitHub links open in new tabs
- Shows availability status: "Available for new opportunities"
- Shows location information

**Accessibility Contract**:
- `<section>` with `aria-labelledby="contact-heading"`
- Email link uses `mailto:` protocol
- External links have `target="_blank"` and `rel="noopener noreferrer"`

### Footer

**File**: `src/components/layout/Footer.tsx`

**Props Interface**:
```typescript
interface FooterProps {
  socialLinks: SocialLink[];
}
```

**Behavioral Contract**:
- Displays copyright information
- Shows social media links (GitHub, LinkedIn)
- External links open in new tabs
- Responsive layout

**Accessibility Contract**:
- `<footer>` element
- Social links have accessible labels

### LanguageToggle

**File**: `src/components/common/LanguageToggle.tsx`

**Props Interface**:
```typescript
interface LanguageToggleProps {
  currentLanguage: "en" | "ar";
  onToggle: () => void;
}
```

**Behavioral Contract**:
- Displays current language label (EN/AR)
- Clicking toggles between English and Arabic
- Updates i18next language
- Updates document direction (ltr/rtl)
- Preference persisted in localStorage

**Accessibility Contract**:
- Button with `aria-label="Switch language"`
- Current language announced to screen readers

### Card

**File**: `src/components/common/Card.tsx`

**Props Interface**:
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
```

**Behavioral Contract**:
- Renders container with surface color background
- 16px border radius (rounded-lg)
- Optional hover effect (subtle elevation change)
- Responsive padding

### Chip

**File**: `src/components/common/Chip.tsx`

**Props Interface**:
```typescript
interface ChipProps {
  label: string;
  variant?: "default" | "primary";
}
```

**Behavioral Contract**:
- Small pill-shaped label
- 24px border radius (rounded-xl)
- Default variant: subtle background with teal text
- Primary variant: solid teal background

### Button

**File**: `src/components/common/Button.tsx`

**Props Interface**:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}
```

**Behavioral Contract**:
- Primary: Solid teal background, dark text
- Secondary: Ghost with teal outline
- Ghost: Transparent with hover effect
- 8px border radius
- Focus ring visible on keyboard navigation

## Data Contracts

See [data-model.md](../data-model.md) for TypeScript interface definitions.

### Data File Exports

| File | Export | Type |
|------|--------|------|
| `src/data/personal.ts` | `personalInfo` | `PersonalInfo` |
| `src/data/skills.ts` | `skills` | `Skill[]` |
| `src/data/projects.ts` | `projects` | `Project[]` |
| `src/data/certificates.ts` | `certificates` | `Certificate[]` |

## Translation Contracts

All user-visible text must use i18next keys. See [data-model.md](../data-model.md) Translation Keys section.

### Required Keys

```json
{
  "nav": {
    "projects": "Projects",
    "skills": "Skills",
    "certificates": "Certificates",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "greeting": "Hello, I'm",
    "cta_projects": "View Projects",
    "cta_contact": "Contact Me"
  },
  "skills": {
    "title": "Technical Skills",
    "backend": "Backend Engineering",
    "frontend": "Frontend Development",
    "tools": "Tools & DevOps"
  },
  "projects": {
    "title": "Featured Projects",
    "filter_all": "All",
    "filter_fullstack": "Full-Stack",
    "filter_backend": "Backend",
    "view_demo": "View Demo",
    "view_repo": "View Repository"
  },
  "certificates": {
    "title": "Certifications",
    "view_certificate": "View Certificate",
    "view_all": "View All Certificates"
  },
  "contact": {
    "title": "Get In Touch",
    "email": "Email Me",
    "available": "Available for new opportunities"
  },
  "footer": {
    "copyright": "© 2026 Hamdy Khaled. All rights reserved."
  }
}
```
