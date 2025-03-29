
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Car, Clock, TrendingDown, Award, Shield } from "lucide-react";

const Hero = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }
    
    if (heroContentRef.current) {
      observer.observe(heroContentRef.current);
    }
    
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (taglineRef.current) {
        observer.unobserve(taglineRef.current);
      }
      if (heroContentRef.current) {
        observer.unobserve(heroContentRef.current);
      }
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Premium pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      {/* Animated car with premium effect */}
      <div className="absolute bottom-20 left-0 animate-car-ride z-10">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-rodbez-500 to-auburn-500 rounded-full blur-md opacity-50"></div>
          <Car size={60} className="text-white drop-shadow-lg relative" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroContentRef} className="opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4 border border-white/20">
              <span className="text-sm font-medium flex items-center">
                <Award size={16} className="mr-2 text-premium-gold" />
                Featured on Shark Tank India
              </span>
            </div>
            
            <h1 
              ref={taglineRef}
              className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 opacity-0 leading-tight"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <span className="block">Affordable One-Way</span>
              <span className="block"><span className="text-rodbez-200">Taxi & Carpool</span> Services</span>
              <span className="block">in <span className="premium-text">Bihar</span></span>
            </h1>
            
            <p className="text-xl mb-8 text-white/80 max-w-lg leading-relaxed">
              Save up to 50% on your travel costs with our innovative ride-sharing platform.
              Book a ride or share your car - it's easy, reliable, and budget-friendly!
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-white text-rodbez-700 hover:bg-gray-100 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Book a Ride
                <div className="ml-2 h-5 w-5 rounded-full bg-rodbez-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Car size={12} className="text-rodbez-700" />
                </div>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center glass-card p-4">
                <div className="bg-white/20 p-3 rounded-full mb-3 group-hover:bg-rodbez-600 transition-colors">
                  <Car size={24} className="text-white" />
                </div>
                <p className="text-center font-medium">One-Way Taxi</p>
              </div>
              <div className="flex flex-col items-center glass-card p-4">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Clock size={24} className="text-white" />
                </div>
                <p className="text-center font-medium">24/7 Service</p>
              </div>
              <div className="flex flex-col items-center glass-card p-4">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Shield size={24} className="text-white" />
                </div>
                <p className="text-center font-medium">Safe Travel</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={mapRef}
            className="hidden md:block opacity-0" 
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-rodbez-500 to-rodbez-300 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white/10 rounded-full px-4 py-1 text-sm font-medium backdrop-blur-sm">
                  Premium Ride Experience
                </div>
                
                <div className="aspect-square relative overflow-hidden rounded-xl mt-6">
                  <svg viewBox="0 0 500 500" width="100%" height="100%" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(14, 82, 70, 0.2)" />
                        <stop offset="100%" stopColor="rgba(26, 190, 151, 0.2)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feFlood floodColor="#3fd8b1" floodOpacity="0.5" result="coloredBlur" />
                        <feComposite in="coloredBlur" in2="blur" operator="in" result="coloredBlur" />
                        <feComposite in="SourceGraphic" in2="coloredBlur" operator="over" />
                      </filter>
                    </defs>
                    
                    <path
                      d="M 50,250 C 50,180 180,50 250,50 C 320,50 450,180 450,250 C 450,320 320,450 250,450 C 180,450 50,320 50,250 Z"
                      fill="url(#mapGradient)"
                      stroke="rgba(255, 255, 255, 0.7)"
                      strokeWidth="2"
                    ></path>
                    
                    {/* Bihar outline - stylized premium representation */}
                    <path
                      d="M 150,170 C 180,150 220,150 250,170 C 280,190 320,200 350,180 C 370,220 380,260 370,300 C 340,320 300,330 270,310 C 240,290 200,290 170,310 C 150,280 140,240 150,200 Z"
                      fill="rgba(255, 255, 255, 0.15)"
                      stroke="rgba(255, 255, 255, 0.9)"
                      strokeWidth="2"
                      filter="url(#glow)"
                    ></path>
                    
                    {/* Route markers */}
                    <circle cx="180" cy="200" r="8" fill="#ffffff" filter="url(#glow)" />
                    <circle cx="240" cy="180" r="8" fill="#ffffff" filter="url(#glow)" />
                    <circle cx="320" cy="220" r="8" fill="#ffffff" filter="url(#glow)" />
                    <circle cx="280" cy="280" r="8" fill="#ffffff" filter="url(#glow)" />
                    <circle cx="200" cy="290" r="8" fill="#ffffff" filter="url(#glow)" />
                    
                    {/* Premium route lines */}
                    <line x1="180" y1="200" x2="240" y2="180" stroke="#ffffff" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="240" y1="180" x2="320" y2="220" stroke="#ffffff" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="320" y1="220" x2="280" y2="280" stroke="#ffffff" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="280" y1="280" x2="200" y2="290" stroke="#ffffff" strokeWidth="2" strokeDasharray="5,5" />
                    
                    {/* Moving car along the route with premium effect */}
                    <circle cx="220" cy="190" r="6" fill="#d4af37" filter="url(#glow)">
                      <animateMotion
                        path="M 0,0 L 60,-20 L 140,20 L 100,80 L -80,90 Z"
                        dur="8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-rodbez-400 rounded-full mr-2"></div>
                      <p className="text-white/80 text-sm">Patna</p>
                    </div>
                    <div className="border-t border-dashed border-white/30 flex-1 mx-2"></div>
                    <div className="flex items-center">
                      <p className="text-white/80 text-sm">Gaya</p>
                      <div className="h-2 w-2 bg-auburn-400 rounded-full ml-2"></div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-white">Premium Route</p>
                  <p className="text-sm text-premium-gold font-medium">Save ₹950 with carpool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
