import { useRef } from "react";
import profilePhoto from "../../assets/images/Profile.jpg";
import { useGSAP } from "../../hooks/useGSAP";
import {
  fadeIn,
  slideInLeft,
  slideInRight,
  staggerFadeIn,
} from "../../utils/scrollAnimations";

const About = () => {
  // Refs untuk target animasi
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  // Setup GSAP animations
  useGSAP(() => {
    // Animasi heading - fade in saat scroll
    fadeIn(headingRef.current, {
      duration: 1,
      start: "top 80%", // Trigger saat heading mencapai 80% dari viewport
    });

    // Animasi image - slide in dari kiri
    slideInLeft(imageRef.current, {
      duration: 1.2,
      delay: 0.2,
      distance: 100,
      start: "top 70%",
    });

    // Animasi content text - slide in dari kanan
    slideInRight(contentRef.current, {
      duration: 1.2,
      delay: 0.2,
      distance: 100,
      start: "top 70%",
    });

    // Animasi stat cards - stagger (muncul berurutan)
    staggerFadeIn(statsRef.current.children, {
      duration: 0.8,
      delay: 0.4,
      stagger: 0.15, // Delay 0.15s antar card
      direction: "bottom",
      start: "top 75%",
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <div ref={imageRef} className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <img
                  src={profilePhoto}
                  alt="Hafidz Thufail Nur Ikhsan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a UI/UX designer and front-end enthusiast who enjoys shaping
              digital experiences that feel clear, intuitive, and visually
              balanced. As a student, I’m passionate about understanding how
              people interact with interfaces and how thoughtful design
              decisions can guide them smoothly through a product, creating
              experiences that are meaningful and enjoyable.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond my academic activities, I continuously strive to develop my
              skills in front-end development. Alongside my daily
              responsibilities, I also make time to deepen my understanding of
              UI/UX design. Learning new things in this field helps me maintain
              my creative flow and elevate the quality of the work I create.
            </p>

            <div ref={statsRef} className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">3+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">24/7</h3>
                <p className="text-gray-400">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
