'use client'

import { Menu } from 'lucide-react'
import LanguageToggle from './LanguageToggle'

interface MobileHeaderProps {
  onToggle: () => void
}

export default function MobileHeader({ onToggle }: MobileHeaderProps) {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-[200] flex h-16 items-center justify-between px-6 lg:hidden"
      style={{
        background: 'rgba(10, 15, 26, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
      }}
    >
      <span
        className="text-2xl font-bold tracking-tight"
        style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
      >
        GV
      </span>

      {/* Language toggle — center of mobile header */}
      <LanguageToggle variant="inline" />

      <button
        onClick={onToggle}
        className="rounded-lg p-2 transition-colors hover:bg-white/5"
        style={{ color: 'var(--text-primary)' }}
        aria-label="Toggle menu"
      >
        <Menu size={22} />
      </button>
    </header>
  )
}
