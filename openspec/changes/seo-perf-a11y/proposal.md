# Proposal: SEO, Performance & Accessibility Improvements

## Intent

Improve the portfolio's discoverability, load performance, and accessibility to meet modern web standards. This is a personal portfolio for Jhonatan Llerena — it needs to be findable by recruiters, fast on mobile, and usable by everyone.

## Scope

### In Scope

1. **SEO**: Meta tags, Open Graph, Twitter Cards, schema.org JSON-LD, robots.txt
2. **Performance**: React.lazy() + Suspense for section code splitting
3. **Accessibility**: Skip-to-content, aria-labels, focus management, keyboard navigation

### Out of Scope

- Analytics (Plausible/Umami) — separate change
- Contact form — separate change
- Sitemap generation — needs deployment target first
- Image optimization — no images in sections yet

## Approach

### SEO

- Replace default title with "Jhonatan Llerena — Full Stack Developer"
- Add meta description, Open Graph tags, Twitter Cards in `index.html`
- Add schema.org JSON-LD Person structured data
- Add `public/robots.txt` with sitemap reference

### Performance

- Wrap each section import in `React.lazy()` in `App.tsx`
- Add `<Suspense>` boundary with a minimal fallback
- Reduces initial bundle size by deferring section code

### Accessibility

- Add skip-to-content link in `Header.tsx`
- Add `aria-label` to `<nav>` element
- Add `aria-expanded` to `MobileMenuToggle.tsx`
- Add focus trap + Escape key handler in `MobileMenu.tsx`
- Add `role="dialog"` and `aria-modal` to mobile menu
- Add `aria-label` to each section element

## Risks

| Risk                                          | Mitigation                                               |
| --------------------------------------------- | -------------------------------------------------------- |
| Lazy loading causes flash on slow connections | Use minimal Suspense fallback, test on throttled network |
| Focus trap breaks mobile UX                   | Test thoroughly on iOS Safari and Android Chrome         |
| Schema.org data becomes stale                 | Keep it static (name, title, links) — no dynamic data    |

## Non-Goals

- No new dependencies (using existing React.lazy, native focus trap)
- No layout changes (only semantic/attribute changes)
- No visual changes (except skip-to-content link, which is visually hidden until focused)
