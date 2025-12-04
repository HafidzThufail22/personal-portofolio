import { useRef } from "react";
import gsap from "gsap";
import Particles from "../Particles";
import TrueFocus from "../TrueFocus";
import { useGSAP } from "../../hooks/useGSAP";

const Home = () => {
  // Refs untuk target animasi
  const headingRef = useRef(null);
  const trueFocusRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  // Setup GSAP animations
  useGSAP(() => {
    // Animasi langsung tanpa ScrollTrigger
    // Home section tidak perlu ScrollTrigger karena selalu visible saat page load

    // Animasi heading - fade in dari opacity 0
    gsap.from(headingRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    // Animasi TrueFocus - slide in dari bawah
    gsap.from(trueFocusRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "power3.out",
    });

    // Animasi description - fade in
    gsap.from(descriptionRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.9,
      ease: "power3.out",
    });

    // Animasi buttons - stagger (muncul berurutan)
    // Gunakan fromTo untuk memastikan end state opacity = 1
    gsap.fromTo(
      buttonsRef.current.children,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []); // Empty dependency array = animasi hanya run sekali saat mount

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-0"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#cfcfcfff", "#e0e0e0ff", "#e0e0e0ff", "#e0e0e0ff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90 z-10"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-8 sm:py-0">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Hafidz Thufail Nur Ikhsan
          </span>
        </h1>

        {/* TrueFocus Animation */}
        <div ref={trueFocusRef} className="mb-8">
          <TrueFocus
            sentence="Informatics Student | UI/UX Designer | Front-End Enthusiast"
            separator=" | "
            manualMode={false}
            blurAmount={5}
            borderColor="#60a5fa"
            glowColor="rgba(96, 165, 250, 0.6)"
            animationDuration={1}
            pauseBetweenAnimations={2}
          />
        </div>

        <p
          ref={descriptionRef}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I craft intuitive digital interfaces that blend clean design with
          seamless front-end experiences.
        </p>
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
