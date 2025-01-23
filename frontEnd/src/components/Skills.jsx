import React from "react";
import "../App.css";
import nodejs from "../assets/nodejs.png";
import javascript from "../assets/javascript.png";
import git from "../assets/git-logo.png";
import mongo from "../assets/mongodb.png"
import expressjs from "../assets/express.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwindcss from "../assets/tailwind-css.png"
import reactjs from "../assets/react.png";
import docker from "../assets/docker.png"
import socket from '../assets/socket.png'
import postman from '../assets/postman.png'

const Skills = () => {
  return (
    <div id="skills" className=" relative h-auto w-full mt-10 top-10 justify-center items-center flex flex-wrap flex-col ">
      <div
        className="
      w-[80%]  h-auto justify-center
      "
      >
        <h1 className="md:text-4xl text-3xl font-bold border-b-4 border-orange-400 w-fit pb-3 ">My Skills</h1>
      </div>

        <div className="justify-evenly flex flex-wrap  md:w-[80%] w-full  h-auto mt-5">

      <div className="card  h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={javascript} alt="node.js" className="h-20 w-18 " />
          <h3 className="text-2xl font-bold">JavaScript</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={nodejs} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold">Node.js</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={mongo} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold">MongoDB</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={expressjs} alt="node.js" className="h-auto w-20 bg-slate-200" />
          <h3 className="text-2xl font-bold">Express.js</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={git} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold">Git</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={html} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold">HTML</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={css} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold">CSS</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={reactjs} alt="node.js" className="h-auto w-20 bg-slate-200" />
          <h3 className="text-2xl font-bold">React.js</h3>
        </div>
      </div>
      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2 p-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={tailwindcss} alt="node.js" className="h-auto w-20 bg-slate-200" />
          <h3 className="text-2xl font-bold ">TailwindCss</h3>
        </div>
      </div>
      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2 p-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={docker} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold ">Docker</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2 p-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={socket} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold ">Socket.io</h3>
        </div>
      </div>

      <div className="card h-40 w-40 border-2 rounded-lg hover:bg-orange-400  justify-center items-center flex text-center m-2 p-2">
        <div className="space-y-4 text-center items-center flex flex-wrap flex-col">
          <img src={postman} alt="node.js" className="h-auto w-20 " />
          <h3 className="text-2xl font-bold ">Postman</h3>
        </div>
      </div>





      </div>
    </div>
  );
};

export default Skills;
