
import React from "react";
import { Car, Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  const faqs = [
    {
      question: "How does RodBez taxi pooling work?",
      answer: "RodBez taxi pooling matches travelers going in the same direction to share a taxi and split the fare. You can book a seat in an existing taxi pool or create a new one. Our system intelligently matches travelers based on route similarity, timing preferences, and user ratings."
    },
    {
      question: "Is carpooling safe with strangers?",
      answer: "Safety is our top priority. All RodBez users undergo verification including phone, email, and ID proof verification. Drivers undergo additional background checks. We also have a rating system, in-app emergency support, and real-time ride tracking to ensure a safe experience."
    },
    {
      question: "How much can I save with RodBez?",
      answer: "Savings vary depending on the route and travel option you choose. On average, our one-way taxis save 30-40% compared to regular taxis. Taxi pooling can save 40-60%, and carpooling can save up to 70-80% compared to traditional options."
    },
    {
      question: "Do you operate in rural areas of Bihar?",
      answer: "Currently, we operate between major cities and towns in Bihar. While we don't cover all rural areas yet, we're rapidly expanding our network. You can request service for your area through our app, and we prioritize expansion based on demand."
    },
    {
      question: "Can I book for someone else?",
      answer: "Yes, you can book a ride for friends or family members through your account. Simply enter their details during booking, and they'll receive all ride information via SMS. You'll be responsible for the payment, and they'll need to show the booking confirmation to the driver."
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16">
          <div>
            <h3 className="text-2xl font-bold mb-6" id="faq">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8">
              <p className="text-gray-400">
                Have more questions? Our support team is ready to help you.
              </p>
              <div className="mt-4 inline-block bg-rodbez-600 hover:bg-rodbez-700 transition-colors px-6 py-3 rounded-lg font-medium cursor-pointer">
                Contact Support
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <div className="h-12 w-12 mr-3 rounded-full bg-white/10 flex items-center justify-center">
                <Car className="h-6 w-6 text-rodbez-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">RodBez</h3>
                <p className="text-gray-400">Bihar's #1 Taxi & Carpool Service</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-rodbez-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">Corporate Office</p>
                  <address className="text-gray-400 not-italic">
                    123 Transport Bhawan, Patna <br />
                    Bihar, India - 800001
                  </address>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-rodbez-400 mr-3" />
                <div>
                  <p className="text-gray-300">Helpline</p>
                  <p className="text-gray-400">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-rodbez-400 mr-3" />
                <div>
                  <p className="text-gray-300">Email Us</p>
                  <p className="text-gray-400">support@rodbez.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-rodbez-400 mr-3" />
                <div>
                  <p className="text-gray-300">Working Hours</p>
                  <p className="text-gray-400">24 hours, 7 days a week</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Download Our App</h4>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-lg cursor-pointer flex items-center">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.954 11.616L5.281 3.941L16.359 11.616L5.281 19.291L12.954 11.616Z" fill="white"/>
                      <path d="M6.888 2.5L19.806 11.615L6.888 20.73V2.5Z" stroke="white"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
                
                <div className="bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-lg cursor-pointer flex items-center">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5 4.5C15.5 5.5 17 8.5 17 8.5C17 8.5 15 9 14 9C13 9 12 8.5 12 8.5C12 8.5 13 7.5 13 6.5C13 5.5 13.5 3.5 13.5 3.5C13.5 3.5 13.5 3.5 14.5 4.5Z" fill="white"/>
                      <path d="M10 5C8.5 6 7 8.5 7 8.5C7 8.5 9 9 10 9C11 9 12 8.5 12 8.5C12 8.5 11 7.5 11 6.5C11 5.5 10.5 3.5 10.5 3.5C10.5 3.5 11.5 4 10 5Z" fill="white"/>
                      <path d="M7.5 10.5C7.5 10.5 8 10 9 10C10 10 12 10 12 10C12 10 12 11 12 12C12 13 11.5 14.5 11.5 14.5C11.5 14.5 10 13.5 9 13.5C8 13.5 6.5 14 6.5 14C6.5 14 7 12 7 11C7 10 7.5 10.5 7.5 10.5Z" fill="white"/>
                      <path d="M16.5 10.5C16.5 10.5 16 10 15 10C14 10 12 10 12 10C12 10 12 11 12 12C12 13 12.5 14.5 12.5 14.5C12.5 14.5 14 13.5 15 13.5C16 13.5 17.5 14 17.5 14C17.5 14 17 12 17 11C17 10 16.5 10.5 16.5 10.5Z" fill="white"/>
                      <path d="M11.5 15.5C11.5 15.5 11 15 10 15C9 15 7.5 16 7.5 16C7.5 16 7 17.5 7 18.5C7 19.5 7.5 20.5 7.5 20.5C7.5 20.5 9.5 19.5 10 19C10.5 18.5 11.5 16.5 11.5 16.5C11.5 16.5 11.5 16 11.5 15.5Z" fill="white"/>
                      <path d="M12.5 15.5C12.5 15.5 13 15 14 15C15 15 16.5 16 16.5 16C16.5 16 17 17.5 17 18.5C17 19.5 16.5 20.5 16.5 20.5C16.5 20.5 14.5 19.5 14 19C13.5 18.5 12.5 16.5 12.5 16.5C12.5 16.5 12.5 16 12.5 15.5Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">Available on</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 p-6 text-center text-gray-500">
          <p>© 2023 RodBez. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
