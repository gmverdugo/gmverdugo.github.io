'use client'

import { BarChart2, Layers, Server, Search, ShieldCheck, TrendingDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const metricsMeta = [
  { value: '320GB/day', icon: BarChart2,   accent: '#3b82f6' },
  { value: '30+',       icon: Layers,      accent: '#06b6d4' },
  { value: '102',       icon: Server,      accent: '#8b5cf6' },
  { value: '10+ Billion', icon: Search,    accent: '#f59e0b' },
  { value: '395 Days',  icon: ShieldCheck, accent: '#10b981' },
  { value: '30.75%',    icon: TrendingDown,accent: '#ec4899' },
]

export default function MetricsGrid() {
  const { t } = useLanguage()

  return (
    <section className="px-6 pb-10 md:px-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {metricsMeta.map(({ value, icon: Icon, accent }, i) => {
          const card = t.metrics.cards[i]
          return (
            <div
              key={i}
              className="metric-card rounded-[14px] p-5 transition-all duration-300"
              style={
                {
                  background: 'rgba(17, 24, 39, 0.55)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px) saturate(180%)',
                  '--accent-color': accent,
                } as React.CSSProperties
              }
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px]"
                style={{ background: `${accent}18`, color: accent }}
              >
                <Icon size={20} />
              </div>

              <div
                className="mb-1 text-xl font-bold leading-none"
                style={{ color: '#f8fafc', letterSpacing: '-0.01em' }}
              >
                {value}
              </div>

              <div
                className="font-geist mb-1 text-[11px] font-semibold uppercase tracking-[0.03em]"
                style={{ color: '#f8fafc' }}
              >
                {card.label}
              </div>

              <div className="text-[11px] leading-snug" style={{ color: '#94a3b8' }}>
                {card.sublabel}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
