import { SiElasticsearch, SiOpentelemetry, SiKubernetes, SiLinux, SiSap, SiTerraform, SiDocker, SiPython } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { MdSecurity } from 'react-icons/md'
import PyramidMountain  from './PyramidMountain'
import HeroNetworkGraph from './HeroNetworkGraph'
import HeroWaveform     from './HeroWaveform'

// ← Cambiá esto para previsualizar cada opción: 'pyramid' | 'network' | 'waveform'
const HERO_VISUAL = 'pyramid' as string
const heroVisuals: Record<string, React.FC> = {
  pyramid: PyramidMountain,
  network: HeroNetworkGraph,
  waveform: HeroWaveform,
}
const HeroVisual = heroVisuals[HERO_VISUAL] ?? PyramidMountain

interface TechPill {
  label: string
  icon: React.ElementType
  color: string
}

const techPills: TechPill[] = [
  { label: 'Elasticsearch',  icon: SiElasticsearch,  color: '#00bfb3' },
  { label: 'OpenTelemetry',  icon: SiOpentelemetry,  color: '#4285f4' },
  { label: 'Kubernetes',     icon: SiKubernetes,     color: '#326ce5' },
  { label: 'AWS',            icon: FaAws,            color: '#ff9900' },
  { label: 'SIEM',           icon: MdSecurity,       color: '#10b981' },
  { label: 'Linux',          icon: SiLinux,          color: '#fcc624' },
  { label: 'SAP',            icon: SiSap,            color: '#0070b8' },
  { label: 'Terraform',      icon: SiTerraform,      color: '#844fba' },
  { label: 'Docker',         icon: SiDocker,         color: '#2496ed' },
  { label: 'Python',         icon: SiPython,         color: '#3776ab' },
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-0 pt-[88px] md:px-12 lg:pt-12"
      style={{ minHeight: 420 }}
    >
      <HeroVisual />

      <div className="relative z-10 max-w-[650px]">
        <div
          className="font-geist mb-4 text-[11px] font-semibold uppercase tracking-[0.12em]"
          style={{ color: 'var(--primary)' }}
        >
          Enterprise Observability Architect
        </div>

        <h1
          className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-[44px]"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          Designing Observability
          <br />
          Platforms That Scale.
        </h1>

        <p
          className="mb-7 max-w-[540px] text-base leading-[1.7]"
          style={{ color: 'var(--text-secondary)' }}
        >
          I architect and build secure, reliable and cost-efficient observability platforms
          that deliver real operational intelligence at enterprise scale.
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {techPills.map(({ label, icon: Icon, color }) => (
            <div
              key={label}
              className="tech-pill flex cursor-default items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-secondary)',
              }}
            >
              <Icon size={14} style={{ color, flexShrink: 0 }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
