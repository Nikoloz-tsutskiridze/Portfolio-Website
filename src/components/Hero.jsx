import { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import profile from "../assets/profile.png";
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);
    return () => ctx.revert();
  });

  return (
    <section
      className="grid min-h-screen grid-cols-1 items-center justify-center gap-8 pt-16 lg:grid-cols-2 lg:pt-24 sm:px-10"
      id="home"
      ref={heroRef}
    >
      {/* Left content */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="mt-5 lg:mt-18">
          <h1 className="hero-title mb-1 text-3xl sm:text-4xl lg:text-5xl">
            {PROFILE.name}
          </h1>
          <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-2xl sm:text-2xl tracking-tighter text-transparent mb-3">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl p-2 text-lg sm:text-[18px] tracking-tighter lg:text-left lg:text-2xl lg:mb-4 lg:ml-[-8px] ">
          {PROFILE.subheading}
        </p>
        <a
          href="/Nikoloz-Tsutskiridze.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 text-sm sm:text-base tracking-tighter"
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
