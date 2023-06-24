import {
  producer,
  joy,
  cubane,
  flstudio,
  tablet,
  linkg,
  react,
  javascript,
  jrhunor,
  
  html,
  css,
  reactjs,

  tailwind,
  nodejs,
  mongodb,
  git,
 
  meta,
  starbucks,
  tesla,
  shopify,
  
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Web Developer",
    icon: react,
  },
  {
    title: "Music Producer",
    icon: flstudio,
  },
  {
    title: "Digital artist",
    icon: tablet,
  },
  {
    title: "Audio Engineer",
    icon: producer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flstudio",
    icon: flstudio,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The SafePod",
    description:
      "Audio editing for this podcast involves enhancing audio quality, removing background noise, adjusting levels, adding music or sound effects, and ensuring a smooth and professional listening experience.",
    tags: [
     
    ],
    image: joy,
    source_code_link: "https://github.com/",
  },
  {
    name: "CubaneDion website",
    description:
      "This website showcases his talent, and brand. It features a visually captivating design, a music section with streaming options, social media integration for fan engagement, and a contact page for inquiries.",
    tags: [
     
    ],
    image: cubane,
    source_code_link: "https://www.cubanedion.com/",
  },
  {
    name: "My protfolio Website",
    description:
      "The portfolio website for Me presents a collection of my creative projects, combining visually appealing designs with audio samples that showcase my expertise in all my professional fields.",
    tags: [
     
    ],
    image: jrhunor,
    source_code_link: "https://jrhunor.com/",
  },
  {
    name: "DSIC",
    description:
      "My production credits in this project, contributing My expertise to shaping the sound and creative direction of the project, ensuring its overall quality and artistic vision.",
    tags: [
      
    ],
    image: linkg,
    source_code_link: "https://onerpm.link/266829756744",
  },
];

export { services, technologies, experiences, testimonials, projects };
