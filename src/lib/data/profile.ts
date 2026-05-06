// Profile data — single source of truth for all identity content.
// Edit here; every page reads from this module.

export const profile = {
  name: 'LimX',
  role: 'Engineer + designer',
  tagline: 'building for the web',
  location: 'TODO: City, Country',
  email: 'hello@example.com',

  bio: [
    // Each entry renders as its own <p>
    "TODO: who you are in one confident sentence. What you build, for whom, and what makes your work worth a second look.",
    "TODO: optional second paragraph — the kind of problems you enjoy, the tools you reach for, or what you've been exploring lately."
  ],

  tags: ['TypeScript', 'Swift', 'Svelte', 'Design systems', 'Performance', 'Accessibility'],

  socials: [
    { label: 'GitHub',   href: 'https://github.com/',            icon: 'logo.github'   },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/',      icon: 'logo.linkedin' },
    { label: 'X',        href: 'https://x.com/',                 icon: 'logo.x'        }
  ]
} as const;

export type Profile = typeof profile;
