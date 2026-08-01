# Quickstart Validation Guide: Portfolio Homepage

**Feature**: `001-portfolio-homepage`
**Date**: 2026-07-31

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

## Setup

```bash
# Clone the repository (if not already cloned)
git clone <repository-url>
cd ai-portfolio

# Install dependencies
npm install
```

## Development Server

```bash
# Start Vite dev server
npm run dev
```

The application will be available at `http://localhost:5173`.

## Validation Scenarios

### Scenario 1: Homepage Load & Hero Section

**Steps**:
1. Open `http://localhost:5173` in browser
2. Observe the page loads within 3 seconds
3. Verify hero section displays:
   - Name: "Hamdy Khaled"
   - Title: "Full Stack .NET Developer"
   - Professional summary text
   - Profile image
   - Call-to-action buttons ("View Projects", "Contact Me")

**Expected**: All hero elements visible, professional appearance, no layout shift.

### Scenario 2: Navigation Functionality

**Steps**:
1. Click each navigation link: Projects, Skills, Certificates, About, Contact
2. Verify smooth scroll to corresponding section
3. Verify navigation highlights active section (if implemented)

**Expected**: Smooth scrolling, correct section reached for each link.

### Scenario 3: Skills Section Display

**Steps**:
1. Scroll to Skills section
2. Verify three categories displayed: Backend, Frontend, Tools
3. Verify each category shows correct technologies with icons:
   - Backend: ASP.NET Core, C#, EF Core, SQL Server, Redis
   - Frontend: React, TypeScript, JavaScript, Tailwind CSS, Redux, React Query
   - Tools: Git, GitHub, Postman, Visual Studio, VS Code

**Expected**: All skills visible with correct icons and labels.

### Scenario 4: Projects Section with Filtering

**Steps**:
1. Scroll to Projects section
2. Verify project cards display with image, title, description, tech tags
3. Click "All" filter tab → verify all projects shown
4. Click "Full-Stack" filter tab → verify only full-stack projects shown
5. Click "Backend" filter tab → verify only backend projects shown
6. Click a project link → verify new tab opens with demo/repo URL

**Expected**: Filtering works correctly, external links open in new tab.

### Scenario 5: Certificates Section

**Steps**:
1. Scroll to Certificates section
2. Verify certificate cards show course name, issuer, category
3. Click "View Certificate" link → verify new tab opens with verification URL
4. Click "View All Certificates" → verify navigation to full certificates page

**Expected**: Certificate info correct, verification links functional.

### Scenario 6: Contact Section

**Steps**:
1. Scroll to Contact section
2. Click "Contact Me" button → verify email client opens
3. Click LinkedIn link → verify new tab opens with LinkedIn profile
4. Click GitHub link → verify new tab opens with GitHub profile
5. Verify availability status shows "Available for new opportunities"

**Expected**: All contact methods functional.

### Scenario 7: Language Switching

**Steps**:
1. Locate language toggle in navigation
2. Switch to Arabic → verify:
   - All text changes to Arabic
   - Layout switches to RTL direction
   - Text alignment adjusts correctly
3. Switch back to English → verify:
   - All text changes to English
   - Layout switches to LTR direction
4. Refresh page → verify language preference persists

**Expected**: Bilingual support works, RTL layout correct, preference persists.

### Scenario 8: Responsive Design

**Steps**:
1. Resize browser to mobile width (375px)
2. Verify navigation collapses (hamburger menu if implemented)
3. Verify all sections stack vertically
4. Verify text remains readable
5. Verify buttons/links are tap-friendly (44px minimum touch target)
6. Resize to tablet (768px) → verify 8-column layout
7. Resize to desktop (1280px+) → verify 12-column layout

**Expected**: All breakpoints render correctly.

### Scenario 9: Accessibility

**Steps**:
1. Navigate entire page using only keyboard (Tab, Enter, Arrow keys)
2. Verify all interactive elements are reachable
3. Verify focus indicators are visible
4. Run Lighthouse accessibility audit → verify score ≥90

**Expected**: Full keyboard accessibility, high Lighthouse score.

### Scenario 10: Performance

**Steps**:
1. Run Lighthouse performance audit → verify score ≥90
2. Check image loading (should be lazy-loaded)
3. Verify no unnecessary re-renders (React DevTools)

**Expected**: High performance score, optimized loading.

## Build Validation

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

**Expected**: No TypeScript errors, no lint errors, successful build.

## Edge Case Validation

| Scenario | Expected Behavior |
|----------|-------------------|
| Broken image URL | Fallback placeholder or gradient background displayed |
| Very long description | Text truncates with ellipsis |
| No internet (cached) | Page remains functional with cached assets |
| Screen reader | All elements have proper ARIA labels |

## Success Criteria Verification

| Criterion | How to Verify |
|-----------|---------------|
| SC-001: Load within 3s/5s | Lighthouse Performance audit |
| SC-002: Keyboard navigation ≤15s | Manual keyboard test |
| SC-003: Lighthouse ≥90 | Lighthouse audit |
| SC-004: 320px-2560px responsive | Browser resize test |
| SC-005: Zero broken links | Manual link check + Lighthouse |
| SC-006: Visual consistency | Compare with Stitch design screenshots |
