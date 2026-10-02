
## 🌟 網站的核心架構亮點（面試必備）

1. **基本資料與 1 分鐘電梯簡介（Hero & About Me）**
   - 包含求職目標、亮點數據標籤、三大多元核心優勢卡片。
   - 支援快速點擊複製 Email（帶有溫和 Toast 通知）。

2. **專題成果與深度反思切換系統（Case Studies & Retrospective）——【核心重點】**
   - 每個專案卡片皆配備 3 段式即時切換頁籤：
     - **📌 專案背景與架構**：痛點、解決方案、技術棧標籤、Live Demo 與 GitHub 連結。
     - **📄 原版報告與產出預覽**：專題報告/結案簡報原版預覽按鈕（點擊彈出全螢幕 Modal 視窗模擬閱覽）、章節縮圖、完整 PDF 下載。
     - **💡 深度反思與 STAR 復盤**：
       - **S (Situation)**：當時遇到的時限與團隊挑戰
       - **T (Task)**：身為負責人的任務
       - **A (Action)**：具體解決手段與效能調優
       - **R (Result)**：量化指標成果
       - **🌱 若重新來過，我會如何做得更好？**：展現成長型思維（Growth Mindset），這是主管最看重的自我迭代特質！

3. **專案分類篩選器（Filter Bar）**
   - 支援「全部專案」、「畢業/學術專案」、「自主開發/競賽」、「實習/實務案例」快速過濾。

4. **原版報告全頁彈窗（Interactive Report Modal）**
   - 可直接在筆電或平板上點開彈窗，向面試官展示完整報告目錄與內容大綱。

5. **經歷時間軸（Experience Timeline）**
   - 條列實習、求學、競賽等里程碑。

6. **面試常見提問速查手風琴（Interview Cheat-Sheet Accordion）**
   - 預先整理「為什麼錄取我？」、「如何解決分歧？」、「未來 3 年規劃」等面試高頻題精華。

---

## 🚀 如何在本地直接開啟預覽？

本專案採用純原生現代網頁技術（Vanilla HTML5 + CSS3 + ES6 JavaScript），**完全不需要安裝 Node.js 或複雜的編譯步驟**！

### 方法 1：直接在終端機開啟
在終端機中執行：
```bash
open /Users/yunching/.gemini/antigravity/scratch/interview-portfolio/index.html
```

### 方法 2：在檔案管理員中點擊
開啟訪達 (Finder)，前往以下路徑：
`/Users/yunching/.gemini/antigravity/scratch/interview-portfolio/`
直接對 `index.html` 按兩下，即可在 Chrome / Safari / Edge 瀏覽器中開啟！

---

## ✍️ 如何填入與替換您的個人資料？

在編輯器（如 VS Code）開啟 `index.html`，按下 `Ctrl + F` 或 `Cmd + F` 搜尋關鍵字：

### 1. 搜尋 `【請填入】`
會直接找到所有需要替換的文字欄位：
- 您的姓名、英文名、應徵職稱
- 自我介紹、學歷、聯絡信箱、手機號碼、LinkedIn / GitHub 連結
- 專案名稱、團隊角色、量化數據（例如提升 % 數或使用者人數）
- STAR 故事細節與自我反思內容

### 2. 替換個人頭像照片
搜尋 `id="profileImage"`，將 `src` 網址替換為您的照片路徑：
```html
<!-- 建議將您的照片 (例如 avatar.jpg) 放在同一目錄下 -->
<img src="avatar.jpg" alt="您的名字" class="avatar-img" id="profileImage">
```

### 3. 放上真正的 PDF 專題報告或履歷
1. 將您的專題報告 PDF（例如 `my-project-report.pdf`）或履歷（例如 `resume.pdf`）放入此資料夾中。
2. 在 `index.html` 中將對應按鈕的 `href="#"` 改為檔案名稱：
```html
<a href="resume.pdf" download class="btn btn-primary">下載履歷 PDF</a>
```
3. 若希望在 Modal 彈窗中直接嵌入完整的 PDF 閱覽器，可在 `index.html` 的 `<div class="pdf-canvas-mock">` 內置換為：
```html
<iframe src="my-project-report.pdf" width="100%" height="600px" style="border:none; border-radius:8px;"></iframe>
```

---

## 🎨 柔和色系配置說明（無黑色系）

如果您未來想微調色彩，可至 `style.css` 開頭的 `:root` 進行調整：
- `--bg-page`: `#FAF9F5` (柔和燕麥米白底色，溫潤耐看)
- `--bg-surface`: `#FFFFFF` (純淨卡片白)
- `--primary`: `#4A6B5D` (典雅鼠尾草綠，沉穩專業)
- `--accent`: `#C77855` (溫暖陶土珊瑚橘，聚焦亮點)
- `--text-main`: `#2E2B29` (深炭灰，避免全黑 `#000` 造成的生硬反差)
- `--text-secondary`: `#5E5A54` (中階暖灰)

---
   - 複製此網址即可打開 https://zen1thxiiu.github.io/portfolio/
