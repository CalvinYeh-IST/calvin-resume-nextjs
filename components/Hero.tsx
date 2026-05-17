export default function Hero() {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="sustain-badge">
              <span className="sustain-dot">●</span>
              TCC 永續轉型 × AI 驅動
            </div>
            <p className="hero-eyebrow">
              TCC GROUP · HRIS CORE TEAM · HR 內容架構師 候選人
            </p>
            <h1 className="hero-name">
              葉書<em>魁</em>
              <br />
              Calvin Yeh
            </h1>
            <p className="hero-subtitle">
              內容策略 × 變革溝通設計 × AI 工具整合
            </p>
            <p className="hero-en-tagline">
              "I translate complex systems into stories people actually want to follow."
            </p>
            <p className="hero-quote">
              過去七年，
              <br />
              我做的只有一件事——
              <br />
              把複雜的系統，
              <br />
              翻譯成人們願意跟進的語言。
            </p>
            <div className="hero-ctas">
              <a href="#chat" className="btn-primary">直接對話</a>
              <a href="#positioning" className="btn-secondary">了解更多</a>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-label">聯繫資訊</p>
            <div className="contact-row">
              <span className="contact-icon">✉</span>
              <a href="mailto:ya861203@gmail.com">ya861203@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-icon">☎</span>
              <span>(+886) 981-480-457</span>
            </div>
            <div className="contact-row">
              <span className="contact-icon">🔗</span>
              <a
                href="https://www.linkedin.com/in/shukuei-yeh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/shukuei-yeh
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <rect x="1" y="1" width="16" height="20" rx="8" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="9" y1="6" x2="9" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  )
}
