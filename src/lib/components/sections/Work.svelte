<script lang="ts">
  import Section from '$components/primitives/Section.svelte';
  import Tile from '$components/primitives/Tile.svelte';
  import Reveal from '$components/effects/Reveal.svelte';
  import { projects } from '$data/projects';
  import { base } from '$app/paths';
</script>

<Section
  id="work"
  eyebrow="Selected Work"
  title="Things I've built"
  subhead="A few projects I'm proud of. Click through to read more."
  align="center"
>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as p, i}
      <Reveal delay={i + 1}>
        <Tile
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
          href={`${base}/work#${p.slug}`}
          accent={p.accent}
          tags={p.tags}
        />
      </Reveal>
    {/each}
  </div>
</Section>
