import { ProjectCard } from '@/components/portfolio/ProjectCard';
import type { Project } from '@/types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Urban Elegance Wedding Shoot',
    description: 'Capturing the magic of a modern city wedding with a blend of candid moments and artistic portraits.',
    longDescription: 'A full-day wedding photography service in downtown. We focused on capturing the couple\'s unique style against the urban backdrop, from pre-ceremony preparations to the lively reception. Delivered over 500 high-resolution edited images and a curated online gallery.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Wedding Photography', 'Urban', 'Portrait', 'Events'],
    client: 'The Jacksons',
    date: 'October 2023',
    liveUrl: '#',
    dataAiHint: 'wedding couple city'
  },
  {
    id: '2',
    title: 'Startup Launch Promotional Video',
    description: 'Dynamic promotional video for a new tech startup, showcasing their innovative product and team culture.',
    longDescription: 'Produced a 2-minute promotional video including interviews, product demonstrations, and b-roll footage. Our team handled scripting, filming, and post-production, delivering a polished video for their website and social media campaigns.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Videography', 'Corporate', 'Promo Video', 'Tech'],
    client: 'Innovate Solutions Ltd.',
    date: 'February 2024',
    dataAiHint: 'tech startup office'
  },
  {
    id: '3',
    title: 'Family Lifestyle Photography',
    description: 'A relaxed and fun outdoor family photoshoot capturing natural interactions and joyful moments.',
    longDescription: 'An on-location lifestyle session for a family of four at a local park. The goal was to capture authentic moments in a natural setting. The package included 75 edited digital images and a private online gallery for sharing.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Family Photography', 'Lifestyle', 'Outdoor', 'Portraits'],
    client: 'The Miller Family',
    date: 'September 2023',
    dataAiHint: 'family park fun'
  },
  {
    id: '4',
    title: 'Musician Spotlight Video',
    description: 'A short, artistic video piece highlighting a local musician\'s talent and performance style.',
    longDescription: 'This project involved filming a live performance and an interview segment with a solo acoustic artist. The final output was a 3-minute cinematic video designed to showcase their music and personality for promotional use.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Videography', 'Music Video', 'Artistic', 'Performance'],
    client: 'Lena Rose Music',
    date: 'April 2024',
    dataAiHint: 'musician performance stage'
  },
   {
    id: '5',
    title: 'Product Photography for E-commerce',
    description: 'Clean and professional product shots for an online boutique, enhancing their product listings.',
    longDescription: 'Provided high-quality product photography for a range of handcrafted jewelry. Each item was shot on a clean background with consistent lighting to ensure a professional and appealing look for their e-commerce store.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Product Photography', 'E-commerce', 'Commercial', 'Studio'],
    client: 'Artisan Gems Co.',
    date: 'December 2023',
    dataAiHint: 'jewelry product shot'
  },
  {
    id: '6',
    title: 'Corporate Event Highlights Video',
    description: 'Comprehensive video coverage of a multi-day corporate conference, delivering a compelling highlights reel.',
    longDescription: 'Filmed keynotes, breakout sessions, and networking events at a 2-day corporate conference. Produced a 5-minute highlights video capturing the energy and key takeaways of the event for internal and external promotion.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Event Videography', 'Corporate', 'Conference', 'Highlights'],
    client: 'Future Forward Inc.',
    date: 'June 2023',
    dataAiHint: 'conference event business'
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
          Our Creative Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a selection of our photography and videography projects. We are passionate about creating visuals that tell stories and capture essence.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
