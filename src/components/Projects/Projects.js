import React, { useState, useEffect, useContext } from "react";
import PortfolioContext from "../../context/context";

const Projects = () => {
const { projects } = useContext(PortfolioContext);

const [isDesktop, setIsDesktop] = useState(false);
const [isMobile, setIsMobile] = useState(false);

seEffect(() => {
  if (window.innerWidth > 769) {
    setIsDesktop(true);
    setIsMobile(false);
  } else {
    setIsDesktop(false);
    setIsMobile(true);
  }
}, []);

  return(
    <section id="projects">
        <h1>This is the "Projects" Section.</h1>
      </section>
  );
}

export default Projects;