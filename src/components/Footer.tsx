import {
  Footer,
  FooterDivider,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const FooterComponent = () => {
  const theme: CustomFlowbiteTheme["footer"] = {
    root: {
      container: "w-full p-6 bg-transparent",
    },
    groupLink: {
      link: {
        base: "hover:text-white transition-colors",
      },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <Footer container theme={theme}>
      <div className="w-full text-center">
        <FooterDivider className="border-b border-[#4D4D4D]" />
        <div className="w-full justify-center sm:flex sm:items-center sm:justify-center">
          <FooterLinkGroup className="justify-center">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#experience">Experience &amp; CV</FooterLink>
            <FooterLink href="#project">Project</FooterLink>
            <FooterLink href="mailto:jarotsetiawan1001@gmail.com">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterCopyright
          href="#"
          by="Jarotstwn™"
          className="mt-4"
          year={currentYear}
        />
      </div>
    </Footer>
  );
};

export default FooterComponent;