import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    <section id="navbar">
      <Container>
        <div className="navbar-wrapper">
          <Row>
            <Col>
              <Link to="about" smooth={true} duration={1000}>
                About
              </Link>
            </Col>
            <Col>
              <Link to="projects" smooth={true} duration={1000}>
                Projects
              </Link>
            </Col>
            <Col>
              <Link to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
