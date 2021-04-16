import React, { useContext } from "react";
import PortfolioContext from "../../context/context";

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <h1>This is the "Contact" Section</h1>
      <p>
        Officia voluptate Lorem quis ea cupidatat laboris elit adipisicing. Minim nisi irure
        excepteur duis ea incididunt aute quis ut et aute ipsum. Enim esse Lorem pariatur laborum
        quis nisi labore veniam.
      </p>
    </section>
  );
};

export default Contact;
