import './Header.css';
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLightbulb, FaComments, FaUsers } from "react-icons/fa"; 
import { FaGithub, FaLinkedin, FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import Container from './Container';
import profileImage from "../assets/1000073091-removebg-preview.png";


const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  useGSAP(()=>{
    gsap.from('.hero .hero-image',{
        opacity:0.1,
        x:500,
        y:0,
        duration:2,
        rotateX:-10
    })
})

useGSAP(()=>{
  gsap.from('.hero .hero-text',{
      opacity:0.1,
      x:-500,
      y:0,
      duration:2,
      rotateY:10
  })
})
  return (
    <header className="header">
      <Container/>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h2>👋 Hey there, I'm Varada!</h2>
          <p>Bridging Creativity & Technology | Full-Stack Developer |<p>Innovation Enthusiast</p> </p>
         
<div className="hero-buttons">
    <button className="btn">
        <FaLightbulb style={{ marginRight: "8px" }} /> Creative Developer
    </button>
    <button className="btn">
        <FaComments style={{ marginRight: "8px" }} /> Effective Communicator
    </button>
    <button className="btn">
        <FaUsers style={{ marginRight: "8px" }} /> Collaborative Leader
    </button>
</div>

        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Profile Image"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
