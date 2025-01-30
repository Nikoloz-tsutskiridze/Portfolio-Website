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
  }, []);

  return (
    <section
      className="relative grid min-h-screen grid-cols-1 items-center justify-center gap-8 pt-16 sm:px-10 lg:grid-cols-2 lg:pt-2"
      id="home"
      ref={heroRef}
    >
      {/* Left content */}
      <div className="flex justify-center lg:justify-start px-2">
        <div className="relative w-[400px] h-[400px] rounded-full wave-border">
          <img
            src={profile}
            alt={PROFILE.name}
            className="hero-img border border-gray-500 rounded-full w-full h-full object-cover p-1"
          />
        </div>
      </div>

      {/* Right content */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="mt-5 lg:mt-18">
          <h1 className="hero-title mb-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            {PROFILE.name}
          </h1>
          <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-2xl tracking-tighter text-transparent mb-3">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl lg:pl-3 text-lg sm:text-[16px] tracking-widew ml-10 lg:text-[20px] lg:mb-4 lg:ml-[-8px] text-left">
          {PROFILE.subheading}
        </p>

        <div className="flex text-center mt-2">
          <a
            href="/Nikoloz-Tsutskiridze.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Nikoloz-Tsutskiridze-Resume.pdf"
            className="hero-btn flex gap-3 items-center rounded-full border border-white-200/50 text-white px-5 py-3 text-sm sm:text-base font-medium tracking-tighter hover:shadow-xl bg-gradient-to-r from-purple-900 to-indigo-0 transition-transform transform "
          >
            <span>Download Resume</span>
            <RiArrowRightUpLine className="ml-1 text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
