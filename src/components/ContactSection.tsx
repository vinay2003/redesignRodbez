import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Phone, Mail, MapPin, HelpCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white px-10">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">Contact & Support</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="section-subtitle">
            We're here to help with any questions or concerns you might have
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <ScrollReveal delay={300}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-brand-blue mb-6">Get in Touch</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-darkGray">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-darkGray">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-brand-darkGray">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-darkGray">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
          
          <div className="space-y-8">
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-brand-blue mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone size={20} className="text-brand-orange mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-brand-darkGray/80">+91 80808 12345</p>
                      <p className="text-xs text-gray-500">Available 9 AM - 8 PM, 7 days a week</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="text-brand-orange mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-brand-darkGray/80">support@biharride.com</p>
                      <p className="text-xs text-gray-500">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={20} className="text-brand-orange mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-brand-darkGray/80">Fraser Road, Patna, Bihar 800001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="font-medium mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white hover:bg-brand-lightBlue transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white hover:bg-brand-lightBlue transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white hover:bg-brand-lightBlue transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-brand-blue mb-6">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How does the pricing work for one-way taxis?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our one-way taxi fares are typically 40-50% lower than traditional round-trip taxis because you only pay for one direction. We calculate fares based on distance, vehicle type, and current demand.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Is it safe to travel with strangers in a taxi pool?
                    </AccordionTrigger>
                    <AccordionContent>
                      Safety is our priority. All riders and drivers are verified with ID and phone number. We also have a rating system and 24/7 support. You can also choose female-only pools if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      How far in advance should I book?
                    </AccordionTrigger>
                    <AccordionContent>
                      For guaranteed availability, we recommend booking at least 24 hours in advance, especially for popular routes. However, we also accommodate last-minute bookings based on availability.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      What is your cancellation policy?
                    </AccordionTrigger>
                    <AccordionContent>
                      Cancellations made more than 6 hours before departure are free. Cancellations within 6 hours incur a 20% fee. Cancellations within 1 hour or no-shows incur a 50% fee.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="mt-6 flex items-center justify-center">
                  <HelpCircle size={16} className="text-brand-orange mr-2" />
                  <span className="text-sm text-brand-darkGray">
                    Have more questions? <a href="#" className="text-brand-blue font-medium hover:underline">View all FAQs</a>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
