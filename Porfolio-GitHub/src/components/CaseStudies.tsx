import { ShoppingCart, Landmark } from 'lucide-react'
import { SiOpentelemetry } from 'react-icons/si'

interface Engagement {
  company:    string
  context:    string
  badge:      string
  badgeColor: string
  description:string
  tech:       string[]
  Icon:       React.ElementType
  iconBg:     string
  iconColor:  string
  isSiIcon?:  boolean
}

const engagements: Engagement[] = [
  {
    company:     'MercadoLibre',
    context:     "Latin America's largest e-commerce platform",
    badge:       'Observability + SIEM · Ongoing',
    badgeColor:  '#3b82f6',
    description: 'Unified observability and security monitoring platform built from scratch — 30+ heterogeneous data sources, real-time threat detection, and SOC dashboards.',
    tech:        ['Elastic Agent', 'Fleet', 'Logstash', 'Kibana SIEM', 'OTel', 'OpsGenie'],
    Icon:        ShoppingCart,
    iconBg:      'rgba(59,130,246,0.10)',
    iconColor:   '#3b82f6',
  },
  {
    company:     'ICBC Bank',
    context:     'Enterprise banking · on-premise',
    badge:       'Architecture Migration · Ongoing',
    badgeColor:  '#10b981',
    description: 'Full redesign of the Elasticsearch cluster architecture — Platinum→Enterprise, LogsDB, ILM tiering, and forensic-grade audit retention for banking compliance.',
    tech:        ['Elasticsearch 8.x', 'LogsDB', 'ILM', 'Frozen Tier', 'Terraform', 'Ansible'],
    Icon:        Landmark,
    iconBg:      'rgba(16,185,129,0.10)',
    iconColor:   '#10b981',
  },
  {
    company:     'OpenTelemetry Platform',
    context:     'Hybrid cloud · multi-environment',
    badge:       'Standardization · Platform',
    badgeColor:  '#06b6d4',
    description: 'Telemetry standardization across SAP BTP and Cloud Foundry — correlating logs, metrics, and traces from heterogeneous environments under a single Elastic backend.',
    tech:        ['OpenTelemetry', 'SAP BTP', 'Cloud Foundry', 'Elastic APM', 'Auto-instrumentation'],
    Icon:        SiOpentelemetry,
    iconBg:      'rgba(6,182,212,0.10)',
    iconColor:   '#06b6d4',
    isSiIcon:    true,
  },
]

export default function CaseStudies() {
  return (
    <div
      className="flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:border-white/10"
      style={{
        background:    'rgba(17,24,39,0.55)',
        border:        '1px solid rgba(255,255,255,0.06)',
        backdropFilter:'blur(12px) saturate(180%)',
      }}
    >
      <div>
        <div className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}>
          Client Engagements
        </div>
        <h2 className="mt-2 mb-5 text-lg font-semibold" style={{ color: '#f8fafc' }}>
          Selected Work
        </h2>

        <div className="flex flex-col gap-4">
          {engagements.map(({ company, context, badge, badgeColor, description, tech, Icon, iconBg, iconColor, isSiIcon }) => (
            <div
              key={company}
              className="group cursor-pointer rounded-[14px] p-4 transition-all duration-200 hover:border-white/10"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border:     '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Company header */}
              <div className="mb-2.5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ background: iconBg }}
                >
                  <Icon size={isSiIcon ? 16 : 18} style={{ color: iconColor }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[13px] font-semibold" style={{ color: '#f8fafc' }}>
                      {company}
                    </span>
                    <span
                      className="rounded-[4px] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                      style={{ background: `${badgeColor}18`, color: badgeColor }}
                    >
                      {badge}
                    </span>
                  </div>
                  <p className="text-[12px]" style={{ color: '#64748b' }}>{context}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mb-3 text-[12px] leading-relaxed" style={{ color: '#94a3b8' }}>
                {description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5">
                {tech.map(t => (
                  <span
                    key={t}
                    className="rounded-md px-2 py-0.5 text-[10px]"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border:     '1px solid rgba(255,255,255,0.07)',
                      color:      '#64748b',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
