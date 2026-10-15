import type { Localized } from '../types';

export type LayerKey = 'collect' | 'store' | 'analyze' | 'automate' | 'platform' | 'security';
export type ContextKey = 'ecommerce' | 'bank' | 'btp' | 'lab';

export interface ToolEntry {
  name: string;
  layer: LayerKey;
  role: string;
  /** Only contexts supported by PROJECT_CONTEXT.md; empty renders an em dash. */
  usedIn: ContextKey[];
}

export interface ToolboxCopy {
  tag: string;
  /** Visually hidden text for an empty Used in cell. */
  notApplicable: string;
  title: string;
  intro: string;
  caption: string;
  columns: { tool: string; layer: string; role: string; usedIn: string };
  legendTitle: string;
  layers: Record<LayerKey, { label: string; description: string }>;
  contexts: Record<ContextKey, string>;
  securityGroup: string;
  tools: ToolEntry[];
  security: ToolEntry[];
}

const en: ToolboxCopy = {
  tag: 'TOOLBOX',
  notApplicable: 'not applicable',
  title: 'Toolbox, indexed',
  intro:
    'Every tool I work with, listed like the index of a book: alphabetical, with the layer of the platform it belongs to and where it has been used.',
  caption: 'Index of tools by name, layer, role and context of use',
  columns: { tool: 'Tool', layer: 'Layer', role: 'Role', usedIn: 'Used in' },
  legendTitle: 'Layers',
  layers: {
    collect: { label: 'Collect', description: 'Agents and pipelines that gather telemetry' },
    store: { label: 'Store', description: 'Indexing, retention and object storage' },
    analyze: { label: 'Analyze', description: 'Search, dashboards and detection' },
    automate: { label: 'Automate', description: 'Infrastructure as code and delivery' },
    platform: { label: 'Platform', description: 'Compute, containers and operating systems' },
    security: { label: 'Security', description: 'Access control, protection and response' },
  },
  contexts: {
    ecommerce: 'E-commerce company',
    bank: 'Top-tier bank',
    btp: 'SAP BTP project',
    lab: 'Home lab',
  },
  securityGroup: 'Security practices',
  tools: [
    { name: 'Ansible', layer: 'automate', role: 'Configuration management and repeatable deployments', usedIn: [] },
    { name: 'AWS', layer: 'platform', role: 'Cloud infrastructure: EC2, S3 and VPC', usedIn: [] },
    { name: 'Datadog', layer: 'analyze', role: 'Commercial monitoring and APM', usedIn: [] },
    { name: 'Docker', layer: 'platform', role: 'Container packaging and runtime', usedIn: [] },
    { name: 'Dynatrace', layer: 'analyze', role: 'Commercial application performance monitoring', usedIn: [] },
    {
      name: 'Elastic Agent',
      layer: 'collect',
      role: 'Unified agent for logs, metrics and security data',
      usedIn: ['ecommerce'],
    },
    {
      name: 'Elasticsearch',
      layer: 'store',
      role: 'Search and analytics engine, cluster architecture and tuning',
      usedIn: ['ecommerce', 'bank', 'lab'],
    },
    { name: 'Fleet', layer: 'collect', role: 'Central management of Elastic Agents', usedIn: ['ecommerce'] },
    { name: 'GitHub / GitLab', layer: 'automate', role: 'Source control and CI/CD workflows', usedIn: [] },
    { name: 'Jenkins', layer: 'automate', role: 'CI/CD pipelines', usedIn: [] },
    {
      name: 'Kibana',
      layer: 'analyze',
      role: 'Dashboards, APM and SIEM (security information and event management)',
      usedIn: ['ecommerce', 'bank', 'lab'],
    },
    { name: 'Kubernetes', layer: 'platform', role: 'Container orchestration', usedIn: ['lab'] },
    {
      name: 'Linux (RHEL / Ubuntu)',
      layer: 'platform',
      role: 'Enterprise operating systems, hardening and recovery',
      usedIn: ['lab'],
    },
    { name: 'MinIO', layer: 'store', role: 'S3-compatible object storage', usedIn: [] },
    { name: 'OpenShift', layer: 'platform', role: 'Enterprise Kubernetes platform', usedIn: [] },
    {
      name: 'OpenTelemetry',
      layer: 'collect',
      role: 'Vendor-neutral instrumentation and Collector pipelines',
      usedIn: ['btp', 'lab'],
    },
    { name: 'Python', layer: 'automate', role: 'Automation and tooling scripts', usedIn: ['lab'] },
    { name: 'SAP BTP', layer: 'platform', role: 'SAP Business Technology Platform on Cloud Foundry', usedIn: ['btp'] },
    { name: 'Terraform', layer: 'automate', role: 'Infrastructure as code', usedIn: [] },
  ],
  security: [
    { name: 'Audit logging', layer: 'security', role: 'Traceability of access and changes', usedIn: [] },
    { name: 'Incident response', layer: 'security', role: 'Event analysis and containment', usedIn: [] },
    { name: 'RBAC', layer: 'security', role: 'Role-based access control', usedIn: [] },
    { name: 'Threat detection', layer: 'security', role: 'Detection of anomalous activity', usedIn: ['ecommerce'] },
    { name: 'TLS/SSL', layer: 'security', role: 'Encryption of data in transit', usedIn: [] },
  ],
};

