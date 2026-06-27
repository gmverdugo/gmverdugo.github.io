'use client'

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
import { useLanguage } from '@/context/LanguageContext'

/* ── Static metadata (non-translatable) ─────────────────────────────── */
const experienceMeta = [
  {
    company: 'TSOFT',
    period:  'Jul 2022 – Present',
    color:   '#3b82f6',
    clients: [
      { name: 'MercadoLibre', color: '#3b82f6' },
      { name: 'ICBC Bank',    color: '#10b981' },
    ],
  },
  {
    company: 'Mendoza Central Entretenimientos S.A.',
    period:  'Jun 2019 – Jul 2022',
    color:   '#10b981',
    clients: [
      { name: 'Infrastructure', color: '#10b981' },
    ],
  },
]

const skillGroupsMeta = [
  { color: '#00bfb3', items: ['Elasticsearch 8.x/9.x', 'Kibana', 'Fleet', 'Elastic Agent', 'Logstash', 'APM', 'LogsDB', 'ILM', 'Data Streams'] },
  { color: '#f59e0b', items: ['Elastic Security / SIEM', 'Threat Detection Rules', 'RBAC & Field-Level Security', 'TLS/SSL Encryption', 'Incident Response', 'Forensic Audit', 'Threat Hunting', 'SOC Dashboards', 'MTTD Optimization'] },
  { color: '#8b5cf6', items: ['AWS (EC2 · S3 · VPC)', 'Kubernetes', 'OpenShift', 'Docker', 'MinIO', 'Multi-DC', 'Frozen Tier'] },
  { color: '#06b6d4', items: ['Terraform', 'Ansible', 'Jenkins', 'GitLab CI/CD', 'Python', 'Bash', 'Security Automation', 'Container Security'] },
  { color: '#ec4899', items: ['OpenTelemetry', 'Datadog', 'Dynatrace', 'Prometheus', 'Grafana', 'OpsGenie', 'PagerDuty'] },
]

const kpiValues = ['5+', '320 GB', '83%', '102']

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
  const { t } = useLanguage()

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
            {t.resume.badge}
          </div>
          <h2 className="mt-2 text-2xl font-bold" style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}>
            Gonzalo Verdugo
          </h2>
          <p className="mt-1 text-[13px]" style={{ color: '#94a3b8' }}>
            {t.resume.subtitle}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]" style={{ color: '#64748b' }}>
            <span className="flex items-center gap-1">
              <MapPin size={11} /> {t.resume.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} /> {t.resume.availability}
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
            {t.resume.downloadCV}
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
        {t.resume.kpis.map(({ label }, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-xl font-bold" style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}>
              {kpiValues[i]}
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
            {t.resume.experienceBadge}
          </div>

          <div className="flex flex-col gap-7">
            {experienceMeta.map(({ company, period, color, clients }, ei) => {
              const expT = t.resume.experience[ei]
              return (
                <div key={company} className="relative pl-4"
                  style={{ borderLeft: `2px solid ${color}25` }}>
                  <div
                    className="absolute -left-[5px] top-[5px] h-2.5 w-2.5 rounded-full"
                    style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
                  />
                  <p className="mb-0.5 text-[13px] font-semibold" style={{ color: '#f8fafc' }}>
                    {expT.role}
                  </p>
                  <div className="mb-4 flex items-center gap-2 text-[11px]" style={{ color: '#64748b' }}>
                    <span className="font-semibold" style={{ color: `${color}cc` }}>{company}</span>
                    <span>·</span>
                    <span>{period}</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {clients.map(({ name, color: cColor }, ci) => {
                      const clientT = expT.clients[ci]
                      return (
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
                            <span className="text-[11px]" style={{ color: '#64748b' }}>{clientT.label}</span>
                          </div>
                          <ul className="flex flex-col gap-1.5">
                            {clientT.points.map((p, pi) => (
                              <li key={pi} className="flex items-start gap-2 text-[12px] leading-relaxed"
                                style={{ color: '#94a3b8' }}>
                                <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full"
                                  style={{ background: '#475569' }} />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Skills column ─────────────────────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Skill groups */}
          <div>
            <div className="font-geist mb-4 text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: '#3b82f6' }}>
              {t.resume.skillsBadge}
            </div>
            <div className="flex flex-col gap-4">
              {skillGroupsMeta.map(({ color, items }, i) => (
                <div key={i}>
                  <div className="mb-2 text-[11px] font-semibold" style={{ color }}>
                    {t.resume.skillGroupTitles[i]}
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
              {t.resume.coreStack}
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
                  {t.resume.certTitle}
                </p>
                <p className="text-[12px]" style={{ color: '#64748b' }}>
                  {t.resume.certSub}
                </p>
              </div>
            </div>
            <p className="text-[12px] leading-relaxed" style={{ color: '#64748b' }}>
              {t.resume.certDesc}
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
              {t.resume.educationBadge}
            </div>
            <p className="text-[11px] font-semibold" style={{ color: '#f8fafc' }}>
              {t.resume.eduTitle}
            </p>
            <p className="text-[12px]" style={{ color: '#64748b' }}>
              {t.resume.eduSub}
            </p>
            <p className="mt-1 text-[12px]" style={{ color: '#64748b' }}>
              {t.resume.eduDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
