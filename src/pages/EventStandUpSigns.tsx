import { PageTemplate } from '@/components/templates/PageTemplate';
import { MarqueeHeroSection } from '@/components/MarqueeHeroSection';
import { HighlightsSection } from '@/components/HighlightsSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { GallerySection } from '@/components/templates/GallerySection';
import { FAQSection } from '@/components/templates/FAQSection';
import { MarqueeVisualizer } from '@/components/MarqueeVisualizer';
import { GetQuoteButton } from '@/components/GetQuoteButton';
import { standUpSignsConfig } from '@/config/templateConfigs';

const EventStandUpSigns = () => {
  return (
    <PageTemplate 
      config={standUpSignsConfig}
      canonicalUrl="https://yoursite.com/event-standup-signs"
    >
      <MarqueeHeroSection />
      <FeatureGrid config={standUpSignsConfig.features} />
      <TestimonialSection config={standUpSignsConfig.testimonials} />
      <MarqueeVisualizer />
      
      {/* Get Quote Section replacing pricing packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {standUpSignsConfig.pricing.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {standUpSignsConfig.pricing.subtitle}
          </p>
          <GetQuoteButton 
            className="text-lg px-8 py-4"
            children="Get Your Custom Quote"
          />
        </div>
      </section>

      <GallerySection config={standUpSignsConfig.gallery} />
      <FAQSection config={standUpSignsConfig.faq} />
      
      {/* Final Get Quote Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <GetQuoteButton 
            className="text-lg px-8 py-4"
            children="Get Your Quote"
          />
        </div>
      </section>
    </PageTemplate>
  );
};

export default EventStandUpSigns;