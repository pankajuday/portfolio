import React from "react";
import "../index.css";
import intube from "../assets/intube.jpg";
import gitProf from "../assets/githuProf.png";


const Projects = () => {
  return (
    <div className=" w-full h-auto flex flex-col flex-wrap justify-center items-center relative top-24" id="projects">
      <div className="w-[80%] ">
        <h1 className="md:text-4xl text-3xl font-bold  border-b-4 border-orange-400 w-fit pb-3">
          My Projects
        </h1>
      </div>
      <div className="h-auto w-[80%] flex flex-row flex-wrap justify-center items-center mt-3">
        <div className="card m-2 h-96 w-80 border-2 rounded-lg overflow-hidden relative">
          <div className=" h-40 w-fit overflow-hidden relative ">
            <img src={intube} alt="" className="" />
          </div>
          <div className="mt-2 ml-2 flex flex-row space-x-2 items-center  ">
            <h1 className="text-xl font-bold ">Intube</h1>
            <span className="text-slate-200 text-[12px] italic">MongoDB</span>
            <span className="text-slate-200 text-[12px] italic">
              Express.js
            </span>
            <span className="text-slate-200 text-[12px] italic">Node.js</span>
          </div>
          <div className="p-2 pb-0 relative h-auto">
            <p>
              The project is a complete backend for a video hosting platform
              similar to YouTube, built with Node.js, Express.js, MongoDB,
              Mongoose, JWT, and bcrypt.
            </p>
          </div>
          <div className="">
            <div className="p-2 space-x-3 flex flex-row flex-wrap">
              <a
                href="https://github.com/pankajuday/InTubeVideoStream.git"
                target="_blank"
                className="text-yellow-500"
              >
                View Project
              </a>
              {/* <a href="#" className="text-yellow-500">Live</a> */}
            </div>
          </div>
        </div>
        <div className="card m-2 h-96 w-80 border-2 rounded-lg overflow-hidden relative">
          <div className=" h-40 w-fit overflow-hidden relative ">
            <img src={gitProf} alt="" className="" />
          </div>
          <div className="mt-2 ml-2 flex flex-col  ">
            <h1 className="text-xl font-bold ">Github Profile Viewer</h1>
            <div className="space-x-2">
            <span className="text-slate-200 text-[12px] italic">JavaScript</span>
            <span className="text-slate-200 text-[12px] italic">
              GithubApi 
            </span>
            <span className="text-slate-200 text-[12px] italic">HTML</span>
            <span className="text-slate-200 text-[12px] italic">CSS</span>
            </div>
          </div>
          <div className="p-2 pb-0 relative h-auto ">
            <p>
            It allows users to search for GitHub profiles and displays details like the username, bio, repos, and more.
            </p>
          </div>
          
            <div className="p-2 space-x-3 flex flex-row flex-wrap">
              <a
                href="https://github.com/pankajuday/GitHubProfileViewer.git"
                target="_blank"
                className="text-yellow-500"
              >
                View Project
              </a>
              <a href="https://pankajuday.github.io/GitHubProfileViewer/" target="_blank" className="text-yellow-500">Live</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
