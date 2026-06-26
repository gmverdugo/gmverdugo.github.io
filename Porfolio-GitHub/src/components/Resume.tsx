import { Download, MapPin, Calendar, ExternalLink } from 'lucide-react'
import {
  SiElasticsearch,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiDocker,
  SiPython,
  SiGithubactions,
  SiOpentelemetry,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

/* ── Experience data ─────────────────────────────────────────────── */
const experience = [
  {
    role:    'Elasticsearch Solution Architect & Security Engineer',
    company: 'TSOFT',
    period:  'Jul 2022 – Present',
    color:   '#3b82f6',
    clients: [
      {
        name:   'MercadoLibre',
        label:  "Observability + SIEM · Latin America's largest e-commerce",
        color:  '#3b82f6',
        points: [
          'Architected unified observability platform — 320 GB/day, 30+ heterogeneous data sources (ECP, CP, CTM integrations)',
          'Deployed SIEM on 102 Elastic Agents: real-time detection of unauthorized access, privilege escalation, and data exfiltration patterns',
          'Built SOC dashboards and automated alerting workflows integrating OpsGenie and Google Chat — reduced MTTD significantly',
          'Implemented synthetic monitoring and 10B+ records analytics for proactive issue detection',
        ],
      },
      {
        name:   'ICBC Bank',
        label:  'Architecture Migration + Compliance · On-premise banking',
        color:  '#10b981',
        points: [
          'Redesigned cluster architecture: 93-node Platinum → 16-ERU Enterprise, 83% infrastructure reduction',
          'Implemented LogsDB achieving 30.75% storage reduction; ILM with frozen tiers for cost-optimized data lifecycle',
          'Designed RBAC, TLS/SSL encryption, and field-level security for financial data protection',
          'Maintained 395-day forensic audit trail meeting banking regulatory compliance (financial services)',
        ],
      },
    ],
  },
  {
    role:    'Systems Administrator & Infrastructure Security Engineer',
    company: 'Mendoza Central Entretenimientos S.A.',
    period:  'Jun 2019 – Jul 2022',
    color:   '#10b981',
    clients: [
      {
        name:   'Infrastructure',
        label:  'Enterprise Linux · Security Hardening · Gaming',
        color:  '#10b981',
        points: [
          'Managed Linux enterprise infrastructure with 99.9% uptime SLA for gaming operations',
          'Security hardening of production systems — reduced attack surface and vulnerability exposure',
          'Automated deployment workflows, reducing rollout time by 60%; built disaster recovery procedures',
        ],
      },
    ],
  },
]

/* ── Skills — merged from both CVs ──────────────────────────────── */
const skillGroups = [
  {
    title: 'Elastic Stack',
    color: '#00bfb3',
    items: ['Elasticsearch 8.x/9.x', 'Kibana', 'Fleet', 'Elastic Agent', 'Logstash', 'APM', 'LogsDB', 'ILM', 'Data Streams'],
  },
  {
    title: 'Security & SIEM',
    color: '#f59e0b',
    items: ['Elastic Security / SIEM', 'Threat Detection Rules', 'RBAC & Field-Level Security', 'TLS/SSL Encryption', 'Incident Response', 'Forensic Audit', 'Threat Hunting', 'SOC Dashboards', 'MTTD Optimization'],
  },
  {
    title: 'Cloud & Infra',
    color: '#8b5cf6',
    items: ['AWS (EC2 · S3 · VPC)', 'Kubernetes', 'OpenShift', 'Docker', 'MinIO', 'Multi-DC', 'Frozen Tier'],
  },
  {
    title: 'DevSecOps & IaC',
    color: '#06b6d4',
    items: ['Terraform', 'Ansible', 'Jenkins', 'GitLab CI/CD', 'Python', 'Bash', 'Security Automation', 'Container Security'],
  },
  {
    title: 'Observability Tools',
    color: '#ec4899',
    items: ['OpenTelemetry', 'Datadog', 'Dynatrace', 'Prometheus', 'Grafana', 'OpsGenie', 'PagerDuty'],
  },
]

/* ── Key metrics ────────────────────────────────────────────────── */
const kpis = [
  { value: '5+',    label: 'Years enterprise experience' },
  { value: '320 GB',label: 'Daily ingest at peak scale' },
  { value: '83%',   label: 'Infra optimization (ICBC)' },
  { value: '102',   label: 'Agents managed simultaneously' },
]

/* ── Tech icon row ──────────────────────────────────────────────── */
const techIcons = [
  { Icon: SiElasticsearch, color: '#00bfb3' },
  { Icon: FaAws,           color: '#ff9900' },
  { Icon: SiOpentelemetry, color: '#4285f4' },
  { Icon: SiKubernetes,    color: '#326ce5' },
  { Icon: SiTerraform,     color: '#844fba' },
  { Icon: SiAnsible,       color: '#cc0000' },
  { Icon: SiDocker,        color: '#2496ed' },
  { Icon: SiPython,        color: '#3776ab' },
  { Icon: SiGithubactions, color: '#2088ff' },
]

export default function Resume() {
  return (
    <div
      className="rounded-2xl p-8 transition-all duration-300 hover:border-white/10"
      style={{
        background:    'rgba(17,24,39,0.55)',
        border:        '1px solid rgba(255,255,255,0.06)',
        backdropFilter:'blur(12px) saturate(180%)',
      }}
    >
      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#3b82f6' }}>
            Resume
          </div>
          <h2 className="mt-2 text-2xl font-bold" style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}>
            Gonzalo Verdugo
          </h2>
          <p className="mt-1 text-[13px]" style={{ color: '#94a3b8' }}>
            Elasticsearch Solution Architect · Observability &amp; Security Engineer
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]" style={{ color: '#64748b' }}>
            <span className="flex items-center gap-1">
              <MapPin size={11} /> Mendoza, Argentina — Remote-First
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} /> Available for engagements
            </span>
          </div>
        </div>

        <div className="flex flex-shrink-0 flex-wrap gap-2">
          <a
            href="/Gonzalo_Verdugo_CV.pdf"
            download
            className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-opacity hover:opacity-90"
            style={{
              background: 'rgba(59,130,246,0.15)',
              border:     '1px solid rgba(59,130,246,0.3)',
              color:      '#3b82f6',
            }}
          >
            <Download size={13} />
            Download CV
          </a>
          <a
            href="https://linkedin.com/in/gmv88"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-opacity hover:opacity-90"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border:     '1px solid rgba(255,255,255,0.08)',
              color:      '#94a3b8',
            }}
          >
            <ExternalLink size={13} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* ── KPI bar ─────────────────────────────────────────────── */}
      <div
        className="mb-8 grid grid-cols-2 gap-3 rounded-[16px] p-5 sm:grid-cols-4"
        style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        {kpis.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-xl font-bold" style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}>
              {value}
            </span>
            <span className="text-[11px] leading-snug" style={{ color: '#64748b' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* ── Main grid ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_320px]">

        {/* ── Experience column ─────────────────────────────────── */}
        <div>
          <div className="font-geist mb-5 text-[10px] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#3b82f6' }}>
            Experience
          </div>

          <div className="flex flex-col gap-7">
            {experience.map(({ role, company, period, color, clients }) => (
              <div key={company} className="relative pl-4"
                style={{ borderLeft: `2px solid ${color}25` }}>
                <div
                  className="absolute -left-[5px] top-[5px] h-2.5 w-2.5 rounded-full"
                  style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
                />
                <p className="mb-0.5 text-[13px] font-semibold" style={{ color: '#f8fafc' }}>
                  {role}
                </p>
                <div className="mb-4 flex items-center gap-2 text-[11px]" style={{ color: '#64748b' }}>
                  <span className="font-semibold" style={{ color: `${color}cc` }}>{company}</span>
                  <span>·</span>
                  <span>{period}</span>
                </div>

                <div className="flex flex-col gap-4">
                  {clients.map(({ name, label, color: cColor, points }) => (
                    <div key={name}
                      className="rounded-[12px] p-3.5"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border:     '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span
                          className="rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide"
                          style={{ background: `${cColor}18`, color: cColor }}
                        >
                          {name}
                        </span>
                        <span className="text-[11px]" style={{ color: '#64748b' }}>{label}</span>
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {points.map(p => (
                          <li key={p} className="flex items-start gap-2 text-[12px] leading-relaxed"
                            style={{ color: '#94a3b8' }}>
                            <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full"
                              style={{ background: '#475569' }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills column ─────────────────────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Skill groups */}
          <div>
            <div className="font-geist mb-4 text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: '#3b82f6' }}>
              Technical Skills
            </div>
            <div className="flex flex-col gap-4">
              {skillGroups.map(({ title, color, items }) => (
                <div key={title}>
                  <div className="mb-2 text-[11px] font-semibold" style={{ color }}>
                    {title}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(item => (
                      <span key={item}
                        className="rounded-md px-2 py-0.5 text-[11px]"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border:     '1px solid rgba(255,255,255,0.07)',
                          color:      '#94a3b8',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core stack icons */}
          <div
            className="rounded-[14px] p-4"
            style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="font-geist mb-3 text-[11px] font-bold uppercase tracking-[0.1em]"
              style={{ color: '#64748b' }}>
              Core Stack
            </div>
            <div className="flex flex-wrap gap-3">
              {techIcons.map(({ Icon, color }, i) => (
                <Icon key={i} size={18} style={{ color, opacity: 0.85 }} />
              ))}
            </div>
          </div>

          {/* Certification badge */}
          <div
            className="rounded-[14px] p-4"
            style={{
              background: 'rgba(240,78,35,0.05)',
              border:     '1px solid rgba(240,78,35,0.2)',
            }}
          >
            <div className="mb-2 flex items-center gap-2.5">
              <div
                className="font-geist flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
                style={{ background: 'rgba(240,78,35,0.15)', color: '#f04e23' }}
              >
                ECO
              </div>
              <div>
                <p className="text-[11px] font-semibold" style={{ color: '#f8fafc' }}>
                  Elastic Certified Observability Engineer
                </p>
                <p className="text-[12px]" style={{ color: '#64748b' }}>
                  Official Elastic Certification
                </p>
              </div>
            </div>
            <p className="text-[12px] leading-relaxed" style={{ color: '#64748b' }}>
              Validates advanced expertise in observability, monitoring, security monitoring, and Elasticsearch performance optimization.
            </p>
          </div>

          {/* Education */}
          <div
            className="rounded-[14px] p-4"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border:     '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="font-geist mb-2 text-[11px] font-bold uppercase tracking-[0.1em]"
              style={{ color: '#64748b' }}>
              Education
            </div>
            <p className="text-[11px] font-semibold" style={{ color: '#f8fafc' }}>
              Técnico en Redes de Datos y Telecomunicaciones
            </p>
            <p className="text-[12px]" style={{ color: '#64748b' }}>
              Universidad Nacional de Cuyo (UNCUYO) · 2019–2022
            </p>
            <p className="mt-1 text-[12px]" style={{ color: '#64748b' }}>
              Network infrastructure, security protocols, telecommunications
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
