import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiStackOverflowFill,
} from "@remixicon/react";
import { useRef } from "react";

function Contact() {
  const contactRef = useRef(null);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="mt-8 flex justify-center space-x-12">
        <a
          href="https://github.com/Nikoloz-tsutskiridze"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Visit my Github profile"
        >
          <RiGithubFill className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikoloz-tsutskiridze-990790299/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Visit my LinkedIn profile"
        >
          <RiLinkedinBoxFill className="text-3xl" />
        </a>
        <a
          href="https://stackoverflow.com/users/25669241/nikoloz-tsutskiridze"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Visit my Stackoverflow profile"
        >
          <RiStackOverflowFill className="text-3xl" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
