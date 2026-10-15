import { locales, type Locale } from './types';

export { locales };
export type { Locale, Localized } from './types';

export const defaultLocale: Locale = 'en';

/** Home path of a locale: `/` for English (default), `/es/` for Spanish. */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/** In-page anchor on the home of a locale, e.g. `anchor('es', 'chapter-02')` -> `/es/#chapter-02`. */
export function anchor(locale: Locale, id: string): string {
  return `${homePath(locale)}#${id}`;
}

/** Zero-padded two-digit counter for list numbering: `pad2(index + 1)` turns the 0-based index 0 into "01". */
export function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

/** The locale a language switch should point to. */
export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}
