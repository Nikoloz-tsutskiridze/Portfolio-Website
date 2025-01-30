import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setShowScrollToTop] = useState(false);

  function toggleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClick(e, href) {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowScrollToTop(heroBottom < 0); // Show button when hero is out of view
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 lg:top-4">
        {/* Desktop Nav */}
        <div className="mx-auto hidden max-w-xl items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex">
          <ul className="flex items-center gap-16">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm hover:text-stone-300"
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <button
              className="ml-auto focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <RiCloseLine className="m-2 h-6 w-6" />
              ) : (
                <RiMenu3Line className="m-2 h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Full-screen overlay for mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
            <div className="flex flex-col items-center gap-6 p-4 text-white">
              <button
                className="absolute top-4 right-4 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Close Menu"
              >
                <RiCloseLine className="h-8 w-8" />
              </button>

              <ul className="flex flex-col gap-6 items-center">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block w-full text-lg text-center"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
