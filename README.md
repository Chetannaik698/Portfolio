# Chetan Naik — Portfolio

A premium, animated personal portfolio built with React, TypeScript, Tailwind
CSS, and Framer Motion. Dark-mode-first, glassmorphism-heavy, Linear/Vercel/
Stripe-inspired.

No backend — fully static, deployable to Vercel as-is.

## Tech Stack

- **React 18 + Vite** — fast dev server, static build
- **TypeScript** — strict mode
- **Tailwind CSS** — custom design tokens (see `tailwind.config.ts`)
- **Framer Motion** — section reveals, hover states, page-load sequence
- **Lenis** — buttery smooth scrolling
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
portfolio/
├── public/                  # static assets (see ASSETS_NEEDED.md)
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, CustomCursor, ScrollProgress,
│   │   │                     LoadingScreen, ThemeToggle, BackToTop
│   │   ├── sections/         # One component per page section
│   │   ├── ui/                # Reusable primitives (GlassCard, TiltCard, ...)
│   │   └── NotFound.tsx      # 404 page
│   ├── data/                 # Edit these to change site content
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── freelance.ts      # services, pricing, process, FAQ, testimonials
│   │   ├── resume.ts         # education, experience, achievements, stats
│   │   └── media.ts          # YouTube videos, GitHub stats, blog posts
│   ├── hooks/                 # useLenis, useTheme, useCounter, useScrollSpy
│   ├── lib/utils.ts
│   ├── App.tsx                 # section order lives here
│   ├── main.tsx
│   └── index.css
├── index.html                  # SEO + Open Graph metadata
├── tailwind.config.ts          # design tokens: colors, shadows, keyframes
└── vercel.json
```

## Editing Content

Almost everything on the site is data-driven. To update content, edit the
files in `src/data/` rather than the components:

- **Skills** → `src/data/skills.ts`
- **Projects** → `src/data/projects.ts`
- **Freelance services/pricing/FAQ/testimonials** → `src/data/freelance.ts`
- **Resume/education/experience/achievements/stats** → `src/data/resume.ts`
- **YouTube videos/GitHub stats/blog posts** → `src/data/media.ts`

Section order is controlled in `src/App.tsx` — reorder, remove, or duplicate
`<Section />` calls there.

## Assets

See `public/ASSETS_NEEDED.md` — the site renders fine with placeholder
gradients, but add a resume PDF, OG image, and project/video/certificate
images there for the full experience.

## Contact Form

The contact form in `src/components/sections/Contact.tsx` is UI-only (no
backend). To make it functional, wire the `handleSubmit` function to a
service like [Formspree](https://formspree.io), [Resend](https://resend.com),
or a serverless function.

## GitHub Stats

`src/components/sections/GitHubStats.tsx` uses static/illustrative numbers
from `src/data/media.ts` and a deterministic pseudo-contribution graph (no
live API call). To show real data, fetch from the GitHub REST API
(`api.github.com/users/<username>`) client-side or at build time.

## Accessibility & Performance

- Visible keyboard focus states (`:focus-visible`)
- `prefers-reduced-motion` respected — disables Lenis smoothing and shortens
  all animations
- Semantic headings and alt-friendly icon-only buttons carry `aria-label`
- Framer Motion chunk is code-split (`vite.config.ts`)
- Images are expected to be optimized/compressed before adding to `public/`

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy — `vercel.json` already handles SPA routing fallback.

Or via CLI:

```bash
npm install -g vercel
vercel
```

## Notes on Scope

- **Light mode**: the theme toggle exists and persists to `localStorage`,
  but the design tokens are currently tuned for dark mode only (per the
  brief's "dark mode default, nearly-black background" direction). Extending
  `tailwind.config.ts` with light-mode token overrides is the natural next
  step if you want a fully polished light theme.
- **3D/React Three Fiber**: not included — the "Tech Stack" section uses a
  CSS/Framer Motion orbit instead, which keeps the bundle small. R3F can be
  added later for a literal 3D scene if desired.
