"use client";

import { useState } from "react";
import LoadingSection from "@/components/Loading/Section";
import NavbarComponent from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import ExperienceComponent from "@/components/Experience";
import WrapSection from "@/components/Section/WrapSection";
import CardProject from "@/components/Card/CardProject";
import FooterComponent from "@/components/Footer";
import { projects } from "@/data/projects";

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
          {projects.map((project) => (
            <CardProject key={project.title} {...project} />
          ))}
        </WrapSection>
      </main>
      <FooterComponent />
    </div>
  );
}
