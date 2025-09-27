import { PageTemplate } from '@/components/templates/PageTemplate';
import { HeroSection } from '@/components/templates/HeroSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { PricingSection } from '@/components/templates/PricingSection';
import { GallerySection } from '@/components/templates/GallerySection';
import { FAQSection } from '@/components/templates/FAQSection';
import { CTASection } from '@/components/templates/CTASection';
import { standUpSignsConfig } from '@/config/templateConfigs';

const EventStandUpSigns = () => {
  return (
    <PageTemplate 
      config={standUpSignsConfig}
      canonicalUrl="https://yoursite.com/event-standup-signs"
    >
      <HeroSection config={standUpSignsConfig.hero} />
      <FeatureGrid config={standUpSignsConfig.features} />
      <TestimonialSection config={standUpSignsConfig.testimonials} />
      <PricingSection config={standUpSignsConfig.pricing} />
      <GallerySection config={standUpSignsConfig.gallery} />
      <FAQSection config={standUpSignsConfig.faq} />
      <CTASection config={standUpSignsConfig} />
    </PageTemplate>
  );
};

export default EventStandUpSigns;