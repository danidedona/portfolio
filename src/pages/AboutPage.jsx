import React from "react";
import PhotoGrid from "../components/PhotoGrid";

const colors = {
  grey: "#D9D9D9",
  pink: "#9e008c",
  bg: "#fcf8f3",
};

const aboutImages = [
  {
    src: "/images/about/takingphoto.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/pac.jpeg",
    width: 5,
    height: 4,
  },
  {
    src: "/images/about/tulips.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/thumbsup.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/windmill.jpeg",
    width: 5,
    height: 3,
  },
  {
    src: "/images/about/canes.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/crepe.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/eating.jpeg",
    width: 4,
    height: 5,
  },

  {
    src: "/images/about/swe.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/takingphoto2.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/upsidedown.jpeg",
    width: 4,
    height: 5,
  },
  {
    src: "/images/about/looking.jpeg",
    width: 5,
    height: 3,
  },
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
          <strong>creative developer</strong> passionate about building
          thoughtful digital experiences that blend logic with a little bit of
          whimsy.
        </p>

        {/* Academic Journey */}
        <p className="mb-4 leading-relaxed">
          I arrived at Brown torn between <strong>Computer Science</strong> and{" "}
          <strong>Computer Engineering</strong>, but after a year of doing both,
          I realized software was my true calling. While wrestling with circuits
          and compilers, I started taking <strong>Cognitive Science</strong>{" "}
          classes just for fun — but I quickly found myself hooked on the study
          of minds, systems, and how we interpret the world. Lucky for me,
          double majoring was possible.
        </p>

        <p className="mb-4 leading-relaxed">
          Now I spend my time exploring the intersection of computation and
          cognition — designing systems that feel intuitive and uncovering how
          perception drives action. I'm currently a{" "}
          <strong>Software Engineering Intern</strong> at{" "}
          <strong>J.P. Morgan Chase</strong> and a{" "}
          <strong>Lab Assistant</strong> in Brown's{" "}
          <strong>erception, Action and Cognition Lab</strong>, where I get to
          combine curiosity with code.
        </p>

        {/* Interests */}
        <p className="mb-4 leading-relaxed">
          Outside the techie-academic bubble, I'm a bit of a multi-hyphenate:{" "}
          <strong>dance enthusiast</strong>,{" "}
          <strong>Studio Ghibli loyalist</strong>,{" "}
          <strong>Nintendo kid at heart</strong>, and an occasional{" "}
          <strong>flower presser</strong> (you can call it botanical
          preservation if you're feeling fancy). I also dabble in{" "}
          <strong>photography</strong>, <strong>mentoring</strong>, and spend
          far too much time curating the perfect setup in{" "}
          <strong>Notion</strong>. And yes — I take my <strong>chai</strong>{" "}
          seriously.
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
          photos={aboutImages}
          onImageClick={(src) => {
            setSelectedImage(src);
            setModalOpen(true);
          }}
        />
      </div>
    </div>
  );
};

export default AboutPage;
