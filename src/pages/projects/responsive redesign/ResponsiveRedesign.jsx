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
const topics = ["webpage", "problems", "style", "mocks", "redesign", "rah"];

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
      className="w-full text-center mb-8 bg-[var(--color-background)] text-[var(--color-text)]"
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

      {/* Project Description */}
      <section className="w-full flex flex-row py-16 px-14 bg-[var(--color-light)]">
        {/* Left Side (3/4) */}
        <div className="w-3/4 text-left">
          <h2 className="text-3xl font-bold">
            Redesigning the Webkinz Website
          </h2>
          <p className="mt-8 mb-4">
            Webkinz was a huge part of many people's childhoods, but its website
            has struggled to keep up with modern usability and accessibility
            standards. The interface is cluttered, unintuitive for new users,
            and lacks clear structure or guidance. For users unfamiliar with
            Webkinz, the chaotic layout and dated design present major barriers
            to entry. For returning users, the disorganized navigation and slow
            load times make the experience frustrating.
          </p>

          <p className="my-4">
            In this project, I analyzed the Webkinz homepage using established
            usability principles— efficiency, learnability, memorability—and
            accessibility tools like WebAIM WAVE. I identified major issues
            including overwhelming visuals, lack of clear sign-in instructions,
            low-contrast text, and missing alt text on key images. Using this
            analysis, I created a clean, modern, and responsive redesign to
            improve navigation, accessibility, and overall user experience
            across devices.
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
          <h3 className="text-2xl font-bold mt-4">Research References</h3>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://wave.webaim.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                WebAIM WAVE Accessibility Tool
              </a>
            </li>
            <li>
              <a
                href="https://uxdesign.cc/ten-usability-heuristics-applied-on-websites-13b00868f8f5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Usability Heuristics Overview
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Figma (Prototyping Tool)
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Scroll Section */}
      <section ref={processRef}>
        <h2 className="text-3xl py-16 px-14 text-left font-bold">
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
          <div className="w-3/4 space-y-16 pl-8">
            {/* Picking a Webpage */}
            <section id="webpage" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Picking a Webpage
              </h1>
              <p className="mt-4">
                For this project, I chose to redesign the Webkinz homepage.
                Webkinz, a virtual pet website that was popular in the early
                2000s, has a nostalgic appeal for many who grew up with it.
                However, the current website suffers from outdated design
                choices and usability issues, particularly for new users
                unfamiliar with the site.
              </p>
              <div
                className="w-2/3 mx-auto flex justify-center items-center cursor-pointer"
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
                The decision to choose Webkinz stemmed from a personal
                connection to the platform, but also due to the opportunity to
                modernize its design while making it more user-friendly. The
                interface is cluttered with many bright colors, difficult
                navigation, and slow-loading Flash elements that hinder overall
                efficiency. Additionally, the website lacks clear guidance for
                new users and could benefit from improved accessibility and a
                more cohesive design.
              </p>
              <p className="mt-4">
                In the following sections, I will outline the usability and
                accessibility issues identified, followed by my redesign
                approach that addresses these concerns, making the website more
                user-friendly, accessible, and visually appealing.
              </p>
            </section>

            {/* Finding Problems */}
            <section id="problems" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Finding Problems
              </h1>
              <p className="mt-4">
                The decision to redesign Webkinz stemmed from both personal
                nostalgia and the need to address several usability concerns.
                While the website holds sentimental value for those who grew up
                with it, its current design can be confusing and inaccessible,
                particularly for new users unfamiliar with the platform.
              </p>
              <p className="mt-4">
                Below is a breakdown of the key usability problems identified,
                categorized by key criteria:
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
                <li>
                  <strong>Low Contrast Errors:</strong> 17 instances of low
                  contrast, especially with light blue text on white
                  backgrounds, making content difficult to read for users with
                  visual impairments.
                </li>
                <div
                  className="w-2/3 mx-auto flex justify-center items-center cursor-pointer"
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
                For the redesign of Webkinz, I used colors from the original
                website to maintain a sense of nostalgia, but aimed to create a
                more cohesive and professional experience. The design is still
                playful and vibrant to stay kid-friendly, but it incorporates
                modern UI elements to improve usability.
              </p>
              <p className="mt-4">
                The visual design style guide includes key elements to ensure
                consistency across the website. I focused on a color palette
                that keeps the playful theme while introducing a cleaner, more
                professional look. Buttons are designed with different variants
                for hovering and clicking, fonts are playful yet readable, and
                logos are consistent with the brand.
              </p>
              <p className="mt-4">
                Below are the main sections of my style guide:
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
                  <div>
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
              <p className="mt-4">
                In this section, I present a comparison between the original
                Webkinz website and the redesigned version. The goal of the
                redesign is to make the website more responsive, user-friendly,
                and visually appealing across different devices. In Part 1, I
                identified key usability issues such as confusing navigation,
                cluttered layouts, and poor performance, as well as
                accessibility concerns like low color contrast and missing
                descriptive text. The redesigned version directly addresses
                these problems to create a more inclusive, intuitive, and
                seamless experience for all users.
              </p>

              <div className="w-full flex justify-center gap-8 mt-8">
                {/* Original Webkinz Column */}
                <div className="w-1/2 flex flex-col justify-center items-center p-4">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Old Webkinz Website
                  </h2>
                  <p className="mb-4 text-center max-w-md">
                    The original Webkinz website served as the starting point
                    for my redesign. It faced multiple usability challenges
                    including unclear navigation menus, inconsistent visual
                    hierarchy, and non-responsive design that hindered mobile
                    and tablet users. Accessibility issues such as poor color
                    contrast and lack of alt text made it difficult for users
                    with visual impairments or assistive technologies to
                    navigate.
                  </p>
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
                <div className="w-1/2 flex flex-col justify-center items-center p-4">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Redesigned Webkinz Website
                  </h2>
                  <p className="mb-4 text-center max-w-md">
                    The redesigned Webkinz website improves both usability and
                    accessibility. It features a clean, modern layout with
                    intuitive navigation, optimized for desktops, tablets, and
                    mobile devices. The visual hierarchy has been clarified to
                    help users find information more easily. Accessibility
                    enhancements include improved color contrast, consistent
                    heading structures, descriptive alt text for images, and
                    responsive elements that adapt fluidly to assistive
                    technologies.
                  </p>
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
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Improved <strong>responsiveness</strong> for different screen
                  sizes, making the site fully functional across desktops,
                  tablets, and mobile devices.
                </li>
                <li>
                  Streamlined <strong>navigation structure</strong> to reduce
                  confusion and improve usability, addressing issues identified
                  in the original site.
                </li>
                <li>
                  Enhanced <strong>visual hierarchy and readability</strong>{" "}
                  with cohesive color schemes, larger buttons, and modern fonts.
                </li>
                <li>
                  Optimized <strong>performance</strong>, reducing load times
                  and eliminating unnecessary clutter for smoother user
                  experience.
                </li>
                <li>
                  Significant <strong>accessibility improvements</strong>,
                  including better color contrast, properly structured headings,
                  and descriptive alt text for all images, making the site
                  easier to use for individuals relying on screen readers or
                  with visual impairments.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">Future Enhancements</h2>
              <p>
                While the redesigned website is a significant improvement, there
                are still opportunities to further enhance the user experience
                and accessibility. Future updates may include:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Adding additional interactive features and animations while
                  ensuring they are accessible and do not interfere with
                  usability.
                </li>
                <li>
                  Improving content organization for easier navigation,
                  especially for younger users and users with cognitive
                  disabilities.
                </li>
                <li>
                  Further optimizing performance for mobile devices and
                  low-bandwidth scenarios.
                </li>
              </ul>
            </section>

            {/* Takeaways */}
            <section id="takeaways" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Takeaways
              </h1>
              <p className="mt-4">
                This project was a valuable learning experience, especially as
                it was my first time creating a mobile-responsive design. I
                learned a lot about the intricacies of designing for multiple
                screen sizes, ensuring that a website is not only visually
                appealing but also functional and user-friendly on desktops,
                tablets, and phones. Here are some of the key takeaways:
              </p>

              <h2 className="text-2xl font-bold mt-4">What I Learned</h2>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>Mobile Design Considerations:</strong> Creating a
                  mobile version of the website was a significant challenge, as
                  it required me to rethink how elements are laid out and how
                  content is displayed. Ensuring that all content remains
                  accessible and readable on smaller screens was a key lesson.
                </li>
                <li>
                  <strong>Responsive Design Principles:</strong> I gained
                  hands-on experience with media queries and flexible layouts,
                  which allowed me to create a design that adapts to different
                  screen sizes. This process involved a lot of trial and error
                  but helped me understand the importance of fluid grids and
                  scalable images.
                </li>
                <li>
                  <strong>UI/UX Balance:</strong> I learned the importance of
                  maintaining a balance between visual appeal and user
                  experience. It's not just about making a website look good,
                  but also ensuring it's intuitive, easy to navigate, and
                  functional across all devices.
                </li>
                <li>
                  <strong>Testing and Iterating:</strong> One of the biggest
                  lessons was the importance of testing the design on multiple
                  devices and screen sizes. I quickly learned that what looks
                  good on a desktop may not work well on a phone. Constant
                  iteration was necessary to fine-tune the layout and design
                  elements.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">Challenges I Faced</h2>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>Dealing with Legacy Design:</strong> The Webkinz
                  website had an outdated design that made it hard to work with
                  at first. Integrating modern design principles while
                  maintaining a nostalgic feel was a difficult balancing act.
                </li>
                <li>
                  <strong>Typography Struggles:</strong> One area I struggled
                  with was learning how to effectively implement different
                  fonts. While I kept the design simple and clean, I realized
                  that using varied fonts could further enhance visual hierarchy
                  and improve readability. Understanding how to load and use
                  custom fonts is something I want to explore and incorporate in
                  my future projects.
                </li>
                <li>
                  <strong>Responsive Breakpoints:</strong> Determining the right
                  breakpoints for different devices (desktop, tablet, and phone)
                  was a bit tricky. It took several iterations to get the design
                  looking good on all screen sizes.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Ensuring that the
                  website loads quickly on mobile devices, especially with
                  images and animations, was another challenge. I had to be
                  mindful of optimizing images and limiting the use of heavy
                  elements.
                </li>
                <li>
                  <strong>Learning Flexbox and Grid Layouts:</strong> Although I
                  had experience with layout techniques before, working with
                  Flexbox and CSS Grid for the responsive design was a learning
                  curve. However, I quickly realized how powerful these tools
                  are for building flexible and responsive layouts.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-4">Moving Forward</h2>
              <p className="mt-4">
                Going forward, I plan to continue honing my skills in responsive
                web design, focusing on optimizing the user experience for all
                devices. Additionally, I'm eager to learn more about typography
                and implementing different font families effectively, as I now
                recognize how much they can impact a site's personality and
                readability. I'm excited to apply everything I've learned to
                future projects, particularly in creating more dynamic,
                interactive, and polished web experiences.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsiveRedesign;
