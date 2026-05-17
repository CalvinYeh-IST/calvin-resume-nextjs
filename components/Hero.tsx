export default function Hero() {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">
              TCC Group · HRIS Core Team · HR 內容架構師 候選人
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
              過去七年，我在三個截然不同的場域做同一件事：
              <br />
              把複雜的系統、流程和制度，翻譯成人們聽得懂並願意跟進的語言。
              <br />
              <br />
              軍隊裡，我說服 10 位習慣紙本的成員切換到數位系統；
              <br />
              新創裡，我從零建起行銷架構，把潛在客戶的疑慮轉化成付費決策；
              <br />
              非營利組織裡，我讓數據在簡報裡說話，讓 App 在期限內上線。
              <br />
              <br />
              這件事有個正式的名字叫「變革溝通」。而 TCC 現在需要的，正是這個。
            </p>
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
            <hr className="card-divider" />
            <p className="card-label">核心數字</p>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-num">15+</span>
                <span className="stat-lbl">
                  Power BI 自動化
                  <br />
                  儀表板
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-num">200+</span>
                <span className="stat-lbl">
                  人次技術培訓
                  <br />
                  設計與交付
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-num">70%</span>
                <span className="stat-lbl">
                  潛客成交率
                  <br />
                  （35/50 人轉換）
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-num">7yr</span>
                <span className="stat-lbl">
                  三產業
                  <br />
                  跨界實戰
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
