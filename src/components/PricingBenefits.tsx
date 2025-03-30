
import React, { useEffect, useRef } from "react";
import { Star, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingBenefits = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const popularRoutes = [
    { from: "Patna", to: "Gaya", distance: "118 km", regularTaxi: "₹2,800", rodbezPrice: "₹1,900", poolPrice: "₹550" },
    { from: "Patna", to: "Muzaffarpur", distance: "72 km", regularTaxi: "₹1,800", rodbezPrice: "₹1,200", poolPrice: "₹350" },
    { from: "Patna", to: "Bhagalpur", distance: "235 km", regularTaxi: "₹4,500", rodbezPrice: "₹3,200", poolPrice: "₹900" },
    { from: "Gaya", to: "Bodhgaya", distance: "17 km", regularTaxi: "₹800", rodbezPrice: "₹500", poolPrice: "₹150" },
  ];
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Patna",
      rating: 5,
      comment: "RodBez has changed how I travel from Patna to Gaya for work. I save almost ₹2,000 every week using the carpool option!",
      avatar: "R"
    },
    {
      name: "Priya Singh",
      location: "Muzaffarpur",
      rating: 5,
      comment: "As a college student, the affordable prices help me visit home more often. The carpooling community is very friendly and safe.",
      avatar: "P"
    },
    {
      name: "Amit Sharma",
      location: "Bhagalpur",
      rating: 4,
      comment: "One-way taxi service is a blessing for business travelers like me. No more paying for idle return journeys.",
      avatar: "A"
    }
  ];
  
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Pricing & Benefits</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Transparent pricing with no hidden charges. See how much you can save on popular routes 
          across Bihar with our innovative travel solutions.
        </p>
        
        <div className="mb-20">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-rodbez-700 text-white">
                  <th className="p-4 text-left">Route</th>
                  <th className="p-4 text-left">Distance</th>
                  <th className="p-4 text-left">Regular Taxi</th>
                  <th className="p-4 text-left">RodBez Taxi</th>
                  <th className="p-4 text-left">RodBez Pool</th>
                  <th className="p-4 text-left">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {popularRoutes.map((route, index) => (
                  <tr 
                    key={index} 
                    className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-4 font-medium">
                      {route.from} to {route.to}
                    </td>
                    <td className="p-4 text-gray-600">{route.distance}</td>
                    <td className="p-4 text-gray-600">{route.regularTaxi}</td>
                    <td className="p-4 text-rodbez-700 font-medium">{route.rodbezPrice}</td>
                    <td className="p-4 text-rodbez-700 font-medium">{route.poolPrice}</td>
                    <td className="p-4 text-green-600 font-bold">
                      Up to {Math.round((parseInt(route.regularTaxi.replace(/[^\d]/g, '')) - parseInt(route.poolPrice.replace(/[^\d]/g, ''))) / parseInt(route.regularTaxi.replace(/[^\d]/g, '')) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <Button className="bg-rodbez-600 hover:bg-rodbez-700">
              Check More Routes
            </Button>
          </div>
        </div>
        
        <div className="mt-20 bg-rodbez-50 p-8 rounded-2xl border border-rodbez-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Don't Miss Out on Savings!</h3>
              <p className="text-gray-700 mb-6">
                The average RodBez user saves over ₹15,000 annually on travel costs within Bihar. 
                Join our community of smart travelers today!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-rodbez-600 hover:bg-rodbez-700">Sign Up Now</Button>
                <Button variant="outline" className="border-rodbez-600 text-rodbez-700">
                  Calculate Your Savings
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-4">Annual Savings Calculator</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Monthly trips (roundtrip)</p>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div className="h-2 bg-rodbez-600 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>1</span>
                    <span className="font-medium">6</span>
                    <span>10</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Average distance per trip</p>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div className="h-2 bg-rodbez-600 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>50km</span>
                    <span className="font-medium">150km</span>
                    <span>250km</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Your Estimated Annual Savings</span>
                    <span className="text-2xl font-bold text-rodbez-700">₹16,200</span>
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

export default PricingBenefits;
