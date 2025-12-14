import { useEffect, useState } from "react";
import { Code2, User, Github, ArrowRight } from "lucide-react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress - lebih lama
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Tampilkan button setelah loading selesai
          setTimeout(() => {
            setIsComplete(true);
          }, 500);
          return 100;
        }
        // Progress lebih lambat
        return prev + Math.random() * 8;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 transition-all duration-800 ${
        isExiting ? "opacity-0 blur-xl" : "opacity-100 blur-0"
      }`}
    >
      {/* Animated background gradient - sama dengan Home */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-transparent"></div>

      {/* Radial gradient effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50"></div>

      {/* Main content container with 3D effect */}
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isExiting ? "opacity-0" : "opacity-100"
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

        {/* Welcome text */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-2 text-white animate-slide-up">
            Welcome To
          </h1>
          <h2 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-slide-up animation-delay-200">
            Hafidz Thufail Website
          </h2>
        </div>

        {/* URL badge */}
        <div className="flex justify-center mb-12 animate-fade-in animation-delay-400">
          <div className="px-6 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/30">
            <span className="text-blue-400 text-sm">
              🌐 https://hafidzthufail.vercel.app/
            </span>
          </div>
        </div>

        {/* Loading area dengan height tetap untuk button */}
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          {/* Loading spinner */}
          <div
            className={`relative z-10 mb-8 flex justify-center transition-all duration-500 ${
              isComplete ? "opacity-0 scale-90 h-0" : "opacity-100 scale-100"
            }`}
          >
            <div className="w-20 h-20 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
            <div
              className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-cyan-400 rounded-full animate-spin mx-auto"
              style={{ animationDuration: "1.5s" }}
            ></div>
          </div>

          {/* Loading text */}
          <h3
            className={`text-xl font-heading font-bold mb-4 text-center bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-500 ${
              isComplete ? "opacity-0 scale-90 h-0" : "opacity-100 scale-100"
            }`}
          >
            Loading Portfolio
          </h3>

          {/* Progress bar */}
          <div
            className={`w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto transition-all duration-500 ${
              isComplete ? "opacity-0 scale-90 h-0" : "opacity-100 scale-100"
            }`}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ease-out shadow-lg shadow-blue-500/50"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>

          {/* Progress percentage */}
          <p
            className={`mt-4 text-gray-400 font-mono text-sm text-center transition-all duration-500 ${
              isComplete ? "opacity-0 scale-90 h-0" : "opacity-100 scale-100"
            }`}
          >
            {Math.floor(Math.min(progress, 100))}%
          </p>

          {/* Enter Button - Tampil di posisi yang sama dengan loading */}
          {isComplete && (
            <div className="flex flex-col items-center gap-4 animate-fade-in">
              <button
                onClick={handleEnter}
                className="group px-8 py-3 backdrop-blur-sm bg-blue-500/10 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/20 hover:border-blue-400 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Enter Portfolio
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="text-gray-400 text-sm animate-pulse">
                Click to explore my work
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-10 flex gap-2">
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
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
