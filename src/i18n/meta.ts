import type { Localized } from './types';

export const meta: Localized<{ title: string; description: string; ogLocale: string; ogImageAlt: string }> = {
  en: {
    ogLocale: 'en_US',
    ogImageAlt: 'Gonzalo Verdugo, Enterprise Observability Architect. Elasticsearch / OpenTelemetry / SIEM.',
    title: 'Gonzalo Verdugo — Enterprise Observability Architect',
    description:
      'Architect of enterprise observability and security-monitoring platforms: Elasticsearch, OpenTelemetry and security information and event management (SIEM).',
  },
  es: {
    ogLocale: 'es_AR',
    ogImageAlt: 'Gonzalo Verdugo, Arquitecto de observabilidad empresarial. Elasticsearch / OpenTelemetry / SIEM.',
    title: 'Gonzalo Verdugo — Arquitecto de observabilidad empresarial',
    description:
      'Arquitecto de plataformas de observabilidad y monitoreo de seguridad a escala empresarial: Elasticsearch, OpenTelemetry y gestión de información y eventos de seguridad (SIEM).',
  },
};
