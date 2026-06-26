'use client'

import { ArrowRight } from 'lucide-react'

/* ── Layout constants ──────────────────────────────────────────────── */
const VW = 880, VH = 420
const NH = 27         // node height
const RG = 43         // row gap

const C1 = 0,   W1 = 112   // Data Sources
const C2 = 210, W2 = 178   // Collect
const C3 = 492, W3 = 154   // Process & Store
const C4 = 752, W4 = 128   // Analyze & Act

const RS = 26   // row start y

const sY  = (r: number) => RS + r * RG
const sCY = (r: number) => sY(r) + NH / 2

const otelY  = RS + 1.5 * RG,  otelCY  = otelY  + NH / 2
const agentY = RS + 4.5 * RG,  agentCY = agentY + NH / 2
const esY    = RS + 2 * RG,    esCY    = esY    + NH / 2

const visY  = [RS, RS+RG, RS+2*RG, RS+3*RG, RS+4*RG]
const visCY = visY.map(y => y + NH / 2)

const autoY = 375
const autoNodes = [
  { label: 'Kubernetes', x: C2       },
  { label: 'Terraform',  x: C2 + 120 },
  { label: 'Ansible',    x: C3       },
  { label: 'GitOps',     x: C3 + 110 },
]

const SOURCES = [
  'Applications','Infrastructure','Security','Networks',
  'Cloud Services','Databases','Endpoints','Custom Apps',
]
const VIS_LABELS = ['Kibana','Dashboards','APM','Security / SIEM','Alerts & Reporting']

/* ── SVG helpers ───────────────────────────────────────────────────── */
function Node({ x, y, w = W1, label, hl }: {
  x: number; y: number; w?: number; label: string; hl?: boolean
}) {
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={NH} rx={6}
        fill={hl ? 'rgba(59,130,246,0.12)' : 'rgba(17,24,39,0.90)'}
        stroke={hl ? 'rgba(59,130,246,0.45)' : 'rgba(255,255,255,0.10)'}
        strokeWidth={1}
      />
      <text
        x={x + 8} y={y + NH / 2 + 4}
        fontSize={10} fontFamily="Inter, sans-serif"
        fill={hl ? '#3b82f6' : '#94a3b8'}
      >
        {label}
      </text>
    </g>
  )
}

function ColLabel({ x, label }: { x: number; label: string }) {
  return (
    <text
      x={x} y={13}
      fontSize={10} fontWeight="700" fontFamily="Inter, sans-serif"
      fill="#475569" letterSpacing="1"
    >
      {label}
    </text>
  )
}

