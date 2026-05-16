const pillars = [
  {
    num: 'JD 需求 01 — AI 工具 · 多格式內容產出',
    title: 'AI-native 工作流\n驅動多格式素材生產',
    body: '以 Claude、Cursor 進行 Vibe Coding，快速產出各類型素材；Power BI 儀表板即資料視覺化敘事的實戰場域；在全景教育每週穩定產出 5 件以上行銷素材。AI 工具不是加分項，是我的日常工作流。',
    proof: '✦ 實績：Power BI 自動化儀表板 × 15+｜週穩定素材產出 × 5+｜效率提升 30%',
  },
  {
    num: 'JD 需求 02 — 可複用模板 · 視覺系統設計',
    title: '系統化模板設計\n讓後來者快速複用',
    body: '在電通集團建置多平台數據整合自動化模板；軍職建立可重複使用的內部知識架構，成為新人養成標準教材——「設計一次、持續被用」是我打造任何系統的底層思維。',
    proof: '✦ 實績：培訓教材標準化 × 20 場以上｜累計培訓 200+ 人｜成為新人標準教材',
  },
  {
    num: 'JD 需求 03 — 變革溝通策略 · 三方設計',
    title: '員工 × 主管 × HR\n三方變革溝通策略',
    body: '軍職推動數位轉型，說服 10 位分散成員從紙本切換至 Excel 系統；App 專案統籌開發廠商、跨部門關係人、高階主管三方——這和 HRIS 上線溝通策略是同一件事的不同版本。',
    proof: '✦ 實績：App 首季用戶留存率 40%，優於同類型公益應用產業均值',
  },
  {
    num: 'JD 需求 04 — 數位專案 · 獨立掌舵',
    title: '中小型數位專案\n從需求到交付一手掌握',
    body: '高壓環境下首年晉升 App 開發項目負責人；新創時期從零建置公司首套數位行銷架構，獨立 own 每個環節。多任務並行、供應商管理、跨部門協調——是我的日常，不是挑戰。',
    proof: '✦ 實績：統籌供應商、合約、4+ 跨部門關係人｜500 萬以上新創營收貢獻',
  },
]

export default function Pillars() {
  return (
    <section id="pillars">
      <div className="wrap">
        <div className="sec-header reveal">
          <span className="sec-num">01</span>
          <h2 className="sec-title">我能為 TCC 做什麼</h2>
          <span className="sec-line" />
        </div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div key={p.num} className="pillar reveal">
              <p className="pillar-num">{p.num}</p>
              <h3 className="pillar-title">
                {p.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h3>
              <p className="pillar-body">{p.body}</p>
              <div className="pillar-proof">{p.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
