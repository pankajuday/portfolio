import React from "react";
import "../index.css";
import { project } from "../data/data.js";

const ProjectCard = ({ name, description, image, technologies, liveLink, github }) => {
  return (
    <div className="group h-full">
      <div className="glass-panel h-full flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 relative border border-slate-800 hover:border-orange-500/30">
        
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
          
          {/* Tech stack pills floating */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-20">
            {technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className="text-[10px] font-semibold bg-slate-900/80 text-orange-200 px-2 py-1 rounded-full backdrop-blur-md border border-slate-700/50 shadow-sm"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
               <span className="text-[10px] font-semibold bg-slate-900/80 text-slate-300 px-2 py-1 rounded-full backdrop-blur-md border border-slate-700/50">
                +{technologies.length - 4}
              </span>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col p-6 relative z-20">
          <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-orange-400 transition-colors duration-300 flex items-center gap-2">
            {name}
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent group-hover:from-orange-500/50 transition-all duration-500"></div>
          </h3>
          
          <div className="flex-1 mb-6">
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 group-hover:text-slate-300 transition-colors duration-300">
              {description}
            </p>
          </div>
          
          {/* Links */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-slate-800/50">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-slate-600 group/btn"
              >
                <svg className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Code
              </a>
            )}
            
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-sm font-medium text-white transition-all duration-300 shadow-lg shadow-orange-900/20 hover:shadow-orange-600/30 group/btn"
              >
                <svg className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mb-4">Featured Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my passion for building robust and scalable applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
          
          {/* Placeholder card */}
          <div className="glass-panel rounded-2xl border border-dashed border-slate-800 flex flex-col items-center justify-center p-8 h-full min-h-[400px] text-center hover:border-orange-500/30 hover:bg-slate-900/60 transition-all duration-300 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-slate-800">
              <svg className="w-8 h-8 text-slate-600 group-hover:text-orange-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">Coming Soon</h3>
            <p className="text-slate-500 mt-2 text-sm group-hover:text-slate-400 transition-colors">Working on something exciting...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;