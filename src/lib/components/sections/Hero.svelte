<script lang="ts">
  import Button from '$components/primitives/Button.svelte';
  import Icon from '$components/primitives/Icon.svelte';
  import Reveal from '$components/effects/Reveal.svelte';
  import { profile } from '$data/profile';
</script>

<section id="top" class="relative overflow-hidden">
  <div class="hero-glow" aria-hidden="true"></div>

  <div class="relative z-10 mx-auto w-full max-w-[var(--container-page)] px-6 pt-28 md:pt-40 pb-24 md:pb-36 text-center">
    <Reveal delay={1} class="mt-6">
      <h1
        class="text-display text-[clamp(44px,7.5vw,96px)] leading-[1.02] tracking-[-0.035em] max-w-[14ch] mx-auto"
      >
        <span class="text-ink">{profile.name}</span>
        <span class="block text-gradient-accent">{profile.tagline}</span>
      </h1>
    </Reveal>

    <Reveal delay={2} class="mt-7">
      <p class="mx-auto max-w-[640px] text-[19px] leading-[1.5] text-ink-muted">
        {profile.role}. TODO: one elevator-pitch line about the value you bring. Replace with your own.
      </p>
    </Reveal>

    <Reveal delay={3} class="mt-10">
      <div class="flex flex-wrap items-center justify-center gap-3">
        <Button href="#work" variant="primary" size="lg">
          <span>See work</span>
          <Icon name="arrow.right" scale="small" />
        </Button>
        <Button href="#contact" variant="secondary" size="lg">Get in touch</Button>
      </div>
    </Reveal>

    <Reveal delay={5} class="mt-16">
      <a
        href="#about"
        class="inline-flex flex-col items-center gap-2 text-ink-faint hover:text-ink transition"
        aria-label="Scroll to about section"
      >
        <span class="text-[11px] uppercase tracking-[0.22em]">Scroll</span>
        <span class="animate-bounce"><Icon name="arrow.down.circle" scale="large" /></span>
      </a>
    </Reveal>
  </div>
</section>
