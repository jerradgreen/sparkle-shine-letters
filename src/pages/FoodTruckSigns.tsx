import { PageTemplate } from '@/components/templates/PageTemplate';
import { HeroSection } from '@/components/templates/HeroSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { GallerySection } from '@/components/templates/GallerySection';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { CTASection } from '@/components/templates/CTASection';
import { FAQSection } from '@/components/templates/FAQSection';
import { foodTruckSignsConfig } from '@/config/templateConfigs';

const FoodTruckSigns = () => {
  return (
    <PageTemplate 
      config={foodTruckSignsConfig}
      canonicalUrl="https://vintagemarqueelights.com/food-truck-signs"
    >
      <HeroSection config={foodTruckSignsConfig.hero} />
      <FeatureGrid config={foodTruckSignsConfig.features} />
      <GallerySection config={foodTruckSignsConfig.gallery} />
      <TestimonialSection config={foodTruckSignsConfig.testimonials} />
      <FAQSection config={foodTruckSignsConfig.faq} />
      <CTASection config={foodTruckSignsConfig} />
    </PageTemplate>
  );
};

export default FoodTruckSigns;
