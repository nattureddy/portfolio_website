import React from "react";
import { FaHome, FaFolderOpen, FaTools, FaCertificate, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-4 right-10 bg-gold px-4 py-2 rounded-full flex gap-4 shadow-lg z-50">
      <a
        href="#hero"
        className="text-black text-xl hover:text-green-400 transition"
        title="Home"
      >
        <FaHome />
      </a>
      <a
        href="#projects"
        className="text-black text-xl hover:text-green-400 transition"
        title="Projects"
      >
        <FaFolderOpen />
      </a>
      <a
        href="#skills"
        className="text-black text-xl hover:text-green-400 transition"
        title="Skills"
      >
        <FaTools />
      </a>
      <a
        href="#certificates"
        className="text-black text-xl hover:text-green-400 transition"
        title="Certificates"
      >
        <FaCertificate />
      </a>
      <a
        href="#contact"
        className="text-black text-xl hover:text-green-400 transition"
        title="Contact"
      >
        <FaEnvelope />
      </a>
    </nav>
  );
}
