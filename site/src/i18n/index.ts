import { t, type Locale } from './ui';

export { t };
export type { Locale };

/**
 * Derives the active locale from a pathname. With `prefixDefaultLocale:
 * false` (astro.config.mjs), English lives unprefixed at root and Spanish
 * lives under `/es/...` — so the rule is purely structural: a leading
 * `/es` segment means Spanish, anything else means English.
 */
export function getLocale(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

/**
 * Maps a pathname to its counterpart in the other locale, preserving the
 * exact page (route-mapped, never a redirect-to-home). Pure string
 * surgery on the leading `/es` segment — no per-collection lookup table,
 * because slugs are mirror-identical across locales by construction
 * (sync-check enforced in a later slice).
 *
 * Trailing-slash normalization matches `Sidebar.astro`'s `isActive()`
 * convention: no trailing slash on section paths, `/` reserved for home.
 *
 * Edge cases:
 *  - Home: '/' <-> '/es/' (es home keeps its trailing slash, matching
 *    Astro's own routing for the locale-root page).
 *  - Deep paths: '/case-studies/x' <-> '/es/case-studies/x'.
 *  - Unknown/malformed input: falls back to the counterpart's locale
 *    home rather than throwing — never breaks hreflang/switcher render.
 */
export function counterpartPath(pathname: string): string {
  if (!pathname) return '/es/';

  // Normalize: strip trailing slash except for a bare root, matching
  // Sidebar.isActive()'s convention.
  const normalized = pathname.replace(/\/+$/, '') || '/';

  if (normalized === '/') {
    return '/es/';
  }

  if (normalized === '/es') {
    return '/';
  }

  if (normalized.startsWith('/es/')) {
    const rest = normalized.slice('/es'.length); // '/case-studies/x'
    return rest || '/';
  }

  // EN -> ES: prefix with /es
  return `/es${normalized}`;
}
