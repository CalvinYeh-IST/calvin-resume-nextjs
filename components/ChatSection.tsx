'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content:
    '您好！感謝您花時間閱覽我的履歷。\n\n我知道 HR 內容架構師的職位，對很多人來說需要「傳統人資背景」——但 TCC 的 JD 說「歡迎跨界背景」，我想這正是我的機會。\n\n有什麼想進一步了解的嗎？關於我的 AI 工具使用、培訓設計經驗、或是對 TCC 這個職位的想法，我都很樂意分享。',
}

const SUGGESTIONS = [
  '你具體用哪些 AI 工具？',
  '給我一個培訓內容設計的具體案例',
  '軍職背景怎麼和 HR 內容架構師連結？',
  '你如何設計三方變革溝通策略？',
  '你對 TCC 這個職位有什麼理解？',
]

const PRESET_ANSWERS: Record<string, string> = {
  '你具體用哪些 AI 工具？':
    '我的 AI 工具使用是真正日常化的，分三個層次：\n\n生成與寫作：Claude 是主要思考與寫作夥伴，用來撰寫策略提案、董事長報告、SEO 稽核報告；ChatGPT 用於快速發想與初稿。在 IST，我用這套工具每週穩定產出雙語內容與管理層簡報。\n\n開發與自動化：Cursor 是我的 Vibe Coding 工具。我用它從零建立了 IST 內部文章進度管理儀表板（React 18 + Tailwind CSS + Mapbox），整合 Gemini API 做 AI 行程規劃功能。另外也寫 Python 腳本，串接 Gemini API 批次自動分類 600+ 篇台灣飲食文化文章至五大面向，四模型自動輪換應對 API 限額。\n\nAI API 整合：我實際用過 Gemini、OpenAI、Anthropic 三家 API，熟悉不同模型的特性與成本控制邏輯（例如這份互動履歷就是我自己串接 API 做的）。\n\nAI 工具對我來說不是加分項，而是每天的工作基礎設施。',

  '給我一個培訓內容設計的具體案例':
    '最具代表性的是軍職期間的培訓系統設計，以及在 IST 的變革溝通實戰。\n\n軍職案例：我負責一個 14 人技術團隊，原有培訓高度依賴口耳相傳，沒有標準化文件。我重新設計 SOP 架構，加入視覺化流程圖與情境模擬，將技術概念拆解為分段式模組，並設計了 20+ 場實地演練。成果是 SOP 再造後執行效率提升 66%，累計培訓 200+ 人。關鍵不是「教更多」，而是「讓不同基礎的人都走得完」。\n\nIST 實戰：我在推動 GA4 分析管道升級時，需要讓非技術背景的管理層理解數據架構的改變。我做了兩套說明：給工程師的技術規格（SQL CTE 架構圖）和給長官的效益說明（一頁摘要 + 數字對比）。這種「同一件事，兩種語言」的設計思維，正是培訓內容設計的核心。',

  '軍職背景怎麼和 HR 內容架構師連結？':
    '這是我最有把握回答的問題，因為我思考過很多次。\n\n軍職四年，表面上是「管人帶兵」，實際核心工作是：讓複雜的制度和流程被不同背景的人理解並執行。\n\n具體佐證：我設計培訓讓 200+ 位技術背景各異的人掌握同一套流程；我重寫 SOP 讓執行效率提升 66%；我主動把紙本作業數位化——這些都不是被要求的，是我看到痛點就動手解決的習慣。\n\nHR 內容架構師要做的事本質一樣：讓 HRIS 新系統被三類受眾（員工、主管、HR）理解並接受，讓培訓素材真正有效，讓知識庫被使用而不是被束之高閣。\n\n我的優勢是：我有「被溝通者」的第一視角。軍中我是被制度管理的人，也是設計制度的人。這種雙重視角在設計變革溝通策略時，讓我能預判阻力在哪裡。',

  '你如何設計三方變革溝通策略？':
    'TCC 導入 HRIS 面對的是三種截然不同的受眾，用同一套內容溝通注定失敗。我的設計思路如下：\n\n員工：關心「這影響我什麼？我要多學什麼？」溝通重點是降低焦慮、強調便利性，用情境化操作說明取代功能列表。格式首選短影片或一頁圖解，不要長篇文字。\n\n主管：關心「我的團隊能順利上手嗎？我要多承擔什麼？」溝通重點是給工具、給數據、給他們可以向上匯報的語言。我在 IST 製作董事長報告的經驗告訴我，管理層要的是「結論 + 一個數字 + 一個行動」。\n\nHR：關心「這能解決我的痛點嗎？推廣責任怎麼分？」溝通重點是展示效益、建立共識、讓他們成為內部倡議者而非執行障礙。\n\n這套思維來自我在 IST 同時面對 CEO、工程師、內容編輯三種受眾的實戰——同一份資料，我要做三個版本的呈現。',

  '你對 TCC 這個職位有什麼理解？':
    '我理解這個職位的核心挑戰不是「會用 AI 工具」，而是在橫跨 12 項產業、文化多元的集團裡，讓 AI 工具和新制度真正落地。\n\nHRIS Core Team 要做的事本質是變革管理——技術是手段，人的接受度才是關鍵。這個職位需要一個能同時扮演「生產者」和「翻譯者」的人：生產者快速用 AI 產出高品質培訓素材和溝通說帖；翻譯者把複雜的系統邏輯轉化為各層級員工能理解的語言。\n\n我在 IST 的工作模式和這高度吻合：我同時負責內容策略、數位產品、資料工程和策略提案，習慣在資源有限的環境下獨立 own 專案、跨職能協作。我做的 IST 文章管理儀表板、BigQuery 分析管道、SEO 稽核報告，都是「從問題到可交付成品」的完整流程。\n\n我對這個職位是真心感興趣的——這是少數讓我覺得「我的跨界背景有真正用武之地」的職缺。',
}

