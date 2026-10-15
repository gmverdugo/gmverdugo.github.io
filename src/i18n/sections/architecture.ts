import type { Localized } from '../types';

export interface ArchModule {
  /** Short label. */
  name: string;
  /** Mono sub-label (function of the module). */
  role: string;
}

export interface ArchStage {
  /** Full title (lists, screen readers). */
  title: string;
  modules: ArchModule[];
  /** Annotation lines. Only allowed metrics. */
  notes: string[];
  /** One sentence for the text alternative. */
  summary: string;
}

export interface ArchPlayerCopy {
  /** Accessible name of the live animation (the player element). */
  title: string;
  /** Intro of the text version; must state that the event is illustrative. */
  intro: string;
  /** Summary of the <details> that holds the steps as text. */
  stepsLabel: string;
  /** Six captions, identical to the text shown in the animation. */
  steps: [string, string, string, string, string, string];
  /** Label of the button that pauses the animation. */
  pause: string;
  /** Label of the button that plays the animation. */
  play: string;
}

export interface ArchitectureCopy {
  tag: string;
  title: string;
  intro: string;
  rail: string[];
  figLabel: string;
  figTitle: string;
  stagesHeading: string;
  caption: string;
  glossary: string;
  stages: ArchStage[];
  player: ArchPlayerCopy;
}

