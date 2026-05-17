export default function Hero() {
  return (
    <section id="hero">
      {/* TCC twin-loop — two interlocking arcs echoing the infinity logo symbol */}
      <div className="hero-arc" aria-hidden="true">
        <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Silver gradient for left loop — light on outer edge, darker inside */}
            <linearGradient id="lgLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D2D6DC" stopOpacity="0.60"/>
              <stop offset="38%" stopColor="#A8ADB5" stopOpacity="0.38"/>
              <stop offset="100%" stopColor="#6B7280" stopOpacity="0.10"/>
            </linearGradient>
            {/* Slightly darker gradient for right loop */}
            <linearGradient id="lgRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B0B5BC" stopOpacity="0.42"/>
              <stop offset="100%" stopColor="#6B7280" stopOpacity="0.08"/>
            </linearGradient>
          </defs>

          {/* Outer frame ring — very subtle, defines overall scale */}
          <circle cx="350" cy="350" r="322" stroke="rgba(162,165,170,0.10)" strokeWidth="1"/>

          {/* Left loop — dominant silver (TCC left loop) */}
          <circle cx="258" cy="350" r="225" stroke="url(#lgLeft)" strokeWidth="4"/>
          <circle cx="258" cy="350" r="218" stroke="rgba(200,205,212,0.16)" strokeWidth="1"/>
          <circle cx="258" cy="350" r="232" stroke="rgba(145,150,158,0.10)" strokeWidth="1"/>

          {/* Right loop — secondary (TCC right loop) */}
          <circle cx="442" cy="350" r="225" stroke="url(#lgRight)" strokeWidth="3"/>
          <circle cx="442" cy="350" r="218" stroke="rgba(162,168,175,0.12)" strokeWidth="1"/>

          {/* Brand red accent arc: upper-right quarter of right loop */}
          <path
            className="arc-accent"
            d="M 442 125 A 225 225 0 0 1 667 350"
            stroke="rgba(201,64,53,0.65)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="442" cy="125" r="4.5" fill="rgba(201,64,53,0.80)"/>
          <circle cx="667" cy="350" r="4.5" fill="rgba(201,64,53,0.80)"/>
        </svg>
      </div>

      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">
              TCC GROUP · HRIS CORE TEAM · HR 內容架構師 候選人
            </p>
            <h1 className="hero-name">
              <span className="hero-name-cn">葉書魁</span>
              <span className="hero-name-divider" />
              <span className="hero-name-en">Calvin Yeh</span>
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
