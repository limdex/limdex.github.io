# LimX Portfolio — v0.2

A modern, componentized portfolio built with **SvelteKit + Vite + Tailwind v4 + SCSS**.
The previous hand-authored vanilla version lives in `.legacy-static/` for reference.

## Stack

| Layer | Tech |
|---|---|
| Framework | **SvelteKit 2** (with Svelte 5 runes) |
| Bundler | **Vite 5** |
| Styling — common | **Tailwind CSS v4** (CSS-first config via `@theme`) |
| Styling — complex UI | **SCSS partials** under `src/styles/complex/` (hero aurora, nav flyout, reveal animations) |
| Icons | Sprite-based `<Icon>` reading `/sprite.svg` |
| Output | **Static SSG** via `@sveltejs/adapter-static` |
| Language | TypeScript |

## Architecture

```
porto/
├── src/
│   ├── app.html                          # Root HTML, anti-FOUC bootstrap
│   ├── app.d.ts
│   ├── lib/
│   │   ├── components/
│   │   │   ├── layout/                   # GlobalNav, Footer
│   │   │   ├── sections/                 # Hero, About, Work, Highlights, Contact
│   │   │   ├── primitives/               # Button, Tile, Tag, Icon, Section, ThemeToggle
│   │   │   └── effects/                  # Reveal (scroll-in animation)
│   │   ├── data/
│   │   │   ├── profile.ts                # Single source of truth for identity
│   │   │   └── projects.ts               # Project list + highlights
│   │   └── stores/
│   │       └── theme.svelte.ts           # Rune-based theme store
│   ├── routes/
│   │   ├── +layout.svelte                # Nav + Footer wrapper
│   │   ├── +layout.ts                    # prerender: true
│   │   ├── +page.svelte                  # Home
│   │   └── work/+page.svelte             # Work detail
│   └── styles/
│       ├── app.css                       # Tailwind entry + @theme tokens
│       └── complex/
│           ├── hero.scss                 # Animated gradient mesh + grain
│           ├── globalnav.scss            # Flyout + toggle motion
│           └── reveal.scss               # Scroll-in primitive
├── static/
│   ├── favicon.svg
│   ├── lx-logo.svg
│   └── sprite.svg                        # SF-Symbols-named icon sprite
├── package.json
├── svelte.config.js
├── vite.config.ts
└── tsconfig.json
```

## Design decisions

- **Tailwind handles 90% of styling.** Utility classes cover layout, spacing,
  color, typography, states. Design tokens live in `src/styles/app.css` inside
  `@theme { ... }` — edit there to re-skin.
- **SCSS handles the 10%** that utilities can't express cleanly: multi-layer
  animated gradient meshes (`hero.scss`), stateful flyout transitions
  (`globalnav.scss`), and the scroll-reveal primitive (`reveal.scss`).
- **Zero runtime framework** after hydration. Svelte compiles down to ~10 KB
  of runtime; the rest of the JS is your page code.
- **Static SSG.** Every route is prerendered at build time via
  `adapter-static`. Deploy `build/` to any static host (Netlify, Vercel,
  Cloudflare Pages, plain nginx).
- **Dark mode** is driven by a single `html.theme-dark` class, toggled by the
  `theme` store, persisted in `localStorage`, and initialized by an inline
  anti-FOUC script in `app.html` before first paint.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # SSG output to build/
npm run preview    # serve the built site locally
```

## Customize

- **Identity** — edit `src/lib/data/profile.ts`
- **Projects** — edit `src/lib/data/projects.ts`
- **Colors** — edit the `@theme` block in `src/styles/app.css`
- **Nav animation, hero aurora, reveal timing** — edit the matching SCSS
  partial under `src/styles/complex/`

## Legacy

The previous vanilla HTML + jQuery version lives in `.legacy-static/`. It is
fully functional — you can serve it directly or delete it if no longer useful.
