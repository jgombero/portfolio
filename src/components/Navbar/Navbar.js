import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Navbar = () => {
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
    <section id="navbar" className="navbar">
      <Container>
        <Link to="about" smooth={true} duration={1000}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          Contact
        </Link>
      </Container>
    </section>
  );
};

export default Navbar;
