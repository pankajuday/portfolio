import React, { useEffect, useRef } from "react";
import { headerData } from "../data/data.js";
import Navbar from "./Navbar";
import Icon from "./Icon.jsx";

const phrases = [
  "Web Applications",
  "RESTful APIs",
  "Real-time Chat Application",
  "Interactive Dashboards",
  "E-commerce Platforms",
  "Progressive Web Apps",
  "Mobile-Friendly Interfaces",
  "Authentication Workflows",
  // "Serverless Functions",
  // "Microservices",
  "Cloud Deployments",
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

  const renderTitle = () => {
    if (!titleHighlight) return title;
    
    let highlights = Array.isArray(titleHighlight) ? titleHighlight : [titleHighlight];
    const gradients = [
      "from-purple-400 to-pink-500",
      "from-blue-400 to-cyan-500",
      "from-emerald-400 to-green-500",
      "from-orange-400 to-red-500",
    ];

    // Find all matches
    const matches = [];
    const unusedHighlights = [];
    
    highlights.forEach((highlight, index) => {
      const gradient = gradients[index % gradients.length];
      // Escape regex special chars
      const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedHighlight, 'g');
      
      let match;
      let found = false;
      while ((match = regex.exec(title)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + highlight.length,
          text: highlight,
          gradient: gradient
        });
        found = true;
      }
      if (!found) {
        unusedHighlights.push({ text: highlight, gradient });
      }
    });

    // Sort and filter overlaps
    matches.sort((a, b) => a.start - b.start);
    const uniqueMatches = [];
    let lastEnd = 0;
    matches.forEach(m => {
      if (m.start >= lastEnd) {
        uniqueMatches.push(m);
        lastEnd = m.end;
      }
    });

    // Build result
    const result = [];
    let currentPos = 0;
    uniqueMatches.forEach((m, i) => {
      if (m.start > currentPos) {
        result.push(<span key={`text-${i}`}>{title.substring(currentPos, m.start)}</span>);
      }
      result.push(
        <span key={`match-${i}`} className={`text-transparent leading-normal bg-clip-text bg-gradient-to-r ${m.gradient} inline-block`}>
          {m.text}
        </span>
      );
      currentPos = m.end;
    });
    if (currentPos < title.length) {
      result.push(<span key="text-end">{title.substring(currentPos)}</span>);
    }

    return (
      <>
        {result}
        {unusedHighlights.length > 0 && (
          <span className="block mt-2">
            {unusedHighlights.map((h, i) => (
              <span 
                key={`unused-${i}`} 
                className={`text-transparent bg-clip-text bg-gradient-to-r ${h.gradient} mr-3 inline-block`}
              >
                {h.text}
              </span>
            ))}
          </span>
        )}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <header
        id="header-section"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 sm:py-32"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] mask-image-gradient"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">Available for new projects</span>
            </div>

            <h1 className="text-sm md:text-5xl font-bold text-white mb-6 tracking-tight leading-normal animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              {renderTitle()}
            </h1>
            
            <p className="text-xs md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {subtitle}
            </p>

            {/* Dynamic Text */}
            <div className="h-8 mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <span className="text-lg md:text-xl font-mono text-orange-400">
                &gt; I build <span ref={animatedTextRef} className="text-slate-200"></span><span className="animate-pulse">_</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold shadow-lg shadow-orange-900/20 hover:shadow-orange-600/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-xl bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold border border-slate-800 hover:border-slate-700 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex items-center justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              {socialLinks.map((social, index) => (
                social.url && (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-orange-400 transition-colors transform hover:scale-110 duration-300"
                    aria-label={social.name}
                  >
                    <Icon
                      icon={social.icon}
                      name={social.name}
                      size="24px"
                      color="currentColor"
                    />
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-600 hover:text-orange-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
