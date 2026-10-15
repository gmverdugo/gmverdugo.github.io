export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

/** Every section data file exports one value of this shape, so a missing ES key fails `astro check`. */
export type Localized<T> = Record<Locale, T>;
