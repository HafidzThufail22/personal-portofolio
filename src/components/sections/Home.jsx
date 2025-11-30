import Particles from '../Particles';
import TrueFocus from '../TrueFocus';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd']}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Hafidz Thufail Nur Ikhsan
          </span>
        </h1>
        
        {/* TrueFocus Animation */}
        <div className="mb-8">
          <TrueFocus 
            sentence="Informatics Student | Front-end Developer | UI/UX Designer"
            separator=" | "
            manualMode={false}
            blurAmount={5}
            borderColor="#60a5fa"
            glowColor="rgba(96, 165, 250, 0.6)"
            animationDuration={1}
            pauseBetweenAnimations={2}
          />
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          I build exceptional digital experiences that combine beautiful design with powerful functionality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

