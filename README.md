# Jarot Setiawan - Personal Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SEO Ready](https://img.shields.io/badge/SEO-Optimized-3BF686?style=for-the-badge)

A modern, responsive, and performance-optimized personal portfolio web application built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**. Showcasing full-stack & frontend engineering projects, professional work experience, downloadable CV, and contact channels.

---

## ✨ Features

- 🚀 **Next.js 14 App Router**: Fast server-side rendering & static page generation.
- 🎨 **Modern Dark UI Theme**: Custom gradients, smooth animations, and responsive layout.
- 🛠️ **Featured Projects Showcase**: Detailed project cards with live links and technology badges (Snapduo, Saga Lab, Pritch Dashboard, Real-Time Chat App, Game App, Notes App, Weather App).
- 📝 **Project Detail Pages**: What the project is, its tech stack and how it works, in English (`/projects/[slug]`) and Indonesian (`/id/projects/[slug]`), written in MDX (`src/content/projects/[slug]/en.mdx`, `id.mdx`). A card shows **Read details** when a write-up exists and **Live site** when the project is deployed.
- ⏳ **Intro Loading Screen**: Plays once per browser session; reloads and returning from a write-up show the page right away.
- 📄 **Downloadable CV**: Direct download trigger for updated PDF resume.
- 🔍 **Complete SEO & OpenGraph**:
  - Structured Data (Schema.org JSON-LD for Person & WebSite).
  - Dynamic `sitemap.xml` and `robots.txt`.
  - Social media preview cards (LinkedIn, WhatsApp, Twitter/X).
- 💬 **Direct Contact Options**: Quick links to WhatsApp, Instagram, LinkedIn, GitHub, and Email.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.org/) + [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- **Content**: [MDX](https://mdxjs.com/) via [@next/mdx](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- **Smooth Scroll**: [@studio-freight/react-lenis](https://github.com/studio-freight/lenis)
- **Deployment**: [GitHub Pages](https://ja7ca.github.io) / Vercel

---

## 💻 Featured Projects

1. **[Snapduo](https://snapduo.ja7ca.web.id)** (`Next.js` + `Cloudflare Workers` + `WebRTC`)
   - Online photobooth for two people in different places, with a synced countdown and a shared photo strip. Write-up: `/projects/snapduo` (Indonesian: `/id/projects/snapduo`).
2. **Saga Lab** (`Laravel` + `Redis Queue` + `Next.js`)
   - Learning project implementing the saga pattern across Order, Inventory and Payment services with compensating actions. Write-up: `/projects/saga-lab` (Indonesian: `/id/projects/saga-lab`).
3. **[Pritch Dashboard](https://pritch.vercel.app/)** (`React.js` + `Tailwind CSS`)
   - A modern SaaS pricing analytics dashboard featuring real-time performance metrics and pricing strategies.
4. **[Real-Time Chat App](https://chat-app-frontend-black-three.vercel.app/dashboard)** (`Next.js` + `Express.js` + `Socket.io`)
   - Real-time instant messaging web app with Express.js backend and Socket.io sockets.
5. **[Modern Landing Page](https://ja7ca.github.io)** (`HTML` + `CSS` + `JS`)
   - High-converting responsive product landing page showcase.
6. **[Game App](https://game-app-tau-lake.vercel.app/)** (`Next.js`)
   - Interactive web-based gaming application featuring classic Tic-Tac-Toe and memory card games.
7. **[Weather App](https://weather-app-dcka.vercel.app/)** (`Vue.js`)
   - Real-time weather forecasting application integrated with BMKG API data.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ja7Ca/Portofolio.git
   cd Porto-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📬 Contact & Socials

- **WhatsApp**: [+62 896-3707-9629](https://wa.me/6289637079629)
- **Email**: [jarotsetiawan1001@gmail.com](mailto:jarotsetiawan1001@gmail.com)
- **LinkedIn**: [Jarot Setiawan](https://www.linkedin.com/in/jarot-setiawan-947275214/)
- **GitHub**: [@Ja7Ca](https://github.com/Ja7Ca)
- **Instagram**: [@jarotstwn](https://instagram.com/jarotstwn)
