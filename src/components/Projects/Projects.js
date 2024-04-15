import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import imagegen from "../../Assets/Projects/imagegen.jpg";
import portfolio from "../../Assets/Projects/port.png";
import movies from "../../Assets/Projects/movies.png";
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Personal Portfolio website which is self-designed showcasing my skills and experience as a web and software developer. It is made using ReactJs and Vanilla Javascript.  "
              ghLink="https://github.com/het-cast"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Bits-0f-C0de"
              description="myMovies is a MERN stack progressive web app (PWA) for everything related to Movies, Shows, and Artists. Movie database is taken from my TMDB API and built using ReactJS, ReduxJS/Toolkit, TailwindCSS, DaisyUI, NodeJS, ExpressJS, and MongoDB."
              ghLink="https://github.com/het-cast/AI-Image-Generator"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagegen}
              isBlog={false}
              title="AI-Image-Generator"
              description="This project, AI Image Generator , lets your imagination run wild!  Just feed it text prompts and DALL-E 2 will conjure up stunning visuals, transforming your ideas into reality. Built with cutting-edge web technologies, this app is a powerful tool for creative exploration."
              ghLink="https://github.com/het-cast/AI-Image-Generator"
              demoLink=""              
            />
          </Col>

        

   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
