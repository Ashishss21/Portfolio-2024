import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  carrent,
  jobit,
  tripguide,
  api,
  git,
  jira,
  c,
  postman,
  python,
  sql,
  cofiato,
  techbeans,
  thementor,
  email,
  linkedin,
  twitter,
  instagram
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "api",
    icon: api,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
];


const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Cofiato",
    icon: cofiato,
    iconBg: "#383E56",
    date: "April 2021 - June 2021",
    points: [
      "Developed dynamic websites using React.js, HTML, and CSS, ensuring optimal user experiences.",
      "Utilized Google Cloud Platform (GCP) for efficient deployment and management of web applications.",
      "Contributed to React Native app development, collaborating with teams to enhance functionality and user experience.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Techbeans Solutions",
    icon: techbeans,
    iconBg: "#E6DEDD",
    date: "August 2021 - September 2021",
    points: [
      "Designed and implemented a CNN model for COVID-19 analysis utilizing Machine Learning techniques.",
      "Conducted comprehensive data preprocessing and analysis on both training and testing datasets to ensure model accuracy and reliability."
    ],
  },
  {
    title: "Web Developement Intern",
    company_name: "TheMentor",
    icon: thementor,
    iconBg: "#383E56",
    date: "August 2021 - September 2021",
    points: [
      "Created React.js front-end apps for intuitive user interfaces.",
      "Developed Django APIs for efficient data management.",
      "Utilized AWS for reliable deployment and scalability.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];


const testimonials = [
  {
    testimonial:
      "The research paper outlines a hybrid methodology utilizing classification algorithms for heart disease detection. By integrating diverse algorithms, the approach aims to enhance accuracy and reliability in diagnosis, potentially advancing the effectiveness of heart disease detection methods.",
    name: "Hybrid Approach for heart disease detection using classification algorithms",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Task Management App",
    description:
      "Built using React and Redux efficiently organizes and tracks tasks with intuitive UI and centralized state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job Tracking App",
    description:
      "A React Native job tracking app offers users a streamlined mobile interface for efficiently managing their job search activities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest native",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Log App",
    description:
      "A MERN-based travel log app, similar to Airbnb, allows users to discover, book, and review accommodations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce App",
    description:
      "A React Native app offers shopping experience, enabling users to browse, buy, and manage purchases conveniently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Plantify",
    description:
      "React and Bootstrap e-commerce platform for seamless plant purchasing, emphasizing responsiveness and customization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "To Do App",
    description:
      "A task management app built with Expo and NativeBase, featuring task creation, completion, and display functionalities.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "NativeBase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const socials = [
  {
    name : "email",
    icon : email,
    link : "abc.com"
  },
  {
    name : "linkedin",
    icon : linkedin,
    link : "abc.com"
  },
  {
    name : "twitter",
    icon : twitter,
    link : "abc.com"
  },
  {
    name : "instagram",
    icon : instagram,
    link : "abc.com"
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
