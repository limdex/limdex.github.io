<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$data/profile';

  const links = [
    { href: '/#work',    label: 'Work'    },
    { href: '/#about',   label: 'About'   },
    { href: '/#contact', label: 'Contact' }
  ];
</script>

<nav class="globalnav" aria-label="Global">
  <div class="mx-auto w-full max-w-[var(--container-page)] px-6 md:px-8 h-14 flex items-center justify-between">
    <a href="{base}/" class="flex items-center gap-2.5">
      <img src="{base}/lx-logo.svg" width="22" height="22" alt="" />
      <span class="text-[14px] font-medium tracking-tight">{profile.name}</span>
    </a>

    <ul class="flex items-center gap-7 list-none m-0 p-0 text-[14px] text-muted">
      {#each links as link}
        <li>
          <a href="{base}{link.href}" class="hover:text-fg transition-colors">{link.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
