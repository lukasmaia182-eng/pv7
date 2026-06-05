import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Desafio Desapego Narcisista | 7 Dias Para se Libertar — Dra. Jane Hansen',
  description:
    'Em 7 dias você quebra o vínculo traumático que está destruindo seu sono, seu corpo e sua autoestima. Mais de 3.600 mulheres já se libertaram. Agora é a sua vez.',
  keywords: [
    'desapego narcisista',
    'relacionamento abusivo',
    'trauma narcisista',
    'vínculo traumático',
    'cura emocional',
    'Dra Jane Hansen',
    'desafio 7 dias',
  ],
  openGraph: {
    title: 'Desafio Desapego Narcisista | 7 Dias Para se Libertar',
    description:
      'Em 7 dias você quebra o vínculo traumático que está destruindo seu sono, seu corpo e sua autoestima.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#6b1a1a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
