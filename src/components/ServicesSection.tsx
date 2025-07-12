import React from "react";
import { Button } from "./ui/button";
import { Code, Rocket, Users } from "lucide-react";

export const ServicesSection = (): JSX.Element => {
  const services = [
    {
      icon: Code,
      title: "LearnLab",
      description: "Comprehensive learning management system designed to enhance educational experiences.",
      features: [
        "Interactive course creation",
        "Student progress tracking",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
        "Collaborative learning tools"
      ]
    },
    {
      icon: Rocket,
      title: "LaunchDeck",
      description: "Complete project management and deployment platform for modern development teams.",
      features: [
        "Automated deployment pipelines",
        "Team collaboration tools",
        "Performance monitoring",
        "Scalable infrastructure",
        "Security-first approach"
      ]
    },
    {
      icon: Users,
      title: "LinkCircle",
      description: "Professional networking platform that connects industry experts and emerging talent.",
      features: [
        "Smart networking algorithms",
        "Industry-specific communities",
        "Mentorship programs",
        "Career development tools",
        "Event management system"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-orange-500 mb-4 animate-slide-up">Our Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Discover our comprehensive suite of services designed to empower your growth and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group animate-scale-in"
              style={{animationDelay: `${0.2 + index * 0.2}s`}}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <service.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center group/feature">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 group-hover/feature:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-400 text-sm group-hover/feature:text-gray-300 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="orange" className="w-full group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};