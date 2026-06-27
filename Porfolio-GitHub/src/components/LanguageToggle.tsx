'use client'

import { Globe } from 'lucide-react'
import { useLanguage, type Lang } from '@/context/LanguageContext'

interface LanguageToggleProps {
  /** 'floating' = pill with shadow for fixed header placement; 'inline' = borderless for embedding */
  variant?: 'floating' | 'inline'
}

export default function LanguageToggle({ variant = 'floating' }: LanguageToggleProps) {
  const { lang, toggle } = useLanguage()

  const isFloating = variant === 'floating'

  return (
    <button
      onClick={toggle}
      aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
      className="flex items-stretch overflow-hidden rounded-full transition-all duration-200"
      style={
        isFloating
          ? {
              background: 'rgba(10, 15, 26, 0.90)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow:
                '0 4px 24px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(59,130,246,0.07)',
            }
          : {
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }
      }
    >
      {/* Globe icon slot */}
      <span
        className="flex items-center pl-3 pr-1"
        style={{ color: 'rgba(59,130,246,0.55)' }}
      >
        <Globe size={11} />
      </span>

      {/* EN segment */}
      <Segment active={lang === 'en'} label="EN" />

      {/* Divider */}
      <span
        className="my-1.5"
        style={{ width: 1, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }}
      />

      {/* ES segment */}
      <Segment active={lang === 'es'} label="ES" />
    </button>
  )
}

function Segment({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className="flex items-center px-3 py-2 text-[11px] font-bold tracking-widest transition-all duration-200"
      style={{
        background: active ? 'rgba(59,130,246,0.18)' : 'transparent',
        color: active ? '#3b82f6' : 'rgba(148,163,184,0.45)',
        letterSpacing: '0.06em',
      }}
    >
      {label}
    </span>
  )
}
