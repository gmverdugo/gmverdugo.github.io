/* Hero visual: animated network topology graph */
export default function HeroNetworkGraph() {
  const sources = [
    { label: 'Applications', y: 48  },
    { label: 'Infrastructure',y: 98  },
    { label: 'Security',      y: 148 },
    { label: 'Networks',      y: 198 },
    { label: 'Cloud Services',y: 248 },
    { label: 'Databases',     y: 298 },
    { label: 'Endpoints',     y: 348 },
  ]
  const dests = [
    { label: 'Kibana',           y: 60,  color: '#3b82f6' },
    { label: 'APM',              y: 120, color: '#06b6d4' },
    { label: 'Security / SIEM',  y: 180, color: '#10b981' },
    { label: 'Alerts',           y: 240, color: '#f59e0b' },
    { label: 'Dashboards',       y: 300, color: '#8b5cf6' },
  ]
  const esX = 290, esY = 200

  const bez = (x1: number, y1: number, x2: number, y2: number) => {
    const mx = (x1 + x2) / 2
    return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`
  }

  return (
    <svg
      className="absolute right-[-2%] top-0 h-full w-[65%] opacity-50"
      viewBox="0 0 580 420"
      preserveAspectRatio="xMaxYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <marker id="ng-ah" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0,0.5 L4,3 L0,5.5 Z" fill="#06b6d4" opacity="0.6" />
        </marker>
        <marker id="ng-ah-g" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0,0.5 L4,3 L0,5.5 Z" fill="#10b981" opacity="0.6" />
        </marker>
        <filter id="ng-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <style>{`
          @keyframes ng-flow-in  { from { stroke-dashoffset: 20 } to { stroke-dashoffset: 0  } }
          @keyframes ng-flow-out { from { stroke-dashoffset: 20 } to { stroke-dashoffset: 0  } }
          @keyframes ng-pulse    { 0%,100% { opacity: 0.7 } 50% { opacity: 1 } }
        `}</style>
      </defs>

      {/* Source → ES edges */}
      {sources.map(({ label, y }, i) => (
        <path key={`in-${label}`}
          d={bez(108, y, esX - 22, esY)}
          stroke="#3b82f6" strokeWidth="0.9" fill="none" opacity="0.3"
          strokeDasharray="8 4"
          style={{
            animation: `ng-flow-in 2s linear infinite`,
            animationDelay: `${i * 0.22}s`,
          }}
          markerEnd="url(#ng-ah)"
        />
      ))}

      {/* ES → Dest edges */}
      {dests.map(({ label, y, color }, i) => (
        <path key={`out-${label}`}
          d={bez(esX + 46, esY, 462, y)}
          stroke={color} strokeWidth="1.1" fill="none" opacity="0.45"
          strokeDasharray="8 4"
          style={{
            animation: `ng-flow-out 2s linear infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
          markerEnd="url(#ng-ah-g)"
        />
      ))}

      {/* Source nodes */}
      {sources.map(({ label, y }) => (
        <g key={label}>
          <rect x={6} y={y - 12} width={100} height={22} rx={5}
            fill="rgba(17,24,39,0.85)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <circle cx={0} cy={y} r={3.5} fill="rgba(59,130,246,0.6)"
            style={{ animation: 'ng-pulse 2.5s ease-in-out infinite', animationDelay: `${Math.random() * 1.5}s` }} />
          <text x={16} y={y + 4} fontSize={9} fontFamily="Inter,sans-serif" fill="#64748b">{label}</text>
        </g>
      ))}

      {/* Elasticsearch Cluster — center node */}
      <g filter="url(#ng-glow)">
        <rect x={esX - 22} y={esY - 24} width={90} height={48} rx={9}
          fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.45)" strokeWidth="1.5" />
      </g>
      <text x={esX + 23} y={esY - 5} fontSize={9} fontFamily="Inter,sans-serif" fill="#94a3b8"
        textAnchor="middle">Elasticsearch</text>
      <text x={esX + 23} y={esY + 8} fontSize={9} fontFamily="Inter,sans-serif" fill="#06b6d4"
        textAnchor="middle" fontWeight="600">Cluster</text>
      <circle cx={esX + 23} cy={esY + 20} r={3}
        fill="#06b6d4" opacity="0.9"
        style={{ animation: 'ng-pulse 1.8s ease-in-out infinite' }} />

      {/* Destination nodes */}
      {dests.map(({ label, y, color }) => (
        <g key={label}>
          <rect x={462} y={y - 12} width={112} height={22} rx={5}
            fill="rgba(17,24,39,0.85)" stroke={`${color}30`} strokeWidth="0.8" />
          <text x={472} y={y + 4} fontSize={9} fontFamily="Inter,sans-serif" fill="#94a3b8">{label}</text>
          <circle cx={578} cy={y} r={3} fill={color} opacity="0.6"
            style={{ animation: 'ng-pulse 2s ease-in-out infinite' }} />
        </g>
      ))}
    </svg>
  )
}
