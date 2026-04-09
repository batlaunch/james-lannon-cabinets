import { ChefHat, Bath, Layers, BookOpen, Hammer, Home } from "lucide-react";

const services = [
  { icon: ChefHat, title: "Custom Kitchen Cabinets", desc: "Handcrafted cabinetry designed to fit your space perfectly, from traditional shaker to sleek modern styles." },
  { icon: Bath, title: "Bathroom Vanities", desc: "Beautiful, durable vanities custom-built to maximize storage and complement your bathroom design." },
  { icon: Layers, title: "Countertops", desc: "Premium countertop installation including granite, quartz, marble, and butcher block options." },
  { icon: BookOpen, title: "Built-ins & Storage", desc: "Custom shelving, entertainment centers, and storage solutions tailored to your home." },
  { icon: Hammer, title: "Finish Carpentry & Millwork", desc: "Crown molding, trim, wainscoting, and precision millwork that elevates any room." },
  { icon: Home, title: "Remodeling Projects", desc: "Full kitchen and bathroom remodels from concept to completion with expert project management." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground">From custom cabinetry to full-scale remodels, we bring expert craftsmanship to every project.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card rounded-lg border p-6 hover:shadow-lg hover:border-accent/40 transition-all duration-300">
            <s.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
