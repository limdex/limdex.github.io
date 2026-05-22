<script lang="ts">
  import { onMount } from 'svelte';

  let { onReady }: { onReady?: () => void } = $props();

  let fading = $state(false);
  let done = $state(false);

  onMount(() => {
    let t2: ReturnType<typeof setTimeout>;

    const t1 = setTimeout(() => {
      fading = true;
      onReady?.();
      t2 = setTimeout(() => { done = true; }, 200);
    }, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  });
</script>

{#if !done}
  <div class="splash" class:fading aria-hidden="true">
    <div class="mark">
      <span class="name">Hello</span>
      <span class="underline"></span>
    </div>
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
    background: #000000;
    opacity: 1;
    transition: opacity 200ms linear;
  }
  .splash.fading { opacity: 0; }

  .mark {
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .name {
    font: 500 22px/1 -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    letter-spacing: -0.01em;
    color: #ededed;
    text-align: center;
  }

  .underline {
    height: 1px;
    width: 100%;
    background: #0a84ff;
    transform-origin: left;
    transform: scaleX(0);
    animation: splash-underline 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes splash-underline {
    to { transform: scaleX(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    .splash { transition: none; }
    .underline {
      animation: none;
      transform: scaleX(1);
    }
  }
</style>
