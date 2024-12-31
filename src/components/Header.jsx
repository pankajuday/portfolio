import React from "react";
import "../App.css";
import portPro from "../assets/portPro.jpg";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/insta.png";



export const Header = () => {
    return (
        <header className="header">
        <div className="header-title">
          <h1>Hi, I'm <span>Portia</span></h1>
          <p>Frontend Developer</p>
        </div>

        <div className="header-img">
            <div className="imgShadow"></div>
        <img  src={portPro} alt="Portfolio" />
        </div>

        <div className="social-media">
        {/* <ul>
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
        </ul> */}
      </div>
        </header>

        
    );
}