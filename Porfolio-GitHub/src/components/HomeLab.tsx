'use client'

import { Network } from 'lucide-react'
import {
  SiOpentelemetry,
  SiElasticsearch,
  SiKubernetes,
  SiLinux,
  SiPython,
  SiDocker,
} from 'react-icons/si'
import { useLanguage } from '@/context/LanguageContext'

const labTags = [
  { label: 'OpenTelemetry',    icon: SiOpentelemetry, color: '#4285f4' },
  { label: 'Elastic Stack',    icon: SiElasticsearch, color: '#00bfb3' },
  { label: 'Kubernetes',       icon: SiKubernetes,    color: '#326ce5' },
  { label: 'VPN Monitoring',   icon: Network,         color: '#10b981' },
  { label: 'Linux',            icon: SiLinux,         color: '#fcc624' },
  { label: 'Python Automation',icon: SiPython,        color: '#3776ab' },
  { label: 'Docker',           icon: SiDocker,        color: '#2496ed' },
]

export default function HomeLab() {
  const { t } = useLanguage()

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
          {t.homeLab.badge}
        </div>
        <h2 className="mt-2 text-lg font-semibold" style={{ color: '#f8fafc' }}>
          {t.homeLab.title}
        </h2>
        <p className="mt-2 mb-5 text-[13px] leading-relaxed" style={{ color: '#64748b' }}>
          {t.homeLab.body}
        </p>

        <div className="flex flex-wrap gap-2">
          {labTags.map(({ label, icon: Icon, color }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium transition-all duration-200 hover:border-white/10"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border:     '1px solid rgba(255,255,255,0.07)',
                color:      '#94a3b8',
              }}
            >
              <Icon size={12} style={{ color, flexShrink: 0 }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
