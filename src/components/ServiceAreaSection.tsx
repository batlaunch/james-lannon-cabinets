import { MapPin } from "lucide-react";

const areas = [
  "El Cajon", "La Mesa", "Santee", "Lakeside", "Spring Valley",
  "Lemon Grove", "San Diego", "Chula Vista", "National City", "Coronado",
  "Poway", "Escondido",
];

const ServiceAreaSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Service Area</h2>
        <p className="text-muted-foreground">Proudly serving El Cajon and the greater San Diego County region.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {areas.map((a) => (
          <span key={a} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {a}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreaSection;
