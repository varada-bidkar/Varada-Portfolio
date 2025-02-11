import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Projects.css";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      title: "Interactive Resume Builder",
      description: "Built a dynamic resume builder application with ReactJS.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7265721527856168960/",
    },
    {
      title: "Cosmetologist Booking Platform",
      description: "Developed a modular booking application.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:YOUR_ACTUAL_LINK/",
    },
  ];

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
