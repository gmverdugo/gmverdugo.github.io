'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'en' | 'es'

/* ─── Translation structure ─────────────────────────────────────────────── */
const en = {
  sidebar: {
    subtitle: 'Enterprise Observability',
    available: 'Available',
    groups: ['Portfolio', 'Profile', 'Hire Me'] as string[],
    items: ['Overview', 'Architecture', 'Client Work', 'Lab', 'Certifications', 'Resume', 'Engagement', 'Services', 'Contact'] as string[],
    remote: 'Remote-First',
    worldwide: 'Worldwide',
    toggleLabel: 'Language',
  },
  hero: {
    badge: 'Enterprise Observability Architect',
    h1: ['Designing Observability', 'Platforms That Scale.'] as string[],
    desc: 'I architect and build secure, reliable and cost-efficient observability platforms that deliver real operational intelligence at enterprise scale.',
  },
  metrics: {
    cards: [
      { label: 'Data Processed',      sublabel: 'Enterprise Scale' },
      { label: 'Integrated Sources',   sublabel: 'Logs, Metrics, Traces' },
      { label: 'Elastic Agents',       sublabel: 'Deployed' },
      { label: 'Records Analyzed',     sublabel: 'Operational Intelligence' },
      { label: 'Compliance Retention', sublabel: 'Audit & Compliance' },
      { label: 'Storage Reduction',    sublabel: 'Architecture Optimization' },
    ],
  },
  caseStudies: {
    badge: 'Client Engagements',
    title: 'Selected Work',
    items: [
      {
        badge: 'Observability + SIEM · Ongoing',
        context: "Latin America's largest e-commerce platform",
        description: 'Unified observability and security monitoring platform built from scratch — 30+ heterogeneous data sources, real-time threat detection, and SOC dashboards.',
      },
      {
        badge: 'Architecture Migration · Ongoing',
        context: 'Enterprise banking · on-premise',
        description: 'Full redesign of the Elasticsearch cluster architecture — Platinum→Enterprise, LogsDB, ILM tiering, and forensic-grade audit retention for banking compliance.',
      },
      {
        badge: 'Standardization · Platform',
        context: 'Hybrid cloud · multi-environment',
        description: 'Telemetry standardization across SAP BTP and Cloud Foundry — correlating logs, metrics, and traces from heterogeneous environments under a single Elastic backend.',
      },
    ],
  },
  principles: {
    badge: 'Engineering Principles',
    title: 'How I Build',
    items: [
      'Security by Design',
      'Observability as a Product',
      'Infrastructure as Code',
      'Automation Over Manual Operations',
      'Operational Simplicity',
      'Scalable & Resilient Architecture',
      'Continuous Improvement',
      'Knowledge Transfer Included',
    ] as string[],
    focusBadge: 'Current Focus',
    focus: [
      'Enterprise Observability',
      'Security Monitoring & SIEM',
      'OpenTelemetry Adoption',
      'Platform Engineering',
      'Elasticsearch Architecture',
    ] as string[],
  },
  homeLab: {
    badge: 'Home Lab',
    title: 'Continuous Experimentation',
    body: 'Exploring technologies, automating solutions, and validating patterns before recommending them at enterprise scale.',
  },
  engagement: {
    badge: 'Engagement Models',
    title: 'How We Work Together',
    body: 'Project · Retainer · Staff Augmentation · Hourly',
    items: [
      'Architecture Advisory',
      'Platform Assessments',
      'Observability Programs',
      'Elasticsearch Optimization',
      'Security Monitoring · SIEM',
      'Knowledge Transfer',
      'DevSecOps Enablement',
      'Technical Leadership',
    ] as string[],
  },
  contractor: {
    badge: 'Areas of Expertise',
    title: 'Enterprise Consulting Services',
    body: 'Senior-level Elasticsearch expertise — no agency overhead. Direct engagement, measurable results, and knowledge transfer included in every project.',
    timezone: 'Remote-first · UTC-3 · EN/ES',
    servicesBadge: 'Services',
    retainerBadge: 'Retainer Packages',
    mostPopular: 'Most Popular',
    ctaTitle: 'Ready to discuss your project?',
    ctaBody: 'Direct engagement · No agency overhead · First call free',
    ctaButton: 'Get in Touch',
    services: [
      {
        title: 'Architecture & Elasticsearch Design',
        desc: 'Cluster design, capacity planning, multi-DC strategy, disaster recovery, and migration from legacy platforms (Splunk, ELK 6.x, Graylog).',
        duration: '2–4 weeks',
      },
      {
        title: 'Security Monitoring & SIEM',
        desc: 'Elastic Security deployment, MITRE ATT&CK detection rules, ML anomaly detection, SOC dashboards, and compliance monitoring (PCI-DSS, SOC 2, HIPAA).',
        duration: '4–8 weeks',
      },
      {
        title: 'Observability Platform',
        desc: 'Fleet + Elastic Agent rollout, unified logs/metrics/traces/APM, custom integrations, and alerting pipelines (PagerDuty, OpsGenie, Slack, MS Teams).',
        duration: '6–12 weeks',
      },
      {
        title: 'Performance & Cost Optimization',
        desc: 'Cluster health profiling, LogsDB storage reduction (+30%), ILM/data tier tuning, shard strategy, and infrastructure rightsizing.',
        duration: '3–6 weeks',
      },
      {
        title: 'Migration & Modernization',
        desc: 'Zero-downtime migrations across versions and platforms, data validation, cloud ↔ on-prem transitions, and rollback procedures.',
        duration: '8–16 weeks',
      },
      {
        title: 'DevSecOps & Infrastructure as Code',
        desc: 'Terraform modules, Ansible playbooks, CI/CD pipelines (Jenkins, GitLab, GitHub Actions), ECK operator, and security hardening automation.',
        duration: '4–8 weeks',
      },
      {
        title: 'Training & Knowledge Transfer',
        desc: 'Elasticsearch admin bootcamp (3–5 days), Elastic SIEM operations workshop, observability best practices, and one-on-one mentoring.',
        duration: '2–5 days',
      },
      {
        title: 'Industrial & OT/IT Monitoring',
        desc: 'SCADA/OPC-UA/IoT data ingestion into Elasticsearch, real-time operational alerting, and OT+IT convergence for Oil & Gas, mining, and utilities infrastructure.',
        duration: '6–10 weeks',
        badge: 'O&G · Mining · Energy',
      },
      {
        title: 'Predictive Maintenance & Asset Intelligence',
        desc: 'Sensor data pipelines, Elastic ML anomaly detection for equipment health, vibration analysis, and remaining useful life prediction for industrial assets.',
        duration: '8–12 weeks',
        badge: 'Mining · O&G · Industrial',
      },
      {
        title: 'Regulatory Compliance & Audit Infrastructure',
        desc: 'Audit trail design for ENARGAS, Secretaría de Energía, SEGEMAR, and financial regulators. 365+ day retention, tamper-evident logging, and compliance dashboards.',
        duration: '4–8 weeks',
        badge: 'Energy · Banking · Mining',
      },
    ],
    retainers: [
      {
        tier: 'Essential',
        features: [
          'Quarterly architecture review',
          'Performance monitoring & recommendations',
          'Email support — 24h response',
          'Version upgrade planning',
        ] as string[],
      },
      {
        tier: 'Professional',
        features: [
          'Everything in Essential',
          'Monthly security review & threat tuning',
          'Priority support — 4h response',
          'Proactive capacity planning',
          'Quarterly training session',
        ] as string[],
      },
      {
        tier: 'Enterprise',
        features: [
          'Everything in Professional',
          'Dedicated support — 1h response',
          '24/7 on-call for critical issues',
          'Monthly strategic advisory',
          'Continuous optimization initiatives',
          'Executive KPI reporting',
        ] as string[],
      },
    ],
  },
  certifications: {
    badge: 'Certifications',
    title: 'Credentials & Technical Training',
    elasticBadge: 'Elastic · Industry Certification',
    elasticTitle: 'Elastic Certified Observability Engineer',
    elasticDesc: 'Validates deep expertise in building enterprise observability solutions with Elastic Stack — APM, distributed tracing, log analytics, metrics, and synthetic monitoring.',
    verified: 'Verified Credential',
    meliLabel: "Internal Technical Training · Latin America's Largest E-Commerce & Fintech",
    eduTitle: 'Técnico en Redes de Datos y Telecomunicaciones',
    eduSub: 'Universidad Nacional de Cuyo (UNCUYO) · 2022',
    certified: 'Certified',
  },
  resume: {
    badge: 'Resume',
    subtitle: 'Elasticsearch Solution Architect · Observability & Security Engineer',
    location: 'Mendoza, Argentina — Remote-First',
    availability: 'Available for engagements',
    downloadCV: 'Download CV',
    kpis: [
      { label: 'Years enterprise experience' },
      { label: 'Daily ingest at peak scale' },
      { label: 'Infra optimization (ICBC)' },
      { label: 'Agents managed simultaneously' },
    ],
    experienceBadge: 'Experience',
    skillsBadge: 'Technical Skills',
    coreStack: 'Core Stack',
    educationBadge: 'Education',
    certTitle: 'Elastic Certified Observability Engineer',
    certSub: 'Official Elastic Certification',
    certDesc: 'Validates advanced expertise in observability, monitoring, security monitoring, and Elasticsearch performance optimization.',
    eduTitle: 'Técnico en Redes de Datos y Telecomunicaciones',
    eduSub: 'Universidad Nacional de Cuyo (UNCUYO) · 2019–2022',
    eduDesc: 'Network infrastructure, security protocols, telecommunications',
    skillGroupTitles: ['Elastic Stack', 'Security & SIEM', 'Cloud & Infra', 'DevSecOps & IaC', 'Observability Tools'] as string[],
    experience: [
      {
        role: 'Elasticsearch Solution Architect & Security Engineer',
        clients: [
          {
            label: "Observability + SIEM · Latin America's largest e-commerce",
            points: [
              'Architected unified observability platform — 320 GB/day, 30+ heterogeneous data sources (ECP, CP, CTM integrations)',
              'Deployed SIEM on 102 Elastic Agents: real-time detection of unauthorized access, privilege escalation, and data exfiltration patterns',
              'Built SOC dashboards and automated alerting workflows integrating OpsGenie and Google Chat — reduced MTTD significantly',
              'Implemented synthetic monitoring and 10B+ records analytics for proactive issue detection',
            ] as string[],
          },
          {
            label: 'Architecture Migration + Compliance · On-premise banking',
            points: [
              'Redesigned cluster architecture: 93-node Platinum → 16-ERU Enterprise, 83% infrastructure reduction',
              'Implemented LogsDB achieving 30.75% storage reduction; ILM with frozen tiers for cost-optimized data lifecycle',
              'Designed RBAC, TLS/SSL encryption, and field-level security for financial data protection',
              'Maintained 395-day forensic audit trail meeting banking regulatory compliance (financial services)',
            ] as string[],
          },
        ],
      },
      {
        role: 'Systems Administrator & Infrastructure Security Engineer',
        clients: [
          {
            label: 'Enterprise Linux · Security Hardening · Gaming',
            points: [
              'Managed Linux enterprise infrastructure with 99.9% uptime SLA for gaming operations',
              'Security hardening of production systems — reduced attack surface and vulnerability exposure',
              'Automated deployment workflows, reducing rollout time by 60%; built disaster recovery procedures',
            ] as string[],
          },
        ],
      },
    ],
  },
  architecture: {
    badge: 'Featured Architecture',
    title: 'Enterprise Observability Hub',
    desc: 'Unified platform for logs, metrics, traces, and security — from ingestion to operational intelligence.',
    metricLabels: ['Processed', 'Sources', 'Agents'] as string[],
    cta: 'View Architecture',
    cols: ['DATA SOURCES', 'COLLECT', 'PROCESS & STORE', 'ANALYZE & ACT'] as string[],
    autoLabel: 'AUTOMATE & ORCHESTRATE',
  },
  footer: {
    quote: '"I don\'t just implement tools. I design platforms that deliver operational intelligence, security and business value at enterprise scale."',
    title: 'Enterprise Observability Architect',
    availability: 'Available for new engagements · Remote · EN / ES',
  },
}

