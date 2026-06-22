# Portfolio — Agent Context

Personal portfolio website for Jhonatan Llerena.

## Tech Stack

- **Framework**: React 19 (Vite 8, TypeScript 6)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: react-icons + @heroicons/react
- **Linting**: ESLint 10
- **Formatter**: Prettier

## Commands

```bash
npm run dev          # Start dev server (port 5173)
npm run build        # TypeScript compile + Vite build
npm run lint         # Run ESLint
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without writing
npm run preview      # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, MainContainer
│   ├── sections/     # Hero, About, Skills, Projects, Contact
│   └── ui/           # NavLink, ThemeToggle, MobileMenu, DesktopNav
├── config/           # Site config (nav links, social links, name)
├── context/          # Theme context (light/dark)
├── data/             # Static data (skills array)
├── assets/           # Images and static files
├── App.tsx           # Root component
└── main.tsx          # Entry point
```

## Conventions

- **Components**: Functional components only, TypeScript
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Exports**: Use barrel files (`index.ts`) in component directories
- **Styling**: Tailwind CSS utility classes (no CSS modules)
- **Types**: Inline types or exported interfaces (no separate `types/` folder)
- **Data**: Static data lives in `src/data/`, config in `src/config/`
- **Theme**: Light/dark toggle via React Context (`useTheme` hook)

## Component Patterns

- **Layout**: `Header`, `Footer`, `MainContainer` — structural wrapper
- **Sections**: Full-page sections (`HeroSection`, `AboutSection`, etc.)
- **UI**: Reusable atoms (`NavLink`, `ThemeToggle`, `MobileMenu`)

## Notes

- No test runner configured — if adding tests, prefer Vitest + React Testing Library
- Prettier configured with `eslint-config-prettier` to avoid conflicts
- Tailwind CSS v4 uses `@tailwindcss/vite` plugin (not PostCSS)
- Contact form uses Formspree (`@formspree/react`)
- Reduced-motion support via `MotionConfig reducedMotion="user"`
- Social links and navigation are in `src/config/site.ts`
