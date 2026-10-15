import type { Localized } from '../types';

export interface NotFoundCopy {
  title: string;
  heading: string;
  message: string;
  homeLink: string;
}

/** Bilingual 404: both entries are rendered on the same page, each inside its own `lang` block. */
export const notfound: Localized<NotFoundCopy> = {
  en: {
    title: 'Page not found',
    heading: 'Page not found',
    message: 'The page you are looking for does not exist or has moved.',
    homeLink: 'Go to the home page',
  },
  es: {
    title: 'Página no encontrada',
    heading: 'Página no encontrada',
    message: 'La página que buscas no existe o fue movida.',
    homeLink: 'Ir a la página de inicio',
  },
};
