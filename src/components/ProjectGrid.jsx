import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const colors = {
  grey: "#D9D9D9",
  pink: "#F6A6B9",
  bg: "#fefdfb",
};

export default function ProjectGrid() {
  const projects = [
    {
      id: "AccessibleComponents",
      title: "Accessible Components",
      img: "/images/accessible components/OriginalKeyboardUser.png",
      category: ["Accessibility", "UI Design"],
    },
    {
      id: "PersonasAndStoryboarding",
      title: "Personas & Storyboarding",
      img: "/images/personas and storyboarding/FemaleProfile.png",
      category: ["UX Research", "Storytelling"],
    },
    {
      id: "ResponsiveRedesign",
      title: "Responsive Redesign",
      img: "/images/responsive redesign/webkinz-mine.png",
      category: ["Responsive", "Web Design"],
    },
    {
      id: "IterativeDesign",
      title: "Iterative Design",
      img: "/images/iterative design/warpai.avif",
      category: ["Teamwork", "Wireframes"],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      style={{
        "--color-grey": colors.grey,
        "--color-pink": colors.pink,
        "--color-translucent-pink": colors.translucentpink,
        "--color-bg": colors.bg,
      }}
      className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
    >
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="group w-full max-w-[360px] mx-auto rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-white"
        >
          {/* Image with overlay */}
          <div className="relative w-full h-[220px]">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" />
          </div>

          {/* Footer Section */}
          <div className="bg-white h-[95px] p-4 flex flex-col justify-between">
            <h3 className="text-lg text-black">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.category.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[var(--color-pink)] text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
