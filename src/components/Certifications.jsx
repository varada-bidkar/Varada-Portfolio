import React from "react";
import { useNavigate } from "react-router-dom";
import dipexImg from "../assets/dipex.jpeg";
import mahindraImg from "../assets/aws.png";
import webdevImg from "../assets/webdev.png";
import softskillsImg from "../assets/softskills.jpg";
import InternImg from "../assets/internship.jpg";
import  employabilityImg from "../assets/employbility .jpg";
import ibmImg from "../assets/ibm.jpg";
import genaiImg from "../assets/gen ai.jpg";
import "./Certifications.css";

const certifications = [
  { id: 1, name: "First Prize Winner – State-Level Competition", image: dipexImg },
  { id: 2, name: "Soft Skills & Leadership Development", image: softskillsImg },
  { id: 3, name: "AWS Certification", image: mahindraImg },
  { id: 4, name: "Web Development Certification", image: webdevImg },
  { id: 5, name: "Web Development Intern at LeadSoft IT Solutions", image: InternImg },
  { id: 6, name: "Employability Mentorship Program Level-1", image: employabilityImg },
  { id: 7, name: "Getting Started with Data Science", image: ibmImg },
  { id: 8, name: "Google Cloud The Arcade Level-3", image: genaiImg }
];

const Certifications = () => {
  const navigate = useNavigate();

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <img src={cert.image} alt={cert.name} className="cert-image" />
            <div className="cert-overlay">
              <h3 className="cert-name">{cert.name}</h3>
              <button 
                className="cert-button"
                onClick={() => navigate(`/certification/${cert.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
