import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import MLcImg from "../Certificatephotos/ml_courseediglobe.png";
import MLiImg from "../Certificatephotos/ml_internediglobe.png";
import G1Img from "../Certificatephotos/googleC1.png";
import G2Img from "../Certificatephotos/googleC2.png";
import G3Img from "../Certificatephotos/googleC3.png";
import JavainImg from "../Certificatephotos/javaintern.png";
export default function Certificates() {
const certificates = [
  {
    title: "Machine Learning Internship Completion",
    image: MLiImg,
    description:
      "Successfully completed a Machine Learning internship at Ediglobe, working on real-world ML model development and deployment.",

  },
  {
    title: "Machine Learning Course Completion",
    image: MLcImg,
    description:
      "Certified by Ediglobe for completing a Machine Learning course covering supervised, unsupervised models, and model deployment.",
  },
  {
    title: "Java Internship Completion",
    image: JavainImg,
    description:
      "Completed a Java internship at NelTech Edu, gaining hands-on experience in Java-based application development.",
    
  },
  {
    title: "Google Data Analytics Professional Certificate – Course 1",
    image: G1Img,
    description:
      "Completed the foundational course on Data Analytics by Google, covering data-driven decision-making principles.",
 
  },
  {
    title: "Google Data Analytics Professional Certificate – Course 2",
    image: G2Img,
    description:
      "Earned a certificate from Google on data analysis using spreadsheets, SQL, and visualization tools.",
   
  },
  {
    title: "Google Data Analytics Professional Certificate – Course 3",
    image: G3Img,
    description:
      "Achieved certification in Data Analytics specialization from Google, focusing on case studies and real-world datasets.",
   
  },
];


  return (
    <section id="certificates" className="py-20 px-6 text-white">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Cer<span className="text-purple-400">tificates</span>
      </h1>
        <ReactTyped
          strings={[
            "Courses and certifications I have completed",
            "Recognitions of my learning journey",
            "Skills I have validated with certifications",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-3xl md:text-4xl text-purple-300 font-semibold drop-shadow-md mb-6"
        />
      </motion.div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-black/60 rounded-xl shadow-lg hover:shadow-purple-500/40 transition overflow-hidden"
          >
            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-52 object-cover"
            />

            {/* Divider */}
            <hr className="border-gray-600" />

            {/* Certificate Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-purple-300">
                {cert.title}
              </h3>
              <p className="text-gray-300 mb-4">{cert.description}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-white transition w-fit"
              >
              
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
