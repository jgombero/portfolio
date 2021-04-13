import React, { useContext } from "react";
import PortfolioContext from "../../context/context";

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <h1>This is the "Contact" Section</h1>
    </section>
  );
}

export default Contact;