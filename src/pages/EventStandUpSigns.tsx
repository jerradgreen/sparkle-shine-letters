import { PageTemplate } from '@/components/templates/PageTemplate';
import { MarqueeHeroSection } from '@/components/MarqueeHeroSection';
import { HighlightsSection } from '@/components/HighlightsSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { GallerySection } from '@/components/templates/GallerySection';
import { MarqueeVisualizer } from '@/components/MarqueeVisualizer';
import { GetQuoteButton } from '@/components/GetQuoteButton';
import { Button } from '@/components/ui/button';
import { standUpSignsConfig } from '@/config/templateConfigs';
import ShopifyHeader from '@/components/ShopifyHeader';
import ShopifyFooter from '@/components/ShopifyFooter';
import { Helmet } from 'react-helmet-async';

const EventStandUpSigns = () => {
  return (
    <PageTemplate 
      config={standUpSignsConfig}
      canonicalUrl="https://yoursite.com/event-standup-signs"
      showChatbot={false}
      showNavigation={true}
      showFooter={false}
    >
      <Helmet>
        <title>Event Stand-Up Marquee Letters - Commercial Grade Rental Signs</title>
        <meta name="description" content="Professional stand-up marquee letters for events. Commercial grade, perfect for weddings, corporate events, and special occasions." />
        {/* Critical: Preload hero image in HEAD to eliminate Load Delay */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/hero-lockwoods.webp"
          fetchPriority="high"
        />
        {/* Ensure image is decoded before render */}
        <link rel="prefetch" href="/images/hero-lockwoods.webp" />
      </Helmet>
      <ShopifyHeader />
      <MarqueeHeroSection />
      
      {/* Hero Action Button - Mobile Only */}
      <section className="py-8 bg-white md:hidden">
        <div className="container mx-auto px-4 text-center">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm px-6 py-4"
            onClick={() => {
                const visualizer = document.querySelector('.marquee-visualizer');
                if (visualizer) {
                  visualizer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Pick Your Letters – Preview Your Setup
            </Button>
        </div>
      </section>

      <HighlightsSection />
      <TestimonialSection config={standUpSignsConfig.testimonials} />
      <MarqueeVisualizer />
      
      {/* Link to Homepage */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Button 
            variant="outline"
            size="lg"
            className="text-sm md:text-base h-auto py-4 md:py-2 whitespace-normal md:whitespace-nowrap leading-tight"
            onClick={() => window.open('https://www.vintagemarqueelights.com', '_blank')}
          >
            <span className="block md:inline">
              Looking for a different style of sign?<br className="md:hidden" /> Click here to go to the homepage
            </span>
          </Button>
        </div>
      </section>

      <GallerySection config={standUpSignsConfig.gallery} />
      
      {/* FAQ Section - 2 Column Layout */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            {standUpSignsConfig.faq.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {standUpSignsConfig.faq.items.map((item, index) => (
              <div key={index} className="border-b border-border pb-4">
                <h3 className="text-base font-bold mb-2 text-foreground">
                  {item.question}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section before Footer */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Your Event Memorable?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Click below, test your letters and get a quote in less than 5 minutes.
          </p>
          <Button 
            variant="outline"
            size="lg" 
            className="text-sm md:text-lg px-6 md:px-10 py-4 md:py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => {
              const visualizer = document.querySelector('.marquee-visualizer');
              if (visualizer) {
                visualizer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Pick Your Letters – Preview Your Setup
          </Button>
        </div>
      </section>

      <ShopifyFooter />
    </PageTemplate>
  );
};

export default EventStandUpSigns;