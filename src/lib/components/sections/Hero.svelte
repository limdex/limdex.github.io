<script lang="ts">
  import { profile } from '$data/profile';
  import Reveal from '$components/effects/Reveal.svelte';

  const taglineLine =
    profile.tagline.charAt(0).toUpperCase() + profile.tagline.slice(1) + '.';
</script>

<section id="top">
  <Reveal>
    <div class="flex items-center gap-2">
      <span class="dot-live"></span>
      <span class="eyebrow">Available for new work</span>
    </div>
  </Reveal>

  <Reveal delay={1}>
    <h1 class="display-1 mt-6">
      {profile.role} &amp; designer.<br />
      {taglineLine}
    </h1>
  </Reveal>

  <Reveal delay={2}>
    <p class="text-[18px] text-muted max-w-[560px] mt-6 leading-relaxed">
      {profile.bio[0]}
    </p>
  </Reveal>

  <Reveal delay={3}>
    <div class="mt-10 flex flex-wrap gap-3">
      <a href="#work" class="btn btn-primary">See selected work</a>
      <a href="#contact" class="btn btn-secondary">Get in touch</a>
    </div>
  </Reveal>

  <Reveal delay={4}>
    <dl class="mt-16 pt-8 hairline grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <dt class="eyebrow">Based in</dt>
        <dd class="mt-2 text-fg">{profile.location}</dd>
      </div>
      <div>
        <dt class="eyebrow">Currently</dt>
        <dd class="mt-2 text-fg">Open to new work</dd>
      </div>
      <div>
        <dt class="eyebrow">Email</dt>
        <dd class="mt-2">
          <a href="mailto:{profile.email}" class="link-accent">{profile.email}</a>
        </dd>
      </div>
    </dl>
  </Reveal>
</section>
