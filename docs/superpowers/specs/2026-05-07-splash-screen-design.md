# Design: Splash Screen with Welcome Text

**Date:** 2026-05-07  
**Status:** Approved

## Summary

Add a site-wide splash screen that shows on first visit ("Welcome" text) or page reload (pulsing dots), then fades out automatically. Return visits within the same session skip it entirely.

## Behavior

| Condition | Animation | Duration |
|---|---|---|
| First visit (no `sessionStorage` key) | "Welcome" text fades in, then out | 1.5s display + 0.5s fade |
| Reload (key exists) | 3 pulsing dots | 0.8s display + 0.3s fade |
| Same-session return visit | Nothing shown | — |

**Session tracking:** `sessionStorage` key `lx.splash = 'visited'` set after first visit. Clears when tab closes.

## Architecture

Single `Splash.svelte` component mounted in `+layout.svelte` above `<GlobalNav>`. Reads `sessionStorage` on `onMount`, runs appropriate animation, fades out, then removes itself from DOM via Svelte `{#if}`.

## Component Design

**`src/lib/components/effects/Splash.svelte`**

- Fixed full-viewport overlay, `z-index` above all content
- `pointer-events: none` — page underneath is already rendered and interactive
- Background: transparent (page content visible through it)
- Two internal states: `'welcome'` | `'loading'` | `null` (hidden)
- On mount: read `sessionStorage`, set state, start timer, set key, fade out, remove

**Visuals:**
- "Welcome" — centered, large text using existing `--font-*` design tokens and site color palette
- Pulsing dots — 3 dots using accent color `#2997ff`, staggered CSS animation (`animation-delay`)
- Exit transition: CSS `opacity` → 0 over fade duration, then `{#if}` removal

## Files

- **Create:** `src/lib/components/effects/Splash.svelte`
- **Modify:** `src/routes/+layout.svelte` — import and add `<Splash />` above `<GlobalNav />`

## Out of Scope

- No click-to-dismiss interaction
- No custom animation on the "Welcome" text beyond fade in/out
- No server-side rendering concerns (sessionStorage read in `onMount` only)
