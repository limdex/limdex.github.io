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
      if (!hash) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement);
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

<!-- Fixed full-viewport photo background -->
<div class="page-bg" aria-hidden="true"></div>

<GlobalNav />

<main class="relative min-h-screen">
  {#if children}{@render children()}{/if}
</main>

<Footer />
