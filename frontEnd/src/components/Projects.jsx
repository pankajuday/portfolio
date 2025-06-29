import React from "react";
import "../index.css";
import { project } from "../data/data.js";

const ProjectCard = ({ name, description, image, technologies, liveLink, github }) => {
  return (
    <div className="group h-full">
      <div className="card flex flex-col h-full overflow-hidden backdrop-blur-sm transition-all duration-500 border border-slate-700/50 hover:border-blue-500/50 group-hover:-translate-y-2 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
        
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70"></div>
          
          {/* Tech stack pills */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-medium bg-slate-800/80 text-blue-300 px-2 py-1 rounded-full backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col p-5 relative">
          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{name}</h3>
          
          {/* Scrollable description with improved styling and proper z-index */}
          <div className="flex-1 mb-16">
            <div className="h-[120px] overflow-y-auto pr-2 custom-scrollbar text-gray-400 text-sm">
              {description}
            </div>
          </div>
          
          {/* Links - Fixed positioning and z-index to ensure clickability */}
          <div className="flex gap-4 absolute bottom-5 left-5 right-5">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-sm font-medium text-blue-400 hover:text-blue-300 transition-all relative z-50 cursor-pointer"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            )}
            
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-sm font-medium text-purple-400 hover:text-purple-300 transition-all relative z-50 cursor-pointer"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background element with improved styling */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
          
          {/* Placeholder card for future projects with improved styling */}
          <div className="border-2 border-dashed border-slate-700 rounded-xl flex flex-col items-center justify-center p-8 h-full min-h-[350px] text-center bg-slate-800/20 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300 group">
            <svg className="w-16 h-16 text-slate-600 group-hover:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v16m8-8H4" />
            </svg>
            <h3 className="text-xl font-medium text-slate-500 group-hover:text-slate-300 transition-colors duration-300 mt-4">More Projects Coming Soon</h3>
            <p className="text-sm text-slate-600 mt-2">I'm always working on something new</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;