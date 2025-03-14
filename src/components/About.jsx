import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./About.css";
import Container from "./Container";
import MailSender from "./MailSender";
import profileImage from "../assets/1000073091-removebg-preview.png";




// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics & Telecommunication Engineering",
      institution: "SKN Sinhgad College of Engineering, Korti, India",
      year: "2022 – 2026" ,
      gpa: "8.31/10"
    },
    {
      degree: "Higher-School Education (Science)",
      institution: "Karmaveer Bhaurao Patil College ,Pandharpur ",
      year: "2020 – 2022" ,
    },
    {
      degree: "Secondary School Education",
      institution: "Arihant Public School,Pandharpur",
      year: "2019 – 2020" ,
    },
  ];

  const sectionRef = useRef(null);
  const categoriesRef = useRef([]);

  const experienceRef = useRef([]);
  
  

  const skills = {
    Frontend: [
      { name: "React Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Next Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    Backend: [
      { name: "Node Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    Others: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  };

  


  const experiences = [
    {
      "role": "Full-Stack Developer Intern",
      "company": "Leadsoft IT Solutions Limited",
      "duration": "September 2024 - January 2024",
      "description": "Contributing as a Fullstack Developer on various projects, focusing on both front-end and back-end development.",
      "skills": [
        "HTML", 
        "CSS", 
        "Angular", 
        "React", 
        "Bootstrap", 
        "Tailwind CSS", 
        "JavaScript", 
        "TypeScript", 
        "Node.js", 
        "Next.js"
      ]
    }
    ,
    // Add other experiences here if needed
  ];

 
  return (
    <>
      <Container />
      <div className="a">
        <section id="about" className="about">
          {/* Profile Image */}
          <div className="profile-container">
            
                      <img src={profileImage} alt="Profile Image" className="profile-pic" />
          </div>

          {/* About Text */}
          <div className="about-text">
            <h2>About Me</h2>
            <p>Hi, I'm Varada Bidkar, currently pursuing a Bachelor of Technology in Electronics & Telecommunication Engineering at SKN Sinhgad College of Engineering, Korti, India. I am passionate about web development, UI/UX design, and sustainable energy innovations.</p>
            <p>With experience in full-stack development and project management, I enjoy creating impactful digital solutions. I have also contributed to research and innovation in energy harvesting and satellite technologies.</p>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h2>🎓 Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.year}</p>
                <p>{edu.gpa}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <section ref={sectionRef} id="technical-skills" className="technical-skills">
            <h2>🔧  Technical Skills</h2>
            <div className="skills-container">
              {Object.keys(skills).map((category, index) => (
                <div key={index} ref={(el) => (categoriesRef.current[index] = el)} className="skills-category">
                  <h3>{category}</h3>
                  <div className="skills-grid">
                    {skills[category].map((skill, i) => (
                      <div key={i} className="skill-card">
                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                        <p>{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section ref={sectionRef} id="experience" className="experience-section">
      <h2 className="experience-title">💼 Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (experienceRef.current[index] = el)}
            className="experience-card"
          >
            <h3 className="experience-role">{exp.role}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="hobbies" className="hobbies-section">
  <h2 className="hobbies-title">🎭 Hobbies & Interests</h2>
  <div className="hobbies-container">
    <div className="hobby-card">
      <h3> Dancing</h3>
      <p> 
         Trained in <strong>Bharatanatyam</strong> and successfully passed 
         <strong> three professional-level exams</strong> in the art form.</p>
    </div>

    <div className="hobby-card">
      <h3> Music</h3>
      <p>I have a deep passion for music and performing arts. </p>
    </div>

    <div className="hobby-card">
      <h3>Meditation & Healing</h3>
      <p>Practicing mindfulness and holistic healing for mental and emotional well-being.</p>
    </div>
  </div>
</section>

        <MailSender/>
        
        <div className="footer-bottom">
        <p>© 2025  Varada Bidkar All rights reserved</p>
      </div>
      </div>
    </>
  );
};

export default About;
