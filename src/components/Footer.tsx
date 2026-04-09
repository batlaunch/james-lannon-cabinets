import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal border-t border-charcoal py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-primary-foreground">James Lannon</h3>
          <p className="text-sm text-primary-foreground/60">Custom Cabinets & Countertops</p>
          <p className="text-xs text-primary-foreground/40">Licensed Contractor · Cabinet, Millwork & Finish Carpentry</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-primary-foreground">Quick Links</h4>
          <div className="flex flex-col gap-1.5">
            {["Services", "Portfolio", "About", "Reviews", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-primary-foreground">Contact</h4>
          <a href="tel:6198552122" className="flex items-center gap-2 text-sm text-accent hover:text-gold-light transition-colors">
            <Phone className="h-4 w-4" /> (619) 855-2122
          </a>
          <div className="flex items-start gap-2 text-sm text-primary-foreground/60">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> El Cajon, California
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} James Lannon Custom Cabinets & Countertops. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
