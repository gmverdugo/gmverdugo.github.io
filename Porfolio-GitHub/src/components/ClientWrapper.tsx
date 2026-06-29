'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import LanguageToggle from './LanguageToggle'
import { LanguageProvider } from '@/context/LanguageContext'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId)
    if (window.innerWidth < 1024) setSidebarOpen(false)
  }

  return (
    <LanguageProvider>
      <>
        <MobileHeader onToggle={() => setSidebarOpen((v) => !v)} />

        {/* Floating language toggle — desktop only (sidebar has its own inline toggle) */}
        <div className="fixed right-6 top-5 z-[150] hidden lg:block">
          <LanguageToggle variant="floating" />
        </div>

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-[90] bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="ml-0 min-h-screen pt-16 lg:ml-[260px] lg:pt-0">{children}</main>
      </>
    </LanguageProvider>
  )
}
