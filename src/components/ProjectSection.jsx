import React from "react";
import weatherImg from "../assets/weather.png";
import smsImg from "../assets/sms.png";
import resumeImg from "../assets/resume.png";
import marieImg from "../assets/marie.png";
import "./ProjectSection.css";

const projects = [
  {
    id: 1,
    name: "Weather Dashboard",
    image: weatherImg,
    liveDemo: "https://weather-dashboardd.vercel.app/",
    github: "https://github.com/varada-bidkar/Weather-Dashboardd",
  },
  {
    id: 2,
    name: "Student Management System",
    image: smsImg,
    liveDemo: "https://student-management-system-omega.vercel.app/",
    github: "https://github.com/varada-bidkar/Student-Management-System",
  },
  {
    id: 3,
    name: "Interactive Resume Builder",
    image: resumeImg,
    liveDemo: "https://interactive-resume-builder-pi.vercel.app/",
    github: "https://github.com/varada-bidkar/Interactive-Resume-Builder",
  },
  {
    id: 4,
    name: "Marie Carlson UI Clone",
    image: marieImg,
    liveDemo: "https://marie-carlson-ui-clone.vercel.app/",
    github: "https://github.com/varada-bidkar/Marie-Carlson--UI-Clone",
  },
];

const ProjectSection = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-overlay">
              <h3 className="project-name">{project.name}</h3>
              <div className="project-buttons">
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-button"
                  aria-label={`Live demo of ${project.name}`}
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-button github"
                  aria-label={`GitHub repository of ${project.name}`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
