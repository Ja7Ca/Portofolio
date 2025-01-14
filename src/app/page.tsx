"use client"

import CardProject from "@/component/Card/CardProject"
import CardSnipet from "@/component/Card/CardSnipet"
import HomeComponent from "@/component/Home"
import NavbarComponent from "@/component/Navbar"
import WrapSection from "@/component/Section/WrapSection"
import FooterComponent from "@/component/Footer"
import LoadingSection from "@/component/Loading/Section"
import { useState } from "react"

const page = () => {
  const [endLoading, setEndLoading] = useState(false)

  return (
    <>
      <LoadingSection setEndLoading={setEndLoading}/>
      <NavbarComponent endLoading={endLoading}/>
      <HomeComponent endLoading={endLoading}/>
      <WrapSection title="Featured Project" classWrap="mt-10 grid grid-cols-1 gap-16" id="project">
        <CardProject 
          link="https://ja7ca.github.io" 
          image="/landingpage.png" 
          title="Landing Page" 
          tag="HTML + CSS + JS" 
          description="Landing Page is a page where users can find out about the project they will be using"/>
        <CardProject 
          link="https://chat-app-frontend-black-three.vercel.app/dashboard" 
          image="/chat-app.png" 
          title="Chat App" 
          tag="NextJS + ExpressJS + Socket.io" 
          description="
          A real-time chat application built with Next.js for a modern and responsive user interface, Express.js as a lightweight backend server, and Socket.io for fast and reliable real-time communication."
          // icon={["nextjs", "expressjs", "socketio"]}
          />
        <CardProject 
          link="#" 
          image="/notes-app.png" 
          title="Notes App" 
          tag="NextJS + ExpressJS + NextAuth" 
          description="
          Notes App is a web-based note-taking application built with Next.js for a modern and responsive user interface, Express.js as a reliable backend server, and NextAuth for secure and user-friendly authentication."/>
        <CardProject 
          link="https://game-app-tau-lake.vercel.app/" 
          image="/game-app.png" 
          title="Game App" 
          tag="NextJS" 
          description="Game App is a web-based gaming application designed to provide simple entertainment with a modern, responsive, and interactive interface. Built using Next.js, it delivers a fast and enjoyable gaming experience. Currently, Game App features the classic Tic-Tac-Toe game, while the memory-challenging Flip Card game is in development"/>
          <CardProject 
          link="https://weather-app-dcka.vercel.app/" 
          image="/weather-app.png" 
          title="Weather App" 
          tag="VueJS" 
          description="Weather App provides accurate weather information to help you better plan your day. Data source from data.bmkg.go.id"/>
      </WrapSection>
      <WrapSection title="Code Snippet" classWrap="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[1.5em] gap-y-[2em] max-w-[71.0625em]" id="snippet">
        <CardSnipet/>
        <CardSnipet/>
      </WrapSection>
      <FooterComponent/>
    </>
  )
}

export default page