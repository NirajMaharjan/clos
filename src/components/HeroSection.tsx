
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Hero background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className={`container relative z-10 text-white space-y-6 transform ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
        <span className="text-sm uppercase tracking-wider">New Collection 2024</span>
        <h1 className="text-5xl md:text-7xl font-light">Timeless Elegance</h1>
        <p className="text-lg md:text-xl max-w-lg">
          Discover our curated collection of minimalist designs crafted for the modern wardrobe
        </p>
        <Button 
          variant="outline" 
          className="bg-white text-black hover:bg-black hover:text-white transition-colors duration-300"
        >
          Explore Collection
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
