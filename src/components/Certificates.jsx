import React from "react";
import { useNavigate } from "react-router-dom";
import mahindraImg from "../assets/aws.png";
import softskillsImg from "../assets/softskills.jpg";
import InternImg from "../assets/internship.jpg";

import "./Certificates.css";

const certifications = [
  { id: 2, name: "Soft Skills & Leadership Development", image: softskillsImg },
  { id: 3, name: "AWS Certification", image: mahindraImg },
  { id: 5, name: "Web Development Intern at LeadSoft IT Solutions", image: InternImg }
];

const Certificates = () => {
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

export default Certificates;
