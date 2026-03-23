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

  icons: {
    icon: [
      {
        url: '/monograma-trim.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/monograma-trim.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
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
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}