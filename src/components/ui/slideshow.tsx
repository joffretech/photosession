"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageModal, useImageModal } from './image-modal';

interface SlideshowProps {
  images: string[];
  interval?: number; // in milliseconds
  autoPlay?: boolean;
}

export function Slideshow({ images, interval = 5000, autoPlay = true }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, imageSrc, imageAlt, openModal, closeModal } = useImageModal();

  // Auto-advance slides if autoPlay is true
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = (imagePath: string) => {
    openModal(imagePath, `Slide ${currentIndex + 1}`);
  };

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Image Modal */}
      <ImageModal 
        isOpen={isOpen}
        onClose={closeModal}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      
      {/* Current Slide */}
      <div 
        className="relative aspect-[16/9] w-full cursor-pointer"
        onClick={() => handleImageClick(`/products/${images[currentIndex]}`)}
      >
        <Image
          src={`/products/${images[currentIndex]}`}
          alt={`Slide ${currentIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover transition-opacity duration-500"
        />
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
