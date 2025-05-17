"use client";

import Image from 'next/image';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import type { Project } from '@/types';
import { useState } from 'react';
import { ImageModal, useImageModal } from '@/components/ui/image-modal';

// Art photography images
const artImages = [
  'art/_MG_1638.jpeg',
  'art/_MG_1642.jpeg',
  'art/-694668199506973819_IMG_0943.jpeg',
  'art/-4493573127323729894_IMG_0573.jpeg',
  'art/-7322014444747395961_IMG_0628.jpeg',
  'art/-8602394883702563786_IMG_0534.jpeg',
  'art/3B0E9B03-E4A0-4E71-8502-60F5D0B28C89.jpeg',
  'art/6009246033779422918_IMG_0159.jpeg',
  'art/7121637698921781200_IMG_0445.jpeg',
  'art/7E0E253F-54A1-4DD2-AF5E-B5FB69ECF8D6.jpeg',
  'art/AdobePhotoshopExpress_2019-02-25_02-08-12-0500.jpeg',
  'art/DBD2DD21-AA6F-4A39-A6CB-DAEAED408BB7.jpeg',
  'art/E5508085-3A8A-4AA7-A645-428717148DA3.jpeg',
  'art/IMG_0007.jpeg',
  'art/IMG_0071.jpeg',
  'art/IMG_0072.jpeg',
  'art/IMG_0075.jpeg',
  'art/IMG_0076.jpeg',
  'art/IMG_0077.jpeg',
  'art/IMG_0204.jpeg',
  'art/IMG_0368.jpeg',
  'art/New_Project_2019-02-13_15_39_23.jpeg',
];

// Corporate photography images
const corporateImages = [
  'corporate/095A0362.jpg',
  'corporate/095A0384.jpg',
  'corporate/095A0407.jpg',
  'corporate/095A0418.jpg',
  'corporate/095A0425.jpg',
  'corporate/095A0485.jpg',
  'corporate/095A0562.jpg',
  'corporate/095A0635.jpg',
  'corporate/095A0769.jpg',
  'corporate/095A0810.jpg',
];

// Client work images (excluding fine art pieces which are in the Fine Art page)
const clientImages = [
  'client/095A1321.jpg',
  'client/095A1323.jpg',
  'client/095A1324.jpg',
  'client/095A1420.jpg',
  'client/IMG_0607.PNG',
  'client/IMG_0608.PNG',
  'client/IMG_0614.JPG',
  'client/IMG_0619.JPG',
  'client/IMG_0620.JPG',
  'client/IMG_1353.JPG',
  'client/IMG_1354.JPG',
  'client/IMG_1355.JPG',
  'client/IMG_1356.JPG',
  'client/IMG_1357.JPG',
  'client/IMG_1361.JPG',
  'client/IMG_1369_pp+2.jpeg',
  'client/IMG_2282.PNG',
  'client/IMG_2287.JPG',
  'client/IMG_3004.PNG',
  'client/IMG_4766.jpeg',
  'client/IMG_4784.jpeg',
];

// Combine all images for the portfolio page
const imageFiles = [...artImages, ...corporateImages, ...clientImages];

// Define the project data type with an index signature
type ProjectInfo = {
  title: string;
  description: string;
  category: string;
};

type ProjectDataType = {
  [key: string]: ProjectInfo;
};

// Sample project data with descriptions
const projectData: ProjectDataType = {
  // Art category
  'art/_MG_1638.jpeg': {
    title: 'Urban Portrait Session',
    description: 'Professional portrait photography in an urban setting.',
    category: 'Art Photography'
  },
  'art/_MG_1642.jpeg': {
    title: 'Natural Light Portraiture',
    description: 'Capturing personality with natural lighting techniques.',
    category: 'Art Photography'
  },
  'art/IMG_0007.jpeg': {
    title: 'Artistic Portrait',
    description: 'Creative portrait photography with artistic expression.',
    category: 'Art Photography'
  },
  
  // Corporate category
  'corporate/095A0362.jpg': {
    title: 'Corporate Event Coverage',
    description: 'Professional photography for corporate events and conferences.',
    category: 'Corporate'
  },
  'corporate/095A0384.jpg': {
    title: 'Business Portrait',
    description: 'Professional headshots and portraits for business professionals.',
    category: 'Corporate'
  },
  'corporate/095A0407.jpg': {
    title: 'Office Environment',
    description: 'Capturing the modern workplace and corporate culture.',
    category: 'Corporate'
  },
  
  // Client work category
  'client/IMG_0620.JPG': {
    title: 'Wedding Photography',
    description: 'Elegant wedding photography capturing special moments.',
    category: 'Wedding'
  },
  'client/IMG_1353.JPG': {
    title: 'Product Photography',
    description: 'Professional product shots for e-commerce and marketing.',
    category: 'Commercial'
  },
  'client/IMG_1354.JPG': {
    title: 'Family Portrait Session',
    description: 'Capturing family connections and relationships.',
    category: 'Family'
  },
  'client/IMG_1355.JPG': {
    title: 'Fashion Photography',
    description: 'Creative fashion photography for portfolios and campaigns.',
    category: 'Fashion'
  }
};

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { isOpen, imageSrc, imageAlt, openModal, closeModal } = useImageModal();
  
  // Filter images based on selected category
  const filteredImages = selectedCategory 
    ? imageFiles.filter(img => {
        const category = img.startsWith('art/') 
          ? 'Art' 
          : img.startsWith('corporate/') 
            ? 'Corporate' 
            : 'Client';
        return category === selectedCategory;
      })
    : imageFiles;

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
          Our Creative Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a selection of our photography and videography projects. We are passionate about creating visuals that tell stories and capture essence.
        </p>
      </section>

      {/* Category filter */}
      <section className="flex justify-center space-x-4">
        <button 
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-md ${!selectedCategory ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}`}
        >
          All
        </button>
        <button 
          onClick={() => setSelectedCategory('Art')}
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Art' ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}`}
        >
          Art Photography
        </button>
        <button 
          onClick={() => setSelectedCategory('Corporate')}
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Corporate' ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}`}
        >
          Corporate
        </button>
        <button 
          onClick={() => setSelectedCategory('Client')}
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Client' ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}`}
        >
          Client Work
        </button>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((imageFile, index) => {
            const imagePath = `/products/${imageFile}`;
            const project = projectData[imageFile] || {
              title: imageFile.split('/').pop()?.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' ') || '',
              description: 'A glimpse into our creative capabilities. See more in our portfolio.',
              category: imageFile.startsWith('art/') 
                ? 'Art Photography' 
                : imageFile.startsWith('corporate/') 
                  ? 'Corporate' 
                  : 'Client Work'
            };
            
            return (
              <div key={imageFile} className="bg-card rounded-lg shadow-lg overflow-hidden group">
                <div 
                  className="cursor-pointer" 
                  onClick={() => openModal(imagePath, project.title)}
                >
                  <Image 
                    src={imagePath} 
                    alt={project.title} 
                    width={600} 
                    height={400}
                    priority={index === 0}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    data-ai-hint={project.category.toLowerCase()} 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                      {project.category}
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

export default PortfolioPage;
