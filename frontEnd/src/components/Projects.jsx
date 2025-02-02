import React from "react";
import "../index.css";
import { project } from "../data/data.js";
import "../App.css";

const ProjectCard = ({ name, description, image, technologies, liveLink, github }) => {
  return (
    <div className="card m-2 h-96 w-80 border-2 rounded-lg overflow-hidden relative transition-all duration-300  hover:scale-105 active:scale-90">
      <div className="h-40 w-fit overflow-hidden relative">
        <img src={image} alt={name} className="" />
      </div>
      <div className="mt-2 ml-2 flex flex-col space-x-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="space-x-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-slate-200 text-[12px] italic">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-2 pb-0 relative h-32 overflow-auto scrollbar">
        <p>{description}</p>
      </div>
      <div className="p-2 space-x-3 flex flex-row flex-wrap">
        {github && (
          <a href={github} target="_blank" className="text-yellow-500">
            View Project
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" className="text-yellow-500">
            Live
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full h-auto flex flex-col flex-wrap justify-center items-center relative top-24 " id="projects ">
      <div className="w-[80%]">
        <h1 className="md:text-4xl text-3xl font-bold border-b-4 border-orange-400 w-fit pb-3">My Projects</h1>
      </div>
      <div className="h-auto w-[80%] flex flex-row flex-wrap justify-center items-center ">
        {project.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;