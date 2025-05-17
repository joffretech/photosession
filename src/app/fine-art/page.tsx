"use client";

import Image from 'next/image';
import { useState } from 'react';
import { ImageModal, useImageModal } from '@/components/ui/image-modal';

// Fine art images are in the client folder
const imageFiles = [
  'client/1.png',
  'client/2.png',
  'client/3.png',
  'client/4.png',
  'client/9.png',
  'client/15.png',
  'client/IMG_0183_pp.png',
  'client/Untitled-5.png',
];

// Define the project data type with an index signature
type ArtworkInfo = {
  title: string;
  description: string;
  medium: string;
  year: string;
};

type ArtworkDataType = {
  [key: string]: ArtworkInfo;
};

// Sample artwork data with descriptions
const artworkData: ArtworkDataType = {
  'client/1.png': {
    title: 'Abstract Composition I',
    description: 'An exploration of form and color through digital manipulation.',
    medium: 'Digital Art',
    year: '2023'
  },
  'client/2.png': {
    title: 'Urban Fragments',
    description: 'A collage of urban textures and architectural elements.',
    medium: 'Mixed Media',
    year: '2024'
  },
  'client/3.png': {
    title: 'Chromatic Study',
    description: 'An examination of color relationships and visual harmony.',
    medium: 'Digital Painting',
    year: '2023'
  },
  'client/4.png': {
    title: 'Geometric Abstraction',
    description: 'A composition exploring the interplay of geometric forms.',
    medium: 'Digital Art',
    year: '2024'
  },
  'client/9.png': {
    title: 'Textural Landscape',
    description: 'An abstract interpretation of natural landscapes through texture.',
    medium: 'Digital Collage',
    year: '2023'
  },
  'client/15.png': {
    title: 'Minimalist Composition',
    description: 'A study in minimalism and negative space.',
    medium: 'Digital Art',
    year: '2024'
  },
  'client/IMG_0183_pp.png': {
    title: 'Ethereal Light',
    description: 'An exploration of light and atmosphere in digital form.',
    medium: 'Digital Photography',
    year: '2023'
  },
  'client/Untitled-5.png': {
    title: 'Untitled Study',
    description: 'An experimental piece exploring digital manipulation techniques.',
    medium: 'Digital Art',
    year: '2024'
  }
};

const FineArtPage = () => {
  const { isOpen, imageSrc, imageAlt, openModal, closeModal } = useImageModal();
  
  return (
    <div className="space-y-12">
      {/* Image Modal */}
      <ImageModal 
        isOpen={isOpen}
        onClose={closeModal}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
          Fine Art Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of fine art pieces. These works represent our artistic vision beyond commercial photography.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {imageFiles.map((imageFile, index) => {
            const imagePath = `/products/${imageFile}`;
            const artwork = artworkData[imageFile];
            
            return (
              <div key={imageFile} className="bg-card rounded-lg shadow-lg overflow-hidden group">
                <div 
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => openModal(imagePath, artwork.title)}
                >
                  <Image 
                    src={imagePath} 
                    alt={artwork.title} 
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    data-ai-hint="fine art" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-primary-foreground">{artwork.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{artwork.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                      {artwork.medium}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary/20">
                      {artwork.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FineArtPage;
