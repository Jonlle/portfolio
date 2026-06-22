# Spec: SEO, Performance & Accessibility

## 1. SEO Spec

### 1.1 Meta Tags (index.html)

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jhonatan Llerena — Full Stack Developer</title>
  <meta
    name="description"
    content="Personal portfolio of Jhonatan Llerena, Full Stack Developer specializing in React, TypeScript, and modern web technologies."
  />
  <meta name="author" content="Jhonatan Llerena" />
</head>
```

**Acceptance criteria:**

- [ ] Title contains name and role
- [ ] Description is under 160 characters
- [ ] Author meta tag present

### 1.2 Open Graph (index.html)

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Jhonatan Llerena — Full Stack Developer" />
<meta
  property="og:description"
  content="Personal portfolio of Jhonatan Llerena, Full Stack Developer specializing in React, TypeScript, and modern web technologies."
/>
<meta property="og:url" content="https://jhonatanllerena.com" />
<meta property="og:site_name" content="Jhonatan Llerena Portfolio" />
```

**Acceptance criteria:**

- [ ] All OG tags present
- [ ] og:type is "website"
- [ ] og:url matches deployment URL (placeholder ok for now)

### 1.3 Twitter Cards (index.html)

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Jhonatan Llerena — Full Stack Developer" />
<meta
  name="twitter:description"
  content="Personal portfolio of Jhonatan Llerena, Full Stack Developer specializing in React, TypeScript, and modern web technologies."
/>
```

**Acceptance criteria:**

- [ ] twitter:card is "summary" (no image yet)
- [ ] Title and description match OG tags

### 1.4 Schema.org JSON-LD (index.html)

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jhonatan Llerena",
    "jobTitle": "Full Stack Developer",
    "url": "https://jhonatanllerena.com",
    "sameAs": [
      "https://github.com/Jonlle",
      "https://linkedin.com/in/jhonatanllerena"
    ]
  }
</script>
```

**Acceptance criteria:**

- [ ] Valid JSON-LD syntax
- [ ] @type is "Person"
- [ ] sameAs links match social links in config/site.ts

### 1.5 robots.txt (public/robots.txt)

```
User-agent: *
Allow: /

Sitemap: https://jhonatanllerena.com/sitemap.xml
```

**Acceptance criteria:**

- [ ] File exists in public/
- [ ] Allows all crawlers
- [ ] Sitemap reference present (sitemap itself is out of scope)

---

## 2. Performance Spec

### 2.1 Lazy Loading (App.tsx)

Replace eager imports with React.lazy():

```tsx
import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const AboutSkillsSection = lazy(
  () => import("./components/sections/AboutSkillsSection"),
);
const ProjectsSection = lazy(
  () => import("./components/sections/ProjectsSection"),
);
const ContactSection = lazy(
  () => import("./components/sections/ContactSection"),
);
```

**Acceptance criteria:**

- [ ] All 4 sections use dynamic import()
- [ ] No eager imports of section components remain

### 2.2 Suspense Boundary (App.tsx)

```tsx
<Suspense
  fallback={
    <div className="min-h-screen animate-pulse bg-gray-100 dark:bg-gray-800" />
  }
>
  <HeroSection />
  <AboutSkillsSection />
  <ProjectsSection />
  <ContactSection />
</Suspense>
```

**Acceptance criteria:**

- [ ] Suspense wraps all lazy sections
- [ ] Fallback is visually minimal (pulse animation)
- [ ] No layout shift when sections load

### 2.3 Section Export Pattern

Each section component must use `export default` for dynamic import to work:

```tsx
export default function HeroSection() { ... }
```

**Acceptance criteria:**

- [ ] All 4 section files use `export default`
- [ ] Named exports removed or converted

---

## 3. Accessibility Spec

### 3.1 Skip-to-Content Link (Header.tsx)

Add a visually hidden link before the nav:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded"
>
  Skip to content
</a>
```

Add `id="main-content"` to MainContainer or the main content wrapper.

**Acceptance criteria:**

- [ ] Skip link exists in DOM
- [ ] Visually hidden until focused
- [ ] Focus styling is visible
- [ ] Links to #main-content

### 3.2 Nav ARIA Label (Header.tsx)

```tsx
<nav className="..." aria-label="Main navigation">
```

**Acceptance criteria:**

- [ ] `<nav>` has aria-label="Main navigation"

### 3.3 Mobile Menu Toggle ARIA (MobileMenuToggle.tsx)

```tsx
<button
  onClick={toggleMenu}
  className="..."
  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
>
```

**Acceptance criteria:**

- [ ] aria-label changes based on state
- [ ] aria-expanded matches isMenuOpen
- [ ] aria-controls points to mobile menu id

### 3.4 Mobile Menu ARIA (MobileMenu.tsx)

```tsx
<div
  id="mobile-menu"
  role="dialog"
  aria-modal="true"
  aria-label="Mobile navigation"
  className="..."
>
```

**Acceptance criteria:**

- [ ] id="mobile-menu" matches aria-controls on toggle
- [ ] role="dialog" present
- [ ] aria-modal="true" present
- [ ] aria-label="Mobile navigation" present

### 3.5 Focus Trap (MobileMenu.tsx)

When menu opens:

1. Focus first nav link
2. Trap Tab/Shift+Tab within menu
3. Close on Escape key
4. Return focus to toggle button on close

**Acceptance criteria:**

- [ ] Tab does not escape menu when open
- [ ] Escape key closes menu
- [ ] Focus returns to toggle button on close

### 3.6 Section ARIA Labels

Each section gets an aria-label matching its purpose:

```tsx
<section id="hero" aria-label="Introduction">...</section>
<section id="about" aria-label="About me">...</section>
<section id="skills" aria-label="Skills">...</section>
<section id="projects" aria-label="Projects">...</section>
<section id="contact" aria-label="Contact">...</section>
```

**Acceptance criteria:**

- [ ] All sections have aria-label
- [ ] Section IDs match navigation hrefs
