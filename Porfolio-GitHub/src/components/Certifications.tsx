import { BadgeCheck, GraduationCap } from 'lucide-react'

const meliCerts = [
  {
    code: 'SSDLC',
    name: 'Secure Software Development Lifecycle',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.2)',
  },
  {
    code: 'SEC',
    name: 'Security Guardians',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.2)',
  },
  {
    code: 'PY',
    name: 'Python Development',
    color: '#3776ab',
    bg: 'rgba(55, 118, 171, 0.12)',
    border: 'rgba(55, 118, 171, 0.2)',
  },
  {
    code: 'GO',
    name: 'Go Programming',
    color: '#00add8',
    bg: 'rgba(0, 173, 216, 0.12)',
    border: 'rgba(0, 173, 216, 0.2)',
  },
  {
    code: 'JAVA',
    name: 'Java Development',
    color: '#f89820',
    bg: 'rgba(248, 152, 32, 0.12)',
    border: 'rgba(248, 152, 32, 0.2)',
  },
  {
    code: 'NODE',
    name: 'Node.js Development',
    color: '#68a063',
    bg: 'rgba(104, 160, 99, 0.12)',
    border: 'rgba(104, 160, 99, 0.2)',
  },
]

export default function Certifications() {
  return (
    <div
      className="rounded-2xl p-8 transition-all duration-300 hover:border-white/10"
      style={{
        background: 'rgba(17, 24, 39, 0.55)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(12px) saturate(180%)',
      }}
    >
      {/* Section header */}
      <div className="mb-7">
        <div
          className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}
        >
          Certifications
        </div>
        <h2 className="mt-2 text-lg font-semibold" style={{ color: '#f8fafc' }}>
          Credentials & Technical Training
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[360px_1fr]">

        {/* Industry cert — Elastic */}
        <div
          className="flex flex-col gap-5 rounded-[18px] p-6"
          style={{
            background: 'rgba(240, 78, 35, 0.05)',
            border: '1px solid rgba(240, 78, 35, 0.2)',
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="font-geist flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-bold"
              style={{
                background: 'rgba(240, 78, 35, 0.15)',
                border: '1px solid rgba(240, 78, 35, 0.3)',
                color: '#f04e23',
                letterSpacing: '-0.02em',
              }}
            >
              ECO
            </div>
            <div>
              <div
                className="font-geist mb-1.5 text-[10px] font-bold uppercase tracking-[0.1em]"
                style={{ color: '#f04e23' }}
              >
                Elastic · Industry Certification
              </div>
              <h3 className="text-sm font-semibold leading-snug" style={{ color: '#f8fafc' }}>
                Elastic Certified Observability Engineer
              </h3>
            </div>
          </div>

          <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
            Validates deep expertise in building enterprise observability solutions with Elastic
            Stack — APM, distributed tracing, log analytics, metrics, and synthetic monitoring.
          </p>

          <div
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium"
            style={{
              background: 'rgba(240, 78, 35, 0.08)',
              border: '1px solid rgba(240, 78, 35, 0.15)',
              color: '#f04e23',
              width: 'fit-content',
            }}
          >
            <BadgeCheck size={13} />
            Verified Credential
          </div>
        </div>

        {/* MercadoLibre internal certs */}
        <div>
          <div
            className="mb-4 flex items-center gap-3 rounded-[14px] px-4 py-3"
            style={{
              background: 'rgba(255, 230, 0, 0.04)',
              border: '1px solid rgba(255, 230, 0, 0.1)',
            }}
          >
            <div
              className="font-geist flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
              style={{ background: '#FFE600', color: '#0d1117' }}
            >
              ML
            </div>
            <div>
              <div className="text-[13px] font-semibold" style={{ color: '#f8fafc' }}>
                MercadoLibre
              </div>
              <div className="text-[11px]" style={{ color: '#64748b' }}>
                Internal Technical Training · Latin America&apos;s Largest E-Commerce & Fintech
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {meliCerts.map(({ code, name, color, bg, border }) => (
              <div
                key={code}
                className="flex flex-col gap-3 rounded-[14px] p-4 transition-all duration-200"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div
                  className="font-geist flex h-10 w-10 items-center justify-center rounded-[10px] text-[10px] font-bold tracking-[0.04em]"
                  style={{ background: bg, border: `1px solid ${border}`, color }}
                >
                  {code}
                </div>
                <div className="text-[11px] font-medium leading-snug" style={{ color: '#94a3b8' }}>
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic credential */}
      <div
        className="mt-5 flex items-center gap-4 rounded-[14px] px-5 py-4"
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px]"
          style={{ background: 'rgba(139, 92, 246, 0.12)', border: '1px solid rgba(139, 92, 246, 0.2)' }}
        >
          <GraduationCap size={18} style={{ color: '#8b5cf6' }} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold" style={{ color: '#f8fafc' }}>
            Técnico en Redes de Datos y Telecomunicaciones
          </div>
          <div className="mt-0.5 text-[11px]" style={{ color: '#64748b' }}>
            Universidad Nacional de Cuyo (UNCUYO) · 2022
          </div>
        </div>
        <div
          className="flex-shrink-0 rounded-lg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
          style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}
        >
          Certified
        </div>
      </div>
    </div>
  )
}
