<script lang="ts">
  import Section from '$components/primitives/Section.svelte';
  import Icon from '$components/primitives/Icon.svelte';
  import Reveal from '$components/effects/Reveal.svelte';
  import { highlights } from '$data/projects';
</script>

<Section id="highlights" eyebrow="Capabilities" title="What I do" align="center">
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {#each highlights as h, i}
      <Reveal delay={i + 1}>
        <div
          class="relative flex flex-col items-start gap-3 p-6 rounded-[var(--radius-tile)] glass-card
                 hover:border-accent/40 transition"
        >
          <span class="inline-flex items-center justify-center size-11 rounded-xl glass-tag-accent text-accent">
            <Icon name={h.icon} scale="large" />
          </span>
          <h3 class="text-[17px] font-semibold text-ink">{h.label}</h3>
          <p class="text-[14px] text-ink-muted leading-[1.5]">{h.desc}</p>
        </div>
      </Reveal>
    {/each}
  </div>
</Section>
