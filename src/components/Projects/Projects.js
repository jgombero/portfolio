import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioContext from "../../context/context";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsMobile(true);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="projects-wrapper">
          <h1>This is the "Projects" Section.</h1>
          {projects.map((project) => {
            const { title, info, info2, info3, info4, url, repo, img, id } = project;

            return (
              <Row key={id} className="project-wrapper__row">
                <Col lg={4} sm={12}>
                  <div className="projects-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title || "Project Title"}</h3>
                    <div>
                      <p>
                        {info ||
                          "Exercitation exercitation consectetur pariatur pariatur do culpa pariatur irure. Incididunt cupidatat labore aliquip pariatur. Sunt proident est occaecat laboris."}
                      </p>
                      <p>{info2 || ""}</p>
                      <p>{info3 || ""}</p>
                      <p>{info4 || ""}</p>
                    </div>
                    {repo && (
                      <a href={repo} target="_blank" rel="noopener noreferrer" className="">
                        Source Code
                      </a>
                    )}
                  </div>
                </Col>
                <Col lg={8} sm={12}>
                  <div className="projects-wrapper__image">
                    <a
                      href={url}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <img src={img} alt="Project Picture" />
                    </a>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
