import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export const Header = (): JSX.Element => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 py-6 z-50 bg-black/30 backdrop-blur-md border-b border-white/5 animate-slide-up">
      {/* Logo Container */}
      <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
        <div className="relative h-8 w-8">
          <img 
            src="/image copy.png" 
            alt="SkillOrbitX Logo" 
            className="w-8 h-8 object-contain drop-shadow-lg group-hover:drop-shadow-orange-500/50 transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="ml-3">
          <img 
            src="/image copy copy.png" 
            alt="SkillOrbitX" 
            className="h-6 object-contain drop-shadow-lg group-hover:drop-shadow-orange-500/50 transition-all duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-orange-400 transition-all duration-300 cursor-pointer relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};