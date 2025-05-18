"use client";

import Image from 'next/image';
import { useState } from 'react';
import { ImageModal, useImageModal } from '@/components/ui/image-modal';

// Fine art images are in the client folder
const imageFiles = [
  '_MG_1638.png',
  '_MG_1642.png',
  '-694668199506973819_IMG_0943.png',
  '-4493573127323729894_IMG_0573.png',
  '-7322014444747395961_IMG_0628.png',
  '-8602394883702563786_IMG_0534.png',
  '3B0E9B03-E4A0-4E71-8502-60F5D0B28C89.png',
  '7E0E253F-54A1-4DD2-AF5E-B5FB69ECF8D6.png',
  '6009246033779422918_IMG_0159.png',
  '7121637698921781200_IMG_0445.png',
  'AdobePhotoshopExpress_2019-02-25_02-08-12-0500.png',
  'DBD2DD21-AA6F-4A39-A6CB-DAEAED408BB7.png',
  'E5508085-3A8A-4AA7-A645-428717148DA3.png',
  'IMG_0007.png',
  'IMG_0071.png',
  'IMG_0072.png',
  'IMG_0075.png',
  'IMG_0076.png',
  'IMG_0077.png',
  'IMG_0204.png',
  'IMG_0368.png',
  'New_Project_2019-02-13_15_39_23.png',
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
  },
  '_MG_1638.png': {
    title: 'MG 1638',
    description: 'Upscaled version of MG 1638.',
    medium: 'Digital Art',
    year: '2024'
  },
  '_MG_1642.png': {
    title: 'MG 1642',
    description: 'Upscaled version of MG 1642.',
    medium: 'Digital Art',
    year: '2024'
  },
  '-694668199506973819_IMG_0943.png': {
    title: 'IMG 0943',
    description: 'Upscaled version of IMG 0943.',
    medium: 'Digital Art',
    year: '2024'
  },
  '-4493573127323729894_IMG_0573.png': {
    title: 'IMG 0573',
    description: 'Upscaled version of IMG 0573.',
    medium: 'Digital Art',
    year: '2024'
  },
  '-7322014444747395961_IMG_0628.png': {
    title: 'IMG 0628',
    description: 'Upscaled version of IMG 0628.',
    medium: 'Digital Art',
    year: '2024'
  },
  '-8602394883702563786_IMG_0534.png': {
    title: 'IMG 0534',
    description: 'Upscaled version of IMG 0534.',
    medium: 'Digital Art',
    year: '2024'
  },
  '3B0E9B03-E4A0-4E71-8502-60F5D0B28C89.png': {
    title: '3B0E9B03',
    description: 'Upscaled version of 3B0E9B03.',
    medium: 'Digital Art',
    year: '2024'
  },
  '7E0E253F-54A1-4DD2-AF5E-B5FB69ECF8D6.png': {
    title: '7E0E253F',
    description: 'Upscaled version of 7E0E253F.',
    medium: 'Digital Art',
    year: '2024'
  },
  '6009246033779422918_IMG_0159.png': {
    title: 'IMG 0159',
    description: 'Upscaled version of IMG 0159.',
    medium: 'Digital Art',
    year: '2024'
  },
  '7121637698921781200_IMG_0445.png': {
    title: 'IMG 0445',
    description: 'Upscaled version of IMG 0445.',
    medium: 'Digital Art',
    year: '2024'
  },
  'AdobePhotoshopExpress_2019-02-25_02-08-12-0500.png': {
    title: 'AdobePhotoshopExpress',
    description: 'Upscaled version of AdobePhotoshopExpress.',
    medium: 'Digital Art',
    year: '2024'
  },
  'DBD2DD21-AA6F-4A39-A6CB-DAEAED408BB7.png': {
    title: 'DBD2DD21',
    description: 'Upscaled version of DBD2DD21.',
    medium: 'Digital Art',
    year: '2024'
  },
  'E5508085-3A8A-4AA7-A645-428717148DA3.png': {
    title: 'E5508085',
    description: 'Upscaled version of E5508085.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0007.png': {
    title: 'IMG 0007',
    description: 'Upscaled version of IMG 0007.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0071.png': {
    title: 'IMG 0071',
    description: 'Upscaled version of IMG 0071.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0072.png': {
    title: 'IMG 0072',
    description: 'Upscaled version of IMG 0072.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0075.png': {
    title: 'IMG 0075',
    description: 'Upscaled version of IMG 0075.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0076.png': {
    title: 'IMG 0076',
    description: 'Upscaled version of IMG 0076.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0077.png': {
    title: 'IMG 0077',
    description: 'Upscaled version of IMG 0077.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0204.png': {
    title: 'IMG 0204',
    description: 'Upscaled version of IMG 0204.',
    medium: 'Digital Art',
    year: '2024'
  },
  'IMG_0368.png': {
    title: 'IMG 0368',
    description: 'Upscaled version of IMG 0368.',
    medium: 'Digital Art',
    year: '2024'
  },
  'New_Project_2019-02-13_15_39_23.png': {
    title: 'New Project 2019',
    description: 'Upscaled version of New Project 2019.',
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
            const imagePath = `/products/upscaleart/${imageFile}`;
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
