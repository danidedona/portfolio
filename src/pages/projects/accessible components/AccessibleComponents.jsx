import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Gmail from "./casestudies/Gmail";
import GoogleForms from "./casestudies/GoogleForms";
import Notion from "./casestudies/Notion";

const sections = [
  { id: "original-models", label: "Original State Models" },
  { id: "pain-points", label: "Identified Pain Points & Needs" },
  { id: "redesigned-models", label: "Redesigned State Models" },
  { id: "comparison", label: "Original vs. New Design" },
];

const topics = [
  "inclusive",
  "user-friendly",
  "perceivable",
  "operable",
  "understandable",
  "robust",
  "adaptive",
  "keyboard-friendly",
  "intuitive",
  "responsive",
  "clear",
];

const carouselImages = [
  "/images/accessible components/ModifiedKeyboardUser.png",
  "/images/accessible components/ModifiedMobileUser.png",
  "/images/accessible components/ModifiedMouseUser.png",
  "/images/accessible components/OriginalKeyboardUser.png",
  "/images/accessible components/OriginalMouseUser.png",
];

const caseStudies = [Gmail, GoogleForms, Notion];

const AccessibleComponents = () => {
  const [currentCaseStudy, setCurrentCaseStudy] = useState(caseStudies[0]);

  const previousCaseStudy = () => {
    const currentIndex = caseStudies.indexOf(currentCaseStudy);
    const nextIndex =
      (currentIndex - 1 + caseStudies.length) % caseStudies.length;
    setCurrentCaseStudy(caseStudies[nextIndex]);
  };

  const nextCaseStudy = () => {
    const currentIndex = caseStudies.indexOf(currentCaseStudy);
    const nextIndex = (currentIndex + 1) % caseStudies.length;
    setCurrentCaseStudy(caseStudies[nextIndex]);
  };

  useEffect(() => {
    // Logs the current case study whenever it changes
    console.log("Current case study updated:", currentCaseStudy);
  }, [currentCaseStudy]);

  const [currentTopic, setCurrentTopic] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const processRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const topicInterval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % topics.length);
    }, 3000);

    return () => clearInterval(topicInterval);
  }, []);

  const scrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // 50% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full font-wix text-center mb-8">
      {/* Content */}
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-start text-black p-14">
          <div className="text-7xl font-bold leading-tight">
            <h1 className="text-2xl font-bold text-[#2483E2]">
              CSCI1300: Accessible Components
            </h1>
            <p className="mt-4">Accessible components are</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={topics[currentTopic]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[#2483E2]"
              >
                {topics[currentTopic]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full border-b border-black my-8"></div>

          {/* Button */}
          <div className="w-full mt-6">
            <button
              onClick={scrollToProcess}
              className="w-full border-2 border-black text-black text-2xl font-semibold px-8 py-3 transition duration-300 hover:bg-[#E4EFFA]"
            >
              See the process
            </button>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="w-full flex flex-row py-16 px-14 bg-[#E4EFFA] bg-opacity-70">
        {/* Left Side (3/4) */}
        <div className="w-3/4 text-left">
          {/* Top Heading and Summary */}
          <h2 className="text-4xl font-bold mb-2 text-[#2483E2] text-left">
            Accessible Checkbox Redesign
          </h2>
          <p className="text-xl mb-8 text-left">
            Redesigning a checkbox component to ensure keyboard, mouse, and
            mobile accessibility across platforms.
          </p>
          <p className="mb-4">
            I evaluated how checkboxes are implemented in Gmail, Google Forms,
            and Notion to understand common accessibility breakdowns. After
            identifying usability issues across input methods (keyboard, mouse,
            and mobile), I redesigned the Notion checkbox to unify behavior and
            improve clarity, efficiency, and inclusivity.
          </p>
        </div>

        {/* Right Side (1/4) */}
        <div className="w-1/4 text-left pl-8">
          <h3 className="text-xl font-bold">Role</h3>
          <p>UX Designer, Frontend Developer</p>
          <h3 className="text-xl font-bold mt-4">Duration</h3>
          <p>2 Weeks, Spring 2025</p>
          <h3 className="text-xl font-bold mt-4">Tools</h3>
          <p>Figma, React, TailwindCSS, Framer Motion</p>
        </div>
      </div>

      {/* Case Studies */}
      <div>
        <h2 className="w-full flex flex-row py-8 px-14 text-3xl font-bold text-left">
          Case Studies
        </h2>
        <div className="flex items-center mb-11 justify-center">
          {/* Left Arrow */}
          <button onClick={previousCaseStudy} className="text-xl mr-16">
            &larr; Previous
          </button>

          {/* Title */}
          <h2 className="text-3xl font-bold">{currentCaseStudy.title}</h2>

          {/* Right Arrow */}
          <button onClick={nextCaseStudy} className="text-xl ml-16">
            Next &rarr;
          </button>
        </div>

        <div className="flex">
          <div className="space-y-12 w-2/5 ">
            {/* Mouse User Interactions */}
            <section className="m-4 p-4 bg-[#E4EFFA] rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Mouse User Interactions
              </h2>
              {/* Horizontal Scroll Container */}
              <div className="flex overflow-x-auto space-x-4">
                {/* Each image + description block */}
                {currentCaseStudy.mouseImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div
                      className="m-6 h-[500px] min-h-[300px] max-w-[800px] flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain rounded-lg transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {image.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Keyboard User Interactions */}
            <section className="m-4 p-4 bg-[#E4EFFA] rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Keyboard User Interactions
              </h2>
              {/* Horizontal Scroll Container */}
              <div className="flex overflow-x-auto space-x-4 pb-4">
                {/* Each image + description block */}
                {currentCaseStudy.keyboardImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div
                      className="m-6 h-[500px] min-h-[300px] max-w-[800px] flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain rounded-lg transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {image.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mobile User Interactions */}
            <section className="m-4 p-4 bg-[#E4EFFA] rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Mobile User Interactions
              </h2>
              {/* Horizontal Scroll Container */}
              <div className="flex overflow-x-auto space-x-4 pb-4">
                {/* Each image + description block */}
                {currentCaseStudy.mobileImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div
                      className="m-6 h-[500px] min-h-[300px] max-w-[800px] flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain rounded-lg transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {image.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Chart */}
          <div className="w-3/5 px-2">
            <div
              className="sticky top-8"
              style={{ paddingTop: "var(--navbar-height)" }}
            >
              <section className="my-4">
                <h2 className="text-3xl font-bold mb-4">
                  Input-Output Observations
                </h2>
                <div className="p-4">
                  {/* Chart Title */}
                  <h2 className="text-2xl font-bold mb-4">Input Reflection</h2>
                  <div className="grid grid-cols-6 items-stretch auto-rows-min">
                    {/* Row 1 */}
                    <div className="col-span-2 border p-2 flex items-center">
                      {currentCaseStudy.firstChartRow1.left}
                    </div>
                    <div className="col-span-4 border p-2">
                      <ul className="list-disc pl-5 text-left">
                        {currentCaseStudy.firstChartRow1.right.map(
                          (item, idx) => (
                            <li key={idx}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                    {/* Row 2 */}
                    <div className="col-span-2 border p-2 flex items-center">
                      {currentCaseStudy.firstChartRow2.left}
                    </div>
                    <div className="col-span-4 border p-2">
                      <ul className="list-disc pl-5 text-left">
                        {currentCaseStudy.firstChartRow2.right.map(
                          (item, idx) => (
                            <li key={idx}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                    {/* Row 3 */}
                    <div className="col-span-2 border p-2 flex items-center">
                      {currentCaseStudy.firstChartRow3.left}
                    </div>
                    <div className="col-span-4 border p-2">
                      <ul className="list-disc pl-5 text-left">
                        {currentCaseStudy.firstChartRow3.right.map(
                          (item, idx) => (
                            <li key={idx}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section className="my-4">
                <div className="p-4">
                  {/* Chart Title */}
                  <h2 className="text-2xl font-bold mb-4">Output Reflection</h2>
                  <div className="grid grid-cols-6 items-stretch auto-rows-min">
                    {/* Row 1 */}
                    <div className="col-span-2 border p-2 flex items-center">
                      {currentCaseStudy.secondChartRow1.left}
                    </div>
                    <div className="col-span-4 border p-2">
                      <ul className="list-disc pl-5 text-left">
                        {currentCaseStudy.secondChartRow1.right.map(
                          (item, idx) => (
                            <li key={idx}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                    {/* Row 2 */}
                    <div className="col-span-2 border p-2 flex items-center">
                      {currentCaseStudy.secondChartRow2.left}
                    </div>
                    <div className="col-span-4 border p-2">
                      <ul className="list-disc pl-5 text-left">
                        {currentCaseStudy.secondChartRow2.right.map(
                          (item, idx) => (
                            <li key={idx}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                    {/* Row 3 */}
                    <div className="col-span-2 border p-2 flex items-center">
                      {currentCaseStudy.secondChartRow3.left}
                    </div>
                    <div className="col-span-4 border p-2 ">
                      <ul className="list-disc pl-5 text-left">
                        {currentCaseStudy.secondChartRow3.right.map(
                          (item, idx) => (
                            <li key={idx}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* New Section */}
      <div className="w-full flex flex-col p-14 m-4 bg-[#E4EFFA] bg-opacity-70">
        <div className="max-w-5xl mx-auto p-6">
          {/* Row 1: Implementation Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Implementation Comparison
            </h2>
            <div className="flex flex-col md:flex-row gap-6 text-left">
              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Gmail</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fast mouse selection with clear visual feedback</li>
                  <li>Keyboard only supports “Select All,” no tab access</li>
                  <li>Screen reader flow is unclear and disorienting</li>
                  <li>Mobile swaps profile pics with checkmarks</li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Google Forms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consistent color theming across all states</li>
                  <li>
                    Keyboard accessible via tab, but spacebar use isn't
                    intuitive
                  </li>
                  <li>Strong screen reader support with detailed feedback</li>
                  <li>Mobile mirrors desktop in look and function</li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Notion</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimal design with clear visual feedback</li>
                  <li>Full keyboard support with intuitive tab/enter use</li>
                  <li>Mouse animations add subtle engagement</li>
                  <li>Consistent and reliable screen reader behavior</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2: Functionality Analysis */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Functionality Analysis
            </h2>
            <div className="flex flex-col md:flex-row gap-6 text-left">
              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Learnability</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forms: clear feedback and field indicators</li>
                  <li>Gmail: intuitive mouse use, weak keyboard flow</li>
                  <li>Notion: simple start, hides advanced tools</li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Memorability</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Notion: consistent across platforms</li>
                  <li>Forms: color helps reinforce actions</li>
                  <li>Gmail: inconsistent behavior increases load</li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gmail: great for bulk actions (mouse)</li>
                  <li>Forms: fast keyboard use (spacebar required)</li>
                  <li>Notion: equally smooth across all inputs</li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gmail: strong visual state feedback</li>
                  <li>Forms: top-tier accessibility support</li>
                  <li>Notion: clean, low-friction interaction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <section ref={processRef}>
        <h2 className="text-3xl py-16 px-14 text-left font-bold">
          Redesigning The Notion Checkbox
        </h2>
        <div className="w-full flex flex-row py-16 px-14 bg-opacity-70 relative">
          {/* Sidebar Navigation */}
          <div className="w-1/4">
            <nav className="sticky top-1/2 transform -translate-y-1/2 space-y-4">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-lg font-semibold text-left px-4 py-2 transition rounded-lg ${
                    activeSection === id
                      ? "bg-[#E4EFFA] text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="w-3/4 space-y-16">
            {/* Original State Models */}
            <section id="original-models">
              <h2 className="text-3xl font-bold">Original State Models</h2>
              <p className="mt-4 mb-6">
                To identify potential improvements in Notion's UI, the first
                step was to map out its current design by visualizing how users
                interact with the component in its existing state.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative flex flex-col items-center">
                  <p className="text-lg font-semibold text-center mb-2">
                    Mouse/Trackpad Interaction
                  </p>
                  <div
                    className="overflow-hidden rounded-lg cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/accessible components/OriginalMouseUser.png"
                      )
                    }
                  >
                    <img
                      src="/images/accessible components/OriginalMouseUser.png"
                      alt="Original Mouse State Model"
                      className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="relative flex flex-col items-center">
                  <p className="text-lg font-semibold text-center mb-2">
                    Keyboard Interaction
                  </p>
                  <div
                    className="overflow-hidden rounded-lg cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/accessible components/OriginalKeyboardUser.png"
                      )
                    }
                  >
                    <img
                      src="/images/accessible components/OriginalKeyboardUser.png"
                      alt="Original Keyboard State Model"
                      className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Identified Pain Points & Needs */}
            <section id="pain-points">
              <h2 className="text-3xl font-bold mb-16">
                Identified Pain Points & Needs
              </h2>

              <div className="pl-8">
                <p className="text-lg text-gray-700 leading-relaxed text-left mb-8">
                  A closer look at the interaction model reveals several
                  usability challenges that disrupt user flow and create
                  inconsistencies in expected behavior. These issues impact both
                  mouse and keyboard users, introducing friction in an otherwise
                  simple action. Below are the key areas that need improvement.
                </p>

                {/* Mouse/Trackpad Interaction */}
                <div className="bg-[#E4EFFA] p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Mouse/Trackpad Interaction
                  </h3>
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
                    <li>
                      Two hover effects appear when hovering, causing visual
                      clutter.
                    </li>
                    <li>
                      Clicking removes hover state, even if the mouse remains
                      over the element.
                    </li>
                  </ul>
                </div>

                {/* Keyboard Interaction */}
                <div className="bg-[#E4EFFA] p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Keyboard Interaction
                  </h3>
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
                    <li>
                      Tab highlights the full property field, where both{" "}
                      <span className="font-medium">Return</span> and{" "}
                      <span className="font-medium">Space</span> work.
                    </li>
                    <li>
                      Tabbing again focuses only on the checkbox, where only{" "}
                      <span className="font-medium">Space</span> works—causing
                      inconsistency.
                    </li>
                  </ul>
                </div>

                {/* Overall Usability Considerations */}
                <div className="bg-[#E4EFFA] p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Overall Usability Considerations
                  </h3>
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
                    <li>Multiple hover states add noise and cognitive load.</li>
                    <li>
                      Inconsistent behavior makes the interaction feel
                      unpredictable.
                    </li>
                  </ul>
                </div>

                {/* Suggested Improvements (Standalone Section) */}
                <div className="border-4 border-[#E4EFFA] p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">
                    Suggested Improvements
                  </h3>
                  <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
                    <li>
                      Unify hover behavior to reduce clutter and improve
                      clarity.
                    </li>
                    <li>
                      Ensure <span className="font-medium">Return</span> and{" "}
                      <span className="font-medium">Space</span> both toggle
                      checkboxes consistently.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Modified State Models */}
            <section id="redesigned-models" className="ml-16">
              <h2 className="text-3xl font-bold mb-16">
                Redesigned State Models
              </h2>

              <div className="flex mt-4 mb-6">
                <div className="w-1/3 pr-4 text-left">
                  <h3 className="text-2xl font-semibold">
                    Redesigned Mouse/Trackpad Interaction Model
                  </h3>
                  <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Consolidated two redundant hover states
                        <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                          <li>
                            Introduced clarity by removing visual confusion.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Added swipe-to-check interaction
                        <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                          <li>Enables quick selection of multiple items.</li>
                        </ul>
                      </li>
                      <li>
                        Streamlined multi-item interaction
                        <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                          <li>
                            Boosts efficiency and improves overall experience.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div
                  className="w-2/3 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/images/accessible components/ModifiedMouseUser.png"
                    )
                  }
                >
                  <img
                    src="/images/accessible components/ModifiedMouseUser.png"
                    alt="Redesigned Mouse/Trackpad Interaction Model"
                    className="w-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex mt-6">
                <div className="w-1/3 pr-4 text-left">
                  <h3 className="text-2xl font-semibold">
                    Redesigned Keyboard Interaction Model
                  </h3>
                  <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                    <li>
                      Dual focus paths caused inconsistency
                      <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                        <li>
                          <kbd>Return</kbd> and <kbd>Space</kbd> worked in one
                          state, only <kbd>Space</kbd> in the other.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Redundant hover states added complexity
                      <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                        <li>Users couldn’t form a clear interaction model.</li>
                      </ul>
                    </li>
                    <li>
                      Updated model for consistency and clarity
                      <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                        <li>
                          Unified hover and allowed both <kbd>Return</kbd> and{" "}
                          <kbd>Space</kbd> in all cases.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div
                  className="w-2/3 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/images/accessible components/ModifiedKeyboardUser.png"
                    )
                  }
                >
                  <img
                    src="/images/accessible components/ModifiedKeyboardUser.png"
                    alt="Redesigned Keyboard Interaction Model"
                    className="w-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex mt-6">
                <div className="w-1/3 pr-4 text-left">
                  <h3 className="text-2xl font-semibold">
                    Redesigned Mobile Interaction Model
                  </h3>
                  <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                    <li>
                      Introduced a mobile-first interaction model
                      <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                        <li>
                          Focused on enhancing usability for mobile users.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Added swipe gesture support
                      <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                        <li>
                          Aligned with native mobile behavior for familiarity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Enabled flexible input
                      <ul className="list-disc pl-6 text-sm text-[#2483E2]">
                        <li>Users can tap or swipe to toggle checkboxes.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div
                  className="w-2/3 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/images/accessible components/ModifiedMobileUser.png"
                    )
                  }
                >
                  <img
                    src="/images/accessible components/ModifiedMobileUser.png"
                    alt="Redesigned Mobile Interaction Model"
                    className="w-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </section>

            {/* Original vs. New Design */}
            <section id="comparison">
              <h2 className="text-3xl font-bold mb-16">
                Original vs. New Design
              </h2>

              {/* First layout: Image on left, text below */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div
                  className="w-full md:w-1/2 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/images/accessible components/OriginalDesign.png"
                    )
                  }
                >
                  <img
                    src="/images/accessible components/OriginalDesign.png"
                    alt="Original Mobile Interaction Model"
                    className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-8 text-left">
                  <h3 className="text-2xl font-semibold">
                    Original Checkbox Design
                  </h3>
                  <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                    <li>Simple</li>
                    <li>Inconsistent</li>
                    <li>Redundant</li>
                    <li>Unintuitive</li>
                  </ul>
                </div>
              </div>

              {/* Redesigned Section: Different layout style */}
              <div className="relative flex flex-col mb-12 md:flex-row bg-gray-50 p-8 rounded-lg shadow-lg ml-4">
                <div className="md:w-2/3 order-2 md:order-1 flex flex-col justify-center text-left">
                  <h3 className="text-2xl font-semibold">
                    Redesigned Checkbox
                  </h3>
                  <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                    <li>Simplified interactions</li>
                    <li>Consistent behavior</li>
                    <li>Enhanced accessibility</li>
                    <li>Faster task completion</li>
                  </ul>
                </div>
                <div
                  className="md:w-1/3 order-1 md:order-2 mt-4 md:mt-0 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/images/accessible components/ModifiedDesign.png"
                    )
                  }
                >
                  <img
                    src="/images/accessible components/ModifiedDesign.png"
                    alt="Redesigned Mobile Interaction Model"
                    className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Redesigns List Start */}
              <div className="ml-16">
                <div className="flex mt-4 mb-6">
                  <div className="w-1/3 pr-4 text-left">
                    <h3 className="text-2xl font-semibold">Default State</h3>
                    <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                      <li>Addition of a name field</li>
                    </ul>
                  </div>
                  <div
                    className="w-2/3 cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/accessible components/ModifiedDefaultState.png"
                      )
                    }
                  >
                    <img
                      src="/images/accessible components/ModifiedDefaultState.png"
                      alt="Redesigned Mouse/Trackpad Interaction Model"
                      className="w-full transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex mt-6">
                  <div className="w-1/3 pr-4 text-left">
                    <h3 className="text-2xl font-semibold">Hover State</h3>
                    <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                      <li>New hover color</li>
                      <li>There is only one hover state to lessen confusion</li>
                    </ul>
                  </div>
                  <div
                    className="w-2/3 cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/accessible components/ModifiedHoverState.png"
                      )
                    }
                  >
                    <img
                      src="/images/accessible components/ModifiedHoverState.png"
                      alt="Redesigned Keyboard Interaction Model"
                      className="w-full transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="w-1/3 pr-4 text-left">
                    <h3 className="text-2xl font-semibold">
                      Checked Hover State
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                      <li>
                        After checking the box, if the users mouse is still on
                        the property field it stays highlighted
                      </li>
                    </ul>
                  </div>
                  <div
                    className="w-2/3 cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/accessible components/ModifiedCheckedHoverState.png"
                      )
                    }
                  >
                    <img
                      src="/images/accessible components/ModifiedCheckedHoverState.png"
                      alt="Redesigned Mobile Interaction Model"
                      className="w-full transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="w-1/3 pr-4 text-left">
                    <h3 className="text-2xl font-semibold">Checked State</h3>
                    <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                      <li>
                        There are minimal addition to this state beside the
                        addition of the field (checked item) name
                      </li>
                    </ul>
                  </div>
                  <div
                    className="w-2/3 cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/accessible components/ModifiedCheckedState.png"
                      )
                    }
                  >
                    <img
                      src="/images/accessible components/ModifiedCheckedState.png"
                      alt="Redesigned Mobile Interaction Model"
                      className="w-full transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="w-1/3 pr-4 text-left">
                    <h3 className="text-2xl font-semibold">
                      Right Swipe Animation
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                      <li>
                        This animation shows how a user can swipe to check or
                        uncheck their box using a mouse, trackpad, or mobile
                        device
                      </li>
                    </ul>
                  </div>
                  <div
                    className="w-2/3 cursor-pointer"
                    onClick={() => setSelectedImage("/gifs/RightSwipe.gif")}
                  >
                    <img
                      src="/gifs/RightSwipe.gif"
                      alt="Redesigned Mobile Interaction Model"
                      className="w-full transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="w-1/3 pr-4 text-left">
                    <h3 className="text-2xl font-semibold">
                      Release of Swipe Animation
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2 list-disc list-outside pl-6">
                      <li>
                        This animation shows what it will look liek to a user
                        when they let go after a right swipe
                      </li>
                    </ul>
                  </div>
                  <div
                    className="w-2/3 cursor-pointer"
                    onClick={() => setSelectedImage("/gifs/LettingGo.gif")}
                  >
                    <img
                      src="/gifs/LettingGo.gif"
                      alt="Redesigned Mobile Interaction Model"
                      className="w-full transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col p-14 bg-[#E4EFFA] bg-opacity-70">
        <h2 className="text-3xl font-bold mb-6">Reflection</h2>
        <p className="text-sm text-gray-600 mb-6">
          This project helped me better understand how subtle design decisions
          shape usability and accessibility across different input methods.
          Observing user behavior revealed where components fell short—and how
          small changes could make a big impact.
        </p>
        <p className="text-gray-600 mt-2 list-disc list-outside pl-6 text-left">
          Key takeaways:
        </p>
        <ul className="text-gray-600 mt-2 list-disc list-outside pl-6 text-left">
          <li className="py-2">
            <span className="font-semibold text-[#2483E2]">
              Accessibility-first mindset:
            </span>
            <br />
            Learned to support keyboard, mouse, and touch interactions equally.
          </li>
          <li className="py-2">
            <span className="font-semibold text-[#2483E2]">
              Interaction details matter:
            </span>
            <br />
            Hover states, focus feedback, and small transitions change how users
            feel.
          </li>
          <li className="py-2">
            <span className="font-semibold text-[#2483E2]">
              Responsive by design:
            </span>
            <br />
            Built fluid layouts that adapt across screen sizes without breaking.
          </li>
          <li className="py-2">
            <span className="font-semibold text-[#2483E2]">
              Inclusive design is foundational:
            </span>
            <br />
            Accessibility shouldn’t be an add-on—it should shape the component
            from the start.
          </li>
        </ul>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#6584a2] bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen preview"
              className="max-w-full max-h-[85vh] w-auto h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibleComponents;
