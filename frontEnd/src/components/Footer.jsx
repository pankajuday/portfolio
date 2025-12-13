import React from "react";
import "../index.css";
import { headerData } from "../data/data.js";
import Icon from "./Icon.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = headerData.socialLinks;

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-900/50 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo or name */}
          <div className="mb-8 text-center">
            <a href="#" className="inline-flex items-center gap-2 group mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                  P
              </div>
              <span className="font-bold text-xl text-slate-200 tracking-tight group-hover:text-white transition-colors">
                Pankaj<span className="text-orange-500">U</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 mt-2 max-w-xs mx-auto">
              Building digital experiences with passion and precision.
            </p>
          </div>

          {/* Navigation links */}
          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-slate-400 hover:text-orange-400 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="flex space-x-4 mb-8">
            {socialLinks.map(
              (social, index) =>
                social.url && (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon
                      icon={social.icon}
                      name={social.name}
                      size="18px"
                      color="currentColor"
                    />
                  </a>
                )
            )}
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-600 border-t border-slate-900 pt-8 w-full text-center max-w-2xl">
            <p>&copy; {currentYear} Pankaj Uday. All rights reserved.</p>
            <p className="mt-2 text-xs text-slate-700">
              Designed & Built with{" "}
              <span className="text-red-500 animate-pulse">❤️</span> using React &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
