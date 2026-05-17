const pillars = [
  {
    num: 'JD 需求 01 — AI 工具 · 多格式內容產出',
    title: '用 AI 工具從構想到成品\n一個人扛起全套內容產出',
    body: '我的 AI 工具選擇不是隨機的，而是根據不同內容類型設計的工作流：文字說帖與溝通文件，Claude 起草結構與論點，人工審核語氣與細節；培訓素材與簡報，ChatGPT 拆解知識點，Gamma 快速視覺化，人工調整品牌一致性；數據敘事，BigQuery 取數，Power BI 視覺化，轉譯為主管可讀的洞察報告。工具組合的選擇邏輯只有一個：哪個環節最耗人力，就在那裡插入 AI，把時間留給真正需要人判斷的部分。',
    proof: '✦ 實績：Power BI 自動化儀表板 × 15+｜週穩定素材產出 × 5+｜效率提升 30%',
  },
  {
    num: 'JD 需求 02 — 可複用模板 · 視覺系統設計',
    title: '設計一次，持續被用\n可複用的內容與知識架構',
    body: '在電通，我把十幾個品牌各自維護的報表，整合成一套多平台自動化模板；在軍隊，我把師徒口傳的技術知識，結構化成 20 套可重複執行的培訓教材——這些教材在我離開後還在被使用。培訓設計採用 ADDIE 框架（分析需求 → 設計目標 → 開發內容 → 執行交付 → 評估成效），確保每套教材有可量測的學習目標，而不只是把知識倒出來。',
    proof: '✦ 實績：培訓教材標準化 × 20 場以上｜累計培訓 200+ 人｜成為新人標準教材',
  },
  {
    num: 'JD 需求 03 — 變革溝通策略 · 三方設計',
    title: '員工 × 主管 × HR\n三方變革溝通策略',
    body: '數位系統上線失敗，通常不是技術問題，是溝通問題。在軍隊推數位轉型時，我面對的不是不懂科技的人，而是不相信「改變有什麼好處」的人。我的做法是先找出他們真正在意的事，再用這些理由設計溝通方式。最後 10 位成員全部切換，沒有一個回頭用紙本。在 App 專案裡，我同時面對工程廠商、跨部門主管和高階決策者——三種受眾、三種語言、一個統一的推進目標。這個經驗，直接可以搬到 HRIS 的三方溝通設計上。',
    proof: '✦ 實績：App 首季用戶留存率 40%，優於同類型公益應用產業均值',
  },
  {
    num: 'JD 需求 04 — 數位專案 · 獨立掌舵',
    title: '獨立 own 專案不是口號\n從需求到上線，我知道每個環節卡在哪裡',
    body: '在看見台灣基金會，App 專案從 UI/UX 需求收斂、廠商報價比較、功能排序，到 UAT 測試和最終上架，都是我一個人對外的窗口。同時間，我還在跑 BigQuery 數據優化和年度行銷專案。多任務並行對我來說是工作常態——我習慣用每週開始時排優先順序，用具體的交付日期管理自己和合作方的期待，讓事情不會在快要到期才出現變數。首年即因穩定交付多個並行專案而晉升為項目負責人。',
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
