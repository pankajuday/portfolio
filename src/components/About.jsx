import React, { useState } from "react";
import "../index.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full h-auto justify-center  items-center flex flex-wrap flex-col mt-16 relative">
      <div
        className="
    w-[80%] h-auto justify-center
    "
        id="about"
      >
        <h1 className="md:text-4xl text-3xl font-bold border-b-4 border-orange-400 w-fit pb-3 ">
          About Me
        </h1>
        <div className="justify-center items-center flex flex-wrap flex-col top-4 relative">
          <p
            className={`border-l-4 text-white border-[#F71850] md:text-xl h-auto w-[80%]  shadow-xl shadow-gray-700 p-3 transition-all duration-150 ${
              isExpanded ? "opacity-100" : "opacity-50"
            }`}
          >
            {isExpanded
              ? `
          Hi, I’m Pankaj, a dedicated full-stack developer who loves building
          websites and applications that work smoothly and look great. I have
          experience with React.js, Node.js, MongoDB, and Express, which helps
          me create complete web solutions, from design to functionality.
          
          I enjoy turning ideas into real, working products. Whether it’s
          designing user-friendly interfaces or making sure the back-end runs
          efficiently, I like solving problems and creating great experiences
          for users.
      
          In my free time, I explore new technologies to keep improving my
          skills. Let’s create something amazing together!
          `
              : `
          Hi, I’m Pankaj, a dedicated full-stack developer who loves building
          websites and applications that work smoothly and look great. I have
          experience with React.js, Node.js, MongoDB, and Express, which helps
          me create complete web solutions, from design to functionality....
        `}
          </p>
          <button
            onClick={toggleReadMore}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
