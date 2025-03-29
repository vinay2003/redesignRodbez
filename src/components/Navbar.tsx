
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, Phone, Shield, Award, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

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

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about-us" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className={`relative h-10 w-10 md:h-12 md:w-12 mr-2 overflow-hidden ${
            isScrolled ? "bg-rodbez-50 rounded-lg" : ""
          }`}>
            <div className={`absolute inset-0 flex items-center justify-center ${isScrolled ? "" : "animate-float"}`}>
              <Car size={isMobile ? 24 : 32} className={`${isScrolled ? "text-rodbez-700" : "text-white"} drop-shadow-md`} />
            </div>
            {!isScrolled && (
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 rounded-full"></div>
            )}
          </div>
          <div>
            <span className={`font-display text-xl md:text-2xl font-bold ${isScrolled ? "text-rodbez-800" : "text-white"}`}>
              RodBez
            </span>
            <div className={`text-xs ${isScrolled ? "text-rodbez-600" : "text-white/80"} -mt-1 hidden sm:block`}>Premium Taxi Service</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink 
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium hover:text-rodbez-400 transition-colors ${
                        isScrolled ? "text-gray-700" : "text-white"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className={`rounded-full ${
                  isScrolled 
                    ? "border-rodbez-600 text-rodbez-600 hover:bg-rodbez-50" 
                    : "border-white text-white hover:bg-white/20"
                }`}
              >
                <Phone size={16} className="mr-2" /> 
                Contact
              </Button>
              
              <Button 
                className={`group ${
                  isScrolled 
                    ? "bg-rodbez-700 hover:bg-rodbez-800" 
                    : "bg-white text-rodbez-700 hover:bg-white/90"
                }`}
              >
                Book a Ride
                <div className={`ml-2 h-5 w-5 rounded-full ${
                  isScrolled 
                    ? "bg-rodbez-600 group-hover:bg-rodbez-700" 
                    : "bg-rodbez-100 group-hover:bg-rodbez-200"
                } flex items-center justify-center transition-colors`}>
                  <Car size={12} className={isScrolled ? "text-white" : "text-rodbez-700"} />
                </div>
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu Trigger */}
        {isMobile && (
          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={isScrolled ? "text-rodbez-700" : "text-white"}
              >
                <Menu size={24} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh] bg-white/95 backdrop-blur-md p-0">
              <div className="py-4">
                <div className="flex justify-end px-4 pb-4">
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X size={24} className="text-rodbez-700" />
                    </Button>
                  </DrawerClose>
                </div>
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.name} className="border-b border-gray-100 last:border-0">
                      <DrawerClose asChild>
                        <a 
                          href={item.href} 
                          className="flex items-center justify-between px-6 py-3 font-medium text-rodbez-800 hover:bg-rodbez-50 transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronRight size={16} className="text-rodbez-400" />
                        </a>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>
                
                <div className="px-4 py-6 space-y-4">
                  <Button variant="outline" className="w-full border-rodbez-600 text-rodbez-700 justify-between">
                    <span className="flex items-center">
                      <Phone size={16} className="mr-2" />
                      Contact Us
                    </span>
                    <Shield size={16} />
                  </Button>
                  
                  <Button className="w-full bg-rodbez-700 hover:bg-rodbez-800 justify-between">
                    <span className="flex items-center">
                      <Car size={16} className="mr-2" />
                      Book a Ride
                    </span>
                    <Award size={16} />
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </header>
  );
};

export default Navbar;
