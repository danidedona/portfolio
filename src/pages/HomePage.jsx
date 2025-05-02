import ProjectGrid from "../components/ProjectGrid";

const colors = {
  grey: "#D9D9D9",
  pink: "#9e008c",
  bg: "#fcf8f3",
};

function HomePage() {
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
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Top Centered Headings */}
          <h1 className="text-3xl text-black leading-tight">
            Design meets cognition. AI meets empathy.
          </h1>
          <h2 className="text-4xl mt-6 text-gray-800">
            Now meet{" "}
            <span className="text-[var(--color-pink)] font-silkscreen">
              Daniela.
            </span>
          </h2>

          {/* Image */}
          <div className="mt-10">
            <img
              src="/images/home/main.png"
              alt="Daniela DeDona"
              className="h-72 object-cover"
            />
          </div>

          {/* Links Grid Below Image */}
          <div className="text-sm mt-10 text-gray-700 max-w-lg grid grid-cols-[minmax(0,max-content)_1fr] gap-y-2 gap-x-4 text-left">
            <div className="text-right">Software Engineering Intern at</div>
            <div>
              <a
                href="https://www.jpmorganchase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)] transition block"
              >
                J.P. Morgan Chase
              </a>
            </div>

            <div className="text-right">Research Assistant at</div>
            <div>
              <a
                href="https://research.clps.brown.edu/songlab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)] transition block"
              >
                Perception, Action & Cognition Lab
              </a>
            </div>

            <div className="text-right">Undergraduate of</div>
            <div>
              <a
                href="https://www.brown.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)] transition block"
              >
                Brown University
              </a>
            </div>

            <div className="text-right">Prospective Degrees in</div>
            <div>
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
