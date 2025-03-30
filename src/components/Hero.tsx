import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car, Shield, Clock, Star, MapPin } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Simple fade-in effect on load, no complex animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-600">
      {/* Simplified pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/30">
              <Star size={16} className="mr-2 text-yellow-300" />
              <span className="text-sm font-medium text-white">Winner of Bihar Startup Challenge</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="block">Affordable One-Way</span>
              <span className="block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-white">
                  Taxi & Carpool
                </span> Services
              </span>
              <span className="block">across <span className="text-yellow-200">Bihar</span></span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Save up to <span className="font-bold text-yellow-200">50%</span> on your travel costs with our ride-sharing platform.
              Book a ride or share your car - it's easy and budget-friendly!
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-amber-600 hover:bg-yellow-100"
              >
                Book a Ride
                <div className="ml-2 h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <Car size={14} className="text-amber-600" />
                </div>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/50 bg-white/10 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
            
            {/* Simplified features */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: <Car size={24} />, title: "One-Way Taxi" },
                { icon: <Clock size={24} />, title: "24/7 Service" },
                { icon: <Shield size={24} />, title: "Safe Travel" }
              ].map((feature) => (
                <div 
                  key={feature.title}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="bg-white/20 p-3 rounded-full mb-3">
                    {feature.icon}
                  </div>
                  <p className="text-center font-medium text-white">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Earth and Car Visualization - Simplified */}
          <div className={`hidden md:block transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative flex justify-center">
              {/* Simple Earth with Patna marker */}
              <div className="relative w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 shadow-xl">
                {/* Simple continent silhouette */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjOGI3NjUwIiBkPSJNMTAwLDAgQzEwMCwwIDEwNSwyMCAxMDUsMzAgQzEwNSw0MCAxMTAsMzUgMTEwLDQ1IEMxMTAsNTUgMTAwLDU1IDEwMCw3NSBDMTA1LDgwIDExMCw4MCAxMTAsOTAgQzEwOCw5NSAxMDIsOTUgMTAwLDEwMCBDOTUsOTcgODUsOTYgODAsOTAgQzc1LDgwIDg1LDgwIDg1LDcwIEM4NSw2NCA3NSw2MyA3MCw1OCBDNTY1LDUyIDcwLDQ4IDcwLDQwIEM2MCw0NSA2MCw1MCA0MCw0NSBDNDU0MCAxMCw0NSAxMCw0MCBDMTA0MCAwLDMwIDAsMjAgTDAsNTAwIEMxMDQwIDEwMAw3NSAyMDAsNzUgQzIwODAsNzUgMjEwNzAgMjIwNjAgQzIyMDUwIDIzMDQ1IDIyNDYgMjQwNDAgQzIzNTMwIDIzNDQwIDIyODQwIDIzMDM1IEMyNDAzMCAyNDAyNSAyNTAyNSAyNTAyMCBDMjYwMTUgMjcwMTMgMjYwMTIgMzAwMTAgQzI2MDE1IDMwMDI1IDI5MDUwIDI2MDc1IEMzMDEwMCAyNjEwMCAzMjEwMCAyNjExNSBDMzMxMTUgMjUxMzAgMzUxMzAgMjQxMzUgQzM1MTMwIDIzMTIwIDMyMTIwIDIzMTE1IEMzMDExMCAyMjExNSAyODEyNSAyMTEyMCBDMjgxMjUgMTkxMjAgMjkxMzAgMTgxNDAgQzMwMTIwIDE4MTMwIDMwLDEwMCAxMDAsMTAwIi8+PC9zdmc+')]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/40 via-transparent to-transparent opacity-70" />
                </div>
                
                {/* Patna marker with label */}
                <div className="absolute w-6 h-6 top-[40%] left-[62%]">
                  <div className="relative flex flex-col items-center">
                    <div className="bg-red-500 p-1 rounded-full z-10 shadow-lg animate-pulse-slow">
                      <MapPin size={14} className="text-white" />
                    </div>
                    <div className="absolute top-6 bg-black/70 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                      Patna
                    </div>
                  </div>
                </div>
                
                {/* Orbit path around the globe */}
                <div className="absolute inset-[-20px] border-2 border-dashed border-white/20 rounded-full" />
                
                {/* Car orbiting the globe */}
                <div className="absolute w-10 h-10 left-[calc(50%-20px)] top-[-20px] animate-orbit">
                  <div className="bg-yellow-400 p-2 rounded-full shadow-lg">
                    <Car size={24} className="text-amber-800" />
                  </div>
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
