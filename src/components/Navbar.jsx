import React from "react";
import "../index.css";
import img from "../assets/img.jpg";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/insta.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo">
        <img src={img} alt="" />
        </div>
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

      <div className="navbar-social-media">
        <ul>
          <li>
            <a href="">
              <img src={Linkedin} alt="LinkedIn" />
              
            </a>
          </li>

          <li>
            <a href="">
              <img src={Github} alt="Github" />
            </a>
          </li>

          <li>
            <a href="">
              <img src={Insta} alt="Instagram" />
            </a>
          </li>

          <li>
            <a href="">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
