import type { ServicePackage } from '@/types';
import { ServicePackageCard } from '@/components/services/ServicePackageCard';
import { Camera, Video } from 'lucide-react';

const photoPackagesData: ServicePackage[] = [
  {
    id: 'photo-bronze',
    type: 'photo',
    name: 'Bronze Photo Package',
    description: 'Perfect for individual portraits or headshots.',
    details: [
      '1-hour session',
      '1 location',
      '20 edited high-resolution digital images',
      'Online gallery for viewing and sharing',
    ],
    price: '$250',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'portrait photography session'
  },
  {
    id: 'photo-silver',
    type: 'photo',
    name: 'Silver Photo Package',
    description: 'Ideal for families, couples, or lifestyle shoots.',
    details: [
      '2-hour session',
      'Up to 2 nearby locations',
      '50 edited high-resolution digital images',
      'Online gallery',
      '1 8x10 print',
    ],
    price: '$450',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'family lifestyle photo'
  },
  {
    id: 'photo-gold',
    type: 'photo',
    name: 'Gold Photo Package',
    description: 'Comprehensive coverage for small events or extended sessions.',
    details: [
      '4-hour coverage',
      '150+ edited high-resolution digital images',
      'Online gallery',
      'Short slideshow video (music included)',
    ],
    price: '$900',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'event photography coverage'
  },
];

const videoPackagesData: ServicePackage[] = [
  {
    id: 'video-highlight',
    type: 'video',
    name: 'Highlight Reel',
    description: 'Short, impactful video for personal or brand promotion.',
    details: [
      'Up to 2 hours of filming',
      '1-2 minute professionally edited video',
      'Licensed music',
      'Digital delivery',
    ],
    price: '$500',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'video highlight reel'
  },
  {
    id: 'video-event',
    type: 'video',
    name: 'Event Coverage Basic',
    description: 'Capture the essence of your small event.',
    details: [
      'Up to 3 hours of filming',
      '5-7 minute highlight video',
      'Ceremony/main presentation full recording (if applicable)',
      'Licensed music',
    ],
    price: '$1000',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'event videography film'
  },
  {
    id: 'video-promo',
    type: 'video',
    name: 'Promotional Video',
    description: 'Professionally crafted video to boost your business.',
    details: [
      'Pre-production consultation',
      'Up to 4 hours of filming',
      '2-3 minute promotional video',
      'Basic motion graphics & licensed music',
    ],
    price: '$1500',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'business promotional video'
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
          Our Photography & Videography Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a variety of packages to suit your needs, from personal portraits to comprehensive event coverage.
          Each package is designed to deliver high-quality results and a seamless experience.
        </p>
      </section>

      <section>
        <div className="flex items-center mb-8">
          <Camera className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-3xl font-semibold text-primary-foreground">Photography Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoPackagesData.map((pkg) => (
            <ServicePackageCard key={pkg.id} packageInfo={pkg} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center mb-8">
          <Video className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-3xl font-semibold text-primary-foreground">Videography Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoPackagesData.map((pkg) => (
            <ServicePackageCard key={pkg.id} packageInfo={pkg} />
          ))}
        </div>
      </section>

       <section className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Need something different?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We understand every project is unique. If our standard packages don't quite fit, 
          <Link href="/contact" className="text-primary hover:underline ml-1">
            contact us
          </Link> for a custom quote.
        </p>
      </section>
    </div>
  );
}
