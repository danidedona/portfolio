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
  "/src/pages/projects/accessible components/images/ModifiedKeyboardUser.png",
  "/src/pages/projects/accessible components/images/ModifiedMobileUser.png",
  "/src/pages/projects/accessible components/images/ModifiedMouseUser.png",
  "/src/pages/projects/accessible components/images/OriginalKeyboardUser.png",
  "/src/pages/projects/accessible components/images/OriginalMouseUser.png",
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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

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
    <div className="w-full text-center mb-8">
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
              className="w-full border-2 border-black text-black text-2xl font-semibold px-8 py-3 transition duration-300 hover:bg-[#E4EFFA] hover:text-[#2483E2] hover:mix-blend-difference"
            >
              See the process
            </button>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="w-full flex flex-row py-16 px-14 bg-[#E4EFFA] bg-opacity-70">
        {/* Left Side (3/4) */}
        <div className="w-3/4 text-left">
          <h2 className="text-3xl font-bold">The Checkbox</h2>
          <p className="mt-8 mb-4">
            Accessible components are crucial because they ensure that all
            users, regardless of ability, can navigate and interact effectively.
            Accessibility in design promotes inclusion, allowing people with
            disabilities—whether related to vision, hearing, motor skills, or
            cognitive processing—to use websites and applications without
            barriers. When components are designed with accessibility in mind,
            they support a broader audience, improving usability for everyone,
            not just individuals with specific impairments.
          </p>

          <p className="my-4">
            In this project, I explored the accessibility of checkboxes. By
            analyzing three different applications, I identified key areas where
            user input—via mouse, keyboard, and touch—impacts the accessibility
            and efficiency of these components. I then redesigned one of these
            components to improve learnability, memorability, and accessibility
            for all users, including those with impairments. This case study
            highlights my approach to designing inclusive, user-friendly
            interfaces and demonstrates my ability to balance usability with
            accessibility considerations.
          </p>
        </div>

        {/* Right Side (1/4) */}
        <div className="w-1/4 text-left pl-8">
          <h3 className="text-2xl font-bold">Contribution</h3>
          <p>
            Research, Branding, UX/UI Design, Prototypes, Website Development,
            Accessible UI Components
          </p>
          <h3 className="text-2xl font-bold mt-4">Project Duration</h3>
          <p>2 Weeks</p>
          <h3 className="text-2xl font-bold mt-4">
            Websites Used For Case Studies
          </h3>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                https://mail.google.com
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                https://docs.google.com/forms
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                https://www.notion.com
              </a>
            </li>
          </ul>
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
                  <li>
                    Mouse/Touchpad interactions prioritize efficiency with
                    robust bulk selection capabilities and clear visual feedback
                    systems
                  </li>
                  <li>
                    Limited keyboard accessibility - restricted to "Select All"
                    functionality with no individual checkbox tab navigation
                  </li>
                  <li>
                    Screen reader experience suffers from confusing focus order
                    and limited navigation options
                  </li>
                  <li>
                    Mobile interface emphasizes visual appeal with profile
                    picture to checkmark transformations
                  </li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Google Forms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implements consistent color theming across all interaction
                    states for enhanced visual coherence
                  </li>
                  <li>
                    Full keyboard accessibility via tab navigation, though uses
                    counter-intuitive spacebar selection
                  </li>
                  <li>
                    Exemplary screen reader support with detailed state
                    announcements and context
                  </li>
                  <li>
                    Mobile experience maintains functional and visual parity
                    with desktop version
                  </li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Notion</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Minimalist design approach with effective visual feedback
                    mechanisms
                  </li>
                  <li>
                    Complete keyboard support with intuitive tab and enter key
                    functionality
                  </li>
                  <li>Mouse-specific animations enhance visual engagement</li>
                  <li>
                    Straightforward screen reader implementation with consistent
                    behavior
                  </li>
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
                  <li>
                    Google Forms leads in learnability with consistent feedback
                    and clear required field indicators
                  </li>
                  <li>
                    Gmail offers intuitive mouse interaction but lacks
                    discoverable keyboard functionality
                  </li>
                  <li>
                    Notion's simplified approach aids initial learning but may
                    hide advanced features
                  </li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Memorability</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Notion excels with consistent cross-platform behavior
                    reducing cognitive load
                  </li>
                  <li>
                    Google Forms leverages color theming to reinforce state
                    memory
                  </li>
                  <li>
                    Gmail's platform-specific behaviors may increase cognitive
                    burden
                  </li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gmail optimizes for mouse-based bulk operations</li>
                  <li>
                    Google Forms provides efficient keyboard navigation despite
                    spacebar requirement
                  </li>
                  <li>
                    Notion achieves balanced efficiency across all interaction
                    methods
                  </li>
                </ul>
              </div>

              <div className="flex-1 border bg-white border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gmail: Superior visual feedback for selection states</li>
                  <li>
                    Google Forms: Comprehensive accessibility and screen reader
                    support
                  </li>
                  <li>
                    Notion: Consistent cross-platform experience with minimal
                    cognitive overhead
                  </li>
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
                        "/src/pages/projects/accessible components/images/OriginalMouseUser.png"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/images/OriginalMouseUser.png"
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
                        "/src/pages/projects/accessible components/images/OriginalKeyboardUser.png"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/images/OriginalKeyboardUser.png"
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
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A closer look at the interaction model reveals several
                  usability challenges that disrupt user flow and create
                  inconsistencies in expected behavior. These issues impact both
                  mouse and keyboard users, introducing friction in an otherwise
                  simple action. Below are the key areas that need improvement.
                </p>

                {/* Mouse/Trackpad Interaction */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Mouse/Trackpad Interaction
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-left">
                    Currently, hovering over the property field triggers two
                    separate hover effects, leading to unnecessary visual
                    clutter. Additionally, when clicking on the field, the hover
                    dissapers even if the users mouse is still over it.
                  </p>
                </div>

                {/* Keyboard Interaction */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Keyboard Interaction
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-left">
                    The tab key initially highlights the entire property field,
                    allowing users to press{" "}
                    <span className="font-medium">Return</span> or{" "}
                    <span className="font-medium">Space</span> to toggle the
                    checkbox. However, pressing tab again moves focus directly
                    to the checkbox, where only the{" "}
                    <span className="font-medium">Space</span> key works. This
                    inconsistency makes navigation confusing and reduces
                    efficiency.
                  </p>
                </div>

                {/* Overall Usability Considerations */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">
                    Overall Usability Considerations
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-left">
                    These inconsistencies create unnecessary cognitive load,
                    making it difficult for users to develop a predictable
                    mental model. Multiple hover effects add noise, while
                    unpredictable toggling behavior results in unintended
                    actions.
                    <span className="block mt-2 font-medium text-gray-700">
                      Suggested Improvements:
                    </span>
                  </p>
                  <ul className="list-disc list-inside text-gray-800 mt-2 ml-4 space-y-2 text-left">
                    <li>
                      Streamline hover effects to remove redundancy and improve
                      visual clarity.
                    </li>
                    <li>
                      Ensure keyboard navigation follows a consistent logic,
                      allowing both Return and Space to toggle checkboxes.
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
                    <li>
                      Initially, the mouse and trackpad interaction had two
                      separate hover states, which caused unnecessary confusion
                      since there was no functional difference between them.
                    </li>
                    <li>
                      To improve clarity, I consolidated these into a single
                      hover state.
                    </li>
                    <li>
                      I also implemented a swipe-to-check feature, allowing
                      users to quickly check off multiple items with a simple
                      gesture.
                    </li>
                    <li>
                      This enhancement improves efficiency and provides a
                      smoother experience for users managing several selections
                      at once.
                    </li>
                  </ul>
                </div>
                <div
                  className="w-2/3 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/src/pages/projects/accessible components/images/ModifiedMouseUser.png"
                    )
                  }
                >
                  <img
                    src="/src/pages/projects/accessible components/images/ModifiedMouseUser.png"
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
                      In the original keyboard interaction model, users could
                      focus on the entire property field and check/uncheck the
                      box using both the <kbd>Return </kbd>
                      and <kbd>Space</kbd> keys.
                    </li>
                    <li>
                      However, users could also separately focus on the checkbox
                      itself, where only the <kbd>Space</kbd> key would
                      work—leading to confusion.
                    </li>
                    <li>
                      Additionally, having two different hover states added
                      unnecessary complexity and made it unclear how the
                      interaction was supposed to work.
                    </li>
                    <li>
                      To simplify this, I adjusted the model to use a single
                      hover state and ensured that both the <kbd>Return</kbd>{" "}
                      and <kbd>Space</kbd> keys consistently toggle the
                      checkbox, regardless of focus.
                    </li>
                  </ul>
                </div>
                <div
                  className="w-2/3 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/src/pages/projects/accessible components/images/ModifiedKeyboardUser.png"
                    )
                  }
                >
                  <img
                    src="/src/pages/projects/accessible components/images/ModifiedKeyboardUser.png"
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
                      I introduced a Redesigned Mobile Interaction Model to
                      enhance usability for mobile users.
                    </li>
                    <li>
                      The primary reason for adding a swiping feature was to
                      align with the natural interactions of mobile devices,
                      where swiping is a primary gesture.
                    </li>
                    <li>
                      With this new model, users can now check or uncheck a box
                      by either tapping or swiping, providing a more intuitive
                      and flexible experience.
                    </li>
                  </ul>
                </div>
                <div
                  className="w-2/3 cursor-pointer"
                  onClick={() =>
                    setSelectedImage(
                      "/src/pages/projects/accessible components/images/ModifiedMobileUser.png"
                    )
                  }
                >
                  <img
                    src="/src/pages/projects/accessible components/images/ModifiedMobileUser.png"
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
                      "/src/pages/projects/accessible components/images/OriginalDesign.png"
                    )
                  }
                >
                  <img
                    src="/src/pages/projects/accessible components/images/OriginalDesign.png"
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
                      "/src/pages/projects/accessible components/images/ModifiedDesign.png"
                    )
                  }
                >
                  <img
                    src="/src/pages/projects/accessible components/images/ModifiedDesign.png"
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
                        "/src/pages/projects/accessible components/images/ModifiedDefaultState.png"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/images/ModifiedDefaultState.png"
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
                        "/src/pages/projects/accessible components/images/ModifiedHoverState.png"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/images/ModifiedHoverState.png"
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
                        "/src/pages/projects/accessible components/images/ModifiedCheckedHoverState.png"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/images/ModifiedCheckedHoverState.png"
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
                        "/src/pages/projects/accessible components/images/ModifiedCheckedState.png"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/images/ModifiedCheckedState.png"
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
                    onClick={() =>
                      setSelectedImage(
                        "/src/pages/projects/accessible components/gifs/RightSwipe.gif"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/gifs/RightSwipe.gif"
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
                    onClick={() =>
                      setSelectedImage(
                        "/src/pages/projects/accessible components/gifs/LettingGo.gif"
                      )
                    }
                  >
                    <img
                      src="/src/pages/projects/accessible components/gifs/LettingGo.gif"
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
          In her work, Kat Holmes emphasizes the importance of inclusive design
          not just as a solution for specific health conditions but as a tool to
          address mismatches—moments when design fails to meet diverse user
          needs. By observing how the components in my design interact with
          various users, I noticed several areas where usability and
          accessibility can be improved.
        </p>
        <ul className="text-gray-600 mt-2 list-disc list-outside pl-6 text-left">
          <li className="py-2">
            The mouse, trackpad, and mobile swipe feature addresses a
            fundamental mismatch by offering a more intuitive way for users to
            interact with checkboxes. In my design, I've made sure the
            checkboxes can be activated via both mouse/trackpad clicks and
            swiping, which helps users who prefer touch-based input methods.
          </li>
          <li className="py-2">
            The previous design only accounted for the keyboard and mouse, which
            could alienate mobile users who rely on swiping. In contrast, the
            updated design ensures that all users, including those on mobile,
            have an easy and consistent way to check or uncheck boxes.
          </li>
          <li className="py-2">
            The change I made solves a mismatch by offering a uniform
            interaction model for all types of devices, removing the barriers
            between traditional input methods and new mobile-friendly gestures.
            This ensures users of all abilities, including those with limited
            motor skills, can interact with the design smoothly.
          </li>
          <li className="py-2">
            In my design, one example of accessibility impact is for users with
            limited motor skills who would find it difficult to interact with a
            small clickable area using a mouse. This would negatively affect
            their experience, whereas the swipe gesture on mobile provides a
            larger and more forgiving interaction method.
          </li>
          <li className="py-2">
            A positive impact of accessibility is seen for keyboard-only users.
            They can now easily navigate through checkboxes using both the space
            and return keys, improving usability without needing a mouse or
            trackpad.
          </li>
          <li className="py-2">
            Mouse and keyboard users are typically prioritized in design, as
            these are the most common input devices. However, this can
            inadvertently disadvantage users who rely on touch-based or
            voice-controlled interfaces, leading to a mismatch in the user
            experience for these groups.
          </li>
          <li className="py-2">
            The new model I introduced seeks to combat these mismatches by
            making the design more inclusive, ensuring that no matter the input
            method, users can interact with the interface seamlessly and
            effectively.
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
