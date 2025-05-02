import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// {/* Rounded Eyecatching Section */}
// <section className="w-[95%] mx-auto flex justify-center items-center bg-[var(--color-primary)] text-white text-4xl font-bold rounded-3xl p-24 shadow-lg">
// Bolded Text
// </section>

const mockupData = {
  desktop: {
    title: "Desktop View",
    description:
      "This is how the interface appears on a desktop screen, with full-width layouts and larger buttons.",
    image: "/images/responsive redesign/LargeComputerRedesign.png",
  },
  tablet: {
    title: "Tablet View",
    description:
      "This view optimizes spacing and adjusts element sizing for tablets.",
    image: "/images/responsive redesign/TabletRedesign.png",
  },
  mobile: {
    title: "Mobile View",
    description:
      "The mobile layout stacks elements vertically for smaller screens, prioritizing essential content.",
    image: "/images/responsive redesign/PhoneRedesign.png",
  },
  annotated: {
    title: "Annotated View",
    description:
      "This view provides notes for margins, padding, flexboxes, etc.",
    image: "/images/responsive redesign/annotated.png",
  },
};

const colors = {
  background: "#FFFFF7",
  primary: "#6C3A92",
  light: "#E6C7FF",
  medium: "#D0A832",
  darkpurple: "#6C3A92",
  dark: "#000000",
  text: "#000000",
};

const sections = [
  { id: "webpage", label: "Picking a Webpage" },
  { id: "problems", label: "Finding Problems" },
  { id: "style", label: "Style Guide" },
  { id: "mocks", label: "Mockups" },
  { id: "redesign", label: "Responsive Redesign" },
  { id: "takeaways", label: "Takeaways" },
];

// Topics are used for fluid word list animation
const topics = ["webpage", "problems", "style", "mocks", "redesign"];

