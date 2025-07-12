import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export const TestimonialsSection = (): JSX.Element => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      company: "Fortune 500 Company",
      content: "SkillOrbitX transformed our digital infrastructure completely. Their innovative solutions and expert team delivered beyond our expectations. The results speak for themselves - 300% increase in efficiency.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      position: "CTO, DataFlow Systems",
      company: "Leading Tech Startup",
      content: "Working with SkillOrbitX was a game-changer for our startup. Their LaunchDeck platform streamlined our entire development process and helped us scale rapidly. Exceptional service and support.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Learning & Development",
      company: "Global Education Corp",
      content: "LearnLab revolutionized our training programs. The platform is intuitive, powerful, and has significantly improved our learning outcomes. Our team adoption rate was 98% within the first month.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Thompson",
      position: "VP of Operations",
      company: "Manufacturing Excellence Ltd",
      content: "The team at SkillOrbitX delivered a solution that exceeded all our requirements. Their attention to detail and commitment to excellence is unmatched. Highly recommend their services.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto relative animate-scale-in" style={{animationDelay: '0.3s'}}>
          <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl relative overflow-hidden">
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-orange-500" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-200 text-lg md:text-xl leading-relaxed text-center mb-8 font-medium">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500/50"
                />
                <div className="text-center">
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-orange-400 text-sm">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600/50 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-orange-400 transition-colors duration-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600/50 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-orange-400 transition-colors duration-300" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-3 animate-slide-up" style={{animationDelay: '0.6s'}}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-orange-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-500 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-orange-500/30 mr-3"
                />
                <div>
                  <h5 className="text-white font-medium text-sm">{testimonial.name}</h5>
                  <p className="text-gray-400 text-xs">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};