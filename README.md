# 🎮 Game Design Career Bingo

A 2-player co-op Bingo game for mentors and designers to explore career growth, self-discovery, and game design philosophy — one conversation card at a time.

**双人共斗宾果**：一款为导师与设计师设计的破冰对谈游戏，用游戏设计的语言聊职业成长与自我发现。

## ✨ Features

- **4×4 Bingo board** drawn from a pool of **56 bilingual conversation cards** across four categories: Career 职业 / Personal 个人 / Philosophy 哲思 / Creative 创意
- **🌍 Multi-language (EN / 简体中文)** — switch anytime with the header toggle; language preference is remembered, and you can even switch mid-game
- **Room codes**: the board is generated from a seeded shuffle, so two players entering the same code see the exact same board — *in either language*
- **Mentor hints**: every card ships with an offline "Secret Intel" coaching prompt; optionally powered by Gemini for AI deep-dives (responses follow the current language)
- **Co-op interactions**: tap to vote/open a question, hold 1s to mark a cell, idle hints, win-line animation, and a post-game recap of every topic you covered

## 🕹️ How to Play

1. Both players pick an avatar and enter the **same room code**
2. Take turns tapping a cell — answer the question out loud together
3. Hold a cell for 1 second to mark it once the topic is done
4. First line (row / column / diagonal) completed = **BINGO!**

## 🚀 Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional, for AI deep-dives) set `GEMINI_API_KEY` in [.env.local](.env.local)
3. Run the app:
   ```bash
   npm run dev
   ```

## 🌐 Adding a Language

1. Extend the `Language` type in [`types.ts`](types.ts)
2. Add the new column to every entry in [`i18n/strings.ts`](i18n/strings.ts) (UI copy) and [`constants.ts`](constants.ts) (question pool) — TypeScript will point out anything you missed
3. Add the language to the header toggle in [`App.tsx`](App.tsx)

Because the seeded shuffle operates on language-agnostic card objects, room codes stay compatible across all languages.

## 🧱 Tech Stack

React 19 · TypeScript · Vite · Tailwind (CDN) · lucide-react · Gemini API (optional)
