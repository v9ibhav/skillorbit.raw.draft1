import React from "react";

export const TrustedBySection = (): JSX.Element => {
  // Using placeholder logos - in a real implementation, you'd use actual logo images
  const trustedLogos = [
    { name: "Deloitte", logo: "https://logos-world.net/wp-content/uploads/2020/06/Deloitte-Logo.png" },
    { name: "EY", logo: "https://logos-world.net/wp-content/uploads/2020/06/EY-Logo.png" },
    { name: "Government of India", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" },
    { name: "KPMG", logo: "https://logos-world.net/wp-content/uploads/2020/04/KPMG-Logo.png" },
    { name: "The World Bank", logo: "https://logos-world.net/wp-content/uploads/2020/11/World-Bank-Logo.png" },
  ];

  return (
    <section className="py-16 relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-2xl font-semibold text-white/90 mb-2">Trusted by</h2>
          <p className="text-gray-400 text-sm">Leading organizations worldwide</p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent z-10"></div>
          
          {/* Scrolling logos track */}
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            <div className="flex items-center space-x-16 min-w-max">
              {trustedLogos.map((company, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex items-center justify-center h-16 w-32 group"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-12 max-w-28 object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 min-w-max ml-16">
              {trustedLogos.map((company, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex items-center justify-center h-16 w-32 group"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-12 max-w-28 object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-orange-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};