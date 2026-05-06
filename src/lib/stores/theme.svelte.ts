// Global theme store — Svelte 5 rune-based reactive state.
// Persists to localStorage and reacts to OS-level prefers-color-scheme.

import { browser } from '$app/environment';

type Preference = 'auto' | 'light' | 'dark';
type Effective = 'light' | 'dark';

const KEY = 'lx.theme';

function readInitial(): Preference {
  if (!browser) return 'auto';
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'light' || v === 'dark' || v === 'auto') return v;
  } catch {}
  return 'auto';
}

function resolve(pref: Preference): Effective {
  if (pref === 'light' || pref === 'dark') return pref;
  if (!browser) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function createThemeStore() {
  let preference = $state<Preference>(readInitial());
  let effective = $state<Effective>(resolve(preference));

  function apply(eff: Effective) {
    if (!browser) return;
    const html = document.documentElement;
    html.classList.remove('theme-light', 'theme-dark');
    html.classList.add(`theme-${eff}`);
    html.dataset.theme = eff;
  }

  if (browser) {
    apply(effective);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      if (preference === 'auto') {
        effective = mq.matches ? 'dark' : 'light';
        apply(effective);
      }
    };
    mq.addEventListener?.('change', listener);
  }

  return {
    get preference() { return preference; },
    get effective() { return effective; },

    set(next: Preference) {
      preference = next;
      effective = resolve(next);
      apply(effective);
      if (browser) {
        try { localStorage.setItem(KEY, next); } catch {}
      }
    }
  };
}

export const theme = createThemeStore();
