import { ArrowRight } from 'lucide-react'

interface Article {
  category: string
  title: string
  date: string
}

const articles: Article[] = [
  {
    category: 'Architecture',
    title: 'OpenTelemetry on SAP BTP: Complete Implementation Guide',
    date: 'May 18, 2026',
  },
  {
    category: 'Security',
    title: 'Designing SIEM for Enterprise Environments',
    date: 'May 10, 2026',
  },
  {
    category: 'Operations',
    title: 'Elasticsearch Storage Optimization at Scale',
    date: 'May 02, 2026',
  },
  {
    category: 'Infrastructure',
    title: 'VPN Monitoring with StrongSwan & Elastic Stack',
    date: 'Apr 24, 2026',
  },
]

export default function Articles() {
  return (
    <div
      className="rounded-2xl p-6 transition-all duration-300 hover:border-white/10"
      style={{
        background: 'rgba(17, 24, 39, 0.55)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(12px) saturate(180%)',
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <div
          className="font-geist text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: '#3b82f6' }}
        >
          Latest Articles
        </div>
        <h2 className="mt-2 text-lg font-semibold" style={{ color: '#f8fafc' }}>
          Technical Writing
        </h2>
      </div>

      {/* Article list */}
      <div className="flex flex-col">
        {articles.map(({ category, title, date }) => (
          <div
            key={title}
            className="article-item border-b py-3.5 transition-all duration-200 last:border-b-0"
            style={{ borderColor: 'rgba(255, 255, 255, 0.04)', paddingLeft: 0 }}
          >
            <div
              className="font-geist mb-1 text-[10px] font-semibold uppercase tracking-[0.08em]"
              style={{ color: '#06b6d4' }}
            >
              {category}
            </div>
            <div
              className="article-title mb-1 text-[13px] font-medium leading-snug"
              style={{ color: '#94a3b8' }}
            >
              {title}
            </div>
            <div
              className="font-geist text-[11px]"
              style={{ color: '#64748b' }}
            >
              {date}
            </div>
          </div>
        ))}
      </div>

      <button
        className="panel-cta mt-4 flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-xs font-medium transition-all duration-200"
        style={{ color: '#3b82f6', fontFamily: 'Geist, Inter, sans-serif' }}
      >
        View all articles
        <ArrowRight size={13} />
      </button>
    </div>
  )
}
