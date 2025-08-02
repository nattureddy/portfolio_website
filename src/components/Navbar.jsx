import React from "react";
import { FaHome, FaFolderOpen, FaTools, FaCertificate, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-4 right-6 bg-red-900 px-4 py-2 rounded-full flex gap-4 shadow-lg z-50">
      <a
        href="#hero"
        className="text-white text-xl hover:text-purple-400 transition"
        title="Home"
      >
        <FaHome />
      </a>
      <a
        href="#projects"
        className="text-white text-xl hover:text-purple-400 transition"
        title="Projects"
      >
        <FaFolderOpen />
      </a>
      <a
        href="#skills"
        className="text-white text-xl hover:text-purple-400 transition"
        title="Skills"
      >
        <FaTools />
      </a>
      <a
        href="#certificates"
        className="text-white text-xl hover:text-purple-400 transition"
        title="Certificates"
      >
        <FaCertificate />
      </a>
      <a
        href="#contact"
        className="text-white text-xl hover:text-purple-400 transition"
        title="Contact"
      >
        <FaEnvelope />
      </a>
    </nav>
  );
}
