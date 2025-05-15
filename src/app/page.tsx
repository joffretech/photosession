import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
                  Crafting Digital Excellence
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Bamboo Noir is a design agency dedicated to creating stunning, impactful digital experiences that elevate brands and engage audiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/portfolio">
                    View Our Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/650x450.png"
              alt="Hero Image"
              width={650}
              height={450}
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              data-ai-hint="abstract design"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 bg-card text-card-foreground rounded-lg shadow-xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Bamboo Noir?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We blend artistry with strategy, minimalism with sophistication. Our approach is rooted in understanding your vision and translating it into digital masterpieces that resonate and inspire. Discover the Bamboo Noir difference.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:mt-12">
            <div className="grid gap-1 p-4 rounded-md hover:bg-background transition-colors">
              <h3 className="text-lg font-bold text-primary">Innovative Design</h3>
              <p className="text-sm text-muted-foreground">
                Pushing boundaries with creative and modern aesthetics.
              </p>
            </div>
            <div className="grid gap-1 p-4 rounded-md hover:bg-background transition-colors">
              <h3 className="text-lg font-bold text-primary">User-Centric Approach</h3>
              <p className="text-sm text-muted-foreground">
                Experiences designed for your audience, ensuring engagement and usability.
              </p>
            </div>
            <div className="grid gap-1 p-4 rounded-md hover:bg-background transition-colors">
              <h3 className="text-lg font-bold text-primary">Results-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Designs that not only look good but also achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="w-full py-12 md:py-24">
        <div className="container text-center px-4 md:px-6">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Featured Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for 3 project cards - actual component will be in portfolio page */}
              {[1,2,3].map(i => (
                <div key={i} className="bg-card rounded-lg shadow-lg overflow-hidden group">
                  <Image src={`https://placehold.co/600x400.png`} alt={`Project ${i}`} width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="creative portfolio" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Project Title {i}</h3>
                    <p className="text-muted-foreground text-sm mb-4">A brief description of this amazing project goes here.</p>
                    <Button variant="link" asChild className="text-primary p-0 h-auto">
                      <Link href="/portfolio">Learn More <ArrowRight className="ml-1 h-4 w-4"/></Link>
                    </Button>
                  </div>
                </div>
              ))}
           </div>
           <Button asChild size="lg" className="mt-12 group">
              <Link href="/portfolio">
                Explore All Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
