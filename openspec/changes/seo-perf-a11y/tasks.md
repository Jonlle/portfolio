# Tasks: SEO, Performance & Accessibility

## Task 1: SEO Meta Tags
**File:** `index.html`
**Priority:** High

- [x] Replace title with "Jhonatan Llerena — Full Stack Developer"
- [x] Add meta description
- [x] Add author meta tag
- [x] Add Open Graph tags (og:type, og:title, og:description, og:url, og:site_name)
- [x] Add Twitter Card tags (twitter:card, twitter:title, twitter:description)
- [x] Add schema.org JSON-LD script

## Task 2: robots.txt
**File:** `public/robots.txt` (new)
**Priority:** Medium

- [x] Create robots.txt with User-agent, Allow, and Sitemap reference

## Task 3: Lazy Loading
**File:** `src/App.tsx`
**Priority:** High

- [x] Import lazy and Suspense from React
- [x] Replace eager section imports with React.lazy()
- [x] Add Suspense boundary with pulse fallback
- [x] Verify sections render correctly

## Task 4: Section Export Pattern
**Files:** `src/components/sections/*.tsx`
**Priority:** High

- [x] Convert HeroSection to export default
- [x] Convert AboutSkillsSection to export default
- [x] Convert ProjectsSection to export default
- [x] Convert ContactSection to export default
- [x] Update section index.ts barrel file

## Task 5: Skip-to-Content Link
**Files:** `src/components/layout/Header.tsx`, `src/components/layout/MainContainer.tsx`
**Priority:** High

- [x] Add skip-to-content link before nav
- [x] Add id="main-content" to main content wrapper
- [x] Style skip link (sr-only + focus styles)

## Task 6: Nav ARIA
**File:** `src/components/layout/Header.tsx`
**Priority:** High

- [x] Add aria-label="Main navigation" to nav element

## Task 7: Mobile Menu Toggle ARIA
**File:** `src/components/ui/MobileMenuToggle.tsx`
**Priority:** High

- [x] Add aria-expanded={isMenuOpen}
- [x] Add aria-controls="mobile-menu"
- [x] Update aria-label to reflect state

## Task 8: Mobile Menu ARIA + Focus Trap
**File:** `src/components/ui/MobileMenu.tsx`
**Priority:** High

- [x] Add id="mobile-menu"
- [x] Add role="dialog"
- [x] Add aria-modal="true"
- [x] Add aria-label="Mobile navigation"
- [x] Implement focus trap (Tab/Shift+Tab cycling)
- [x] Add Escape key handler
- [x] Return focus to toggle on close

## Task 9: Section ARIA Labels
**Files:** `src/components/sections/*.tsx`
**Priority:** Medium

- [x] Add aria-label to HeroSection
- [x] Add aria-label to AboutSkillsSection
- [x] Add aria-label to ProjectsSection
- [x] Add aria-label to ContactSection

---

## Review Workload Forecast

- **Estimated changed lines:** ~150
- **Files touched:** ~8
- **Chained PRs recommended:** No (under 400-line budget)
- **Decision needed before apply:** No
