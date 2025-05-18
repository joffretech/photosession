import Link from 'next/link';
import type { ServicePackage } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServicePackageCardProps {
  packageInfo: ServicePackage;
}

export function ServicePackageCard({ packageInfo }: ServicePackageCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-xl hover:shadow-primary/20 transition-shadow duration-300 h-full">
      <CardHeader className="p-0">
        <img
          src={packageInfo.imageUrl}
          alt={packageInfo.name}
          className="w-full h-48 object-cover" // Fixed height for consistency
          data-ai-hint={packageInfo.dataAiHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold text-primary mb-2">{packageInfo.name}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">{packageInfo.description}</CardDescription>
        <ul className="space-y-2 mb-6 text-sm">
          {packageInfo.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-foreground/90">{detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30 flex flex-col items-stretch space-y-4">
        <p className="text-3xl font-bold text-center text-primary-foreground">{packageInfo.price}</p>
        <Button asChild size="lg" className="w-full group">
          <Link href={`/book?package=${packageInfo.id}`}>
            Book This Package <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
