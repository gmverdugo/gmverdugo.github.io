import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gonzalo Verdugo — Enterprise Observability Architect',
  description:
    'I architect and build secure, reliable and cost-efficient observability platforms that deliver real operational intelligence at enterprise scale.',
  keywords: [
    'Elasticsearch',
    'Observability',
    'Enterprise Architecture',
    'OpenTelemetry',
    'SIEM',
    'Kibana',
    'DevSecOps',
    'Gonzalo Verdugo',
  ],
  authors: [{ name: 'Gonzalo Verdugo' }],
  openGraph: {
    title: 'Gonzalo Verdugo — Enterprise Observability Architect',
    description:
      'Designing observability platforms that scale. Enterprise Elasticsearch, OpenTelemetry, SIEM.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
