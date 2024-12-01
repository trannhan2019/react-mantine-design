import {
  Anchor,
  Burger,
  Button,
  Center,
  Container,
  Drawer,
  Group,
  Image,
  Menu,
  NavLink,
  UnstyledButton,
} from "@mantine/core";

import {
  IconChevronDown,
  IconChevronRight,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";
import Logo from "assets/img/logo.png";
import { Link } from "react-router";
import { useDisclosure, useDocumentTitle } from "@mantine/hooks";

export default function Header() {
  useDocumentTitle("SBA | Home Page");

  return (
    <header className="relative bg-white">
      <Topbar />
      <HeaderInner />
    </header>
  );
}

function Topbar() {
  return (
    <div className="relative h-14 border-b bg-white">
      <Container size="lg" h={"100%"}>
        <div className="h-full md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Group c={"gray.8"}>
              <UnstyledButton>About</UnstyledButton>
              <UnstyledButton>Doctors</UnstyledButton>
              <UnstyledButton>Contact</UnstyledButton>
              <UnstyledButton>FAQ</UnstyledButton>
            </Group>
          </div>

          <div className="flex justify-center md:justify-end">
            <Group gap={25}>
              <Group gap={5}>
                <IconPhoneCall size={17} className="text-sky-500" />
                <span className="text-sm">+880 1234 56789</span>
              </Group>
              <Group gap={5}>
                <IconMail size={17} className="text-sky-500" />
                <Anchor href="mailto:support@yourmail.com" className="">
                  support@yourmail.com
                </Anchor>
              </Group>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
function HeaderInner() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <div className="h-[74px] bg-slate-50">
      <Container size="lg" h={"100%"}>
        <div className="flex h-full">
          <div className="flex w-full items-center justify-between lg:w-3/12">
            {/* Start Logo */}
            <div className="flex h-full items-center">
              <Link to="/">
                <Image src={Logo} alt="#" sizes="100%" />
              </Link>
            </div>
            {/* End Logo */}
            {/* Mobile Nav */}
            <Burger
              hiddenFrom="sm"
              color="blue"
              lineSize={3}
              opened={opened}
              onClick={toggle}
            />
            {/* End Mobile Nav */}
          </div>

          <div className="hidden justify-center md:flex md:w-9/12 lg:w-7/12">
            {/* Main Menu */}
            <nav className="navigation test flex gap-3">
              <UnstyledButton
                component={Link}
                to="/"
                className="menu group relative px-3 py-6 font-semibold transition-all duration-300 ease-in-out hover:text-sky-500"
              >
                Home
                <span className="absolute bottom-0 left-0 h-1 w-0 rounded-t-lg bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </UnstyledButton>

              <UnstyledButton className="menu group relative px-3 py-6 font-semibold transition-all duration-300 ease-in-out hover:text-sky-500">
                Doctors
                <span className="absolute bottom-0 left-0 h-1 w-0 rounded-t-lg bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </UnstyledButton>

              <UnstyledButton className="menu group relative px-3 py-6 font-semibold transition-all duration-300 ease-in-out hover:text-sky-500">
                Services
                <span className="absolute bottom-0 left-0 h-1 w-0 rounded-t-lg bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </UnstyledButton>

              <Menu
                trigger="hover"
                openDelay={100}
                closeDelay={300}
                offset={0}
                shadow="md"
                width={200}
                position="bottom-start"
              >
                <Menu.Target>
                  <UnstyledButton className="menu group relative px-3 py-6 font-semibold transition-all duration-300 ease-in-out hover:text-sky-500">
                    <Center>
                      <span>Pages</span>
                      <IconChevronDown
                        className="ml-2"
                        size={14}
                        stroke={1.5}
                      />
                    </Center>
                    <span className="absolute bottom-0 left-0 h-1 w-0 rounded-t-lg bg-sky-500 transition-all duration-300 group-hover:w-full" />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item className="font-semibold hover:text-base hover:text-sky-500">
                    Page 1
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </nav>
            {/*/ End Main Menu */}
          </div>

          <div className="hidden items-center lg:flex lg:w-2/12">
            <Button className="group relative text-sm hover:border-0" size="lg">
              <span className="absolute left-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]"></span>
              <span className="z-10">Book Appointment</span>
              <span className="absolute right-0 h-full w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-[50%]"></span>
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      <Drawer opened={opened} size="xs" onClose={close}>
        <NavLink
          label="Home"
          href="/"
          fw={500}
          className="hover:text-sky-500"
        />
        <NavLink
          label="Doctors"
          href="/"
          fw={500}
          className="hover:text-sky-500"
        />
        <NavLink
          label="Services"
          href="/"
          fw={500}
          className="hover:text-sky-500"
        />
        <NavLink
          label="Pages"
          href="#"
          fw={500}
          className="hover:text-sky-500"
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
        >
          <NavLink
            label="Page 1"
            href="#required-for-focus"
            className="hover:text-sky-500"
          />
        </NavLink>
      </Drawer>
    </div>
  );
}
