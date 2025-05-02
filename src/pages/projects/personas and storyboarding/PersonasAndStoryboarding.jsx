import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// {/* Rounded Eyecatching Section */}
// <section className="w-[95%] mx-auto flex justify-center items-center bg-[var(--color-primary)] text-white text-4xl font-bold rounded-3xl p-24 shadow-lg">
// Bolded Text
// </section>

const colors = {
  background: "#FBFCF6",
  primary: "#F7D325",
  light: "#FFEC9F",
  medium: "#D0A832",
  dark: "#524B43",
  text: "#524B43",
};

const sections = [
  { id: "preparing", label: "Preparing" },
  { id: "recording-observations", label: "Recording Observations" },
  { id: "personas", label: "Personas" },
  { id: "storyboarding", label: "Storyboarding" },
  { id: "takeaways", label: "Takeaways" },
];

// Topics are used for fluid word list animation
const topics = [
  "What do users value most?",
  "How do users make decisions?",
  "What challenges do users face?",
  "What motivates users?",
  "What do users need?",
  "How do users define success?",
  "What frustrates users?",
  "What goals do users have?",
  "What influences users' actions?",
  "How do users solve problems?",
  "What tools do users prefer?",
  "What makes users trust a product?",
  "What features do users prioritize?",
  "How do users feel about the experience?",
  "What is the ideal user journey?",
];

