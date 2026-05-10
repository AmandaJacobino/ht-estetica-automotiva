export type FontKey = 'pirate' | 'racing' | 'bebas' | 'teko';
export type AtmosKey = 'on' | 'off';
export type PaletteKey = 'orange' | 'amber' | 'red';

export interface Tweaks {
  font: FontKey;
  atmos: AtmosKey;
  palette: PaletteKey;
}

export const DEFAULT_TWEAKS: Tweaks = {
  font: 'teko',
  atmos: 'off',
  palette: 'orange',
};

const FONT_MAP: Record<FontKey, string> = {
  pirate: "'Orbitron'",
  racing: "'Racing Sans One'",
  bebas: "'Bebas Neue'",
  teko: "'Teko'",
};

const TRACKING_MAP: Record<FontKey, string> = {
  pirate: '.02em',
  racing: '.01em',
  bebas: '.04em',
  teko: '.02em',
};

const CASE_MAP: Record<FontKey, string> = {
  pirate: 'none',
  racing: 'none',
  bebas: 'uppercase',
  teko: 'none',
};

const PALETTES: Record<PaletteKey, { a: string; b: string; c: string }> = {
  orange: { a: '#F25C05', b: '#F28705', c: '#F23207' },
  amber:  { a: '#fbbf24', b: '#fcd34d', c: '#d97706' },
  red:    { a: '#ef4444', b: '#f87171', c: '#b91c1c' },
};

/** Applies tweak settings as CSS custom properties on :root */
export function applyTweaks(t: Tweaks): void {
  const root = document.documentElement;
  root.style.setProperty('--title-font', FONT_MAP[t.font] ?? FONT_MAP.pirate);
  root.style.setProperty('--title-tracking', TRACKING_MAP[t.font] ?? '.02em');
  root.style.setProperty('--title-case', CASE_MAP[t.font] ?? 'none');
  root.style.setProperty('--atmos-opacity', t.atmos === 'off' ? '0' : '1');

  const p = PALETTES[t.palette] ?? PALETTES.orange;
  root.style.setProperty('--orange', p.a);
  root.style.setProperty('--orange-2', p.b);
  root.style.setProperty('--orange-deep', p.c);
}
