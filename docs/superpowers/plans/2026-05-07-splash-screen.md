# Splash Screen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a site-wide splash screen that shows "Welcome" on first visit or pulsing dots on reload, fades out automatically, and skips on same-session return visits.

**Architecture:** A single `Splash.svelte` component (Svelte 5 runes) reads `sessionStorage` on mount to determine mode, runs a timed fade-out, then removes itself via `{#if}`. Mounted in `+layout.svelte` above `<GlobalNav>`.

**Tech Stack:** SvelteKit 2, Svelte 5 runes (`$state`, `$props`, `onMount`), Tailwind v4 CSS variables, scoped `<style>` block

---

### Task 1: Create Splash.svelte component

**Files:**
- Create: `src/lib/components/effects/Splash.svelte`

- [ ] **Step 1: Create the file with full implementation**

  Create `src/lib/components/effects/Splash.svelte` with this exact content:

  ```svelte
  <script lang="ts">
    import { onMount } from 'svelte';

    type SplashMode = 'welcome' | 'loading' | null;

    let mode = $state<SplashMode>(null);
    let fading = $state(false);
    let done = $state(false);

    onMount(() => {
      const key = 'lx.splash';
      const visited = sessionStorage.getItem(key);

      mode = visited ? 'loading' : 'welcome';
      if (!visited) sessionStorage.setItem(key, 'visited');

      const displayMs = mode === 'welcome' ? 1500 : 800;
      const fadeMs = mode === 'welcome' ? 500 : 300;

      const t1 = setTimeout(() => {
        fading = true;
        const t2 = setTimeout(() => { done = true; }, fadeMs);
        return () => clearTimeout(t2);
      }, displayMs);

      return () => clearTimeout(t1);
    });
  </script>

  {#if !done && mode !== null}
    <div class="splash" class:fading aria-hidden="true">
      {#if mode === 'welcome'}
        <span class="welcome-text">Welcome</span>
      {:else}
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      {/if}
    </div>
  {/if}

  <style>
    .splash {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      opacity: 1;
      transition: opacity 500ms var(--ease-apple, cubic-bezier(0.4, 0, 0.2, 1));
    }

    .splash.fading {
      opacity: 0;
    }

    .welcome-text {
      font-family: var(--font-sans);
      font-size: clamp(2.5rem, 8vw, 5rem);
      font-weight: 600;
      letter-spacing: -0.04em;
      color: var(--color-ink, #f5f5f7);
      text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4);
    }

    .dots {
      display: flex;
      gap: 0.6rem;
      align-items: center;
    }

    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--color-accent, #2997ff);
      animation: pulse 1s var(--ease-apple, cubic-bezier(0.4, 0, 0.2, 1)) infinite;
    }

    .dot:nth-child(2) { animation-delay: 0.15s; }
    .dot:nth-child(3) { animation-delay: 0.3s; }

    @keyframes pulse {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }

    @media (prefers-reduced-motion: reduce) {
      .splash { transition: none; }
      .dot { animation: none; opacity: 1; }
    }
  </style>
  ```

- [ ] **Step 2: Verify type check passes**

  ```powershell
  cd "C:\Users\LimX\Work\self\my_porto"
  npm run check
  ```

  Expected: `0 ERRORS 0 WARNINGS`

- [ ] **Step 3: Commit**

  ```powershell
  git add src/lib/components/effects/Splash.svelte
  git commit -m "feat: add Splash component with welcome and loading modes"
  ```

---

### Task 2: Mount Splash in layout

**Files:**
- Modify: `src/routes/+layout.svelte`

Current layout script block (for reference):
```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import Lenis from 'lenis';
  import '$styles/app.css';
  import '$styles/complex/page-bg.scss';
  import '$styles/complex/hero.scss';
  import '$styles/complex/globalnav.scss';
  import '$styles/complex/reveal.scss';
  import GlobalNav from '$components/layout/GlobalNav.svelte';
  import Footer from '$components/layout/Footer.svelte';

  let { children } = $props();
  // ... Lenis onMount
</script>
```

- [ ] **Step 1: Add Splash import to layout script block**

  In `src/routes/+layout.svelte`, add this import after the `Footer` import line:

  ```svelte
  import Splash from '$components/effects/Splash.svelte';
  ```

- [ ] **Step 2: Add `<Splash />` to layout template**

  In `src/routes/+layout.svelte`, add `<Splash />` as the first element in the template, before `<div class="page-bg">`:

  ```svelte
  <Splash />

  <!-- Fixed full-viewport photo background -->
  <div class="page-bg" aria-hidden="true"></div>

  <GlobalNav />

  <main class="relative min-h-screen">
    {#if children}{@render children()}{/if}
  </main>

  <Footer />
  ```

- [ ] **Step 3: Verify type check passes**

  ```powershell
  npm run check
  ```

  Expected: `0 ERRORS 0 WARNINGS`

- [ ] **Step 4: Start dev server and manually verify**

  ```powershell
  npm run dev
  ```

  Open `http://localhost:5173` in a browser.

  **First visit test:**
  - Open in a fresh tab → "Welcome" text should appear centered over the page background
  - After ~1.5s it should fade out
  - Page should be fully interactive after fade

  **Reload test:**
  - Press `Ctrl+R` to reload → 3 pulsing blue dots should appear briefly (~0.8s) then fade
  - No "Welcome" text on reload

  **Same-session return test:**
  - Navigate to `/work`, then back to `/` → no splash shown

  **Verify sessionStorage:**
  - Open DevTools → Application → Session Storage → `lx.splash` key should be `'visited'`
  - Close the tab, reopen → first visit splash should show again

  Press `Ctrl+C` to stop the server.

- [ ] **Step 5: Commit**

  ```powershell
  git add src/routes/+layout.svelte
  git commit -m "feat: mount Splash in layout for site-wide welcome/loading screen"
  ```

---

### Task 3: Push to deploy

- [ ] **Step 1: Push to trigger GitHub Actions deploy**

  ```powershell
  git push origin main
  ```

  Expected:
  ```
  To https://github.com/limdex/limdex.github.io.git
     xxxxxxx..xxxxxxx  main -> main
  ```

- [ ] **Step 2: Verify live site**

  Wait ~2 minutes, then open `https://limdex.github.io/` in an incognito window (guarantees first-visit state).

  Expected: "Welcome" text appears over the page background, fades out after ~1.5s.