export const architecture: Localized<ArchitectureCopy> = {
  en: {
    tag: 'ARCHITECTURE',
    title: 'Reference architecture: from raw signal to automated action',
    intro:
      'One telemetry pipeline, five stages. Every source is collected once, processed and stored under explicit retention rules, analyzed for operations and security, and managed as code.',
    rail: ['Fig. 1', 'Reference pipeline', 'Five stages'],
    figLabel: 'FIG. 1',
    figTitle: 'Enterprise observability and security telemetry pipeline',
    stagesHeading: 'Stages of the reference architecture',
    caption:
      'Fig. 1. Reference architecture for enterprise observability and security monitoring on the Elastic Stack. Each stage can be operated, scaled and audited independently.',
    glossary:
      'VPN: virtual private network. EDR: endpoint detection and response. SAP BTP: SAP Business Technology Platform. OTel: OpenTelemetry. ILM: index lifecycle management. LogsDB: Elasticsearch index mode optimized for logs. APM: application performance monitoring. SIEM: security information and event management. ML: machine learning. LLM: large language model. MCP: Model Context Protocol.',
    stages: [
      {
        title: 'Sources',
        modules: [
          { name: 'Application logs', role: 'LOG' },
          { name: 'Infra metrics', role: 'METRIC' },
          { name: 'Distributed traces', role: 'TRACE' },
          { name: 'VPN', role: 'NETWORK' },
          { name: 'Endpoint security', role: 'EDR' },
          { name: 'SAP BTP', role: 'PLATFORM' },
        ],
        notes: ['Logs, metrics', 'and traces'],
        summary:
          'Application logs, infrastructure metrics, distributed traces, endpoint security, VPN and SAP BTP telemetry.',
      },
      {
        title: 'Collect',
        modules: [
          { name: 'Elastic Agent', role: 'AGENT' },
          { name: 'OTel Collector', role: 'COLLECTOR' },
          { name: 'Fleet', role: 'MANAGEMENT' },
        ],
        notes: ['83 Elastic Agents'],
        summary:
          'Elastic Agent and the OpenTelemetry Collector gather telemetry, and Fleet manages collection centrally.',
      },
      {
        title: 'Process and store',
        modules: [
          { name: 'Elasticsearch', role: 'SEARCH + STORE' },
          { name: 'ILM', role: 'LIFECYCLE' },
          { name: 'Data streams', role: 'TIME SERIES' },
          { name: 'LogsDB', role: 'INDEX MODE' },
        ],
        notes: ['282 GB/day', 'hot, cold, frozen'],
        summary:
          'Elasticsearch with index lifecycle management, data streams and LogsDB, organized in hot, cold and frozen tiers at about 282 GB/day.',
      },
      {
        title: 'Analyze and act',
        modules: [
          { name: 'Kibana', role: 'VISUALIZE' },
          { name: 'APM', role: 'TRACING' },
          { name: 'Elastic Security', role: 'SIEM' },
          { name: 'Machine learning', role: 'ANOMALIES' },
          { name: 'AI Assistant', role: 'LLM' },
          { name: 'Agent Builder', role: 'MCP + TOOLS' },
        ],
        notes: ['Anomaly detection,', 'AI and MCP agents'],
        summary:
          'Kibana for exploration and dashboards, APM for application performance and Elastic Security as SIEM (security information and event management). Machine learning detects anomalies, and the AI Assistant and Agent Builder use large language models (LLMs) and the Model Context Protocol (MCP) to investigate and act.',
      },
      {
        title: 'Automate and orchestrate',
        modules: [
          { name: 'Terraform', role: 'PROVISION' },
          { name: 'Ansible', role: 'CONFIGURE' },
          { name: 'Jenkins', role: 'PIPELINES' },
          { name: 'Python', role: 'SCRIPTING' },
          { name: 'Alerting rules', role: 'TRIGGERS' },
          { name: 'Connectors', role: 'JIRA + SLACK' },
        ],
        notes: ['Infrastructure as code,', 'alerts and tickets'],
        summary:
          'Terraform, Ansible, Jenkins and Python keep the platform reproducible through infrastructure as code and automated pipelines. Alerting rules call Kibana connectors that open Jira tickets and notify Slack, PagerDuty, ServiceNow or any webhook.',
      },
    ],
    player: {
      title:
        'Fig. 1 animated: one illustrative event travelling through the five stages of the pipeline, then the whole pipeline running at once',
      intro: 'One illustrative event, followed from a trace to a ticket, then zoomed out to the whole pipeline.',
      stepsLabel: 'Read the steps as text',
      steps: [
        'Logs, metrics, traces and endpoint security enter one pipeline.',
        'The OpenTelemetry Collector receives, enriches and forwards it. Fleet manages the agents.',
        'Elasticsearch indexes it, and lifecycle rules move it from hot to cold to frozen.',
        'Dashboards and machine learning flag it. An AI assistant explains it.',
        'An alert rule opens the ticket and notifies the team. The platform itself is code.',
        'Every source, every tier, running at once.',
      ],
      pause: 'Pause animation',
      play: 'Play animation',
    },
  },
  es: {
    tag: 'ARQUITECTURA',
    title: 'Arquitectura de referencia: de la señal cruda a la acción automatizada',
    intro:
      'Un solo pipeline de telemetría en cinco etapas. Cada fuente se recolecta una vez, se procesa y almacena con reglas de retención explícitas, se analiza para operaciones y seguridad, y se gestiona como código.',
    rail: ['Fig. 1', 'Pipeline de referencia', 'Cinco etapas'],
    figLabel: 'FIG. 1',
    figTitle: 'Pipeline de telemetría para observabilidad y seguridad empresarial',
    stagesHeading: 'Etapas de la arquitectura de referencia',
    caption:
      'Fig. 1. Arquitectura de referencia para observabilidad y monitoreo de seguridad empresarial sobre Elastic Stack. Cada etapa se puede operar, escalar y auditar de forma independiente.',
    glossary:
      'VPN: red privada virtual. EDR: detección y respuesta en endpoints. SAP BTP: SAP Business Technology Platform. OTel: OpenTelemetry. ILM: gestión del ciclo de vida de índices. LogsDB: modo de índice de Elasticsearch optimizado para logs. APM: monitoreo del rendimiento de aplicaciones. SIEM: gestión de información y eventos de seguridad. ML: aprendizaje automático. LLM: modelo de lenguaje de gran tamaño. MCP: Model Context Protocol.',
    stages: [
      {
        title: 'Fuentes',
        modules: [
          { name: 'Logs de aplicación', role: 'LOG' },
          { name: 'Métricas infra', role: 'MÉTRICA' },
          { name: 'Trazas distribuidas', role: 'TRAZA' },
          { name: 'VPN', role: 'RED' },
          { name: 'Seguridad de endpoint', role: 'EDR' },
          { name: 'SAP BTP', role: 'PLATAFORMA' },
        ],
        notes: ['Logs, métricas', 'y trazas'],
        summary:
          'Logs de aplicación, métricas de infraestructura, trazas distribuidas, seguridad de endpoints, VPN y telemetría de SAP BTP.',
      },
      {
        title: 'Recolección',
        modules: [
          { name: 'Elastic Agent', role: 'AGENTE' },
          { name: 'OTel Collector', role: 'COLECTOR' },
          { name: 'Fleet', role: 'GESTIÓN' },
        ],
        notes: ['83 Elastic Agents'],
        summary:
          'Elastic Agent, el OpenTelemetry Collector y Fleet recolectan la telemetría y la administran de forma centralizada.',
      },
      {
        title: 'Procesar y almacenar',
        modules: [
          { name: 'Elasticsearch', role: 'BÚSQUEDA + ALMAC.' },
          { name: 'ILM', role: 'CICLO DE VIDA' },
          { name: 'Data streams', role: 'SERIES TEMP.' },
          { name: 'LogsDB', role: 'MODO ÍNDICE' },
        ],
        notes: ['282 GB/día', 'hot, cold, frozen'],
        summary:
          'Elasticsearch con gestión del ciclo de vida de índices, data streams y LogsDB, organizado en tiers hot, cold y frozen a unos 282 GB/día.',
      },
      {
        title: 'Analizar y actuar',
        modules: [
          { name: 'Kibana', role: 'VISUALIZAR' },
          { name: 'APM', role: 'TRAZADO' },
          { name: 'Elastic Security', role: 'SIEM' },
          { name: 'Machine learning', role: 'ANOMALÍAS' },
          { name: 'Asistente de IA', role: 'LLM' },
          { name: 'Agent Builder', role: 'AGENTES MCP' },
        ],
        notes: ['Detección de anomalías,', 'IA y agentes MCP'],
        summary:
          'Kibana para exploración y dashboards, APM para el rendimiento de aplicaciones y Elastic Security como SIEM (gestión de información y eventos de seguridad). El machine learning detecta anomalías, y el asistente de IA y Agent Builder usan modelos de lenguaje (LLM) y el Model Context Protocol (MCP) para investigar y actuar.',
      },
      {
        title: 'Automatizar y orquestar',
        modules: [
          { name: 'Terraform', role: 'APROVISIONAR' },
          { name: 'Ansible', role: 'CONFIGURAR' },
          { name: 'Jenkins', role: 'PIPELINES' },
          { name: 'Python', role: 'SCRIPTING' },
          { name: 'Reglas de alertas', role: 'DISPARADORES' },
          { name: 'Conectores', role: 'JIRA + SLACK' },
        ],
        notes: ['Automatización,', 'alertas y tickets'],
        summary:
          'Terraform, Ansible, Jenkins y Python mantienen la plataforma reproducible mediante infraestructura como código y pipelines automatizados. Las reglas de alertas llaman a conectores de Kibana que abren tickets en Jira y notifican a Slack, PagerDuty, ServiceNow o cualquier webhook.',
      },
    ],
    player: {
      title:
        'Fig. 1 animada: un evento ilustrativo recorre las cinco etapas del pipeline y luego se ve el pipeline completo funcionando a la vez',
      intro: 'Un evento ilustrativo, seguido desde una traza hasta un ticket y luego ampliado a todo el pipeline.',
      stepsLabel: 'Leer los pasos como texto',
      steps: [
        'Logs, métricas, trazas y seguridad de endpoints entran en un único pipeline.',
        'El OpenTelemetry Collector lo recibe, lo enriquece y lo reenvía. Fleet administra los agentes.',
        'Elasticsearch lo indexa, y las reglas de ciclo de vida lo mueven de hot a cold y a frozen.',
        'Los dashboards y el machine learning lo detectan. Un asistente de IA lo explica.',
        'Una regla de alertas abre el ticket y avisa al equipo. La plataforma misma es código.',
        'Cada fuente, cada tier, funcionando a la vez.',
      ],
      pause: 'Pausar animación',
      play: 'Reproducir animación',
    },
  },
};
