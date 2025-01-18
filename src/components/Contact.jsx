import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { useRef } from "react";

function Contact() {
  const contactRef = useRef(null);

  return (
    <section id="contact" ref={contactRef}>
      <div className="mt-4 ml-2 flex justify-center space-x-4">
        <a
          href="https://github.com/Nikoloz-tsutskiridze"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Visit my Github profile"
        >
          <RiGithubFill size={32} />
        </a>

        <a
          href="https://www.linkedin.com/in/nikoloz-tsutskiridze-990790299/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Visit my LinkedIn profile"
        >
          <RiLinkedinBoxFill size={32} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