function nl2br(text: string) {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return

    setError(null)
    setInput('')

    const userMsg: Message = { role: 'user', content: trimmed }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)

    // 預設答案：直接顯示，不呼叫 API
    if (PRESET_ANSWERS[trimmed]) {
      setMessages([...nextMessages, { role: 'assistant', content: PRESET_ANSWERS[trimmed] }])
      inputRef.current?.focus()
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Server error')
      }

      // 串流讀取
      const reader = res.body!.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      setMessages([...nextMessages, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        assistantContent += chunk
        setMessages([...nextMessages, { role: 'assistant', content: assistantContent }])
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '連線發生問題，請直接聯繫 ya861203@gmail.com'
      )
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <section id="chat">
      <div className="wrap">
        <div className="sec-header reveal">
          <span className="sec-num">06</span>
          <h2 className="sec-title">直接問我</h2>
          <span className="sec-line" />
        </div>
        <div className="chat-wrap reveal">
          <div className="chat-intro">
            <h3>與 Calvin 即時對話</h3>
            <p>
              這份履歷內建 AI 對話介面，由 Claude 代表 Calvin 回答任何問題。
              <br />
              您可以點擊建議問題，或直接輸入您想了解的內容。
            </p>
          </div>

          <div className="chat-box">
            {/* Header */}
            <div className="chat-header">
              <div className="chat-avatar-sm">C</div>
              <div>
                <p className="chat-header-name">葉書魁 Calvin Yeh</p>
                <p className="chat-header-sub">HR 內容架構師 候選人</p>
              </div>
              <div className="chat-dot" />
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`msg ${msg.role === 'user' ? 'user' : 'c'}`}>
                  <div className={`msg-av ${msg.role === 'user' ? 'u' : 'c'}`}>
                    {msg.role === 'user' ? '你' : 'C'}
                  </div>
                  <div className="msg-bubble">{nl2br(msg.content)}</div>
                </div>
              ))}

              {isLoading && (
                <div className="msg c">
                  <div className="msg-av c">C</div>
                  <div className="msg-bubble" style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                    思考中…
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Error */}
            {error && (
              <div className="chat-error">
                {error}
              </div>
            )}

            {/* Suggestion buttons */}
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="sug-btn"
                  disabled={isLoading}
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input footer */}
            <div className="chat-footer">
              <textarea
                ref={inputRef}
                className="chat-input"
                placeholder="請輸入問題…"
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <button
                className="chat-send"
                disabled={isLoading || !input.trim()}
                onClick={() => sendMessage(input)}
                aria-label="送出"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
