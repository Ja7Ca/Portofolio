import { Metadata } from "next"
import CardProject from "@/component/Card/CardProject"
import CardSnipet from "@/component/Card/CardSnipet"
import HomeComponent from "@/component/Home"
import NavbarComponent from "@/component/Navbar"
import WrapSection from "@/component/Section/WrapSection"
import FooterComponent from "@/component/Footer"
import LoadingSection from "@/component/Loading/Section"

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio of Jarotstwn",
};

const page = () => {

  return (
    <>
      <LoadingSection/>
      <NavbarComponent/>
      <HomeComponent/>
      <WrapSection title="Featured Project" classWrap="mt-10 grid grid-cols-1 gap-16">
        <CardProject link="https://ja7ca.github.io" image="/landingpage.png" title="Landing Page" tag="HTML + CSS + JS" description="Landing Page is a page where users can find out about the project they will be using"/>
        <CardProject/>
      </WrapSection>
      <WrapSection title="Code Snippet" classWrap="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-[1.5em] gap-y-[2em] max-w-[71.0625em]">
        <CardSnipet/>
        <CardSnipet/>
      </WrapSection>
      <FooterComponent/>
    </>
  )
}

export default page