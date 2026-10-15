import type { Localized } from '../types';

export interface ScopeCopy {
  tag: string;
  title: string;
  intro: string;
  rail: string[];
  items: { title: string; description: string }[];
}

export const scope: Localized<ScopeCopy> = {
  en: {
    tag: 'SCOPE',
    title: 'Areas of expertise',
    intro: 'Seven areas I work in, from the first cluster diagram to the platform running in production.',
    rail: ['Mendoza, Argentina', 'Remote-first, worldwide'],
    items: [
      {
        title: 'Elasticsearch architecture and design',
        description:
          'Cluster architecture, hot, cold and frozen tiers, data streams and index lifecycle management (ILM) for platforms ingesting about 280 GB/day.',
      },
      {
        title: 'Security monitoring and SIEM',
        description:
          'Security information and event management (SIEM) with detection rules, endpoint protection, role-based access control (RBAC) and audit logging.',
      },
      {
        title: 'Observability platform implementation',
        description:
          'Logs, metrics and traces unified in one platform, with Elastic Agents managed centrally through Fleet.',
      },
      {
        title: 'Performance optimization and cost reduction',
        description:
          'Capacity and shard tuning: hot-tier disk down from 92–93% to 47–52%, and 61 orphaned data streams removed.',
      },
      {
        title: 'Migration and modernization',
        description:
          'Platform implementations and migrations for banking clients, moving existing indices and dashboards across.',
      },
      {
        title: 'DevSecOps and infrastructure as code',
        description:
          'CI/CD pipelines with Jenkins, Terraform and Ansible; infrastructure as code (IaC) and automated testing.',
      },
      {
        title: 'Training and knowledge transfer',
        description: 'Architecture reviews and mentoring so engineering teams can run the platform on their own.',
      },
    ],
  },
  es: {
    tag: 'ALCANCE',
    title: 'Áreas de especialidad',
    intro: 'Siete áreas en las que trabajo, desde el primer diagrama del clúster hasta la plataforma en producción.',
    rail: ['Mendoza, Argentina', 'Remoto por defecto, en todo el mundo'],
    items: [
      {
        title: 'Arquitectura y diseño de Elasticsearch',
        description:
          'Arquitectura de clústeres, tiers hot, cold y frozen, data streams y gestión del ciclo de vida de índices (ILM) para plataformas que ingieren unos 280 GB/día.',
      },
      {
        title: 'Monitoreo de seguridad y SIEM',
        description:
          'Gestión de información y eventos de seguridad (SIEM) con reglas de detección, protección de endpoints, control de acceso basado en roles (RBAC) y auditoría.',
      },
      {
        title: 'Implementación de plataformas de observabilidad',
        description:
          'Logs, métricas y trazas unificados en una sola plataforma, con Elastic Agents administrados de forma centralizada mediante Fleet.',
      },
      {
        title: 'Optimización de rendimiento y reducción de costos',
        description:
          'Ajuste de capacidad y de shards: disco del tier hot de 92–93% a 47–52%, y 61 data streams huérfanos eliminados.',
      },
      {
        title: 'Migración y modernización',
        description:
          'Implementaciones y migraciones de plataforma para clientes bancarios, llevando índices y dashboards existentes al nuevo entorno.',
      },
      {
        title: 'DevSecOps e infraestructura como código',
        description:
          'Pipelines de CI/CD con Jenkins, Terraform y Ansible; infraestructura como código (IaC) y pruebas automatizadas.',
      },
      {
        title: 'Capacitación y transferencia de conocimiento',
        description:
          'Revisiones de arquitectura y mentoría para que los equipos de ingeniería operen la plataforma por sí mismos.',
      },
    ],
  },
};
