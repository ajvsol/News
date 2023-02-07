import SearchArea from "@/components/SearchArea";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="p-3 border-gray-200 rounded bg-gray-100  dark:bg-gray-800 dark:border-gray-700 "
    >
      <Link href="/" className="">
        <Image
          src="/logo-blue.png"
          width="200"
          height="100"
          className="h-6 sm:h-10 sm:w-36 lg:w-36"
          alt="logo-image"
        ></Image>
      </Link>
      <SearchArea />
      <div className="flex flex-row-reverse p-1 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="Aaron Sollesse"
              img="/aaron-sollesse.jpg"
              size="xs"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Aaron Sollesse</span>
            <span className="block truncate text-sm font-medium">
              aaron@mail.spinningatoms.com
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link
              href="https://www.linkedin.com/in/aaron-sollesse"
              className=""
            >
              LinkedIn
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="https://github.com/ajvsol/" className="">
              GitHub
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}

//export default function Navbar() {
//  return (
//    <>
//      <Navbar fluid={true} rounded={true}>

//        <Navbar.Collapse>
//          <Navbar.Link href="/navbars" active={true}>
//            Home
//          </Navbar.Link>
//          <Navbar.Link href="/navbars">About</Navbar.Link>
//          <Navbar.Link href="/navbars">Services</Navbar.Link>
//          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
//          <Navbar.Link href="/navbars">Contact</Navbar.Link>
//        </Navbar.Collapse>
//      </Navbar>
//    </>
//  );
//}
