import type { Lang } from "@/i18n/dictionary";

/** Text that differs per language on the write-up page. */
interface ProjectText {
  description: string;
  status?: string;
}

export interface Project extends ProjectText {
  title: string;
  tag: string;
  image: string;
  icon?: string[];
  /** Live site, opened in a new tab. */
  liveUrl?: string;
  /** Has a write-up at /projects/[slug], from src/content/projects/[slug]/[lang].mdx. */
  slug?: string;
  /** Year and month (YYYY-MM), shown on the write-up page. */
  date?: string;
  /** Write-up text in other languages; anything missing falls back to English. */
  translations?: Partial<Record<Lang, Partial<ProjectText>>>;
}

/** Newest first: this is the order of the Featured Projects section. */
export const projects: Project[] = [
  {
    slug: "snapduo",
    liveUrl: "https://snapduo.ja7ca.web.id",
    image: "/projects/snapduo.png",
    title: "Snapduo",
    tag: "Next.js + Cloudflare Workers + WebRTC",
    description:
      "An online photobooth for two people in different places: share a room link, see and hear each other, and take a synced photo strip together.",
    icon: ["nextjs", "typescript", "cloudflare", "webrtc"],
    date: "2026-10",
    translations: {
      id: {
        description:
          "Photobooth online untuk dua orang di tempat berbeda: bagikan link room, saling melihat dan mendengar, lalu ambil photo strip bersama secara serentak.",
      },
    },
  },
  {
    slug: "saga-lab",
    image: "/projects/saga-lab.svg",
    title: "Saga Lab",
    tag: "Laravel + Redis Queue + Next.js",
    description:
      "A hands-on lab of the saga pattern: one checkout split across Order, Inventory and Payment services, each with its own database, kept consistent by events and compensating actions.",
    icon: ["laravel", "redis", "sqlite", "nextjs"],
    date: "2026-07",
    status: "Learning project · runs locally",
    translations: {
      id: {
        description:
          "Lab praktik saga pattern: satu checkout dipecah ke service Order, Inventory, dan Payment yang masing-masing punya database sendiri, dijaga konsisten lewat event dan compensating action.",
        status: "Proyek belajar · berjalan di lokal",
      },
    },
  },
  {
    liveUrl: "https://pritch.vercel.app/",
    image: "/pritch-dashboard.png",
    title: "Pritch Dashboard",
    tag: "React.js + Tailwind CSS",
    description:
      "A modern SaaS pricing analytics dashboard featuring real-time performance metrics, interactive pricing model strategies, and sleek user experience.",
    icon: ["reactjs", "tailwindcss"],
  },
  {
    liveUrl: "https://ja7ca.github.io",
    image: "/landingpage.png",
    title: "Modern Landing Page",
    tag: "HTML + CSS + JS",
    description:
      "A responsive landing page designed to effectively showcase product features, value propositions, and key information.",
  },
  {
    liveUrl: "https://chat-app-frontend-black-three.vercel.app/dashboard",
    image: "/chat-app.png",
    title: "Real-Time Chat App",
    tag: "Next.js + Express.js + Socket.io",
    description:
      "A real-time chat application built with Next.js for a modern and responsive user interface, Express.js for backend processing, and Socket.io for instant messaging.",
    icon: ["nextjs", "expressjs", "socketio"],
  },
  {
    image: "/notes-app.png",
    title: "Notes App",
    tag: "Next.js + Express.js + NextAuth",
    description:
      "A web-based note-taking application featuring secure user authentication via NextAuth, a responsive Next.js frontend, and a robust Express.js backend.",
    icon: ["nextjs", "expressjs", "nextauth"],
  },
  {
    liveUrl: "https://game-app-tau-lake.vercel.app/",
    image: "/game-app.png",
    title: "Game App",
    tag: "Next.js",
    description:
      "An interactive web-based gaming application featuring classic Tic-Tac-Toe and a memory card game in active development.",
    icon: ["nextjs"],
  },
  {
    liveUrl: "https://weather-app-dcka.vercel.app/",
    image: "/weather-app.png",
    title: "Weather App",
    tag: "Vue.js",
    description:
      "Provides real-time, accurate weather forecasts and meteorological insights sourced directly from BMKG.",
  },
];

export const projectsWithDetail = projects.filter(
  (p): p is Project & { slug: string } => !!p.slug
);

/** A write-up's project, with its text in `lang` where translated. */
export function getProject(slug: string, lang: Lang) {
  const project = projectsWithDetail.find((p) => p.slug === slug);
  if (!project) return undefined;
  return { ...project, ...project.translations?.[lang] };
}
