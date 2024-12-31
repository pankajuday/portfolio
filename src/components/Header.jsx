import React from "react";
import "../App.css";
import portPro from "../assets/portPro.jpg";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/insta.png";
import dgDot from "../assets/dgDot.png";
import Navbar from "./Navbar";
import box from "../assets/box.png"

export const Header = () => {
  return (
    <>
      <div className="absolute w-full  h-full z-20  hidden justify-items-end md:block ">
        <img src={dgDot} alt="" className="h-auto w-72 top-8 relative right-8" />
        <img src={box} alt="" className="h-14 w-14 top-72 right-12 relative " />
      </div>

     

      <Navbar />

      <header className="header">
        <div className="header-title">
          <div className="relative flex flex-col h-auto w-[80%]">
          <h1>
            Hi, I'm <span className="text-[#F71850]">Pankaj</span>
          </h1>
          <p>Frontend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. At, assumenda. Ex sint eveniet fugit quas in rem hic explicabo illo? </p>
          </div>
          <div className="social-media">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/pankajuday">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
            </li>

            <li>
              <a href="https://github.com/pankajuday">
                <img src={Github} alt="Github" />
              </a>
            </li>

            <li>
              <a href="https://instagram.com/pankajuday_">
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
        </div>

        <div className="header-img">
          <div className="imgShadow"></div>
          <img src={portPro} alt="Portfolio" />
        </div>

       
      </header>
    </>
  );
};
