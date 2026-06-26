import {
  Shield,
  Eye,
  Code2,
  Bot,
  Minimize2,
  Layers,
  RefreshCw,
  Users,
  Zap,
  Activity,
  Search,
} from 'lucide-react'

const principles = [
  { label: 'Security by Design',               icon: Shield,    color: '#10b981' },
  { label: 'Observability as a Product',        icon: Eye,       color: '#3b82f6' },
  { label: 'Infrastructure as Code',            icon: Code2,     color: '#06b6d4' },
  { label: 'Automation Over Manual Operations', icon: Bot,       color: '#8b5cf6' },
  { label: 'Operational Simplicity',            icon: Minimize2, color: '#f59e0b' },
  { label: 'Scalable & Resilient Architecture', icon: Layers,    color: '#3b82f6' },
  { label: 'Continuous Improvement',            icon: RefreshCw, color: '#10b981' },
  { label: 'Knowledge Transfer Included',       icon: Users,     color: '#06b6d4' },
]

const currentFocus = [
  { label: 'Enterprise Observability',  icon: Zap,      color: '#3b82f6' },
  { label: 'Security Monitoring & SIEM',icon: Shield,   color: '#10b981' },
  { label: 'OpenTelemetry Adoption',    icon: Activity, color: '#06b6d4' },
  { label: 'Platform Engineering',      icon: Layers,   color: '#8b5cf6' },
  { label: 'Elasticsearch Architecture',icon: Search,   color: '#f59e0b' },
]

export default function Principles() {
  return (
    <div
      className="flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:border-white/10"
      style={{
        background:    'rgba(17,24,39,0.55)',
        border:        '1px solid rgba(255,255,255,0.06)',
        backdropFilter:'blur(12px) saturate(180%)',
      }}
    >
      <div className="flex-1">
        <div className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}>
          Engineering Principles
        </div>
        <h2 className="mt-2 mb-4 text-lg font-semibold" style={{ color: '#f8fafc' }}>
          How I Build
        </h2>

        <div className="flex flex-col gap-0.5">
          {principles.map(({ label, icon: Icon, color }) => (
            <div
              key={label}
              className="flex cursor-default items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-white/[0.02]"
            >
              <div
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
                style={{ background: `${color}18` }}
              >
                <Icon size={13} style={{ color }} />
              </div>
              <span className="text-[12px] font-medium" style={{ color: '#94a3b8' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="font-geist mb-3 text-[10px] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#3b82f6' }}>
            Current Focus
          </div>
          <div className="flex flex-col gap-1.5">
            {currentFocus.map(({ label, icon: Icon, color }) => (
              <div key={label} className="flex items-center gap-2.5 text-[12px]"
                style={{ color: '#94a3b8' }}>
                <Icon size={13} style={{ color, flexShrink: 0 }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
