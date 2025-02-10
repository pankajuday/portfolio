import React from "react";
import "../App.css";
import { headerData } from "../data/data.js";
import Navbar from "./Navbar";

const Header = () => {
  const { title, subtitle, titleHighlight, images, socialLinks } = headerData;

  return (
    <>
      <Navbar />

      <header className="header">
        <div className="header-title">
          <div className="relative flex flex-col h-auto w-[80%]">
            <h1 className="animate-color-cycle">
              {title.split(titleHighlight)[0]}
              <span className="text-[#F71850]">{titleHighlight}</span>
              {title.split(titleHighlight)[1]}
            </h1>
            <p>{subtitle}</p>
            <a
              href="#contact"
              className="h-auto w-full relative md:items-center flex flex-row flex-wrap md:left-20 top-5 hidden md:block"
            >
              <button className="h-10 w-24 text-slate-950 font-bold hover:bg-white bg-slate-200 relative rounded-lg p-2 border-2 border-slate-500 transition-transform duration-300 hover:scale-125 active:scale-90">
                Contact Me
              </button>
            </a>
          </div>

          <div className="social-media">
            <h3 className="text-xl mb-3" id="socialMedia">Find Me On</h3>
            <ul>
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="transition-transform duration-300 hover:scale-125 active:scale-90"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link.img} alt={link.name} className="h-8 w-8" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="header-img">
          <div className="imgShadow"></div>
          <img src={images.portProSM} alt="Portfolio" className="hidden xl:block border-4 rounded-xl" />
          <img src={images.portProSM} alt="Portfolio" className="hidden md:block xl:hidden" />
          <img src={images.img} alt="Portfolio" className="md:hidden xl:hidden" />
        </div>
      </header>
    </>
  );
};

export default Header;