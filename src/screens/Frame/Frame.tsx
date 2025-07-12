import React from "react";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { TrustedBySection } from "../../components/TrustedBySection";
import { AboutSection } from "../../components/AboutSection";
import { ServicesSection } from "../../components/ServicesSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { ScrollToTop } from "../../components/ScrollToTop";

export const Frame = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-400/3 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow"></div>
      </div>
      
      <Header />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};