import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6 w-[95%] mx-auto mb-4 rounded-2xl border border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm justify-center">
          <a href="#hero" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>
          <a href="#certificates" className="hover:text-purple-400 transition">
            Certificates
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="mailto:sankethreddyanupala@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/nattureddy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sanketh-reddy-667b062a4"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-4" />

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Anupala Sanketh Reddy</span>. All rights reserved.
      </p>
    </footer>
  );
}
