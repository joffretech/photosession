import Image from 'next/image';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Dialog>
      <div className="bg-card rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-primary/20 group">
        <DialogTrigger asChild>
          <div className="relative cursor-pointer">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              data-ai-hint={project.dataAiHint}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="h-12 w-12 text-white" />
            </div>
          </div>
        </DialogTrigger>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-primary-foreground group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground/80">{tag}</Badge>
            ))}
          </div>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full text-primary border-primary/50 hover:bg-primary/10 hover:text-primary">View Details</Button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent className="sm:max-w-[800px] bg-card border-border p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-3xl font-bold text-primary">{project.title}</DialogTitle>
          {project.client && <DialogDescription className="text-muted-foreground">Client: {project.client} - {project.date}</DialogDescription>}
        </DialogHeader>
        <div className="p-6 grid gap-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image 
              src={project.imageUrl} 
              alt={project.title} 
              fill 
              className="object-contain" 
              data-ai-hint={project.dataAiHint}
            />
          </div>
          <p className="text-foreground/90 leading-relaxed">
            {project.longDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground/80">{tag}</Badge>
            ))}
          </div>
          {project.liveUrl && (
            <Button asChild variant="default" className="mt-4">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Site <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
