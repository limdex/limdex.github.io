# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working in this repo

**Only touch what is explicitly asked for.** If the user asks to change the glass background, change only the glass background — do not also adjust text colors, shadows, or anything else that seems "related". Scope creep causes regressions and frustrates the user. When in doubt, do less and ask.

## Commands

```bash
npm run dev        # dev server at http://localhost:5173
npm run build      # SSG output to build/
npm run preview    # serve the built output locally
npm run check      # svelte-check TypeScript + Svelte type errors
```

No test runner is configured. `npm run check` is the closest equivalent — run it to catch type errors before claiming a change is correct.

## Stack

- **SvelteKit 2 + Svelte 5 runes** — use `$state`, `$props`, `$derived` (not old `writable`/`let` store patterns)
- **Tailwind CSS v4 (CSS-first)** — no `tailwind.config.js`; all tokens live in the `@theme {}` block in `src/styles/app.css`
- **SCSS partials** for complex animated UI only (`src/styles/complex/`)
- **adapter-static** — every route is prerendered; no server-side runtime
- **Lenis** — handles all scroll (mouse wheel + anchor links); do not add `scroll-behavior: smooth` to CSS

## Path aliases (svelte.config.js)

| Alias | Resolves to |
|---|---|
| `$components` | `src/lib/components` |
| `$data` | `src/lib/data` |
| `$stores` | `src/lib/stores` |
| `$styles` | `src/styles` |

## Architecture

### Styling split

Tailwind handles ~90% of styling via utility classes. SCSS handles the remaining complex cases:

- `src/styles/app.css` — Tailwind entry point, `@theme` design tokens, custom `@utility` definitions (glass-card, glass-btn, glass-btn-accent, glass-tag-accent, glass-tag-warm, text-gradient-accent)
- `src/styles/complex/` — animated/stateful CSS that utilities can't express: `hero.scss` (hero vignette), `globalnav.scss` (fixed left nav positioning), `reveal.scss` (scroll-in animation), `page-bg.scss` (fixed photo background)
- SCSS partials are imported in `+layout.svelte` (not in `app.css`) so Vite runs them through sass-embedded first

### Glass material system

All glass surfaces use CSS variables defined in `:root` in `app.css`:
- `--glass-bg`, `--glass-blur`, `--glass-border`, `--glass-specular`, `--glass-shadow`, `--glass-shadow-hover`
- Applied via `@utility` classes: `glass` (nav/footer), `glass-card` (tiles, highlight cards), `glass-btn` (buttons, tags, pills), `glass-btn-accent` (primary CTA), `glass-tag-accent`/`glass-tag-warm`

### Data layer

- `src/lib/data/profile.ts` — single source of truth for all identity content (name, bio, socials, tags)
- `src/lib/data/projects.ts` — project list consumed by Work and Highlights sections

### Background

`static/bg.jpg` is the fixed full-page background photo. `src/styles/complex/page-bg.scss` applies it via `position: fixed; z-index: -1`. The nav (`globalnav.scss`) is `position: fixed; top: 50%; right: 24px`.

### Single mode (no dark/light toggle)

Dark mode machinery has been removed. `app.html` hard-codes `class="theme-light js"` on `<html>`. The `@custom-variant dark` declaration in `app.css` is kept for syntax compatibility but no dark overrides are applied. `ThemeToggle.svelte` exists but is not used.

### Reveal animation

`src/lib/components/effects/Reveal.svelte` uses `IntersectionObserver` to toggle `data-visible="true"` on scroll entry. `reveal.scss` drives the CSS transition. Stagger is controlled via `delay` prop (multiples of 80ms).

### Icons

Sprite-based: `<Icon name="..." scale="..." />` reads from `static/sprite.svg` using SF Symbols naming convention.

## Customisation entry points

- **Identity** — `src/lib/data/profile.ts`
- **Projects** — `src/lib/data/projects.ts`
- **Design tokens / colors** — `@theme {}` block in `src/styles/app.css`
- **Glass material** — `:root {}` block in `src/styles/app.css`
- **Background photo** — replace `static/bg.jpg`
