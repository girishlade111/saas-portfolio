# SaaS Portfolio — StreamFlow Landing Page

A polished, production-style **SaaS marketing landing page** built with Next.js 16, Tailwind CSS v4, shadcn/ui, and Framer Motion. Showcases a fictional AI-powered automation platform ("StreamFlow") with a full set of marketing sections — hero, stats, features, how-it-works, testimonials, pricing, CTA, and footer.

## Features

- **Complete marketing page** — Header, Hero, Stats, Features, HowItWorks, Testimonials, Pricing, CTA, Footer.
- **Smooth animations** — Framer Motion entrance variants and scroll-triggered effects, plus custom CSS keyframe animations.
- **Design system** — tokenized colors, spacing, and typography in `globals.css`.
- **Component library** — shadcn/ui components (`@/components/ui/*`) with a shared `SectionLabel` and animation utilities.
- **Typography** — Inter, Calistoga, and JetBrains Mono via `next/font`.
- **Dark, modern aesthetic** — gradient accents and a clean SaaS look.
- **Static-friendly** — builds to a fully static site (`output: "export"`), deployable on any static host.

## Tech Stack

- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS v4, shadcn/ui
- Framer Motion
- ESLint

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/girishlade111/saas-portfolio.git
cd saas-portfolio

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Run the dev server
npm run dev
# Open http://localhost:3000

# 4. Build the static site
npm run build
# Static output lands in ./out
```

## Project Structure

```
.
├── src/
│   ├── app/               # App Router: layout.tsx, page.tsx, globals.css
│   ├── components/
│   │   ├── sections/      # Header, Hero, Stats, Features, HowItWorks,
│   │   │                  # Testimonials, Pricing, CTA, Footer
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/
│   └── lib/               # Utilities (animations, shared helpers)
├── public/                # Static assets
├── agent-ctx/             # Agent context notes
├── examples/              # Example snippets
├── mini-services/         # Companion mini-service notes
└── worklog.md             # Build log of the sections
```

> Notes: the `db/`, `prisma/`, and `download/` folders are scaffolding only and are not imported by the app. A trivial placeholder API route was removed so the site builds as fully static.

## Deployment

Deployed as a static site on **Cloudflare Pages** from the `out/` directory produced by `npm run build`. The Next.js config uses `output: "export"` with `images.unoptimized` so every route is pre-rendered to static HTML.

## Author

Built by **Girish Lade** — https://ladestack.in
