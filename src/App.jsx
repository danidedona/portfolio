import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

import ProjectGrid from "./components/ProjectGrid";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AccessibleComponents from "./pages/projects/accessible components/AccessibleComponents";
import PersonasAndStoryboarding from "./pages/projects/personas and storyboarding/PersonasAndStoryboarding";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div class="font-sans" style={{ paddingTop: "var(--navbar-height)" }}>
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

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
