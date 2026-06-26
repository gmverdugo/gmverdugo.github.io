'use client'

import {
  LayoutDashboard,
  Network,
  FolderOpen,
  FlaskConical,
  BadgeCheck,
  Handshake,
  FileText,
  Briefcase,
  Mail,
  MapPin,
  Globe,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

interface NavItem {
  label: string
  icon: React.ElementType
  sectionId: string
}

interface NavGroup {
  label: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    label: 'Portfolio',
    items: [
      { label: 'Overview',     icon: LayoutDashboard, sectionId: 'overview' },
      { label: 'Architecture', icon: Network,          sectionId: 'architectures' },
      { label: 'Client Work',  icon: FolderOpen,       sectionId: 'case-studies' },
      { label: 'Lab',          icon: FlaskConical,     sectionId: 'home-lab' },
    ],
  },
  {
    label: 'Profile',
    items: [
      { label: 'Certifications', icon: BadgeCheck, sectionId: 'certifications' },
      { label: 'Resume',         icon: FileText,   sectionId: 'resume' },
    ],
  },
  {
    label: 'Hire Me',
    items: [
      { label: 'Engagement', icon: Handshake, sectionId: 'engagement-models' },
      { label: 'Services',   icon: Briefcase, sectionId: 'contractor' },
      { label: 'Contact',    icon: Mail,      sectionId: 'contact' },
    ],
  },
]

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/gmv88',             color: '#0a66c2' },
  { icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/gmverdugo',              color: '#f0f6fc' },
  { icon: Mail,       label: 'Email',    href: 'mailto:gonzalomartinverdugo@gmail.com',     color: '#3b82f6', isLucide: true },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Sidebar({ isOpen, onClose, activeSection, onNavigate }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-[100] flex h-screen w-[260px] flex-col overflow-y-auto py-7 px-5 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{
        background: 'rgba(10, 15, 26, 0.95)',
        borderRight: '1px solid var(--border)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Logo */}
      <div className="mb-6">
        <div
          className="text-2xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          GV
        </div>
        <div
          className="font-geist mt-1 text-[11px] font-semibold uppercase tracking-widest"
          style={{ color: 'var(--text-muted)' }}
        >
          Enterprise Observability
        </div>
      </div>

      {/* Profile mini card */}
      <div
        className="mb-5 flex items-center gap-3 rounded-2xl p-3.5"
        style={{
          background: 'var(--surface-glass)',
          border: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-xl font-bold"
          style={{
            width: 48,
            height: 48,
            background: 'linear-gradient(135deg, #1e3a5f, #0f172a)',
            color: 'var(--text-primary)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
          }}
        >
          GV
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Gonzalo Verdugo
          </h3>
          <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
            Observability Architect
          </p>
          <div
            className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5"
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            <div
              className="availability-dot h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--success)', flexShrink: 0 }}
            />
            <span className="font-geist text-[10px] font-medium" style={{ color: 'var(--success)' }}>
              Available
            </span>
          </div>
        </div>
      </div>

      {/* Navigation — grouped */}
      <nav className="mb-4 flex-1 flex flex-col gap-5">
        {navGroups.map((group) => (
          <div key={group.label}>
            <div
              className="font-geist mb-2 pl-3 text-[9px] font-bold uppercase tracking-[0.15em]"
              style={{ color: 'var(--text-muted)', opacity: 0.5 }}
            >
              {group.label}
            </div>
            {group.items.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.sectionId
              return (
                <a
                  key={item.label}
                  href={`#${item.sectionId}`}
                  className={`nav-item${isActive ? ' active' : ''}`}
                  onClick={() => onNavigate(item.sectionId)}
                >
                  <Icon size={15} style={{ opacity: isActive ? 1 : 0.55, flexShrink: 0 }} />
                  <span className="truncate">{item.label}</span>
                </a>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Sidebar footer */}
      <div className="mt-auto pt-5" style={{ borderTop: '1px solid var(--border)' }}>
        {/* Location — two lines */}
        <div className="mb-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={11} style={{ flexShrink: 0, opacity: 0.7 }} />
            <span>Mendoza, Argentina</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--text-muted)' }}>
            <Globe size={11} style={{ flexShrink: 0, opacity: 0.7 }} />
            <span>Remote-First · Worldwide</span>
          </div>
        </div>

        {/* Social links */}
        <div className="mb-5 flex gap-2">
          {socialLinks.map(({ icon: Icon, label, href, color, isLucide }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={label}
              className="flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${color}15`
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.color = color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              <Icon size={isLucide ? 14 : 13} />
            </a>
          ))}
        </div>

        <div className="text-[11px]" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
          &copy; 2026 Gonzalo Verdugo
        </div>
      </div>
    </aside>
  )
}
