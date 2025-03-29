
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Car, Clock, TrendingDown } from "lucide-react";

const Hero = () => {
  const taglineRef = useRef<HTMLHeadingElement>(null);

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

    return () => {
      if (taglineRef.current) {
        observer.unobserve(taglineRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 300 Q 150 50 300 100 Q 450 150 500 300 Q 550 450 700 500 Q 850 550 800 700"
            stroke="white"
            strokeWidth="15"
            fill="none"
            strokeDasharray="20,20"
            opacity="0.3"
          />
          <path
            d="M 200 400 Q 250 150 400 200 Q 550 250 600 400 Q 650 550 800 600"
            stroke="white"
            strokeWidth="15"
            fill="none"
            strokeDasharray="20,20"
            opacity="0.3"
          />
        </svg>
      </div>
      
      {/* Animated car */}
      <div className="absolute bottom-20 left-0 animate-car-ride">
        <Car size={60} className="text-white drop-shadow-lg" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              ref={taglineRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              Affordable One-Way Taxi & Carpool Services in Bihar
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Save up to 50% on your travel costs with our innovative ride-sharing platform.
              Book a ride or share your car - it's easy, reliable, and budget-friendly!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-rodbez-700 hover:bg-gray-100">
                Book a Ride
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Car size={24} className="text-white" />
                </div>
                <p className="text-center font-medium">One-Way Taxi</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Clock size={24} className="text-white" />
                </div>
                <p className="text-center font-medium">24/7 Service</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <TrendingDown size={24} className="text-white" />
                </div>
                <p className="text-center font-medium">Lower Fares</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-rodbez-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-small"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-auburn-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-small" style={{ animationDelay: "0.5s" }}></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                <div className="aspect-square relative overflow-hidden rounded-xl">
                  <svg viewBox="0 0 500 500" width="100%" height="100%">
                    <path
                      d="M 50,250 C 50,180 180,50 250,50 C 320,50 450,180 450,250 C 450,320 320,450 250,450 C 180,450 50,320 50,250 Z"
                      fill="rgba(14, 165, 233, 0.1)"
                      stroke="rgba(14, 165, 233, 0.5)"
                      strokeWidth="2"
                    ></path>
                    
                    {/* Bihar outline - simplified representation */}
                    <path
                      d="M 150,170 C 180,150 220,150 250,170 C 280,190 320,200 350,180 C 370,220 380,260 370,300 C 340,320 300,330 270,310 C 240,290 200,290 170,310 C 150,280 140,240 150,200 Z"
                      fill="rgba(255, 255, 255, 0.2)"
                      stroke="rgba(255, 255, 255, 0.8)"
                      strokeWidth="3"
                    ></path>
                    
                    {/* Route markers */}
                    <circle cx="180" cy="200" r="8" fill="white" />
                    <circle cx="240" cy="180" r="8" fill="white" />
                    <circle cx="320" cy="220" r="8" fill="white" />
                    <circle cx="280" cy="280" r="8" fill="white" />
                    <circle cx="200" cy="290" r="8" fill="white" />
                    
                    {/* Route lines */}
                    <line x1="180" y1="200" x2="240" y2="180" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="240" y1="180" x2="320" y2="220" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="320" y1="220" x2="280" y2="280" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="280" y1="280" x2="200" y2="290" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    
                    {/* Moving car along the route */}
                    <circle cx="220" cy="190" r="5" fill="#FF4136">
                      <animateMotion
                        path="M 0,0 L 60,-20 L 140,20 L 100,80 L -80,90 Z"
                        dur="10s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold">Patna to Gaya</p>
                  <p className="text-sm text-white/70">Save ₹850 with carpool</p>
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
