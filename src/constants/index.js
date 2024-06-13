import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  growmore,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile Application",
    icon: mobile,
  },
  {
    title: "Software Development",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development",
    company_name: "GrowMore",
    icon: growmore,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Leverage the expertise of our experienced software developers proficient in the latest programming languages and technologies.",
      "Experience fast, flexible, and efficient software development with our agile methodologies, ensuring timely delivery and adaptability.",
      "Develop software that is scalable and adaptable to evolving business needs and technological advancements.",
      "Ensure top-notch software performance and reliability with our comprehensive testing and quality assurance practices.",
    ],
  },
  {
    title: "Mobile Application",
    company_name: "GrowMore",
    icon: growmore,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Utilize the latest tools and technologies for innovative and future-proof mobile apps.",
      "Ensure your mobile app integrates smoothly with existing systems and platforms.",
      "Receive continuous updates, maintenance, and support to keep your app running smoothly.",
      "Ensure broad reach and efficiency with our expertise in both iOS and Android development.",
    ],
  },
  {
    title: "Web Development",
    company_name: "GrowMore",
    icon: growmore,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Utilise our seasoned specialists that have considerable knowledge with cutting-edge web technology.",
      "Benefit from personalised web solutions that improve user experience and engagement.",
      "Access a comprehensive variety of services, including responsive design, e-commerce, and UX optimisation.",
      "Our web development solutions are sturdy, scalable, and future-proof, ensuring long-term success.",
    ],
  },
  {
    title: "Digital Marketing",
    company_name: "GrowMore",
    icon: growmore,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Leverage our years of experience and industry knowledge for top-notch marketing solutions.",
      "Benefit from bespoke marketing strategies designed to meet your unique goals.",
      "Access a full suite of digital marketing services under one cohesive strategy.",
      "Maximize ROI with our advanced analytics and data-driven decision-making.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Choose Growmore for visionary IT solutions backed by my entrepreneurial journey and commitment to innovation as Chairman.",
    name: "Hritik Singh",
    designation: "Chairman",
    company: "Growmore",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Gaurav Mandal",
    designation: "BOD",
    company: "Growmore",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Prasid Pun",
    designation: "CTO",
    company: "Growmore",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anee Shrestha",
    designation: "HOD Designer",
    company: "Growmore",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
