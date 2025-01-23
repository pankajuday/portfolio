import React from "react";
import "../index.css";
import intube from "../assets/intube.jpg";
import gitProf from "../assets/githuProf.png";
import "../App.css"


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
          <div className="mt-2 ml-2 flex flex-col space-x-2  ">
            <h1 className="text-xl font-bold ">Intube</h1>
            <div className="space-x-2">
            <span className="text-slate-200 text-[12px] italic">MongoDB</span>
            <span className="text-slate-200 text-[12px] italic">
              Express.js
            </span>
            <span className="text-slate-200 text-[12px] italic">Node.js</span>
            </div>
          </div>
          <div className="p-2 pb-0 relative  h-32  overflow-auto scrollbar">
            <p>
            This project is a complete backend REST API for a video hosting platform, similar to YouTube. It is built using Node.js and Express.js for the server, with MongoDB and Mongoose for the database and user authentication with JWT and ensures secure password storage using bcrypt. 
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
          <div className="p-2 pb-0 relative h-32 overflow-auto 
          scrollbar

          ">
            <p>
            GitHub Profile Viewer is a simple web app built with HTML, CSS, and JavaScript that uses the GitHub API. Users can search for any GitHub username to view their profile details, including name, bio, repositories, followers, and more.
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
