
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import SharkTank from "@/components/SharkTank";
import PricingBenefits from "@/components/PricingBenefits";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <SharkTank />
      <PricingBenefits />
      <AboutUs />
      <Testimonial />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
