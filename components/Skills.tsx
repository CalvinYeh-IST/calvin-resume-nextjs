const groups = [
  {
    title: 'AI 工具',
    items: ['Claude (Anthropic)', 'Cursor / Vibe Coding', 'ChatGPT', 'AI 影像生成', 'AI 輔助簡報'],
  },
  {
    title: '數據分析',
    items: ['BigQuery / SQL', 'GA4 分析', 'Power BI', 'Excel 自動化', 'Python（基礎）'],
  },
  {
    title: '內容製作',
    items: ['社群策略規劃', 'A/B 測試框架', 'Facebook Ads', '影音腳本規劃', 'UI/UX 需求轉譯'],
  },
  {
    title: '專案管理',
    items: ['多軸線並行管理', 'SOP 設計', '供應商管理', '培訓內容設計', '英文流利（TOEIC 890）'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-header reveal">
          <span className="sec-num">04</span>
          <h2 className="sec-title">工具與能力</h2>
          <span className="sec-line" />
        </div>
        <div className="skills-grid reveal">
          {groups.map((g) => (
            <div key={g.title} className="skill-group">
              <p className="skill-group-title">{g.title}</p>
              {g.items.map((item) => (
                <span key={item} className="skill-item">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
