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
      <>
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          {aboutSectionData.about.intro}
        </p>
        <p
          className={`text-lg leading-relaxed text-gray-300 transition-all duration-500 ${
            isExpanded
              ? "opacity-100 max-h-96"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {aboutSectionData.about.details}
        </p>
        <div className="mt-4">
          <button
            onClick={toggleReadMore}
            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
          >
            {isExpanded ? "Read Less" : "Read More"}
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
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
              className={`bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 hover:border-${item.color}/30 transition-colors`}
            >
              <div className={`text-3xl font-bold text-${item.color} mb-2`}>
                {item.value}
              </div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </>
    ),
    skills: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-gray-300 mb-6">
          I've cultivated expertise in a variety of technologies, focusing on
          building scalable, maintainable applications with modern tools and
          frameworks.
        </p>
        {/* Skills bars */}
        <div className="space-y-5">
          {aboutSectionData.skills.map((skill, idx) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className={`text-${skill.color} font-medium`}>
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                <div
                  className={`bg-gradient-to-r ${skill.gradient} h-2.5 rounded-full`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    // journey: (
    //   <div className="space-y-6">
    //     <p className="text-lg leading-relaxed text-gray-300 mb-6">
    //       My professional journey reflects a continuous path of growth, learning,
    //       and adaptation to the ever-evolving landscape of web development.
    //     </p>

    //     {/* Timeline */}
    //     <div className="relative border-l border-slate-700 ml-3">
    //       {/* Timeline item 1 */}
    //       <div className="mb-8 ml-8">
    //         <div className="absolute w-4 h-4 bg-blue-500 rounded-full mt-1.5 -left-2 border-2 border-slate-900"></div>
    //         <time className="text-sm font-medium text-blue-400 mb-1 block">
    //           2023 - Present
    //         </time>
    //         <h3 className="text-lg font-semibold text-white">
    //           Senior Full Stack Developer
    //         </h3>
    //         <p className="text-sm text-gray-400">
    //           Leading development teams to create scalable web applications with
    //           modern tech stacks. Architecting solutions that emphasize performance,
    //           security, and exceptional user experience.
    //         </p>
    //       </div>

    //       {/* Timeline item 2 */}
    //       <div className="mb-8 ml-8">
    //         <div className="absolute w-4 h-4 bg-purple-500 rounded-full mt-1.5 -left-2 border-2 border-slate-900"></div>
    //         <time className="text-sm font-medium text-purple-400 mb-1 block">
    //           2020 - 2023
    //         </time>
    //         <h3 className="text-lg font-semibold text-white">
    //           Full Stack Developer
    //         </h3>
    //         <p className="text-sm text-gray-400">
    //           Built and maintained various web applications using MERN stack.
    //           Implemented RESTful APIs, responsive designs, and optimized database
    //           operations for improved performance.
    //         </p>
    //       </div>

    //       {/* Timeline item 3 */}
    //       <div className="mb-8 ml-8">
    //         <div className="absolute w-4 h-4 bg-teal-500 rounded-full mt-1.5 -left-2 border-2 border-slate-900"></div>
    //         <time className="text-sm font-medium text-teal-400 mb-1 block">
    //           2018 - 2020
    //         </time>
    //         <h3 className="text-lg font-semibold text-white">Frontend Developer</h3>
    //         <p className="text-sm text-gray-400">
    //           Specialized in creating interactive and responsive user interfaces
    //           with React. Focused on component architecture, state management, and
    //           modern CSS techniques.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // ),
  };

  return (
    <section id="about" className="py-20 relative scroll-mt-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <h2 className="section-title animate-fadeInUp">About Me</h2>

        <div className="mt-12 md:flex gap-12 items-start animate-fadeInUp animation-delay-200">
          {/* Image column */}
          <div className="md:w-1/3 mb-10 md:mb-0 flex-shrink-0 relative">
            <div className="relative rounded-xl overflow-hidden border-2 border-slate-700 shadow-xl shadow-slate-900/50">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur-sm"></div>
              <img
                src={profileImg}
                alt="Pankaj Uday"
                className="w-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50"></div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-blue-500/20 rounded-xl z-[-1]"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-purple-500/20 rounded-xl z-[-1]"></div>
          </div>

          {/* Content column */}
          <div className="md:w-2/3">
            {/* Tabs navigation */}
            <div className="flex mb-8 border-b border-slate-700/50">
              <button
                onClick={() => setActiveTab("story")}
                className={`px-4 py-3 font-medium transition-all ${
                  activeTab === "story"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                My Story
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-4 py-3 font-medium transition-all ${
                  activeTab === "skills"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Skills
              </button>
              {/* <button
                onClick={() => setActiveTab("journey")}
                className={`px-4 py-3 font-medium transition-all ${
                  activeTab === "journey"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Journey
              </button> */}
            </div>

            {/* Tab content */}
            <div className="transition-all duration-500 ease-out">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default About;
