'use client'

import {
  Network,
  BarChart3,
  Eye,
  ShieldCheck,
  GraduationCap,
  GitMerge,
  Users,
} from 'lucide-react'
import { SiElasticsearch } from 'react-icons/si'
import { useLanguage } from '@/context/LanguageContext'

const engagementsMeta = [
  { Icon: Network,         color: '#3b82f6' },
  { Icon: BarChart3,       color: '#06b6d4' },
  { Icon: Eye,             color: '#10b981' },
  { Icon: SiElasticsearch, color: '#00bfb3', isSi: true },
  { Icon: ShieldCheck,     color: '#f59e0b' },
  { Icon: GraduationCap,   color: '#8b5cf6' },
  { Icon: GitMerge,        color: '#ec4899' },
  { Icon: Users,           color: '#3b82f6' },
]

export default function EngagementModels() {
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
          {t.engagement.badge}
        </div>
        <h2 className="mt-2 text-lg font-semibold" style={{ color: '#f8fafc' }}>
          {t.engagement.title}
        </h2>
        <p className="mt-2 mb-5 text-[13px]" style={{ color: '#64748b' }}>
          {t.engagement.body}
        </p>

        <div className="grid grid-cols-2 gap-2">
          {engagementsMeta.map(({ Icon, color, isSi }, i) => (
            <div
              key={i}
              className="group flex cursor-pointer items-center gap-2.5 rounded-[12px] p-3 text-[12px] font-medium transition-all duration-200 hover:border-white/10"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border:     '1px solid rgba(255,255,255,0.05)',
                color:      '#94a3b8',
              }}
            >
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-200"
                style={{ background: `${color}14` }}
              >
                <Icon size={isSi ? 13 : 14} style={{ color }} />
              </div>
              <span className="leading-tight">{t.engagement.items[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
