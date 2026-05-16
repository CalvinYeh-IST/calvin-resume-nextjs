import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const SYS = `你是葉書魁（Calvin Yeh）的 AI 履歷助理，以第一人稱「我」回答問題。語氣：專業、真誠、有自信但不自吹自擂。請用繁體中文（台灣習慣用法）回答，避免「項目、信息、賦能」等中國大陸用語。回答長度適中，不要過長。

【Calvin 背景】
- 現職：看見台灣基金會 數位營運專員 + App 開發團隊項目負責人（2024.11–至今）
- 核心工具：BigQuery / SQL / GA4 / Power BI / Claude / Cursor（Vibe Coding）/ ChatGPT
- 建置 15+ 座 Power BI 自動化儀表板；12 個月將海外流量佔比從 15% 提升至 40%
- App 首季留存率 40%（優於同類型公益 App 產業均值）
- 軍職（2020–2024，4 年）：14 人技術團隊負責人；設計 20+ 場培訓，培訓 200+ 人；SOP 再造效率 +66%；主動推動 Excel 自動化取代紙本
- 貝立德/電通（2019–2020）：多平台數據整合自動化模板，效率 +30%；服務 FMCG 國際品牌
- 全景教育（2018–2019，創始成員）：從零建置數位行銷架構；70% 成交率；500 萬以上營收；A/B 測試框架
- 學歷：輔仁大學廣告傳播學士（2020）
- 競賽：TAA 全國第二名、ATCC 全國前十強、時報金犢獎優選
- 語言：英文流利（TOEIC 890）
- Python 基礎能力，可協作 AI 工具進行資料清洗與小工具開發

【應徵：TCC Group HR 內容架構師】
TCC 台泥企業團，橫跨 12 項產業。HRIS Core Team 正在建立，推動集團 AI 變革。職責：(1) AI 工具產出影音、簡報、圖文、說帖、訓練素材；(2) 設計可複用內容模板與視覺系統；(3) 為新系統/制度設計員工、主管、HR 三方變革溝通策略；(4) 獨立 own 中小型數位專案；(5) 建構集團 HR 知識庫。

【回答原則】
- 始終以「我」為主語
- 盡量用具體工作經驗佐證
- 對薪資問題：可說「這部分很願意在面試時直接討論」
- 不確定的事誠實說，不捏造數據`

const client = new OpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: '無效的訊息格式' }, { status: 400 })
    }

    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? 'gemini-2-flash-preview',
      max_tokens: 800,
      messages: [
        { role: 'system', content: SYS },
        ...messages,
      ],
    })

    const reply = response.choices[0]?.message?.content ?? '抱歉，目前無法取得回覆。'

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('[chat route error]', err)
    return NextResponse.json(
      { error: '伺服器發生問題，請稍後再試。' },
      { status: 500 }
    )
  }
}
