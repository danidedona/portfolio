import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const colors = {
  grey: "#D9D9D9",
  pink: "#9e008c",
  bg: "rgba(252, 248, 243, 0.7)",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navRef.current.offsetHeight}px`
      );
    }
  }, []);

  const linkClass = (path) =>
    `hover:text-[var(--color-pink)] transition duration-200 ${
      currentPath === path ? "underline underline-offset-4" : ""
    }`;

  const navLinks = (
    <>
      <Link to="/">Work</Link>
      <Link to="/about">About</Link>
      <Link
        to="https://drive.google.com/file/d/1mJU6puezVxKsrLDR0v6mqR2SRt5HKWTU/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Link>
    </>
  );

  return (
    <header
      ref={navRef}
      style={{
        "--color-grey": colors.grey,
        "--color-pink": colors.pink,
        "--color-bg": colors.bg,
      }}
      className="fixed top-0 left-0 w-full bg-[var(--color-bg)] bg-opacity-70 backdrop-blur-lg z-50 font-wix"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <a
          href="/"
          className="w-10 h-10 rounded-full bg-[var(--color-grey)] text-black flex items-center justify-center text-lg hover:bg-[var(--color-pink)] transition duration-200"
        >
          DD
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {navLinks}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-2 text-gray-800 font-medium">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
}
