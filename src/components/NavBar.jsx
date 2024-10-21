import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 lg:top-4  ">
        {/* Desktop Nav */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex">
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
            <div>
              <a href="/">
                <span className="pl-2 uppercase">Nikoloz Tsutskiridze</span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
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
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="my-4 mx-4 flex flex-col gap-6 rounded-lg bg-white p-4 text-black shadow-lg">
              <ul className="flex flex-col gap-6">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block w-full text-lg"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
