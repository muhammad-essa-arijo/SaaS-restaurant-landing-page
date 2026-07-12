import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  MenuSection,
  PricingSection,
  GallerySection,
  TestimonialsSection,
  FAQSection,
  BookingSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MenuSection />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
