import React from "react";
import { skills } from "../data/data.js";

const SkillCard = ({ name, image }) => {
  return (
    <div
      className="card h-40 w-40 border-2 rounded-lg
                justify-center items-center flex text-center m-2
                transition-all duration-300
                 hover:scale-105 cursor-pointer
                hover:bg-slate-300 hover:text-black text-white"
    >
      <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
        <img src={image} alt={name} className="h-20 w-18" />
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="relative h-auto w-full mt-10 top-10 justify-center items-center flex flex-wrap flex-col">
      <div className="w-[80%] h-auto justify-center">
        <h1 className="md:text-4xl text-3xl font-bold border-b-4 border-orange-400 w-fit pb-3">My Skills</h1>
      </div>

      <div className="justify-evenly flex flex-wrap md:w-[80%] w-full h-auto mt-5">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;