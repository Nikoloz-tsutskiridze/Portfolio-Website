import { SiCsharp, SiStyledcomponents, SiTypescript } from "react-icons/si";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNextjsFill,
  RiSupabaseFill,
  RiGitMergeFill,
} from "@remixicon/react";
import { RiCodeSSlashLine } from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
];

export const PROFILE = {
  name: "Nikoloz Tsutskiridze",
  role: "Front-End Developer",
  subheading:
    "Dedicated React Developer with extensive experience in developing and managing responsive web applications. Proficient in crafting interactive user interfaces and optimizing application performance.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Dwell & Decor",
    description:
      "This is a platform where customers can easily register, browse, and purchase their favorite products. Users can leave ratings and reviews. platform features an intuitive admin panel, for seamless management of products, including adding, editing, and deleting items.",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    imgSrc: project6,
    link: "https://dwell-decor.vercel.app/",
    github: "https://github.com/Nikoloz-tsutskiridze/Dwell-Decor.git",
  },
  {
    id: 2,
    title: "The Wild Oasis - Web",
    description:
      "The Wild Oasis is a web application that transports users to the heart of nature and is designed for customers to easily book wooden cabins for their desired dates.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    imgSrc: project5,
    link: "https://the-wild-oasis-web-psi.vercel.app/",
    github: "https://github.com/Nikoloz-tsutskiridze/The-Wild-Oasis-Web.git",
  },
  {
    id: 3,
    title: "The Wild Oasis - Admin Panel",
    description:
      "The Admin Panel is designed for internal personnel to efficiently manage the data of wooden cabins. It provides features for adding, updating, and deleting cabin listings.",
    techStack: ["React", "Styled-components", "Supabase"],
    imgSrc: project2,
    link: "https://the-woodland-haven.netlify.app/login",
    github: "https://github.com/Nikoloz-tsutskiridze/The-Wild-Oasis-App.git",
  },
  {
    id: 4,
    title: "Cartify",
    description:
      "This is an responsive e-commerce platform where users can easily register and browse a wide selection of products. With a user-friendly interface, customers can quickly place orders for their desired items.",
    techStack: ["React", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://cartify-tawny.vercel.app/",
    github: "https://github.com/Nikoloz-tsutskiridze/Cartify-Web.git",
  },
  {
    id: 5,
    title: "Rainbow Six Siege",
    description:
      "This site will help you discover your favorite or least favorite Rainbow Six Siege operators, offering a user-friendly interface that makes exploring strategies and gameplay options easy and exciting. Built with GSAP.",
    techStack: ["React", "Tailwind CSS", "GSAP"],
    imgSrc: project4,
    link: "https://rainbow-six-siegee.vercel.app/",
    github: "https://github.com/Nikoloz-tsutskiridze/gsap.git",
  },
  {
    id: 6,
    title: "Github - User Checker",
    description:
      "This is a simple web application designed to fetch and display GitHub user information. Users can search for any GitHub profile and view details like repositories, followers, and more.",
    techStack: ["React", "Styled-components"],
    imgSrc: project1,
    link: "https://github-users-checker.vercel.app/",
    github: "https://github.com/Nikoloz-tsutskiridze/Github-Users.git",
  },
];

export const SKILLS = [
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="text-green-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="text-green-600" />,
  },
  {
    name: "C#",
    icon: (
      <SiCsharp style={{ width: "24px", height: "24px", color: "purple" }} />
    ),
  },
  {
    name: "Styled components",
    icon: (
      <SiStyledcomponents
        className="text-pink-300"
        style={{ width: "34px", height: "34px" }}
      />
    ),
  },
  {
    name: "GSAP",
    icon: <h1 className="text-green-500 ">GSAP</h1>,
  },
  {
    name: "Git",
    icon: <RiGitMergeFill className="text-pink-400" />,
  },
  {
    name: "CSS",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "HTML",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2022 - 2023",
    role: "Front-end Developer",
    company: " - Freelancers-Team",
    description:
      "As a freelance developer, I collaborated closely with a dynamic team of developers, designers, and project managers to build, enhance, and maintain web applications. This experience helped me shape my path for future development.",
    techStack: [],
  },
  {
    yearRange: "2021 - 2022",
    role: "Heating/Cooling Sales Consultant",
    company: " - Domino",
    description:
      "Developed expertise in HVAC solutions, effectively identifying client needs and recommending tailored heating and cooling systems. Gained valuable technical knowledge and sales experience in a specialized industry.",
    techStack: [],
  },
  {
    yearRange: "2020 - 2021",
    role: "Assistant Manager",
    company: " - Tegeta Motors",
    description:
      "Oversaw daily operations and coordinated with staff to ensure efficient workflow. Built strong leadership and communication skills, fostering a collaborative and productive work environment.",
    techStack: [],
  },
  {
    yearRange: "2019 - 2020",
    role: "Lifeguard",
    company: " - Gino Paradise",
    description:
      "Ensured the safety of visitors by performing vigilant water monitoring and emergency response. Proficient in CPR, first aid, and water rescue, consistently maintaining a secure environment.",
    techStack: [],
  },
  {
    yearRange: "2016 - 2017",
    role: "Sales Consultant",
    company: " - Universami",
    description:
      "Embarked on my professional journey, gaining invaluable early exposure to sales and customer service. Quickly adapted to workplace responsibilities and developed effective communication skills.",
    techStack: [],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Computer Science",
    institution: "Georgian Technical University",
    duration: "2020 - 2025",
    description:
      "Georgian Technical University was where I took my first steps in the Computer Science department. It was here that I learned the basics of web development, along with many other foundational skills.",
  },
  {
    id: 2,
    degree: "Frontend Development - React",
    institution: "Skillwill Neo University",
    duration: "2024 - 2025",
    description:
      "The course provided a fundamental understanding of programming and the web development process, including best practices. I gained not only technical skills but also personal growth, which helped shape my overall development.",
  },
];
