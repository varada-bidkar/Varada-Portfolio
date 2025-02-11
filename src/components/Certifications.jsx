import React from "react";
import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    "Web Development Certification - LeadSoft Placement Academy",
    "HTML, CSS, and JavaScript Certification - PrepInsta",
    "Machine Learning and AI - PrepInsta",
    "Level 3: GenAI - GDSC",
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;