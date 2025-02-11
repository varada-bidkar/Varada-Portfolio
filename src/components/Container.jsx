import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Container.css";

const Container = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const active = location.pathname;

  return (
    <header className="container">
      {/* Left - Logo */}
      <div className="logo">
        <FaCode className="code-icon" />
        <h1>Varada Bidkar</h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li><Link to="/" className={active === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" className={active === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/projects" className={active === "/projects" ? "active" : ""}>Projects</Link></li>
        </ul>
      </nav>

      {/* Right - Social Media & Resume */}
      <div className="i">
        <div className="social-icons">
          <a href="https://github.com/varada-bidkar" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/varada-b-558836257/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div className="resume">
          <a href="https://drive.google.com/file/d/1nbX45gzkih26rCyBOrOcEFG6znx2Hcig/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            📄 Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Container;