const ResponsiveRedesign = () => {
  //////////////////////////////////////////////////////////////////////////////
  // Image Full Screen
  //////////////////////////////////////////////////////////////////////////////
  // Image is for the fullscreen view
  const [selectedImage, setSelectedImage] = useState(null);

  //////////////////////////////////////////////////////////////////////////////
  // Page Sections Via Side Menu
  //////////////////////////////////////////////////////////////////////////////
  const [activeSection, setActiveSection] = useState(null);
  const processRef = useRef(null);
  const scrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Use Effect for scrolling to sections via a menu
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

  //////////////////////////////////////////////////////////////////////////////
  // Animated Dynamic Text
  //////////////////////////////////////////////////////////////////////////////
  const [currentTopic, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const topicInterval = setInterval(() => {
      setCurrentTopicIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 3000);

    return () => clearInterval(topicInterval);
  }, []);

  const [selectedMock, setSelectedMock] = useState("desktop");

  return (
    <div
      style={{
        "--color-background": colors.background,
        "--color-primary": colors.primary,
        "--color-light": colors.light,
        "--color-medium": colors.medium,
        "--color-darkp": colors.darkpurple,
        "--color-dark": colors.dark,
        "--color-text": colors.text,
      }}
      className="w-full font-wix text-center mb-8 bg-[var(--color-background)] text-[var(--color-text)]"
    >
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <section
          className="fixed inset-0 bg-[var(--color-light)] bg-opacity-80 flex justify-center items-center z-50 p-4"
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
        </section>
      )}

      {/* Heading */}
      <section className="relative flex flex-col justify-center items-center p-14 w-full h-full">
        <div className="flex flex-col justify-center items-start text-black">
          <div className="text-7xl font-bold">
            <h1 className="text-2xl font-bold text-[var(--color-dark)]">
              CSCI1300: Responsive Redesign
            </h1>
            <p className="mt-16 mb-4 text-[var(--color-dark)]">
              Responsive Redesign
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={topics[currentTopic]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--color-primary)]"
              >
                {topics[currentTopic]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full border-b border-black my-8"></div>

          {/* Button */}
          <div className="w-full mt-6 flex justify-center ">
            <button
              onClick={scrollToProcess}
              className="w-full border-2 border-black text-black text-2xl font-semibold px-8 py-3 transition duration-300 hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
            >
              See the process
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full flex flex-row py-16 px-14 bg-[var(--color-light)]">
        {/* Left Side (3/4) */}
        <div className="w-3/4 text-left">
          <h2 className="text-4xl font-bold mb-2 text-[var(--color-dark)]">
            Redesigning the Webkinz Website
          </h2>
          <p className="text-xl mb-8">
            Modernizing the Webkinz homepage with a cleaner, more accessible
            layout based on usability heuristics and accessibility audits.
          </p>

          <p className="mb-4">
            I analyzed the original Webkinz homepage using usability principles
            and tools like WebAIM WAVE. After identifying key issues—cluttered
            visuals, poor contrast, and confusing navigation—I created a
            redesigned version that improves structure, accessibility, and
            responsiveness across devices.
          </p>
        </div>

        {/* Right Side (1/4) */}
        <div className="w-1/4 text-left pl-8 space-y-4">
          <div>
            <h3 className="text-xl font-bold">Role</h3>
            <p>UX Designer, Frontend Developer</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Duration</h3>
            <p>2 Weeks, Spring 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Tools</h3>
            <p>Figma, WebAIM WAVE, Chrome DevTools</p>
          </div>
        </div>
      </section>

      {/* Main Scroll Section */}
      <section ref={processRef}>
        <h2 className="text-3xl py-16 px-14 text-left font-bold mb-4">
          Responsive Redesign
        </h2>
        <div className="w-full flex flex-row py-16 px-14 bg-opacity-70 relative">
          {/* Sidebar Navigation */}
          <div className="w-1/4">
            <nav className="sticky top-1/2 transform -translate-y-1/2">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-lg font-semibold text-left px-4 py-2 transition rounded-lg ${
                    activeSection === id
                      ? "bg-[var(--color-light)] text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="w-3/4 space-y-4 pl-8">
            {/* Picking a Webpage */}
            <section id="webpage" className="text-left mb-16">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Picking a Webpage
              </h1>
              <p className="mt-4">
                I chose to redesign the Webkinz homepage to modernize its layout
                and improve usability, especially for new users unfamiliar with
                the nostalgic early-2000s virtual pet site.
              </p>
              <div
                className="w-2/3 mx-auto flex justify-center items-center cursor-pointer m-4"
                onClick={() =>
                  setSelectedImage("/images/responsive redesign/webkinz-og.jpg")
                }
              >
                <img
                  src="/images/responsive redesign/webkinz-og.jpg"
                  alt="Original Webkinz Design"
                  className=" rounded-lg justify-center transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mt-6">
                I chose Webkinz for its nostalgic value and the clear
                opportunity to improve its cluttered, outdated design. The site
                suffers from poor navigation, accessibility gaps, and lacks
                guidance for new users. This case study outlines the key issues
                I identified and how my redesign improves usability, clarity,
                and visual cohesion.
              </p>
            </section>

            {/* Finding Problems */}
            <section id="problems" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Finding Problems
              </h1>
              <p className="mt-4">
                I chose to redesign Webkinz to combine personal nostalgia with
                the chance to fix
                <span className="font-semibold text-[var(--color-primary)]">
                  {" "}
                  major usability issues
                </span>
                . Its current design is cluttered and confusing, especially for
                new users.
              </p>

              <div className="mt-4">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Usability Criteria</th>
                      <th className="border px-4 py-2">Problems Identified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 font-semibold text-[var(--color-darkp)]">
                        Efficiency
                      </td>
                      <td className="border px-4 py-2">
                        - Slow load times, especially Flash-based elements
                        <br />- Overwhelming UI with bright, clashing colors and
                        cluttered sections
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold text-[var(--color-darkp)]">
                        Learnability
                      </td>
                      <td className="border px-4 py-2">
                        - Lack of clear instructions for signing in or
                        navigating
                        <br />- Poor onboarding experience for new users
                        unfamiliar with Webkinz
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold text-[var(--color-darkp)]">
                        Memorability
                      </td>
                      <td className="border px-4 py-2">
                        - Disorganized navigation structure with scattered links
                        <br />- Non-intuitive menus that make it hard to find
                        specific sections
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-8">
                Accessibility Issues (WebAIM WAVE Report)
              </h2>
              <ul className="list-disc pl-8 mt-4">
                <li>
                  <strong>Missing Alternative Text:</strong> 7 images lack
                  descriptive alt text. The only existing alt text is
                  placeholder text ("..."), which doesn't aid screen reader
                  users.
                </li>
                <li className="mb-4">
                  <strong>Low Contrast Errors:</strong> 17 instances of low
                  contrast, especially with light blue text on white
                  backgrounds, making content difficult to read for users with
                  visual impairments.
                </li>
                <div
                  className="w-2/3 mx-auto flex justify-center items-center cursor-pointer mb-16"
                  onClick={() =>
                    setSelectedImage("/images/responsive redesign/contrast.png")
                  }
                >
                  <img
                    src="/images/responsive redesign/contrast.png"
                    alt="Contrast Report"
                    className=" rounded-lg justify-center transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </ul>
            </section>

            {/* Visual Design Style Guide */}
            <section id="style" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Visual Design Style Guide
              </h1>
              <p className="mt-4">
                For the Webkinz redesign, I kept the original color palette to
                preserve nostalgia, while updating the interface to feel more{" "}
                <span className="font-semibold text-[var(--color-primary)]">
                  cohesive
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[var(--color-primary)]">
                  user-friendly
                </span>
                . The design stays playful and kid-friendly, but incorporates
                modern UI patterns for improved{" "}
                <span className="font-semibold text-[var(--color-primary)]">
                  usability
                </span>
                .
              </p>
              <p className="mt-4">
                The{" "}
                <span className="font-semibold text-[var(--color-primary)]">
                  style guide
                </span>{" "}
                includes key elements to ensure consistency—like hover and
                click-ready buttons, readable yet playful fonts, and updated
                logos aligned with the brand.
              </p>
              <p className="mt-4">
                Below are the main sections of the style guide:
              </p>

              <div className="mt-4 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Color Palette */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--color-darkp)]">
                    Color Palette
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Bright, friendly colors from original</li>
                    <li>Vibrant accents for emphasis</li>
                    <li>Balanced with neutral tones</li>
                  </ul>
                </div>

                {/* Logos */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--color-darkp)]">
                    Logos
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Consistent with Webkinz branding</li>
                    <li>Recognizable and familiar</li>
                    <li>Adapted to fit modern design</li>
                  </ul>
                </div>

                {/* Text Styles */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--color-darkp)]">
                    Text Styles
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Playful fonts for headings/buttons</li>
                    <li>Standard fonts for body text</li>
                    <li>Balanced readability and fun</li>
                  </ul>
                </div>
                {/* Buttons */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--color-darkp)]">
                    Buttons
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Playful and engaging design</li>
                    <li>Hover & click variants for interactivity</li>
                    <li>Clear feedback improves UX</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-4">Style Guide Preview</h2>
              <p>
                Below is a preview of the visual design style guide, which
                includes logos, buttons, color palette, and text styles. This
                helps in maintaining consistency throughout the redesign
                process.
              </p>

              <div
                className="w-2/3 mt-4 mx-auto flex justify-center items-center cursor-pointer"
                onClick={() =>
                  setSelectedImage("/images/responsive redesign/styleguide.png")
                }
              >
                <img
                  src="/images/responsive redesign/styleguide.png"
                  alt="Style Guide"
                  className=" rounded-lg justify-center transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </section>

            {/* Mockups */}
            <section id="mocks" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Mockups
              </h1>
              <p className="mt-4">
                To ensure the website is responsive and user-friendly across
                various devices, I created mockups for desktops, tablets, and
                phones. The design is optimized to fit different screen sizes
                while maintaining a consistent and cohesive experience.
              </p>

              <section className="p-6 bg-[var(--color-light)] rounded-lg mt-8">
                <h2 className="text-3xl font-bold mb-6">Mockup Previews</h2>

                <div className="flex justify-center space-x-4 mb-8">
                  {["desktop", "tablet", "mobile", "annotated"].map((view) => (
                    <button
                      key={view}
                      onClick={() => setSelectedMock(view)}
                      className={`px-4 py-2 rounded-full font-semibold ${
                        selectedMock === view
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {view.charAt(0).toUpperCase() + view.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Dynamic Mockup Display */}
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-4">
                    {mockupData[selectedMock].title}
                  </h3>
                  <img
                    src={mockupData[selectedMock].image}
                    alt={`${selectedMock} mockup`}
                    onClick={() =>
                      setSelectedImage(mockupData[selectedMock].image)
                    }
                    className="max-w-full rounded-lg shadow-lg mb-4 cursor-pointer"
                  />
                  <p className="text-center text-gray-700 max-w-lg">
                    {mockupData[selectedMock].description}
                  </p>
                </div>
              </section>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8 ">Summary</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {/* Desktop */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[var(--color-darkp)]">
                      Desktop Mockup
                    </h3>
                    <p>
                      The desktop mockup is the primary layout, as most Webkinz
                      players use laptops or desktop computers. This version
                      takes advantage of the larger screen size to display
                      content in columns and provides a clear, organized layout.
                    </p>
                  </div>

                  {/* Tablet */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[var(--color-darkp)]">
                      Tablet Mockup
                    </h3>
                    <p>
                      The tablet mockup is a resized version of the desktop
                      layout, adjusting for the smaller screen size while
                      maintaining similar functionality. This ensures that users
                      can still navigate easily and enjoy a responsive
                      experience on a tablet.
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-2 text-[var(--color-darkp)]">
                      Mobile Mockup
                    </h3>
                    <p>
                      The phone mockup rearranges the content from columns to
                      rows for better readability on smaller screens. This
                      layout ensures that users have an easy and intuitive
                      experience when accessing Webkinz from their phones.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="redesign" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Responsive Redesign
              </h1>

              <div className="w-full flex justify-center gap-8 mt-8">
                {/* Original Webkinz Column */}
                <div className="w-1/2 flex flex-col p-4">
                  <h2 className="text-2xl font-bold mb-4 text-left">
                    Old Webkinz Website
                  </h2>
                  <ul className="list-disc list-inside text-left space-y-2 mb-4">
                    <li>Unclear navigation menus</li>
                    <li>Inconsistent visual hierarchy</li>
                    <li>Non-responsive layout for mobile and tablet users</li>
                    <li>Poor color contrast and missing alt text</li>
                    <li>Limited accessibility for assistive tech users</li>
                  </ul>

                  <div
                    className="w-full flex justify-center items-center cursor-pointer mb-4"
                    onClick={() =>
                      setSelectedImage(
                        "/images/responsive redesign/webkinz.png"
                      )
                    }
                  >
                    <img
                      src="/images/responsive redesign/webkinz.png"
                      alt="Original Webkinz Website"
                      className="rounded-lg transform transition-transform duration-300 hover:scale-105 w-3/4"
                    />
                  </div>
                  <p className="mt-2">
                    <a
                      href="https://www.webkinz.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Visit the Original Webkinz Website
                    </a>
                  </p>
                </div>

                {/* Redesigned Webkinz Column */}
                <div className="w-1/2 flex flex-col p-4">
                  <h2 className="text-2xl font-bold mb-4 text-left">
                    Redesigned Webkinz Website
                  </h2>
                  <ul className="list-disc list-inside text-left space-y-2 mb-4">
                    <li>Clean, modern layout with intuitive navigation</li>
                    <li>Responsive design for desktop, tablet, and mobile</li>
                    <li>Improved visual hierarchy for easier scanning</li>
                    <li>
                      Better color contrast and consistent heading structure
                    </li>
                    <li>Descriptive alt text and support for assistive tech</li>
                  </ul>
                  <div
                    className="w-full flex justify-center items-center cursor-pointer mb-4"
                    onClick={() =>
                      setSelectedImage(
                        "/images/responsive redesign/webkinz-mine.png"
                      )
                    }
                  >
                    <img
                      src="/images/responsive redesign/webkinz-mine.png"
                      alt="My Webkinz Design"
                      className="rounded-lg transform transition-transform duration-300 hover:scale-105 w-3/4"
                    />
                  </div>
                  <p className="mt-2">
                    <a
                      href="https://responsive-redesign-danidedonas-projects.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Visit the Redesigned Webkinz Website
                    </a>
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8">Key Improvements</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <span className="font-semibold text-[var(--color-primary)]">
                    Responsive design
                  </span>{" "}
                  across desktop, tablet, and mobile.
                </li>
                <li>
                  Simplified{" "}
                  <span className="font-semibold text-[var(--color-primary)]">
                    navigation
                  </span>{" "}
                  for better usability.
                </li>
                <li>
                  Clearer{" "}
                  <span className="font-semibold text-[var(--color-primary)]">
                    visual hierarchy
                  </span>{" "}
                  with modern fonts and larger buttons.
                </li>
                <li>
                  Improved{" "}
                  <span className="font-semibold text-[var(--color-primary)]">
                    performance
                  </span>{" "}
                  and faster load times.
                </li>
                <li>
                  Better{" "}
                  <span className="font-semibold text-[var(--color-primary)]">
                    accessibility
                  </span>
                  : contrast, headings, and alt text.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">Future Enhancements</h2>
              <p className="mt-2">
                While the redesign improves usability, there are still areas to
                build on:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 mb-16">
                <li>
                  Add{" "}
                  <span className="font-semibold text-[var(--color-primary)]">
                    interactive features
                  </span>{" "}
                  and animations that stay accessible.
                </li>
                <li>
                  Improve{" "}
                  <span className="font-semibold text-[var(--color-primary)]">
                    content structure
                  </span>{" "}
                  for younger and neurodiverse users.
                </li>
                <li>
                  Further enhance{" "}
                  <span className="font-semibold text-[var(--color-primary)]">
                    mobile performance
                  </span>{" "}
                  for slower connections.
                </li>
              </ul>
            </section>

            {/* Takeaways */}
            <section id="takeaways" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Takeaways
              </h1>
              <p className="mt-4">
                This was my first time designing a fully responsive website. I
                learned how to adapt layouts across screen sizes while
                maintaining both visual appeal and usability. Here are my
                biggest takeaways:
              </p>

              <h2 className="text-2xl font-bold mt-4">What I Learned</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <span className="font-semibold text-[var(--color-primary)]">
                    Responsive Design:
                  </span>{" "}
                  Learned how to use media queries, fluid layouts, and scalable
                  components across devices.
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-primary)]">
                    Mobile UX:
                  </span>{" "}
                  Reworked content and layout to ensure clarity and
                  accessibility on smaller screens.
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-primary)]">
                    Visual + UX Balance:
                  </span>{" "}
                  Focused on making the site both user-friendly and engaging
                  without sacrificing performance.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">Challenges I Faced</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <span className="font-semibold text-[var(--color-primary)]">
                    Modernizing a Legacy Design:
                  </span>{" "}
                  Balancing nostalgia with usability was tricky but rewarding.
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-primary)]">
                    Typography:
                  </span>{" "}
                  I realized how much type affects hierarchy and
                  readability—something I'm excited to improve.
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-primary)]">
                    Performance:
                  </span>{" "}
                  Optimizing images and layouts for fast mobile load times was
                  key.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">Next Steps</h2>
              <p className="mt-4">
                I'm continuing to refine my responsive design skills and
                exploring how to better use typography and animations to enhance
                UX. This project made me more confident in designing across
                devices and thinking critically about layout, hierarchy, and
                accessibility.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsiveRedesign;
