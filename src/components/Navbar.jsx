import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import three from "../assets/three.png";

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(true)
  const toggle =()=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <div className="md:hidden cursor-pointer relative h-10 w-10 flex float-right">
        <a href="#" className=" mobile-menu md:text-6xl ">
          <img src={three} alt="" className="z-50" onClick={toggle}/>

          <ul className={`  md:hidden flex flex-wrap h-fit w-fit bg-[#F71850] absolute z-20 text-2xl right-5 p-2 rounded-lg ${isOpen ? 'hidden' : ''}`}>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </a>
      </div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>

        <div className="navbar-menu">
          <ul>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
