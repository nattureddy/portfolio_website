import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* ✅ Background Layer */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/background14.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* ✅ Page Content */}
      <div className="flex flex-col md:flex-row">
  {/* Sidebar */}
  <div className="w-full md:w-1/4 md:fixed md:h-full">
    <Sidebar />
  </div>

          <div className="w-full md:ml-[25%] md:w-3/4">
    <MainContent />
    <Footer />
  </div>
</div>
    </div>
  );
}
export default App;