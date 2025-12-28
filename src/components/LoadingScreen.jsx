import { useEffect, useState } from "react";
import { Code2, User, Github } from "lucide-react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Langsung mulai exit animation setelah loading selesai
          setTimeout(() => {
            setIsExiting(true);
            // Panggil onComplete setelah animation selesai
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 500);
          return 100;
        }
        // Progress lebih lambat
        return prev + Math.random() * 8;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 transition-all duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Animated background gradient - sama dengan Home */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-transparent"></div>

      {/* Radial gradient effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50"></div>

      {/* Main content - centered text */}
      <div
        className={`relative z-10 text-center transition-all duration-700 ${
          isExiting
            ? "opacity-0 translate-y-20 scale-95"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {/* Icons dengan efek glow */}
        <div className="flex justify-center gap-6 mb-8 animate-fade-in">
          <div className="p-4 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
            <Code2 className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 hover:scale-110 transition-transform duration-300 animation-delay-200 shadow-lg shadow-blue-500/20">
            <User className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 hover:scale-110 transition-transform duration-300 animation-delay-400 shadow-lg shadow-blue-500/20">
            <Github className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
          </div>
        </div>

        {/* Loading text */}
        <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Loading...
        </h3>

        {/* Full-width Progress bar - from edge to edge, centered */}
        <div className="w-screen h-2 bg-gray-800 mt-8">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300 ease-out shadow-lg shadow-blue-500/50"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
          {/* Glow effect on progress bar */}
          <div
            className="absolute left-0 h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur-sm opacity-50 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Progress percentage */}
        <p className="text-gray-400 font-mono text-lg mt-4">
          {Math.floor(Math.min(progress, 100))}%
        </p>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
