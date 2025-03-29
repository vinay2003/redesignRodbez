
import React, { useEffect, useRef } from "react";
import { Search, CalendarClock, Car, CreditCard, ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const steps = [
    {
      title: "Search Your Route",
      description: "Enter your pickup and drop locations to find available rides or passengers.",
      icon: <Search className="h-10 w-10 text-rodbez-600" />,
    },
    {
      title: "Choose Your Ride",
      description: "Select your preferred option based on timing, fare, and ratings.",
      icon: <CalendarClock className="h-10 w-10 text-rodbez-600" />,
    },
    {
      title: "Confirm Booking",
      description: "Complete your booking with a secure payment method of your choice.",
      icon: <CreditCard className="h-10 w-10 text-rodbez-600" />,
    },
    {
      title: "Enjoy Your Journey",
      description: "Sit back, relax, and enjoy your affordable journey across Bihar.",
      icon: <Car className="h-10 w-10 text-rodbez-600" />,
    }
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">How It Works</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          RodBez makes intercity travel in Bihar simple, affordable, and accessible for everyone. 
          Just four easy steps to start your journey.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="flex items-start opacity-0"
                ref={el => stepsRef.current[index] = el}
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-full bg-rodbez-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-14 left-1/2 h-12 -translate-x-1/2 w-0.5 bg-rodbez-200"></div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}

            <div className="pl-20 opacity-0 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
              <div className="bg-rodbez-50 p-5 rounded-xl border border-rodbez-200">
                <h4 className="text-lg font-semibold mb-3">Did you know?</h4>
                <p className="text-gray-700">
                  By choosing to carpool or taxi pool instead of going solo, you can save up to 
                  50% on your travel costs while also reducing carbon emissions by up to 60%.
                </p>
              </div>
            </div>
          </div>

          <div 
            ref={imageRef}
            className="opacity-0" 
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-rodbez-600 py-4 px-6 text-white">
                <h3 className="text-xl font-semibold">Cost Comparison</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h4 className="font-medium text-gray-900">Patna to Gaya</h4>
                      <p className="text-sm text-gray-500">118 km, ~3 hours</p>
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg">
                      <span className="text-gray-700">Regular Taxi (one-way)</span>
                      <span className="font-semibold">₹2,800</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg">
                      <span className="text-gray-700">RodBez One-Way Taxi</span>
                      <span className="font-semibold">₹1,900</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg">
                      <span className="text-gray-700">RodBez Taxi Pool</span>
                      <span className="font-semibold">₹950</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-4 bg-rodbez-100 rounded-lg">
                      <span className="font-medium text-rodbez-900">RodBez Carpool</span>
                      <span className="font-semibold text-rodbez-900">₹550</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">Your Savings</span>
                      <span className="text-xl font-bold text-rodbez-700">Up to ₹2,250</span>
                    </div>
                    <div className="mt-2 h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-rodbez-600 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Save up to 80% compared to regular taxis</p>
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

export default HowItWorks;
