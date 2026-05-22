<script lang="ts">
  import { onMount } from 'svelte';
  import Lenis from 'lenis';
  import '$styles/app.css';
  import '$styles/complex/globalnav.scss';
  import '$styles/complex/reveal.scss';
  import GlobalNav from '$components/layout/GlobalNav.svelte';
  import Footer from '$components/layout/Footer.svelte';
  import Splash from '$components/effects/Splash.svelte';

  let { children } = $props();

  let contentReady = $state(false);

  onMount(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href*="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      const hash = href.includes('#') ? '#' + href.split('#').pop() : '';
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      const nav = document.querySelector('.globalnav') as HTMLElement | null;
      const navHeight = nav ? nav.offsetHeight : 0;
      // Compute absolute target Y from the document, then subtract sticky nav.
      // Passing a number (not the element) avoids Lenis adding its own offset twice.
      const absY = el.getBoundingClientRect().top + window.scrollY;
      lenis.scrollTo(absY - navHeight - 8, { immediate: false });
    }

    document.addEventListener('click', handleAnchorClick);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
    };
  });
</script>

<Splash onReady={() => contentReady = true} />

<div style="opacity: {contentReady ? 1 : 0}; transition: opacity 120ms linear" class="min-h-screen flex flex-col">
  <GlobalNav />

  <main class="relative flex-1 w-full mx-auto max-w-[var(--container-page)] px-6 md:px-8">
    {#if children}{@render children()}{/if}
  </main>

  <Footer />
</div>
