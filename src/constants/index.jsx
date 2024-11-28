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
    "Dedicated React.js Developer with extensive experience in developing and managing responsive web applications. Proficient in crafting interactive user interfaces and optimizing application performance.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "The Wild Oasis - Web",
    description:
      "The Wild Oasis is a web application that transports users to the heart of nature and is designed for customers to easily book wooden cabins for their desired dates.",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Supabase"],
    imgSrc: project1,
    link: "https://the-wild-oasis-web-psi.vercel.app/",
  },
  {
    id: 2,
    title: "The Wild Oasis - Admin Panel",
    description:
      "The Admin Panel is designed for internal personnel to efficiently manage the data of wooden cabins. It provides features for adding, updating, and deleting cabin listings.",
    techStack: ["React.js", "styled-components", "Supabase"],
    imgSrc: project2,
    link: "https://the-woodland-haven.netlify.app/login",
  },
  {
    id: 3,
    title: "Cartify",
    description:
      "This is an responsive e-commerce platform where users can easily register and browse a wide selection of products. With a user-friendly interface, customers can quickly place orders for their desired items.",
    techStack: ["React.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://cartify-tawny.vercel.app/",
  },
  {
    id: 4,
    title: "Rainbow Six Siege",
    description:
      "This site will help you discover your favorite or least favorite Rainbow Six Siege operators, offering a user-friendly interface that makes exploring strategies and gameplay options easy and exciting. Built with GSAP.",
    techStack: ["React.js", "Tailwind CSS", "GSAP"],
    imgSrc: project4,
    link: "https://rainbow-six-siegee.vercel.app/",
  },
  {
    id: 5,
    title: "WorldWise",
    description:
      "WorldWise serves as a digital guide to the world, offering insights into various countries, including their history, geography, cultures, languages, and significant landmarks. ",
    techStack: ["React.js", "Map library"],
    imgSrc: project5,
    link: "https://world-wize.netlify.app/",
  },
  {
    id: 6,
    title: "The Last Slice",
    description:
      "The Last Slice website allows you to effortlessly check out pizzas, place orders, and manage your desired quantities",
    techStack: ["React.js", "Tailwind CSS"],
    imgSrc: project6,
    link: "https://the-last-slice.netlify.app/",
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
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="text-green-600" />,
  },
  {
    name: "CSS",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "HTML",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "Git",
    icon: <RiGitMergeFill className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2022 - 2023",
    role: "Front-end Developer",
    company: " Freelancers-Team",
    description:
      "As a freelance developer, I collaborated closely with a dynamic team of developers, designers, and project managers to build, enhance, and maintain web applications. This experience helped me shape my path for future development.",
    techStack: ["Html", "Css", "Javascript"],
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
    degree: "Frontend Development: React",
    institution: "Skillwill Neo University",
    duration: "2024 - 2025",
    description:
      "The course provided a fundamental understanding of programming and the web development process, including best practices. I gained not only technical skills but also personal growth, which helped shape my overall development.",
  },
];
