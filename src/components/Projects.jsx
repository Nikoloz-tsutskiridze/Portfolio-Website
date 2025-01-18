import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap/";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        filter: "blur(3px)",
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-purple-300/20">
                <div className="group relative">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-60 w-full object-cover transition-all duration-300 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-purple-600 ease-in">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-2 rounded  bg-purple-500 px-4 py-2 text-white transition-all duration-300 hover:bg-purple-600"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-2 rounded bg-pink-500 px-4 py-2 text-white transition-all duration-300 hover:bg-pink-600"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="flex-grow p-4">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                </div>
                <div className="bottom-0 left-0 right-0 border-t p-5 border-purple-300/20">
                  <div className="mb-3 font-bold">Tech Stack:</div>
                  <ul>
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
