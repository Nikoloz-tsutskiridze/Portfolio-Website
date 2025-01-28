import { useEffect, useRef, useState } from "react";
import { EDUCATION } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const educationRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-item", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        filter: "blur(5px)",
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, educationRef);

    return () => ctx.revert();
  }, []);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <>
      {/* Education Section */}
      <section className="py-16" id="education" ref={educationRef}>
        <div className="mx-auto max-w-full px-4">
          <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
            Education
          </h2>
          <div className="flex flex-col space-y-8">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="education-item flex flex-col lg:flex-row lg:items-center rounded-xl border border-purple-300/20 p-6"
              >
                <div className="flex-1">
                  <h3 className="mb-2 text-lg lg:text-2xl">{edu.degree}</h3>
                  <h4 className="text-lg font-medium lg:text-xl">
                    {edu.institution}
                  </h4>
                  <p className="text-sm lg:text-base">{edu.duration}</p>
                  <p className="mt-4">{edu.description}</p>
                </div>
                {edu.certificateThumbnail && (
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <img
                      src={edu.certificateThumbnail}
                      alt={`${edu.degree} certificate`}
                      className="h-42 w-48 cursor-pointer rounded-lg object-cover transition-transform hover:scale-105 lg:mt-auto lg:self-end mx-auto"
                      onClick={() => openModal(edu.certificatePDF)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              src={modalImage}
              className="w-full h-[80vh] rounded-lg"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Education;
