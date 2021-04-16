import React, { useState, useEffect, useContext } from "react";
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
      <h1>This is the "Projects" Section.</h1>
      <p>
        Et est duis amet sit pariatur ad veniam. Eiusmod veniam culpa id minim deserunt dolor anim
        in in esse proident. Consectetur incididunt incididunt fugiat dolor incididunt adipisicing
        sint. Adipisicing elit est exercitation minim Lorem amet exercitation. Ullamco do amet
        adipisicing aute.
      </p>
    </section>
  );
};

export default Projects;
