<script lang="ts">
  import Section from '$components/primitives/Section.svelte';
  import Tile from '$components/primitives/Tile.svelte';
  import Reveal from '$components/effects/Reveal.svelte';
  import Button from '$components/primitives/Button.svelte';
  import Icon from '$components/primitives/Icon.svelte';
  import { projects } from '$data/projects';
  import { profile } from '$data/profile';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Work — {profile.name}</title>
  <meta name="description" content="Selected projects and case studies by {profile.name}." />
</svelte:head>

<section class="relative overflow-hidden">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="relative z-10 mx-auto w-full max-w-[var(--container-page)] px-6 pt-24 md:pt-36 pb-12 text-center">
    <Reveal>
      <span class="uppercase text-[12px] tracking-[0.22em] font-semibold text-accent">All Projects</span>
    </Reveal>
    <Reveal delay={1}>
      <h1 class="text-display text-[clamp(40px,6vw,80px)] leading-[1.05] text-gradient-accent mt-4">
        Work
      </h1>
    </Reveal>
    <Reveal delay={2}>
      <p class="mt-5 mx-auto max-w-[640px] text-[19px] text-ink-muted">
        Selected projects — each with context, trade-offs, and what I'd change next time.
      </p>
    </Reveal>
  </div>
</section>

<Section align="left" class="!pt-8">
  <div class="flex flex-col gap-10 max-w-[880px] mx-auto">
    {#each projects as p, i}
      <Reveal delay={(i % 3) + 1}>
        <article id={p.slug}>
          <Tile
            eyebrow={p.eyebrow}
            title={p.title}
            description={p.description}
            accent={p.accent}
            tags={p.tags}
          >
            {#snippet extra()}
              {#if p.href}
                <div class="pt-3">
                  <Button href={p.href} variant="secondary" size="md" target="_blank" rel="noopener">
                    <span>Visit project</span>
                    <Icon name="arrow.up.right" scale="small" />
                  </Button>
                </div>
              {/if}
            {/snippet}
          </Tile>
        </article>
      </Reveal>
    {/each}
  </div>
</Section>

<Section align="center">
  <Reveal>
    <Button href="{base}/" variant="ghost" size="md">
      <Icon name="arrow.right" scale="small" class="rotate-180" />
      <span>Back home</span>
    </Button>
  </Reveal>
</Section>
