import SearchArea from "../components/SearchArea";
// Useful library for nicely styled basic components
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div data-testid="NavBar" className="">
      <Navbar
        fluid={true}
        rounded={true}
        className="p-3 border-gray-200 rounded bg-gray-100  dark:bg-gray-800 dark:border-gray-700 "
      >
        <Link href="/" className="sm:invisible">
          <Image
            src="/logo-blue.png"
            width="200"
            height="100"
            className="h-10 w-36 visible"
            alt="logo-image"
          ></Image>
        </Link>
        <SearchArea />
        <div className="p-1 min-w-[5%]">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="Aaron Sollesse"
                img="/aaron-sollesse.jpg"
                size="md"
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
    </div>
  );
}
