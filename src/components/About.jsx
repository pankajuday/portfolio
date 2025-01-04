import React from "react";
import "../index.css";

const About = () => {
  return (
    <div 
    className="w-full h-auto justify-center  items-center flex flex-wrap flex-col mt-16 relative"
    >
    <div className="
    w-[80%] h-auto justify-center
    " id="about">
      <h1
      className="md:text-4xl text-3xl font-bold border-b-4 border-orange-400 w-fit pb-3 "
      >About Me</h1>
      <div
       className="justify-center items-center flex flex-wrap flex-col top-4 relative"
       >
        <p className="border-l-4 border-[#F71850] md:text-xl h-auto w-[80%]  shadow-xl shadow-gray-700 p-3">
          <span>
            Hi, I’m Pankaj, a dedicated full-stack developer who loves building
            websites and applications that work smoothly and look great. I have
            experience with React.js, Node.js, MongoDB, and Express, which helps
            me create complete web solutions, from design to functionality.
          </span><br />
          <span>
            I enjoy turning ideas into real, working products. Whether it’s
            designing user-friendly interfaces or making sure the back-end runs
            efficiently, I like solving problems and creating great experiences
            for users.
          </span><br />
          <span>
            In my free time, I explore new technologies to keep improving my
            skills. Let’s create something amazing together!
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
