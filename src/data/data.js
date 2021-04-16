import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Joshua Gomberoff | Developer",
  lang: "en",
  description: "",
};

// HEADER DATA
export const heroData = {
  title: "",
  name: "Joshua Gomberoff",
  subtitle: "Web Developer and Classical Violist",
  cta: "Find out more!",
};

// ABOUT DATA
export const aboutData = {
  img: "",
  paragraphOne: `I'm a 27 year old classical violist turned full stack developer, based out of Vancouver, BC.`,
  paragraphTwo: `I completed my Bachelor of Music degree from the University of Victoria in 2017 before moving to New York City, where I spent 3 years completing both my Master of Music degree and Professional Studies Certificate from one of the top music schools in North America: Manhattan School of Music. When the COVID-19 pandemic hit, I decided to pivot my career path to pursue software development, another passion of mine.`,
  paragraphThree: `Upon graduating with a Web Development Certificate from Lighthouse Labs in August 2020, I was quickly hired as a Full-Stack Developer at a fintech comapny called The Perk, where I've worked ever since primarily using JS, Node, React, GQL, and Docker. Coming from a background in music performance, I offer a unique skill set in team communication and collaboration, and can thrive both in new unfamiliar situations and under pressure.`,
  resume: "https://drive.google.com/file/d/1TsP9RYPxwAvlx5T9AIGBvupxFqfxoAn3/view?usp=sharing",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "atlas-jams.png",
    title: "Atlas Jams",
    info: "An app for hosts, performers, and concertgoers to connect to create live events.",
    info2: "Front-end: HTML, CSS, React, Material UI",
    info3: "Back-end: Ruby on Rails, PostgreSQL",
    info4: "Testing: Storybook",
    url: "",
    repo: "https://github.com/jalaynatipantiza/atlas-Jams", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "jungle.png",
    title: "Jungle",
    info: "A mini e-commerce application built for the purpose of learning Rails.",
    info2: "Front-end: Ruby, HTML, CSS",
    info3: "Back-end: Rails, PostgreSQL",
    info4: "Testing: RSpec, Capybara, Poltergeist",
    url: "",
    repo: "https://github.com/jgombero/jungle", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "interview-scheduler.png",
    title: "Interview Scheduler",
    info: "A scheduler that lets the user create, edit, and delete appointments.",
    info2: "Front-end: HTML, CSS, React",
    info3: "Back-end: Node, Express, SQL",
    info4: "Testing: Jest, Storybook, Cypress",
    url: "",
    repo: "https://github.com/jgombero/scheduler", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "beeFind.png",
    title: "BeeFind",
    info: "A simplified single-page Facebook Marketplace clone.",
    info2: "Front-end: JavaScript, AJAX, JQuery, HTML, CSS",
    info3: "Back-end: Node, Express, PostgreSQL",
    info4: "",
    url: "",
    repo: "https://github.com/jgombero/LHL-midterm-project", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "tweeter.png",
    title: "Tweeter",
    info: "A simplified single-page Twitter clone.",
    info2: "Front-end: HTML, CSS, jQuery, AJAX, JavaScript",
    info3: "Back-end: Node, Express, MongoDB",
    info4: "",
    url: "",
    repo: "https://github.com/jgombero/tweeter", // if no repo, the button will not show up
  },
];

//  CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "joshuagomberoff@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/joshua-gomberoff/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/jgombero",
    },
  ],
};
