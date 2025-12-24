import React, { useState } from "react";
import "../index.css";
import { aboutSectionData } from "../data/data";
import profileImg from "../assets/img.jpg";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("story");

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Dynamic content based on active tab
  const tabContent = {
    story: (
      <div className="animate-fade-in">
        <p className="text-lg leading-relaxed text-slate-300 mb-6">
          {aboutSectionData.about.intro}
        </p>
        <div
          className={`text-lg leading-relaxed text-slate-400 transition-all duration-500 overflow-hidden ${
            isExpanded
              ? "opacity-100 max-h-[1000px]"
              : "opacity-0 max-h-0"
          }`}
        >
          <p>{aboutSectionData.about.details}</p>
        </div>
        <div className="mt-4">
          <button
            onClick={toggleReadMore}
            className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 transition-colors group"
          >
            {isExpanded ? "Read Less" : "Read More"}
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-0.5 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        {/* Profile highlight section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutSectionData.highlights.map((item, idx) => (
            <div
              key={item.label}
              className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2`}>
                {item.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    skills: (
      <div className="animate-fade-in">
        <p className="text-lg leading-relaxed text-slate-400 mb-8">
          I've cultivated expertise in a variety of technologies, focusing on
          building scalable, maintainable applications with modern tools and
          frameworks.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {aboutSectionData.skills.map((skill, idx) => {
            // Map percentage to meaningful categories
            let level = "Beginner";
            if (skill.percent >= 90) level = "Expert";
            else if (skill.percent >= 80) level = "Advanced";
            else if (skill.percent >= 70) level = "Proficient";
            else if (skill.percent >= 60) level = "Skilled";
            else if (skill.percent >= 40) level = "Intermediate";

            return (
                <div key={skill.name} className="group relative p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/10">
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex flex-col justify-center">
                            <h4 className="text-slate-200 font-bold text-base mb-1 group-hover:text-white transition-colors">{skill.name}</h4>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                                </div>
                                <span className="text-xs text-slate-500 font-medium">{level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
          })}
        </div>
      </div>
    ),
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-slate-800/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Get to know the person behind the code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Image Column */}
          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-1 border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm inline-flex mb-8">
              {["story", "skills"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-slate-800 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
                {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
