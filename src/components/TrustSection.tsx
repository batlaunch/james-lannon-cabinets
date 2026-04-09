import { Shield, Award, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years in Business", value: "40+" },
  { icon: Shield, label: "Licensed & Insured", value: "Yes" },
  { icon: Award, label: "Credibility Score", value: "95/100" },
  { icon: MapPin, label: "Local Contractor", value: "El Cajon, CA" },
];

const TrustSection = () => (
  <section className="py-16 bg-card border-y">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center space-y-2">
            <s.icon className="h-8 w-8 mx-auto text-accent" />
            <div className="text-2xl md:text-3xl font-serif font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center max-w-2xl mx-auto text-muted-foreground leading-relaxed">
        James Lannon Custom Cabinets & Countertops is a fully licensed California contractor specializing in cabinet, millwork, and finish carpentry. With over four decades of hands-on experience, we deliver exceptional quality on every project.
      </p>
    </div>
  </section>
);

export default TrustSection;
