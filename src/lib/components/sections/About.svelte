<script lang="ts">
  import Section from '$components/primitives/Section.svelte';
  import Tag from '$components/primitives/Tag.svelte';
  import Reveal from '$components/effects/Reveal.svelte';
  import { profile } from '$data/profile';
</script>

<Section id="about" eyebrow="About" title="A bit about me" align="left" class="section-about">
  <div class="grid gap-10 md:gap-16 md:grid-cols-[260px_1fr] items-start">
    <Reveal>
      <div
        class="relative size-56 md:size-60 rounded-full overflow-hidden
               bg-gradient-to-br from-accent-soft to-surface
               border border-[var(--glass-border)]"
        style="box-shadow: inset 0 1px 0 var(--glass-specular), var(--glass-shadow);"
      >
        <div
          class="absolute inset-0 flex items-center justify-center text-6xl font-bold text-ink-muted/70 tracking-tight"
          aria-hidden="true"
        >
          {profile.name.slice(0, 2).toUpperCase()}
        </div>
        <!-- halo -->
        <div class="pointer-events-none absolute -inset-2 rounded-full bg-gradient-to-tr from-accent/30 via-transparent to-fuchsia/25 blur-2xl opacity-60"></div>
      </div>
    </Reveal>

    <Reveal delay={1}>
      <div class="space-y-5 text-[17px] leading-[1.55] text-ink">
        {#each profile.bio as paragraph}
          <p>{paragraph}</p>
        {/each}
        <div class="flex flex-wrap gap-2 pt-3">
          {#each profile.tags as tag}
            <Tag tone="neutral">{tag}</Tag>
          {/each}
        </div>
        <dl class="grid grid-cols-2 gap-x-6 gap-y-1 pt-4 text-[14px]">
          <dt class="text-ink-faint uppercase tracking-[0.14em] text-[11px]">Based in</dt>
          <dd class="text-ink">{profile.location}</dd>
          <dt class="text-ink-faint uppercase tracking-[0.14em] text-[11px]">Email</dt>
          <dd><a href="mailto:{profile.email}" class="text-accent hover:underline">{profile.email}</a></dd>
        </dl>
      </div>
    </Reveal>
  </div>
</Section>
