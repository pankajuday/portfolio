import React from "react";
import "../App.css";
import portPro from "../assets/portPro.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/insta.png";
import x from "../assets/x.png"
import dgDot from "../assets/dgDot.png";
import Navbar from "./Navbar";
import box from "../assets/box.png";
import img from "../assets/img.jpg";

export const Header = () => {
  return (
    <>

      <Navbar />

      <header className="header">
        <div className="header-title">
          <div className="relative flex flex-col h-auto w-[80%]">
            <h1>
              Hi, I'm <span className="text-[#F71850]">Pankaj</span>
            </h1>
            <p>Crafting seamless digital solutions that bring ideas to life.</p>
            <a
              href=""
              className="h-auto w-full  relative md:items-center flex flex-col flex-wrap md:left-20 top-5"
            >
              <button className="h-10 w-24 text-gray-950 font-bold hover:bg-orange-500 bg-[#E317FE] realtive rounded-lg p-2 border-2 border-[#F71850]" >
                Contact Me
              </button>
            </a>
          </div>

          <div className="social-media">
              <h3 className="text-xl mb-3" id="socialMedia">Find Me On</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/pankajuday" target="_blank">
                  <img src={Linkedin} alt="LinkedIn" />
                </a>
              </li>

              <li>
                <a href="https://github.com/pankajuday" target="_blank">
                  <img src={Github} alt="Github" />
                </a>
              </li>

              <li>
                <a href="https://instagram.com/pankajuday_" target="_blank">
                  <img src={Insta} alt="Instagram" />
                </a>
              </li>

              <li>
                <a href="" target="_blank">
                  <img src={Facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://x.com/_Pankajuday" target="_blank">
                  <img src={x} alt="X" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-img">
          <div className="imgShadow"></div>
          <img src={portPro} alt="Portfolio" className="hidden md:block"/>
          <img src={img} alt="Portfolio" className="md:hidden"/>
        </div>
      </header>
    </>
  );
};
