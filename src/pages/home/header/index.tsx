import {
  Anchor,
  Container,
  Grid,
  Group,
  Image,
  UnstyledButton,
} from "@mantine/core";
import classes from "./style.module.css";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import Logo from "assets/img/logo.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className={classes.header}>
      <Topbar />
      <HeaderInner />
    </header>
  );
}

function Topbar() {
  return (
    <div className={classes.topbar}>
      <Container size="lg">
        <Grid>
          <Grid.Col
            span={{ base: 12, sm: 5, md: 6 }}
            className={classes.topleft}
          >
            <Group c={"gray.8"}>
              <UnstyledButton>About</UnstyledButton>
              <UnstyledButton>Doctors</UnstyledButton>
              <UnstyledButton>Contact</UnstyledButton>
              <UnstyledButton>FAQ</UnstyledButton>
            </Group>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, sm: 7, md: 6 }}
            className={classes.topright}
          >
            <Group gap={25}>
              <Group gap={5}>
                <IconPhoneCall size={17} className={classes.topIcon} />
                <span className={classes.topText}>+880 1234 56789</span>
              </Group>
              <Group gap={5}>
                <IconMail size={17} className={classes.topIcon} />
                <Anchor
                  href="mailto:support@yourmail.com"
                  className={classes.topText}
                >
                  support@yourmail.com
                </Anchor>
              </Group>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

function HeaderInner() {
  return (
    <div className="header-inner">
      <Container size="lg">
        <Grid>
          <Grid.Col
            span={{ base: 12, sm: 3, md: 3 }}
            className="flex justify-between items-center"
          >
            {/* Start Logo */}
            <div className="px-3">
              <UnstyledButton component={Link} to="/">
                <Image h={"100%"} w="auto" src={Logo} alt="#" />
              </UnstyledButton>
            </div>
            {/* End Logo */}
            {/* Mobile Nav */}
            <div className="mobile-nav" />
            {/* End Mobile Nav */}
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, sm: 9, md: 7 }}
            className="col-lg-7 col-md-9 col-12"
          >
            {/* Main Menu */}

            <nav className="navigation">
              <Group className="nav menu">
                <Link to="/" className="py-4">
                  Home
                </Link>

                <li>
                  <a href="#">Doctos </a>
                </li>
                <li>
                  <a href="#">Services </a>
                </li>
                <li>
                  <a href="#">
                    Pages <i className="icofont-rounded-down" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="404.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </Group>
            </nav>

            {/*/ End Main Menu */}
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 2 }}>
            <div className="get-quote">
              <a href="appointment.html" className="btn">
                Book Appointment
              </a>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
