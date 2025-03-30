import React from "react";
import { type CarouselImage } from "@/data/carouselImages";

type CarouselItemProps = {
  image: CarouselImage;
  className?: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ image, className = "" }) => {
  return (
    <div className={`relative group overflow-hidden rounded-lg ${className}`}>
      <div className="flex flex-col h-full">
        <img
          src={image.src}
          alt={image.alt}
          className="scroll-item w-full h-48 md:h-64 object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
        />
        <div className="p-6 bg-white shadow-md flex-grow">
          <p className="text-gray-600 italic mb-4">{image.testimonial}</p>
          <div className="flex items-center">
            <div className="font-bold">{image.name}</div>
            <span className="mx-2">•</span>
            <div className="text-gray-500">{image.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;