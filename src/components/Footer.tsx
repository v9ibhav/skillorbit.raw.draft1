import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black/70 backdrop-blur-md py-12 relative border-t border-white/10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-slide-up">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 group">
              <div className="relative h-8 w-8">
                <img 
                  src="/image copy.png" 
                  alt="SkillOrbitX Logo" 
                  className="w-8 h-8 object-contain drop-shadow-lg group-hover:drop-shadow-orange-500/50 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <span className="ml-2 font-bold text-white text-xl group-hover:text-orange-400 transition-colors duration-300">SkillOrbitX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md hover:text-gray-300 transition-colors duration-300">
              Empowering your success with cutting-edge solutions and learning. Transforming businesses and empowering learners worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm hover:translate-x-1">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm hover:translate-x-1">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm hover:translate-x-1">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">info@skillorbitx.com</li>
              <li className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">+1 (555) 123-4567</li>
              <li className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">123 Innovation St, Tech City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
            © 2025 SkillOrbitX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30">
              <span className="text-white text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30">
              <span className="text-white text-sm">t</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30">
              <span className="text-white text-sm">in</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30">
              <span className="text-white text-sm">ig</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};