
import type { ServicePackage } from '@/types';
import { ServicePackageCard } from '@/components/services/ServicePackageCard';
import { Camera, Video, Briefcase } from 'lucide-react'; // Added Briefcase
import Link from 'next/link';

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
    imageUrl: '/products/upscaleart/IMG_0607.PNG',
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
    imageUrl: '/products/upscaleart/IMG_0608.PNG',
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
    imageUrl: '/products/upscaleart/IMG_0614.JPG',
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
    imageUrl: '/products/upscaleart/IMG_0619.JPG',
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
    imageUrl: '/products/upscaleart/IMG_0620.JPG',
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
    imageUrl: '/products/upscaleart/IMG_1353.JPG',
    dataAiHint: 'business promotional video'
  },
];

const digitalMarketingPackagesData: ServicePackage[] = [
  {
    id: 'dm-landing-page',
    type: 'digital',
    name: 'Landing Page Design',
    description: 'A high-converting landing page to showcase your product or service.',
    details: [
      'Custom design (up to 3 sections)',
      'Responsive development',
      'Contact form integration',
      'Basic SEO setup',
    ],
    price: '$700',
    imageUrl: '/products/upscaleart/IMG_1354.JPG',
    dataAiHint: 'website landing page'
  },
  {
    id: 'dm-logo-branding',
    type: 'digital',
    name: 'Logo & Basic Branding',
    description: 'Create a unique visual identity for your brand.',
    details: [
      '3 logo concepts',
      '2 rounds of revisions',
      'Color palette & typography selection',
      'Final logo files (vector & raster)',
    ],
    price: '$400',
    imageUrl: '/products/upscaleart/IMG_1355.JPG',
    dataAiHint: 'logo design brand'
  },
  {
    id: 'dm-ai-consultation',
    type: 'digital',
    name: 'AI Implementation Consultation',
    description: 'Explore how AI can optimize your business processes.',
    details: [
      '2-hour consultation session',
      'Assessment of current workflows',
      'Identification of AI opportunities',
      'Basic roadmap for implementation',
    ],
    price: '$300',
    imageUrl: '/products/upscaleart/IMG_1356.JPG',
    dataAiHint: 'ai technology business'
  },
];


export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
          Our Comprehensive Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a variety of packages across photography, videography, and digital marketing to suit your needs.
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

      <section>
        <div className="flex items-center mb-8">
          <Briefcase className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-3xl font-semibold text-primary-foreground">Digital Marketing Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalMarketingPackagesData.map((pkg) => (
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
