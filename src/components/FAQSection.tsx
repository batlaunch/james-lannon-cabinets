import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How much do custom cabinets cost?", a: "Pricing varies based on materials, size, and complexity. We offer free estimates so you can get an accurate quote for your specific project." },
  { q: "How long does a typical project take?", a: "Most cabinet projects take 4–8 weeks from design to installation. Kitchen remodels may take longer depending on scope." },
  { q: "What materials do you use?", a: "We work with a wide range of hardwoods, plywood, MDF, and premium finishes. We'll help you choose the best materials for your budget and style." },
  { q: "Do you offer a warranty?", a: "Yes, we stand behind our work with a comprehensive warranty on craftsmanship and installation." },
  { q: "Do you handle permits?", a: "As a licensed contractor, we can help navigate any required permits for your remodeling project." },
];

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-lg px-6">
            <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
