import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { carouselImages } from "@/data/carouselImages";
import CarouselItem from "./CarouselItem";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type ImageCarouselProps = {
  className?: string;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Set up the GSAP animation with ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !scrollerRef.current) return;

      // Get all items to animate
      const items = scrollerRef.current.querySelectorAll(".scroll-item");
      
      // Create the scroll-triggered animation
      gsap.to(scrollerRef.current, {
        x: () => {
          // Calculate the maximum scroll distance based on the scroller width and container width
          const containerWidth = containerRef.current?.offsetWidth || 0;
          const scrollerWidth = scrollerRef.current?.scrollWidth || 0;
          return -(scrollerWidth - containerWidth);
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Set up automatic scrolling animation
      const autoScroll = gsap.to(scrollerRef.current, {
        x: () => {
          const containerWidth = containerRef.current?.offsetWidth || 0;
          const scrollerWidth = scrollerRef.current?.scrollWidth || 0;
          return -(scrollerWidth - containerWidth);
        },
        duration: 20,
        ease: "linear",
        repeat: -1,
        paused: true,
      });

      // Pause auto-scroll when user interacts with the section
      containerRef.current.addEventListener("mouseenter", () => autoScroll.pause());
      containerRef.current.addEventListener("mouseleave", () => autoScroll.play());
      
      // Start the auto-scroll animation
      autoScroll.play();
    }, containerRef);

    // Clean up the animation when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full overflow-hidden ${className}`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div 
        ref={scrollerRef} 
        className="flex gap-8 px-6 md:px-10"
      >
        {carouselImages.map((image, index) => (
          <CarouselItem 
            key={index}
            image={image}
            className="w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
