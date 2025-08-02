import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaDatabase, FaChartBar, FaTools,  } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function Skills() {
const skills = [
  {
    name: "Machine Learning Algorithms",
    icon: <FaChartBar className="text-6xl text-blue-500" />,
    description:
      "Proficient in supervised & unsupervised learning models like regression, SVM, decision trees, and random forests.",
  },
  {
    name: "Data Analytics",
    icon: <FaChartBar className="text-6xl text-purple-400" />,
    description:
      "Transforming raw data into meaningful stories with visualization and statistical insights.",
  },
  {
    name: "Python",
    icon: <FaPython className="text-6xl text-yellow-400" />,
    description:
      "Powerful for AI, ML, and data analysis – my go-to for intelligent solutions.",
  },
  {
    name: "Java",
    icon: <FaJava className="text-6xl text-red-500" />,
    description:
      "Strong foundation in OOP and backend logic for robust applications.",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-6xl text-blue-400" />,
    description:
      "Building dynamic and interactive web apps with smooth UI experiences.",
  },
  {
    name: "SQL & Databases",
    icon: <FaDatabase className="text-6xl text-green-400" />,
    description:
      "Efficient at managing and querying relational databases for insights.",
  },
  {
    name: "Flask",
    icon: <FaTools className="text-6xl text-gray-300" />,
    description:
      "Developing lightweight backend APIs and deploying ML models as web apps.",
  },
  {
    name: "Power BI",
    icon: <FaChartBar className="text-6xl text-yellow-500" />,
    description:
      "Building interactive dashboards and reports for insightful data visualization.",
  },
];


  return (
    <section id="skills" className="py-20 px-6 text-white">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        My  <span className="text-purple-400">Skills</span>
      </h1>
        <ReactTyped
                  strings={[
                    "Tools and Technologies Implemented and learned",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className="text-3xl md:text-4xl text-purple-300 font-semibold drop-shadow-md mb-6"
                />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 p-6 rounded-xl shadow-lg hover:shadow-purple-500/40 transition text-center"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-300 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
