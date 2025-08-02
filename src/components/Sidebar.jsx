import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="w-[85%] h-[75vh] rounded-xl flex flex-col items-center justify-center text-center shadow-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/background12.jpg')", // ✅ Add your image in public folder
        }}
      >
        {/* Profile Image */}
        <img
          src="/profile.JPG"
          alt="Profile"
          className="w-48 h-56 rounded-lg border-4 border-purple-500 shadow-lg object-cover"
        />

        {/* Name & Role */}
        <h1 className="text-2xl font-bold mt-4 text-white">Anupala Sanketh Reddy</h1>
        <p className="text-lg text-gray-200">AI & ML Enthusiast</p>

        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/nattureddy"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sanketh-reddy-667b062a4"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sankethreddyanupala@gmail.com"
            className="text-white text-xl hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="/Anupala_Sanketh_Reddy_resume.pdf"
          download
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-md transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
