'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
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

        <main className="ml-0 min-h-screen lg:ml-[260px]">{children}</main>
      </>
    </LanguageProvider>
  )
}
