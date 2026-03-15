import type { Category } from './model';

export const categories: Category[] = [
  {
    key: 'work',
    name: 'Work',
    dotColor: '#7F77DD',
    links: [
      { title: 'GitHub', url: 'github.com', emoji: '🐙', color: '#2C2C2A' },
      { title: 'Linear', url: 'linear.app', emoji: '⚫', color: '#333' },
      { title: 'Supabase', url: 'supabase.com', emoji: '⚡', color: '#1D9E75' },
      { title: 'VS Code', url: 'code.visualstudio.com', emoji: '💙', color: '#0078d4' },
      { title: 'npm', url: 'npmjs.com', emoji: '📦', color: '#C04828' },
      { title: 'MDN Docs', url: 'developer.mozilla.org', emoji: '📖', color: '#185FA5' },
    ],
  },
  {
    key: 'devtools',
    name: 'Dev Tools',
    dotColor: '#1D9E75',
    links: [
      { title: 'Vercel', url: 'vercel.com', emoji: '▲', color: '#2C2C2A' },
      { title: 'Cloudflare', url: 'cloudflare.com', emoji: '☁️', color: '#F6821F' },
      { title: 'Figma', url: 'figma.com', emoji: '🎨', color: '#7F77DD' },
      { title: 'Dribbble', url: 'dribbble.com', emoji: '🏀', color: '#D4537E' },
      { title: 'crates.io', url: 'crates.io', emoji: '🦀', color: '#BA7517' },
    ],
  },
  {
    key: 'ai',
    name: 'AI',
    dotColor: '#EF9F27',
    links: [
      { title: 'Claude', url: 'claude.ai', emoji: '🤖', color: '#7F77DD' },
      { title: 'ChatGPT', url: 'chat.openai.com', emoji: '💬', color: '#1D9E75' },
      { title: 'Gemini', url: 'gemini.google.com', emoji: '✨', color: '#185FA5' },
      { title: 'Grok', url: 'grok.com', emoji: '🔮', color: '#333' },
    ],
  },
  {
    key: 'personal',
    name: 'Personal',
    dotColor: '#D4537E',
    links: [
      { title: 'YouTube', url: 'youtube.com', emoji: '▶️', color: '#C04828' },
      { title: 'Notion', url: 'notion.so', emoji: '📝', color: '#2C2C2A' },
      { title: 'Gmail', url: 'gmail.com', emoji: '✉️', color: '#C04828' },
      { title: 'Twitter/X', url: 'x.com', emoji: '𝕏', color: '#2C2C2A' },
    ],
  },
  {
    key: 'infra',
    name: 'Infra',
    dotColor: '#378ADD',
    links: [
      { title: 'Portainer', url: '192.168.31.11', emoji: '🐳', color: '#185FA5' },
      { title: 'Traefik', url: '192.168.31.11:8080', emoji: '🔀', color: '#D4537E' },
      { title: 'Gitea', url: 'git.local', emoji: '🍵', color: '#1D9E75' },
      { title: 'n8n', url: 'n8n.local', emoji: '⚙️', color: '#BA7517' },
    ],
  },
];
