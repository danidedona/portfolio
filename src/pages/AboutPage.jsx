import React from "react";
import PhotoGrid from "../components/PhotoGrid";

const colors = {
  grey: "#D9D9D9",
  pink: "#F6A6B9",
  bg: "#fcf8f3",
};

const aboutImages = [
  "/images/about/takingphoto.jpeg",
  "/images/about/thumbsup.jpeg",
  "/images/about/canes.jpeg",
  "/images/about/crepe.jpeg",
  "/images/about/pac.jpeg",
  "/images/about/museum.jpeg",
  "/images/about/upsidedown.jpeg",
  "/images/about/windmill.jpeg",
  "/images/about/tulips.jpeg",
  "/images/about/looking.jpeg",
];

const AboutPage = () => {
  return (
    <div
      style={{
        "--color-grey": colors.grey,
        "--color-pink": colors.pink,
        "--color-bg": colors.bg,
        minHeight: "calc(90vh - var(--navbar-height))", // this is the key line
      }}
      className="w-full bg-[var(--color-bg)] flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-4xl w-full font-wix text-gray-800">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">About</h1>

        {/* Intro */}
        <p className="mb-4 leading-relaxed">
          Hi! I'm <strong>Daniela</strong> (she/they). I'm a{" "}
          <strong>UX designer & creative developer</strong> passionate about
          building thoughtful digital experiences. I currently live in
          Providence and am a software engineering intern @ JPMC.
        </p>

        {/* Education + Journey */}
        <p className="mb-4 leading-relaxed">
          I study <strong>Computer Science</strong> and{" "}
          <strong>Cognitive Science</strong> at{" "}
          <strong>Brown University</strong>, where I discovered my love for
          digital interaction, accessibility, and playful design. I'm especially
          curious about how people think, click, and create online.
        </p>

        {/* Work history / experience */}
        <p className="mb-4 leading-relaxed">
          Previously, I've had a fellowship at companies like{" "}
          <strong>J.P. Morgan Chase</strong> and built internal tools,
          frontends, and prototypes for teams across tech and research. I've
          also been involved in student orgs like <strong>WiSE</strong> and{" "}
          <strong>DSI</strong>.
        </p>

        {/* Fun facts */}
        <p className="mb-4 leading-relaxed">
          I'm a big chai fan, obsessed with pixel fonts, and I spend way too
          much time organizing things in Notion.
        </p>

        {/* Links */}
        <p className="mb-6 leading-relaxed">
          Let's connect on{" "}
          <a
            href="https://www.linkedin.com/in/daniela-dedona/"
            className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , explore code on{" "}
          <a
            href="https://github.com/danidedona"
            className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          , or{" "}
          <a
            href="mailto:daniela_dedona@brown.edu"
            className="text-[var(--color-pink)] underline hover:text-[var(--color-pink)]"
          >
            send me an email
          </a>
          .
        </p>

        {/* Image collage */}
        <PhotoGrid
          images={aboutImages}
          columns={4}
          onImageClick={(src) => {
            setSelectedImage(src); // optional if you're using a modal
            setModalOpen(true);
          }}
        />
      </div>
    </div>
  );
};

export default AboutPage;
