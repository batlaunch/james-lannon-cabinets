import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", phone: "", details: "" });
  };

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Get a Free Estimate Today
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              Ready to start your project? Give us a call or fill out the form and we'll get back to you within 24 hours.
            </p>
            <a href="tel:6198552122" className="inline-flex items-center gap-3 text-2xl md:text-3xl font-serif font-bold text-accent hover:text-gold-light transition-colors">
              <Phone className="h-7 w-7" />
              (619) 855-2122
            </a>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-xs font-medium text-accent">
                Licensed Contractor
              </span>
              <span className="rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-xs font-medium text-accent">
                Fully Insured
              </span>
              <span className="rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-xs font-medium text-accent">
                Free Estimates
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 md:p-8 space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">Request a Quote</h3>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              rows={4}
              maxLength={1000}
            />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-gold-light">
              <Send className="mr-2 h-4 w-4" />
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
