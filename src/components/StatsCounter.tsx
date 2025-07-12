import React, { useState, useEffect, useRef } from "react";

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export const StatsCounter = ({ end, duration = 2000, suffix = "", label }: StatsCounterProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <div ref={elementRef} className="text-center group">
      <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
        {label}
      </div>
    </div>
  );
};