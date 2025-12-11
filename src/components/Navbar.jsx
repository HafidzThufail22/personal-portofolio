import { useState, useEffect } from "react";
import { HiCode } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-6xl mx-auto">
        {/* Main navbar container with rounded design */}
        <div className="backdrop-blur-sm bg-gray-900/50 rounded-full border border-blue-500/30 shadow-lg">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo with icon */}
            <div className="flex items-center space-x-2">
              <HiCode className="w-8 h-8 text-white" />
              {/* <a href="#" className="text-xl font-bold text-white">
                hafidz
              </a> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1); // Remove '#' from href
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border border-blue-500 text-blue-400 bg-blue-500/10"
                        : "text-gray-300 hover:text-blue-400 hover:border hover:border-blue-500/50 border border-transparent"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:text-blue-400 hover:border hover:border-blue-500/50 border border-transparent focus:outline-none transition-all duration-300"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="backdrop-blur-sm bg-gray-900/50 rounded-3xl border border-blue-500/30 shadow-lg px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "border border-blue-500 text-blue-400 bg-blue-500/10"
                        : "text-gray-300 hover:text-blue-400 hover:border hover:border-blue-500/50 border border-transparent"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
