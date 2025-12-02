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
  SiCoreldraw,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

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
    { name: "CorelDRAW", Icon: SiCoreldraw, iconColor: "text-[#00AA00]" },
    { name: "VS Code", Icon: VscCode, iconColor: "text-[#007ACC]" },
    { name: "GitHub", Icon: SiGithub, iconColor: "text-white" },
    { name: "Git", Icon: SiGit, iconColor: "text-[#F05032]" },
    { name: "Vercel", Icon: SiVercel, iconColor: "text-white" },
  ];

  // Bagi menjadi 2 baris
  const topRow = techStack.slice(0, 8);
  const bottomRow = techStack.slice(8);

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

        {/* Scrolling Container - 2 Rows */}
        <div ref={scrollRef} className="w-full space-y-6">
          {/* Baris Atas - Kanan ke Kiri */}
          <div className="w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-800 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-6 animate-scroll-right-to-left hover:pause-scroll">
              {[1, 2, 3].map((set) =>
                topRow.map((tech, index) => (
                  <div
                    key={`top-${set}-${index}`}
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

          {/* Baris Bawah - Kiri ke Kanan */}
          <div className="w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-800 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-6 animate-scroll-left-to-right hover:pause-scroll">
              {[1, 2, 3].map((set) =>
                bottomRow.map((tech, index) => (
                  <div
                    key={`bottom-${set}-${index}`}
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
        </div>

        {/* Info text */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          🎯 Hover to pause animation
        </p>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right-to-left {
          animation: scroll-right-to-left 30s linear infinite;
        }

        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 30s linear infinite;
        }

        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;
