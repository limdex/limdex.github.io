<script lang="ts">
  import { highlights } from '$data/highlights';
  import Reveal from '$components/effects/Reveal.svelte';
  import Icon from '$components/primitives/Icon.svelte';
</script>

<section id="highlights">
  <Reveal>
    <div class="flex items-center gap-4 mb-12">
      <span class="eyebrow">03 · What I do</span>
      <span class="flex-1 h-px bg-line"></span>
    </div>
  </Reveal>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each highlights as h, i}
      <Reveal delay={i}>
        <div class="surface p-6 h-full flex flex-col gap-3 hover:border-line-strong transition-colors">
          <span class="inline-flex items-center justify-center w-9 h-9 rounded-md bg-accent-soft text-accent">
            <Icon name={h.icon} scale="small" />
          </span>
          <h3 class="text-[16px] font-medium text-fg mt-2">{h.label}</h3>
          <p class="text-[14px] text-muted leading-relaxed">{h.desc}</p>
        </div>
      </Reveal>
    {/each}
  </div>
</section>
