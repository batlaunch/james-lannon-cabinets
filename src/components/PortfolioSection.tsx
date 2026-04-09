import { useState } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { src: p1, title: "Custom Cabinet Craftsmanship", category: "Kitchens" },
  { src: p2, title: "Modern Bathroom Vanity", category: "Bathrooms" },
  { src: p3, title: "Built-in Shelving & Storage", category: "Custom Builds" },
  { src: p4, title: "Dark Wood Kitchen Remodel", category: "Kitchens" },
  { src: p5, title: "Crown Molding & Millwork", category: "Custom Builds" },
  { src: p6, title: "Custom Deck Build", category: "Custom Builds" },
];

const categories = ["All", "Kitchens", "Bathrooms", "Custom Builds"];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-muted-foreground">Browse recent projects showcasing our craftsmanship and attention to detail.</p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === c ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img src={p.src} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <p className="text-primary-foreground font-serif font-semibold text-lg">{p.title}</p>
                  <p className="text-primary-foreground/70 text-sm">{p.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
