import React from "react";
import { StatsCounter } from "./StatsCounter";
import { ParallaxSection } from "./ParallaxSection";

export const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 animate-slide-up">About Us</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor facilisis ex, tristique blandit ipsum. Maecenas cursus mollis justo, sit amet ullamcorper nibh. Integer et sem ut odio vehicula tempus. Sed in tellus non lorem vehicula cursus sit amet orci volutpat, id placerat lorem blandit.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
              Phasellus varius lacus ut lacinia posuere, nunc quam bibendum sem, a feugiat lectus leo eu mi. Nunc tincidunt rutrum leo, at tristique urna elementum sed.
            </p>
            <div className="space-y-3 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center group">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-300">Innovative Solutions</span>
              </div>
              <div className="flex items-center group">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-300">Expert Team</span>
              </div>
              <div className="flex items-center group">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <ParallaxSection speed={0.2} className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg h-48 flex items-center justify-center border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
                <StatsCounter end={500} suffix="+" label="Projects" />
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg h-48 flex items-center justify-center mt-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-scale-in" style={{animationDelay: '0.4s'}}>
                <StatsCounter end={100} suffix="+" label="Clients" />
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg h-48 flex items-center justify-center -mt-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-scale-in" style={{animationDelay: '0.6s'}}>
                <StatsCounter end={5} suffix="+" label="Years" />
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg h-48 flex items-center justify-center border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-scale-in" style={{animationDelay: '0.8s'}}>
                <StatsCounter end={24} suffix="/7" label="Support" />
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};