'use client'

import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const close = () => setMobileOpen(false)

  return (
    <nav className="site-nav" id="nav">
      <span className="nav-brand">葉書魁 Calvin Yeh</span>

      <ul className={`nav-links${mobileOpen ? ' mobile-open' : ''}`}>
        <li><a href="#positioning" onClick={close}>定位</a></li>
        <li><a href="#pillars" onClick={close}>能力</a></li>
        <li><a href="#experience" onClick={close}>經歷</a></li>
        <li><a href="#achievements" onClick={close}>成果</a></li>
        <li><a href="#skills" onClick={close}>技能</a></li>
        <li><a href="#chat" onClick={close}>對話</a></li>
      </ul>

      <div className="nav-actions">
        <button className="btn-print" onClick={() => window.print()}>
          列印 A4
        </button>
        <button
          className="hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="開啟選單"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
