import React from "react";
import "../index.css";
import { headerData } from "../data/data.js";
import Icon from "./Icon.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = headerData.socialLinks;

  return (
    <footer className="py-12 bg-slate-900/70 backdrop-blur-sm border-t border-slate-800/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo or name */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Pankaj Uday
            </h2>
            <p className="text-sm text-gray-400 mt-1 text-center">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation links */}
          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
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
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 hover:border-blue-500 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    <Icon
                      icon={social.icon}
                      name={social.name}
                      size="20px"
                      color={social.color}
                    />
                  </a>
                )
            )}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p>&copy; {currentYear} Pankaj Uday. All rights reserved.</p>
          </div>

          {/* Additional info */}
          <div className="mt-4 text-xs text-gray-600 text-center max-w-md">
            <p>Built with React and TailwindCSS. Designed with ❤️ and code.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
