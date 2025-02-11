import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* Important Links */}
          <h2>🔗 Important Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Certifications">Certifications</a></li>
            <li><a href="/Projects">Projects</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h2>📞 Contact</h2>
          <p>Email: bidkarvarada4@gmail.com</p>
          <p>Phone: +91 93XXXXXXXX</p>
          <p>Address: Pandharpur, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h2>🌍Connect with Me</h2>
          <div className="social-links">
          <a href="https://github.com/varada-bidkar"><FaGithub /> GitHub</a>
            <a href="#"><FaCode /> CodeChef</a>
          <a href="https://www.linkedin.com/in/varada-b-558836257/"><FaLinkedin /> LinkedIn</a>
        
          </div>
         
        </div>
      </div>
      {/* Copyright Text */}
      <div className="footer-bottom">
        <p>© 2025  Varada Bidkar All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
