<!--
  <Icon name="..." /> — sprite-backed icon, successor to <lx-icon>/<sf-symbol>.
  Sprite served from /sprite.svg; IDs follow SF Symbols naming.
-->
<script lang="ts">
  import { base } from '$app/paths';

  type Scale = 'small' | 'medium' | 'large' | 'xlarge';

  let {
    name,
    scale = 'medium',
    class: klass = '',
    strokeWidth
  }: {
    name: string;
    scale?: Scale;
    class?: string;
    strokeWidth?: number;
  } = $props();

  const sizeMap: Record<Scale, number> = { small: 14, medium: 18, large: 22, xlarge: 28 };
  const size = $derived(sizeMap[scale]);
  const stroke = $derived(strokeWidth ?? Math.max(1.25, size / 12));
</script>

<svg
  class={klass}
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width={stroke}
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <use href="{base}/sprite.svg#{name}" />
</svg>
