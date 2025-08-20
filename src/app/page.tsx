import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import AboutPreview from '@/components/sections/AboutPreview';
import LocationsSection from '@/components/sections/LocationsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section - Dark background */}
        <HeroSection />

        {/* Services Overview - White background */}
        <ServicesOverview />

        {/* About Preview - Dark background */}
        <AboutPreview />

        {/* Global Locations - White background */}
        <LocationsSection />

        {/* Testimonials - Dark background */}
        <TestimonialsSection />

        {/* Final CTA - White background */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}