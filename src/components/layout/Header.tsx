
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { FC } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/book', label: 'Book Now' },
  { href: '/contact', label: 'Contact' },
];

interface NavLinkProps {
  href: string;
  label: string;
  isMobile?: boolean;
  onClose?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ href, label, isMobile, onClose }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkContent = (
    <span
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-foreground/80",
        isMobile && "text-lg py-2 block"
      )}
    >
      {label}
    </span>
  );

  if (isMobile && onClose) {
    return (
      <SheetClose asChild>
        <Link href={href} onClick={onClose}>
          {linkContent}
        </Link>
      </SheetClose>
    );
  }

  return (
    <Link href={href}>
      {linkContent}
    </Link>
  );
};


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Using next/image for the logo */}
          <Image
            src="/bamboo-noir-logo.png" // Make sure this path is correct if you named your file differently
            alt="BAMBOO NOIR DESIGN Logo"
            width={60} // Adjusted width for the new logo
            height={60} // Adjusted height for the new logo (assuming square aspect ratio)
            className="object-contain" 
            priority 
            data-ai-hint="company logo brand"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                   <NavLink key={item.href} href={item.href} label={item.label} isMobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
