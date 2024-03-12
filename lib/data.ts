import React from "react";
import { FiActivity } from "react-icons/fi"
import { FaFemale, FaWineGlass } from "react-icons/fa";
import { IoGitNetwork } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import llmImg from '@/public/llm.jpg';
import crmImg from '@/public/crm.jpg';
import portfolioImg from '@/public/portfolio.jpg';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Hackathon Logistics Director",
    location: "HackMelbourne",
    description: "Coordinated the flagship Hackathon and the beginner-friendly hackathon at the University of Melbourne.",
    icon: React.createElement(FiActivity),
    date: "2021-2022",
  },
  {
    title: "Treasurer",
    location: "Women In Technology",
    description:
      "Assisted in event management and largely contributed via grants and budget/financial work.",
    icon: React.createElement(FaFemale),
    date: "2022 - 2023",
  },
  {
    title: "President",
    location: "HackMelbourne",
    description:
      "Monitored internal departments whilst managing ongoing collaboration with many other clubs and external organisations.",
    icon: React.createElement(FaWineGlass),
    date: "2022 - 2023",
  },
  {
    title: "Graduated University",
    location: "University of Melbourne",
    description:
      "Graduated from the Bachelor of Science (Computing & Software Systems).",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Summer Research Intern",
    location: "Complex Human Data Hub",
    description:
      "Conducted research into LLMs and their capabilities with temporal information compared to humans.",
    icon: React.createElement(IoGitNetwork),
    date: "2023-2024",
  },
] as const;

// { ##### FORMAT #####
//   title: "Full-Stack Developer",
//   location: "Houston, TX",
//   description:
//     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//   icon: React.createElement(FaReact),
//   date: "2021 - present",
// }

export const projectsData = [
  {
    title: "LLM Research",
    description:
      "Concluded that ChatGPT 3.5 Turbo was extremely sensitive to prompts and results suggested that there is a tradeoff between task accuracy versus mimicking human memory.",
    tags: ["Python", "LLMs", "Machine Learning", "Prompt Engineering"],
    imageUrl: llmImg,
  },
  {
    title: "CRM Software",
    description:
      "Experienced being the SCRUM Master and Backend Developer of a CRM Software.",
    tags: ["T3", "SCRUM", "Agile", "Typescript", "tRPC", "Prisma", "MySQL", "Jira", "Confluence"],
    imageUrl: crmImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "Created a personal website and hosted it on Azure for the Cloud Resume Challenge.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Azure"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C",
  "Haskell",
  "Matlab",
  "MySQL",
  "Typescript",
  "Next.js",
  "Prisma",
  "SCRUM",
  "Agile",
  "Machine Learning",
  "Large Language Models",
  "Deep Learning",
  "Artificial Intelligence",
  "Finance",
  "Psychology",
  "Quantum Computing",
  "Cloud Computing"
] as const;