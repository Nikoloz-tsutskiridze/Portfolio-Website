import { useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import profile from "../assets/profile.png";

function Hero() {
  const heroRef = useRef(null);

  return (
    <section
      className="grid min-h-screen grid-cols-1 items-center justify-center gap-8 pt-16 lg:grid-cols-2 lg:pt-24"
      rel={heroRef}
    >
      {/* Left content */}
      <div className="flex flex-col items-center lg:items-start lg:text-left">
        <div className="mt-5 lg:mt-18">
          <h1 className="hero-title text-4xl lg:text-5xl mb-1">
            {PROFILE.name}
          </h1>
          <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-left text-2xl tracking-tighter text-transparent mb-3">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-left lg:text-2xl">
          {PROFILE.subheading}
        </p>
        <a
          href="/Nikoloz-Tsutskiridze.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
        >
          <span>Download Resume</span>
          <RiArrowRightUpLine />
        </a>
      </div>

      {/* Right content (Image) */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={profile}
          alt={PROFILE.name}
          width={400}
          height={400}
          className="hero-img rounded-full border border-purple-300/20 p-1"
        />
      </div>
    </section>
  );
}

export default Hero;
