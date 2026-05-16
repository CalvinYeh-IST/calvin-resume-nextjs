const jobs = [
  {
    role: '數位營運專員 ＋ App 開發項目負責人',
    date: '2024.11 — 至今',
    org: '看見台灣基金會（非營利 · 積極數位轉型中）',
    bullets: [
      '主導數據優化專案，於 BigQuery 環境建置 15+ 座 Power BI 自動化儀表板，12 個月內將海外流量佔比由 15% 提升至 40%，以精準受眾分析驅動策略決策',
      '統籌網站合併與年度行銷專案，協調 4+ 跨部門關係人，向高階主管交付技術簡報，確保年度服務合約有效續約',
      '擔任 App 開發 UI/UX 對外窗口，統籌使用者研究、功能規劃、廠商協同，於預定時程內完成測試上架；首季用戶留存率 40%',
      '首年內因高壓環境下的多軸線應變能力晉升為項目負責人；建立內部知識共享機制，促進跨單位決策效率',
    ],
    tags: ['BigQuery / SQL', 'Power BI', 'GA4', 'App 專案管理', '跨部門協調', '數位轉型'],
  },
  {
    role: '技術團隊負責人（中士班長）',
    date: '2020.09 — 2024.09',
    org: '國防部陸軍總司令部（大型組織 · 4 年管理實戰）',
    bullets: [
      '設計並交付 20+ 場大型培訓專案，累計培訓 200+ 技術人員，建立「可重複使用的內部知識架構」，成為團隊新人養成標準教材',
      '主動推動數位轉型：建置 Excel 自動化追蹤系統，整合 10 位分散成員，取代原有紙本流程，降低資料傳遞誤差率',
      '重新設計關鍵資產維護後勤 SOP，工作流程再造將週轉時間由 3 週縮短至 1 週（效率 +66%），展現跨層級變革溝通能力',
      '領導 14 人技術團隊，於跨國聯合任務中擔任唯一對外溝通窗口，達成跨組織、跨語言零誤差協調',
    ],
    tags: ['知識庫建構', '培訓內容設計', 'SOP 再造', '變革溝通', '多層級關係人管理'],
  },
  {
    role: '媒體企劃',
    date: '2019.08 — 2020.08',
    org: '貝立德股份有限公司（Dentsu Group 電通集團 · 媒體策略）',
    bullets: [
      '建置多平台數據整合自動化模板，標準化碎片化報表流程，將分析效率提升 30%，解放策略思考時間',
      '服務 FMCG 與家電國際品牌，運用第三方工具研析輿情與市場趨勢，提供具執行性的市場洞察建議',
    ],
    tags: ['自動化模板', '多平台數據整合', '市場洞察'],
  },
  {
    role: '成長行銷（創始成員）',
    date: '2018.04 — 2019.07',
    org: '全景教育股份有限公司（升學顧問新創 · 從零建立）',
    bullets: [
      '獨立建置公司首套數位行銷架構，Facebook 精準再行銷獲取 50 位高意向潛客，實際轉換 35 位付費學員，帶進 500 萬元以上營收（成交率 70%）',
      '導入 A/B 測試框架，每週穩定產出 5+ 行銷素材；規劃並拍攝見證式影音廣告，首季將社群追蹤人數從 0 拓展至 1,000+',
    ],
    tags: ['A/B 測試', '內容策略', 'Facebook Ads', '影音腳本'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-header reveal">
          <span className="sec-num">02</span>
          <h2 className="sec-title">經歷脈絡</h2>
          <span className="sec-line" />
        </div>
        <div className="timeline">
          {jobs.map((job) => (
            <div key={job.role} className="tl-item reveal">
              <div className="tl-head">
                <h3 className="tl-role">{job.role}</h3>
                <span className="tl-date">{job.date}</span>
              </div>
              <p className="tl-org">{job.org}</p>
              <ul className="tl-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="tl-tags">
                {job.tags.map((t) => (
                  <span key={t} className="tl-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
