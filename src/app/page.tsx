import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Video, Sparkles, Briefcase } from 'lucide-react'; // Added Briefcase

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
            <Image
              src="https://placehold.co/650x450.png"
              alt="Photography and Videography Hero Image"
              width={650}
              height={450}
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              data-ai-hint="camera lens lifestyle"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full py-12 md:py-24 bg-card text-card-foreground rounded-lg shadow-xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Offer</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a range of high-quality photography, videography, and digital marketing packages designed to meet your specific needs. Whether it's a personal milestone, a corporate event, or growing your brand online, we've got you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 xl:grid-cols-4 lg:mt-12"> {/* Adjusted grid for 4 items */}
            <div className="grid gap-1 p-4 rounded-md hover:bg-background transition-colors">
              <div className="flex items-center gap-2">
                <Camera className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Photography</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Stunning portraits, family photos, event coverage, and commercial photography.
              </p>
            </div>
            <div className="grid gap-1 p-4 rounded-md hover:bg-background transition-colors">
              <div className="flex items-center gap-2">
                <Video className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Videography</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Engaging promotional videos, event highlights, interviews, and creative shorts.
              </p>
            </div>
            <div className="grid gap-1 p-4 rounded-md hover:bg-background transition-colors">
              <div className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Digital Marketing</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Website/landing page creation, logo & graphic design, AI implementation, and cybersecurity solutions.
              </p>
            </div>
            <div className="grid gap-1 p-4 rounded-md hover:bg-background transition-colors">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Custom Packages</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Tailored solutions to perfectly match your unique project requirements across all our services.
              </p>
            </div>
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="group">
                <Link href="/services">
                  Explore All Packages <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="w-full py-12 md:py-24">
        <div className="container text-center px-4 md:px-6">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Featured Work</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { id: 1, title: "Golden Hour Portraits", hint: "portrait photography" },
                { id: 2, title: "Dynamic Event Highlights", hint: "event videography" },
                { id: 3, title: "Brand Storytelling Video", hint: "commercial video" }
              ].map(project => (
                <div key={project.id} className="bg-card rounded-lg shadow-lg overflow-hidden group">
                  <Image src={`https://placehold.co/600x400.png`} alt={project.title} width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.hint} />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">A glimpse into our creative capabilities. See more in our portfolio.</p>
                    <Button variant="link" asChild className="text-primary p-0 h-auto">
                      <Link href="/portfolio">View Project <ArrowRight className="ml-1 h-4 w-4"/></Link>
                    </Button>
                  </div>
                </div>
              ))}
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
