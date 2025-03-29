
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative h-10 w-10 mr-2 overflow-hidden">
            <div className={`absolute inset-0 flex items-center justify-center ${isScrolled ? "" : "animate-rotate-logo"}`}>
              <Car size={30} className={`text-rodbez-600 transform ${isScrolled ? "" : "animate-bounce-small"}`} />
            </div>
          </div>
          <span className={`font-bold text-2xl ${isScrolled ? "text-rodbez-700" : "text-white"}`}>
            RodBez
          </span>
        </div>

        {isMobile ? (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className={isScrolled ? "text-rodbez-700" : "text-white"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        ) : (
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-8">
              {["Home", "Services", "How It Works", "Pricing", "About Us", "FAQ"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className={`font-medium hover:text-rodbez-500 transition-colors ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="bg-rodbez-600 hover:bg-rodbez-700">Book a Ride</Button>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-in-right">
          <ul className="py-4">
            {["Home", "Services", "How It Works", "Pricing", "About Us", "FAQ"].map((item) => (
              <li key={item} className="px-4 py-3 border-b border-gray-100">
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="block font-medium text-gray-700 hover:text-rodbez-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="px-4 py-4">
              <Button className="w-full bg-rodbez-600 hover:bg-rodbez-700">Book a Ride</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
