import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Contact from "./Contact";


function MainContent() {
  return (
    <div className="space-y-16">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default MainContent;
