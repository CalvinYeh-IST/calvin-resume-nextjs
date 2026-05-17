const items = [
  { check: '✅', label: '專案管理', text: 'App 項目負責人、網站合併、年度行銷專案' },
  { check: '✅', label: '培訓設計', text: '20+ 場培訓企劃，可複用知識架構設計' },
  { check: '✅', label: '影音製作', text: '見證式影音廣告規劃與拍攝，腳本撰寫' },
  { check: '✅', label: '流程自動化', text: 'Excel 自動化、Power BI、Vibe Coding no-code 工具' },
  { check: '✅', label: '自主創作', text: '本履歷即為完整的自主創作案例：以 Next.js 架設、內建 AI 對話介面的互動式作品集，從架構設計、內容撰寫到 AI 工具整合，完整展示 HR 內容架構師的核心能力組合' },
]

export default function Bonus() {
  return (
    <section id="bonus">
      <div className="wrap">
        <div className="sec-header reveal">
          <span className="sec-num">05</span>
          <h2 className="sec-title">加分條件</h2>
          <span className="sec-line" />
        </div>
        <div className="bonus-grid reveal">
          {items.map((item) => (
            <div key={item.label} className="bonus-item">
              <div className="bonus-check">{item.check}</div>
              <p className="bonus-label">{item.label}</p>
              <p className="bonus-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
