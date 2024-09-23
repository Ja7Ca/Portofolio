import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import type { CustomFlowbiteTheme } from 'flowbite-react';

const FooterComponent = () => {
    const theme : CustomFlowbiteTheme['footer'] = {
        root: {
            container: "w-full p-6 bg-transparent",
        },
        groupLink: {
            link: {
                base: "hover:text-white"
            }
        }
    }

  return (
    <Footer container theme={theme} >
      <div className="w-full text-center">
        <FooterDivider className="border-b border-[#4D4D4D]"/>
        <div className="w-full justify-center sm:flex sm:items-center sm:justify-center">
          <FooterLinkGroup className="justify-center">
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Project</FooterLink>
            <FooterLink href="#">Snippet</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterCopyright href="#" by="Jarotstwm™" className="mt-4" year={2024} />
      </div>
    </Footer>
  )

}

export default FooterComponent