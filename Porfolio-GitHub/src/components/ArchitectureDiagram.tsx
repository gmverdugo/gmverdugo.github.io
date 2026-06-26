import {
  LayoutGrid,
  Monitor,
  Lock,
  Network,
  Cloud,
  Database,
  Laptop,
  Code2,
  Radio,
  Search,
  Thermometer,
  HardDrive,
  LayoutDashboard,
  BarChart2,
  Activity,
  Shield,
  Bell,
  Package,
  Wrench,
  Settings,
  GitBranch,
  ArrowRight,
} from 'lucide-react'

interface ArchNode {
  icon: React.ElementType
  label: string
  highlight?: boolean
}

function Node({ icon: Icon, label, highlight }: ArchNode) {
  return (
    <div
      className="arch-node flex items-center gap-2 rounded-[10px] px-2.5 py-2 text-[11px] leading-tight transition-all duration-200"
      style={{
        background: highlight ? 'rgba(59, 130, 246, 0.1)' : 'rgba(17, 24, 39, 0.85)',
        border: highlight
          ? '1px solid rgba(59, 130, 246, 0.45)'
          : '1px solid rgba(255, 255, 255, 0.06)',
        color: '#94a3b8',
      }}
    >
      <Icon
        size={12}
        style={{ opacity: highlight ? 0.9 : 0.65, flexShrink: 0, color: highlight ? '#3b82f6' : 'inherit' }}
      />
      <span className="leading-tight">{label}</span>
    </div>
  )
}

interface ColProps {
  title: string
  children: React.ReactNode
}

function Col({ title, children }: ColProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="font-geist mb-1 text-center text-[11px] font-bold uppercase tracking-[0.1em]"
        style={{ color: '#64748b' }}
      >
        {title}
      </div>
      {children}
    </div>
  )
}

const highlights = [
  { value: '320 GB/day', label: 'Data Processed' },
  { value: '30+', label: 'Integrated Sources' },
  { value: '102', label: 'Elastic Agents' },
]

export default function ArchitectureDiagram() {
  return (
    <div
      className="rounded-2xl p-8 transition-all duration-300 hover:border-white/10"
      style={{
        background: 'rgba(17, 24, 39, 0.55)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(12px) saturate(180%)',
      }}
    >
      <div className="flex flex-col gap-8 xl:flex-row xl:gap-10">

        {/* Left: metadata */}
        <div className="flex flex-col justify-between gap-6 xl:w-[240px] xl:flex-shrink-0">
          <div>
            <div
              className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: '#3b82f6' }}
            >
              Featured Architecture
            </div>
            <h2 className="mt-2 text-xl font-semibold leading-snug" style={{ color: '#f8fafc' }}>
              Enterprise Observability Hub
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed" style={{ color: '#64748b' }}>
              Unified platform for logs, metrics, traces, and security monitoring — built for
              enterprise scale with compliance and automation built-in.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {highlights.map(({ value, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span
                  className="text-lg font-bold leading-none"
                  style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}
                >
                  {value}
                </span>
                <span className="text-xs" style={{ color: '#64748b' }}>
                  {label}
                </span>
              </div>
            ))}

            <button
              className="panel-cta mt-2 flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs font-medium transition-all duration-200"
              style={{ color: '#3b82f6', fontFamily: 'Geist, Inter, sans-serif' }}
            >
              View Architecture
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Right: diagram */}
        <div className="min-w-0 flex-1">
          <div
            className="rounded-[14px] p-4"
            style={{
              background: 'rgba(0, 0, 0, 0.22)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
            }}
          >
            <div className="grid grid-cols-4 gap-2.5">
              <Col title="Data Sources">
                <Node icon={LayoutGrid} label="Applications" />
                <Node icon={Monitor} label="Infrastructure" />
                <Node icon={Lock} label="Security" />
                <Node icon={Network} label="Networks" />
                <Node icon={Cloud} label="Cloud Services" />
                <Node icon={Database} label="Databases" />
                <Node icon={Laptop} label="Endpoints" />
                <Node icon={Code2} label="Custom Apps" />
              </Col>

              <Col title="Collect">
                <Node icon={Radio} label="OpenTelemetry Collector" highlight />
                <Node icon={Search} label="Elastic Agent" highlight />
              </Col>

              <Col title="Process & Store">
                <Node icon={Search} label="Elasticsearch Cluster" />
                <Node icon={Thermometer} label="Hot | Warm | Cold" />
                <Node icon={HardDrive} label="Snapshot Repository" />
              </Col>

              <Col title="Analyze & Visualize">
                <Node icon={LayoutDashboard} label="Kibana" />
                <Node icon={BarChart2} label="Dashboards" />
                <Node icon={Activity} label="APM" />
                <Node icon={Shield} label="Security" />
                <Node icon={Bell} label="Alerts & Reporting" />
              </Col>
            </div>

            <div
              className="mt-4 pt-4"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}
            >
              <div
                className="font-geist mb-2 text-center text-[11px] uppercase tracking-[0.1em]"
                style={{ color: '#64748b' }}
              >
                Automate & Orchestrate
              </div>
              <div className="grid grid-cols-4 gap-2">
                <Node icon={Package} label="Kubernetes" />
                <Node icon={Wrench} label="Terraform" />
                <Node icon={Settings} label="Ansible" />
                <Node icon={GitBranch} label="GitOps" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
