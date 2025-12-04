import { useState } from "react";
import { useInView } from "../../hooks/useInView";

const Projects = () => {
  // State untuk tab filter
  const [activeTab, setActiveTab] = useState("projects");

  // Intersection Observer hooks - lebih ringan dari GSAP
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
      image: "🚀",
      link: "#",
      github: "#",
    },
    {
      title: "Dashboard Toserba",
      description:
        "Admin dashboard for retail with inventory management and automated reorder system.",
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      image: "📦",
      link: "#",
      github: "#",
    },
    {
      title: "Reservation System",
      description:
        "Futsal court booking system with real-time availability and automated scheduling management.",
      tech: ["PHP", "MySQL", "Tailwind CSS"],
      image: "⚽",
      link: "#",
      github: "#",
    },
    {
      title: "Article Website",
      description:
        "City identity article website featuring local culture, history, and tourism information with clean and responsive design.",
      tech: ["HTML", "CSS"],
      image: "🏙️",
      link: "#",
      github: "#",
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
      image: "🎨",
      link: "#",
      github: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Health tracking app with workout plans and progress visualization.",
      tech: ["React Native", "Node.js", "MongoDB"],
      image: "💪",
      link: "#",
      github: "#",
    },
  ];

  // Data Certificates
  const certificates = [
    {
      title: "AWS Certified Developer",
      description:
        "Amazon Web Services certification demonstrating expertise in developing and maintaining applications on AWS.",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "🏆",
      credentialUrl: "#",
    },
    {
      title: "React Developer Certification",
      description:
        "Advanced React certification covering hooks, state management, performance optimization, and best practices.",
      issuer: "Meta",
      date: "2023",
      image: "⚛️",
      credentialUrl: "#",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Comprehensive bootcamp covering MERN stack, RESTful APIs, authentication, and deployment strategies.",
      issuer: "Udemy",
      date: "2023",
      image: "💻",
      credentialUrl: "#",
    },
    {
      title: "UI/UX Design Fundamentals",
      description:
        "Professional certification in user interface and user experience design principles and methodologies.",
      issuer: "Google",
      date: "2023",
      image: "🎨",
      credentialUrl: "#",
    },
    {
      title: "JavaScript Algorithms",
      description:
        "Deep dive into data structures and algorithms using JavaScript, covering complexity analysis and optimization.",
      issuer: "freeCodeCamp",
      date: "2022",
      image: "📊",
      credentialUrl: "#",
    },
    {
      title: "Responsive Web Design",
      description:
        "Certification in modern responsive design techniques, CSS Grid, Flexbox, and mobile-first approaches.",
      issuer: "freeCodeCamp",
      date: "2022",
      image: "📱",
      credentialUrl: "#",
    },
  ];

  // Data yang ditampilkan berdasarkan tab aktif
  const displayItems = activeTab === "projects" ? projects : certificates;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Heading */}
        <h2
          ref={headingRef}
          className={`text-4xl sm:text-5xl font-bold text-center mb-8 fade-in ${
            headingVisible ? "is-visible" : ""
          }`}
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Showcase
          </span>
        </h2>

        {/* Tab Filter */}
        <div
          ref={tabsRef}
          className={`flex justify-center mb-12 fade-in ${
            tabsVisible ? "is-visible" : ""
          }`}
        >
          <div className="inline-flex bg-gray-800 p-1 rounded-lg shadow-lg">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "certificates"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
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
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Item Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
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
                  <div className="mb-4 space-y-1">
                    <p className="text-sm text-blue-400 font-medium">
                      {item.issuer}
                    </p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                )}

                {/* Action Buttons */}
                {activeTab === "projects" ? (
                  <div className="flex gap-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium text-center"
                    >
                      View Demo
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm font-medium text-center"
                    >
                      Source Code
                    </a>
                  </div>
                ) : (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm font-medium text-center"
                  >
                    View Credential
                  </a>
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
