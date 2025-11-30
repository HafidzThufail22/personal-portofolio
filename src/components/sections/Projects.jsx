const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✅',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      image: '🌤️',
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform with posts, comments, likes, and real-time messaging capabilities.',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '💬',
    },
    {
      title: 'Portfolio Generator',
      description: 'Tool that helps developers create stunning portfolio websites with customizable templates and themes.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '🎨',
    },
    {
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking app with workout plans, nutrition tracking, and progress visualization.',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      image: '💪',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    View Demo
                  </button>
                  <button className="flex-1 px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm font-medium">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
