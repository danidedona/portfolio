import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ProjectGrid() {
  const projects = [
    {
      id: "AccessibleComponents",
      title: "Accessible Components",
      img: "/images/accessible components/OriginalKeyboardUser.png",
      category: "Web Design",
    },
    {
      id: "PersonasAndStoryboarding",
      title: "Personas & Storyboarding",
      img: "/images/personas and storyboarding/FemaleProfile.png",
      category: "Web Design",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`} // Navigate to the project page
          className="group portfolio-item block relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300"
        >
          {/* Image Container with Zoom Effect */}
          <div className="relative overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-bold">
              View Project
            </div>
          </div>

          {/* Details */}
          <div className="p-4 bg-white text-left">
            <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-500">
              {project.title}
            </h3>
            <div className="text-sm text-gray-500">{project.category}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
