<script lang="ts">
  import { profile } from '$data/profile';
  import Reveal from '$components/effects/Reveal.svelte';
  import Icon from '$components/primitives/Icon.svelte';
</script>

<section id="contact">
  <Reveal>
    <div class="flex items-center gap-4 mb-12">
      <span class="eyebrow">04 · Contact</span>
      <span class="flex-1 h-px bg-line"></span>
    </div>
  </Reveal>

  <div class="max-w-[640px] mx-auto text-center py-8">
    <Reveal>
      <h2 class="display-2">Have something to build?</h2>
    </Reveal>

    <Reveal delay={1}>
      <p class="mt-5 text-[17px] text-muted leading-relaxed">
        I'm open to new work — full-time, contract, or one-off design / engineering help.
      </p>
    </Reveal>

    <Reveal delay={2}>
      <a
        href="mailto:{profile.email}"
        class="link-accent inline-block mt-10 text-[24px] md:text-[28px] font-medium tracking-tight"
      >
        {profile.email}
      </a>
    </Reveal>

    <Reveal delay={3}>
      <div class="mt-8 flex justify-center gap-6 text-[14px] text-muted">
        {#each profile.socials as s}
          <a
            href={s.href}
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 hover:text-fg transition-colors"
          >
            <Icon name={s.icon} scale="small" />
            <span>{s.label}</span>
          </a>
        {/each}
      </div>
    </Reveal>
  </div>
</section>
