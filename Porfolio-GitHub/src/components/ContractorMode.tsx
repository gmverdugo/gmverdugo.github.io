import {
  Network, Shield, Eye, Gauge, GitMerge, GraduationCap,
  Repeat2, Cpu, FlaskConical, FileCheck, ArrowRight, Clock, Users, Zap,
} from 'lucide-react'
import { SiElasticsearch } from 'react-icons/si'

/* ── Services ─────────────────────────────────────────────────────── */
const services = [
  {
    icon:  Network,
    color: '#3b82f6',
    title: 'Architecture & Elasticsearch Design',
    desc:  'Cluster design, capacity planning, multi-DC strategy, disaster recovery, and migration from legacy platforms (Splunk, ELK 6.x, Graylog).',
    duration: '2–4 weeks',
    isSi: false,
  },
  {
    icon:  Shield,
    color: '#10b981',
    title: 'Security Monitoring & SIEM',
    desc:  'Elastic Security deployment, MITRE ATT&CK detection rules, ML anomaly detection, SOC dashboards, and compliance monitoring (PCI-DSS, SOC 2, HIPAA).',
    duration: '4–8 weeks',
    isSi: false,
  },
  {
    icon:  Eye,
    color: '#06b6d4',
    title: 'Observability Platform',
    desc:  'Fleet + Elastic Agent rollout, unified logs/metrics/traces/APM, custom integrations, and alerting pipelines (PagerDuty, OpsGenie, Slack, MS Teams).',
    duration: '6–12 weeks',
    isSi: false,
  },
  {
    icon:  Gauge,
    color: '#f59e0b',
    title: 'Performance & Cost Optimization',
    desc:  'Cluster health profiling, LogsDB storage reduction (+30%), ILM/data tier tuning, shard strategy, and infrastructure rightsizing.',
    duration: '3–6 weeks',
    isSi: false,
  },
  {
    icon:  Repeat2,
    color: '#8b5cf6',
    title: 'Migration & Modernization',
    desc:  'Zero-downtime migrations across versions and platforms, data validation, cloud ↔ on-prem transitions, and rollback procedures.',
    duration: '8–16 weeks',
    isSi: false,
  },
  {
    icon:  GitMerge,
    color: '#ec4899',
    title: 'DevSecOps & Infrastructure as Code',
    desc:  'Terraform modules, Ansible playbooks, CI/CD pipelines (Jenkins, GitLab, GitHub Actions), ECK operator, and security hardening automation.',
    duration: '4–8 weeks',
    isSi: false,
  },
  {
    icon:  GraduationCap,
    color: '#06b6d4',
    title: 'Training & Knowledge Transfer',
    desc:  'Elasticsearch admin bootcamp (3–5 days), Elastic SIEM operations workshop, observability best practices, and one-on-one mentoring.',
    duration: '2–5 days',
    isSi: false,
  },
  /* ── Argentina / Industrial verticals ── */
  {
    icon:  Cpu,
    color: '#f59e0b',
    title: 'Industrial & OT/IT Monitoring',
    desc:  'SCADA/OPC-UA/IoT data ingestion into Elasticsearch, real-time operational alerting, and OT+IT convergence for Oil & Gas, mining, and utilities infrastructure.',
    duration: '6–10 weeks',
    badge: 'O&G · Mining · Energy',
    isSi: false,
  },
  {
    icon:  FlaskConical,
    color: '#10b981',
    title: 'Predictive Maintenance & Asset Intelligence',
    desc:  'Sensor data pipelines, Elastic ML anomaly detection for equipment health, vibration analysis, and remaining useful life prediction for industrial assets.',
    duration: '8–12 weeks',
    badge: 'Mining · O&G · Industrial',
    isSi: false,
  },
  {
    icon:  FileCheck,
    color: '#3b82f6',
    title: 'Regulatory Compliance & Audit Infrastructure',
    desc:  'Audit trail design for ENARGAS, Secretaría de Energía, SEGEMAR, and financial regulators. 365+ day retention, tamper-evident logging, and compliance dashboards.',
    duration: '4–8 weeks',
    badge: 'Energy · Banking · Mining',
    isSi: false,
  },
]

