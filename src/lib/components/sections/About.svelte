<script lang="ts">
  import { profile } from '$data/profile';
  import Reveal from '$components/effects/Reveal.svelte';

  const faqs = [
    {
      q: 'What are you building right now?',
      a: "Mostly the web — TypeScript, Svelte, the usual. A couple side projects after hours. Always learning something new."
    },
    {
      q: "What's your stack?",
      a: 'TypeScript / Svelte / Tailwind on the frontend. Node + Postgres on the backend. Figma for design. Git for sanity.'
    },
    {
      q: 'Open to freelance?',
      a: 'Yes — short engagements, advisory, or design-system / DX work especially. Email me from the Contact section below.'
    },
    {
      q: 'Coffee or tea?',
      a: 'Both, in that order, daily. Bonus points for matcha after lunch.'
    }
  ];
</script>

<section id="about">
  <Reveal>
    <div class="flex items-center gap-4 mb-12">
      <span class="eyebrow">01 · About</span>
      <span class="flex-1 h-px bg-line"></span>
    </div>
  </Reveal>

  <div class="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16">
    <!-- Bio -->
    <Reveal>
      <div class="space-y-5">
        {#each profile.bio as paragraph, i}
          <p class="text-[17px] leading-relaxed {i === 0 ? 'text-fg' : 'text-muted'}">
            {paragraph}
          </p>
        {/each}
      </div>
    </Reveal>

    <!-- Meta sidebar -->
    <Reveal delay={1}>
      <dl class="text-[14px]">
        <div class="flex justify-between py-3 border-t border-line">
          <dt class="text-muted">Role</dt>
          <dd class="text-fg text-right">{profile.role}</dd>
        </div>
        <div class="flex justify-between py-3 border-t border-line">
          <dt class="text-muted">Location</dt>
          <dd class="text-fg text-right">{profile.location}</dd>
        </div>
        <div class="flex justify-between py-3 border-t border-line gap-3">
          <dt class="text-muted shrink-0">Stack</dt>
          <dd class="flex flex-wrap gap-1.5 justify-end">
            {#each profile.tags.slice(0, 3) as tag}
              <span class="tag">{tag}</span>
            {/each}
          </dd>
        </div>
        <div class="flex justify-between py-3 border-t border-b border-line">
          <dt class="text-muted">Email</dt>
          <dd class="text-right">
            <a href="mailto:{profile.email}" class="link-accent">{profile.email}</a>
          </dd>
        </div>
      </dl>
    </Reveal>
  </div>

  <!-- Skills -->
  <Reveal>
    <div class="mt-16">
      <span class="eyebrow">Skills &amp; interests</span>
      <div class="mt-4 flex flex-wrap gap-2">
        {#each profile.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>
  </Reveal>

  <!-- FAQ -->
  <Reveal>
    <div class="mt-16">
      <span class="eyebrow">FAQ</span>
      <div class="mt-4">
        {#each faqs as item, i}
          <details class="group border-t border-line" open={i === 0}>
            <summary class="flex justify-between items-center py-4 cursor-pointer list-none hover:text-accent transition-colors">
              <span class="text-[16px] text-fg group-hover:text-accent">{item.q}</span>
              <svg
                class="text-muted transition-transform duration-200 group-open:rotate-180 shrink-0"
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div class="pb-5 pr-8 text-[15px] text-muted leading-relaxed">
              {item.a}
            </div>
          </details>
        {/each}
      </div>
    </div>
  </Reveal>
</section>

<style>
  /* Remove default details marker across browsers */
  details > summary::-webkit-details-marker { display: none; }
  details > summary { list-style: none; }
</style>
