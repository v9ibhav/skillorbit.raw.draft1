import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Main content */}
      <div className="relative z-10 text-center animate-fade-in">
        <div className="mb-8 animate-slide-up flex justify-center">
          <img 
            src="/image.png" 
            alt="SkillOrbitX" 
            className="max-w-2xl w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.3s'}}>
          Empowering your digital journey with cutting-edge solutions and innovative technology
        </p>
        
        {/* CTA Button */}
        <div className="mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 animate-glow"
          >
            Explore Our Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-orange-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};