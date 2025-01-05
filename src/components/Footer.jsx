import React from "react";
import "../App.css";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/insta.png";
import x from "../assets/x.png"

const Footer = () => {
  return (
    <footer className=" relative bottom-0 mt-36 h-32 w-full bg-slate-800 border-t-2 border-slate-500 justify-center flex-col items-center flex space-y-5">
      <h1 className="md:text-3xl text-2xl text-[#F71850]">" Thank You For Scrolling "</h1>
      <div className="social-media">
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
    </footer>
  );
};

export default Footer;
