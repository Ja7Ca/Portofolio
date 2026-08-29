import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["navbar"] = {
  root: {
    base: "border-b border-[#4D4D4D] mx-5",
    inner: {
      base: "container mx-auto flex flex-wrap items-center justify-between py-5 md:py-14 ",
      fluid: {
        on: "",
        off: "",
      },
    },
  },
  link: {
    base: "font-semibold text-center hover:text-white transition-colors",
    active: {
      on: "text-white",
      off: "text-[#D1D1D1]",
    },
  },
};

interface NavbarComponentProps {
  endLoading: boolean;
}

const NavbarComponent = ({ endLoading }: NavbarComponentProps) => {
  return (
    <Navbar
      fluid
      rounded
      className={`bg-transparent transition-transform duration-500 ${endLoading ? "translate-y-0" : "-translate-y-full"
        } delay-[1000ms]`}
      theme={customTheme}
      id="home"
    >
      <NavbarBrand as={Link} href="#home" className="flex items-center gap-3">
        <Image
          src="/ghost-logo.jpg"
          alt="Jarotstwn Logo"
          width={80}
          height={80}
          className="w-9 h-9 rounded-full object-cover border border-[#3BF686]/60 shadow-sm"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Jarotstwn
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#home" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#experience">
          Experience &amp; CV
        </NavbarLink>
        <NavbarLink as={Link} href="#project">
          Project
        </NavbarLink>
        <NavbarLink href="mailto:jarotsetiawan1001@gmail.com">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarComponent;