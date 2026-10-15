import type { Localized } from '../types';

export interface LabItem {
  /** Mono inventory label. */
  id: string;
  name: string;
  description: string;
}

export interface HomeLabCopy {
  tag: string;
  title: string;
  intro: string;
  railNote: string;
  inventoryLabel: string;
  items: LabItem[];
}

export const homelab: Localized<HomeLabCopy> = {
  en: {
    tag: 'LAB',
    title: 'Home lab, where ideas are tested first',
    intro: 'A personal environment to try observability and security patterns before they reach a client platform.',
    railNote: 'Personal infrastructure inventory',
    inventoryLabel: 'Inventory',
    items: [
      {
        id: 'OTEL',
        name: 'OpenTelemetry',
        description: 'Instrumentation and Collector pipelines for traces, metrics and logs.',
      },
      {
        id: 'ELASTIC',
        name: 'Elastic Stack',
        description: 'Elasticsearch and Kibana as the store and analysis layer for lab telemetry.',
      },
      { id: 'K8S', name: 'Kubernetes', description: 'Container orchestration to run and observe workloads.' },
      {
        id: 'VPN',
        name: 'strongSwan VPN monitoring',
        description: 'VPN tunnel visibility built on the Elastic Stack.',
      },
      { id: 'LINUX', name: 'Linux', description: 'Base operating system for lab hosts and services.' },
      { id: 'PY', name: 'Python automation', description: 'Scripts that automate repetitive lab and platform tasks.' },
    ],
  },
  es: {
    tag: 'LAB',
    title: 'Home lab, donde las ideas se prueban primero',
    intro:
      'Un entorno personal para probar patrones de observabilidad y seguridad antes de que lleguen a la plataforma de un cliente.',
    railNote: 'Inventario de infraestructura personal',
    inventoryLabel: 'Inventario',
    items: [
      {
        id: 'OTEL',
        name: 'OpenTelemetry',
        description: 'Instrumentación y pipelines del Collector para trazas, métricas y logs.',
      },
      {
        id: 'ELASTIC',
        name: 'Elastic Stack',
        description: 'Elasticsearch y Kibana como capa de almacenamiento y análisis de la telemetría del lab.',
      },
      {
        id: 'K8S',
        name: 'Kubernetes',
        description: 'Orquestación de contenedores para ejecutar y observar cargas de trabajo.',
      },
      {
        id: 'VPN',
        name: 'Monitoreo de VPN con strongSwan',
        description: 'Visibilidad de túneles VPN construida sobre Elastic Stack.',
      },
      { id: 'LINUX', name: 'Linux', description: 'Sistema operativo base de los hosts y servicios del lab.' },
      {
        id: 'PY',
        name: 'Automatización con Python',
        description: 'Scripts que automatizan tareas repetitivas del lab y de la plataforma.',
      },
    ],
  },
};
