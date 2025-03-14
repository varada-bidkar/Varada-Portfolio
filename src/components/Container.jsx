import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Container.css";

const Container = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const active = location.pathname;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <header className="container">
      {/* Left - Logo */}
      <div className="logo">
        <FaCode className="code-icon" />
        <h1>Varada Bidkar</h1>
      </div>

    

      {/* Navigation */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link 
                to={path} 
                className={active === path ? "active" : ""} 
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right - Social Media & Resume */}
      <div className="social-and-resume">
        <div className="social-icons">
          <a href="https://github.com/varada-bidkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/varada-b-558836257/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <div className="resume">
          <a 
            href="https://drive.google.com/file/d/1nbX45gzkih26rCyBOrOcEFG6znx2Hcig/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            📄 Resume
          </a>
        </div>
        
      </div>
      
        {/* Mobile Menu Icon */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Container;
