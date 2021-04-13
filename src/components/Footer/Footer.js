import React, { useContext } from "react";
import PortfolioContext from "../../context/context";

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { network } = footer;

  return (
    <footer className="footer">
      <h1>This is the Footer.</h1>
    </footer>
  );
};

export default Footer;
