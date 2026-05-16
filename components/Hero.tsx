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
              數位行銷 × 組織變革溝通 × AI 驅動內容生產
            </p>
            <p className="hero-quote">
              我不是傳統人資背景——我來自數位轉型的第一線。
              <br />
              在軍隊裡推動過 Excel 數位化取代紙本；
              <br />
              在新創從零建起行銷架構並帶進 500 萬元營收；
              <br />
              在非營利組織讓 BigQuery 數據說話、讓 App 上線留存。
              <br />
              <br />
              HR 內容架構師，是把這一切整合起來最自然的舞台。
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
                  Power BI
                  <br />
                  儀表板
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-num">200+</span>
                <span className="stat-lbl">
                  培訓設計
                  <br />
                  人次
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-num">70%</span>
                <span className="stat-lbl">
                  銷售轉換率
                  <br />
                  新創實績
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-num">7yr</span>
                <span className="stat-lbl">
                  跨產業
                  <br />
                  實戰經歷
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
