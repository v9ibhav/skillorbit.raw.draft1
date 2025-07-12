import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-orange-500 mb-4 animate-slide-up">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Ready to transform your digital journey? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-scale-in" style={{animationDelay: '0.4s'}}>
          <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center animate-slide-up" style={{animationDelay: '0.6s'}}>Send Us A Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up" style={{animationDelay: '1s'}}>
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="group animate-slide-up" style={{animationDelay: '1.2s'}}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 transition-all duration-300 backdrop-blur-sm min-h-[120px]"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="orange" 
                className="w-full py-3 text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 animate-slide-up group" 
                style={{animationDelay: '1.4s'}}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};