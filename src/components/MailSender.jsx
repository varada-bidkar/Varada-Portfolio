
import "./MailSender.css";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const MailSender = () => {
  const email = "your-email@example.com"; // Replace with your email
  const subject = "Collaboration Inquiry";
  const body = "Hi Varada, I'm interested in working together. Let's connect!";

  return (
    <div className="mail-section">
      {/* Left - Text */}
      <h2 className="mail-text">Interested in working <p>together?</p></h2>

      {/* Right - Button */}
      <a
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        className="mail-button"
      >
        <FaEnvelope className="mail-icon" /> Send Me a Message
      </a>
    </div>
  );
};

export default MailSender;
