import React, { useState, useEffect, useContext } from "react";
import PortfolioContext from "../../context/context";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <h1>This is the "About" Section.</h1>
      <p>
        Nostrud sit aliqua ad voluptate qui. Id enim ea elit esse. Elit quis in adipisicing aliquip
        officia sit ipsum sit duis occaecat non reprehenderit. Id fugiat minim ex ex officia Lorem
        excepteur cupidatat exercitation incididunt sit voluptate. Id ipsum esse qui et aute.
        Officia labore aute consequat culpa pariatur eiusmod do. Deserunt commodo fugiat sint velit
        veniam ex et aliquip officia dolor dolore in in.
      </p>
      <p>
        Dolor cupidatat nisi laboris proident nostrud nisi dolore eiusmod. Laboris veniam ullamco
        voluptate excepteur voluptate enim consectetur qui adipisicing minim cupidatat. In cupidatat
        sint irure voluptate reprehenderit pariatur nisi mollit cupidatat eiusmod cillum eu esse
        sint.
      </p>
      <p>
        Dolore ad esse laborum Lorem irure qui. Qui eu adipisicing sint magna sint sit elit ipsum.
        Culpa magna aliquip duis reprehenderit ad consectetur qui. Id occaecat ipsum adipisicing
        ullamco aute cupidatat reprehenderit quis reprehenderit deserunt voluptate nostrud veniam
        id. Excepteur occaecat aute adipisicing ipsum officia officia et nostrud laboris eiusmod
        elit elit pariatur. Et eu aliquip minim velit elit.
      </p>
    </section>
  );
};

export default About;
