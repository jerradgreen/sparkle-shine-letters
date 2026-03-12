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
      canonicalUrl="https://inventory.vintagemarqueelights.com/event-standup-signs"
      showNavigation={true}
      showFooter={false}
    >
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

      {/* Institutional / Repeat-Use Block */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-center">
            Who Buys Commercial Freestanding Marquee Letters?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
            Our freestanding marquee letters are purchased by <strong>universities, event companies, venues, athletic departments, corporate marketing teams, and schools</strong> that need reusable event signage — not a one-time decoration. Common use cases include graduations, brand activations, conferences, recruiting events, donor events, pep rallies, stage displays, and sponsor activations.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Universities invest in marquee letters for campus-wide branding across graduations, athletic events, and recruiting. Event companies and venues purchase sets for repeated client deployments. Corporate teams buy their company name or recurring event title for year-after-year use. Schools purchase letters for graduations, pep rallies, and branded campus events. Owning your own letters ensures consistent branding, eliminates rental coordination, and allows you to deploy them whenever needed.
          </p>
        </div>
      </section>

      <HighlightsSection />

      {/* Built for Institutional Use */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-center">
            Built for Repeated Event Deployment
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The 36-inch size is the most popular choice — easy to store, transport, and deploy across a full calendar of events. The 48-inch size is available for high-visibility venues such as auditoriums, outdoor stadiums, and convention halls. Every freestanding letter is built with powder-coated steel construction designed for repeated transport and setup across years of use. Universities, event companies, venues, athletic departments, and schools purchase these as long-term reusable event signage.
          </p>
        </div>
      </section>

      <TestimonialSection config={standUpSignsConfig.testimonials} />
      <MarqueeVisualizer />
      

      {/* Link to Homepage */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Button 
            variant="outline"
            size="lg"
            className="text-sm md:text-base h-auto py-4 md:py-2 whitespace-normal md:whitespace-nowrap leading-tight"
            onClick={() => window.open('https://inventory.vintagemarqueelights.com', '_blank')}
          >
            <span className="block md:inline">
              Looking for a different style of sign?<br className="md:hidden" /> Click here to go to the homepage
            </span>
          </Button>
        </div>
      </section>

      {/* What to Buy — Inventory Guidance */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 text-center">
            What to Buy: Letters, Numbers, Symbols &amp; Accessories
          </h2>
          <ul className="text-sm md:text-base text-muted-foreground space-y-2 list-disc list-inside">
            <li><strong>Letters A–Z</strong> and <strong>numbers 0–9</strong> — spell names, dates, years, and custom phrases.</li>
            <li><strong>Symbols</strong> — ampersand (&amp;), hashtag (#), heart (♥), and more.</li>
            <li><strong>36″ letters</strong> are the standard size. <strong>48″ letters</strong> are available for maximum visibility at larger venues.</li>
            <li><strong>15″ topper phrases</strong> (THE, MR&amp;MRS, CLASS OF, BABY) sit on top of your letters for layered displays.</li>
            <li><strong>Double-row display stands</strong> (optional) hold two rows of letters side by side for longer messages.</li>
            <li><strong>Foam-lined boxes</strong> (optional) for safe storage and repeated transport.</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4 italic">
            We strongly recommend ordering your full inventory upfront. Commercial production runs are more efficient at scale — adding small quantities later typically costs more per unit and extends lead times.
          </p>
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

          <p className="text-sm text-muted-foreground mt-8 max-w-5xl mx-auto">
            Starting a rental inventory business instead? See our{' '}
            <a href="/rental-inventory" className="text-primary underline hover:text-primary/80 transition-colors">
              Commercial Rental Inventory Packages
            </a>.
          </p>

          <p className="text-sm text-muted-foreground mt-4 max-w-5xl mx-auto">
            Need a different style of sign? Explore our{' '}
            <a href="/wall-hanging-signs" className="text-primary underline hover:text-primary/80 transition-colors">
              Wall-Hanging Marquee Signs
            </a>{' '}
            and{' '}
            <a href="/3d-logos" className="text-primary underline hover:text-primary/80 transition-colors">
              Custom Layered Logos
            </a>{' '}
            for permanent installations, retail displays, and branded décor.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-5xl mx-auto">
            If your project calls for a fully integrated brand mark rather than freestanding letters, our{' '}
            <a href="/3d-logos" className="text-primary underline hover:text-primary/80 transition-colors">
              Custom Logo Signs
            </a>{' '}
            offer layered metal fabrication with dimensional depth and hand-finished detail.
          </p>
        </div>
      </section>

      {/* CTA Section before Footer */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in Commercial Marquee Letters?
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