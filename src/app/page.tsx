"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Video, Sparkles, Briefcase } from 'lucide-react'; // Added Briefcase

import { ImageModal, useImageModal } from '@/components/ui/image-modal';

// Client folder images for slideshow
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

export default function HomePage() {
  const { isOpen, imageSrc, imageAlt, openModal, closeModal } = useImageModal();
  
  return (
    <div className="flex flex-col items-center">
      {/* Image Modal */}
      <ImageModal 
        isOpen={isOpen}
        onClose={closeModal}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      {/* Joffre Elpre */}
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                  Capture Your Moments, Tell Your Story
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Professional photography, videography, and digital marketing services tailored to bring your vision to life. From stunning visuals to impactful online presence, we help you succeed.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/services">
                    Our Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/book">
                    Book a Session
                  </Link>
                </Button>
              </div>
            </div>
                      </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container text-center px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Featured Work</h2>
           <Button asChild size="lg" className="mt-12 group">
              <Link href="/portfolio">
                Explore Full Portfolio <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
