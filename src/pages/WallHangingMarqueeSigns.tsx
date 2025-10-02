import { PageTemplate } from "@/components/templates/PageTemplate";
import { HeroSection } from "@/components/templates/HeroSection";
import { TestimonialSection } from "@/components/templates/TestimonialSection";
import { GallerySection } from "@/components/templates/GallerySection";
import { wallHangingConfig } from "@/config/templateConfigs";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Button } from "@/components/ui/button";
import { Hammer, Lightbulb, Frame, PenTool, Home, Settings, Camera, Clock, Shield } from "lucide-react";

const WallHangingMarqueeSigns = () => {
  const handleCTAClick = () => {
    window.open("https://www.cognitoforms.com/VintageMarqueeLights/EventStyleLettersQuoteForm?entry=%7B%22ProductType%22%3A%22Wall%20Hanging%20Letters%22%7D", "_blank");
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
      <div className="-mt-20">
        <HeroSection 
          config={wallHangingConfig.hero}
          onCTAClick={handleCTAClick}
        />
      </div>

      {/* 10 Reasons Section */}
      <section className="py-10 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">🔟 10 Reasons to Choose Vintage Marquee Lights for Your Custom Sign</h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Hammer className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">1. Authentic Steel Construction</h3>
                <p className="text-sm text-muted-foreground">
                  Crafted from solid, hand-painted steel, our signs have a rugged, industrial feel and vintage finish that naturally develops character over time—no plastic or shortcuts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">2. Warm Classic Glow</h3>
                <p className="text-sm text-muted-foreground">
                  Fitted with globe bulbs that emit a soft, warm glow, our signs add an inviting ambiance that looks stunning in person and photographs beautifully—day or night.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Frame className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">3. Effortless Wall Mounting</h3>
                <p className="text-sm text-muted-foreground">
                  No complicated install. These signs hang on your wall like framed art—no stands, no hassle, just plug in and enjoy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">4. Indoor or Outdoor Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for cozy interiors or open-air settings. Signs can be used indoors or outdoors, where they weather naturally and develop unique character over time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <PenTool className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">5. Custom Letter Combinations</h3>
                <p className="text-sm text-muted-foreground">
                  Spell out anything you want—names, initials, slogans, or simple words like LOVE, OPEN, or BAR. Mix letters, numbers, and symbols to create your perfect message.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">6. Perfect for Any Setting</h3>
                <p className="text-sm text-muted-foreground">
                  From retail stores and events to photo studios, home décor, and outdoor patios, these signs elevate any environment with vintage charm and bold personality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Settings className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">7. Optional Upgrades</h3>
                <p className="text-sm text-muted-foreground">
                  Need extra weather protection or hardware? Ask about powder coating, custom mounting brackets, or installation bars for added durability and convenience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">8. Photo-Ready Glow</h3>
                <p className="text-sm text-muted-foreground">
                  The warm bulb lighting is ideal for photography, making your sign a perfect backdrop for weddings, brand shoots, or personal portraits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">9. Timeless Style That Ages Beautifully</h3>
                <p className="text-sm text-muted-foreground">
                  Unlike trendy decor that fades fast, our signs look better with time. The finish ages gracefully, and each piece develops a story of its own.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">10. Built to Last</h3>
                <p className="text-sm text-muted-foreground">
                  Whether it's a one-night celebration or a permanent install, these signs are built for the long haul. Trusted by thousands of businesses and creatives nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <TestimonialSection config={wallHangingConfig.testimonials} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <GallerySection config={wallHangingConfig.gallery} />
        </div>
      </section>

      {/* Get Quote CTA */}
      <section id="pricing" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Custom Quote?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every sign is custom-made to your specifications. Tell us what you want and we'll create a personalized quote for you.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-12"
              onClick={handleCTAClick}
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-2">{wallHangingConfig.faq.title}</h2>
          <p className="text-center text-muted-foreground mb-8">
            Everything you need to know about wall-hanging marquee signs
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {wallHangingConfig.faq.items.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-bold">{item.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
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
      <section className="py-10 bg-muted/30">
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
