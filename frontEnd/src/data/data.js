import intube from "../assets/intube.jpg";
import gitProf from "../assets/githuProf.png";
import nodejs from "../assets/nodejs.png";
import javascript from "../assets/javascript.png";
import git from "../assets/git-logo.png";
import mongo from "../assets/mongodb.png";
import expressjs from "../assets/express.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwindcss from "../assets/tailwind-css.png";
import reactjs from "../assets/react.png";
import docker from "../assets/docker.png";
import socket from "../assets/socket.png";
import postman from "../assets/postman.png";
import portPro from "../assets/portPro.png";
import portProSM from "../assets/portProSM.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/insta.png";
import x from "../assets/x.png";
import dgDot from "../assets/dgDot.png";
import box from "../assets/box.png";
import img from "../assets/img.jpg";

export const project = [
  {
    name: "Intube",
    description:
      " This project is a complete backend REST API for a video hosting platform, similar to YouTube. It is built using Node.js and Express.js for the server, with MongoDB and Mongoose for the database and user authentication with JWT and ensures secure password storage using bcrypt. ",
    image: intube,
    technologies: ["MongoDB", "Express.js", "Node.js", "Socket.io"],
    liveLink: "",
    github: "https://github.com/pankajuday/InTubeVideoStream.git",
  },
  {
    name: "Github Profile Viewer",
    description:
      "GitHub Profile Viewer is a simple web app built with HTML, CSS, and JavaScript that uses the GitHub API. Users can search for any GitHub username to view their profile details, including name, bio, repositories, followers, and more.",
    image: gitProf,
    technologies: ["HTML", "CSS", "JavaSript", "GitHubApi"],
    liveLink: "https://pankajuday.github.io/GitHubProfileViewer/",
    github: "https://github.com/pankajuday/InTubeVideoStream.git",
  },
];

export const skills = [
  { name: "JavaScript", image: javascript },
  { name: "Node.js", image: nodejs },
  { name: "Git", image: git },
  { name: "MongoDB", image: mongo },
  { name: "Express.js", image: expressjs },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Tailwind CSS", image: tailwindcss },
  { name: "React", image: reactjs },
  { name: "Docker", image: docker },
  { name: "Socket.io", image: socket },
  { name: "Postman", image: postman },
];

export const headerData = {
  title: "Hi, I'm Pankaj",
  subtitle: "Crafting seamless digital solutions that bring ideas to life.",
  titleHighlight: "Pankaj",
  images: {
    portPro,
    portProSM,
    dgDot,
    box,
    img,
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/pankajuday",
      img: Linkedin,
    },
    { name: "GitHub", url: "https://github.com/pankajuday", img: Github },
    {
      name: "Facebook",
      url: "https://www.facebook.com/pankajuday_",
      img: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pankajuday_",
      img: Insta,
    },
    { name: "X", url: "https://x.com/_Pankajuday", img: x },
  ],
};
