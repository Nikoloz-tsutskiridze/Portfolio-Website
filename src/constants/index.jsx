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
  RiGitForkFill,
} from "@remixicon/react";
import { RiCodeSSlashLine } from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
];

export const PROFILE = {
  name: "Nikoloz Tsutskridze",
  role: "Front-End Developer",
  subheading:
    "Dedicated React.js Developer with extensive experience in developing and managing responsive web applications. Proficient in crafting interactive user interfaces, enhancing application performance.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "",
    description: "Web site",
    techStack: ["React"],
    imgSrc: project1,
    link: "",
  },
  {
    id: 2,
    title: "",
    description: "Web site",
    techStack: ["React"],
    imgSrc: project2,
    link: "",
  },
  {
    id: 3,
    title: "",
    description: "Web site",
    techStack: ["React"],
    imgSrc: project3,
    link: "",
  },
  {
    id: 4,
    title: "",
    description: "Web site",
    techStack: ["React"],
    imgSrc: project4,
    link: "",
  },
  {
    id: 5,
    title: "",
    description: "Web site",
    techStack: ["React"],
    imgSrc: project5,
    link: "",
  },
  {
    id: 6,
    title: "",
    description: "Web site",
    techStack: ["React"],
    imgSrc: project6,
    link: "",
  },
];

export const SKILLS = [
  {
    name: "HTML",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS",
    icon: <RiCss3Line className="text-blue-500" />,
  },
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
    name: "Supabase",
    icon: <RiSupabaseFill className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Git",
    icon: <RiGitForkFill className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["React"],
  },
];
