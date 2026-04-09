import { MessageSquare } from "lucide-react";

const StickyQuoteButton = () => (
  <a
    href="#contact"
    className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg hover:bg-gold-light transition-colors md:hidden"
  >
    <MessageSquare className="h-4 w-4" />
    Get a Quote
  </a>
);

export default StickyQuoteButton;
