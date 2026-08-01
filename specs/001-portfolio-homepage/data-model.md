# Data Model: Portfolio Homepage

**Feature**: `001-portfolio-homepage`
**Date**: 2026-07-31

## Overview

This is a static frontend project with no database. The data model defines TypeScript interfaces for hardcoded content in `src/data/` files. All data is static and loaded at build time.

## Entities

### PersonalInfo

Core identity and contact information for the portfolio owner.

```typescript
interface PersonalInfo {
  name: string;              // e.g., "Hamdy Khaled"
  nameAr: string;            // Arabic transliteration
  title: string;             // e.g., "Full Stack .NET Developer"
  titleAr: string;
  summary: string;           // Professional summary paragraph
  summaryAr: string;
  profileImage: string;      // URL to profile photo
  email: string;             // Contact email
  linkedin: string;          // LinkedIn profile URL
  github: string;            // GitHub profile URL
  location: string;          // e.g., "Cairo, Egypt"
  locationAr: string;
  yearsOfExperience: number; // For stats section
  projectCount: number;      // For stats section
  specializations: string[]; // e.g., ["Backend", "Frontend", "DevOps"]
}
```

**Validation rules**:
- `name` and `nameAr` must be non-empty
- `email` must be valid email format
- `linkedin` and `github` must be valid URLs
- `yearsOfExperience` and `projectCount` must be positive integers

### Skill

Technology skill with icon and category.

```typescript
interface Skill {
  id: string;                // Unique identifier (e.g., "aspnet-core")
  name: string;              // Display name (e.g., "ASP.NET Core")
  icon: string;              // React Icons component name (e.g., "SiDotnet")
  category: SkillCategory;   // Grouping for display
}

type SkillCategory = "backend" | "frontend" | "tools";
```

**Validation rules**:
- `id` must be unique across all skills
- `name` must be non-empty
- `icon` must reference a valid react-icons icon
- `category` must be one of the defined enum values

**Relationships**:
- Skills are grouped by `category` for display in SkillsSection

### Project

Portfolio project with metadata and links.

```typescript
interface Project {
  id: string;                // Unique identifier
  title: string;             // Project display name
  titleAr: string;           // Arabic translation
  description: string;       // Short description (≤150 chars recommended)
  descriptionAr: string;
  image: string;             // URL to project screenshot/hero image
  technologies: string[];    // Tech stack tags (references Skill.id values)
  category: ProjectCategory; // For filtering
  liveUrl?: string;          // Optional live demo URL
  repoUrl?: string;          // Optional GitHub repository URL
  featured: boolean;         // Whether to highlight on homepage
}

type ProjectCategory = "all" | "fullstack" | "backend";
```

**Validation rules**:
- `title` and `titleAr` must be non-empty
- `description` must be ≤300 characters
- `image` must be a valid URL or relative path
- `technologies` must be non-empty array
- At least one of `liveUrl` or `repoUrl` should be provided
- External links must open in new tab with `target="_blank"` and `rel="noopener noreferrer"`

**Relationships**:
- `technologies` references `Skill.id` values
- Filtered by `category` in ProjectsSection

### Certificate

Professional certification with verification link.

```typescript
interface Certificate {
  id: string;                // Unique identifier
  courseName: string;        // Course/certification name
  courseNameAr: string;      // Arabic translation
  issuer: string;            // Issuing organization
  issuerAr: string;
  category: string;          // e.g., "Cloud", "Development"
  verificationUrl: string;   // URL to verify certificate
  dateIssued: string;        // ISO date string (YYYY-MM-DD)
  image?: string;            // Optional certificate image/badge
}
```

**Validation rules**:
- `courseName` must be non-empty
- `issuer` must be non-empty
- `verificationUrl` must be valid URL
- `dateIssued` must be valid ISO date format
- External links must open in new tab

### NavigationItem

Navigation menu entry.

```typescript
interface NavigationItem {
  id: string;                // Unique identifier
  label: string;             // Display text (translated via i18n key)
  labelKey: string;          // i18n translation key (e.g., "nav.projects")
  href: string;              // Section anchor (e.g., "#projects")
  icon?: string;             // Optional React Icons component name
}
```

**Validation rules**:
- `labelKey` must exist in both `en.json` and `ar.json` locale files
- `href` must be valid anchor reference

### SocialLink

Social media or external profile link.

```typescript
interface SocialLink {
  id: string;                // Unique identifier
  platform: string;          // e.g., "GitHub", "LinkedIn"
  url: string;               // Profile URL
  icon: string;              // React Icons component name
  label: string;             // Accessible label text
}
```

## State Entities (Jotai Atoms)

### FilterState

Active project filter tab.

```typescript
type FilterState = "all" | "fullstack" | "backend";
```

**Transitions**: User clicks filter tab → updates atom → projects list re-renders with filtered results.

### LanguageDirection

Text direction based on active language.

```typescript
type LanguageDirection = "ltr" | "rtl";
```

**Transitions**: Language toggle → updates i18next language → updates direction atom → `<html dir>` attribute updates.

### ThemeState

Color theme (dark mode only per design).

```typescript
type ThemeState = "dark";
```

**Note**: No theme toggle. Design is dark-only per Stitch design system.

## Data Files

| File | Entity | Records | Notes |
|------|--------|---------|-------|
| `src/data/personal.ts` | PersonalInfo | 1 | Single profile record |
| `src/data/skills.ts` | Skill[] | ≤45 | 15 per category × 3 categories |
| `src/data/projects.ts` | Project[] | ≤8 | Featured projects |
| `src/data/certificates.ts` | Certificate[] | ≤6 | Professional certs |

## Translation Keys

All user-visible strings use i18next keys. Key structure:

```
nav.{section}        - Navigation labels
hero.{field}         - Hero section text
skills.{category}    - Skill category names
projects.{field}     - Project section labels
certificates.{field} - Certificate section labels
contact.{field}      - Contact section text
common.{action}      - Shared buttons/labels
footer.{field}       - Footer text
```

## Diagram

```
┌─────────────────────────────────────────────────┐
│                   PersonalInfo                  │
│  (name, title, summary, profileImage, contact)  │
└──────────────────────┬──────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌───────────────┐ ┌──────────┐ ┌──────────────────┐
│    Skill[]    │ │Project[] │ │  Certificate[]   │
│  (grouped     │ │(filtered │ │  (verification   │
│   by category)│ │ by category)│ │   links)       │
└───────────────┘ └──────────┘ └──────────────────┘
        │              │
        └──────┬───────┘
               ▼
        ┌──────────────┐
        │Technologies  │
        │(Skill refs)  │
        └──────────────┘
```
