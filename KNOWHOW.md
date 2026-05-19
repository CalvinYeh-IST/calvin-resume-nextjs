# 互動式履歷網站 Know-How 管理書

> 本文件記錄 `calvin-resume-nextjs` 的架構、設計系統、常見修改方式與維運注意事項。
> 任何改動，請先閱讀「部署流程」章節再動手。

---

## 目錄

1. [專案概覽](#1-專案概覽)
2. [技術架構](#2-技術架構)
3. [檔案地圖](#3-檔案地圖)
4. [設計系統](#4-設計系統)
5. [常見修改場景](#5-常見修改場景)
6. [AI 聊天功能管理](#6-ai-聊天功能管理)
7. [部署流程](#7-部署流程)
8. [環境變數管理](#8-環境變數管理)
9. [常見問題 FAQ](#9-常見問題-faq)

---

## 1. 專案概覽

| 項目 | 說明 |
|------|------|
| **專案名稱** | calvin-resume-nextjs |
| **GitHub** | https://github.com/CalvinYeh-IST/calvin-resume-nextjs |
| **線上網址** | Vercel 自動分配（登入 Vercel 查看） |
| **主要用途** | TCC Group HR 內容架構師 互動式應徵作品 |
| **語言** | 繁體中文（主）+ 英文 |

---

## 2. 技術架構

```
使用者瀏覽器
    ↓
Vercel（Next.js 16, App Router）
    ├── 靜態頁面 → app/page.tsx（預先渲染，快）
    └── AI 聊天 → app/api/chat/route.ts（每次即時呼叫）
                        ↓
                  VectorEngine API
                  （相容 OpenAI 格式，模型：gemini-3-flash-preview）
```

**開發工具**
- Next.js 16 App Router
- Tailwind CSS（基礎 reset）+ 自訂 CSS（`globals.css`）
- OpenAI Node SDK（用來呼叫 VectorEngine）
- Inter + Noto Sans TC（Google Fonts）

---

## 3. 檔案地圖

### 核心檔案（改這裡就夠了）

```
calvin-resume/
├── app/
│   ├── page.tsx              ← 頁面組裝（section 順序在這裡調整）
│   ├── layout.tsx            ← 字型設定、SEO metadata（標題、描述）
│   ├── globals.css           ← 所有 CSS 樣式與設計 token
│   └── api/
│       └── chat/
│           └── route.ts      ← AI 聊天後端（system prompt 在這）
│
├── components/               ← 每個 section 各一個檔案
│   ├── Navbar.tsx            ← 頂部導航列
│   ├── Hero.tsx              ← 第一螢幕主視覺（名字、引言、聯絡卡、SVG 弧環）
│   ├── StatsStrip.tsx        ← 四個數字統計（黑底條）
│   ├── Positioning.tsx       ← 「為什麼是我」段落
│   ├── Pillars.tsx           ← 四大 JD 匹配卡片
│   ├── Experience.tsx        ← 工作經歷時間軸
│   ├── Achievements.tsx      ← 數字成果區
│   ├── Skills.tsx            ← 工具與能力格
│   ├── Bonus.tsx             ← 加分項目
│   ├── ChatSection.tsx       ← AI 聊天介面（含預設問題按鈕）
│   ├── Footer.tsx            ← 頁尾
│   └── ScrollRevealInit.tsx  ← 滾動進場動畫（勿輕易修改）
│
├── .env.local                ← 本機 API 金鑰（不會上傳 GitHub）
├── KNOWHOW.md                ← 本文件
└── package.json
```

### 頁面 Section 順序（`app/page.tsx`）

```
Navbar → Hero → StatsStrip → Positioning → Pillars →
Experience → Achievements → Skills → Bonus → ChatSection → Footer
```

---

## 4. 設計系統

### 色彩變數（`globals.css` 第 4–15 行）

| 變數名 | 色碼 | 用途 |
|--------|------|------|
| `--color-primary` | `#061322` | 深海藍底（Navbar、黑色區塊） |
| `--color-brand-red` | `#C94035` | 台泥紅（強調色、按鈕、線條） |
| `--color-cement` | `#A2A5AA` | 銀灰水泥（TCC logo 色） |
| `--color-sustainability` | `#3C7A55` | 永續綠（現職時間軸點、引言邊框） |
| `--color-section-alt` | `#F3F4F5` | 淺灰底（交替 section 背景） |
| `--color-text-primary` | `#1A1A1A` | 主要文字 |
| `--color-text-secondary` | `#6B7280` | 次要文字、說明文字 |
| `--color-border` | `#E5E7EB` | 卡片邊框 |

> **修改方式**：只需改 `:root {}` 裡的色碼，全站自動更新。

### 字型

| 用途 | 字型 | 設定位置 |
|------|------|----------|
| 英文 / 數字 / UI | Inter | `app/layout.tsx` |
| 中文 | Noto Sans TC | `app/layout.tsx` |

### Hero 主視覺（特別注意）

Hero section 有三層疊加：
1. **背景漸層**：深色底 + 右側銀灰光暈（`#hero` CSS）
2. **細格紋**：`#hero::before`（`::before` 疊加）
3. **SVG 弧環**：`.hero-arc`（兩個交疊圓環 + 品牌紅弧線）

> **注意**：不要在 Hero 左側（文字區）加入任何高不透明度的銀灰漸層，會壓掉文字可讀性。

---

## 5. 常見修改場景

### 5-1 改聯絡資訊

**檔案**：`components/Hero.tsx`

```tsx
// 找到 hero-card div，修改以下三行
<a href="mailto:your@email.com">your@email.com</a>
<span>(+886) xxx-xxx-xxx</span>
<a href="https://www.linkedin.com/in/your-profile/">...</a>
```

---

### 5-2 改工作經歷

**檔案**：`components/Experience.tsx`

修改頂部的 `jobs` 陣列，每個物件結構：

```ts
{
  role: '職稱',
  date: '2024.01 — 至今',
  org: '公司名稱（說明）',
  bullets: ['成就 1', '成就 2'],
  tags: ['技能標籤'],
}
```

> **現職標記**：第一筆 job（index 0）會自動套用綠色時間軸點（`tl-current` class）。

---

### 5-3 改技能列表

**檔案**：`components/Skills.tsx`

修改頂部的 `groups` 陣列，每個 group 有 `title` 和 `items`。

---

### 5-4 改統計數字（黑底條）

**檔案**：`components/StatsStrip.tsx`

修改 `stats` 陣列中的 `num`、`unit`、`label`。

---

### 5-5 改 Hero 引言或標語

**檔案**：`components/Hero.tsx`

- 中文引言：找 `hero-quote` 的 `<p>` 標籤
- 英文標語：找 `hero-en-tagline` 的 `<p>` 標籤
- eyebrow（職位說明）：找 `hero-eyebrow` 的 `<p>` 標籤

---

### 5-6 改全站顏色

**檔案**：`app/globals.css`

改 `:root {}` 區塊裡的 CSS 變數即可。

---

### 5-7 調整 Section 順序或新增 Section

**檔案**：`app/page.tsx`

調整 component import 和 `<main>` 裡的順序。新 section 需另建 `components/NewSection.tsx`。

---

### 5-8 改頁面 SEO（標題、描述）

**檔案**：`app/layout.tsx`

```ts
export const metadata: Metadata = {
  title: '頁面標題',
  description: '頁面描述',
}
```

---

## 6. AI 聊天功能管理

### 架構說明

```
使用者輸入問題
    ↓
ChatSection.tsx（前端）
    ├── 若點預設按鈕 → 直接顯示 PRESET_ANSWERS（不呼叫 API）
    └── 若自由輸入 → POST /api/chat
                         ↓
                    route.ts（後端）
                         ↓
                    VectorEngine（串流回傳）
```

### 修改 AI 知識庫（System Prompt）

**檔案**：`app/api/chat/route.ts`，第 4–65 行的 `SYS` 字串。

更新個人資訊後，記得同步更新這裡，否則 AI 回答會使用舊資料。

| 段落 | 內容 |
|------|------|
| 基本資料 | 姓名、現職、學歷、競賽 |
| 現職四大職責 | IST 的工作範疇 |
| 主要專案成果 | 具體數字與成果 |
| 技術能力 | 工具、程式語言 |
| 軍職背景 | 2020–2024 |
| 早期職涯 | 電通、全景教育 |
| 應徵職位說明 | TCC HRIS 細節 |
| 敏感議題處理 | 婉拒規則（不要輕易刪除） |

### 修改預設問題與答案

**檔案**：`components/ChatSection.tsx`

```ts
const SUGGESTIONS = ['問題 1', '問題 2', ...]  // 按鈕顯示的文字

const PRESET_ANSWERS: Record<string, string> = {
  '問題 1': '對應的答案文字...',
}
```

> **注意**：SUGGESTIONS 裡的文字必須和 PRESET_ANSWERS 的 key 完全一致（包含標點符號），才能觸發預設答案。

---

## 7. 部署流程

### 本機修改 → 上線（標準流程）

```bash
# 1. 修改檔案後，確認本機建置沒有錯誤
npm run build

# 2. 提交修改
git add 改過的檔案名稱
git commit -m "說明這次改了什麼"

# 3. 推送到 GitHub
git push

# Vercel 會在約 1–2 分鐘內自動部署上線
```

### 驗證部署成功

登入 [vercel.com](https://vercel.com) → `calvin-resume-nextjs` → Deployments  
最新一筆顯示 ✓ Ready 即為成功。

### 強制重新部署（當部署失敗時）

1. 登入 Vercel → Deployments → 最新一筆 → 點右側 **⋯** → **Redeploy**
2. 或在本機執行空 commit：
   ```bash
   git commit --allow-empty -m "chore: trigger redeploy" && git push
   ```

---

## 8. 環境變數管理

### 什麼是環境變數

AI 聊天功能需要 API 金鑰，這些**不能存在程式碼裡**（避免金鑰外洩），必須分別在兩個地方設定：

| 環境 | 設定位置 | 用途 |
|------|----------|------|
| 本機開發 | `.env.local`（根目錄） | `npm run dev` 時讀取 |
| 線上（Vercel） | Vercel 儀表板 → Settings → Environment Variables | 部署後讀取 |

### 需要設定的三個變數

| Key | Value |
|-----|-------|
| `OPENAI_BASE_URL` | `https://api.vectorengine.ai/v1` |
| `OPENAI_MODEL` | `gemini-3-flash-preview` |
| `OPENAI_API_KEY` | VectorEngine 金鑰（向 VectorEngine 取得） |

### 更新金鑰步驟

1. 登入 VectorEngine 取得新金鑰
2. 更新 `.env.local`（本機）
3. 登入 Vercel → Settings → Environment Variables → 找到 `OPENAI_API_KEY` → 編輯 → Save
4. 重新部署（Vercel 需要重新部署才會讀取新金鑰）

> ⚠️ **安全提醒**：API 金鑰絕對不能貼在聊天視窗、截圖、或 commit message 裡。`.env.local` 已被 `.gitignore` 排除，不會上傳 GitHub。

---

## 9. 常見問題 FAQ

### Q1：AI 聊天顯示「伺服器發生問題，請稍後再試」

**原因**：Vercel 上的環境變數遺失，或 API 金鑰失效。

**解法**：
1. 登入 Vercel → Settings → Environment Variables
2. 確認三個變數都存在
3. 若遺失，重新填入後 Save，再重新部署

---

### Q2：本機改了但線上沒更新

**原因**：忘記 `git push`，或 Vercel 部署失敗。

**解法**：
```bash
git push
```
再去 Vercel 確認最新 Deployment 是否為 ✓ Ready。

---

### Q3：`npm run build` 出現錯誤

**解法**：
- 看錯誤訊息指向哪個檔案和行號
- 修正後再 push（不要把會 build 失敗的程式碼 push 上去）

---

### Q4：想改顏色但不確定在哪裡

**答**：所有顏色都在 `app/globals.css` 的 `:root {}` 區塊（第 3–15 行）用 CSS 變數定義，改變數就能全站更新。

---

### Q5：Hero 的 SVG 弧環看起來不對

SVG 弧環的設定在 `components/Hero.tsx`，相關 CSS 在 `app/globals.css` 的 `.hero-arc` 區塊。

重要參數：
- 左環（TCC 銀灰左環）：`cx="258" cy="350" r="225"`
- 右環（TCC 右環）：`cx="442" cy="350" r="225"`
- 品牌紅弧線（四分之一圓弧）：`d="M 442 125 A 225 225 0 0 1 667 350"`
- `.hero-arc` 有 `mask-image` 讓弧環左側淡出，保護文字區可讀性

---

### Q6：Vercel 部署成功但網站沒有改變

**原因**：瀏覽器快取。

**解法**：`Ctrl + Shift + R`（強制重整）清除快取。

---

### Q7：GitHub 和 Vercel 的關係

- **GitHub**：儲存程式碼的地方（像是 Google Drive 放程式碼）
- **Vercel**：把程式碼變成網站的服務，設定為「監視 GitHub main 分支」，只要有新 commit push 進去，就自動重新部署

所以工作流程永遠是：**改 code → push GitHub → Vercel 自動更新網站**。

---

*最後更新：2026-05-19*
