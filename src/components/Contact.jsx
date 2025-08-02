import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-white">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Contact  <span className="text-purple-400">Me</span>
      </h1>
      <ReactTyped
                        strings={[
                          "Get in touch with me for opportunities, collaborations, or just to say hi!",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        className="text-3xl md:text-4xl text-purple-300 font-semibold drop-shadow-md mb-6"
                      />
      </motion.div>

      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-5 text-lg"
      >
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-purple-400 text-2xl" />
          <a
            href="mailto:sankethreddyanupala@gmail.com"
            className="hover:text-purple-400 transition"
          >
            sankethreddyanupala@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaGithub className="text-purple-400 text-2xl" />
          <a
            href="https://github.com/nattureddy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            github.com/nattureddy
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaLinkedin className="text-purple-400 text-2xl" />
          <a
            href="https://linkedin.com/in/sanketh-reddy-667b062a4"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            linkedin.com/in/sanketh-reddy-667b062a4
          </a>
        </div>
      </motion.div>

      {/* Resume Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8"
      >
        <a
          href="/Anupala_Sanketh_Reddy_resume.pdf"
          download
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-full text-white font-semibold transition w-fit"
        >
          <FaFileDownload /> Download Resume
        </a>
      </motion.div>
    </section>
  );
}
