// SSG: every page prerendered at build time.
export const prerender = true;
export const ssr = true;
// Trailing-slash 'always' is friendlier for static hosts that serve directory
// indexes; flip to 'never' if you prefer /work.html-style URLs.
export const trailingSlash = 'always';
