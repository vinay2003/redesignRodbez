import React from 'react';
import { Heart } from 'lucide-react';
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-rodbez-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="h-8 w-8 rounded-full bg-brand-orange flex items-center justify-center">
              </span>
              <span className="font-bold text-xl text-white">
                Rodbez
              </span>
            </a>
            <p className="text-white/80 mb-4">
              Bihar's first intercity carpooling and taxi sharing platform, making travel affordable, comfortable, and eco-friendly.
            </p>
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Vinay. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Download Our App</h3>
            <p className="text-white/80 mb-4">
              Get the BiharRide mobile app for a seamless booking experience.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="#" className="bg-black rounded-lg px-4 py-2 flex items-center hover:bg-gray-900 transition-colors">
                <div className="mr-3">
                <FaApple className='text-2xl'/>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black rounded-lg px-4 py-2 flex items-center hover:bg-gray-900 transition-colors">
                <div className="mr-3">
                  <IoLogoAndroid className='text-3xl'/>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="flex items-center justify-center text-white/80">
            Made with <Heart size={16} className="mx-1 text-brand-orange" /> in Bihar, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
