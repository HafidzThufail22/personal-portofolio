import profilePhoto from "../../assets/images/Profile.jpg";
import profileTransparant from "../../assets/images/Profile_Transparant.png";
import { useInView } from "../../hooks/useInView";
import Squares from "../Squares";
import LogoLoop from "../LogoLoop";
import ProfileCard from "../ProfileCard";
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
import { VscVscode } from "react-icons/vsc";

const About = () => {
  const [headingRef, headingVisible] = useInView();
  const [imageRef, imageVisible] = useInView();
  const [contentRef, contentVisible] = useInView();
  const [statsRef, statsVisible] = useInView();
  const [skillsRef, skillsVisible] = useInView();

  // Technology stack untuk LogoLoop
  const techLogos = [
    {
      node: <SiHtml5 className="text-[#E34F26]" />,
      title: "HTML5",
    },
    {
      node: <SiCss3 className="text-[#1572B6]" />,
      title: "CSS3",
    },
    {
      node: <SiJavascript className="text-[#F7DF1E]" />,
      title: "JavaScript",
    },
    {
      node: <SiPhp className="text-[#777BB4]" />,
      title: "PHP",
    },
    {
      node: <SiReact className="text-[#61DAFB]" />,
      title: "React",
    },
    {
      node: <SiLaravel className="text-[#FF2D20]" />,
      title: "Laravel",
    },
    {
      node: <SiTailwindcss className="text-[#06B6D4]" />,
      title: "Tailwind CSS",
    },
    {
      node: <SiMysql className="text-[#4479A1]" />,
      title: "MySQL",
    },
    {
      node: <SiFigma className="text-[#F24E1E]" />,
      title: "Figma",
    },
    {
      node: <SiCanva className="text-[#00C4CC]" />,
      title: "Canva",
    },
    {
      node: <SiCoreldraw className="text-[#00AA00]" />,
      title: "CorelDRAW",
    },
    {
      node: <VscVscode className="text-[#007ACC]" />,
      title: "VS Code",
    },
    {
      node: <SiGithub className="text-white" />,
      title: "GitHub",
    },
    {
      node: <SiGit className="text-[#F05032]" />,
      title: "Git",
    },
    {
      node: <SiVercel className="text-white" />,
      title: "Vercel",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-8 md:px-16 lg:px-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0}
          squareSize={40}
          direction="diagonal"
          borderColor="#1e293b"
          hoverFillColor="#1e40af"
        />
      </div>

      {/* Border samping kanan dan kiri dengan jarak dari tepi */}
      <div className="absolute left-8 md:left-16 lg:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute right-8 md:right-16 lg:right-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>

      {/* Container dengan border box */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="border border-blue-500/30 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm bg-gray-900/10">
          <h2
            ref={headingRef}
            className={`text-4xl sm:text-5xl font-bold text-center mb-12 fade-in ${
              headingVisible ? "is-visible" : ""
            }`}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Card */}
            <div
              ref={imageRef}
              className={`flex justify-center slide-left ${
                imageVisible ? "is-visible" : ""
              }`}
            >
              <ProfileCard
                name="Hafidz Thufail Nur Ikhsan"
                title="Informatics Student"
                handle="hafidzthufailll"
                status="Available for work"
                contactText="Contact Me"
                avatarUrl={profileTransparant}
                miniAvatarUrl={profilePhoto}
                showUserInfo={true}
                enableTilt={false}
                enableMobileTilt={false}
                onContactClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>

            {/* Content */}
            <div
              ref={contentRef}
              className={`space-y-6 slide-right ${
                contentVisible ? "is-visible" : ""
              }`}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m a UI/UX designer and front-end enthusiast who enjoys shaping
                digital experiences that feel clear, intuitive, and visually
                balanced. As a student, I’m passionate about understanding how
                people interact with interfaces and how thoughtful design
                decisions can guide them smoothly through a product, creating
                experiences that are meaningful and enjoyable.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond my academic activities, I continuously strive to develop
                my skills in front-end development. Alongside my daily
                responsibilities, I also make time to deepen my understanding of
                UI/UX design. Learning new things in this field helps me
                maintain my creative flow and elevate the quality of the work I
                create.
              </p>

              <div
                ref={statsRef}
                className={`grid grid-cols-2 gap-4 pt-6 stagger-children ${
                  statsVisible ? "is-visible" : ""
                }`}
              >
                <div className="border border-blue-500/30 p-4 rounded-lg hover:border-blue-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">2+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="border border-blue-500/30 p-4 rounded-lg hover:border-blue-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">
                    24/7
                  </h3>
                  <p className="text-gray-400">Support Available</p>
                </div>
              </div>
            </div>
          </div>
          {/* Skills Section - Using LogoLoop */}
          <div
            ref={skillsRef}
            className={`w-full mt-12 fade-in ${
              skillsVisible ? "is-visible" : ""
            }`}
            style={{ height: "120px" }}
          >
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={64}
              gap={48}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
