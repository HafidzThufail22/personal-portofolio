import { useRef } from "react";
import { useGSAP } from "../../hooks/useGSAP";
import { fadeIn } from "../../utils/scrollAnimations";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiVercel,
  SiTailwindcss,
  SiReact,
  SiLaravel,
  SiMysql,
  SiCanva,
  SiFigma,
  SiGithub,
  SiGit,
} from "react-icons/si";

// Custom icon untuk VS Code
const VSCodeIcon = ({ className }) => (
  <div className={className} style={{ fontSize: 'inherit' }}>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
    </svg>
  </div>
);

// Custom icon untuk CorelDRAW
const CorelDrawIcon = ({ className }) => (
  <div className={className} style={{ fontSize: 'inherit' }}>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  </div>
);

const Skills = () => {
  const headingRef = useRef(null);
  const scrollRef = useRef(null);

  // Technology stack dengan logo dan warna icon
  const techStack = [
    { name: "HTML5", Icon: SiHtml5, iconColor: "text-[#E34F26]" },
    { name: "CSS3", Icon: SiCss3, iconColor: "text-[#1572B6]" },
    { name: "JavaScript", Icon: SiJavascript, iconColor: "text-[#F7DF1E]" },
    { name: "PHP", Icon: SiPhp, iconColor: "text-[#777BB4]" },
    { name: "React", Icon: SiReact, iconColor: "text-[#61DAFB]" },
    { name: "Laravel", Icon: SiLaravel, iconColor: "text-[#FF2D20]" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, iconColor: "text-[#06B6D4]" },
    { name: "MySQL", Icon: SiMysql, iconColor: "text-[#4479A1]" },
    { name: "Figma", Icon: SiFigma, iconColor: "text-[#F24E1E]" },
    { name: "Canva", Icon: SiCanva, iconColor: "text-[#00C4CC]" },
    { name: "CorelDRAW", Icon: CorelDrawIcon, iconColor: "text-[#00AA00]" },
    { name: "VS Code", Icon: VSCodeIcon, iconColor: "text-[#007ACC]" },
    { name: "GitHub", Icon: SiGithub, iconColor: "text-white" },
    { name: "Git", Icon: SiGit, iconColor: "text-[#F05032]" },
    { name: "Vercel", Icon: SiVercel, iconColor: "text-white" },
  ];

  // Setup GSAP animations
  useGSAP(() => {
    fadeIn(headingRef.current, {
      duration: 1,
      start: "top 80%",
    });

    fadeIn(scrollRef.current, {
      duration: 1,
      delay: 0.3,
      start: "top 80%",
    });
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        {/* Scrolling Container */}
        <div ref={scrollRef} className="w-full overflow-hidden relative py-8">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-800 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling track - pause on hover */}
          <div className="flex gap-6 animate-scroll-horizontal hover:pause-scroll">
            {[1, 2].map((set) =>
              techStack.map((tech, index) => (
                <div
                  key={`tech-${set}-${index}`}
                  className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-700 hover:border-blue-500 flex flex-col items-center justify-center gap-4 p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-default group"
                >
                  <tech.Icon
                    className={`text-6xl ${tech.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Info text */}
        {/* <p className="text-center text-gray-400 mt-4 text-sm">
          🎯 Hover to pause • ∞ Infinite scroll animation
        </p> */}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }

        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;
