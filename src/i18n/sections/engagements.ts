import type { Localized } from '../types';

export interface Engagement {
  client: string;
  sector: string;
  /** Oversized monospace figure (number only), rendered in the signal color. */
  result: string;
  /** Unit or descriptor shown as a smaller line under the figure. */
  resultUnit?: string;
  resultLabel: string;
  context: string;
  challenge: string;
  decision: string;
  outcome: string;
  tools: string[];
}

export interface OtherEngagement {
  client: string;
  sector: string;
  period: string;
  scope: string;
  highlight: string;
  tools: string[];
}

export interface EngagementsCopy {
  tag: string;
  title: string;
  intro: string;
  railNote: string;
  othersTitle: string;
  othersIntro: string;
  others: OtherEngagement[];
  labels: { context: string; challenge: string; decision: string; outcome: string; tools: string; highlight: string };
  items: Engagement[];
}

export const engagements: Localized<EngagementsCopy> = {
  en: {
    tag: 'ENGAGEMENTS',
    title: 'Selected engagements',
    intro:
      'Three engagements, written as short reports: the situation, the problem, the architectural decision and what it delivered.',
    railNote: 'Three reports and six shorter engagements / e-commerce, banking, energy, telecom, insurance',
    othersTitle: 'More engagements',
    othersIntro: 'Shorter engagements, each reduced to its scope and one verifiable fact.',
    others: [
      {
        client: 'Telecommunications operator, Latin America',
        sector: 'Telecommunications',
        period: '2022–2024',
        scope:
          'Daily health monitoring of the Elastic platform, Python and Logstash pipelines that ingest cloud cost reports from OCI, AWS and IBM, and a Zabbix-to-Elasticsearch integration.',
        highlight:
          'Row-by-row reconciliation between the source cost files and the Elastic indices, checked daily for zero difference.',
        tools: ['Elasticsearch', 'Logstash', 'Python', 'OCI', 'AWS', 'Zabbix'],
      },
      {
        client: 'Insurance company, Argentina',
        sector: 'Insurance',
        period: '2022–2024',
        scope:
          'Contracted Elastic support for the internal administration team: ingestion troubleshooting, Fleet and ILM review, a cluster update procedure and role-based training.',
        highlight: 'Four role-based Elastic training sessions: users, operators, administrators and developers.',
        tools: ['Elasticsearch', 'Kibana', 'Logstash', 'Fleet', 'Metricbeat'],
      },
      {
        client: 'Electricity distributor, Argentina',
        sector: 'Energy',
        period: '2025–2026',
        scope:
          'Assessment of the Elastic Stack, a TLS-secured Elastic 8.15 environment, Java Database Connectivity (JDBC) ingestion pipelines from Oracle and regulatory KPI ingestion from PostgreSQL.',
        highlight:
          'A 15-week plan for a new cluster sized for 25 GB/day, with dedicated master nodes and hot and cold tiers.',
        tools: ['Elasticsearch', 'Logstash', 'Kibana', 'Python', 'Oracle', 'PostgreSQL'],
      },
      {
        client: 'Bank, Argentina',
        sector: 'Banking',
        period: '2024–2025',
        scope:
          'A traffic analysis tool for VPN nodes that measures interface saturation, captures packets and classifies bandwidth by service.',
        highlight:
          'Scheduled captures every 10 minutes sort traffic into ATM transactions, video security and administration.',
        tools: ['Python', 'Squid', 'Linux'],
      },
      {
        client: 'Financial cooperative, Peru',
        sector: 'Financial services',
        period: 'Proof of concept',
        scope:
          'End-to-end transaction tracing with Elastic APM and the Elastic Distribution of OpenTelemetry (EDOT) across Node.js, Java and Python services.',
        highlight: 'A single trace ID followed a simulated transfer across three services written in three languages.',
        tools: ['Elastic APM', 'EDOT', 'OpenTelemetry', 'Kibana'],
      },
      {
        client: 'Insurance company, Argentina',
        sector: 'Insurance',
        period: '2023',
        scope:
          'Browser-based synthetic monitoring of a customer-service portal journey, run from a Dockerized Heartbeat probe.',
        highlight: 'Four Playwright journeys executed every 10 minutes from a probe in Buenos Aires.',
        tools: ['Elastic Synthetics', 'Heartbeat', 'Playwright', 'Docker'],
      },
    ],
    labels: {
      context: 'Context',
      challenge: 'Challenge',
      decision: 'Decision',
      outcome: 'Outcome',
      tools: 'Tools',
      highlight: 'Highlight',
    },
    items: [
      {
        client: 'Large e-commerce company',
        sector: 'E-commerce',
        result: '47–52%',
        resultUnit: 'hot-tier disk',
        resultLabel: 'Down from 92–93% on the hot nodes',
        context:
          'Observability and security platform on Elastic Cloud for the technology operations of an e-commerce company. It brings logs, metrics, APM traces and endpoint security into one 16-node cluster with hot, cold and frozen tiers, holding about 9.5 TB.',
        challenge:
          'Two of the three hot nodes reached 92–93% disk usage and the cluster status turned YELLOW. Separately, about a fifth of the hot shards belonged to empty indices.',
        decision:
          'The diagnosis pointed at lifecycle design and shard balance, not missing capacity. Shards were rebalanced, an index lifecycle management (ILM) policy was added that moves trace data to the cold tier after two days, and retention was tuned; 61 orphaned data streams and 18 unused machine learning jobs were removed later.',
        outcome:
          'Hot disk fell from 92–93% to 47–52% within hours and with no data loss, about 1.1 TB moved to the cold tier, and the cluster returned to GREEN. The later cleanup released another 204 shards.',
        tools: ['Elasticsearch', 'Kibana', 'ILM', 'Fleet', 'Elastic APM', 'Elastic Security'],
      },
      {
        client: 'Top-tier bank, Argentina',
        sector: 'Banking',
        result: '30.75%',
        resultUnit: 'estimated storage savings',
        resultLabel: 'With the LogsDB index mode, validated with Elastic',
        context:
          'Elastic Stack platform for a bank, run as separate production and development environments across two data centers, indexing around 90 TB of logs.',
        challenge:
          'The platform had to be secure from the start (encrypted traffic, directory-based access, auditing) and span two sites, while its disk footprint kept growing under long retention requirements.',
        decision:
          'The design used dedicated master nodes with data nodes on both sites, Transport Layer Security (TLS), Active Directory over secure Lightweight Directory Access Protocol (LDAP), audit logging and shard allocation awareness by site. A migration to new indices built on the LogsDB index mode was then proposed, together with the move to an Enterprise subscription, and the sizing was validated with Elastic.',
        outcome:
          'Enterprise licenses were acquired and the migration of existing data to LogsDB indices is under way; the sizing estimates a 30.75% storage reduction.',
        tools: ['Elasticsearch', 'Kibana', 'LogsDB', 'Metricbeat', 'Active Directory', 'TLS'],
      },
      {
        client: 'OpenTelemetry on SAP BTP',
        sector: 'Enterprise platform',
        result: '4',
        resultUnit: 'areas',
        resultLabel: 'Each with its own OpenTelemetry Collector',
        context:
          'The SAP Business Technology Platform (BTP) teams of a large e-commerce company run Cloud Application Programming (CAP) and Python applications across several Cloud Foundry subaccounts, and their telemetry was not consistently attributed to an environment in Elastic.',
        challenge:
          'Each area followed its own naming convention, credentials had to stay out of the applications, and development (DEV), user acceptance testing (UAT) and production (PRD) had to be told apart reliably.',
        decision:
          'One OpenTelemetry Collector per area and environment, packaged as a multitarget application (MTA) and deployed through the delivery pipeline. Each collector keeps the Elastic APM credentials in a user-provided service and forces a canonical environment label on everything it forwards.',
        outcome:
          'Four collectors, one per area, send traces, metrics and logs to Elastic APM, with a 14-panel health dashboard. Tracing an environment mislabeling that affected 73,000 documents led to finding a stalled promotion in the pipeline.',
        tools: ['OpenTelemetry Collector', 'Cloud Foundry', 'SAP CAP', 'Elastic APM', 'Kibana'],
      },
    ],
  },
  es: {
    tag: 'PROYECTOS',
    title: 'Proyectos seleccionados',
    intro:
      'Tres proyectos presentados como informes breves: la situación, el problema, la decisión de arquitectura y lo que logró.',
    railNote: 'Tres informes y seis proyectos más breves / e-commerce, banca, energía, telecomunicaciones, seguros',
    othersTitle: 'Otros proyectos',
    othersIntro: 'Proyectos más breves, reducidos a su alcance y a un dato verificable.',
    others: [
      {
        client: 'Operador de telecomunicaciones, Latinoamérica',
        sector: 'Telecomunicaciones',
        period: '2022–2024',
        scope:
          'Monitoreo diario de la salud de la plataforma Elastic, pipelines en Python y Logstash que ingieren reportes de costos de nube de OCI, AWS e IBM, y una integración de Zabbix con Elasticsearch.',
        highlight:
          'Conciliación fila a fila entre los archivos de costos y los índices de Elastic, con control diario de diferencia cero.',
        tools: ['Elasticsearch', 'Logstash', 'Python', 'OCI', 'AWS', 'Zabbix'],
      },
      {
        client: 'Aseguradora, Argentina',
        sector: 'Seguros',
        period: '2022–2024',
        scope:
          'Soporte Elastic contratado para el equipo interno de administración: resolución de problemas de ingesta, revisión de Fleet e ILM, procedimiento de actualización del clúster y capacitación por rol.',
        highlight:
          'Cuatro sesiones de capacitación Elastic por rol: usuarios, operadores, administradores y desarrolladores.',
        tools: ['Elasticsearch', 'Kibana', 'Logstash', 'Fleet', 'Metricbeat'],
      },
      {
        client: 'Distribuidora eléctrica, Argentina',
        sector: 'Energía',
        period: '2025–2026',
        scope:
          'Relevamiento de Elastic Stack, un entorno Elastic 8.15 con TLS, pipelines de ingesta con Java Database Connectivity (JDBC) desde Oracle e ingesta de KPIs regulatorios desde PostgreSQL.',
        highlight:
          'Plan de 15 semanas para un clúster nuevo dimensionado para 25 GB/día, con nodos master dedicados y tiers hot y cold.',
        tools: ['Elasticsearch', 'Logstash', 'Kibana', 'Python', 'Oracle', 'PostgreSQL'],
      },
      {
        client: 'Banco, Argentina',
        sector: 'Banca',
        period: '2024–2025',
        scope:
          'Una herramienta de análisis de tráfico para nodos VPN que mide la saturación de interfaces, captura paquetes y clasifica el ancho de banda por servicio.',
        highlight:
          'Capturas programadas cada 10 minutos clasifican el tráfico en transacciones de cajeros, video-seguridad y administración.',
        tools: ['Python', 'Squid', 'Linux'],
      },
      {
        client: 'Cooperativa financiera, Perú',
        sector: 'Servicios financieros',
        period: 'Prueba de concepto',
        scope:
          'Trazabilidad de transacciones de punta a punta con Elastic APM y la Elastic Distribution of OpenTelemetry (EDOT) sobre servicios Node.js, Java y Python.',
        highlight:
          'Un único trace ID siguió una transferencia simulada a través de tres servicios escritos en tres lenguajes.',
        tools: ['Elastic APM', 'EDOT', 'OpenTelemetry', 'Kibana'],
      },
      {
        client: 'Aseguradora, Argentina',
        sector: 'Seguros',
        period: '2023',
        scope:
          'Monitoreo sintético, basado en navegador, de un recorrido en un portal de servicio al cliente, ejecutado desde una sonda Heartbeat en Docker.',
        highlight: 'Cuatro recorridos Playwright ejecutados cada 10 minutos desde una sonda en Buenos Aires.',
        tools: ['Elastic Synthetics', 'Heartbeat', 'Playwright', 'Docker'],
      },
    ],
    labels: {
      context: 'Contexto',
      challenge: 'Desafío',
      decision: 'Decisión',
      outcome: 'Resultado',
      tools: 'Herramientas',
      highlight: 'Dato destacado',
    },
    items: [
      {
        client: 'Gran empresa de e-commerce',
        sector: 'E-commerce',
        result: '47–52%',
        resultUnit: 'de disco hot',
        resultLabel: 'Desde 92–93% en los nodos hot',
        context:
          'Plataforma de observabilidad y seguridad en Elastic Cloud para las operaciones de tecnología de una empresa de e-commerce: logs, métricas, trazas APM y seguridad de endpoints en un clúster de 16 nodos con tiers hot, cold y frozen que almacena unos 9,5 TB.',
        challenge:
          'Dos de los tres nodos hot llegaron al 92–93% de disco y el estado del clúster pasó a YELLOW. Aparte, cerca de una quinta parte de los shards hot pertenecía a índices vacíos.',
        decision:
          'El diagnóstico apuntó al diseño del ciclo de vida y al balance de shards, no a falta de capacidad. Se rebalancearon los shards, se agregó una política de gestión del ciclo de vida de índices (ILM) que mueve las trazas al tier cold a los dos días y se ajustó la retención; más tarde se eliminaron 61 data streams huérfanos y 18 jobs de machine learning sin uso.',
        outcome:
          'El disco hot bajó de 92–93% a 47–52% en pocas horas y sin pérdida de datos, unos 1,1 TB pasaron al tier cold y el clúster volvió a GREEN. La limpieza posterior liberó otros 204 shards.',
        tools: ['Elasticsearch', 'Kibana', 'ILM', 'Fleet', 'Elastic APM', 'Elastic Security'],
      },
      {
        client: 'Banco de primer nivel, Argentina',
        sector: 'Banca',
        result: '30,75%',
        resultUnit: 'de ahorro estimado de almacenamiento',
        resultLabel: 'Con el modo de índice LogsDB, validado con Elastic',
        context:
          'Plataforma Elastic Stack para un banco, con entornos de producción y desarrollo separados en dos centros de datos, que indexa alrededor de 90 TB de logs.',
        challenge:
          'La plataforma tenía que ser segura desde el inicio (tráfico cifrado, acceso por directorio, auditoría) y abarcar dos sitios, mientras su uso de disco seguía creciendo por requisitos de retención prolongada.',
        decision:
          'El diseño incluyó nodos master dedicados y nodos de datos en ambos sitios, Transport Layer Security (TLS), Active Directory sobre Lightweight Directory Access Protocol (LDAP) seguro, auditoría y shard allocation awareness por sitio. Luego se propuso una migración a índices nuevos basados en el modo LogsDB junto con el paso a una suscripción Enterprise, y se validó el dimensionamiento con Elastic.',
        outcome:
          'Se adquirieron las licencias Enterprise y la migración de los datos existentes a índices LogsDB está en curso, y el dimensionamiento estima una reducción del 30,75% del almacenamiento.',
        tools: ['Elasticsearch', 'Kibana', 'LogsDB', 'Metricbeat', 'Active Directory', 'TLS'],
      },
      {
        client: 'OpenTelemetry en SAP BTP',
        sector: 'Plataforma empresarial',
        result: '4',
        resultUnit: 'áreas',
        resultLabel: 'Cada una con su propio OpenTelemetry Collector',
        context:
          'Los equipos de SAP Business Technology Platform (BTP) de una gran empresa de e-commerce operan aplicaciones Cloud Application Programming (CAP) y Python en varios subaccounts de Cloud Foundry, y su telemetría no se atribuía de forma consistente a un entorno en Elastic.',
        challenge:
          'Cada área seguía su propia convención de nombres, las credenciales debían quedar fuera de las aplicaciones, y desarrollo (DEV), pruebas de aceptación de usuario (UAT) y producción (PRD) debían distinguirse de forma confiable.',
        decision:
          'Un OpenTelemetry Collector por área y entorno, empaquetado como aplicación multitarget (MTA) y desplegado mediante el pipeline de entrega. Cada collector guarda las credenciales de Elastic APM en un user-provided service y fuerza una etiqueta de entorno canónica en todo lo que reenvía.',
        outcome:
          'Cuatro collectors, uno por área, envían trazas, métricas y logs a Elastic APM, con un dashboard de salud de 14 paneles. Rastrear una etiqueta de entorno incorrecta que afectaba a 73 mil documentos llevó a detectar una promoción detenida en el pipeline.',
        tools: ['OpenTelemetry Collector', 'Cloud Foundry', 'SAP CAP', 'Elastic APM', 'Kibana'],
      },
    ],
  },
};
