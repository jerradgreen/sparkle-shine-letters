import { PageTemplate } from "@/components/templates/PageTemplate";
import { HeroSection } from "@/components/templates/HeroSection";
import { FeatureGrid } from "@/components/templates/FeatureGrid";
import { TestimonialSection } from "@/components/templates/TestimonialSection";
import { GallerySection } from "@/components/templates/GallerySection";
import { PricingSection } from "@/components/templates/PricingSection";
import { wallHangingConfig } from "@/config/templateConfigs";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WallHangingMarqueeSigns = () => {
  const handleCTAClick = () => {
    window.open("https://vintagemarqueelights.com/pages/custom-sign-request-form", "_blank");
  };

  return (
    <PageTemplate 
      config={wallHangingConfig}
      canonicalUrl="https://www.vintagemarqueelights.com/wall-hanging-signs"
      showNavigation={true}
      showFooter={false}
      showChatbot={false}
    >
      <ShopifyHeader />
      
      {/* Hero Section */}
      <HeroSection 
        config={wallHangingConfig.hero}
        onCTAClick={handleCTAClick}
      />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{wallHangingConfig.features.title}</h2>
            <p className="text-xl text-muted-foreground">{wallHangingConfig.features.subtitle}</p>
          </div>
          <FeatureGrid config={wallHangingConfig.features} />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For Any Space</h2>
            <p className="text-xl text-muted-foreground">From retail to residential, indoor to outdoor</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">🏪 Retail & Hospitality</h3>
              <p className="text-muted-foreground">
                Coffee shops, boutiques, salons, bars, and restaurants. Create the perfect ambiance that keeps customers coming back.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">🎨 Studios & Workspaces</h3>
              <p className="text-muted-foreground">
                Home offices, creative studios, game rooms, and home theaters. Add personality and style to your space.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">💍 Events & Weddings</h3>
              <p className="text-muted-foreground">
                Photo backdrops, wedding signage, and special event décor. Create unforgettable moments and perfect photo ops.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">🏡 Home Décor</h3>
              <p className="text-muted-foreground">
                Living rooms, bedrooms, patios, and entryways. Transform your home with vintage industrial charm.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">🌳 Outdoor Spaces</h3>
              <p className="text-muted-foreground">
                Pool areas, patios, outdoor bars, and garden spaces. Weather naturally for authentic vintage character.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">📸 Photo Studios</h3>
              <p className="text-muted-foreground">
                Professional photography backdrops and portrait studios. The warm G30 glow photographs beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <TestimonialSection config={wallHangingConfig.testimonials} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <GallerySection config={wallHangingConfig.gallery} />
        </div>
      </section>

      {/* Pricing/CTA */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <PricingSection config={wallHangingConfig.pricing} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">{wallHangingConfig.faq.title}</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to know about wall-hanging marquee signs
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {wallHangingConfig.faq.items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={handleCTAClick}
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-12 shadow-xl border border-border">
            <h2 className="text-4xl font-bold mb-6">Ready to Light Up Your Space?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a custom quote for your wall-hanging marquee signs. Choose your letters, size, and finish to create the perfect vintage statement piece.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-12"
              onClick={handleCTAClick}
            >
              Request Your Quote
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Questions? We're here to help you create the perfect custom sign for your space.
            </p>
          </div>
        </div>
      </section>

      <ShopifyFooter />
    </PageTemplate>
  );
};

export default WallHangingMarqueeSigns;
