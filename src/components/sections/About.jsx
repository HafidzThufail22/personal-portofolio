import profilePhoto from '../../assets/images/Profile.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <div className="flex justify-center">
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
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm a passionate developer who loves creating innovative solutions to complex problems. 
              With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean, 
              efficient code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development started several years ago, and I've been constantly learning and 
              evolving ever since. I specialize in building responsive, user-friendly applications that make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">30+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">24/7</h3>
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
