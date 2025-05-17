"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Video, Sparkles, Briefcase } from 'lucide-react'; // Added Briefcase
import { Slideshow } from '@/components/ui/slideshow';
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
            <div 
              className="cursor-pointer mx-auto aspect-[3/2] overflow-hidden rounded-xl sm:w-full lg:order-last relative"
              onClick={() => openModal("/products/IMG_0607.PNG", "Photography and Videography Hero Image")}
            >
              <Image
                src="/products/IMG_0607.PNG"
                alt="Photography and Videography Hero Image"
                width={650}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="camera lens lifestyle"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Work Slideshow */}
      <section className="w-full py-12 md:py-24 bg-card/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Client Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Browse through our client work. Click on any image to view it in full size.
          </p>
          <Slideshow images={clientImages} interval={4000} />
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="w-full py-12 md:py-24">
        <div className="container text-center px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div className="bg-card rounded-lg shadow-lg overflow-hidden group">
                  <div 
                    className="cursor-pointer" 
                    onClick={() => openModal("/products/IMG_0608.PNG", "Golden Hour Portraits")}
                  >
                    <Image src="/products/IMG_0608.PNG" alt="Golden Hour Portraits" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="portrait photography" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Golden Hour Portraits</h3>
                    <p className="text-muted-foreground text-sm mb-4">A glimpse into our creative capabilities. See more in our portfolio.</p>
                    <Button variant="link" asChild className="text-primary p-0 h-auto">
                      <Link href="/portfolio">View Project <ArrowRight className="ml-1 h-4 w-4"/></Link>
                    </Button>
                  </div>
                </div>
              
                <div className="bg-card rounded-lg shadow-lg overflow-hidden group">
                  <div 
                    className="cursor-pointer" 
                    onClick={() => openModal("/products/IMG_0614.JPG", "Dynamic Event Highlights")}
                  >
                    <Image src="/products/IMG_0614.JPG" alt="Dynamic Event Highlights" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="event videography" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Dynamic Event Highlights</h3>
                    <p className="text-muted-foreground text-sm mb-4">A glimpse into our creative capabilities. See more in our portfolio.</p>
                    <Button variant="link" asChild className="text-primary p-0 h-auto">
                      <Link href="/portfolio">View Project <ArrowRight className="ml-1 h-4 w-4"/></Link>
                    </Button>
                  </div>
                </div>
              
                <div className="bg-card rounded-lg shadow-lg overflow-hidden group">
                  <div 
                    className="cursor-pointer" 
                    onClick={() => openModal("/products/IMG_0619.JPG", "Brand Storytelling Video")}
                  >
                    <Image src="/products/IMG_0619.JPG" alt="Brand Storytelling Video" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="commercial video" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Brand Storytelling Video</h3>
                    <p className="text-muted-foreground text-sm mb-4">A glimpse into our creative capabilities. See more in our portfolio.</p>
                    <Button variant="link" asChild className="text-primary p-0 h-auto">
                      <Link href="/portfolio">View Project <ArrowRight className="ml-1 h-4 w-4"/></Link>
                    </Button>
                  </div>
                </div>
              
           </div>
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
