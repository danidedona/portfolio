import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectGrid from "../components/ProjectGrid";

const colors = {
  grey: "#D9D9D9",
  pink: "#F6A6B9",
  bg: "#fcf8f3",
};

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      style={{
        "--color-grey": colors.grey,
        "--color-pink": colors.pink,
        "--color-bg": colors.bg,
      }}
      className="homepage w-full font-wix bg-[var(--color-bg)]"
    >
      {/* Hero Section */}
      <section className="w-full py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          {/* Left - Text Content */}
          <div className="w-full md:w-4/7 text-right">
            <h1 className="text-3xl text-black leading-tight mb-4">
              Design meets cognition. AI meets empathy.
            </h1>

            <h2 className="text-4xl mt-6 text-gray-800 mb-6">
              Now meet <span className="font-silkscreen">Daniela.</span>
            </h2>

            <div className="text-sm mt-12 space-y-1 text-gray-700">
              <div>
                Software Engineer at{" "}
                <a
                  href="https://www.jpmorganchase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)] transition"
                >
                  J.P. Morgan Chase
                </a>
              </div>
              <div>
                Graduate of{" "}
                <a
                  href="https://www.brown.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)] transition"
                >
                  Brown University
                </a>
              </div>
              <div>
                Degrees in{" "}
                <a
                  href="https://www.brown.edu/undergraduate-programs/computer-science-ab-scb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)] transition"
                >
                  Computer Science
                </a>{" "}
                and{" "}
                <a
                  href="https://www.brown.edu/undergraduate-programs/cognitive-science-ab-scb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)] transition"
                >
                  Cognitive Science
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-3/7 flex justify-center">
            <img
              src="/images/home/main.png"
              alt="Daniela DeDona"
              className="h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <div className="mt-4 min-h-screen max-w-[calc(100%-100px)] mx-auto">
        <h1 className="max-w-7xl mx-auto px-6 text-4xl text-left mb-6">
          Selected Work
        </h1>
        <ProjectGrid />
      </div>
    </div>
  );
}

export default HomePage;
