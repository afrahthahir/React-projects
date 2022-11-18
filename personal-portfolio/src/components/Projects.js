import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/resize1.png";
import projImg2 from "../assets/img/resize2.png";
import projImg3 from "../assets/img/resize3.png";
import projImg4 from "../assets/img/resize4.png";
import projImg5 from "../assets/img/resize5.png";
import projImg6 from "../assets/img/resize6.png";
import projImg7 from "../assets/img/resize7.png";
import projImg8 from "../assets/img/resize8.png";
import projImg9 from "../assets/img/resize9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";

export const Projects = () => {
  const projects1 = [
    {
      title: "Cocktail App",
      link: "https://afrahthahir-cocktail.netlify.app/",
      imgUrl: projImg1,
    },
    {
      title: "Sound Clone App",
      link: "https://afrahthahir-relevel-sound-clone.netlify.app/",
      imgUrl: projImg2,
    },
    {
      title: "HotStar Clone App",
      link: "https://afrahthahir-hotstar.netlify.app/",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Styled Components Demo App",
      link: "https://afrahthahir-styled-components.netlify.app/",
      imgUrl: projImg4,
    },
    {
      title: "Color Generator App",
      link: "https://afrahthahir-color-generator.netlify.app/",
      imgUrl: projImg5,
    },
    {
      title: "Stripe Submenu App",
      link: "https://afrahthahir-stripe-submenu.netlify.app/",
      imgUrl: projImg6,
    },
  ];

  const projects3 = [
    {
      title: "Shopping App",
      link: "https://afrahthahir-cart.netlify.app/",
      imgUrl: projImg7,
    },
    {
      title: "Tours App",
      link: "https://afrahthahir-tours.netlify.app/",
      imgUrl: projImg8,
    },
    {
      title: "Slider Reviews App",
      link: "https://afrahthahir-slider.netlify.app/",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
