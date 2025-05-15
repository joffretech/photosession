
"use client";
import Link from 'next/link';
import { Menu, Leaf, Camera } from 'lucide-react'; // Added Camera icon
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { FC } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' }, // New: Services page
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/book', label: 'Book Now' },     // New: Booking page
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
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Camera className="h-6 w-6 text-primary" /> {/* Changed icon to Camera */}
          <span className="font-bold text-xl">Your Brand Name</span> {/* Placeholder for user's brand */}
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
