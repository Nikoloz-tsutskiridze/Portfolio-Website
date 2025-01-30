import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { useRef } from "react";

function Contact() {
  const contactRef = useRef(null);

  return (
    <section className="py-10" id="contact" ref={contactRef}>
      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/Nikoloz-tsutskiridze"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon group transform transition-all duration-300 hover:scale-105"
          aria-label="Visit my Github profile"
        >
          <RiGithubFill className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-200 group-hover:scale-110 group-hover:text-black" />
        </a>

        <a
          href="https://www.linkedin.com/in/nikoloz-tsutskiridze-990790299/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon group transform transition-all duration-300 hover:scale-105"
          aria-label="Visit my LinkedIn profile"
        >
          <RiLinkedinBoxFill className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-200 group-hover:scale-110 group-hover:text-blue-500" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
