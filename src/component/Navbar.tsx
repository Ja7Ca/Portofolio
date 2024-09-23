import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['navbar'] = {
  root: {
    base :"border-b border-[#4D4D4D] mx-5",
    "inner": {
      "base": "container mx-auto flex flex-wrap items-center justify-between py-5 md:py-14 ",
      "fluid": {
        "on": "",
        "off": ""
      }
    }
  },
  link: {
    base: "font-semibold text-center",
    active: {
      on:"text-white",
      off:"text-[#D1D1D1]"
    },
  },
}

const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className="bg-transparent" theme={customTheme}>
        {/* <div className="container flex justify-between items-center border-b border-[#4D4D4D] py-14"> */}
          <NavbarBrand as={Link} href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jarotstwn</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href="#">
              Project
            </NavbarLink>
            <NavbarLink href="#">Snippet</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        {/* </div> */}
    </Navbar>
  )
}

export default NavbarComponent