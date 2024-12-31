import React from "react";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import { Header } from "./components/Header";
import { BgVideo } from "./components/BgVideo";

function App() {
  return (
    <div className="App" >
      {/* <BgVideo /> */}
      
      <Header />
      {/* <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
