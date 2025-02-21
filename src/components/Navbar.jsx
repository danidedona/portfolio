import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navRef.current.offsetHeight}px`
      );
    }
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white bg-opacity-50 backdrop-blur-lg shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-black transition-all duration-300 transform hover:translate-y-[-4px] hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="/about"
            className="text-black transition-all duration-300 transform hover:translate-y-[-4px] hover:text-blue-500"
          >
            About
          </a>
          <a
            href="/ideas"
            className="text-black transition-all duration-300 transform hover:translate-y-[-4px] hover:text-blue-500"
          >
            Ideas
          </a>
          <a
            href="/resume"
            className="text-black transition-all duration-300 transform hover:translate-y-[-4px] hover:text-blue-500"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
