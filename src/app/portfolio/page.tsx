import { ProjectCard } from '@/components/portfolio/ProjectCard';
import type { Project } from '@/types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Luxe Retail E-commerce',
    description: 'A sophisticated online platform for a luxury fashion brand, focusing on elegant UI and seamless user experience.',
    longDescription: 'Developed a full-featured e-commerce website for a high-end fashion retailer. Implemented custom product pages, a streamlined checkout process, and integrated with various payment gateways. The design emphasizes minimalist aesthetics and high-quality imagery to reflect the brand\'s luxury status.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['E-commerce', 'UX/UI', 'Web Development', 'Luxury'],
    client: 'Éclat Paris',
    date: 'June 2023',
    liveUrl: '#',
    dataAiHint: 'fashion website'
  },
  {
    id: '2',
    title: 'Tech Startup Branding',
    description: 'Complete brand identity and website for an innovative AI startup, conveying cutting-edge technology with a human touch.',
    longDescription: 'Crafted a comprehensive brand identity, including logo, color palette, typography, and brand guidelines. Designed and developed a responsive website to showcase their AI solutions, focusing on clear communication of complex concepts and lead generation.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Branding', 'Web Design', 'AI', 'Startup'],
    client: 'Innovate AI',
    date: 'January 2024',
    dataAiHint: 'tech startup'
  },
  {
    id: '3',
    title: 'Artisan Bakery Mobile App',
    description: 'A delightful mobile app for a local artisan bakery, enabling online ordering and loyalty rewards.',
    longDescription: 'Designed and developed a cross-platform mobile application allowing customers to browse products, place orders for pickup or delivery, and participate in a loyalty program. The UI is warm and inviting, reflecting the bakery\'s brand character.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Mobile App', 'UX/UI', 'Food & Beverage', 'Local Business'],
    client: 'The Flour Pot',
    date: 'September 2023',
    dataAiHint: 'bakery app'
  },
  {
    id: '4',
    title: 'Non-Profit Organization Redesign',
    description: 'Website redesign for a global environmental non-profit, aimed at increasing engagement and donations.',
    longDescription: 'Redesigned the NPO\'s website to be more visually compelling and user-friendly. Focused on storytelling through impactful imagery and clear calls to action to drive donations and volunteer sign-ups. Ensured WCAG accessibility compliance.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web Design', 'Non-Profit', 'Advocacy', 'Accessibility'],
    client: 'GreenSphere Org',
    date: 'March 2024',
    dataAiHint: 'nature website'
  },
   {
    id: '5',
    title: 'Boutique Hotel Website',
    description: 'Elegant website for a boutique hotel, showcasing its unique charm and amenities, with an integrated booking system.',
    longDescription: 'Created a visually rich website for a luxury boutique hotel. The design highlights the hotel\'s unique features, rooms, and local attractions. Integrated a seamless online booking engine and focused on mobile-first responsiveness.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Web Design', 'Hospitality', 'Booking System', 'Travel'],
    client: 'The Velvet Key',
    date: 'November 2023',
    dataAiHint: 'hotel interior'
  },
  {
    id: '6',
    title: 'Corporate Identity Overhaul',
    description: 'Complete corporate identity refresh for an established financial services firm, modernizing its image.',
    longDescription: 'Led a full corporate identity overhaul, including a new logo, brand messaging, and all print and digital collateral. The goal was to modernize the brand while retaining its core values of trust and expertise. Developed extensive brand guidelines for consistent implementation.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Branding', 'Corporate ID', 'Finance', 'Graphic Design'],
    client: 'Sterling Group',
    date: 'July 2023',
    dataAiHint: 'modern office'
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
          Explore a selection of our finest work. We craft digital experiences that blend aesthetics with functionality, delivering results that speak for themselves.
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
