<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$data/profile';
</script>

<footer class="mt-16 border-t border-[var(--glass-border)] glass" style="box-shadow: inset 0 1px 0 var(--glass-specular);">
  <div class="mx-auto w-full max-w-[var(--container-page)] px-6 py-12 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr] text-[13px]">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <img src="{base}/lx-logo.svg" width="24" height="24" alt="" class="rounded" />
        <span class="text-ink font-semibold">{profile.name}</span>
      </div>
      <p class="text-ink-muted max-w-[320px]">
        A small portfolio built with SvelteKit, Tailwind, and a touch of SCSS — Apple-inspired, self-hosted.
      </p>
    </div>

    <div>
      <h4 class="text-ink font-semibold mb-3">Portfolio</h4>
      <ul class="space-y-2 text-ink-muted">
        <li><a href="{base}/#about" class="hover:text-ink">About</a></li>
        <li><a href="{base}/#work" class="hover:text-ink">Work</a></li>
        <li><a href="{base}/work" class="hover:text-ink">All Projects</a></li>
        <li><a href="{base}/#contact" class="hover:text-ink">Contact</a></li>
      </ul>
    </div>

    <div>
      <h4 class="text-ink font-semibold mb-3">Elsewhere</h4>
      <ul class="space-y-2 text-ink-muted">
        {#each profile.socials as s}
          <li><a href={s.href} rel="me" class="hover:text-ink">{s.label}</a></li>
        {/each}
      </ul>
    </div>

    <div>
      <h4 class="text-ink font-semibold mb-3">Colophon</h4>
      <ul class="space-y-2 text-ink-muted">
        <li>SvelteKit + Vite</li>
        <li>Tailwind CSS v4</li>
        <li>SF Pro / system font stack</li>
      </ul>
    </div>
  </div>

  <div class="border-t border-border">
    <div class="mx-auto w-full max-w-[var(--container-page)] px-6 py-4 flex flex-wrap items-center justify-between gap-2 text-[12px] text-ink-faint">
      <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      <a href="#top" class="hover:text-ink">Back to top</a>
    </div>
  </div>
</footer>
