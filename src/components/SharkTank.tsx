import React, { useEffect, useRef } from "react";
import { Award, TrendingUp, Users } from "lucide-react";
import Video from '@/asset/video/Rodbez.mp4';

const SharkTank = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured on Shark Tank India</h2>
            <p className="text-gray-300 mb-8">
              RodBez impressed the Sharks with our innovative approach to solving transportation 
              challenges in Bihar. Watch our journey that captured the attention of top investors.
            </p>
            
            <div 
              ref={contentRef}
              className="opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-rodbez-700/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-rodbez-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">₹1.5 Crore Investment</h3>
                    <p className="text-gray-400">
                      Secured investment for 10% equity, valuing RodBez at ₹15 Crore
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-rodbez-700/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-rodbez-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rapid Growth</h3>
                    <p className="text-gray-400">
                      100,000+ registered users across Bihar with 30% month-on-month growth
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-rodbez-700/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-rodbez-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
                    <p className="text-gray-400">
                      4.8/5 average rating with over 25,000 successful rides completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              width="100%"
              height="100%"
              src={Video}
              title="Shark Tank India Episode"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-rodbez-400 mb-2">₹15 Cr</div>
            <div className="text-gray-400">Valuation</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-rodbez-400 mb-2">100k+</div>
            <div className="text-gray-400">Users</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-rodbez-400 mb-2">25k+</div>
            <div className="text-gray-400">Rides</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-rodbez-400 mb-2">12+</div>
            <div className="text-gray-400">Cities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharkTank;
