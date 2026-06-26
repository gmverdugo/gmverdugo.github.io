/* Pyramid: 4 telemetry layers — matches reference image */
export default function PyramidMountain() {
  // Geometry: apex (400,45) → base (35,470)–(765,470)
  // slope = 365/425 = 0.859 horizontal per vertical pixel
  // x_left(y)  = 400 − (y−45)×0.859
  // x_right(y) = 400 + (y−45)×0.859
  // Layer cuts: y=155 | y=268 | y=372 | y=470

  return (
    <svg
      className="absolute right-[-2%] top-0 h-full w-[68%] opacity-65"
      viewBox="0 0 800 510"
      preserveAspectRatio="xMaxYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* ── Low-poly triangle tessellation for LOGS ── */}
        <pattern id="pm-logs-poly" x="0" y="0" width="80" height="70" patternUnits="userSpaceOnUse">
          <polygon points="0,70 40,0 80,70"   fill="none" stroke="rgba(99,116,155,0.18)"  strokeWidth="0.7"/>
          <polygon points="40,0 80,70 120,0"  fill="none" stroke="rgba(99,116,155,0.12)"  strokeWidth="0.5"/>
          <polygon points="0,35 40,0 20,70"   fill="rgba(59,80,130,0.06)" stroke="none"/>
          <polygon points="40,0 80,35 60,70"  fill="rgba(59,80,130,0.04)" stroke="none"/>
        </pattern>

        {/* ── Dot-network for METRICS ── */}
        <pattern id="pm-metrics-dots" x="0" y="0" width="52" height="52" patternUnits="userSpaceOnUse">
          <circle cx="26" cy="26" r="2.2" fill="rgba(96,165,250,0.45)"/>
          <circle cx="0"  cy="0"  r="1.5" fill="rgba(96,165,250,0.3)"/>
          <circle cx="52" cy="0"  r="1.5" fill="rgba(96,165,250,0.3)"/>
          <circle cx="0"  cy="52" r="1.5" fill="rgba(96,165,250,0.3)"/>
          <circle cx="52" cy="52" r="1.5" fill="rgba(96,165,250,0.3)"/>
          <line x1="0"  y1="0"  x2="26" y2="26" stroke="rgba(96,165,250,0.18)" strokeWidth="0.6"/>
          <line x1="52" y1="0"  x2="26" y2="26" stroke="rgba(96,165,250,0.18)" strokeWidth="0.6"/>
          <line x1="0"  y1="52" x2="26" y2="26" stroke="rgba(96,165,250,0.14)" strokeWidth="0.5"/>
          <line x1="52" y1="52" x2="26" y2="26" stroke="rgba(96,165,250,0.14)" strokeWidth="0.5"/>
        </pattern>

        {/* ── Sine waves for TRACES ── */}
        <pattern id="pm-traces-wave" x="0" y="0" width="80" height="30" patternUnits="userSpaceOnUse">
          <path d="M0,15 Q20,2 40,15 Q60,28 80,15"
            fill="none" stroke="rgba(34,211,238,0.28)" strokeWidth="1.2"/>
          <path d="M0,22 Q20,9 40,22 Q60,35 80,22"
            fill="none" stroke="rgba(34,211,238,0.12)" strokeWidth="0.7"/>
        </pattern>

        {/* ── ClipPaths — one per layer ── */}
        <clipPath id="cp-logs">
          <polygon points="119,372 681,372 765,470 35,470"/>
        </clipPath>
        <clipPath id="cp-metrics">
          <polygon points="208,268 592,268 681,372 119,372"/>
        </clipPath>
        <clipPath id="cp-traces">
          <polygon points="306,155 494,155 592,268 208,268"/>
        </clipPath>
        <clipPath id="cp-intel">
          <polygon points="400,45 306,155 494,155"/>
        </clipPath>
        {/* ── Filters ── */}
        <filter id="pm-apex-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="18" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="pm-edge-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="pm-divider-glow" x="-5%" y="-200%" width="110%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* ── Apex radial glow ── */}
        <radialGradient id="pm-apex-light" cx="50%" cy="0%" r="70%">
          <stop offset="0%"   stopColor="#e0f2fe" stopOpacity="0.55"/>
          <stop offset="30%"  stopColor="#7dd3fc" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
        </radialGradient>

        {/* ── INTELLIGENCE layer crystal gradient ── */}
        <linearGradient id="pm-intel-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%"   stopColor="#e0f2fe" stopOpacity="0.75"/>
          <stop offset="55%"  stopColor="#67e8f9" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#0e7490" stopOpacity="0.12"/>
        </linearGradient>

        <style>{`
          @keyframes pm-beacon { 0%,100%{opacity:0.85;r:5.5} 50%{opacity:1;r:7.5} }
        `}</style>
      </defs>

      {/* ── Ambient apex glow (behind pyramid) ── */}
      <ellipse cx="400" cy="45" rx="220" ry="140"
        fill="url(#pm-apex-light)" filter="url(#pm-apex-glow)"/>

      {/* ══ LOGS layer ══ */}
      <g clipPath="url(#cp-logs)">
        <polygon points="119,372 681,372 765,470 35,470"
          fill="rgba(10,18,40,0.88)"/>
        <polygon points="119,372 681,372 765,470 35,470"
          fill="url(#pm-logs-poly)"/>
        {/* subtle inner highlight at top edge */}
        <polygon points="119,372 681,372 765,470 35,470"
          fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="1"/>
      </g>

      {/* ══ METRICS layer ══ */}
      <g clipPath="url(#cp-metrics)">
        <polygon points="208,268 592,268 681,372 119,372"
          fill="rgba(15,28,65,0.82)"/>
        <polygon points="208,268 592,268 681,372 119,372"
          fill="url(#pm-metrics-dots)"/>
      </g>

      {/* ══ TRACES layer ══ */}
      <g clipPath="url(#cp-traces)">
        <polygon points="306,155 494,155 592,268 208,268"
          fill="rgba(10,40,80,0.78)"/>
        <polygon points="306,155 494,155 592,268 208,268"
          fill="url(#pm-traces-wave)"/>
        <polygon points="306,155 494,155 592,268 208,268"
          fill="rgba(6,182,212,0.05)"/>
      </g>

      {/* ══ OPERATIONAL INTELLIGENCE layer ══ */}
      <g clipPath="url(#cp-intel)">
        <polygon points="400,45 306,155 494,155"
          fill="url(#pm-intel-grad)"/>
        {/* crystal facets */}
        <polygon points="400,45 350,155 400,130"
          fill="rgba(255,255,255,0.12)"/>
        <polygon points="400,45 450,155 400,130"
          fill="rgba(255,255,255,0.08)"/>
      </g>

      {/* ── Layer divider lines (glowing) ── */}
      <line x1="306" y1="155" x2="494" y2="155"
        stroke="rgba(34,211,238,0.55)" strokeWidth="1.2"
        filter="url(#pm-divider-glow)"/>
      <line x1="208" y1="268" x2="592" y2="268"
        stroke="rgba(59,130,246,0.5)" strokeWidth="1.2"
        filter="url(#pm-divider-glow)"/>
      <line x1="119" y1="372" x2="681" y2="372"
        stroke="rgba(71,85,105,0.45)" strokeWidth="1"
        filter="url(#pm-divider-glow)"/>

      {/* ── Pyramid outline ── */}
      <polygon points="400,45 35,470 765,470"
        fill="none"
        stroke="rgba(148,163,184,0.22)"
        strokeWidth="1.2"
        filter="url(#pm-edge-glow)"/>

      {/* ── Apex beacon ── */}
      <circle cx="400" cy="45" r="30"
        fill="rgba(165,243,252,0.08)" filter="url(#pm-apex-glow)"/>
      <circle cx="400" cy="45" r="18"
        fill="none" stroke="rgba(165,243,252,0.18)" strokeWidth="1"
        filter="url(#pm-apex-glow)"/>
      <circle cx="400" cy="45" r="9"
        fill="none" stroke="rgba(165,243,252,0.35)" strokeWidth="1"/>
      <circle cx="400" cy="45" r="5.5"
        fill="#e0f2fe" filter="url(#pm-apex-glow)"
        style={{ animation: 'pm-beacon 2.4s ease-in-out infinite' }}/>

      {/* ── Layer labels — right side ── */}
      <text x="508" y="105"
        fontSize="10.5" fontFamily="Geist,Inter,sans-serif" fontWeight="700"
        fill="rgba(186,230,253,0.80)" letterSpacing="1.5">
        OPERATIONAL INTELLIGENCE
      </text>
      <text x="603" y="218"
        fontSize="10.5" fontFamily="Geist,Inter,sans-serif" fontWeight="700"
        fill="rgba(34,211,238,0.72)" letterSpacing="1.5">
        TRACES
      </text>
      <text x="693" y="325"
        fontSize="10.5" fontFamily="Geist,Inter,sans-serif" fontWeight="700"
        fill="rgba(96,165,250,0.68)" letterSpacing="1.5">
        METRICS
      </text>
      <text x="690" y="428"
        fontSize="10.5" fontFamily="Geist,Inter,sans-serif" fontWeight="700"
        fill="rgba(148,163,184,0.58)" letterSpacing="1.5">
        LOGS
      </text>
    </svg>
  )
}
