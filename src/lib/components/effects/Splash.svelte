<script lang="ts">
  import { onMount } from 'svelte';

  type SplashMode = 'welcome' | 'loading' | null;

  let mode = $state<SplashMode>(null);
  let fading = $state(false);
  let done = $state(false);
  let fadeMs = $derived(mode === 'welcome' ? 500 : 300);

  onMount(() => {
    const key = 'lx.splash';
    const visited = sessionStorage.getItem(key);

    mode = visited ? 'loading' : 'welcome';
    if (!visited) sessionStorage.setItem(key, 'visited');

    const displayMs = mode === 'welcome' ? 1500 : 800;
    const resolvedFadeMs = mode === 'welcome' ? 500 : 300;

    let t2: ReturnType<typeof setTimeout>;

    const t1 = setTimeout(() => {
      fading = true;
      t2 = setTimeout(() => { done = true; }, resolvedFadeMs);
    }, displayMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  });
</script>

{#if !done && mode !== null}
  <div class="splash" class:fading aria-hidden="true" style="--fade-ms: {fadeMs}ms">
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
    transition: opacity var(--fade-ms, 500ms) var(--ease-apple, cubic-bezier(0.4, 0, 0.2, 1));
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