type Translations = typeof en

const es: Translations = {
  sidebar: {
    subtitle: 'Observabilidad Enterprise',
    available: 'Disponible',
    groups: ['Portafolio', 'Perfil', 'Contrátame'],
    items: ['Inicio', 'Arquitectura', 'Proyectos', 'Lab', 'Certificaciones', 'CV', 'Modalidades', 'Servicios', 'Contacto'],
    remote: 'Trabajo Remoto',
    worldwide: 'Worldwide',
    toggleLabel: 'Idioma',
  },
  hero: {
    badge: 'Arquitecto de Observabilidad Enterprise',
    h1: ['Diseño Plataformas de', 'Observabilidad que Escalan.'],
    desc: 'Diseño y construyo plataformas de observabilidad seguras, confiables y eficientes en costos, que entregan inteligencia operacional real a escala empresarial.',
  },
  metrics: {
    cards: [
      { label: 'Datos Procesados',     sublabel: 'Escala Enterprise' },
      { label: 'Fuentes Integradas',   sublabel: 'Logs, Métricas, Trazas' },
      { label: 'Elastic Agents',       sublabel: 'Desplegados' },
      { label: 'Registros Analizados', sublabel: 'Inteligencia Operacional' },
      { label: 'Retención Compliance', sublabel: 'Auditoría y Cumplimiento' },
      { label: 'Reducción Storage',    sublabel: 'Optimización de Arquitectura' },
    ],
  },
  caseStudies: {
    badge: 'Proyectos con Clientes',
    title: 'Trabajo Selecto',
    items: [
      {
        badge: 'Observabilidad + SIEM · En curso',
        context: 'Mayor plataforma de e-commerce de Latinoamérica',
        description: 'Plataforma unificada de observabilidad y monitoreo de seguridad construida desde cero — más de 30 fuentes de datos heterogéneas, detección de amenazas en tiempo real y dashboards SOC.',
      },
      {
        badge: 'Migración de Arquitectura · En curso',
        context: 'Banca empresarial · infraestructura on-premise',
        description: 'Rediseño completo de la arquitectura del cluster Elasticsearch — Platinum→Enterprise, LogsDB, ILM tiering y retención forense para cumplimiento bancario.',
      },
      {
        badge: 'Estandarización · Plataforma',
        context: 'Nube híbrida · multi-entorno',
        description: 'Estandarización de telemetría en SAP BTP y Cloud Foundry — correlacionando logs, métricas y trazas de entornos heterogéneos bajo un único backend Elastic.',
      },
    ],
  },
  principles: {
    badge: 'Principios de Ingeniería',
    title: 'Cómo Construyo',
    items: [
      'Seguridad por Diseño',
      'Observabilidad como Producto',
      'Infraestructura como Código',
      'Automatización vs. Operación Manual',
      'Simplicidad Operacional',
      'Arquitectura Escalable y Resiliente',
      'Mejora Continua',
      'Transferencia de Conocimiento Incluida',
    ],
    focusBadge: 'Foco Actual',
    focus: [
      'Observabilidad Enterprise',
      'Monitoreo de Seguridad & SIEM',
      'Adopción de OpenTelemetry',
      'Platform Engineering',
      'Arquitectura Elasticsearch',
    ],
  },
  homeLab: {
    badge: 'Home Lab',
    title: 'Experimentación Continua',
    body: 'Explorando tecnologías, automatizando soluciones y validando patrones antes de recomendarlos a escala empresarial.',
  },
  engagement: {
    badge: 'Modalidades de Trabajo',
    title: 'Cómo Trabajamos Juntos',
    body: 'Proyecto · Retainer · Staff Augmentation · Por Hora',
    items: [
      'Consultoría de Arquitectura',
      'Evaluación de Plataformas',
      'Programas de Observabilidad',
      'Optimización Elasticsearch',
      'Monitoreo de Seguridad · SIEM',
      'Transferencia de Conocimiento',
      'Habilitación DevSecOps',
      'Liderazgo Técnico',
    ],
  },
  contractor: {
    badge: 'Áreas de Expertise',
    title: 'Consultoría Especializada',
    body: 'Expertise senior en Elasticsearch — sin intermediarios. Trato directo, resultados medibles y transferencia de conocimiento incluida en cada proyecto.',
    timezone: 'Trabajo remoto · UTC-3 · ES/EN',
    servicesBadge: 'Servicios',
    retainerBadge: 'Paquetes Retainer',
    mostPopular: 'Más Popular',
    ctaTitle: '¿Listo para hablar de tu proyecto?',
    ctaBody: 'Trato directo · Sin intermediarios · Primera llamada sin costo',
    ctaButton: 'Hablemos',
    services: [
      {
        title: 'Arquitectura y Diseño Elasticsearch',
        desc: 'Diseño de cluster, planificación de capacidad, estrategia multi-DC, recuperación ante desastres y migración desde plataformas legacy (Splunk, ELK 6.x, Graylog).',
        duration: '2–4 semanas',
      },
      {
        title: 'Monitoreo de Seguridad & SIEM',
        desc: 'Despliegue de Elastic Security, reglas de detección MITRE ATT&CK, detección de anomalías con ML, dashboards SOC y monitoreo de compliance (PCI-DSS, SOC 2, HIPAA).',
        duration: '4–8 semanas',
      },
      {
        title: 'Plataforma de Observabilidad',
        desc: 'Despliegue de Fleet + Elastic Agent, unificación de logs/métricas/trazas/APM, integraciones personalizadas y pipelines de alertas (PagerDuty, OpsGenie, Slack, MS Teams).',
        duration: '6–12 semanas',
      },
      {
        title: 'Optimización de Performance y Costos',
        desc: 'Profiling de salud del cluster, reducción de almacenamiento con LogsDB (+30%), tuning ILM/data tiers, estrategia de shards y rightsizing de infraestructura.',
        duration: '3–6 semanas',
      },
      {
        title: 'Migración y Modernización',
        desc: 'Migraciones sin downtime entre versiones y plataformas, validación de datos, transiciones cloud ↔ on-prem y procedimientos de rollback.',
        duration: '8–16 semanas',
      },
      {
        title: 'DevSecOps e Infraestructura como Código',
        desc: 'Módulos Terraform, playbooks Ansible, pipelines CI/CD (Jenkins, GitLab, GitHub Actions), operador ECK y automatización de hardening de seguridad.',
        duration: '4–8 semanas',
      },
      {
        title: 'Capacitación y Transferencia de Conocimiento',
        desc: 'Bootcamp de administración Elasticsearch (3–5 días), taller de operaciones Elastic SIEM, mejores prácticas de observabilidad y mentoría individual.',
        duration: '2–5 días',
      },
      {
        title: 'Monitoreo Industrial OT/IT',
        desc: 'Ingesta de datos SCADA/OPC-UA/IoT en Elasticsearch, alertas operacionales en tiempo real y convergencia OT+IT para Oil & Gas, minería e infraestructura de utilities.',
        duration: '6–10 semanas',
        badge: 'Oil & Gas · Minería · Energía',
      },
      {
        title: 'Mantenimiento Predictivo e Inteligencia de Activos',
        desc: 'Pipelines de datos de sensores, detección de anomalías ML para salud de equipos, análisis de vibración y predicción de vida útil restante de activos industriales.',
        duration: '8–12 semanas',
        badge: 'Minería · Oil & Gas · Industrial',
      },
      {
        title: 'Compliance Regulatorio e Infraestructura de Auditoría',
        desc: 'Diseño de trazabilidad para ENARGAS, Secretaría de Energía, SEGEMAR y reguladores financieros. Retención +365 días, logging a prueba de manipulación y dashboards de cumplimiento.',
        duration: '4–8 semanas',
        badge: 'Energía · Banca · Minería',
      },
    ],
    retainers: [
      {
        tier: 'Esencial',
        features: [
          'Revisión de arquitectura trimestral',
          'Monitoreo de performance y recomendaciones',
          'Soporte por email — respuesta en 24h',
          'Planificación de actualizaciones de versión',
        ],
      },
      {
        tier: 'Profesional',
        features: [
          'Todo lo de Esencial',
          'Revisión mensual de seguridad y ajuste de amenazas',
          'Soporte prioritario — respuesta en 4h',
          'Planificación de capacidad proactiva',
          'Sesión de capacitación trimestral',
        ],
      },
      {
        tier: 'Enterprise',
        features: [
          'Todo lo de Profesional',
          'Soporte dedicado — respuesta en 1h',
          'On-call 24/7 para incidentes críticos',
          'Asesoría estratégica mensual',
          'Iniciativas de optimización continua',
          'Reportes de KPIs ejecutivos',
        ],
      },
    ],
  },
  certifications: {
    badge: 'Certificaciones',
    title: 'Credenciales y Formación Técnica',
    elasticBadge: 'Elastic · Certificación Oficial',
    elasticTitle: 'Elastic Certified Observability Engineer',
    elasticDesc: 'Valida expertise profundo en la construcción de soluciones de observabilidad enterprise con Elastic Stack — APM, trazado distribuido, análisis de logs, métricas y monitoreo sintético.',
    verified: 'Credencial Verificada',
    meliLabel: 'Formación Técnica Interna · Mayor E-Commerce & Fintech de Latinoamérica',
    eduTitle: 'Técnico en Redes de Datos y Telecomunicaciones',
    eduSub: 'Universidad Nacional de Cuyo (UNCUYO) · 2022',
    certified: 'Certificado',
  },
  resume: {
    badge: 'Currículum',
    subtitle: 'Arquitecto de Soluciones Elasticsearch · Ingeniero de Observabilidad y Seguridad',
    location: 'Mendoza, Argentina — Trabajo Remoto',
    availability: 'Disponible para proyectos',
    downloadCV: 'Descargar CV',
    kpis: [
      { label: 'Años de experiencia enterprise' },
      { label: 'Ingesta diaria en pico de escala' },
      { label: 'Optimización de infra (ICBC)' },
      { label: 'Agentes gestionados simultáneamente' },
    ],
    experienceBadge: 'Experiencia',
    skillsBadge: 'Habilidades Técnicas',
    coreStack: 'Stack Principal',
    educationBadge: 'Educación',
    certTitle: 'Elastic Certified Observability Engineer',
    certSub: 'Certificación Oficial de Elastic',
    certDesc: 'Valida expertise avanzado en observabilidad, monitoreo, monitoreo de seguridad y optimización de performance en Elasticsearch.',
    eduTitle: 'Técnico en Redes de Datos y Telecomunicaciones',
    eduSub: 'Universidad Nacional de Cuyo (UNCUYO) · 2019–2022',
    eduDesc: 'Infraestructura de redes, protocolos de seguridad, telecomunicaciones',
    skillGroupTitles: ['Elastic Stack', 'Seguridad & SIEM', 'Cloud e Infraestructura', 'DevSecOps & IaC', 'Herramientas de Observabilidad'],
    experience: [
      {
        role: 'Arquitecto de Soluciones Elasticsearch e Ingeniero de Seguridad',
        clients: [
          {
            label: 'Observabilidad + SIEM · Mayor e-commerce de Latinoamérica',
            points: [
              'Arquitecté plataforma de observabilidad unificada — 320 GB/día, más de 30 fuentes de datos heterogéneas (integraciones ECP, CP, CTM)',
              'Desplegué SIEM en 102 Elastic Agents: detección en tiempo real de acceso no autorizado, escalada de privilegios y patrones de exfiltración de datos',
              'Construí dashboards SOC y flujos de alerta automatizados integrando OpsGenie y Google Chat — reducción significativa del MTTD',
              'Implementé monitoreo sintético y analytics de más de 10B registros para detección proactiva de incidentes',
            ],
          },
          {
            label: 'Migración de Arquitectura + Compliance · Banca on-premise',
            points: [
              'Rediseñé arquitectura del cluster: 93 nodos Platinum → 16-ERU Enterprise, reducción de infraestructura del 83%',
              'Implementé LogsDB logrando 30,75% de reducción de almacenamiento; ILM con tiers frozen para ciclo de vida optimizado en costos',
              'Diseñé RBAC, cifrado TLS/SSL y seguridad a nivel de campo para protección de datos financieros',
              'Mantuve trazabilidad forense de 395 días cumpliendo requisitos regulatorios bancarios (servicios financieros)',
            ],
          },
        ],
      },
      {
        role: 'Administrador de Sistemas e Ingeniero de Seguridad de Infraestructura',
        clients: [
          {
            label: 'Linux Enterprise · Hardening de Seguridad · Gaming',
            points: [
              'Gestioné infraestructura Linux enterprise con SLA de 99,9% de uptime para operaciones de gaming',
              'Hardening de seguridad de sistemas de producción — reducción de superficie de ataque y exposición a vulnerabilidades',
              'Automaticé flujos de despliegue, reduciendo tiempos de rollout en un 60%; construí procedimientos de recuperación ante desastres',
            ],
          },
        ],
      },
    ],
  },
  architecture: {
    badge: 'Arquitectura Destacada',
    title: 'Hub de Observabilidad Enterprise',
    desc: 'Plataforma unificada de logs, métricas, trazas y seguridad — desde la ingesta hasta la inteligencia operacional.',
    metricLabels: ['Procesados', 'Fuentes', 'Agentes'],
    cta: 'Ver Arquitectura',
    cols: ['FUENTES DE DATOS', 'RECOLECTAR', 'PROCESAR Y ALMACENAR', 'ANALIZAR Y ACTUAR'],
    autoLabel: 'AUTOMATIZAR Y ORQUESTAR',
  },
  footer: {
    quote: '"No solo implemento herramientas. Diseño plataformas que entregan inteligencia operacional, seguridad y valor de negocio a escala empresarial."',
    title: 'Arquitecto de Observabilidad Enterprise',
    availability: 'Disponible para nuevos proyectos · Remoto · ES / EN',
  },
}

export const translations: Record<Lang, Translations> = { en, es }

/* ─── Context ───────────────────────────────────────────────────────────── */
interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-lang') as Lang | null
    if (stored === 'en' || stored === 'es') setLang(stored)
  }, [])

  const toggle = () =>
    setLang(prev => {
      const next: Lang = prev === 'en' ? 'es' : 'en'
      localStorage.setItem('portfolio-lang', next)
      return next
    })

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
