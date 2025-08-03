import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import mlStudioImg from "../projectphotos/ml_studio.png";
import portfolioImg from "../projectphotos/portfolio.png";
import childImg from "../projectphotos/child_health.webp";
import heartImg from "../projectphotos/heart_disease.jpeg";
import fakeImg from "../projectphotos/fake_profile.jpeg";
import iplImg from "../projectphotos/ipl_dashboard.PNG";
export default function Projects() {
  const projects = [
    {
      title: "Machine Learning Studio",
      image: mlStudioImg,
      description:
        "Built an interactive ML Studio where users can upload datasets, analyze data, train multiple ML models, and make predictions. Features dynamic model selection, CSV/manual input support, and end-to-end ML workflow. Deployed on Render and Netlify.",
      tech: [
        "Python",
        "React.js",
        "Tailwind CSS",
        "FastAPI",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
      ],
      github: "https://github.com/nattureddy/ml_chatbot_frontend",
      demo: "https://mm-ml-modelling.netlify.app/",
    },
    {
      title: "Portfolio Website",
      image: portfolioImg,
      description:
        "A modern personal portfolio website built with React.js and Tailwind CSS, showcasing projects and skills with Framer Motion animations. Fully responsive and deployed on Netlify.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "https://github.com/nattureddy/ml_chatbot_frontend",
      demo: "https://mm-ml-modelling.netlify.app/",
    },
    {
      title: "Child Health Tracking using ML",
      image: childImg,
      description:
        "An ML-based system for fetal health checkups during pregnancy using maternal data. Implemented Random Forest Classifier, achieving 89% accuracy and improving risk detection by 20%.",
      tech: ["Python", "Flask", "Scikit-Learn", "Pandas", "NumPy"],
      github: "https://github.com/nattureddy",
      
    },
    {
      title: "Coronary Heart Disease Prediction",
      image: heartImg,
      description:
        "ML-based model to predict coronary heart disease risk using logistic regression and random forest. Achieved 87% accuracy with feature engineering.",
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      github: "https://github.com/nattureddy",
     
    },
    {
      title: "ANN-based Fake Profile Detection",
      image: fakeImg,
      description:
        "Used Artificial Neural Networks to detect fake social media profiles. Achieved 90% accuracy with 200 input neurons, 200 hidden neurons, and 2 output neurons. Deployed using Flask.",
      tech: ["Python", "Scikit-Learn", "Flask", "HTML", "CSS"],
      github: "https://github.com/nattureddy",
      
    },
    {
      title: "Indian Premier League Dashboard",
      image: iplImg,
      description:
        "Developed an interactive Power BI dashboard analyzing 1000+ IPL matches. Visualized team performance, player stats, match outcomes, and scoring trends with dynamic KPIs.",
      tech: ["Pandas", "Excel", "SQL", "DAX", "Power BI"],
      github: "https://github.com/nattureddy",
      
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 text-white">
      {/* Section Title with Typing Effect */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
       <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        My  <span className="text-gold">Projects</span>
      </h1>
        <ReactTyped
          strings={[
            "A glimpse of my work and creations",
            "Projects that reflect my learning and skills",
            "Building solutions through data and development",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-3xl md:text-2xl text-gold font-semi-bold drop-shadow-md mb-6"
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-black/60 rounded-xl shadow-lg hover:shadow-gold transition overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            {/* Divider */}
            <hr className="border-gray-600" />

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gold">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Tech Stack:</strong> {project.tech.join(", ")}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gold hover:bg-green-700 px-4 py-2 rounded-full text-black transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
