import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectGrid from "../components/ProjectGrid";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="homepage w-full">
      {/* Header */}
      <section
        id="header"
        className="bg-gradient-to-r from-purple-500 to-pink-500 py-16"
      >
        <div className="container mx-auto text-center px-6">
          <h1
            id="logo"
            className="text-6xl font-extrabold text-white tracking-wide leading-tight"
          >
            <a
              href="index.html"
              className="hover:text-gray-100 transition-colors duration-300"
            >
              Daniela DeDona
            </a>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            This will look better soon i promise ;-; for now please click on the
            project :D
          </p>
        </div>
      </section>

      {/* Projects */}

      <div className="min-h-screen max-w-[calc(100%-100px)] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">My Portfolio</h1>
        <ProjectGrid />
      </div>
    </div>
  );
}

export default HomePage;
