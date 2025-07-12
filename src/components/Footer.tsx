import React from "react";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black/80 backdrop-blur-md py-16 relative border-t border-white/10">
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="text-center space-y-8 animate-slide-up">
          
          {/* Follow Us Section */}
          <div className="space-y-6">
            <h3 className="text-white font-medium text-lg">Follow us:</h3>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 border border-white/20 transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-300" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 border border-white/20 transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-300" />
              </a>
              
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 border border-white/20 transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="space-y-4 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              All rights reserved to SkillOrbitX Pvt. Ltd.
            </p>
            
            {/* Legal Links */}
            <div className="flex justify-center space-x-8">
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:underline underline-offset-4"
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-orange-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};