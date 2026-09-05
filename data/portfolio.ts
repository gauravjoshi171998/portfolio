import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaWordpress,
  FaPalette,
  FaLink,
  FaRocket,
  FaCode,
  FaMobileAlt,
  FaUserCheck,
  FaComments,
  FaClipboardList,
  FaBug,
  FaPaintBrush,
  FaTachometerAlt,
  FaChartLine,
  FaLightbulb,
  FaHeadset,
  FaProjectDiagram,
  FaPlug
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiGit,
  SiGithub,
  SiTypescript,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

export const skills = [
  {
    name: "React.js",
    icon: FaReact,
    color: "text-cyan-300",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    url: "https://nextjs.org/",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "text-yellow-300",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-400",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-400",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "text-violet-400",
    url: "https://getbootstrap.com/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-400",
    url: "https://redux.js.org/",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "text-blue-400",
    url: "https://mui.com/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-lime-400",
    url: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
    url: "https://www.mongodb.com/",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-pink-400",
    url: "https://graphql.org/",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "text-sky-400",
    url: "https://wordpress.org/",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-500",
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-white",
    url: "https://github.com/",
  },
];

export const services = [
  {
    title: "Web Development",
    text: "Custom, responsive & fast websites.",
    icon: FaCode,
  },
  {
    title: "React Applications",
    text: "Dynamic SPAs & modern web apps.",
    icon: FaReact,
  },
  {
    title: "UI/UX Development",
    text: "Clean, modern & user-friendly designs.",
    icon: FaPalette,
  },
  {
    title: "WordPress Websites",
    text: "Business, blog & eCommerce sites.",
    icon: FaWordpress,
  },
  {
    title: "Landing Pages",
    text: "High-converting landing pages.",
    icon: FaRocket,
  },
  {
    title: "API Integration",
    text: "Third-party service integration.",
    icon: FaLink,
  },
];

export const whychooseme = [
  {
    title: "Fast Delivery",
    text: "On-time delivery with quality work and attention to detail.",
    icon: FaRocket,
  },
  {
    title: "Clean Code",
    text: "Well-structured, reusable, and maintainable code.",
    icon: FaCode,
  },
  {
    title: "Fully Responsive",
    text: "Modern websites that work perfectly on all devices and screen sizes.",
    icon: FaMobileAlt,
  },
  {
    title: "Client Satisfaction",
    text: "Focused on delivering quality work that meets client expectations.",
    icon: FaUserCheck,
  },
  {
    title: "Modern Design",
    text: "Clean, attractive, and user-friendly interfaces with a modern look.",
    icon: FaPaintBrush,
  },
  {
    title: "Performance Focused",
    text: "Optimized websites with fast loading speed and smooth performance.",
    icon: FaTachometerAlt,
  },
  {
    title: "Easy Communication",
    text: "Clear communication and regular updates throughout the project.",
    icon: FaComments,
  },
  {
    title: "Scalable Solutions",
    text: "Flexible and scalable solutions that can grow with your business.",
    icon: FaChartLine,
  },
  {
    title: "Problem Solving",
    text: "Practical solutions to technical challenges and development issues.",
    icon: FaLightbulb,
  },
  {
    title: "Post-Launch Support",
    text: "Support and assistance even after the project is successfully delivered.",
    icon: FaHeadset,
  },
];

export const process = [
  {
    number: "01",
    title: "Initial Discussion",
    text: "Understand your requirements, goals, and project expectations.",
    icon: FaComments,
  },
  {
    number: "02",
    title: "Requirement Analysis",
    text: "Analyze features, functionality, target users, and technical requirements.",
    icon: FaClipboardList,
  },
  {
    number: "03",
    title: "Planning",
    text: "Create a clear project structure, timeline, and development strategy.",
    icon: FaProjectDiagram,
  },
  {
    number: "04",
    title: "UI/UX Design",
    text: "Create a clean, modern, and user-friendly interface for your project.",
    icon: FaPaintBrush,
  },
  {
    number: "05",
    title: "Development",
    text: "Convert the approved design into a fast and functional website.",
    icon: FaCode,
  },
  {
    number: "06",
    title: "API & Integration",
    text: "Integrate APIs, databases, authentication, and required third-party services.",
    icon: FaPlug,
  },
  {
    number: "07",
    title: "Testing",
    text: "Test functionality, performance, responsiveness, and cross-browser compatibility.",
    icon: FaBug,
  },
  {
    number: "08",
    title: "Client Review",
    text: "Share the completed work and collect your feedback for improvements.",
    icon: FaUserCheck,
  },
  {
    number: "09",
    title: "Deployment",
    text: "Deploy the final project and make it ready for production.",
    icon: FaRocket,
  },
  {
    number: "10",
    title: "Support & Maintenance",
    text: "Provide ongoing support, updates, and maintenance when required.",
    icon: FaHeadset,
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    image: "/images/project-ecommerce.svg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: "/images/project-task.svg",
    tags: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Business Website",
    image: "/images/project-business.svg",
    tags: ["WordPress", "PHP"],
  },
  {
    title: "Portfolio Website",
    image: "/images/project-portfolio.svg",
    tags: ["React", "Tailwind", "Vercel"],
  },
];
