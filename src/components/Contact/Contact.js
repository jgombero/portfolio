import React, { useContext } from "react";
import PortfolioContext from "../../context/context";
import { Container } from "react-bootstrap";

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <h1>This is the "Contact" Section</h1>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">{cta || "Would you like to work with me?"}</p>
          <a href={`mailTo:${email}`} target="_blank" rel="noopener noreferrer" className="">
            {btn || "Contact Me"}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
