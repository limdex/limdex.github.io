<script lang="ts">
  import { theme } from '$stores/theme.svelte';
  import Icon from './Icon.svelte';

  const modes = ['auto', 'light', 'dark'] as const;
  const labels: Record<(typeof modes)[number], string> = {
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark'
  };

  function cycle() {
    const i = modes.indexOf(theme.preference);
    theme.set(modes[(i + 1) % modes.length]);
  }

  const iconName = $derived(theme.effective === 'dark' ? 'moon' : 'sun.max');
</script>

<button
  type="button"
  onclick={cycle}
  class="globalnav__toggle inline-flex items-center gap-2 h-8 px-3 rounded-full border border-border
         bg-surface/60 text-ink-muted text-[12px] font-medium hover:text-ink hover:border-accent/40
         hover:bg-surface transition"
  data-theme={theme.effective}
  aria-label={`Theme: ${labels[theme.preference]} (click to cycle)`}
>
  <span class="globalnav__toggle-icon flex">
    <Icon name={iconName} scale="small" />
  </span>
  <span>{labels[theme.preference]}</span>
</button>
