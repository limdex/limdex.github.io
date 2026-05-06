<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    id,
    eyebrow,
    title,
    subhead,
    align = 'center',
    class: klass = '',
    children
  }: {
    id?: string;
    eyebrow?: string;
    title?: string;
    subhead?: string;
    align?: 'center' | 'left';
    class?: string;
    children?: Snippet;
  } = $props();

  const alignCls = $derived(
    align === 'center' ? 'text-center items-center' : 'text-left items-start'
  );
</script>

<section {id} class="relative py-24 md:py-32 {klass}">
  <div class="mx-auto w-full max-w-[var(--container-page)] px-6">
    {#if eyebrow || title || subhead}
      <header class="flex flex-col gap-3 mb-12 {alignCls}">
        {#if eyebrow}
          <span class="uppercase text-[12px] tracking-[0.2em] font-semibold text-accent">
            {eyebrow}
          </span>
        {/if}
        {#if title}
          <h2 class="text-display text-[clamp(32px,4.5vw,56px)] text-ink">{title}</h2>
        {/if}
        {#if subhead}
          <p class="text-ink-muted text-[19px] max-w-[680px]">{subhead}</p>
        {/if}
      </header>
    {/if}
    {#if children}{@render children()}{/if}
  </div>
</section>
