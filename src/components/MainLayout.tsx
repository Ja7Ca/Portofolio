"use client";

import { useState } from "react";
import LoadingSection from "@/components/Loading/Section";
import NavbarComponent from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import ExperienceComponent from "@/components/Experience";
import WrapSection from "@/components/Section/WrapSection";
import CardProject from "@/components/Card/CardProject";
import FooterComponent from "@/components/Footer";

export default function MainLayout() {
  const [endLoading, setEndLoading] = useState(false);

  return (
    <div className="overflow-x-hidden min-h-screen">
      <LoadingSection setEndLoading={setEndLoading} />
      <NavbarComponent endLoading={endLoading} />
      <main>
        <HomeComponent endLoading={endLoading} />
        <ExperienceComponent />
        <WrapSection
          title="Featured Projects"
          classWrap="mt-10 grid grid-cols-1 gap-16"
          id="project"
        >
          <CardProject
            link="https://pritch.vercel.app/"
            image="/pritch-dashboard.png"
            title="Pritch Dashboard"
            tag="React.js + Tailwind CSS"
            description="A modern SaaS pricing analytics dashboard featuring real-time performance metrics, interactive pricing model strategies, and sleek user experience."
            icon={["reactjs", "tailwindcss"]}
          />
          <CardProject
            link="https://ja7ca.github.io"
            image="/landingpage.png"
            title="Modern Landing Page"
            tag="HTML + CSS + JS"
            description="A responsive landing page designed to effectively showcase product features, value propositions, and key information."
          />
          <CardProject
            link="https://chat-app-frontend-black-three.vercel.app/dashboard"
            image="/chat-app.png"
            title="Real-Time Chat App"
            tag="Next.js + Express.js + Socket.io"
            description="A real-time chat application built with Next.js for a modern and responsive user interface, Express.js for backend processing, and Socket.io for instant messaging."
            icon={["nextjs", "expressjs", "socketio"]}
          />
          <CardProject
            link="#"
            image="/notes-app.png"
            title="Notes App"
            tag="Next.js + Express.js + NextAuth"
            description="A web-based note-taking application featuring secure user authentication via NextAuth, a responsive Next.js frontend, and a robust Express.js backend."
            icon={["nextjs", "expressjs", "nextauth"]}
          />
          <CardProject
            link="https://game-app-tau-lake.vercel.app/"
            image="/game-app.png"
            title="Game App"
            tag="Next.js"
            description="An interactive web-based gaming application featuring classic Tic-Tac-Toe and a memory card game in active development."
            icon={["nextjs"]}
          />
          <CardProject
            link="https://weather-app-dcka.vercel.app/"
            image="/weather-app.png"
            title="Weather App"
            tag="Vue.js"
            description="Provides real-time, accurate weather forecasts and meteorological insights sourced directly from BMKG."
          />
        </WrapSection>
      </main>
      <FooterComponent />
    </div>
  );
}
