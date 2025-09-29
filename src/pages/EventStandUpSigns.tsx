import { PageTemplate } from '@/components/templates/PageTemplate';
import { MarqueeHeroSection } from '@/components/MarqueeHeroSection';
import { HighlightsSection } from '@/components/HighlightsSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { GallerySection } from '@/components/templates/GallerySection';
import { FAQSection } from '@/components/templates/FAQSection';
import { MarqueeVisualizer } from '@/components/MarqueeVisualizer';
import { GetQuoteButton } from '@/components/GetQuoteButton';
import { Button } from '@/components/ui/button';
import { standUpSignsConfig } from '@/config/templateConfigs';

const EventStandUpSigns = () => {
  return (
    <PageTemplate 
      config={standUpSignsConfig}
      canonicalUrl="https://yoursite.com/event-standup-signs"
    >
      <MarqueeHeroSection />
      
      {/* Hero Action Buttons */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-row gap-3 md:gap-6 justify-center items-center max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="text-xs md:text-lg px-4 md:px-10 py-3 md:py-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.cognitoforms.com/VintageMarqueeLights/EventStyleLettersQuoteForm', '_blank')}
            >
              <span className="hidden md:inline">Get a Quote</span>
              <span className="md:hidden">Get Quote</span>
            </Button>
            
            <Button 
              size="lg" 
              className="text-xs md:text-lg px-3 md:px-8 py-3 md:py-6 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const visualizer = document.querySelector('.marquee-visualizer');
                if (visualizer) {
                  visualizer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="hidden md:inline">Try the Visualizer</span>
              <span className="md:hidden">Try Visualizer</span>
            </Button>
          </div>
        </div>
      </section>

      <FeatureGrid config={standUpSignsConfig.features} />
      <TestimonialSection config={standUpSignsConfig.testimonials} />
      <MarqueeVisualizer />
      

      <GallerySection config={standUpSignsConfig.gallery} />
      <FAQSection config={standUpSignsConfig.faq} />
    </PageTemplate>
  );
};

export default EventStandUpSigns;