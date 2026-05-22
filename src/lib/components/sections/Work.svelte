<script lang="ts">
  import { projects } from '$data/projects';
  import { base } from '$app/paths';
  import Reveal from '$components/effects/Reveal.svelte';
  import Icon from '$components/primitives/Icon.svelte';
</script>

<section id="work">
  <Reveal>
    <div class="flex items-center gap-4 mb-12">
      <span class="eyebrow">02 · Work</span>
      <span class="flex-1 h-px bg-line"></span>
    </div>
  </Reveal>

  <ol class="list-none p-0 m-0">
    {#each projects as p, i}
      <Reveal delay={i}>
        <li class="border-t border-line last:border-b">
          <a
            href={p.href ?? `${base}/work#${p.slug}`}
            target={p.href ? '_blank' : undefined}
            rel={p.href ? 'noopener' : undefined}
            class="group grid grid-cols-[40px_1fr_auto] items-baseline gap-6 py-7 -mx-4 px-4 rounded-lg hover:bg-surface transition-colors"
          >
            <span class="font-mono text-[13px] text-dim">{String(i + 1).padStart(2, '0')}</span>

            <div class="min-w-0">
              <h3 class="text-[18px] font-medium text-fg leading-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p class="mt-1.5 text-[15px] text-muted leading-relaxed line-clamp-2">
                {p.description}
              </p>
              {#if p.tags.length}
                <div class="mt-3 flex flex-wrap gap-1.5">
                  {#each p.tags as tag}
                    <span class="tag">{tag}</span>
                  {/each}
                </div>
              {/if}
            </div>

            <div class="flex items-center gap-3 text-muted text-[14px] whitespace-nowrap">
              <span>{p.year}</span>
              <span class="transition-transform duration-200 group-hover:-rotate-45 group-hover:text-accent">
                <Icon name="arrow.right" scale="small" />
              </span>
            </div>
          </a>
        </li>
      </Reveal>
    {/each}
  </ol>

  <Reveal>
    <div class="mt-10 text-center">
      <a href="{base}/work" class="link-accent text-[14px] font-medium inline-flex items-center gap-1.5">
        View all projects
        <Icon name="arrow.right" scale="small" />
      </a>
    </div>
  </Reveal>
</section>
