// Import reliable icon components instead of CDN URLs
import { skillIcons, socialIcons, fallbackIcons } from './icons.js';

// Project images from online sources
const intube =
  "https://images.unsplash.com/photo-1622298598315-acf60a9e07a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const gitProf =
  "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2l0aHVifGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";

// Social media icons - using icon components for better performance
const socialLinksData = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pankajuday",
    icon: socialIcons.LinkedIn,
  },
  { 
    name: "GitHub", 
    url: "https://github.com/pankajuday", 
    icon: socialIcons.GitHub 
  },
  // {
  //   name: "Facebook",
  //   url: "https://www.facebook.com/pankajuday",
  //   icon: socialIcons.Facebook,
  // },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pankajudaytech",
    icon: socialIcons.Instagram,
  },
  { 
    name: "X", 
    url: "https://x.com/pankajudaytech", 
    icon: socialIcons.X 
  },
];

export const mail = "contact@pankajuday.tech";

export const project = [
  {
    name: "Intube",
    description:
      " This project is a complete backend REST API for a video hosting platform, similar to YouTube. It is built using Node.js and Express.js for the server, with MongoDB and Mongoose for the database and user authentication with JWT and ensures secure password storage using bcrypt. ",
    image: intube,
    technologies: ["MongoDB", "Express.js", "Node.js", "React.js"],
    // liveLink: "https://intube.pankajuday.tech",
    github: "https://github.com/pankajuday/InTubeVideoStream/tree/development",
  },
  {
    name: "Github Profile Viewer",
    description:
      "GitHub Profile Viewer is a simple web app built with HTML, CSS, and JavaScript that uses the GitHub API. Users can search for any GitHub username to view their profile details, including name, bio, repositories, followers, and more.",
    image: gitProf,
    technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
    liveLink: "https://pankajuday.github.io/GitHubProfileViewer/",
    github: "https://github.com/pankajuday/InTubeVideoStream.git",
  },
];

export const skills = [
  { name: "JavaScript", icon: skillIcons.JavaScript, color: "#F7DF1E" },
  { name: "Node.js", icon: skillIcons['Node.js'], color: "#339933" },
  { name: "Git", icon: skillIcons.Git, color: "#F05032" },
  { name: "MongoDB", icon: skillIcons.MongoDB, color: "#47A248" },
  { name: "Express.js", icon: skillIcons['Express.js'], color: "#ffff00" },
  { name: "HTML", icon: skillIcons.HTML, color: "#E34F26" },
  { name: "CSS", icon: skillIcons.CSS, color: "#1572B6" },
  { name: "Tailwind CSS", icon: skillIcons['Tailwind CSS'], color: "#06B6D4" },
  { name: "React", icon: skillIcons.React, color: "#61DAFB" },
  { name: "Docker", icon: skillIcons.Docker, color: "#2496ED" },
  { name: "Socket.io", icon: skillIcons['Socket.io'], color: "#ffffff" },
  { name: "REST API", icon: skillIcons['REST API'], color: "#FF6C37" },
  { name: "Linux", icon: skillIcons.Linux, color: "#FCC624" },
];

export const headerData = {
  // title: "Transforming Ideas Into Digital Reality",
  title: "Designing, developing, and deploying real solutions BACK TO FRONT.",
  subtitle:
    "I write clean, maintainable code from database to browser. Whether it's a small internal tool or a customer-facing product, I care about making every click and request feel fast and  reliable.",
  // titleHighlight: "Digital Reality",
  titleHighlight: "BACK TO FRONT.",
  socialLinks: socialLinksData,
};

export const aboutSectionData = {
  about: {
  intro:
    "I enjoy building things that work well and make sense. I like writing code that’s clean, understandable, and does the job without unnecessary complexity.",
  details:
    "I started coding a few years ago out of curiosity, and it slowly turned into something I do every day. Over time, I’ve worked on projects like social platforms, e-commerce sites, and APIs. I keep learning as I go, and I try to get a little better with each project.",
},
  highlights: [
    { label: "Years of Experience", value: "0", color: "blue-400" },
    {
      label: "Projects Completed",
      value: `${project.length}+`,
      color: "purple-400",
    },
    { label: "Happy Clients", value: "0", color: "teal-400" },
  ],
  skills: [
    {
      name: "Frontend Development",
      percent: 75,
      color: "blue-400",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      name: "Backend Development",
      percent: 85,
      color: "purple-400",
      gradient: "from-purple-500 to-purple-400",
    },
    {
      name: "Database Management",
      percent: 70,
      color: "teal-400",
      gradient: "from-teal-500 to-teal-400",
    },
    {
      name: "DevOps",
      percent: 65,
      color: "amber-400",
      gradient: "from-amber-500 to-amber-400",
    },
    // {
    //   name: "UI/UX Design",
    //   percent: 75,
    //   color: "pink-400",
    //   gradient: "from-pink-500 to-pink-400",
    // },
  ],
};
