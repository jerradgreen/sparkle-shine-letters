import { PageTemplate } from "@/components/templates/PageTemplate";
import { TestimonialSection } from "@/components/templates/TestimonialSection";
import { GallerySection } from "@/components/templates/GallerySection";
import { wallHangingConfig } from "@/config/templateConfigs";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Lightbulb, Frame, PenTool, Home, Settings, Camera, Clock, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OptimizedImage from "@/components/OptimizedImage";
import heroImage from "@/assets/wall-hanging.jpg";
import { Check } from "lucide-react";

const WallHangingMarqueeSigns = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('quote-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
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
      <section className="relative py-8 px-4 bg-gradient-to-br from-primary/10 to-accent/10 mt-4">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile image first */}
            <div className="mb-4">
              <OptimizedImage 
                src={heroImage} 
                alt="Beer Happy wall-hanging marquee letters" 
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
                loading="eager"
              />
            </div>
            
            {/* Mobile content */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                {wallHangingConfig.hero.headline}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {wallHangingConfig.hero.subheadline}
              </p>
              
              {/* Mobile CTA buttons */}
              <div className="space-y-3 mb-6">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 w-full"
                  onClick={scrollToForm}
                >
                  {wallHangingConfig.hero.ctaText}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base px-8 py-6 w-full"
                  onClick={scrollToGallery}
                >
                  {wallHangingConfig.hero.secondaryCtaText}
                </Button>
              </div>

              {/* Review */}
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-2">
                  "These signs are absolutely stunning! The quality is top-notch and they add such character to our space."
                </p>
                <p className="text-xs text-muted-foreground font-semibold">— Michael A., SC</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Image on left */}
            <div className="relative">
              <OptimizedImage 
                src={heroImage} 
                alt="Beer Happy wall-hanging marquee letters" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            
            {/* Text on right */}
            <div className="text-left">
              <h1 className="text-3xl xl:text-4xl font-bold text-foreground mb-4 leading-tight">
                {wallHangingConfig.hero.headline}
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {wallHangingConfig.hero.subheadline}
              </p>
              
              <div className="space-y-3 mb-6">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 w-full"
                  onClick={scrollToForm}
                >
                  {wallHangingConfig.hero.ctaText}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 w-full"
                  onClick={scrollToGallery}
                >
                  {wallHangingConfig.hero.secondaryCtaText}
                </Button>
              </div>

              {/* Review */}
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-2">
                  "These signs are absolutely stunning! The quality is top-notch and they add such character to our space."
                </p>
                <p className="text-xs text-muted-foreground font-semibold">— Michael A., SC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - 3 features */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Painted Steel Construction</h3>
                <p className="text-sm text-muted-foreground">Hand-painted, solid steel with vintage patina over time</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Warm Classic Glow</h3>
                <p className="text-sm text-muted-foreground">Globe bulbs with a warm, soft glow that photographs beautifully</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Any Font Style</h3>
                <p className="text-sm text-muted-foreground">Choose from script, block, serif, or custom fonts to match your brand</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10 Reasons Section */}
      <section className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">10 Reasons to Choose Vintage Marquee Lights for Your Custom Sign</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">1. Authentic Steel Construction</h3>
                  <p className="text-muted-foreground text-sm">
                    Crafted from solid, hand-painted steel, our signs have a rugged, industrial feel and vintage finish that naturally develops character over time—no plastic or shortcuts.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">2. Warm Classic Glow</h3>
                  <p className="text-muted-foreground text-sm">
                    Fitted with globe bulbs that emit a soft, warm glow, our signs add an inviting ambiance that looks stunning in person and photographs beautifully—day or night.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">3. Effortless Wall Mounting</h3>
                  <p className="text-muted-foreground text-sm">
                    No complicated install. These signs hang on your wall like framed art—no stands, no hassle, just plug in and enjoy.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">4. Indoor or Outdoor Ready</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect for cozy interiors or open-air settings. Signs can be used indoors or outdoors, where they weather naturally and develop unique character over time.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">5. Custom Letter Combinations</h3>
                  <p className="text-muted-foreground text-sm">
                    Spell out anything you want—names, initials, slogans, or simple words like LOVE, OPEN, or BAR. Mix letters, numbers, and symbols to create your perfect message.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">6. Perfect for Any Setting</h3>
                  <p className="text-muted-foreground text-sm">
                    From retail stores and events to photo studios, home décor, and outdoor patios, these signs elevate any environment with vintage charm and bold personality.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">7. Optional Upgrades</h3>
                  <p className="text-muted-foreground text-sm">
                    Need extra weather protection or hardware? Ask about powder coating, custom mounting brackets, or installation bars for added durability and convenience.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">8. Use Any Font</h3>
                  <p className="text-muted-foreground text-sm">
                    From classic block letters to elegant script, choose the perfect font to match your style. Every font looks incredible when lit up with vintage bulbs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">9. Timeless Style That Ages Beautifully</h3>
                  <p className="text-muted-foreground text-sm">
                    Unlike trendy decor that fades fast, our signs look better with time. The finish ages gracefully, and each piece develops a story of its own.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">10. Built to Last</h3>
                  <p className="text-muted-foreground text-sm">
                    Whether it's a one-night celebration or a permanent install, these signs are built for the long haul. Trusted by thousands of businesses and creatives nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <TestimonialSection config={wallHangingConfig.testimonials} />
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={scrollToForm}
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <GallerySection config={wallHangingConfig.gallery} />
        </div>
      </section>

      {/* Quote Form Anchor - No embedded form */}
      <section id="quote-form" className="py-2">
        {/* This section serves as scroll anchor for CTA buttons */}
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
              onClick={scrollToForm}
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>


      <ShopifyFooter />
    </PageTemplate>
  );
};

export default WallHangingMarqueeSigns;
