# Jenelle's Portfolio

个人作品集网站，展示我做过的 AI 工具与应用。

A minimal, iOS-style portfolio site showcasing my AI projects — from
full-stack web apps to Claude Code skills and agent workflows.

Live: *(add your deployment URL here)*

## Featured projects

- **Mindleaf** — AI 时代的知识内化工具（文章 / 播客 / YouTube → 结构化笔记 + 间隔重复）
- **Cherry Docs Reviewer** — 给 Cherry Studio 文档团队用的 PR 审阅工具
- **Product Video Skill** — Claude Code 的产品演示视频 Skill（Remotion + AI 创意总监）
- **TripFlow** — Google Map + Gemini 驱动的 AI 行程规划应用
- **Clockwise** — 面向企业的智能工时管理 App + 后台
- **cv-expert / ai-tutor / AI 新闻播报 Agent** — Claude Code Skill 与自动化工作流

Full list and details live in [`src/data/projects.ts`](./src/data/projects.ts).

## Tech stack

- **Framework**: Vite + React 19 + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Motion**: Motion (Framer Motion successor)
- **Icons**: lucide-react

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production bundle
npm run lint      # tsc --noEmit
```

No API keys required — the site is fully static.

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages). The
`vite build` output goes to `dist/`.

## Project structure

```
src/
├── components/       # Hero, ProjectCard, ProjectGrid, ui/*
├── data/
│   └── projects.ts   # single source of truth for project entries
├── pages/            # Home, ProjectDetail
├── lib/              # shared utilities
└── App.tsx           # router
```

To add a new project, append an entry to `projects.ts` — the grid
and detail page pick it up automatically.
