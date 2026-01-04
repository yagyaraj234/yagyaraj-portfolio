import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaXTwitter, FaMedium } from "react-icons/fa6";

export const social_links = [
  {
    name: "Email",
    url: "mailto:hey@yagyaraj.com",
    icon: IoMdMail,
  },
  {
    name: "Github",
    url: "https://github.com/yagyaraj234",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yagyaraj234",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yagyaraj234",
    icon: FaXTwitter,
  },
  { name: "Medium", url: "https://medium.com/@yagyaraj234", icon: FaMedium },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1nNQ-E0X8CAjEZ-wUyZvoiXG64TGVtyn9/view?usp=sharing",
    icon: PiReadCvLogoFill,
  },
];

export const skills = [
  "React",
  "Next.js",
  "TailwindCSS",
  "Typescript",
  "Node.js",
  "Redux",
  "Prisma",
  "Firebase",
  "MongoDB",
  "Docker",
  "C++",
  "Python",
  "FastAPI",
];

export const projectData = [
  {
    id: 12,
    name: "Collab",
    git: "https://github.com/yagyaraj234/collab",
    status: "📦 Completed",
    live: "https://collab-neon.vercel.app/",
    about: [
      "Designed and implemented a Trello-like application architecture, allowing users to create organizations, multiple boards per organization, and manage tasks with status updates and due dates",
      "Integrated Stripe for seamless payment processing within the app, enhancing user experience and enabling subscription management for premium features.",
    ],
  },
  {
    id: 1242,
    name: "Workbot",
    git: "https://github.com/yagyaraj234/intelli-docs",
    status: "⏳ On-Going",
    live: "https://workbot.site",
    about: [
      "Architected a versatile document processing system using RAG methodology, integrating Pinecone for vector embeddings and Jina AI for robust data extraction across multiple file formats (PDFs, code, plain text).",
      "Developed an intuitive workspace system that allows users to create dedicated environments for different purposes (general chat, code reviews, YouTube video analysis), each optimized for specific content types and use cases.",
      "Engineered persistent chat history and similarity search functionality, enabling contextual conversations and intelligent information retrieval across different file types and previous interactions.",
    ],
  },
];