/* cubic bezier — horizontal midpoint as control */
const bez = (x1: number, y1: number, x2: number, y2: number) => {
  const mx = (x1 + x2) / 2
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`
}

/* ── Metrics ───────────────────────────────────────────────────────── */
const metrics = [
  { value: '320 GB/day', label: 'Processed' },
  { value: '30+',        label: 'Sources'   },
  { value: '102',        label: 'Agents'    },
]

/* ── Component ─────────────────────────────────────────────────────── */
export default function ArchitectureDiagramFlow() {
  return (
    <div
      className="rounded-2xl p-8 transition-all duration-300 hover:border-white/10"
      style={{
        background:    'rgba(17,24,39,0.55)',
        border:        '1px solid rgba(255,255,255,0.06)',
        backdropFilter:'blur(12px) saturate(180%)',
      }}
    >
      {/* flow animation */}
      <style>{`
        @keyframes arch-flow {
          from { stroke-dashoffset: 18 }
          to   { stroke-dashoffset: 0  }
        }
      `}</style>

      <div className="flex flex-col gap-8 xl:flex-row xl:gap-10">

        {/* ── Left metadata ── */}
        <div className="flex flex-col justify-between gap-6 xl:w-[220px] xl:flex-shrink-0">
          <div>
            <div className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: '#3b82f6' }}>
              Featured Architecture
            </div>
            <h2 className="mt-2 text-xl font-semibold leading-snug" style={{ color: '#f8fafc' }}>
              Enterprise Observability Hub
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed" style={{ color: '#64748b' }}>
              Unified platform for logs, metrics, traces, and security —
              from ingestion to operational intelligence.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {metrics.map(({ value, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-lg font-bold leading-none"
                  style={{ color: '#f8fafc', letterSpacing: '-0.02em' }}>{value}</span>
                <span className="text-xs" style={{ color: '#64748b' }}>{label}</span>
              </div>
            ))}
            <button
              className="panel-cta mt-2 flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs font-medium"
              style={{ color: '#3b82f6', fontFamily: 'Geist, Inter, sans-serif' }}
            >
              View Architecture <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* ── SVG diagram ── */}
        <div
          className="min-w-0 flex-1 overflow-hidden rounded-[14px]"
          style={{
            background: 'rgba(0,0,0,0.22)',
            border: '1px solid rgba(255,255,255,0.04)',
            padding: '20px 16px',
          }}
        >
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            width="100%" height="100%"
            style={{ display: 'block', overflow: 'visible' }}
          >
            <defs>
              <marker id="ah-c" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0.5 L5,3.5 L0,6.5 Z" fill="#06b6d4" />
              </marker>
              <marker id="ah-g" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0.5 L5,3.5 L0,6.5 Z" fill="#10b981" />
              </marker>
            </defs>

            {/* ── Column headers ── */}
            <ColLabel x={C1}      label="DATA SOURCES"    />
            <ColLabel x={C2 + 40} label="COLLECT"         />
            <ColLabel x={C3 + 20} label="PROCESS & STORE" />
            <ColLabel x={C4 + 15} label="ANALYZE & ACT"   />

            {/* ── Sources → OTel (top 4, blue faint) ── */}
            {([0,1,2,3] as const).map(r => (
              <path key={`s-otel-${r}`}
                d={bez(C1+W1, sCY(r), C2, otelCY)}
                stroke="rgba(59,130,246,0.18)" strokeWidth="0.8" fill="none"
              />
            ))}

            {/* ── Sources → Agent (bottom 4, cyan faint) ── */}
            {([4,5,6,7] as const).map(r => (
              <path key={`s-agt-${r}`}
                d={bez(C1+W1, sCY(r), C2, agentCY)}
                stroke="rgba(6,182,212,0.18)" strokeWidth="0.8" fill="none"
              />
            ))}

            {/* ── OTel → ES (animated cyan) ── */}
            <path
              d={bez(C2+W2, otelCY, C3, esCY)}
              stroke="#06b6d4" strokeWidth="1.5" fill="none"
              strokeDasharray="6 3"
              style={{ animation: 'arch-flow 1.6s linear infinite' }}
              markerEnd="url(#ah-c)"
            />

            {/* ── Agent → ES (animated cyan, offset) ── */}
            <path
              d={bez(C2+W2, agentCY, C3, esCY)}
              stroke="#06b6d4" strokeWidth="1.5" fill="none"
              strokeDasharray="6 3"
              style={{ animation: 'arch-flow 1.6s linear infinite', animationDelay: '0.8s' }}
              markerEnd="url(#ah-c)"
            />

            {/* ── ES → Visualization (animated green, fan out) ── */}
            {visCY.map((vcy, i) => (
              <path key={`es-v-${i}`}
                d={bez(C3+W3, esCY, C4, vcy)}
                stroke="#10b981" strokeWidth="1.5" fill="none"
                strokeDasharray="6 3"
                style={{ animation: 'arch-flow 1.8s linear infinite', animationDelay: `${i * 0.25}s` }}
                markerEnd="url(#ah-g)"
              />
            ))}

            {/* ── Automation separator ── */}
            <line
              x1={C2-4} y1={autoY - 14}
              x2={C3 + W3 + 110 + 4} y2={autoY - 14}
              stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3"
            />
            <text
              x={C2 + 72} y={autoY - 4}
              fontSize={10} fontWeight="700" fontFamily="Inter, sans-serif"
              fill="#475569" letterSpacing="1"
            >
              AUTOMATE &amp; ORCHESTRATE
            </text>

            {/* ── Automation → OTel/Agent (subtle purple upward arcs) ── */}
            {autoNodes.map(({ x }, i) => {
              const cx = x + (i < 2 ? 60 : 52)
              return (
                <path key={`auto-up-${i}`}
                  d={`M${cx},${autoY} C${cx},${autoY - 80} ${C2 + W2/2},${autoY - 80} ${C2 + W2/2},${agentY + NH}`}
                  stroke="rgba(139,92,246,0.25)" strokeWidth="0.8" fill="none"
                  strokeDasharray="4 3"
                />
              )
            })}

            {/* ═══════════════ NODES (drawn last, on top of paths) ══════════════ */}

            {/* Source nodes */}
            {SOURCES.map((label, r) => (
              <Node key={label} x={C1} y={sY(r)} w={W1} label={label} />
            ))}

            {/* Collect */}
            <Node x={C2} y={otelY}  w={W2} label="OpenTelemetry Collector" hl />
            <Node x={C2} y={agentY} w={W2} label="Elastic Agent"           hl />

            {/* Process & Store */}
            <Node x={C3} y={esY} w={W3} label="Elasticsearch Cluster" />

            {/* Analyze & Act */}
            {VIS_LABELS.map((label, i) => (
              <Node key={label} x={C4} y={visY[i]} w={W4} label={label} />
            ))}

            {/* Automation */}
            {autoNodes.map(({ label, x }) => (
              <Node key={label} x={x} y={autoY} w={104} label={label} />
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}
