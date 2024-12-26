import React from "react";
import "../index.css";

const Projects = () => {
  const projects = [
    { name: "Project One", description: "A description of project one." },
    { name: "Project Two", description: "A description of project two." },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
