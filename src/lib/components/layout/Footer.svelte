<script lang="ts">
  import { profile } from '$data/profile';

  const year = new Date().getFullYear();
</script>

<footer class="border-t border-line mt-16">
  <div class="mx-auto w-full max-w-[var(--container-page)] px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-muted">
    <span>© {year} {profile.name}</span>
    <span>Built with SvelteKit · Hosted on GitHub Pages</span>
  </div>
</footer>
