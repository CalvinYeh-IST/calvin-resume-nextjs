import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono, Noto_Serif_TC } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: '葉書魁 Calvin Yeh｜HR 內容架構師 × TCC Group',
  description: '互動式履歷 — 數位行銷 × 組織變革溝通 × AI 驅動內容生產',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh-TW"
      className={`${cormorant.variable} ${dmMono.variable} ${notoSerifTC.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
