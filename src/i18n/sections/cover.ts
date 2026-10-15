import type { Localized } from '../types';

export interface CoverCopy {
  tag: string;
  headline: string;
  name: string;
  title: string;
  summary: string;
  factsLabel: string;
  photoAlt: string;
  facts: { value: string; label: string }[];
}

export const cover: Localized<CoverCopy> = {
  en: {
    tag: 'OVERVIEW',
    headline: 'Designing observability platforms that scale.',
    name: 'Gonzalo Verdugo',
    title: 'Enterprise Observability Architect',
    summary:
      'Architecture for high-volume telemetry platforms with security detection built in, applied at a large e-commerce company and a top-tier bank.',
    factsLabel: 'Scale across selected engagements',
    photoAlt: 'Portrait of Gonzalo Verdugo',
    facts: [
      { value: '282 GB/day', label: 'ingested, e-commerce' },
      { value: '10+ billion', label: 'records, e-commerce' },
      { value: '83', label: 'Elastic Agents, e-commerce' },
      { value: '132', label: 'detection rules enabled, e-commerce' },
      { value: '~90 TB', label: 'indexed, banking' },
      { value: '~250 GB/day', label: 'ingested, banking' },
    ],
  },
  es: {
    tag: 'RESUMEN',
    headline: 'Diseñando plataformas de observabilidad que escalan.',
    name: 'Gonzalo Verdugo',
    title: 'Arquitecto de observabilidad empresarial',
    summary:
      'Arquitectura de plataformas de telemetría de alto volumen, con detección de seguridad integrada, aplicada en una gran empresa de e-commerce y en un banco de primer nivel.',
    factsLabel: 'Escala en proyectos seleccionados',
    photoAlt: 'Retrato de Gonzalo Verdugo',
    facts: [
      { value: '282 GB/día', label: 'ingeridos, e-commerce' },
      { value: '10+ mil millones', label: 'de registros, e-commerce' },
      { value: '83', label: 'Elastic Agents, e-commerce' },
      { value: '132', label: 'reglas de detección activas, e-commerce' },
      { value: '~90 TB', label: 'indexados, banca' },
      { value: '~250 GB/día', label: 'ingeridos, banca' },
    ],
  },
};
