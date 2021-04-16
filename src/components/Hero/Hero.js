import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";

const Header = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const { networks } = footer;

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
    <section id="hero">
      <Container>
        <h1>
          Hello!
          <br />
          My name is {name}
          <br />
          {subtitle}
        </h1>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              console.log(network);
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name || "refresh"}`} />
                </a>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default Header;
