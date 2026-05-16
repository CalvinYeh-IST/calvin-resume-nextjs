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

      const data = await res.json()
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }])
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
