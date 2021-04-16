import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer">
      <Container>
        <h1>This is the Footer.</h1>
        <span className="back-to-top">
          <Link to="navbar" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <i className={`fa fa-${name || "refresh"}`} />
                </a>
              );
            })}
        </div>
        <hr />
      </Container>
    </footer>
  );
};

export default Footer;
