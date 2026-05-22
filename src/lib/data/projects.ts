// Projects data — each item renders as a <Tile> on /, and as a detail card on /work.

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  year: number;
  accent: 'blue' | 'fuchsia' | 'amber' | 'emerald';
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: 'one',
    eyebrow: 'Product · 2025',
    title: 'Project One',
    description:
      'TODO: what you built, for whom, and the outcome. Keep it outcome-focused; one strong sentence beats three vague ones.',
    year: 2025,
    accent: 'blue',
    tags: ['TypeScript', 'SvelteKit', 'PostgreSQL'],
    href: 'https://example.com/'
  },
  {
    slug: 'two',
    eyebrow: 'Experiment · 2024',
    title: 'Project Two',
    description:
      'TODO: short description. Experiments and side projects belong here — include the question you were trying to answer.',
    year: 2024,
    accent: 'fuchsia',
    tags: ['Swift', 'SwiftUI']
  },
  {
    slug: 'three',
    eyebrow: 'Open source · 2023',
    title: 'Project Three',
    description:
      'TODO: open-source tool or library. Mention adoption if relevant (stars, downloads, notable users) — but only if meaningful.',
    year: 2023,
    accent: 'emerald',
    tags: ['Go', 'CLI']
  }
];

