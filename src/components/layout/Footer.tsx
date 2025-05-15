import { Camera, Twitter, Github, Linkedin } from 'lucide-react'; // Changed Leaf to Camera

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Camera className="h-6 w-6 text-primary" /> {/* Changed icon */}
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} BAMBOO NOIR LLC. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
