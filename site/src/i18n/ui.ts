/**
 * Chrome vocabulary dictionary — UI strings only (skip-link, nav labels,
 * back-link fallback, statusbar text, switcher label). Static-page body
 * copy (index/architectures/etc. prose) is a separate concern handled by
 * per-page content modules in a later slice, not here.
 *
 * `as const` + `Locale` derived from `keyof typeof ui` gives compile-time
 * key parity: a key missing from `es` (or `en`) is a TypeScript error,
 * not a silent runtime gap.
 */
export const ui = {
  en: {
    skipToContent: 'Skip to content',
    back: 'Back',
    onThisPage: 'On this page',
    nav: {
      overview: 'Overview',
      architectures: 'Architectures',
      caseStudies: 'Case Studies',
      lab: 'Lab',
      articles: 'Articles',
      certifications: 'Certifications',
      engagementModels: 'Engagement Models',
      contact: 'Contact',
    },
    statusContractor: 'Independent contractor',
    availability: 'Available · remote-first',
    switcherLabel: 'Language',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    back: 'Volver',
    onThisPage: 'En esta página',
    nav: {
      overview: 'Resumen',
      architectures: 'Arquitecturas',
      caseStudies: 'Casos de Estudio',
      lab: 'Laboratorio',
      articles: 'Artículos',
      certifications: 'Certificaciones',
      engagementModels: 'Modelos de Engagement',
      contact: 'Contacto',
    },
    statusContractor: 'Contractor independiente',
    availability: 'Disponible · remoto',
    switcherLabel: 'Idioma',
  },
} as const;

export type Locale = keyof typeof ui;

export const t = (locale: Locale) => ui[locale];
