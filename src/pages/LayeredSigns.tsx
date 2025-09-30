import { PageTemplate } from '@/components/templates/PageTemplate';
import { HeroSection } from '@/components/templates/HeroSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { GallerySection } from '@/components/templates/GallerySection';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { CTASection } from '@/components/templates/CTASection';
import { FAQSection } from '@/components/templates/FAQSection';
import { layeredSignsConfig } from '@/config/templateConfigs';

const LayeredSigns = () => {
  return (
    <PageTemplate 
      config={layeredSignsConfig}
      canonicalUrl="https://vintagemarqueelights.com/layered-signs"
    >
      <HeroSection config={layeredSignsConfig.hero} />
      <FeatureGrid config={layeredSignsConfig.features} />
      <GallerySection config={layeredSignsConfig.gallery} />
      <TestimonialSection config={layeredSignsConfig.testimonials} />
      <FAQSection config={layeredSignsConfig.faq} />
      <CTASection config={layeredSignsConfig} />
    </PageTemplate>
  );
};

export default LayeredSigns;
