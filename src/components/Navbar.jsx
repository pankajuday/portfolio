import React from "react";
import "../App.css";
import logo from "../assets/logo.png";
import three from "../assets/three.png";

const Navbar = () => {
  return (
    <nav>
      <div className="md:hidden cursor-pointer relative h-10 w-10 flex float-right">
        <a href="#" className="text-6xl hover:text-blue-700 ">
          <img src={three} alt="" className="" />
        </a>
      </div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>

        <div className="navbar-menu">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
