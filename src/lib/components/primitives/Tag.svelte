<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    tone = 'neutral',
    children
  }: {
    tone?: 'neutral' | 'accent' | 'warm';
    children?: Snippet;
  } = $props();

  const tones = {
    neutral: 'glass-btn text-ink-muted',
    accent: 'glass-tag-accent text-accent',
    warm: 'glass-tag-warm text-[var(--color-fuchsia)]'
  };
</script>

<span
  class="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium {tones[tone]}"
>
  {#if children}{@render children()}{/if}
</span>
