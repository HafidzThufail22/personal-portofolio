import { useState } from "react";
import { useInView } from "../../hooks/useInView";

// Import Certificate Images
import certDasarAI from "../../assets/images/certificate/Sertif_Dasar AI_Dicoding.png";
import certDasarJS from "../../assets/images/certificate/Sertif_Dasar JavaScript_Dicoding.png";
import certWebDasar from "../../assets/images/certificate/Sertif_WebDasar_Dicoding.png";
import certSiber from "../../assets/images/certificate/Sertif_Seminar Siber Security.jpg";
import certMaroonDay from "../../assets/images/certificate/Sertif_Sekretaris_MaroonDay2024.jpg";
import certChiefOPPP from "../../assets/images/certificate/Chief OPPP Certificate.png";
import certSecretaryOPPP from "../../assets/images/certificate/Secretary OPPP Certificate.png";
import certAcaraLK1UKMIK from "../../assets/images/certificate/Sertif_Sie Acara_LK1 UKM IK.jpg";

// Import Project Images
import projectPersonalPorto from "../../assets/images/projects/personal porto project.png";
import projectDashboardToserba from "../../assets/images/projects/dashboard toserba project.png";
import projectReservationSystem from "../../assets/images/projects/reservation system project.png";
import projectArticleWebsite from "../../assets/images/projects/article website project.png";
import projectToDoList from "../../assets/images/projects/to-do list app project.png";
import projectCourseWebsite from "../../assets/images/projects/course website project.png";

