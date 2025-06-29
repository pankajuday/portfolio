import React from "react";
import { skills } from "../data/data.js";
import Icon from "./Icon.jsx";

// Fallback component if icon fails to load
const FallbackIcon = ({ name, color }) => (
  <div
    className="w-full h-full rounded-md flex items-center justify-center text-xs font-bold"
    style={{ backgroundColor: color || "#6B7280", color: "white" }}
  >
    {name.slice(0, 2).toUpperCase()}
  </div>
);

const SkillCard = ({ name, icon, color }) => {
  return (
    <div className="group">
      <div className="card relative flex flex-col items-center justify-center size-24 sm:w-28 sm:h-28 py-2 px-2 backdrop-blur-sm transform transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 group-hover:scale-105 group-hover:-translate-y-1">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
        <div className="flex flex-col items-center space-y-2 relative z-10">
          <div className="h-10 w-10 flex items-center justify-center">
            {icon ? (
              <Icon
                icon={icon}
                name={name}
                size="40px"
                color={color}
                className="transition-all duration-300 group-hover:scale-110"
              />
            ) : (
              <FallbackIcon name={name} color={color} />
            )}
          </div>
          <h3 className="text-base font-semibold group-hover:text-blue-400 transition-colors duration-300 text-center">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>

        <div className="mt-12">
          <div className="flex flex-wrap gap-x-6 gap-y-6 justify-start">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Skill categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Frontend
            </h3>
            <p className="text-gray-400">
              Building responsive and interactive user interfaces with modern
              frameworks.
            </p>
          </div>

          <div className="card backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Backend
            </h3>
            <p className="text-gray-400">
              Developing robust server-side applications with scalable
              architectures.
            </p>
          </div>

          <div className="card backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Tools & Deployment
            </h3>
            <p className="text-gray-400">
              Using industry-standard tools for efficient development and
              deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;