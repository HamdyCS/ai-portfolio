# Tasks: Portfolio Homepage

**Input**: Design documents from `/specs/001-portfolio-homepage/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not requested. Manual validation via `npm run dev` and `npm run build` per quickstart.md.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, types, data files, and foundational configuration

- [x] T001 Create TypeScript interfaces in src/types/index.ts (PersonalInfo, Skill, Project, Certificate, NavigationItem, SocialLink, SkillCategory, ProjectCategory)
- [x] T002 [P] Create personal data file in src/data/personal.ts with PersonalInfo object
- [x] T003 [P] Create skills data file in src/data/skills.ts with categorized Skill arrays
- [x] T004 [P] Create projects data file in src/data/projects.ts with Project array
- [x] T005 [P] Create certificates data file in src/data/certificates.ts with Certificate array
- [x] T006 [P] Create English locale file in src/locales/en.json with all translation keys (nav, hero, skills, projects, certificates, contact, common, footer)
- [x] T007 [P] Create Arabic locale file in src/locales/ar.json with Arabic translations
- [x] T008 Configure i18next in src/i18n.ts with browser language detection, localStorage persistence, and Arabic/English support
- [x] T009 Create filter atom in src/atoms/filterAtom.ts using Jotai for project filter state
- [x] T010 Create language direction atom in src/atoms/languageAtom.ts using Jotai for RTL/LTR state

**Checkpoint**: Types, data, i18n, and state atoms ready - UI implementation can begin

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Layout shell and reusable components that ALL sections depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T011 Create reusable Card component in src/components/common/Card.tsx with floating card styling
- [x] T012 [P] Create reusable Chip component in src/components/common/Chip.tsx for technology tags
- [x] T013 [P] Create reusable Button component in src/components/common/Button.tsx with primary/secondary variants
- [x] T014 [P] Create LanguageToggle component in src/components/common/LanguageToggle.tsx for Arabic/English switching
- [x] T015 Create SectionWrapper component in src/components/layout/SectionWrapper.tsx with consistent spacing and scroll target
- [x] T016 Create Header component in src/components/layout/Header.tsx with navigation links, logo, language toggle, and responsive hamburger menu
- [x] T017 [P] Create Footer component in src/components/layout/Footer.tsx with copyright and social media links
- [x] T018 Configure Tailwind theme in tailwind.config.js with Stitch design tokens (colors: #051424 background, #2DD4BF primary, #38BDF8 secondary; typography: Inter, Cairo, JetBrains Mono; spacing and roundedness tokens)
- [x] T019 Update src/App.tsx with React Router setup and Home page route
- [x] T020 Update src/main.tsx with i18n import and app initialization

**Checkpoint**: Layout shell and reusable components ready - user story sections can now be implemented

---

## Phase 3: User Story 1 - Landing & First Impression (Priority: P1) 🎯 MVP

**Goal**: Visitor immediately understands who Hamdy Khaled is, sees professional introduction, and can navigate to key sections

**Independent Test**: Load homepage and verify hero section displays name, title, summary, profile image, and CTA buttons. Verify navigation links scroll to correct sections.

### Implementation for User Story 1

- [x] T021 [P] [US1] Create HeroSection component in src/components/sections/HeroSection.tsx with name, title, summary, profile image, and CTA buttons
- [x] T022 [P] [US1] Create Home page in src/pages/Home.tsx composing Header, HeroSection, and Footer
- [x] T023 [US1] Add smooth scroll behavior for navigation anchor links
- [x] T024 [US1] Add Framer Motion entrance animations for hero section elements
- [x] T025 [US1] Implement responsive layout for hero section (mobile/tablet/desktop)
- [x] T026 [US1] Add semantic HTML elements (header, nav, main, section) for accessibility
- [x] T027 [US1] Validate hero section renders correctly with npm run dev

**Checkpoint**: Homepage loads with hero section, navigation works, responsive on all screens

---

## Phase 4: User Story 2 - Technical Skills Overview (Priority: P2)

**Goal**: Recruiter can quickly assess Hamdy's technical expertise across Backend, Frontend, and Tools categories

**Independent Test**: Scroll to skills section and verify all three categories display with correct technologies and icons

### Implementation for User Story 2

- [x] T028 [P] [US2] Create SkillsSection component in src/components/sections/SkillsSection.tsx with category grouping
- [x] T029 [US2] Implement skill category display (Backend, Frontend, Tools) with icons from react-icons
- [x] T030 [US2] Add Framer Motion staggered entrance animations for skill items
- [x] T031 [US2] Implement responsive grid layout for skills (mobile: 1 column, tablet: 2 columns, desktop: 3 columns)
- [x] T032 [US2] Add SkillsSection to Home.tsx after HeroSection
- [x] T033 [US2] Validate skills section renders with correct icons via npm run dev

**Checkpoint**: Skills section displays all technologies with proper icons and responsive layout

---

## Phase 5: User Story 3 - Project Portfolio Review (Priority: P3)

**Goal**: Visitor explores project portfolio with filterable cards showing images, descriptions, and tech tags

**Independent Test**: Scroll to projects section, verify project cards render, test filter tabs (All, Full-Stack, Backend), and verify external links open in new tab

### Implementation for User Story 3

- [x] T034 [P] [US3] Create ProjectsSection component in src/components/sections/ProjectsSection.tsx with filter tabs
- [x] T035 [US3] Implement project card display with image, title, description, and technology tags
- [x] T036 [US3] Implement filter functionality using filterAtom from Jotai (All, Full-Stack, Backend tabs)
- [x] T037 [US3] Add Framer Motion layout animations for filter transitions
- [x] T038 [US3] Implement external link handling (target="_blank", rel="noopener noreferrer")
- [x] T039 [US3] Add image fallback placeholder for broken project images
- [x] T040 [US3] Implement responsive grid for project cards (mobile: 1 column, tablet: 2 columns, desktop: 3 columns)
- [x] T041 [US3] Add ProjectsSection to Home.tsx after SkillsSection
- [x] T042 [US3] Validate projects section with filtering via npm run dev

**Checkpoint**: Projects section displays cards, filtering works, external links open in new tab

---

## Phase 6: User Story 4 - Contact & Opportunity Inquiry (Priority: P4)

**Goal**: Recruitor can reach out via email, LinkedIn, or GitHub and see availability status

**Independent Test**: Scroll to contact section, verify email button opens client, LinkedIn/GitHub links work, and availability status displays

### Implementation for User Story 4

- [x] T043 [P] [US4] Create ContactSection component in src/components/sections/ContactSection.tsx with contact methods
- [x] T044 [US4] Implement email mailto link, LinkedIn link, and GitHub link with proper external link attributes
- [x] T045 [US4] Add availability status display ("Available for new opportunities") and location info
- [x] T046 [US4] Add Framer Motion entrance animations for contact section
- [x] T047 [US4] Implement responsive layout for contact section
- [x] T048 [US4] Add ContactSection to Home.tsx before Footer
- [x] T049 [US4] Validate contact section links and layout via npm run dev

**Checkpoint**: Contact section displays all methods, links functional, availability visible

---

## Phase 7: User Story 5 - Certificate Verification (Priority: P5)

**Goal**: Hiring manager reviews certifications with course names, issuers, and verification links

**Independent Test**: Scroll to certificates section, verify certificate cards display correct info, and "View Certificate" links open verification URLs

### Implementation for User Story 5

- [x] T050 [P] [US5] Create CertificatesSection component in src/components/sections/CertificatesSection.tsx with certificate cards
- [x] T051 [US5] Implement certificate card display with course name, issuer, category, and verification link
- [x] T052 [US5] Add "View All Certificates" navigation link to full certificates page
- [x] T053 [US5] Add Framer Motion entrance animations for certificate cards
- [x] T054 [US5] Implement responsive grid for certificate cards
- [x] T055 [US5] Add CertificatesSection to Home.tsx after ProjectsSection
- [x] T056 [US5] Validate certificates section via npm run dev

**Checkpoint**: Certificates section displays all certs with verification links

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements, accessibility, performance, and RTL support

- [x] T057 Implement RTL layout support using Tailwind logical properties (ms-, me-, ps-, pe-) and dir="rtl" attribute
- [x] T058 Add ARIA labels to all interactive elements (buttons, links, navigation)
- [x] T059 Verify focus indicators are visible on all interactive elements
- [x] T060 Add lazy loading to all images (loading="lazy")
- [x] T061 Verify smooth scroll behavior across all navigation links
- [x] T062 Run TypeScript type check with npx tsc --noEmit
- [x] T063 Run ESLint with npm run lint
- [x] T064 Run production build with npm run build
- [x] T065 Run quickstart.md validation scenarios 1-10
- [x] T066 Verify Lighthouse performance score ≥90
- [x] T067 Verify responsive design across 320px to 2560px breakpoints

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Phase 2 completion
  - User stories can proceed in parallel or sequentially in priority order (P1 → P2 → P3 → P4 → P5)
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 3 (P3)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 4 (P4)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 5 (P5)**: Can start after Phase 2 - No dependencies on other stories

### Within Each User Story

- Components before integration
- Core implementation before animations
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T002-T007, T012-T014)
- All Foundational tasks marked [P] can run in parallel (T012-T014, T017)
- Once Phase 2 completes, all user stories can start in parallel
- Within each story, tasks marked [P] can run in parallel (T021-T022, T028, T034, T043, T050)

---

## Parallel Example: User Story 1

```bash
# Launch parallel tasks for US1:
Task: "Create HeroSection in src/components/sections/HeroSection.tsx"
Task: "Create Home page in src/pages/Home.tsx"
```

---

## Parallel Example: All User Stories

```bash
# Once Phase 2 is complete, launch all section components in parallel:
Task: "Create HeroSection (US1) in src/components/sections/HeroSection.tsx"
Task: "Create SkillsSection (US2) in src/components/sections/SkillsSection.tsx"
Task: "Create ProjectsSection (US3) in src/components/sections/ProjectsSection.tsx"
Task: "Create ContactSection (US4) in src/components/sections/ContactSection.tsx"
Task: "Create CertificatesSection (US5) in src/components/sections/CertificatesSection.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (types, data, i18n, atoms)
2. Complete Phase 2: Foundational (components, layout, routing)
3. Complete Phase 3: User Story 1 (hero section)
4. **STOP and VALIDATE**: Test hero section independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add User Story 5 → Test independently → Deploy/Demo
7. Polish → Final validation → Production deployment

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Phase 2 is done:
   - Developer A: User Story 1 + User Story 2
   - Developer B: User Story 3 + User Story 4
   - Developer C: User Story 5 + Polish
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- No tests requested - manual validation via npm run dev and npm run build
- All external links must use target="_blank" and rel="noopener noreferrer"
- All text must use i18next translation keys - no hardcoded strings
