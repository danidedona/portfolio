import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

import ProjectGrid from "./components/ProjectGrid";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AccessibleComponents from "./pages/projects/accessible components/AccessibleComponents";
import PersonasAndStoryboarding from "./pages/projects/personas and storyboarding/PersonasAndStoryboarding";
import ResponsiveRedesign from "./pages/projects/responsive redesign/ResponsiveRedesign";
import IterativeDesign from "./pages/projects/iterative design/IterativeDesign";

import ScrollToTop from "./components/ScrollToTop";

const colors = {
  bg: "#fcf8f3",
};

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div
      style={{
        "--color-bg": colors.bg,
      }}
      className="bg-[var(--color-bg)]"
    >
      <ScrollToTop />
      <div className="font-sans" style={{ paddingTop: "var(--navbar-height)" }}>
        <nav id="nav">
          <Navbar />
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectGrid />} />
          <Route
            path="/projects/AccessibleComponents"
            element={<AccessibleComponents />}
          />
          <Route
            path="/projects/PersonasAndStoryboarding"
            element={<PersonasAndStoryboarding />}
          />
          <Route
            path="/projects/ResponsiveRedesign"
            element={<ResponsiveRedesign />}
          />
          <Route
            path="/projects/IterativeDesign"
            element={<IterativeDesign />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
