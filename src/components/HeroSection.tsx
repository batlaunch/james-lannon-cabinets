import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center pt-16">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Custom kitchen cabinetry by James Lannon" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />
    </div>

    <div className="relative container mx-auto px-4 py-20">
      <div className="max-w-2xl space-y-6 fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal/40 px-4 py-1.5 text-sm text-gold-light backdrop-blur-sm">
          Licensed & Insured · 40+ Years Experience
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
          Custom Cabinets <br className="hidden md:block" />Built to Last
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
          Expert craftsmanship for kitchens, bathrooms, and beyond. Serving El Cajon & San Diego County since 1981.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-8">
            <a href="#contact">Request a Free Quote</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
            <a href="tel:6198552122">
              <Phone className="mr-2 h-4 w-4" />
              Call (619) 855-2122
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
