import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyQuoteButton from "@/components/StickyQuoteButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ReviewsSection />
      <ServiceAreaSection />
      <ContactSection />
      <FAQSection />
    </main>
    <Footer />
    <StickyQuoteButton />
  </>
);

export default Index;
