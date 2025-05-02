import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// {/* Rounded Eyecatching Section */}
// <section className="w-[95%] mx-auto flex justify-center items-center bg-[var(--color-primary)] text-white text-4xl font-bold rounded-3xl p-24 shadow-lg">
// Bolded Text
// </section>

const colors = {
  background: "#1A1A1A",
  primary: "#00C2FF",
  hilight: "#153A46",
  medium: "#2E5D9E",
  dark: "#FFFFFF",
  text: "#BDBDBD",
  heading: "#00C2FF",
};

const sections = [
  { id: "sketching and wireframing", label: "Sketching and Wireframing" },
  { id: "wireframe critique", label: "Wireframe Critique" },
  { id: "hifi prototype", label: "Hi-Fi Prototype" },
  { id: "final critique", label: "Final Critique" },
  { id: "reflection", label: "Reflection" },
];

// Topics are used for fluid word list animation
const topics = [
  "AI-Powered",
  "Clean Interface",
  "Developer-First",
  "Customizable",
  "Fast",
  "Central Hub",
  "Terminal Reinvented",
  "Command Center",
  "Smart Suggestions",
  "Intuitive",
  "Streamlined",
  "Efficient Workflow",
  "Context-Aware",
  "User-Guided",
  "Modern CLI",
  "Dashboard-Driven",
  "Cloud-Native",
  "Productivity-Boosting",
];

const sketchData = {
  Dani: [1, 2, 3],
  Mia: [1, 2, 3],
  Jake: [1, 2, 3],
  Efram: [1, 2, 3],
};

const sketchNotes = {
  Dani: [
    "Home Page w/ Modular Components",
    "Team Page",
    "Home Page w/ a Focus on Recent Activity",
  ],
  Mia: [
    "Home Page w/ File Information",
    "Team Page",
    "Home Page w/ Modular Components",
  ],
  Jake: ["Home Page w/ File Information", "My Account Page", "Metrics Page"],
  Efram: ["Home Page w/ Modular Components", "Team Page", "How To Use Page"],
};

