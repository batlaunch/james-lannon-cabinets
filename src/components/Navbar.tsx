import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-lg font-bold text-foreground">
          James Lannon
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:6198552122" className="flex items-center gap-1.5 text-sm font-semibold text-accent">
            <Phone className="h-4 w-4" />
            (619) 855-2122
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-light">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="tel:6198552122" className="flex items-center gap-1.5 text-sm font-semibold text-accent">
            <Phone className="h-4 w-4" />
            (619) 855-2122
          </a>
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-gold-light">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
