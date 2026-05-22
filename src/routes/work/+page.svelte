<script lang="ts">
  import { projects } from '$data/projects';
  import { profile } from '$data/profile';
  import { base } from '$app/paths';
  import Reveal from '$components/effects/Reveal.svelte';
  import Icon from '$components/primitives/Icon.svelte';
</script>

<svelte:head>
  <title>Work — {profile.name}</title>
  <meta name="description" content="Selected projects and case studies by {profile.name}." />
</svelte:head>

<div class="py-16 md:py-24">
  <!-- Header -->
  <Reveal>
    <span class="eyebrow">All projects</span>
  </Reveal>
  <Reveal delay={1}>
    <h1 class="display-1 mt-4">Work</h1>
  </Reveal>
  <Reveal delay={2}>
    <p class="mt-6 max-w-[560px] text-[18px] text-muted leading-relaxed">
      Selected projects — each with context, trade-offs, and what I'd change next time.
    </p>
  </Reveal>

  <!-- Project list -->
  <ol class="list-none p-0 m-0 mt-16">
    {#each projects as p, i}
      <Reveal delay={i}>
        <li id={p.slug} class="border-t border-line last:border-b scroll-mt-24">
          <article class="grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_auto] items-baseline gap-6 py-10">
            <span class="font-mono text-[13px] text-dim">{String(i + 1).padStart(2, '0')}</span>

            <div class="min-w-0">
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 class="text-[22px] font-medium text-fg leading-tight tracking-tight">{p.title}</h2>
                <span class="text-[13px] text-dim">{p.eyebrow}</span>
              </div>

              <p class="mt-3 text-[16px] text-muted leading-relaxed max-w-[640px]">
                {p.description}
              </p>

              {#if p.tags.length}
                <div class="mt-4 flex flex-wrap gap-1.5">
                  {#each p.tags as tag}
                    <span class="tag">{tag}</span>
                  {/each}
                </div>
              {/if}

              {#if p.href}
                <div class="mt-5">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    class="link-accent inline-flex items-center gap-1.5 text-[14px] font-medium"
                  >
                    Visit project
                    <Icon name="arrow.up.right" scale="small" />
                  </a>
                </div>
              {/if}
            </div>

            <div class="hidden md:block text-muted text-[14px] whitespace-nowrap">
              {p.year}
            </div>
          </article>
        </li>
      </Reveal>
    {/each}
  </ol>

  <!-- Back home -->
  <Reveal>
    <div class="mt-16 text-center">
      <a href="{base}/" class="link-accent inline-flex items-center gap-1.5 text-[14px] font-medium">
        <span class="inline-block rotate-180"><Icon name="arrow.right" scale="small" /></span>
        Back home
      </a>
    </div>
  </Reveal>
</div>
