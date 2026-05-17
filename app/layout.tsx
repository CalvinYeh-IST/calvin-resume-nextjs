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
  title: '葉書魁 Calvin Yeh｜TCC Group HR 內容架構師 應徵',
  description: '七年跨界實戰｜AI 工具驅動內容產出｜變革溝通 × 培訓設計 × 數位專案管理',
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
