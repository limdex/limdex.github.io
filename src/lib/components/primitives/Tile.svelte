<script lang="ts">
  import type { Snippet } from 'svelte';
  import Tag from './Tag.svelte';
  import Icon from './Icon.svelte';

  let {
    eyebrow,
    title,
    description,
    href,
    accent = 'blue',
    tags = [],
    media,
    extra
  }: {
    eyebrow?: string;
    title: string;
    description: string;
    href?: string;
    accent?: 'blue' | 'fuchsia' | 'amber' | 'emerald';
    tags?: string[];
    media?: Snippet;
    extra?: Snippet;
  } = $props();

  const accents = {
    blue: 'from-accent to-teal',
    fuchsia: 'from-fuchsia to-amber',
    amber: 'from-amber to-fuchsia',
    emerald: 'from-emerald to-teal'
  } as const;
</script>

<article
  class="group relative flex flex-col overflow-hidden rounded-[var(--radius-tile)] glass-card
         transition duration-300 ease-[var(--ease-spring)]
         hover:-translate-y-1 hover:border-accent/40"
>
  <div class="relative aspect-[16/10] overflow-hidden">
    {#if media}
      {@render media()}
    {:else}
      <div class="absolute inset-0 bg-gradient-to-br {accents[accent]}"></div>
      <div class="absolute inset-0 opacity-25 mix-blend-overlay
                  bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]"></div>
      <div class="absolute inset-0 flex items-center justify-center text-white/90 text-6xl font-bold tracking-tight">
        {title.slice(0, 2).toUpperCase()}
      </div>
    {/if}
  </div>

  <div class="flex flex-1 flex-col gap-3 p-6">
    {#if eyebrow}
      <span class="uppercase text-[11px] tracking-[0.18em] font-semibold text-accent">
        {eyebrow}
      </span>
    {/if}
    <h3 class="text-[22px] font-semibold leading-tight text-ink">{title}</h3>
    <p class="text-[15px] leading-[1.5] text-ink-muted flex-1">{description}</p>

    {#if tags.length}
      <div class="flex flex-wrap gap-2 mt-1">
        {#each tags as tag}
          <Tag tone="neutral">{tag}</Tag>
        {/each}
      </div>
    {/if}

    {#if href}
      <a
        {href}
        class="mt-2 inline-flex items-center gap-1 text-[15px] font-medium text-accent
               hover:text-accent-hover group/link"
      >
        <span>Read more</span>
        <span class="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5">
          <Icon name="arrow.right" scale="small" />
        </span>
      </a>
    {/if}

    {#if extra}{@render extra()}{/if}
  </div>
</article>
