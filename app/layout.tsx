import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'NavArrow | Desarrollo Web y Soporte Técnico',
  description: 'Expertos en desarrollo de software y soporte técnico especializado para Pymes. Impulsamos su negocio con soluciones tecnológicas reales y profesionales.',
  keywords: ['Desarrollo Web Corrientes', 'Soporte Técnico PC', 'Programación React .NET', 'Digitalización Pymes', 'NavArrow', 'Soluciones IT'],
  authors: [{ name: 'NavArrow Team' }],
  creator: 'NavArrow',
  
  openGraph: {
    title: 'NavArrow | Soluciones Digitales',
    description: 'Transformamos su negocio local con tecnología de alto rendimiento. Desarrollo web y mantenimiento técnico profesional.',
    url: 'https://navarrow.com.ar',
    siteName: 'NavArrow',
    locale: 'es_AR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

 const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NavArrow',
    image: 'https://navarrow.com.ar/monograma-trim.png',
    description: 'Expertos en desarrollo de software y soporte técnico especializado para Pymes.',
    '@id': 'https://navarrow.com.ar',
    url: 'https://navarrow.com.ar',
    telephone: '+543794003967',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Centro',
      addressLocality: 'Corrientes',
      addressRegion: 'Corrientes',
      postalCode: 'W3400',
      addressCountry: 'AR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.4692,
      longitude: -58.8306
    },
    priceRange: '$$',
    sameAs: [
      'https://github.com/SergiNavarr',
      'https://linkedin.com/in/tu-perfil'
    ]
  }

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}