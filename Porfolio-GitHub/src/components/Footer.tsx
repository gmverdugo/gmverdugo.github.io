'use client'

import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useLanguage } from '@/context/LanguageContext'

const contacts = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/gmv88',            color: '#0a66c2' },
  { icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/gmverdugo',             color: '#f0f6fc' },
  { icon: Mail,       label: 'Email',    href: 'mailto:gonzalomartinverdugo@gmail.com',    color: '#3b82f6', isLucide: true },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="mx-6 mb-10 rounded-2xl p-8 md:mx-12 md:p-10"
      style={{
        background: 'rgba(17, 24, 39, 0.55)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(12px) saturate(180%)',
      }}
    >
      {/* Quote + signature */}
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12">
        <blockquote
          className="flex-1 border-l-[3px] pl-6 text-base italic leading-[1.75] md:text-lg"
          style={{ color: '#94a3b8', borderColor: '#3b82f6', maxWidth: 640 }}
        >
          {t.footer.quote}
        </blockquote>

        <div className="flex-shrink-0 text-right">
          <div
            className="text-2xl font-bold italic"
            style={{ color: '#f8fafc', letterSpacing: '-0.015em' }}
          >
            Gonzalo Verdugo
          </div>
          <div
            className="font-geist mt-1.5 text-[11px] font-medium uppercase tracking-[0.1em]"
            style={{ color: '#64748b' }}
          >
            {t.footer.title}
          </div>
        </div>
      </div>

      {/* Contact row */}
      <div
        className="mt-8 flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p className="text-[12px]" style={{ color: '#475569' }}>
          {t.footer.availability}
        </p>

        <div className="flex items-center gap-2">
          {contacts.map(({ icon: Icon, label, href, color, isLucide }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={label}
              className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-[12px] font-medium transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: '#64748b',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${color}12`
                e.currentTarget.style.borderColor = `${color}40`
                e.currentTarget.style.color = color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.color = '#64748b'
              }}
            >
              <Icon size={isLucide ? 14 : 13} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
