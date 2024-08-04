import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.png";
import net from "../../Assets/Projects/net.png";
import olx from "../../Assets/Projects/olx.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={net}
              isBlog={false}
              title="Netflix Clone"
              description="Clone of Netflix made using React and Redux, with a focus on front-end development. Used dynamic content fetched from a free movie database API."
              ghLink="https://github.com/ajosam/movie-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="Olx Clone"
              description="Developed an OLX clone using React and Redux, focusing on front-end development, with dynamic content fetched from a free API."
              ghLink="https://github.com/ajosam/olx-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="Engineered a fully responsive Amazon clone, which was developed with the front-end being React and Redux. Integrated a free API to fetch product data, providing a seamless shopping experience with features such as product browsing and searching, coupled with a user-friendly interface."
              ghLink="https://github.com/ajosam/e_commerce"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
