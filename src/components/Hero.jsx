import React from "react";
import CountUp from "react-countup";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-12 text-white"
      style={{
        backgroundImage: "url('/background-texture.png')", // keep your image in public folder
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Name & Typing Text */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Hi, I’m <span className="text-gold">Anupala Sanketh Reddy</span>
      </h1>

      <ReactTyped
        strings={[
          "Machine Learning Enthusiast",
          "Data Analyst",
          "Front End Developer",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="text-3xl md:text-4xl text-gold font-semi-bold drop-shadow-md mb-6"
      />

      {/* Short Intro */}
      <p className="text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed mb-10 drop-shadow-md">
        I am an aspiring <span className="text-gold">Machine Learning Engineer</span>,{" "}
        <span className="text-gold">Data Analyst</span>, and{" "}
        <span className="text-gold">Front End Developer</span>.  
        with a passion for turning raw data into meaningful insights and intelligent solutions. Skilled in Python, SQL, and data visualization tools, I enjoy solving real-world problems through data-driven decision-making. With a strong foundation in machine learning algorithms, predictive modeling, and analytics, I aim to create impactful solutions that bridge data and business value. Alongside my technical expertise, I bring strong communication, teamwork, and problem-solving skills, making me adaptable and effective in collaborative environments.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-12 mb-12">
        <div>
          <h2 className="text-5xl font-bold text-gold drop-shadow-lg">
            <CountUp start={0} end={10} duration={5} />+
          </h2>
          <p className="text-lg text-gray-300">Projects Completed</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-gold drop-shadow-lg">
            <CountUp start={0} end={2} duration={5} />+
          </h2>
          <p className="text-lg text-gray-300">Internships Done</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-gold drop-shadow-lg">
            <CountUp start={0} end={25} duration={5} />+
          </h2>
          <p className="text-lg text-gray-300">Skills gained</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6">
        <a
          href="#contact"
          className="bg-gold hover:bg-green-700 text-lg font-semibold text-black px-6 py-3 rounded-full shadow-lg transition"
        >
          Let's Connect
        </a>
        <a
          href="#projects"
          className="text-lg font-semibold text-white border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          My Work →
        </a>
      </div>
    </section>
  );
}
