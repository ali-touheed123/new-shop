import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import BrandsSection from '@/components/BrandsSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import FeaturesSection from '@/components/FeaturesSection';
import PaintingServiceSection from '@/components/PaintingServiceSection';
import StoreBanner from '@/components/StoreBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PaintingServiceSection />
      <CategoriesSection />
      <FeaturedProducts />
      <StoreBanner />
      <BrandsSection />
      <TestimonialsSection />
      <FAQSection />
      <FeaturesSection />
    </main>
  );
}
