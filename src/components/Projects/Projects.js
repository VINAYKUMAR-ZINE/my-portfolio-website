import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a couple of projects I've done in recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Reflex setter"
              description=""
              ghLink="https://github.com/VINAYKUMAR-ZINE/ReflexSetter"
              // demoLink="link of the site"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Carzone Analysis"
              description=""
              ghLink="https://github.com/VINAYKUMAR-ZINE/carzone-analysis"
              // demoLink="link of the site"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tesla Clone"
              description=""
              ghLink="https://github.com/VINAYKUMAR-ZINE/tesla_clone"
              // demoLink="link of the site"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
