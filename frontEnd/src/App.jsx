import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
        <Footer />
    </div>
  );
}

export default App;
