# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

**Traciphi** — a professional website for a technology services company that modernizes legacy data infrastructure (SQL servers) to cloud-based data lakes (AWS, Google Cloud, Azure) using Domain-based Data Mesh architecture, enabling AI/BI/ML tools downstream.

Also features a teaser for **ProofStack** — an upcoming AI-based document verification platform for consulting firms.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS properties |
| Fonts | Syne, DM Sans, Space Mono (Google Fonts) |
| Forms | Netlify Forms (static HTML skeleton + AJAX fetch) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── contact-form.html        # Netlify Forms static skeleton — registers form fields at build time
├── src
│   ├── components
│   │   └── Header.tsx            # Sticky nav header with logo, nav links, login button, mobile menu
│   ├── routes
│   │   ├── __root.tsx            # Root layout: Header, body wrapper, meta tags
│   │   ├── index.tsx             # Homepage: hero, services overview, ProofStack teaser, CTA
│   │   ├── services.tsx          # Services page: 4 service sections (migration, mesh, AI, governance)
│   │   ├── course.tsx            # Course catalog: 3 courses with curriculum and enrollment CTA
│   │   ├── about.tsx             # About page: mission, values grid, team member cards
│   │   ├── contact.tsx           # Contact page: Netlify Forms contact form with success state
│   │   ├── login.tsx             # Login page: email/password form, SSO button
│   │   └── faq.tsx               # FAQ page: accordion with Traciphi-specific Q&A
│   ├── router.tsx                # TanStack Router setup
│   └── styles.css                # Global styles: Tailwind, Google Fonts import, CSS custom properties, utility classes
├── .gitignore
├── AGENTS.md                     # This file
├── README.md                     # Project README
├── netlify.toml                  # Netlify build config
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Navigation

The header renders five navigation tabs: **Services**, **Course**, **About**, **Contact**, and **Login**. The Login link renders as a distinct CTA button styled with the brand gradient.

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--navy-900` | `#080e1a` | Page background |
| `--navy-800` | `#0d1628` | Card backgrounds |
| `--blue-400` | `#3b82f6` | Primary blue accent |
| `--cyan-400` | `#22d3ee` | Highlights, labels, success states |
| `--slate-400` | `#94a3b8` | Body text |
| `--white` | `#f8fafc` | Headings |

### Typography

- **Headings / Display**: `Syne` (weight 700–800)
- **Body**: `DM Sans` (weight 300–600)
- **Monospace / Data labels**: `Space Mono`

### CSS Utility Classes

| Class | Purpose |
|-------|---------|
| `.gradient-text` | Blue-to-cyan gradient text fill |
| `.section-label` | Small monospace uppercase labels |
| `.tag` | Pill badge (cyan border, dark background) |
| `.btn-primary` | Gradient fill CTA button |
| `.btn-secondary` | Ghost/outline button |
| `.card-dark` | Dark card with border hover effect |
| `.input-dark` | Form input styled for dark background |
| `.grid-bg` | Subtle grid overlay (60px, low opacity) |
| `.divider` | Gradient horizontal rule |

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`. The `__root.tsx` file wraps all pages with the `<Header>` component and document shell.

### Netlify Forms

Contact form submissions use Netlify Forms:
1. `public/contact-form.html` — static HTML skeleton Netlify scans at build time to register the form and all fields
2. `src/routes/contact.tsx` — React form that POSTs via `fetch('/contact-form.html', ...)` with `Content-Type: application/x-www-form-urlencoded`
3. Hidden `<input name="form-name" value="contact" />` required in React component
4. Honeypot field `bot-field` included in both the skeleton and the React form

## Application Content

### Pages

| Page | Key Sections |
|------|-------------|
| Home (`/`) | Hero with architecture diagram, 4-service grid, 4-phase migration, ProofStack preview card, CTA |
| Services (`/services`) | Hero + 4 full service sections (alternating layout) |
| Course (`/course`) | Hero stats + 3 course cards with curriculum lists |
| About (`/about`) | Hero + mission/stats, 4 values, 4 team member cards |
| Contact (`/contact`) | Contact info sidebar + Netlify form with subject select |
| Login (`/login`) | Centered card with email/password, SSO button, TLS note |
| FAQ (`/faq`) | Accordion with 7 Traciphi-specific questions |

### ProofStack

ProofStack is previewed on the homepage as a mockup document verification UI. Users can join the waitlist via the contact form (subject: "ProofStack Waitlist").

## Development Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build (vite build)
```

## Conventions

### Naming
- Components: PascalCase
- Routes: kebab-case files

### Styling
- CSS custom properties in `styles.css` for theme tokens
- Tailwind utilities for spacing/layout
- Inline styles for component-specific design
- `cn()` helper available if needed for conditional merging

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias (maps to `src/`)
- Type-only imports with `type` keyword where applicable
