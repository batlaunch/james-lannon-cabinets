import p1 from "@/assets/portfolio-1.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden">
          <img src={p1} alt="Custom cabinet craftsmanship" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Decades of Craftsmanship,<br />One Project at a Time
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Since 1981, James Lannon Custom Cabinets & Countertops has been serving El Cajon and the greater San Diego area with unparalleled woodworking expertise. What started as a passion for fine carpentry has grown into a trusted local business known for precision, reliability, and attention to detail.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every project receives hands-on attention from concept to completion. We take pride in understanding your vision and bringing it to life with superior materials and time-tested techniques. As a licensed cabinet, millwork, and finish carpentry contractor, we hold ourselves to the highest standards of the trade.
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-serif font-bold text-accent">40+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
