import ClientWrapper from '@/components/ClientWrapper'
import Hero from '@/components/Hero'
import MetricsGrid from '@/components/MetricsGrid'
import ArchitectureDiagramFlow from '@/components/ArchitectureDiagramFlow'
import CaseStudies from '@/components/CaseStudies'
import Principles from '@/components/Principles'
import HomeLab from '@/components/HomeLab'
import EngagementModels from '@/components/EngagementModels'
import Certifications from '@/components/Certifications'
import Resume from '@/components/Resume'
import ContractorMode from '@/components/ContractorMode'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ClientWrapper>
      <div id="overview">
        <Hero />
        <MetricsGrid />
      </div>

      <div id="architectures" className="px-6 pb-8 md:px-12">
        <ArchitectureDiagramFlow />
      </div>

      <section className="grid grid-cols-1 items-stretch gap-5 px-6 pb-8 md:grid-cols-2 md:px-12">
        <div id="case-studies" className="flex flex-col"><CaseStudies /></div>
        <div id="principles" className="flex flex-col"><Principles /></div>
      </section>

      <section className="grid grid-cols-1 items-stretch gap-5 px-6 pb-8 md:grid-cols-2 md:px-12">
        <div id="home-lab" className="flex flex-col"><HomeLab /></div>
        <div id="engagement-models" className="flex flex-col"><EngagementModels /></div>
      </section>

      <div id="certifications" className="px-6 pb-8 md:px-12">
        <Certifications />
      </div>

      <div id="resume" className="px-6 pb-8 md:px-12">
        <Resume />
      </div>

      <div id="contractor" className="px-6 pb-8 md:px-12">
        <ContractorMode />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </ClientWrapper>
  )
}
