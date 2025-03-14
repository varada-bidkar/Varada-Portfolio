import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Projects.css";
import weatherImg from "../assets/weather.png";
import smsImg from "../assets/sms.png";
import resumeImg from "../assets/resume.png";
import marieImg from "../assets/marie.png";
import ethosImg from "../assets/ethos.png";
import cosmoImg from "../assets/cosmetelogy.png";
import gsapImg from "../assets/gsap.png";
import foodImg from "../assets/hung.png";
import regImg from "../assets/reg.png";
import zomImg from "../assets/zom.png";
import portImg from "../assets/port.png";
import photImg from "../assets/photo.png";
import Container from "./Container";
import MailSender from "./MailSender";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      title: "Interactive Resume Builder",
      description: "A dynamic resume builder using ReactJS with real-time preview and export features.",
      image: resumeImg,
      liveDemo: "https://interactive-resume-builder-pi.vercel.app/",
      github: "https://github.com/varada-bidkar/Interactive-Resume-Builder",
    },
    {
      title: "Cosmetologist Booking App",
      description: "A scheduling application for cosmetologists with calendar integration.",
      image: cosmoImg,
      liveDemo: "https://cosmetologist-booking-app.vercel.app/",
      github: "https://github.com/varada-bidkar/Cosmetologist-Booking-App",
    },
    {
      title: "Marie Carlson UI Clone",
      description: "A pixel-perfect UI clone of Marie Carlson's website using React and CSS.",
      image: marieImg,
      liveDemo: "https://marie-carlson-ui-clone.vercel.app/",
      github: "https://github.com/varada-bidkar/Marie-Carlson--UI-Clone",
    },
    {
      title: "Ethoss",
      description: "A cultural website celebrating India's diversity, built with HTML, CSS, and JavaScript.",
      image: ethosImg,
      liveDemo: "https://ethoss.vercel.app/",
      github: "https://github.com/varada-bidkar/Ethoss",
    },
    {
      title: "Weather Dashboard",
      description: "A ReactJS-powered weather dashboard that fetches real-time data via API.",
      image: weatherImg,
      liveDemo: "https://weather-dashboardd.vercel.app/",
      github: "https://github.com/varada-bidkar/Weather-Dashboardd",
    },
    {
      title: "Student Management System",
      description: "A system to manage student records.",
      image: smsImg,
      liveDemo: "https://student-management-system-omega.vercel.app/",
      github: "https://github.com/varada-bidkar/Weather-Dashboardd"
    },
    {
      title: "Green Socket Animation Pages",
      description: "Animated web pages with GSAP.",
      image:gsapImg,
      liveDemo: "https://green-socket-animation-pages.vercel.app/",
      github: "https://github.com/varada-bidkar/Weather-Dashboardd"
    },
    {
      title: "Zomato Clone",
      description: "A UI clone of the Zomato website.",
      image: zomImg,
      liveDemo: "https://zomato-tau.vercel.app/",
    },
    {
      title: "Food Delivery App",
      description: "A responsive food delivery application.",
      image: foodImg,
      liveDemo: "https://food-delivery-ten-rho.vercel.app/",
    },
    {
      title: "Registration Form",
      description: "A simple and responsive registration form.",
      image: regImg,
      liveDemo: "https://registration-form-psi-navy.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing projects and skills.",
      image: portImg,
      liveDemo: "https://varada-portfolio-hylp.vercel.app/",
    },
    {
      title: "Photography Website",
      description: "A photography showcase website.",
      image: photImg,
      liveDemo: "https://photograpy-website-omega.vercel.app/",
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
    <>
      <Container/>
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
      <MailSender/>
        
        <div className="footer-bottom">
        <p>© 2025  Varada Bidkar All rights reserved</p>
      </div>
    
    
    </>
  );
};

export default Projects;
