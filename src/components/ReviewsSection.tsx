import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Sarah M.", rating: 5, text: "James did an incredible job on our kitchen cabinets. The craftsmanship is outstanding and the attention to detail really shows. Highly recommend!", date: "March 2024" },
  { name: "David R.", rating: 5, text: "We hired James for custom built-in shelving and couldn't be happier. Professional, on-time, and the quality exceeded our expectations.", date: "January 2024" },
  { name: "Linda K.", rating: 5, text: "Beautiful bathroom vanity installed perfectly. James was great to work with — communicated clearly and delivered exactly what we wanted.", date: "November 2023" },
  { name: "Mike T.", rating: 4, text: "Solid work on our countertop replacement. Very knowledgeable about materials and helped us choose the right option for our budget.", date: "September 2023" },
  { name: "Jennifer P.", rating: 5, text: "From design to installation, the whole process was smooth. Our new kitchen cabinets transformed the entire room. Worth every penny!", date: "July 2023" },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < count ? "fill-accent text-accent" : "text-border"}`} />
    ))}
  </div>
);

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Stars count={5} />
          <span className="text-sm text-muted-foreground">4.8 out of 5 · {reviews.length} reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-lg border p-6 space-y-3">
            <Stars count={r.rating} />
            <p className="text-sm text-foreground leading-relaxed">"{r.text}"</p>
            <div className="flex justify-between items-center pt-2">
              <span className="font-medium text-sm text-foreground">{r.name}</span>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          Leave a Review
        </Button>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
