import type { Localized } from '../types';
import { navChapters } from '../../data/chapters';

export interface NavCopy {
  monogram: string;
  skipLabel: string;
  jobTitle: string;
  homeLabel: string;
  status: string;
  navLabel: string;
  links: { id: string; label: string }[];
  languageLabel: string;
  languages: { en: string; es: string };
  linkedinLabel: string;
  emailLabel: string;
  footer: {
    colophon: string;
    builtWith: string;
    backToTop: string;
    rights: string;
  };
}

const ids = navChapters.map((c) => c.id);
const labels = (l: string[]) => ids.map((id, i) => ({ id, label: l[i] }));

export const nav: Localized<NavCopy> = {
  en: {
    monogram: 'GV',
    skipLabel: 'Skip to content',
    jobTitle: 'Enterprise Observability Architect',
    homeLabel: 'GV, Gonzalo Verdugo, back to top',
    status: 'Open to in-house roles and independent consulting',
    navLabel: 'Chapters',
    links: labels(['Scope', 'Architecture', 'Engagements', 'Method', 'Toolbox', 'Lab', 'Credentials', 'Contact']),
    languageLabel: 'Language',
    languages: { en: 'EN, English', es: 'ES, Español' },
    linkedinLabel: 'LinkedIn',
    emailLabel: 'Email',
    footer: {
      colophon: 'Architectural dossier',
      builtWith: 'Designed and built by Gonzalo Verdugo. Static site, no trackers.',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
    },
  },
  es: {
    monogram: 'GV',
    skipLabel: 'Saltar al contenido',
    jobTitle: 'Arquitecto de observabilidad empresarial',
    homeLabel: 'GV, Gonzalo Verdugo, volver al inicio',
    status: 'Abierto a roles en relación de dependencia y a consultoría independiente',
    navLabel: 'Capítulos',
    links: labels([
      'Alcance',
      'Arquitectura',
      'Proyectos',
      'Método',
      'Herramientas',
      'Lab',
      'Credenciales',
      'Contacto',
    ]),
    languageLabel: 'Idioma',
    languages: { en: 'EN, English', es: 'ES, Español' },
    linkedinLabel: 'LinkedIn',
    emailLabel: 'Correo',
    footer: {
      colophon: 'Dossier de arquitectura',
      builtWith: 'Diseñado y construido por Gonzalo Verdugo. Sitio estático, sin rastreadores.',
      backToTop: 'Volver arriba',
      rights: 'Todos los derechos reservados.',
    },
  },
};
