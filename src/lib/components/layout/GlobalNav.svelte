<script lang="ts">
  import { page } from '$app/state';
  import { base } from '$app/paths';

  const links = [
    { href: '/#about',    label: 'About'     },
    { href: '/#work',     label: 'Work'      },
    { href: '/work',      label: 'Projects'  },
    { href: '/#contact',  label: 'Contact'   }
  ];

  function isActive(href: string) {
    if (href === '/work') return page.url.pathname === '/work' || page.url.pathname === '/work/';
    return false;
  }
</script>

<nav class="globalnav" aria-label="Global">
  <ul class="globalnav__links text-white/60">
    {#each links as link}
      <li>
        <a
          href="{base}{link.href}"
          class="hover:text-white transition {isActive(link.href) ? 'text-white' : ''}"
          aria-current={isActive(link.href) ? 'page' : undefined}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
