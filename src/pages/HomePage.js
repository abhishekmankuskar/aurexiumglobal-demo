import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ImportExportSection from '../components/ImportExportSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main data-testid="home-page">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ImportExportSection />
      <StatsSection />
      <TestimonialsSection />
      {/* <CTASection /> */}
      <ContactSection />
    </main>
  );
}