const Projects = () => {
  // State untuk tab filter
  const [activeTab, setActiveTab] = useState("projects");
  // Intersection Observer hooks
  const [headingRef, headingVisible] = useInView();
  const [tabsRef, tabsVisible] = useInView();
  const [itemsRef, itemsVisible] = useInView();
  // Data Projects
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Modern and responsive portfolio website showcasing my skills, projects, and experience with smooth animations and interactive UI.",
      tech: ["React.Js", "Tailwind CSS", "React Bits"],
      image: projectPersonalPorto,
      link: "https://hafidzthufail-personalportofolio.vercel.app/", // Ganti dengan link live demo portfolio Anda
      github: "https://github.com/HafidzThufail22/personal-portofolio", // Link repo GitHub portfolio (fixed typo)
    },
    {
      title: "Dashboard Toserba",
      description:
        "Admin dashboard for retail with inventory management and automated reorder system.",
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      image: projectDashboardToserba,
      link: "https://your-dashboard-demo.com",
      github: "https://github.com/HafidzThufail22/toserba-management",
    },
    {
      title: "Reservation System",
      description:
        "Futsal court booking system with real-time availability and automated scheduling management.",
      tech: ["PHP", "MySQL", "Tailwind CSS"],
      image: projectReservationSystem,
      link: "https://your-reservation-demo.com",
      github: "https://github.com/HafidzThufail22/FutsalZone",
    },
    {
      title: "Article Website",
      description:
        "City identity article website featuring local culture, history, and tourism information with clean and responsive design.",
      tech: ["HTML", "CSS"],
      image: projectArticleWebsite,
      link: "https://kulon-progo.vercel.app/",
      github: "https://github.com/HafidzThufail22/KulonProgo",
    },
    {
      title: "To-Do List App",
      description:
        "Task management app with deadlines, priorities, and progress tracking features.",
      tech: [
        "PHP",
        "JavaScript",
        "Laravel",
        "React.Js",
        "Tailwind CSS",
        "MySQL",
      ],
      image: projectToDoList,
      link: "https://your-todolist-demo.com",
      github: "https://github.com/HafidzThufail22/to-do-list-App",
    },
    {
      title: "Course Website",
      description:
        "Health tracking app with workout plans and progress visualization.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: projectCourseWebsite,
      link: "https://global-mandiri-official.vercel.app/",
      github: "https://github.com/HafidzThufail22/GlobalMandiri-Official",
    },
  ];

  // Data Certificates
  const certificates = [
    {
      title: "Basic AI",
      description:
        "Foundational course in Artificial Intelligence covering machine learning basics, neural networks, and practical AI implementations.",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: certDasarAI,
      credentialUrl: "#",
    },
    {
      title: "Basic JavaScript",
      description:
        "Comprehensive JavaScript course covering ES6+, DOM manipulation, asynchronous programming, and modern JavaScript practices.",
      issuer: "Dicoding Indonesia",
      date: "2024",
      image: certDasarJS,
      credentialUrl: "#",
    },
    {
      title: "Basic Web Programming",
      description:
        "Web development fundamentals including HTML5, CSS3, responsive design, and web accessibility standards.",
      issuer: "Dicoding Indonesia",
      date: "2024",
      image: certWebDasar,
      credentialUrl: "#",
    },
    {
      title: "Cyber Security Seminar",
      description:
        "Seminar on cybersecurity fundamentals, threat prevention, and best practices for secure web development.",
      issuer: "Various Institution",
      date: "2024",
      image: certSiber,
      credentialUrl: "#",
    },
    {
      title: "UKM IK Cadre Training Events Committee",
      description:
        "Certificate of appreciation as Events Committee for UKM IK Cadre Training, demonstrating event coordination and organizational skills.",
      issuer: "Event Committee",
      date: "2024",
      image: certAcaraLK1UKMIK,
      credentialUrl: "#",
    },
    {
      title: "Secretary of Maroon Day 2024",
      description:
        "Certificate of appreciation as Secretary for Maroon Day 2024 event, demonstrating organizational and leadership skills.",
      issuer: "Event Committee",
      date: "2024",
      image: certMaroonDay,
      credentialUrl: "#",
    },
    {
      title: "Chairman of the Organization of Pabelan Boarding School",
      description:
        "Leadership certificate as Chief of OPPP, showcasing project management and team coordination capabilities.",
      issuer: "Organization",
      date: "2022",
      image: certChiefOPPP,
      credentialUrl: "#",
    },
    {
      title: "Secretary of the Organization of Pabelan Boarding School",
      description:
        "Certificate as Secretary of OPPP, demonstrating administrative skills, documentation management, and organizational support.",
      issuer: "Organization",
      date: "2022",
      image: certSecretaryOPPP,
      credentialUrl: "#",
    },
  ];

  // Data yang ditampilkan berdasarkan tab aktif
  const displayItems = activeTab === "projects" ? projects : certificates;

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Heading */}
        <h2
          ref={headingRef}
          className={`text-4xl sm:text-5xl font-bold text-center mb-8 fade-in ${
            headingVisible ? "is-visible" : ""
          }`}
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects & Certificates
          </span>
        </h2>

        {/* Tab Filter */}
        <div
          ref={tabsRef}
          className={`flex justify-center mb-12 fade-in ${
            tabsVisible ? "is-visible" : ""
          }`}
        >
          <div className="inline-flex backdrop-blur-sm bg-gray-900/20 p-1 rounded-full border border-blue-500/20">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "projects"
                  ? "border border-blue-500 text-blue-400 bg-blue-500/10"
                  : "text-gray-300 hover:text-blue-400 hover:border hover:border-blue-500/50 border border-transparent"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "certificates"
                  ? "border border-blue-500 text-blue-400 bg-blue-500/10"
                  : "text-gray-300 hover:text-blue-400 hover:border hover:border-blue-500/50 border border-transparent"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div
          ref={itemsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${
            itemsVisible ? "is-visible" : ""
          }`}
        >
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-gray-900/20 border border-blue-500/20 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 group relative"
            >
              {/* Item Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 flex items-center justify-center overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay with Action Buttons on Hover */}
                <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {activeTab === "projects" ? (
                    <>
                      {/* GitHub Button for Projects */}
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 border-2 border-blue-400 rounded-full flex items-center justify-center hover:bg-blue-400 hover:border-blue-300 transition-all transform hover:scale-110 group/code"
                        aria-label="View Source Code"
                      >
                        <svg
                          className="w-6 h-6 text-blue-400 group-hover/code:text-white transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      {/* Live Demo Button for Projects */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:from-blue-400 hover:to-cyan-400 transition-all transform hover:scale-110"
                        aria-label="View Live Demo"
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </>
                  ) : (
                    /* View Certificate Button for Certificates */
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:from-blue-400 hover:to-cyan-400 transition-all transform hover:scale-110"
                      aria-label="View Full Certificate"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Stack untuk Projects / Info untuk Certificates */}
                {activeTab === "projects" ? (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-sm text-blue-400 font-medium">
                      {item.issuer}
                    </p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
