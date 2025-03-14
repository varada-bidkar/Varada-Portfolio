  import React from "react";
  import { useParams, useNavigate } from "react-router-dom";
  import dipexImg from "../assets/dipex.jpeg";
  import mahindraImg from "../assets/aws.png";
  import webdevImg from "../assets/webdev.png";
  import softskillsImg from "../assets/softskills.jpg";
  import InternImg from "../assets/1internship.jpg";
  import employabilityImg from "../assets/employbility .jpg";
  import ibmImg from "../assets/ibm.jpg";
  import genaiImg from "../assets/gen ai.jpg";
  import "./CertificationDetails.css";

  const certifications = [
    {
      id: 1,
      name: "First Prize Winner – State-Level Competition",
      image: dipexImg,
      details: {
        description:
          "Recognized for exceptional innovation in renewable energy solutions, achieving the first prize at a prestigious state-level competition.",
        keyHighlights: [
          "Designed a high-efficiency dual axial wind turbine, optimizing energy conversion and portability.",
          "Implemented aerodynamic principles and lightweight materials for enhanced performance.",
          "Presented findings to a panel of industry experts, emphasizing practical sustainability applications.",
          "Developed a scalable prototype capable of integration into real-world energy solutions.",
          "Demonstrated problem-solving skills and deep understanding of renewable energy systems."
        ],
        teamMembers: "Varada Bidkar (Lead Innovator), Team of 4 engineers",
        conclusion:
          "This accomplishment solidified expertise in energy harvesting technologies, innovation, and effective communication of complex engineering solutions."
      }
    },
    {
      id: 2,
      name: "Soft Skills & Leadership Development",
      image: softskillsImg,
      details: {
        description:
          "Completed an advanced professional development program focused on communication, leadership, and interpersonal skills essential for career growth.",
        keyHighlights: [
          "Participated in real-world case studies, enhancing decision-making abilities.",
          "Developed conflict resolution strategies and team collaboration techniques.",
          "Engaged in public speaking workshops, improving presentation and persuasion skills.",
          "Applied time management methodologies to boost productivity in professional settings."
        ],
        teamMembers: "Solo Participation",
        conclusion:
          "Gained critical soft skills necessary for leadership roles, team collaboration, and effective stakeholder communication in professional environments."
      }
    },
    {
      id: 3,
      name: "AWS Certification – Cloud Computing",
      image: mahindraImg,
      details: {
        description:
          "Achieved certification in Amazon Web Services (AWS), specializing in cloud architecture, security, and deployment.",
        keyHighlights: [
          "Gained expertise in AWS EC2, S3, IAM, Lambda, and DynamoDB.",
          "Developed hands-on experience with scalable cloud infrastructure and deployment.",
          "Built and optimized cloud-based applications with a focus on cost efficiency and security.",
          "Completed multiple projects involving serverless computing, auto-scaling, and API integrations.",
          "Acquired knowledge of CI/CD pipelines and cloud-based automation workflows."
        ],
        teamMembers: "Solo Certification",
        conclusion:
          "Mastered cloud computing principles, boosting proficiency in DevOps, cloud security, and scalable system architectures."
      }
    },
    {
      id: 4,
      name: "Web Development Certification",
      image: webdevImg,
      details: {
        description:
          "Completed an extensive Web Development training program focused on front-end technologies, UI/UX design, and performance optimization.",
        keyHighlights: [
          "Developed fully responsive websites using HTML5, CSS3, JavaScript, and React.js.",
          "Implemented mobile-first design principles for seamless user experiences across devices.",
          "Optimized web performance and accessibility following industry best practices.",
          "Worked on real-world projects, developing interactive UI components and dynamic web applications.",
          "Integrated REST APIs and enhanced user interaction using modern JavaScript frameworks."
        ],
        teamMembers: "Solo Certification",
        conclusion:
          "Gained hands-on expertise in web development, front-end frameworks, responsive design, and performance-driven web applications."
      }
    },
    {
      id: 5,
      name: "Web Development Intern at LeadSoft IT Solutions",
      image: InternImg,
      details: {
        description: "Worked as a Web Development Intern focusing on React.js and Node.js technologies.",
        keyHighlights: [
          "Developed dynamic web applications using React and state management.",
          "Implemented RESTful APIs and backend logic using Node.js.",
          "Optimized website performance, reducing page load time by 20%."
        ],
        teamMembers: "Internship Team",
        conclusion:
          "Gained real-world experience in full-stack development, working on scalable and interactive web applications."
      }
    },
    {
      id: 6,
      name: "Employability Mentorship Program Level-1",
      image: employabilityImg,
      details: {
        description: "Completed a structured mentorship program focused on employability skills.",
        keyHighlights: [
          "Learned resume building, interview preparation, and corporate etiquette.",
          "Engaged in mock interviews and professional networking strategies.",
          "Acquired time management and adaptability skills for workplace success."
        ],
        teamMembers: "Solo Participation",
        conclusion:
          "Improved career readiness by mastering essential professional and workplace skills."
      }
    },
    {
      id: 7,
      name: "Getting Started with Data Science",
      image: ibmImg,
      details: {
        description: "Completed an IBM introductory course on Data Science, covering key concepts and tools.",
        keyHighlights: [
          "Learned Python programming for data analysis and visualization.",
          "Explored machine learning basics and statistical modeling techniques.",
          "Worked with Jupyter Notebooks, Pandas, and NumPy for data manipulation."
        ],
        teamMembers: "Solo Certification",
        conclusion:
          "Developed foundational knowledge in Data Science, preparing for advanced analytics and AI applications."
      }
    },
    {
      id: 8,
      name: "Google Cloud The Arcade Level-3",
      image: genaiImg,
      details: {
        description: "Completed Google Cloud Gen AI certification Level-3, gaining expertise in cloud-based AI solutions.",
        keyHighlights: [
          "Worked on Google Cloud AI and machine learning platforms.",
          "Trained and deployed AI models using Vertex AI and TensorFlow.",
          "Gained hands-on experience with cloud automation and AI-driven solutions."
        ],
        teamMembers: "Solo Certification",
        conclusion:
          "Acquired specialized knowledge in cloud AI technologies, enabling the development of intelligent applications."
      }
    }
  ];

  const CertificationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const certification = certifications.find(cert => cert.id === Number(id));

    if (!certification) {
      return (
        <div className="certification-details error">
          <h2>Certification not found.</h2>
          <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      );
    }

    return (
      <div className="certification-details">
        <img src={certification.image} alt={certification.name} className="cert-image" />
        <h2>{certification.name}</h2>
        <p><strong>Description:</strong> {certification.details.description}</p>
        <h3>Key Highlights</h3>
        <ul>
          {certification.details.keyHighlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p><strong>Team Members:</strong> {certification.details.teamMembers}</p>
        <h3>Conclusion</h3>
        <p>{certification.details.conclusion}</p>
        <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  };

  export default CertificationDetails;