const es: ToolboxCopy = {
  tag: 'HERRAMIENTAS',
  notApplicable: 'no aplica',
  title: 'Caja de herramientas, indexada',
  intro:
    'Todas las herramientas con las que trabajo, ordenadas como el índice de un libro: alfabéticamente, con la capa de la plataforma a la que pertenecen y dónde las he usado.',
  caption: 'Índice de herramientas por nombre, capa, rol y contexto de uso',
  columns: { tool: 'Herramienta', layer: 'Capa', role: 'Rol', usedIn: 'Usado en' },
  legendTitle: 'Capas',
  layers: {
    collect: { label: 'Recolectar', description: 'Agentes y pipelines que reúnen telemetría' },
    store: { label: 'Almacenar', description: 'Indexación, retención y almacenamiento de objetos' },
    analyze: { label: 'Analizar', description: 'Búsqueda, dashboards y detección' },
    automate: { label: 'Automatizar', description: 'Infraestructura como código y entrega' },
    platform: { label: 'Plataforma', description: 'Cómputo, contenedores y sistemas operativos' },
    security: { label: 'Seguridad', description: 'Control de acceso, protección y respuesta' },
  },
  contexts: {
    ecommerce: 'Empresa de e-commerce',
    bank: 'Banco de primer nivel',
    btp: 'Proyecto SAP BTP',
    lab: 'Home lab',
  },
  securityGroup: 'Prácticas de seguridad',
  tools: [
    { name: 'Ansible', layer: 'automate', role: 'Gestión de configuración y despliegues repetibles', usedIn: [] },
    { name: 'AWS', layer: 'platform', role: 'Infraestructura cloud: EC2, S3 y VPC', usedIn: [] },
    { name: 'Datadog', layer: 'analyze', role: 'Monitoreo comercial y APM', usedIn: [] },
    { name: 'Docker', layer: 'platform', role: 'Empaquetado y ejecución de contenedores', usedIn: [] },
    { name: 'Dynatrace', layer: 'analyze', role: 'Monitoreo comercial del rendimiento de aplicaciones', usedIn: [] },
    {
      name: 'Elastic Agent',
      layer: 'collect',
      role: 'Agente unificado para logs, métricas y datos de seguridad',
      usedIn: ['ecommerce'],
    },
    {
      name: 'Elasticsearch',
      layer: 'store',
      role: 'Motor de búsqueda y analítica, arquitectura y ajuste de clústeres',
      usedIn: ['ecommerce', 'bank', 'lab'],
    },
    { name: 'Fleet', layer: 'collect', role: 'Gestión centralizada de Elastic Agents', usedIn: ['ecommerce'] },
    { name: 'GitHub / GitLab', layer: 'automate', role: 'Control de versiones y flujos de CI/CD', usedIn: [] },
    { name: 'Jenkins', layer: 'automate', role: 'Pipelines de CI/CD', usedIn: [] },
    {
      name: 'Kibana',
      layer: 'analyze',
      role: 'Dashboards, APM y SIEM (gestión de información y eventos de seguridad)',
      usedIn: ['ecommerce', 'bank', 'lab'],
    },
    { name: 'Kubernetes', layer: 'platform', role: 'Orquestación de contenedores', usedIn: ['lab'] },
    {
      name: 'Linux (RHEL / Ubuntu)',
      layer: 'platform',
      role: 'Sistemas operativos empresariales, hardening y recuperación',
      usedIn: ['lab'],
    },
    { name: 'MinIO', layer: 'store', role: 'Almacenamiento de objetos compatible con S3', usedIn: [] },
    { name: 'OpenShift', layer: 'platform', role: 'Plataforma Kubernetes empresarial', usedIn: [] },
    {
      name: 'OpenTelemetry',
      layer: 'collect',
      role: 'Instrumentación neutral al proveedor y pipelines del Collector',
      usedIn: ['btp', 'lab'],
    },
    { name: 'Python', layer: 'automate', role: 'Scripts de automatización y herramientas', usedIn: ['lab'] },
    {
      name: 'SAP BTP',
      layer: 'platform',
      role: 'SAP Business Technology Platform sobre Cloud Foundry',
      usedIn: ['btp'],
    },
    { name: 'Terraform', layer: 'automate', role: 'Infraestructura como código', usedIn: [] },
  ],
  security: [
    { name: 'Auditoría de logs', layer: 'security', role: 'Trazabilidad de accesos y cambios', usedIn: [] },
    { name: 'Detección de amenazas', layer: 'security', role: 'Detección de actividad anómala', usedIn: ['ecommerce'] },
    { name: 'RBAC', layer: 'security', role: 'Control de acceso basado en roles', usedIn: [] },
    { name: 'Respuesta a incidentes', layer: 'security', role: 'Análisis de eventos y contención', usedIn: [] },
    { name: 'TLS/SSL', layer: 'security', role: 'Cifrado de datos en tránsito', usedIn: [] },
  ],
};

export const toolbox: Localized<ToolboxCopy> = { en, es };
