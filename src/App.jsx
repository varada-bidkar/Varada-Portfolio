import React from "react";
import { FaLaptopCode, FaUsers, FaMicrophone } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import MailSender from "./components/MailSender";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <Header />

      {/* Specialties Section */}
      <div className="specialties-container">
        <div className="specialties-box">
          <div className="specialty">
            <FaLaptopCode className="specialty-icon" />
            <h3>Full-Stack Expertise</h3>
            <p>
              Skilled in React, Django REST Framework, and modern UI design, building seamless web applications.
            </p>
          </div>
          <div className="specialty">
            <FaUsers className="specialty-icon" />
            <h3>Leadership & Team Player</h3>
            <p>
              Successfully led cultural & technical committees at college, demonstrating strategic leadership and collaboration.
            </p>
          </div>
          <div className="specialty">
            <FaMicrophone className="specialty-icon" />
            <h3>Effective Communicator</h3>
            <p>
              Experienced anchor & event host, with strong public speaking and professional networking abilities.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-text">
          <h2>🚀 Featured Projects</h2>
          <p>
            Explore some of my innovative and impactful projects, where creativity meets technology.
            Each project showcases my expertise in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>
        <div className="projects-button">
          <Link to="/projects" className="view-projects-btn">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="achievements-container">
          <h2>Achievements & Certificates</h2>
          <p>Take a look below at some of my featured achievements.</p>
          <Link to="/certifications" className="view-projects-btn">
            View Certificates
          </Link>
        </div>
      </section>

      <MailSender />
      <Footer />
    </div>
  );
}

function App() {
  return (
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        </Routes>
    
  );
}

export default App;
