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
import certAcaraLK2UKMIK from "../../assets/images/certificate/Sertif_Sie Acara_LK2 UKM IK.png";
import certRATUKMIK from "../../assets/images/certificate/Sertif_RAT UKM IK 2024.png";
import certUXDesign from "../../assets/images/certificate/UX Design Fundamental.png";

// Import Project Images
import projectPersonalPorto from "../../assets/images/projects/personal porto project.png";
import projectDashboardToserba from "../../assets/images/projects/dashboard toserba project.png";
import projectReservationSystem from "../../assets/images/projects/reservation system project.png";
import projectArticleWebsite from "../../assets/images/projects/article website project.png";
import projectToDoList from "../../assets/images/projects/to-do list app project.png";
import projectCourseWebsite from "../../assets/images/projects/course website project.png";
import projectEyeSky from "../../assets/images/projects/Eye-Sky Project.jpg";
import projectCompanyProfile from "../../assets/images/projects/company-profile.png";
import projectCoffeshop from "../../assets/images/projects/Coffe Shop Mobile App.jpg";

const Projects = () => {
  // State untuk tab filter
  const [activeTab, setActiveTab] = useState("projects");
  // State untuk show all/show less
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
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
      tech: [
        "React.Js",
        "Javascript",
        "Tailwind CSS",
        "React Bits",
        "Framer Motion",
        "GSAP",
      ],
      image: projectPersonalPorto,
      link: "https://hafidzthufail-personalportofolio.vercel.app/", // Ganti dengan link live demo portfolio Anda
      github: "https://github.com/HafidzThufail22/personal-portofolio", // Link repo GitHub portfolio (fixed typo)
    },
    {
      title: "Smart City Mobile App",
      description:
        "Mobile application for smart city management with features such as traffic monitoring, public facility management, and emergency response.",
      tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      image: projectEyeSky,
      link: "/design-project/Eye-Sky Project.pdf", // Link ke PDF design project
      figma:
        "https://www.figma.com/design/KEsysXlXkPikbZrqALOOrk/DeadlineLovers-Team?node-id=202-2&t=XPDWoqt8t8Erndq4-1", // Ganti dengan link Figma Anda
      isUIUX: true, // Menandai sebagai project UI/UX
    },
    {
      title: "Coffe Shop Mobile App",
      description:
        "A premium coffee ordering app with a sleek dark-themed interface, streamlining the user journey from customization to pick-up.",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      image: projectCoffeshop,
      link: "#", // Link ke PDF design project
      figma:
        "https://www.figma.com/design/vmLYhFtz9bgzurJjCETeqC/Coffe-Shop-Mobile-App-Design?node-id=0-1&t=2YMkTOfxwnyNYum9-1", // Ganti dengan link Figma Anda
      isUIUX: true, // Menandai sebagai project UI/UX
    },
    {
      title: "Dashboard Toserba",
      description:
        "Admin dashboard for retail with inventory management and automated reorder system.",
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      image: projectDashboardToserba,
      link: "#",
      github: "https://github.com/HafidzThufail22/toserba-management",
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
      title: "Company Profile Website",
      description: "Company profile website with clean and responsive design.",
      tech: ["Next Js", "Typescript", "Framer Motion", "Tailwind CSS"],
      image: projectCompanyProfile,
      link: "https://lpk-sadewa.vercel.app/",
      github: "https://github.com/HafidzThufail22/company-profile",
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
    // {
    //   title: "Course Website",
    //   description:
    //     "Health tracking app with workout plans and progress visualization.",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   image: projectCourseWebsite,
    //   link: "https://global-mandiri-official.vercel.app/",
    //   github: "https://github.com/HafidzThufail22/GlobalMandiri-Official",
    // },
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
    {
      title: "UKM IK Cadre Training LK2 Events Committee",
      description:
        "Certificate of appreciation as Events Committee for UKM IK Cadre Training Level 2, demonstrating advanced event coordination skills.",
      issuer: "UKM Informatika dan Komputer",
      date: "2024",
      image: certAcaraLK2UKMIK,
      credentialUrl: "#",
    },
    {
      title: "RAT UKM IK 2024",
      description:
        "Annual General Meeting participant certificate of UKM Informatika dan Komputer 2024.",
      issuer: "UKM Informatika dan Komputer",
      date: "2024",
      image: certRATUKMIK,
      credentialUrl: "#",
    },
    {
      title: "UX Design Fundamental",
      description:
        "Comprehensive course covering UX design principles, user research methods, wireframing, and prototyping best practices.",
      issuer: "Professional Certification",
      date: "2024",
      image: certUXDesign,
      credentialUrl: "#",
    },
  ];

  // Data yang ditampilkan berdasarkan tab aktif
  const allItems = activeTab === "projects" ? projects : certificates;
  const showAll = activeTab === "projects" ? showAllProjects : showAllCerts;
  const setShowAll =
    activeTab === "projects" ? setShowAllProjects : setShowAllCerts;
  const displayItems = showAll ? allItems : allItems.slice(0, 6);
  const hasMoreItems = allItems.length > 6;

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
            Portofolio Snowcase
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
              <div
                className={`h-48 flex items-center justify-center overflow-hidden relative ${
                  activeTab === "certificates"
                    ? "bg-white"
                    : "bg-gradient-to-br from-blue-600/20 to-cyan-400/20"
                }`}
              >
                {item.isPdf ? (
                  /* PDF Thumbnail - show PDF icon */
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      className="w-16 h-16 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm2.5 6H7v-1c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2v1h-1zm5-3h-4v-1h4v1zm0-2h-4v-1h4v1z" />
                    </svg>
                    <span className="text-blue-400 text-sm mt-2 font-medium">
                      PDF Document
                    </span>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}

                {/* Overlay with Action Buttons on Hover */}
                <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {activeTab === "projects" ? (
                    <>
                      {/* Figma Button for UI/UX Projects OR GitHub Button for Coding Projects */}
                      {item.isUIUX ? (
                        <a
                          href={item.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 backdrop-blur-sm bg-gray-900/20 border border-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400 transition-all transform hover:scale-110 group/figma"
                          aria-label="View Figma Design"
                        >
                          {/* Figma Logo SVG */}
                          <svg
                            className="w-6 h-6 text-blue-400 group-hover/figma:text-blue-300 transition-colors"
                            viewBox="0 0 38 57"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                          </svg>
                        </a>
                      ) : (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 backdrop-blur-sm bg-gray-900/20 border border-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400 transition-all transform hover:scale-110 group/code"
                          aria-label="View Source Code"
                        >
                          <svg
                            className="w-6 h-6 text-blue-400 group-hover/code:text-blue-300 transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {/* Live Demo Button for Projects */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 backdrop-blur-sm bg-blue-500/10 border border-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400 transition-all transform hover:scale-110"
                        aria-label="View Live Demo"
                      >
                        <svg
                          className="w-6 h-6 text-blue-400"
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
                      href={item.isPdf ? item.credentialUrl : item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 backdrop-blur-sm bg-blue-500/10 border border-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400 transition-all transform hover:scale-110"
                      aria-label={
                        item.isPdf
                          ? "View PDF Certificate"
                          : "View Full Certificate"
                      }
                    >
                      <svg
                        className="w-6 h-6 text-blue-400"
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

        {/* Show All / Show Less Button */}
        {hasMoreItems && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 backdrop-blur-sm bg-gray-900/20 border border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <svg
                    className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>Show All ({allItems.length})</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
