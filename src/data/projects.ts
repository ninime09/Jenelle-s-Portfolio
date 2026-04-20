export type CtaType = 'copy' | 'link' | 'modal';
export type CtaStyle = 'primary' | 'secondary';

export interface CTA {
  label: string;
  type: CtaType;
  value: string;
  style: CtaStyle;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  ai?: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  coverImage: string;
  description?: string;
  galleryImages?: string[];
  ctas: CTA[];
  techStack?: TechStack;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'tripflow',
    name: 'TripFlow',
    tagline: '基于Google Map与Gemini的 AI 行程规划应用，可以根据用户的需求，快速生成个性化、不走回头路的多日旅行计划。',
    coverImage: 'https://i.postimg.cc/qMkLCHzt/tripflow1.png',
    description: '用户只需输入目的地或出行需求，TripFlow 即可通过AI模型生成结构化的多日旅行行程，包括每日安排与活动建议。生成后的行程可以通过后端 API 持久化存储至云端数据库/本地储存，用户可以随时查看、管理或再次访问自己的历史行程。整个系统采用前后端分离架构，前端负责交互与展示，后端封装 AI 推理与数据存储逻辑，并部署在云端实现稳定运行。该项目完整体现了从产品构想到 AI 集成、API 设计、数据库持久化与生产环境部署的端到端实现能力。目前仍在根据反馈不断优化中',
    techStack: {
      frontend: ['React + TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'CloudRun部署'],
      database: ['Supabase（PostgreSQL）'],
      ai: ['Google gemini']
    },
    galleryImages: [
      'https://i.postimg.cc/SsxZb0C8/1.jpg',
      'https://i.postimg.cc/J09KXGgB/2.jpg',
      'https://i.postimg.cc/jd7Mb4wB/3.jpg',
      'https://i.postimg.cc/XYKxZNgx/4.jpg',
      'https://i.postimg.cc/0QjCHY1M/5.jpg'
    ],
    ctas: [
      { label: '一键体验', type: 'link', value: 'https://www.mytripflows.com', style: 'primary' },
      { label: 'GitHub', type: 'link', value: 'https://github.com/ninime09/tripflow-web', style: 'secondary' }
    ]
  },
  {
    id: '2',
    slug: 'clockwise',
    name: 'Clockwise 手机移动端',
    tagline: '一款面向团队与企业的智能工时管理移动应用，通过数据化统计与 AI 自动总结，帮助企业实现透明、高效、可追踪的项目与人力管理。',
    coverImage: 'https://i.postimg.cc/2SF6ggzy/splash.png',
    description: 'Clockwise 移动端为企业员工与管理者提供完整的工时记录与项目追踪能力。员工可在移动端便捷记录每日工作内容与项目投入，系统自动生成结构化统计数据；管理者可实时查看工时明细、项目投入分布与效率分析报表。应用内置 AI 阅读总结模块，可基于员工填写的工作内容自动生成周报与月度总结摘要，提炼关键成果与投入重点，帮助企业减少重复汇报成本，同时提升信息透明度与决策效率。',
    techStack: {
      frontend: ['React Native', 'Expo', 'TypeScript','EAS Build'],
      backend: ['Supabase','CloudRun部署'],
      database: ['PostgreSQL'],
      ai: ['Deepseek-chat']
    },
    galleryImages: [
      'https://picsum.photos/seed/clockwise1/800/600'
    ],
    ctas: [
      { label: 'App Store 下载', type: 'link', value: 'https://apps.apple.com/cn/app/clockwise-%E6%97%B6%E8%BF%B9/id6759207778', style: 'primary' },
      { label: '下载 APK', type: 'link', value: 'https://expo.dev/accounts/ninime09/projects/mobile/builds/555b5644-821b-4c25-b2cc-a60aaa0d7edf', style: 'secondary' },
      { label: '使用说明', type: 'link', value: 'https://field-xylophone-fe7.notion.site/Clockwise-3100e4120d4780a9943ad62db4f4cdc9', style: 'secondary' }
    ]
  },
  {
    id: '3',
    slug: 'clockwise-admin',
    name: 'Clockwise-Admin 管理员网页端',
    tagline: 'Clockwise的管理员网页端，可后台设置公司/员工/项目信息等，并获取相关报表。同时内置AI检测数据等功能，帮助管理者清晰地了解项目运行及工时情况。（目前仅供部分企业管理员使用）',
    coverImage: 'https://i.postimg.cc/mkKkGFpY/c1.png',
    description: 'Clockwise Admin 是 Clockwise 时迹的企业管理后台，用于统一管理团队成员、项目与工时数据。管理员可以在网页端完成成员加入与权限管理，创建/维护项目，并对员工的工时记录进行监控。系统提供按员工、项目、时间范围与状态的多维筛选与导出能力，帮助团队快速汇总工时明细与项目投入情况，生成清晰的统计报表，提升跨团队协作的透明度与管理效率。同时，后台支持在月度汇总视角下查看团队工时结构，并可选启用 AI 辅助总结，将月度工时与项目进展自动生成简要摘要，便于管理者复盘与沟通。',
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'React'],
      backend: ['Next.js API Routes'],
      database: ['PostgreSQL'],
      ai: ['Deepseek-chat']
    },
    ctas: [
      { label: '查看演示视频', type: 'modal', value: 'https://youtu.be/6Ho_faIAb5g?feature=shared', style: 'primary' },
      { label: '使用说明', type: 'link', value: 'https://field-xylophone-fe7.notion.site/Clockwise-Admin-3130e4120d478059a312da3587e8391d', style: 'secondary' }
    ]
  },
  {
    id: '4',
    slug: 'cv-expert',
    name: 'cv-expert 简历优化Skill',
    tagline: 'CV Expert 是一个本地优先（local-first）的 Claude Code 插件，用于提供结构化、可解释、基于 JD 定制的 AI 简历优化能力。',
    coverImage: 'https://i.postimg.cc/DfDxv7RY/1.jpg',
    description: '一款简历优化Claude Skill，它通过 7 维结构化诊断框架，将简历与目标 JD 进行对齐分析，生成可执行的优化补丁，并输出带有详细 Word 评论说明的 .docx 优化版本。',
    ctas: [
      { label: 'Github', type: 'link', value: 'https://github.com/ninime09/cv-expert', style: 'primary' },
    ]
  },
  {
    id: '5',
    slug: 'ai-tutor',
    name: 'ai-tutor AI技术博客学习Skill',
    tagline: '这是一个专为 AI 学习初学者量身定制的自动化工作流插件（Skill）。它利用 Claude Code 的强大推理能力与多模态交互，自动追踪全球顶尖 AI 实验室（Anthropic, OpenAI, Google DeepMind）的最新动态，并将其转化为深度适配 Obsidian 的结构化学习笔记。',
    coverImage: 'https://i.postimg.cc/nhSvchK3/aituotr.jpg',
    description: '✨ 功能亮点: 智能内容提取,递进式笔记结构关键图表下载,知识图谱连接,已读追踪,行业简报。',
    ctas: [
      { label: 'Github', type: 'link', value: 'https://github.com/ninime09/AI-Learning-Tutor', style: 'primary' },
    ]
  },
  {
    id: '6',
    slug: 'ai-news',
    name: 'AI新闻播报Agent',
    tagline: '一个面向日常信息获取场景设计的 AI 自动化新闻播报智能体，能够自动抓取多源 AI 行业资讯，筛选当天重点内容，并基于大模型生成结构化摘要与阅读建议，最终自动推送至飞书，形成“采集—筛选—总结—分发”的完整信息流闭环。',
    coverImage: 'https://i.postimg.cc/wMNZNwk5/ainews1.png',
    description: '✨ 功能亮点: 智能内容提取,递进式笔记结构关键图表下载,知识图谱连接,已读追踪,行业简报。',
    ctas: [
      { label: '工作流', type: 'link', value: 'https://field-xylophone-fe7.notion.site/AI-news-Agent-Workflow-31f0e4120d478059a624eaeca7c6315d', style: 'primary' },
    ]
  }
];