const IterativeDesign = () => {
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

  return (
    <div
      style={{
        "--color-background": colors.background,
        "--color-primary": colors.primary,
        "--color-light": colors.hilight,
        "--color-medium": colors.medium,
        "--color-dark": colors.dark,
        "--color-text": colors.text,
        "--color-heading": colors.heading,
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
              className="absolute top-4 right-4 text-black text-3xl font-bold"
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
              CSCI1300: Iterative Design & Evaluation
            </h1>
            <p className="mt-16 mb-4 text-[var(--color-dark)]">Warp AI Home</p>
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

          <div className="w-full border-b border-white my-8"></div>

          {/* Button */}
          <div className="w-full mt-6 flex justify-center ">
            <button
              onClick={scrollToProcess}
              className="w-full border-2 border-black text-black bg-white text-2xl font-semibold px-8 py-3 transition duration-300 hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
            >
              See the process
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full flex flex-col md:flex-row py-16 px-14 bg-[var(--color-light)] text-[var(--color-heading)]">
        {/* Left Side (3/4) */}
        <div className="md:w-3/4 w-full text-left space-y-6">
          <h2 className="text-4xl font-bold text-[var(--color-dark)]">
            Warp Terminal: Designing the "Home" Dashboard
          </h2>
          <p className="text-xl">
            Collaborating with the team at Warp to design a centralized
            dashboard that improves discoverability and supports team-based
            terminal workflows.
          </p>
          <p>
            We partnered with Warp, an AI-powered terminal, to design their
            first \Home" experience: a dashboard to unify account management,
            team visibility, and AI tools. Our design process involved
            identifying user needs, sketching concepts, testing wireframes, and
            iterating on layouts based on direct feedback.
          </p>
          <p>
            The result is a clean, accessible homepage that introduces new users
            to Warp's collaborative features and empowers teams to work more
            efficiently with guidance, metrics, and smart suggestions.
          </p>
          <p>
            <span className="font-semibold text-[var(--color-heading)]">
              Note:
            </span>{" "}
            This was a group project. Daniela DeDona led the design of the Home
            and How to Use sections, Mia Nguyen focused on the Teams and How to
            Use sections, Jacob Stifelman worked on Metrics, and Efram Geller
            handled Billing.
          </p>
        </div>

        {/* Right Side (1/4) */}
        <div className="w-full md:w-1/4 text-left pl-0 md:pl-8 mt-10 md:mt-0 space-y-4">
          <div>
            <h3 className="text-xl font-bold">Role</h3>
            <p>Product Designer, UX Researcher</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Duration</h3>
            <p>4 Weeks, Spring 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Team</h3>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://www.linkedin.com/in/daniela-dedona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Daniela DeDona
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mia-nguyen-brownu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Mia Nguyen
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jacob-stifelman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Jacob Stifelman
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/efram-geller-ab5638246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Efram Geller
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-4">Tools</h3>
            <p>Figma, Balsamiq, Loom, React</p>
          </div>
        </div>
      </section>

      {/* Main Scroll Section */}
      <section ref={processRef}>
        <h2 className="text-3xl py-16 px-14 text-left font-bold">Process</h2>
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
                      ? "bg-[var(--color-light)] text-[var(--color-heading)] hover:text-white"
                      : "text-[var(--color-text)] hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="w-3/4 space-y-16 pl-8">
            {/* Sketching and Wireframing */}
            <section
              id="sketching and wireframing"
              className="text-left space-y-8"
            >
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline text-[var(--color-heading)]">
                Sketching and Wireframing
              </h1>

              <p>
                Our target users were{" "}
                <span className="font-semibold">desktop-based engineers</span>{" "}
                working in collaborative environments. A dashboard could reduce
                friction by surfacing relevant files, team activity, and AI
                features upfront.
              </p>

              <p>
                Each team member sketched layout concepts for the home screen
                and supporting pages, resulting in{" "}
                <span className="font-semibold">16 unique sketches</span>. We
                explored different ways to organize team management, AI
                suggestions, and product metrics.
              </p>

              {/* Group Sketch Gallery */}
              {Object.entries(sketchData).map(([name, images]) => (
                <div
                  key={name}
                  className="flex items-start space-x-4 mb-10 min-h-[220px] md:min-h-[250px]"
                >
                  {/* Name Column */}
                  <div className="w-24 shrink-0 font-semibold text-lg mt-2">
                    {name}
                  </div>

                  {/* Horizontal Scrollable Image Carousel */}
                  <div className="overflow-x-auto flex space-x-4 p-4">
                    {images.map((i) => {
                      const src = `/images/iterative design/${name.toLowerCase()}${i}.png`;
                      return (
                        <div
                          key={i}
                          className="flex-shrink-0 flex flex-col items-center text-center"
                        >
                          <img
                            src={src}
                            alt={`${name}'s sketch ${i}`}
                            onClick={() => setSelectedImage(src)}
                            className="h-[180px] w-auto rounded-md shadow-md cursor-pointer transition transform duration-300 hover:scale-105 hover:shadow-lg"
                          />
                          <p className="mt-2 text-sm text-gray-300 max-w-[180px]">
                            {sketchNotes[name][i - 1]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <p>
                After reviewing the sketches, we held a group critique and
                merged the strongest ideas into a consolidated wireframe using
                Balsamiq.
              </p>

              <p>
                We prioritized{" "}
                <span className="font-semibold">clarity and quick access</span>,
                placing team tools and metrics in a left tab panel and surfacing
                AI suggestions prominently.
              </p>

              <p>View our final wireframes and walkthrough below.</p>

              <div className="w-full h-[550px] mt-10">
                <iframe
                  src="https://www.loom.com/embed/b00de5a5c25d4ad4b480fc7bdd893360?sid=79e680d3-3914-423b-9427-6d1869a01a40"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-lg"
                  title="Loom walkthrough"
                ></iframe>
              </div>
            </section>

            {/* Wireframe Critique */}
            <section id="wireframe critique" className="text-left space-y-10">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline text-[var(--color-heading)]">
                Wireframe Critique
              </h1>

              <p>
                We presented our wireframe via Loom and received stakeholder
                feedback, including a live critique with Vanessa Cho. Below is a
                summary of that feedback and our resulting design changes.
              </p>

              {/* ===== HOME ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Home</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Too similar to WarpDrive — unclear differentiation.
                      </li>
                      <li>Dropdown crams too many features together.</li>
                      <li>
                        “Ask Warp” should stay integrated with the terminal.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-[var(--color-heading)]">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Positioned as a companion to WarpDrive, not a
                        replacement.
                      </li>
                      <li>
                        Surface actions contextually instead of in dropdowns.
                      </li>
                      <li>
                        “Ask Warp” merged with terminal input for consistency.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== TEAM ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Team</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Better grouping needed — look at Figma's structure.
                      </li>
                      <li>Clarify team vs. project assumptions.</li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-[var(--color-heading)]">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Structured teams as top-level with multiple workspaces.
                      </li>
                      <li>
                        Simplified IA and made team views more consistent.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== METRICS ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Metrics</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Tailor metrics to roles (e.g., admins want usage
                        insights).
                      </li>
                      <li>Show tangible value, like time saved via AI.</li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-[var(--color-heading)]">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Added role-specific metrics like AI usage frequency.
                      </li>
                      <li>
                        Framed impact via time savings and workflow efficiency.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== HOW TO USE ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">How to Use</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>“How to Use” is too buried.</li>
                      <li>Consider surfacing onboarding more contextually.</li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-[var(--color-heading)]">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Moved onboarding to the top of the homepage with a CTA
                        and sample code blocks.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== FINAL THOUGHTS ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Final Thoughts</h2>
                <p>
                  Our in-person critique with Vanessa reinforced many of the
                  same points, helping us prioritize which adjustments to make
                  first. Across the board, we focused on simplifying navigation,
                  clarifying hierarchy, and surfacing key functionality in the
                  most context-appropriate places.
                </p>
                <p className="italic">
                  Open question: How do we create a landing experience that's
                  helpful to new users, but doesn't overwhelm them with
                  complexity?
                </p>
              </div>
            </section>

            {/* Hi-Fi Prototype */}
            <section id="hifi prototype" className="text-left space-y-8">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline text-[var(--color-heading)]">
                Hi-Fi Prototype
              </h1>

              <p>
                We transformed our wireframes into a polished{" "}
                <span className="font-semibold ">Figma prototype</span> that
                reflects a functional Warp Home experience.
              </p>

              <p>
                <span className="font-semibold text-[var(--color-heading)]">
                  Home:
                </span>{" "}
                I surfaced onboarding with a “Getting Started” card, added an{" "}
                <span className="font-semibold">Updates</span> panel, and
                included a horizontal{" "}
                <span className="font-semibold">Recent Activity</span> carousel.
                Users can toggle between Warp Drive and Warp Home in the
                sidebar.
              </p>

              <p>
                <span className="font-semibold text-[var(--color-heading)]">
                  Teams:
                </span>{" "}
                Modeled after Figma, team tiles show member count and activity.
                Clicking slides in{" "}
                <span className="font-semibold">
                  templates, live activity, and files
                </span>
                .
              </p>

              <p>
                <span className="font-semibold text-[var(--color-heading)]">
                  Billing:
                </span>{" "}
                Removed upsells and focused on clarity: current plan, seat
                usage, invoices, and a simple{" "}
                <span className="font-semibold">Manage</span> button.
              </p>

              <p>
                <span className="font-semibold text-[var(--color-heading)]">
                  Metrics:
                </span>{" "}
                Swapped generic charts for{" "}
                <span className="font-semibold">
                  AI usage, time saved, team speed, and command stats
                </span>
                . A “Get More Metrics” CTA allows for customization.
              </p>

              <p>
                <span className="font-semibold">
                  Key changes based on feedback:
                </span>
                <ul className="list-disc list-inside space-y-1">
                  <li>Onboarding tips moved to the main view</li>
                  <li>Warp Drive retained; Warp Home sidebar toggleable</li>
                  <li>Team Members > Files follows Figma structure</li>
                  <li>Billing reduced to essentials: plan, seats, invoices</li>
                  <li>Metrics highlight user value, not internal KPIs</li>
                </ul>
              </p>

              <p>
                This prototype directly addresses critique pain points and
                delivers a clear, production-ready workflow.
              </p>

              <p>Explore the walkthrough and prototype below:</p>

              <div className="w-full h-[550px] mt-10">
                <iframe
                  src="https://www.loom.com/embed/27d983c61b4945af92e68bf9d468e08b"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-lg"
                  title="Loom walkthrough"
                ></iframe>
              </div>

              <div className="w-full h-[550px] mt-10">
                <iframe
                  src="https://embed.figma.com/proto/Z858FJzyUojk4x38pRcJ9n/Warp-AI-Home--Hi-Fi-Prototype?page-id=0%3A1&node-id=55-3485&starting-point-node-id=55%3A3485&embed-host=share"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-lg"
                  title="Figma prototype"
                ></iframe>
              </div>
            </section>

            {/* Final Critique */}
            <section id="final critique" className="text-left space-y-8">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline text-[var(--color-heading)]">
                Final Critique
              </h1>

              <p>
                After submitting our Hi-Fi prototype, we had the opportunity to
                meet with two developers from the Warp team. This in-person
                critique allowed us to ask questions, receive actionable
                feedback, and reflect on how we might iterate further if the
                project continued. Key takeaways are summarized below.
              </p>

              {/* ===== FINAL THOUGHTS ===== */}
              <div className="text-left space-y-6">
                <h2 className="text-xl font-bold">Final Thoughts</h2>
                <p>
                  The session clarified how experienced developers value
                  clarity, focus, and non-intrusive onboarding in technical
                  tools. It challenged us to rethink parts of our layout and
                  consider how to deliver guidance without disrupting expert
                  workflows.
                </p>

                <ol className="list-inside space-y-2">
                  <li>
                    <span className="text-[var(--color-heading)] font-semibold">
                      1.
                    </span>{" "}
                    Make the Home view an optional, secondary tab rather than
                    the default landing experience.
                  </li>
                  <li>
                    <span className="text-[var(--color-heading)] font-semibold">
                      2.
                    </span>{" "}
                    Consolidate navigation by combining Settings, Warp Drive,
                    and Team access into a single, streamlined sidebar.
                  </li>
                  <li>
                    <span className="text-[var(--color-heading)] font-semibold">
                      3.
                    </span>{" "}
                    Break up complex views like Billing and Metrics into
                    cleaner, role-specific sections.
                  </li>
                  <li>
                    <span className="text-[var(--color-heading)] font-semibold">
                      4.
                    </span>{" "}
                    Prioritize actionable metrics (e.g., build time, error rate)
                    over abstract AI usage data.
                  </li>
                  <li>
                    <span className="text-[var(--color-heading)] font-semibold">
                      5.
                    </span>{" "}
                    Use contextual onboarding and support Home screen
                    customization for power users.
                  </li>
                </ol>

                <p className="italic">
                  Open question: How do we guide new users without overwhelming
                  power users who just want to start coding?
                </p>
              </div>
            </section>

            {/* Reflection */}
            <section id="reflection" className="text-left space-y-10">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline text-[var(--color-heading)]">
                Reflection
              </h1>

              {/* Intro */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">What I Learned</h2>
                <p>
                  This project taught me how to move beyond aesthetics and focus
                  on solving real problems for real users. Working directly with
                  a startup pushed me to ask better questions, interpret
                  feedback critically, and iterate with purpose. It was a crash
                  course in balancing user needs with product constraints.
                </p>
              </div>

              {/* Blockquote / Highlight */}
              <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 italic">
                "Design isn't just about screens — it's about clarity,
                intention, and impact."
              </blockquote>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IterativeDesign;
