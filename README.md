# Traciphi

**Data infrastructure modernization for enterprise organizations.**

Traciphi migrates legacy SQL server estates to cloud-based data lakes on AWS, Google Cloud, and Azure — architected using Domain-based Data Mesh principles that enable AI, BI, and ML tools downstream.

## About

- **Services**: Legacy SQL migration, Data Mesh architecture, AI/BI/ML enablement, data governance
- **Courses**: Structured technical education for data engineers and architects
- **ProofStack**: Upcoming AI-based document verification platform for consulting firms

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Fonts | Syne (headings), DM Sans (body), Space Mono (code/data) |
| Deployment | Netlify |

## Development

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services overview, ProofStack teaser |
| `/services` | Full services page with four service sections |
| `/course` | Course catalog with three courses |
| `/about` | Company mission, values, and team |
| `/contact` | Contact form (Netlify Forms) |
| `/login` | Login page (UI only, auth integration pending) |
| `/faq` | Frequently asked questions |

## Forms

The contact form uses **Netlify Forms**. A static HTML skeleton at `public/contact-form.html` registers the form fields with Netlify at build time. The React component at `src/routes/contact.tsx` submits via `fetch` with `application/x-www-form-urlencoded` encoding.

## Design System

- **Primary colors**: Navy `#080e1a` background, `#3b82f6` blue, `#22d3ee` cyan
- **Typography**: Syne 800 for display headings, DM Sans for body, Space Mono for labels/data
- **Pattern**: Grid overlay (4% opacity blue lines at 60px), radial glow accents
- **Components**: `.btn-primary`, `.btn-secondary`, `.card-dark`, `.tag`, `.input-dark`, `.section-label`, `.gradient-text`
