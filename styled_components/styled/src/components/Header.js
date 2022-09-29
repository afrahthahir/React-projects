import React from "react";
import {
  Logo,
  Nav,
  Button,
  Section,
  Section1,
  Section2,
  Image,
  Container,
} from "./style/Header.style";

const Header = () => {
  return (
    <header>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try It Free</Button>
        </Nav>
        <Section>
          <Section1>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Get Started For Free</button>
          </Section1>

          <Section2>
            <Image src="./images/illustration-mockups.svg" />
          </Section2>
        </Section>
      </Container>
    </header>
  );
};

export default Header;
