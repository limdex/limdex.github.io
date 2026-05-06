<!--
  <Button> — polymorphic: renders <a> when href is set, <button> otherwise.
  Variants: primary (filled accent), secondary (outline), ghost (subtle).
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'primary' | 'secondary' | 'ghost';
  type Size = 'md' | 'lg';

  let {
    href,
    variant = 'primary',
    size = 'md',
    type = 'button',
    disabled = false,
    class: klass = '',
    children,
    onclick,
    target,
    rel,
    'aria-label': ariaLabel
  }: {
    href?: string;
    variant?: Variant;
    size?: Size;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    class?: string;
    children?: Snippet;
    onclick?: (e: MouseEvent) => void;
    target?: string;
    rel?: string;
    'aria-label'?: string;
  } = $props();

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition ' +
    'duration-200 will-change-transform active:scale-[0.97] focus-visible:outline-none';

  const sizes: Record<Size, string> = {
    md: 'px-5 py-2.5 text-[15px]',
    lg: 'px-7 py-3.5 text-[17px]'
  };

  const variants: Record<Variant, string> = {
    primary:
      'glass-btn-accent text-white hover:brightness-110',
    secondary:
      'glass-btn text-ink hover:border-accent hover:text-accent',
    ghost:
      'text-ink/80 hover:text-ink hover:bg-[var(--glass-bg)] hover:backdrop-blur-2xl ' +
      'hover:border hover:border-[var(--glass-border)]'
  };
</script>

{#if href}
  <a
    {href}
    {target}
    {rel}
    aria-label={ariaLabel}
    class="{base} {sizes[size]} {variants[variant]} {klass}"
  >
    {#if children}{@render children()}{/if}
  </a>
{:else}
  <button
    {type}
    {disabled}
    {onclick}
    aria-label={ariaLabel}
    class="{base} {sizes[size]} {variants[variant]} {klass} disabled:opacity-50 disabled:pointer-events-none"
  >
    {#if children}{@render children()}{/if}
  </button>
{/if}
