// Highlights — the "what I do" cards rendered on the home page.

export type Highlight = {
  icon: string;
  label: string;
  desc: string;
};

export const highlights: readonly Highlight[] = [
  { icon: 'hammer',                       label: 'Engineering',   desc: 'Shipping thoughtful, performant code across the stack.' },
  { icon: 'sparkles',                     label: 'Design',        desc: 'Clean, considered interfaces grounded in system thinking.' },
  { icon: 'book.pages',                   label: 'Writing',       desc: "Documentation and essays that respect the reader's time." },
  { icon: 'bubble.left.and.bubble.right', label: 'Collaboration', desc: 'Quiet teamwork, clear trade-offs, honest reviews.' }
];