const PersonasAndStoryboarding = () => {
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
        "--color-light": colors.light,
        "--color-medium": colors.medium,
        "--color-dark": colors.dark,
        "--color-text": colors.text,
      }}
      className="w-full font-wix text-center mb-8 bg-[var(--color-background)] text-[var(--color-text)]"
    >
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <section
          className="fixed inset-0 bg-[var(--color-dark)] flex justify-center items-center z-50 p-4"
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
              CSCI1300: Personas & Storyboarding
            </h1>
            <p className="mt-16 mb-4 text-[var(--color-dark)]">
              Personas and Storyboarding
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={topics[currentTopic]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--color-primary)] text-5xl"
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
            Personas & Storyboarding: The Tipping Interface
          </h2>
          <p className="text-xl mb-8">
            Observing real users at Kung Fu Tea to uncover pain points and build
            data-driven personas for a more intuitive tipping interface.
          </p>

          <p className="mb-4">
            I observed how users interacted with the tipping interface at Kung
            Fu Tea to identify pain points and behavioral patterns. Based on
            these findings, I developed personas and storyboards to highlight
            key usability challenges and opportunities for a smoother, more
            respectful tipping experience.
          </p>
        </div>

        {/* Right Side (1/4) */}
        <div className="w-1/4 text-left pl-8 space-y-4">
          <div>
            <h3 className="text-xl font-bold">Role</h3>
            <p>UX Researcher, Interaction Designer</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Duration</h3>
            <p>2 Weeks, Spring 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Tools</h3>
            <p>Figma, Google Docs, Storyboard Templates</p>
          </div>
        </div>
      </section>

      {/* Main Scroll Section */}
      <section ref={processRef}>
        <h2 className="text-3xl py-16 px-14 text-left font-bold">
          Studying User Interfaces
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
            {/* Section 1 */}
            <section id="preparing" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Preparing
              </h1>
              <p className="mt-4 mb-6">
                I decided to study tipping interfaces after realizing how often
                I interact with them, yet rarely give them much thought. While I
                was out looking for my sweet treat of the day, I paid for my
                bubble tea at Kung Fu Tea and found myself observing the tipping
                interface after completing the transaction. It struck me as an
                interesting, everyday interface that many of us engage with
                without fully considering its design or user experience.
              </p>

              <div
                className="w-2/3 mx-auto flex justify-center items-center cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "/images/personas and storyboarding/AnnotatedInterfaceSketch.png"
                  )
                }
              >
                <img
                  src="/images/personas and storyboarding/AnnotatedInterfaceSketch.png"
                  alt="Sketch of the tipping interface with annotations"
                  className="mt-4 h-[500px] max-w-[500px] rounded-lg justify-center transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <p className="mt-4 mb-6">
                I thought it would be fun to use this tipping interface for my
                study, as it presents a unique opportunity to examine how users
                interact with it in a quick, transactional context. By observing
                real users and gathering insights, I aimed to better understand
                the factors influencing their tipping decisions, the challenges
                they face with the interface, and the improvements that could be
                made to enhance the overall experience.
              </p>

              {/* Problem & Key Components Section */}
              <section id="problem-key-components">
                <h2 className="text-xl font-bold mt-8 pt-4">
                  The Problem & How the Interface Works
                </h2>

                <p className="mt-4 mb-6">
                  As digital payments replace cash, it's harder for service
                  workers to receive tips. This interface aims to solve that by
                  making tipping quick and easy through{" "}
                  <span className="font-bold">preset options</span> that reduce
                  friction and encourage action.
                </p>

                <p className="mb-6">
                  Core components include{" "}
                  <span className="font-bold">preset tip amounts</span> (10%,
                  15%, 20%), a <span className="font-bold">“No Tip”</span>{" "}
                  button, and <span className="font-bold">custom input</span>.
                  {""}
                  <span className="bg-[var(--color-light)] text-black px-1 rounded">
                    These elements can introduce social pressure and bias
                  </span>
                  , making it essential to understand how users interact with
                  each feature.
                </p>
              </section>

              <h2 className="mt-8 pt-4 text-xl font-bold text-[var(--color-medium)]">
                Interview Questions
              </h2>
              <p className="mt-4 mb-6">
                I created a set of interview questions to better understand user
                behavior, expectations, and friction points within the tipping
                interface.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--color-light)] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-[var(--color-heading)]">
                    General Experience
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Walk me through a typical checkout experience.</li>
                    <li>What do you think when the tipping screen appears?</li>
                  </ul>
                </div>

                <div className="bg-[var(--color-light)] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-[var(--color-heading)]">
                    Expectations vs. Reality
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Did you expect a tipping prompt?</li>
                    <li>How did the actual experience compare?</li>
                  </ul>
                </div>

                <div className="bg-[var(--color-light)] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-[var(--color-heading)]">
                    Motivations & Pressure
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>What influences your tipping decision?</li>
                    <li>Have you ever felt pressured to tip?</li>
                  </ul>
                </div>

                <div className="bg-[var(--color-light)] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-[var(--color-heading)]">
                    Friction Points
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Have you ever been confused by the interface?</li>
                    <li>Do you feel rushed when tipping?</li>
                  </ul>
                </div>

                <div className="bg-[var(--color-light)] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-[var(--color-heading)]">
                    Final Thoughts
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>If you could change one thing, what would it be?</li>
                    <li>How does this compare to tipping in other settings?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="recording-observations" className="text-left pt-16">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Recording Observations
              </h1>

              <p className="mt-4 mb-6">
                I conducted user observations and interviews at midday in Kung
                Fu Tea during peak hours. My goal was to objectively observe
                tipping behavior while maintaining ethical, non-intrusive
                distance.
              </p>

              <h2 className="text-xl font-bold mt-8 pt-4 text-[var(--color-medium)]">
                Key Observations
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Users moved quickly through the payment process, interacting
                  with the tipping interface for only a few seconds.
                </li>
                <li>
                  Most users selected one of the preset tip percentages rather
                  than entering a custom tip amount.
                </li>
                <li>
                  Some users hesitated before choosing their tip amount,
                  possibly due to social pressure or indecision.
                </li>
                <li>
                  A few users tapped "No Tip" quickly, avoiding eye contact with
                  the cashier.
                </li>
                <li>
                  One user seemed surprised when the tipping screen appeared and
                  took time to read through the options before deciding.
                </li>
                <li>
                  No users appeared to struggle with the interface itself;
                  interactions were smooth and intuitive.
                </li>
                <li>
                  The presence of others in line may have influenced tipping
                  behaviors, as some users seemed more conscious of their
                  actions when others were nearby.
                </li>
              </ul>

              <p className="mt-6">
                These findings suggest that while the interface functions well,{" "}
                <span className="font-semibold">external factors</span>—like
                social dynamics and time pressure—play a big role in tipping
                behavior.
              </p>

              <h2 className="text-xl font-semibold mt-8 pt-4 text-[var(--color-medium)]">
                User Snapshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {/* User 1 */}
                <div className="bg-[var(--color-light)] p-4 rounded-md shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">User 1</h4>
                  <p className="text-sm">
                    Tips out of <span className="font-semibold">habit</span>{" "}
                    using preset amounts. Tends to tip more after{" "}
                    <span className="font-semibold">positive service</span>. Not
                    affected by the interface but aware of others watching.
                  </p>
                </div>

                {/* User 2 */}
                <div className="bg-[var(--color-light)] p-4 rounded-md shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">User 2</h4>
                  <p className="text-sm">
                    Often chooses{" "}
                    <span className="font-semibold">“No Tip”</span> but feels{" "}
                    <span className="font-semibold">guilty</span> doing so.
                    Wants more transparency around how tips are distributed.
                    Views counter service differently than dining.
                  </p>
                </div>

                {/* User 3 */}
                <div className="bg-[var(--color-light)] p-4 rounded-md shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">User 3</h4>
                  <p className="text-sm">
                    Never tips and sees it as unnecessary for quick service.
                    Finds the placement of the tipping screen a bit{" "}
                    <span className="font-semibold">uncomfortable</span> due to
                    visibility to others.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                These user perspectives revealed themes of{" "}
                <span className="font-semibold">habit</span>,{" "}
                <span className="font-semibold">social pressure</span>, and{" "}
                <span className="font-semibold">transparency</span>, which
                informed the personas developed in the next section.
              </p>
            </section>

            {/* Section 3 */}
            <section id="personas" className="text-left pt-16">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Personas
              </h1>
              <p className="mt-4 mb-6">
                Based on interviews and observations, I created two personas
                representing distinct user types. Each one captures different
                motivations, expectations, and frustrations around the tipping
                interface.
              </p>

              <div className="flex flex-col md:flex-row gap-8 mt-8">
                {/* Persona 1: Jordan */}
                <div className="flex-1 border-4 border-[var(--color-light)] p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-[var(--color-medium)]">
                    Jordan Patel
                  </h2>
                  <h3 className="text-lg italic mb-4">
                    “A thoughtful tipper who wants fairness and control.”
                  </h3>
                  <div className="text-sm mb-4">
                    <p>
                      <strong>Age:</strong> 22
                    </p>
                    <p>
                      <strong>Occupation:</strong> Barista & Student
                    </p>
                    <p>
                      <strong>Order:</strong> Matcha Latte, Oat Milk
                    </p>
                  </div>
                  <h4 className="font-semibold mb-2">
                    Interface Frustrations:
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Prefers custom tips over preset options</li>
                    <li>Feels nudged without explanation for tipping</li>
                    <li>Wants more control over when/how to tip</li>
                    <li>Finds the custom tip input too slow</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Jordan represents users who support tipping but are critical
                    of digital nudging. Their feedback highlights issues of
                    autonomy and transparency in interface design.
                  </p>
                  <div className="w-full flex justify-center mt-4">
                    <img
                      src="/images/personas and storyboarding/JordanEmpathyMap.png"
                      alt="Empathy map for Jordan Patel"
                      className="h-[400px] rounded-md cursor-pointer hover:scale-105 transition-transform"
                      onClick={() =>
                        setSelectedImage(
                          "/images/personas and storyboarding/JordanEmpathyMap.png"
                        )
                      }
                    />
                  </div>
                </div>

                {/* Persona 2: Alex */}
                <div className="flex-1 border-4 border-[var(--color-light)] p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-[var(--color-medium)]">
                    Alex Chen
                  </h2>
                  <h3 className="text-lg italic mb-4">
                    “A busy student who wants speed and minimal wait.”
                  </h3>
                  <div className="text-sm mb-4">
                    <p>
                      <strong>Age:</strong> 20
                    </p>
                    <p>
                      <strong>Occupation:</strong> Student
                    </p>
                    <p>
                      <strong>Order:</strong> Thai Milk Tea with Boba
                    </p>
                  </div>
                  <h4 className="font-semibold mb-2">
                    Interface Frustrations:
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Wants a faster, less disruptive checkout</li>
                    <li>Feels nudged by default tip percentages</li>
                    <li>Social pressure impacts tipping choices</li>
                    <li>Not enough time to think before tapping</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Alex reflects the fast-moving, frequent customer who values
                    convenience. Their responses reveal how digital tipping can
                    feel performative or intrusive.
                  </p>
                  <div className="w-full flex justify-center mt-4">
                    <img
                      src="/images/personas and storyboarding/AlexEmpathyMap.png"
                      alt="Empathy map for Alex Chen"
                      className="h-[400px] rounded-md cursor-pointer hover:scale-105 transition-transform"
                      onClick={() =>
                        setSelectedImage(
                          "/images/personas and storyboarding/AlexEmpathyMap.png"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="storyboarding" className="text-left pt-16">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Storyboarding
              </h1>

              <p className="mt-4 mb-6">
                This storyboard follows <strong>Jordan Patel</strong>, a service
                worker and thoughtful tipper, as she navigates the tipping
                interface at Kung Fu Tea. The storyboard highlights the
                emotional and psychological factors that influence her tipping
                decision.
              </p>

              <h2 className="text-2xl font-bold mt-8 pt-4 text-[var(--color-medium)]">
                Storyboard: "Tipping Under Pressure"
              </h2>
              <p className="mt-2">
                The following six frames illustrate Jordan's journey from
                entering the store to making a tipping decision and reflecting
                on the experience.
              </p>

              {/* Storyboard Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-4">
                {/* Frame 1 */}
                <div>
                  <img
                    src="/images/personas and storyboarding/Storyboard1.png"
                    alt="Jordan enters the busy store"
                    className="h-[300px] rounded-3xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/Storyboard1.png"
                      )
                    }
                  />
                  <p className="text-lg font-semibold mt-2">
                    Frame 1: Entering the Busy Store
                  </p>
                  <p className="text-gray-600">
                    She sighs—it's packed. The employees look rushed, and she
                    knows exactly how that feels.
                  </p>
                </div>

                {/* Frame 2 */}
                <div>
                  <img
                    src="/images/personas and storyboarding/Storyboard2.png"
                    alt="Jordan ordering her drink"
                    className="h-[300px] rounded-3xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/Storyboard2.png"
                      )
                    }
                  />
                  <p className="text-lg font-semibold mt-2">
                    Frame 2: Ordering Her Drink
                  </p>
                  <p className="text-gray-600">
                    She places her order, ready to enjoy something nice after a
                    tough day.
                  </p>
                </div>

                {/* Frame 3 */}
                <div>
                  <img
                    src="/images/personas and storyboarding/Storyboard3.png"
                    alt="The tipping screen appears"
                    className="h-[300px] rounded-3xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/Storyboard3.png"
                      )
                    }
                  />
                  <p className="text-lg font-semibold mt-2">
                    Frame 3: The Tipping Screen Appears
                  </p>
                  <p className="text-gray-600">
                    The screen flashes tipping options. The numbers seem high
                    for an already expensive drink, but she knows how important
                    tips are.
                  </p>
                </div>

                {/* Frame 4 */}
                <div>
                  <img
                    src="/images/personas and storyboarding/Storyboard4.png"
                    alt="Jordan hesitating on the tipping screen"
                    className="h-[300px] rounded-3xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/Storyboard4.png"
                      )
                    }
                  />
                  <p className="text-lg font-semibold mt-2">
                    Frame 4: Internal Debate
                  </p>
                  <p className="text-gray-600">
                    She wants to tip, but she also has bills to pay. She looks
                    for the "custom tip" button, but the pressure of the long
                    line makes her anxious.
                  </p>
                </div>

                {/* Frame 5 */}
                <div>
                  <img
                    src="/images/personas and storyboarding/Storyboard5.png"
                    alt="Jordan choosing the default tip"
                    className="h-[300px] rounded-3xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/Storyboard5.png"
                      )
                    }
                  />
                  <p className="text-lg font-semibold mt-2">
                    Frame 5: Giving In to the Default
                  </p>
                  <p className="text-gray-600">
                    She sighs and picks 10%—more than she planned—just to move
                    things along.
                  </p>
                </div>

                {/* Frame 6 */}
                <div>
                  <img
                    src="/images/personas and storyboarding/Storyboard6.png"
                    alt="Jordan walking away with mixed feelings"
                    className="h-[300px] rounded-3xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/Storyboard6.png"
                      )
                    }
                  />
                  <p className="text-lg font-semibold mt-2">
                    Frame 6: Walking Away with Mixed Feelings
                  </p>
                  <p className="text-gray-600">
                    She's happy to support service workers but frustrated that
                    the system pushed her into tipping more than she wanted.
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-8 text-[var(--color-medium)]">
                Key Themes Highlighted
              </h2>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>
                  <strong>Emotional Conflict:</strong> Jordan values tipping but
                  also has financial struggles of her own.
                </li>
                <li>
                  <strong>Interface Pressure:</strong> The default tip
                  percentages are high, and custom tipping is inconvenient.
                </li>
                <li>
                  <strong>Social Pressure:</strong> The long line and impatient
                  customers add stress, making Jordan settle for a tip she
                  didn't plan to give.
                </li>
                <li>
                  <strong>Lack of Control:</strong> Instead of feeling good
                  about tipping, Jordan feels frustrated that the interface
                  dictated her decision.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="takeaways" className="text-left pt-16">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Takeaways
              </h1>

              <p className="mt-4 mb-6">
                Based on the insights gathered from interviews, personas, and
                storyboarding, several key takeaways emerged that can guide
                future improvements to the tipping interface at Kung Fu Tea.
              </p>

              <h2 className="text-xl font-bold mt-6 text-[var(--color-medium)]">
                1. Personalization and Control
              </h2>
              <p className="mt-2">
                Users like Jordan value having control over their tipping
                choices. A more flexible interface that allows users to easily
                input their own tip amounts would provide a sense of autonomy
                and fairness. Additionally, clearer communication about why
                tipping is requested at a boba shop would help users feel more
                comfortable with the process.
              </p>

              <h2 className="text-xl font-bold mt-6 text-[var(--color-medium)]">
                2. Reducing Social and Interface Pressure
              </h2>
              <p className="mt-2">
                Social and interface pressure were prominent themes, especially
                for users like Alex who feel rushed during the checkout process.
                Providing more time for users to make decisions and reducing the
                prominence of default tipping options could create a less
                stressful experience for customers. An option to opt-out of
                tipping without feeling conspicuous could also alleviate
                pressure.
              </p>

              <h2 className="text-xl font-bold mt-6 text-[var(--color-medium)]">
                3. Transparency and Education
              </h2>
              <p className="mt-2">
                Users like the Hesitant Tipper expressed a desire for more
                transparency regarding how tips are distributed. Clearer
                explanations about the purpose and benefits of tipping in
                quick-service environments would help users feel more informed
                and confident in their decision-making.
              </p>

              <h2 className="text-xl font-bold mt-6 text-[var(--color-medium)]">
                4. Habitual Tipping and Social Norms
              </h2>
              <p className="mt-2">
                Many users, especially frequent customers, make tipping
                decisions based on habits or social norms rather than careful
                consideration. Understanding these habitual behaviors can help
                optimize the tipping interface to encourage appropriate tipping
                without feeling manipulative or intrusive.
              </p>

              <h2 className="text-xl font-bold mt-6 text-[var(--color-medium)]">
                5. Redesigning the Tipping Process
              </h2>
              <p className="mt-2">
                Overall, there is an opportunity to redesign the tipping
                interface to align better with user needs. Simplifying the
                tipping options, enhancing the custom tipping process, and
                offering a more personalized experience could increase user
                satisfaction and improve tipping outcomes.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonasAndStoryboarding;
