# Smart Care MVP

Smart Care MVP 是一個開源、可立即部署的 **智能照護評估** Web 應用，  
讓病患或照顧者在數分鐘內完成 18 題問卷，並立即獲得健康分級 (健康→臥床) 與個人化照護建議。

> 目標使用者：亞健康族群、衰弱長者、失能/臥床患者與其照顧者  
> 典型場景：門診、社區健康站、LINE Bot 線上自評、居家護理訪視

## 功能特色
- **18 題快速問卷**：僅需輸入生日、體重變化等客觀資訊，無需專業量測握力或步速  
- **五級健康分級**：健康、亞健康、衰弱、失能、臥床，一眼看懂照護需求  
- **即時建議 Bundle**：依分級產生長照資源、營養運動、居家醫材等行動步驟  
- **資料庫儲存**：填答原始答案與分級結果寫入 Supabase (PostgreSQL)  
- **LINE LIFF 整合**：同一份前端可嵌入 LINE Bot，提交後自動回推結果  
- **零設定部署**：一鍵 Vercel 部署（免費層即可），自帶 HTTPS 與 CI/CD

## 技術棧
| Layer | Stack |
|-------|-------|
| 前端 | Next.js 14 · React · Tailwind CSS · shadcn/ui |
| 後端 | Next.js API Route / Edge Function |
| 資料庫 | Supabase (PostgreSQL + Row-Level Security) |
| DevOps | GitHub → Vercel 自動部署 |
| 通訊 | LINE Messaging API / LIFF |

## 快速開始
1. **Fork** 此 repo  
2. 在 Vercel 點擊 **“Deploy”**（並填入 `SUPABASE_URL`、`SUPABASE_ANON_KEY`）  
3. 開啟 `https://YOUR-PROJECT.vercel.app`，開始填寫評估問卷  
4. （選用）於 LINE Developer Console 建立 LIFF，將 URL 設為上述網址，即可在 Bot 中啟用

> 更詳細的步驟請參考 `/docs/deploy_guide.md` 或線上說明。

## 授權
本專案採用 MIT License。  
