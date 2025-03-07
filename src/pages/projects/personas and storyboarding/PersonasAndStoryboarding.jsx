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
  "What influences users’ actions?",
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
      className="w-full text-center mb-8 bg-[var(--color-background)] text-[var(--color-text)]"
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

      {/* Project Description */}
      <section className="w-full flex flex-row py-16 px-14 bg-[var(--color-light)]">
        {/* Left Side (3/4) */}
        <div className="w-3/4 text-left">
          <h2 className="text-3xl font-bold">
            Personas and Storyboarding: The Tipping Interface
          </h2>
          <p className="mt-8 mb-4">
            Interfaces are crucial because they serve as the primary point of
            interaction between users and systems, enabling users to access and
            utilize the functionality of digital tools or services. Good
            interfaces are intuitive, user-friendly, and efficient, which leads
            to better user experiences and outcomes. Tipping interfaces, in
            particular, are interesting because they involve users making quick
            financial decisions in a brief interaction, often without much prior
            thought. The design of these interfaces can influence whether users
            tip, how much they tip, and the overall satisfaction with the
            experience.
          </p>
          <p className="my-4">
            Tipping interfaces also come with specific user expectations. Users
            typically expect the process to be straightforward and easy. If the
            interface is confusing or lacks clarity, it can create frustration.
            Conversely, if the interface is too forceful or manipulative, it may
            make users uncomfortable, affecting their perception of the brand or
            service. Additionally, tipping is often guided by social norms and
            expectations, meaning that the tipping interface must strike a
            balance between encouraging users to tip and avoiding excessive
            pressure. Poor design can amplify this social pressure, while a
            well-designed interface gives users the freedom to make their own
            decisions comfortably.
          </p>
          <p className="my-4">
            Another important factor is the speed and convenience of the tipping
            process. In fast-paced environments like cafes or takeout services,
            tipping interfaces need to allow users to make decisions quickly
            without disrupting the flow of their transaction. Moreover,
            personalization in tipping interfaces can be beneficial, as they can
            take into account users' past behavior or preferences, helping to
            reduce friction and enhance the experience. Finally, tipping
            involves emotional and social components, and a thoughtful interface
            can evoke a positive emotional response from users. A well-designed
            tipping interface that considers both functional and emotional
            elements will lead to a better overall user experience, ultimately
            contributing to a positive perception of the brand or service.
          </p>

          <p className="my-4">
            In this project, I observed real users interacting with the tipping
            interface at Kung Fu Tea. The goal was to understand the user
            experience, identify pain points, and construct personas and
            storyboards that illustrate the typical user journey. By observing
            real-life interactions and conducting unbiased interviews, I gained
            valuable insights into user motivations, decision-making, and
            potential challenges with the interface. These observations were
            instrumental in helping me develop personas—archetypical
            representations of the users based on empirical data. Personas are
            essential in UX design because they provide a deeper understanding
            of user behavior, goals, and needs.
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
          <h3 className="text-2xl font-bold mt-4">Research Refences</h3>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://drive.google.com/file/d/18TK0ywaEYr1pUFQITFBo1faqVTzgxB-T/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Cooper - Personas in UX Design
              </a>
            </li>
            <li>
              <a
                href="http://www.cs.cmu.edu/~jhm/Readings/Dillman,%20Chapter%204.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Dillman - Crafting Good Questions
              </a>
            </li>
            <li>
              <a
                href="https://uxplanet.org/storyboarding-in-ux-design-b9d2e18e5fab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Babich - Storyboarding for UI/UX
              </a>
            </li>
          </ul>
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
                <h2 className="text-xl font-bold mt-8 pt-4 text-[var(--color-medium)]">
                  The Problem & How the Interface Works
                </h2>
                <p className="mt-4 mb-6">
                  The tipping interface is designed to solve the problem of
                  encouraging gratuity in cashless transactions. As digital
                  payments become the norm, customers are less likely to carry
                  cash, making it harder for service workers to receive tips.
                  The interface simplifies the tipping process by presenting
                  preset tip amounts, reducing friction and making it easy for
                  users to make quick decisions.
                </p>

                <p className="mb-6">
                  The interface typically includes a few key components:
                  <strong> preset tipping options </strong> (e.g., 10%, 15%,
                  20%), a <strong> “No Tip” button</strong> for those who choose
                  not to tip, and a<strong> custom tip entry </strong> for users
                  who prefer to set their own amount. These elements are
                  designed to streamline decision-making, but they also
                  introduce potential biases—such as social pressure to tip or
                  the default options influencing user behavior. Understanding
                  how users interact with these features is crucial to
                  evaluating the effectiveness and fairness of the interface.
                </p>
              </section>

              <h2 className="mt-8 pt-4 text-xl font-bold text-[var(--color-medium)]">
                Interview Questions
              </h2>
              <p className="mt-4 mb-6">
                To gain deeper insights into the user experience, I developed a
                set of objective questions. These questions explore user
                expectations, experiences, decision-making, and potential
                challenges encountered when interacting with the tipping
                interface.
              </p>

              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong>General Experience with the Interface</strong>
                  <ul className="list-none pl-4">
                    <li>
                      1. Can you walk me through your typical experience when
                      paying at Kung Fu Tea?
                    </li>
                    <li>
                      2. What are your thoughts when you see the tipping screen
                      after making a purchase?
                    </li>
                    <li>3. How do you decide whether or not to leave a tip?</li>
                  </ul>
                </li>

                <li>
                  <strong>Expectations vs. Reality</strong>
                  <ul className="list-none pl-4">
                    <li>
                      4. Before seeing the tipping screen, do you expect to have
                      a tipping option? Why or why not?
                    </li>
                    <li>
                      5. How does your actual experience with the tipping
                      interface compare to your expectations?
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Motivations & Decision-Making</strong>
                  <ul className="list-none pl-4">
                    <li>
                      6. What factors influence your tipping decision (e.g.,
                      service quality, social pressure, default percentages)?
                    </li>
                    <li>
                      7. Do you feel any pressure to tip when using the
                      interface? Why or why not?
                    </li>
                    <li>
                      8. Have you ever chosen “No Tip”? If so, what was your
                      thought process at that moment?
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Challenges & Friction Points</strong>
                  <ul className="list-none pl-4">
                    <li>
                      9. Have you ever experienced confusion or frustration with
                      the tipping interface? Can you describe what happened?
                    </li>
                    <li>
                      10. Do you feel the interface gives you enough time to
                      make a decision? Why or why not?
                    </li>
                    <li>
                      11. How do you feel about the preset tip percentages? Do
                      they influence your choice?
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Final Thoughts</strong>
                  <ul className="list-none pl-4">
                    <li>
                      12. If you could change anything about the tipping
                      interface, what would it be?
                    </li>
                    <li>
                      13. How does this tipping experience compare to tipping in
                      other settings, such as restaurants or delivery apps?
                    </li>
                    <li>
                      14. Do you think digital tipping interfaces like this
                      impact how often people tip? Why?
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="recording-observations" className="text-left pt-16">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Recording Observations
              </h1>

              <p className="mt-4 mb-6">
                I conducted my observations and interviews at midday in Kung Fu
                Tea, a busy time when many students and locals stop in for a
                quick drink. Given the nature of Thayer Street and College Hill,
                I anticipated that most customers would be students or young
                professionals accustomed to digital payment methods. My goal was
                to objectively observe their interactions with the tipping
                interface, noting any patterns, hesitations, or challenges. To
                ensure ethical and non-intrusive observations, I sought
                permission before conducting interviews and maintained a
                respectful distance when users interacted with the payment
                screen.
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

              <p className="mt-4">
                These observations suggest that the tipping interface plays a
                subtle yet influential role in user behavior. While the
                interface itself is functional, external factors such as social
                dynamics, tipping norms, and time constraints affect how users
                engage with it.
              </p>

              <h2 className="text-xl font-semibold mt-8 pt-4 text-[var(--color-medium)]">
                User Summaries
              </h2>

              <h4 className="text-lg font-semibold mt-4">User 1</h4>
              <p className="mt-2">
                This user visits Kung Fu Tea regularly and is familiar with the
                payment process. They mentioned that they "usually tip out of
                habit" and always select one of the preset percentages. However,
                they tend to tip more when they receive exceptional service,
                such as a friendly greeting or a customized drink request. They
                did not feel pressured by the interface but acknowledged that
                the presence of other customers might influence tipping
                decisions.
              </p>

              <h4 className="text-lg font-semibold mt-4">User 2</h4>
              <p className="mt-2">
                This user was uncertain about tipping and admitted they
                sometimes feel guilty if they choose "No Tip." They typically
                chose no tip. They appreciated the ease of selecting a preset
                percentage but wished there was more transparency about how tips
                are distributed. They also mentioned that tipping expectations
                vary by service type, and they tip less for counter-service
                transactions than full-service dining.
              </p>

              <h4 className="text-lg font-semibold mt-4">User 3</h4>
              <p className="mt-2">
                This user consistently chooses "No Tip" and does not feel
                obligated to tip at Kung Fu Tea. They view tipping as something
                reserved for table service rather than quick-service
                establishments. However, they acknowledged that the placement of
                the tipping screen makes declining a tip slightly uncomfortable,
                as it feels more visible to the cashier and other customers.
              </p>

              <p className="mt-6">
                These user perspectives provide a broad spectrum of attitudes
                toward tipping, highlighting key themes of habit, social
                pressure, and transparency in digital tipping interfaces. These
                insights directly informed the development of the two personas
                in the next section.
              </p>
            </section>

            {/* Section 3 */}
            <section id="personas" className="text-left pt-16">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Personas
              </h1>

              <p className="mt-4 mb-6">
                Based on my observations and interviews, I created two personas
                that represent key user behaviors and attitudes toward the Kung
                Fu Tea tipping interface. Each persona is based on overarching
                trends, rather than a single individual, and captures distinct
                user motivations, frustrations, and decision-making processes.
              </p>

              <div className="flex gap-8 mt-8">
                {/* Persona 1 */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[var(--color-medium)]">
                    Persona 1: Jordan Patel
                  </h2>
                  <h3 className="text-xl font-semibold mt-2">
                    "A service worker who understands tipping culture and wants
                    control over their choices."
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Age:</strong> 22
                    </li>
                    <li>
                      <strong>Occupation:</strong> Part-Time Barista & Student
                    </li>
                    <li>
                      <strong>Boba Order:</strong> Medium Matcha Latte, Light
                      Ice, Oat Milk
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-4">
                    Interface Problems for Jordan:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Preset tip options feel manipulative—they prefer entering
                      their own amount.
                    </li>
                    <li>
                      The interface doesn't explain why tipping is expected at a
                      boba shop.
                    </li>
                    <li>Lack of control over how and when to tip.</li>
                    <li>
                      Friction in the custom tip process makes quick tipping
                      harder.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Jordan represents conscious tippers who value fair tipping
                    but dislike feeling nudged. Their experience highlights the
                    ethics and psychology of digital tipping and how interface
                    design influences behavior.
                  </p>
                  <div
                    className="w-2/3 mx-auto flex justify-center items-center cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/JordanEmpathyMap.png"
                      )
                    }
                  >
                    <img
                      src="/images/personas and storyboarding/JordanEmpathyMap.png"
                      alt="Empathy map for Jordan Patel"
                      className="mt-4 h-[500px] max-w-[500px] rounded-lg justify-center transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Persona 2 */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[var(--color-medium)]">
                    Persona 2: Alex Chen
                  </h2>
                  <h3 className="text-xl font-semibold mt-2">
                    "A busy college student who grabs boba often and wants a
                    smooth checkout experience."
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Age:</strong> 20
                    </li>
                    <li>
                      <strong>Occupation:</strong> College Student
                    </li>
                    <li>
                      <strong>Boba Order:</strong> Large Thai Milk Tea with Boba
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-4">
                    Interface Problems for Alex:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      The tipping screen feels intrusive when they just want a
                      quick purchase.
                    </li>
                    <li>
                      The default options encourage tipping, even if they don't
                      feel it's necessary.
                    </li>
                    <li>
                      The social pressure of being watched influences their
                      decision.
                    </li>
                    <li>
                      They lack control over the experience—it's too quick to
                      think critically.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Alex represents the typical college student who visits Kung
                    Fu Tea often and just wants a fast, easy checkout. Their
                    experience highlights the habitual and social aspects of
                    tipping, rather than a deeply considered decision.
                  </p>
                  <div
                    className="w-2/3 mx-auto flex justify-center items-center cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        "/images/personas and storyboarding/AlexEmpathyMap.png"
                      )
                    }
                  >
                    <img
                      src="/images/personas and storyboarding/AlexEmpathyMap.png"
                      alt="Empathy map for Alex Chen"
                      className="mt-4 h-[500px] max-w-[500px] rounded-lg justify-center transform transition-transform duration-300 hover:scale-105"
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
