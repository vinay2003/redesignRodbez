
import React, { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const AboutUs = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  const cities = [
    "Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", 
    "Purnia", "Arrah", "Begusarai", "Katihar", "Munger", 
    "Chhapra", "Danapur", "Saharsa"
  ];

  return (
    <section id="about-us" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">About Us & Expansion</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            ref={contentRef}
            className="opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h3 className="text-2xl font-bold mb-6">Our Bihar Journey</h3>
            <p className="text-gray-700 mb-4">
              RodBez was founded in 2020 by a team of Bihari entrepreneurs who witnessed firsthand 
              the transportation challenges faced by people in the state. We started with a simple 
              mission: make intercity travel in Bihar affordable, accessible, and comfortable for everyone.
            </p>
            <p className="text-gray-700 mb-6">
              What began as a small operation connecting Patna to neighboring cities has now 
              grown into Bihar's largest ride-sharing network, covering 15+ cities and helping 
              thousands of people save money on their travel expenses every day.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Our Mission</h4>
                <p className="text-gray-600">
                  To transform intercity travel in Bihar through affordable, community-driven 
                  transportation solutions that benefit both riders and drivers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Our Vision</h4>
                <p className="text-gray-600">
                  To create the most trusted and accessible transportation network across 
                  Eastern India, connecting every town and village.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-48 bg-gray-200">
                  <div className="h-full w-full bg-gradient-to-r from-rodbez-500 to-rodbez-600 flex items-center justify-center text-white font-bold">
                    Founder Image 1
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-32 bg-gray-200">
                  <div className="h-full w-full bg-gradient-to-r from-rodbez-600 to-rodbez-700 flex items-center justify-center text-white font-bold">
                    Team Image
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-32 bg-gray-200">
                  <div className="h-full w-full bg-gradient-to-r from-rodbez-700 to-rodbez-800 flex items-center justify-center text-white font-bold">
                    Office Image
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-48 bg-gray-200">
                  <div className="h-full w-full bg-gradient-to-r from-rodbez-600 to-rodbez-700 flex items-center justify-center text-white font-bold">
                    Founder Image 2
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 border border-gray-100">
              <p className="text-xl font-bold text-rodbez-700">Started in 2020</p>
              <p className="text-gray-600">Bihar's homegrown startup</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Our Expansion Across Bihar</h3>
          
          <div 
            ref={mapRef}
            className="opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                {/* Simple outline of Bihar */}
                <svg viewBox="0 0 500 400" width="100%" height="100%">
                  <path
                    d="M150,100 C200,80 250,70 300,90 C350,110 400,150 430,200 C460,250 450,300 400,330 C350,360 290,370 230,350 C170,330 120,290 100,230 C80,170 100,120 150,100 Z"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="5"
                  />
                </svg>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Currently Operating In</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {cities.map((city, index) => (
                        <div key={city} className="flex items-center">
                          <MapPin className="h-4 w-4 text-rodbez-600 mr-1" />
                          <span className="text-gray-700">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Coming Soon</h4>
                    <p className="text-gray-700 mb-4">
                      We're rapidly expanding to cover all of Bihar by the end of 2023, followed by:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-rodbez-100 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-rodbez-700 text-sm font-medium">1</span>
                        </div>
                        <span>Jharkhand expansion (Q1 2024)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-rodbez-100 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-rodbez-700 text-sm font-medium">2</span>
                        </div>
                        <span>Eastern UP & West Bengal (Q3 2024)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-rodbez-100 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-rodbez-700 text-sm font-medium">3</span>
                        </div>
                        <span>All of Eastern India (2025)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 py-4 border-t">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">Join our journey</span>
                      <p className="text-sm text-gray-600">Help us connect Bihar, one ride at a time</p>
                    </div>
                    <div className="bg-rodbez-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-rodbez-700 transition-colors cursor-pointer">
                      Become a Partner
                    </div>
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

export default AboutUs;
