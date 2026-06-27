'use client'

import {
  Network, Shield, Eye, Gauge, GitMerge, GraduationCap,
  Repeat2, Cpu, FlaskConical, FileCheck, ArrowRight, Clock,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const servicesMeta = [
  { icon: Network,      color: '#3b82f6' },
  { icon: Shield,       color: '#10b981' },
  { icon: Eye,          color: '#06b6d4' },
  { icon: Gauge,        color: '#f59e0b' },
  { icon: Repeat2,      color: '#8b5cf6' },
  { icon: GitMerge,     color: '#ec4899' },
  { icon: GraduationCap,color: '#06b6d4' },
  { icon: Cpu,          color: '#f59e0b' },
  { icon: FlaskConical, color: '#10b981' },
  { icon: FileCheck,    color: '#3b82f6' },
]

const retainersMeta = [
  { color: '#3b82f6', highlight: false },
  { color: '#06b6d4', highlight: true },
  { color: '#10b981', highlight: false },
]

export default function ContractorMode() {
  const { t } = useLanguage()

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
            {t.contractor.badge}
          </div>
          <h2 className="mt-2 text-2xl font-bold" style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}>
            {t.contractor.title}
          </h2>
          <p className="mt-2 max-w-xl text-[13px] leading-relaxed" style={{ color: '#64748b' }}>
            {t.contractor.body}
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3 text-[11px]" style={{ color: '#64748b' }}>
          <Clock size={12} />
          <span>{t.contractor.timezone}</span>
        </div>
      </div>

      {/* Services grid */}
      <div className="mb-10">
        <div className="font-geist mb-4 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}>
          {t.contractor.servicesBadge}
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {servicesMeta.map(({ icon: Icon, color }, i) => {
            const svc = t.contractor.services[i]
            return (
              <div
                key={i}
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
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {svc.badge && (
                      <span
                        className="rounded-[4px] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                        style={{ background: `${color}15`, color }}
                      >
                        {svc.badge}
                      </span>
                    )}
                    <span className="text-[12px]" style={{ color: '#64748b' }}>
                      {svc.duration}
                    </span>
                  </div>
                </div>
                <h4 className="mb-1.5 text-[12px] font-semibold" style={{ color: '#f8fafc' }}>
                  {svc.title}
                </h4>
                <p className="text-[12px] leading-relaxed" style={{ color: '#64748b' }}>
                  {svc.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Retainer packages */}
      <div>
        <div className="font-geist mb-4 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}>
          {t.contractor.retainerBadge}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {retainersMeta.map(({ color, highlight }, i) => {
            const ret = t.contractor.retainers[i]
            const hoursMap = ['20 h/month', '40 h/month', '80+ h/month']
            return (
              <div
                key={i}
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
                    {t.contractor.mostPopular}
                  </div>
                )}
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-[13px] font-bold" style={{ color: '#f8fafc' }}>{ret.tier}</span>
                </div>
                <div className="mb-4 text-xl font-bold" style={{ color, letterSpacing: '-0.02em' }}>
                  {hoursMap[i]}
                </div>
                <ul className="flex flex-col gap-2">
                  {ret.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-[12px]"
                      style={{ color: '#94a3b8' }}>
                      <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full"
                        style={{ background: color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-8 flex flex-col items-center gap-3 pt-6 text-center sm:flex-row sm:justify-between sm:text-left"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div>
          <p className="text-[12px] font-semibold" style={{ color: '#f8fafc' }}>
            {t.contractor.ctaTitle}
          </p>
          <p className="text-[12px]" style={{ color: '#64748b' }}>
            {t.contractor.ctaBody}
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
          {t.contractor.ctaButton}
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )
}
