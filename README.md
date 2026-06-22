# Jhonatan Llerena Portfolio

Personal portfolio website for Jhonatan Llerena, built to present professional profile, skills, projects, and contact links in a clean, responsive web experience.

## Quick start

```bash
npm install
npm run dev
```

The development server runs with Vite. Open the local URL printed in the terminal, usually `http://localhost:5173`.

## About the project

This site is a single-page portfolio with dedicated sections for:

- Hero / introduction
- About and skills
- Projects
- Contact and social links
- Light/dark theme support

## Tech stack

| Area       | Tool                   |
| ---------- | ---------------------- |
| UI         | React 18               |
| Build tool | Vite 6                 |
| Language   | TypeScript 5           |
| Styling    | Tailwind CSS v4        |
| Animations | Framer Motion          |
| Icons      | react-icons, Heroicons |
| Linting    | ESLint 9               |

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Type-check and build for production
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Project structure

```text
src/
├── components/
│   ├── layout/       # Header, Footer, MainContainer
│   ├── sections/     # Page sections: Hero, About, Skills, Projects, Contact
│   └── ui/           # Reusable UI components
├── config/           # Navigation, social links, and site constants
├── context/          # Theme context and hooks
├── data/             # Static data used by sections
├── App.tsx           # Root app composition
└── main.tsx          # React entry point
```

## Configuration

Main site metadata lives in `src/config/site.ts`:

- Navigation links
- Social links
- Display name

Skill data lives in `src/data/skills.ts`.

## Quality checks

Before shipping changes, run:

```bash
npm run lint
npm run build
```

There is no test runner configured yet. For this portfolio, linting and production build verification are currently the main quality gates.
