import React from "react";
import "../index.css";

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
