
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Car, Users, TrendingDown, Clock, Banknote, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
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

  const services = [
    {
      title: "One-Way Taxi",
      description: "Affordable one-way taxi service for intercity travel within Bihar. No return fare charges.",
      icon: <Car className="h-12 w-12 text-rodbez-600" />,
      benefits: ["Affordable fixed rates", "No return fare", "Comfortable sedans & SUVs"]
    },
    {
      title: "Taxi Pool",
      description: "Share your taxi with other travelers going in the same direction and split the fare.",
      icon: <Users className="h-12 w-12 text-rodbez-600" />,
      benefits: ["Save up to 50% on fares", "Meet new people", "Reduce carbon footprint"]
    },
    {
      title: "Carpool",
      description: "Share empty seats in your car or book a seat in someone's car going your way.",
      icon: <TrendingDown className="h-12 w-12 text-rodbez-600" />,
      benefits: ["Lowest cost option", "Help cover your fuel costs", "Community-based travel"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Choose the perfect travel option that suits your budget and preferences. All our services 
          focus on affordability, reliability, and comfort for travelers in Bihar.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-hover opacity-0"
              ref={el => cardRefs.current[index] = el}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-2 mt-1 text-rodbez-600">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66669 10.1147L12.7947 3.98599L13.7381 4.92866L6.66669 12L2.42136 7.75466L3.36403 6.81199L6.66669 10.1147Z" fill="currentColor" />
                        </svg>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rodbez-600 hover:bg-rodbez-700">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" className="bg-rodbez-600 hover:bg-rodbez-700">
            Start Sharing & Save Now
          </Button>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-rodbez-100 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-rodbez-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Book anytime, travel anytime</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-rodbez-100 p-4 rounded-full mb-4">
              <Banknote className="h-8 w-8 text-rodbez-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Hidden Costs</h3>
            <p className="text-gray-600">What you see is what you pay</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-rodbez-100 p-4 rounded-full mb-4">
              <Users className="h-8 w-8 text-rodbez-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified Users</h3>
            <p className="text-gray-600">Travel with peace of mind</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-rodbez-100 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-rodbez-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Your safety is our priority</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
