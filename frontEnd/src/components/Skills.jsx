import React from "react";
import { skills } from "../data/data.js";
import Icon from "./Icon.jsx";

const SkillCategory = ({ title, items, className }) => (
  <div className={`glass-panel p-8 rounded-3xl border border-slate-800 hover:border-orange-500/20 transition-all duration-500 ${className}`}>
    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
      <div className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((skill, idx) => (
        <div key={idx} className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/10 cursor-default">
          <div className="w-12 h-12 mb-4 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
             <Icon icon={skill.icon} name={skill.name} size="100%" color={skill.color} />
          </div>
          <span className="text-sm font-medium text-slate-400 group-hover:text-orange-400 transition-colors text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  // Categorize skills
  const frontend = skills.filter(s => ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].includes(s.name));
  const backend = skills.filter(s => ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'REST API'].includes(s.name));
  const tools = skills.filter(s => ['Git', 'Docker', 'Linux'].includes(s.name));
  
  // Catch-all for any missed skills
  const others = skills.filter(s => !frontend.includes(s) && !backend.includes(s) && !tools.includes(s));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
       {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-heading inline-block mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit that empowers me to build scalable, high-performance web applications from front to back.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <SkillCategory title="Frontend Development" items={frontend} className="lg:mt-0" />
          <SkillCategory title="Backend Architecture" items={backend} className="lg:mt-12" />
          <SkillCategory title="DevOps & Tools" items={[...tools, ...others]} className="lg:mt-24" />
        </div>
      </div>
    </section>
  );
};

export default Skills;