import React, { useEffect, useRef } from "react";
import { headerData } from "../data/data.js";
import Navbar from "./Navbar";
import Icon from "./Icon.jsx";

const phrases = [
  "Web Applications",
  "RESTful APIs",
  "Real-time Chat Systems",
  "Interactive Dashboards",
  "E-commerce Platforms",
  "Progressive Web Apps",
  "Mobile-Friendly Interfaces",
  "Authentication Workflows",
  // "Serverless Functions",
  // "Microservices",
  // "Cloud Deployments",
  "Database Schemas",
  "CI/CD Pipelines",
  "Performance Monitoring",
  "Custom Dev Tools",
];


const Header = () => {
  const { title, subtitle, titleHighlight, socialLinks } = headerData;
  const animatedTextRef = useRef(null);
  const animationFrame = useRef();

  // Optimized dynamic text typing animation
  useEffect(() => {
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let isPaused = false;
    let pauseUntil = 0;
    let lastTimestamp = 0;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseDuration = 1200;

    function typeStep(timestamp) {
      if (!animatedTextRef.current) return;
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      let speed = isDeleting ? deletingSpeed : typingSpeed;

      if (isPaused) {
        if (timestamp < pauseUntil) {
          animationFrame.current = requestAnimationFrame(typeStep);
          return;
        }
        isPaused = false;
      }

      if (elapsed > speed) {
        const currentText = phrases[currentPhrase];
        if (isDeleting) {
          currentChar--;
          if (currentChar <= 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
          }
        } else {
          currentChar++;
          if (currentChar === currentText.length) {
            isPaused = true;
            pauseUntil = timestamp + pauseDuration;
            isDeleting = true;
          }
        }
        animatedTextRef.current.textContent = currentText.substring(
          0,
          currentChar
        );
        lastTimestamp = timestamp;
      }
      animationFrame.current = requestAnimationFrame(typeStep);
    }
    animationFrame.current = requestAnimationFrame(typeStep);
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  // Particle background effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      const header = document.querySelector("#header-section");
      if (!header) return;
      const size = Math.random() * 8 + 2;
      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = "rgba(77, 171, 247, 0.2)";
      particle.style.borderRadius = "50%";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.6}`;
      particle.style.boxShadow = "0 0 8px rgba(77, 171, 247, 0.3)";
      header.appendChild(particle);
      const maxX = 40;
      const maxY = 40;
      const duration = Math.random() * 15000 + 10000;
      const xMove = Math.random() * maxX * 2 - maxX;
      const yMove = Math.random() * maxY * 2 - maxY;
      particle.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${xMove}px, ${yMove}px)` },
        ],
        {
          duration: duration,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
      setTimeout(() => {
        if (header.contains(particle)) {
          header.removeChild(particle);
        }
      }, duration * 2);
    };
    const particleInterval = setInterval(createParticle, 1200);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <>
      <Navbar />
      <header
        id="header-section"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 sm:py-32"
      >
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-600 bg-gray-800/30 backdrop-blur-sm">
              <span className="text-sm font-medium text-gray-300">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {title.split(titleHighlight)[0]}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {titleHighlight}
              </span>
              {title.split(titleHighlight)[1]}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <div className="mt-4 h-8 overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <p className="text-lg sm:text-xl font-medium">
                  <span className="text-gray-400">I build </span>
                  <span
                    ref={animatedTextRef}
                    className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold"
                  ></span>
                  <span className="animate-blink ml-0.5">|</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-6 py-3 font-medium text-white rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:text-slate-950"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full mix-blend-overlay "></div>
                <div className="relative flex items-center gap-2 ">
                  <span>Let's Talk Code</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>

              <a
                href="#projects"
                className="group relative px-6 py-3 font-medium rounded-lg overflow-hidden border border-gray-600 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <div className="relative flex items-center gap-2">
                  <span>See My Work</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </a>
            </div>{" "}
            <div className="mt-10 flex items-center gap-5">
              {socialLinks.map((link, index) => (
                <div key={index} className="group relative">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600/20 group-hover:to-purple-600/20"
                    aria-label={link.name}
                  >
                    <Icon
                      icon={link.icon}
                      name={link.name}
                      size="20px"
                      color="currentColor"
                      className="w-5 h-5 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-110"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 opacity-20 hidden md:block">
            <pre className="text-blue-500/70 text-xs">
              {`<header>\n  <h1>Hello World</h1>\n</header>`}
            </pre>
          </div>
          <div className="absolute -top-6 -right-6 opacity-20 hidden md:block">
            <pre className="text-purple-500/70 text-xs">
              {`const developer = {\n  name: "Pankaj",\n  skills: ["React", "Node"]\n};`}
            </pre>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="inline-flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 animate-scroll-down"></div>
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
