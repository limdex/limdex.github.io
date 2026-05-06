<script lang="ts">
  import Section from '$components/primitives/Section.svelte';
  import Button from '$components/primitives/Button.svelte';
  import Icon from '$components/primitives/Icon.svelte';
  import Reveal from '$components/effects/Reveal.svelte';
  import { profile } from '$data/profile';
</script>

<Section id="contact" align="center" class="relative overflow-hidden">
  <div class="relative">
    <Reveal>
      <h2 class="text-display text-[clamp(40px,6vw,80px)] text-gradient-accent leading-[1.02]">
        Let's talk.
      </h2>
    </Reveal>

    <Reveal delay={1}>
      <p class="mt-5 mx-auto max-w-[520px] text-[19px] text-ink-muted">
        TODO: short invitation — e.g. "Open to full-time or consulting." Based in {profile.location}.
      </p>
    </Reveal>

    <Reveal delay={2} class="mt-10">
      <Button href="mailto:{profile.email}" variant="primary" size="lg">
        <Icon name="envelope" scale="small" />
        <span>{profile.email}</span>
      </Button>
    </Reveal>

    <Reveal delay={3} class="mt-8">
      <div class="flex justify-center gap-3">
        {#each profile.socials as s}
          <a
            href={s.href}
            rel="me noopener"
            aria-label={s.label}
            class="inline-flex items-center justify-center size-11 rounded-full glass-btn
                   text-ink hover:text-accent hover:border-accent/50 transition"
          >
            <Icon name={s.icon} scale="medium" />
          </a>
        {/each}
      </div>
    </Reveal>
  </div>
</Section>