/* ── Retainer packages ─────────────────────────────────────────────── */
const retainers = [
  {
    tier: 'Essential',
    hours: '20 h/month',
    color: '#3b82f6',
    features: [
      'Quarterly architecture review',
      'Performance monitoring & recommendations',
      'Email support — 24h response',
      'Version upgrade planning',
    ],
  },
  {
    tier: 'Professional',
    hours: '40 h/month',
    color: '#06b6d4',
    highlight: true,
    features: [
      'Everything in Essential',
      'Monthly security review & threat tuning',
      'Priority support — 4h response',
      'Proactive capacity planning',
      'Quarterly training session',
    ],
  },
  {
    tier: 'Enterprise',
    hours: '80+ h/month',
    color: '#10b981',
    features: [
      'Everything in Professional',
      'Dedicated support — 1h response',
      '24/7 on-call for critical issues',
      'Monthly strategic advisory',
      'Continuous optimization initiatives',
      'Executive KPI reporting',
    ],
  },
]

/* ── Component ──────────────────────────────────────────────────────── */
export default function ContractorMode() {
  return (
    <div
      className="rounded-2xl p-8 transition-all duration-300"
      style={{
        background:    'rgba(17,24,39,0.55)',
        border:        '1px solid rgba(255,255,255,0.06)',
        backdropFilter:'blur(12px) saturate(180%)',
      }}
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#3b82f6' }}>
            Contractor Services
          </div>
          <h2 className="mt-2 text-2xl font-bold" style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}>
            What I Build For You
          </h2>
          <p className="mt-2 max-w-xl text-[13px] leading-relaxed" style={{ color: '#64748b' }}>
            Senior-level Elasticsearch expertise — no agency overhead. Direct engagement,
            measurable results, and knowledge transfer included in every project.
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3 text-[11px]" style={{ color: '#64748b' }}>
          <Clock size={12} />
          <span>Remote-first · UTC-3 · EN/ES</span>
        </div>
      </div>

      {/* Services grid */}
      <div className="mb-10">
        <div className="font-geist mb-4 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}>
          Services
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, color, title, desc, duration, badge, isSi }) => (
            <div
              key={title}
              className="group cursor-pointer rounded-[14px] p-4 transition-all duration-200 hover:border-white/10"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border:     '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={isSi ? 14 : 16} style={{ color }} />
                </div>
                <div className="flex flex-col items-end gap-1">
                  {badge && (
                    <span
                      className="rounded-[4px] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                      style={{ background: `${color}15`, color }}
                    >
                      {badge}
                    </span>
                  )}
                  <span className="text-[12px]" style={{ color: '#64748b' }}>
                    {duration}
                  </span>
                </div>
              </div>
              <h4 className="mb-1.5 text-[12px] font-semibold" style={{ color: '#f8fafc' }}>
                {title}
              </h4>
              <p className="text-[12px] leading-relaxed" style={{ color: '#64748b' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Retainer packages */}
      <div>
        <div className="font-geist mb-4 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}>
          Retainer Packages
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {retainers.map(({ tier, hours, color, features, highlight }) => (
            <div
              key={tier}
              className="relative flex flex-col rounded-[16px] p-5"
              style={{
                background: highlight ? `${color}0d` : 'rgba(255,255,255,0.02)',
                border:     `1px solid ${highlight ? `${color}35` : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              {highlight && (
                <div
                  className="absolute -top-2.5 left-4 rounded-[4px] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: color, color: '#0a0f1a' }}
                >
                  Most Popular
                </div>
              )}
              <div className="mb-1 flex items-center gap-2">
                <span className="text-[13px] font-bold" style={{ color: '#f8fafc' }}>{tier}</span>
              </div>
              <div className="mb-4 text-xl font-bold" style={{ color, letterSpacing: '-0.02em' }}>
                {hours}
              </div>
              <ul className="flex flex-col gap-2">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[12px]"
                    style={{ color: '#94a3b8' }}>
                    <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-8 flex flex-col items-center gap-3 pt-6 text-center sm:flex-row sm:justify-between sm:text-left"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div>
          <p className="text-[12px] font-semibold" style={{ color: '#f8fafc' }}>
            Ready to discuss your project?
          </p>
          <p className="text-[12px]" style={{ color: '#64748b' }}>
            Direct engagement · No agency overhead · First call free
          </p>
        </div>
        <a
          href="mailto:gonzalomartinverdugo@gmail.com"
          className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-opacity hover:opacity-90"
          style={{
            background: 'rgba(59,130,246,0.15)',
            border:     '1px solid rgba(59,130,246,0.3)',
            color:      '#3b82f6',
          }}
        >
          Get in Touch
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )
}
