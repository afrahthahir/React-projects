import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  StyledFooter,
  Container,
  Logo,
  FooterSection1,
  SocialIcons,
  Copyright,
} from "./style/Footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo src="./images/logo_white.svg" />
        <FooterSection1>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons>
            <ul>
              <li>
                <a href="https://www.twitter.com">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </SocialIcons>
        </FooterSection1>

        <Copyright>
          <p>© 2021 Huddle. All rights reserved</p>
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
