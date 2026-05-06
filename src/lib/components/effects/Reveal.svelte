<!--
  <Reveal> — wraps children with a scroll-in fade/slide animation via IntersectionObserver.
  CSS driven by .reveal + data-visible in styles/complex/reveal.scss.
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  let {
    delay = 0,
    once = true,
    class: klass = '',
    children
  }: {
    delay?: number;
    once?: boolean;
    class?: string;
    children?: Snippet;
  } = $props();

  let el = $state<HTMLElement | null>(null);
  let visible = $state(false);

  onMount(() => {
    if (!el || typeof IntersectionObserver === 'undefined') {
      visible = true;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible = true;
            if (once) io.disconnect();
          } else if (!once) {
            visible = false;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  });
</script>

<div
  bind:this={el}
  class="reveal {klass}"
  data-visible={visible}
  data-delay={delay > 0 ? '' : null}
  style={delay > 0 ? `--reveal-delay: ${delay}` : undefined}
>
  {#if children}{@render children()}{/if}
</div>
