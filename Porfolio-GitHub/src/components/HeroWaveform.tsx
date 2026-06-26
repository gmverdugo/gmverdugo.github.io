/* Hero visual: animated telemetry waveforms — high visibility */
export default function HeroWaveform() {
  return (
    <svg
      className="absolute right-[-2%] top-0 h-full w-[72%] opacity-75"
      viewBox="0 0 720 420"
      preserveAspectRatio="xMaxYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wf-fill-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="wf-fill-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="wf-fill-s" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#475569" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#475569" stopOpacity="0.01" />
        </linearGradient>

        <filter id="wf-glow-c" x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="wf-glow-b" x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="wf-beacon" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        <style>{`
          @keyframes wf-dash  { from { stroke-dashoffset: 120 } to { stroke-dashoffset: 0 } }
          @keyframes wf-pulse { 0%,100% { opacity: 0.6 } 50% { opacity: 1 } }
          @keyframes wf-ring  { 0% { r: 10; opacity: 0.6 } 100% { r: 42; opacity: 0 } }
        `}</style>
      </defs>

      {/* subtle vertical timeline grid */}
      {[160, 280, 400, 520, 640].map(x => (
        <line key={x} x1={x} y1="40" x2={x} y2="400"
          stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" strokeDasharray="4 4" />
      ))}

      {/* ── LOGS — bottom, blocky step chart ── */}
      <g>
        <path
          d="M40,380 L40,318 L110,318 L110,335 L180,335 L180,302
             L250,302 L250,325 L320,325 L320,308 L390,308
             L390,348 L460,348 L460,315 L530,315 L530,342
             L600,342 L600,362 L680,362 L680,385 L40,385 Z"
          fill="url(#wf-fill-s)"
        />
        <polyline
          points="40,318 110,318 110,335 180,335 180,302 250,302 250,325
                  320,325 320,308 390,308 390,348 460,348 460,315 530,315
                  530,342 600,342 600,362 680,362"
          fill="none" stroke="rgba(100,116,139,0.9)" strokeWidth="1.8"
          strokeDasharray="200 40"
          style={{ animation: 'wf-dash 4s linear infinite' }}
        />
        {/* tick dots at step changes */}
        {[110,180,250,320,390,460,530,600].map(x => (
          <circle key={x} cx={x} cy={x === 110 ? 318 : x === 180 ? 302 : x === 250 ? 325 : x === 320 ? 308 : x === 390 ? 348 : x === 460 ? 315 : x === 530 ? 342 : 362}
            r="2.5" fill="rgba(100,116,139,0.7)" />
        ))}
        <text x="648" y="358" fontSize="10" fontFamily="Geist,Inter,sans-serif"
          fill="rgba(148,163,184,0.65)" fontWeight="600" letterSpacing="0.1em">LOGS</text>
      </g>

      {/* ── METRICS — mid, smooth sine ── */}
      <g filter="url(#wf-glow-b)">
        <path
          d="M40,250 Q90,202 140,250 Q190,298 240,250 Q290,202 340,250
             Q390,298 440,250 Q490,202 540,250 Q590,298 640,250 Q665,228 680,236
             L680,286 C640,286 590,286 540,286 C490,286 440,286 390,286
             C340,286 290,286 240,286 C190,286 140,286 90,286 L40,286 Z"
          fill="url(#wf-fill-b)"
        />
        <path
          d="M40,250 Q90,202 140,250 Q190,298 240,250 Q290,202 340,250
             Q390,298 440,250 Q490,202 540,250 Q590,298 640,250 Q665,228 680,236"
          fill="none" stroke="rgba(59,130,246,0.95)" strokeWidth="2.2"
          strokeDasharray="160 30"
          style={{ animation: 'wf-dash 3.5s linear infinite', animationDelay: '0.4s' }}
        />
        {/* peak dots */}
        {[90,190,290,390,490,590].map(x => (
          <circle key={x} cx={x} cy={x === 90 || x === 290 || x === 490 ? 202 : x === 190 || x === 390 || x === 590 ? 298 : 250}
            r="2.5" fill="rgba(59,130,246,0.8)"
            style={{ animation: 'wf-pulse 2s ease-in-out infinite' }}
          />
        ))}
        <text x="645" y="238" fontSize="10" fontFamily="Geist,Inter,sans-serif"
          fill="rgba(59,130,246,0.75)" fontWeight="600" letterSpacing="0.1em">METRICS</text>
      </g>

      {/* ── TRACES — top, faster irregular curve ── */}
      <g filter="url(#wf-glow-c)">
        <path
          d="M40,148 C80,108 120,148 160,128 C200,108 240,148 280,122
             C320,96 360,140 400,118 C440,96 480,132 520,112
             C560,92 600,128 640,108 C660,98 672,104 680,100
             L680,162 C640,162 600,162 560,162 C520,162 480,162 440,162
             C400,162 360,162 320,162 C280,162 240,162 200,162
             C160,162 120,162 80,162 L40,162 Z"
          fill="url(#wf-fill-c)"
        />
        <path
          d="M40,148 C80,108 120,148 160,128 C200,108 240,148 280,122
             C320,96 360,140 400,118 C440,96 480,132 520,112
             C560,92 600,128 640,108 C660,98 672,104 680,100"
          fill="none" stroke="rgba(6,182,212,0.95)" strokeWidth="2.2"
          strokeDasharray="140 25"
          style={{ animation: 'wf-dash 3s linear infinite', animationDelay: '0.8s' }}
        />
        {/* span markers */}
        {[160, 280, 400, 520, 640].map((x, i) => {
          const y = [128,122,118,112,108][i]
          return (
            <g key={x}>
              <circle cx={x} cy={y} r="3" fill="rgba(6,182,212,0.9)"
                style={{ animation: 'wf-pulse 1.8s ease-in-out infinite', animationDelay: `${i*0.2}s` }} />
              <line x1={x} y1={y+3} x2={x} y2={y+14}
                stroke="rgba(6,182,212,0.35)" strokeWidth="1" />
            </g>
          )
        })}
        <text x="645" y="100" fontSize="10" fontFamily="Geist,Inter,sans-serif"
          fill="rgba(6,182,212,0.8)" fontWeight="600" letterSpacing="0.1em">TRACES</text>
      </g>

      {/* ── OP. INTELLIGENCE beacon ── */}
      <g filter="url(#wf-beacon)">
        <circle cx="360" cy="52" r="6" fill="#a5f3fc"
          style={{ animation: 'wf-pulse 2.2s ease-in-out infinite' }} />
      </g>
      <circle cx="360" cy="52" r="14" fill="none" stroke="rgba(165,243,252,0.3)" strokeWidth="1.2" />
      <circle cx="360" cy="52" r="26" fill="none" stroke="rgba(165,243,252,0.12)" strokeWidth="0.8" />
      <circle cx="360" cy="52" r="40" fill="none" stroke="rgba(165,243,252,0.05)" strokeWidth="0.5" />
      <line x1="360" y1="66" x2="360" y2="106"
        stroke="rgba(165,243,252,0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <text x="378" y="56" fontSize="9.5" fontFamily="Geist,Inter,sans-serif"
        fill="rgba(165,243,252,0.7)" fontWeight="600" letterSpacing="0.1em">OP. INTELLIGENCE</text>
    </svg>
  )
}
