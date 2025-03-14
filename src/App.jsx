import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { FaLaptopCode, FaUsers, FaMicrophone } from "react-icons/fa";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import MailSender from "./components/MailSender";
import "./App.css";
import ProjectSection from "./components/ProjectSection";
import CertificationDetails from "./components/CertificationDetails";
import Certificates from "./components/Certificates";

// Scroll to Top when switching pages
function ScrollToTopOnNavigation() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="specialties-container">
        <div className="specialties-box">
          <div className="specialty">
            <FaLaptopCode className="specialty-icon" />
            <h3>Full-Stack Expertise</h3>
            <p>Skilled in React, Django REST Framework, and modern UI design.</p>
          </div>
          <div className="specialty">
            <FaUsers className="specialty-icon" />
            <h3>Leadership & Team Player</h3>
            <p>Successfully led technical & cultural committees.</p>
          </div>
          <div className="specialty">
            <FaMicrophone className="specialty-icon" />
            <h3>Effective Communicator</h3>
            <p>Experienced anchor & event host with strong networking abilities.</p>
          </div>
        </div>
      </div>

      <section className="projects-section">
        <div className="projects-text">
          <h2>🚀 Featured Projects</h2>
          <p>Explore my innovative projects in full-stack development and UI/UX design.</p>
        </div>
        <div className="projects-button">
          <Link to="/projects" className="view-projects-btn">View All Projects →</Link>
        </div>
      </section>

      <ProjectSection />

      <section className="achievements">
        <div className="achievements-container">
          <h2>🎖️ Achievements & Certifications</h2>
          <p>Explore my certifications in various technologies.</p>
          <Link to="/certifications" className="view-projects-btn">View All Certifications →</Link>
        </div>
      </section>

      <Certificates />
      <MailSender />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/certification/:id" element={<CertificationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
