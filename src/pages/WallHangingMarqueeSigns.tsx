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
import heroImage from "@/assets/hero-lockwoods.jpg";

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
      <section className="relative py-2 px-4 text-center bg-gradient-to-br from-primary/10 to-accent/10 -mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile image first */}
            <div className="mb-3">
              <OptimizedImage 
                src={heroImage} 
                alt="Wall-hanging marquee letters display" 
                className="rounded-lg shadow-2xl w-full h-32 object-cover"
                loading="eager"
              />
            </div>
            
            {/* Mobile content */}
            <div className="text-left">
              <h1 className="text-xl font-bold text-foreground mb-2 leading-tight">
                {wallHangingConfig.hero.headline}
              </h1>
              <p className="text-base text-muted-foreground leading-snug mb-4">
                {wallHangingConfig.hero.subheadline}
              </p>
              
              {/* Mobile CTA buttons */}
              <div className="space-y-2 mb-3">
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

              {/* Trust bar */}
              <p className="text-sm text-muted-foreground text-center">
                {wallHangingConfig.hero.trustBar}
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-2xl xl:text-3xl font-bold text-foreground mb-4 leading-tight">
                {wallHangingConfig.hero.headline}
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {wallHangingConfig.hero.subheadline}
              </p>
              
              <div className="space-y-3 mb-4">
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

              <p className="text-sm text-muted-foreground text-center">
                {wallHangingConfig.hero.trustBar}
              </p>
            </div>
            <div className="relative">
              <OptimizedImage 
                src={heroImage} 
                alt="Wall-hanging marquee letters display" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - 6 features */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Hammer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Painted Steel Construction</h3>
                  <p className="text-xs text-muted-foreground">Hand-painted, solid steel with vintage patina over time</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Warm Classic Glow</h3>
                  <p className="text-xs text-muted-foreground">Globe bulbs with a warm, soft glow that photographs beautifully</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Frame className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Simple Wall Mounting</h3>
                  <p className="text-xs text-muted-foreground">Hangs like a picture. No floor stands required</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Indoor or Outdoor Use</h3>
                  <p className="text-xs text-muted-foreground">Looks great inside or outside with real aging character</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Custom Letter Combinations</h3>
                  <p className="text-xs text-muted-foreground">Spell any name, word, or phrase</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Optional Upgrades</h3>
                  <p className="text-xs text-muted-foreground">Powder coating, mounting bars, and more</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10 Reasons Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">🔟 10 Reasons to Choose Vintage Marquee Lights for Your Custom Sign</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Hammer className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">1. Authentic Steel Construction</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    Crafted from solid, hand-painted steel, our signs have a rugged, industrial feel and vintage finish that naturally develops character over time—no plastic or shortcuts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">2. Warm Classic Glow</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    Fitted with globe bulbs that emit a soft, warm glow, our signs add an inviting ambiance that looks stunning in person and photographs beautifully—day or night.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Frame className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">3. Effortless Wall Mounting</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    No complicated install. These signs hang on your wall like framed art—no stands, no hassle, just plug in and enjoy.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">4. Indoor or Outdoor Ready</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    Perfect for cozy interiors or open-air settings. Signs can be used indoors or outdoors, where they weather naturally and develop unique character over time.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <PenTool className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">5. Custom Letter Combinations</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    Spell out anything you want—names, initials, slogans, or simple words like LOVE, OPEN, or BAR. Mix letters, numbers, and symbols to create your perfect message.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">6. Perfect for Any Setting</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    From retail stores and events to photo studios, home décor, and outdoor patios, these signs elevate any environment with vintage charm and bold personality.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">7. Optional Upgrades</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    Need extra weather protection or hardware? Ask about powder coating, custom mounting brackets, or installation bars for added durability and convenience.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">8. Photo-Ready Glow</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    The warm bulb lighting is ideal for photography, making your sign a perfect backdrop for weddings, brand shoots, or personal portraits.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">9. Timeless Style That Ages Beautifully</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    Unlike trendy decor that fades fast, our signs look better with time. The finish ages gracefully, and each piece develops a story of its own.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold">10. Built to Last</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">
                    Whether it's a one-night celebration or a permanent install, these signs are built for the long haul. Trusted by thousands of businesses and creatives nationwide.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
      <section id="gallery" className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <GallerySection config={wallHangingConfig.gallery} />
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Get Your Quote in Under 5 Minutes</h2>
            <p className="text-lg text-muted-foreground">
              We'll send pricing and details to your email—no pressure, no commitment.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <iframe 
              src="https://www.cognitoforms.com/f/seamless/-MbdBlmYd0yv-rPJ0fzWlQ/15?entry=%7B%22ProductType%22%3A%22Wall%20Hanging%20Letters%22%7D"
              style={{ border: 0, width: '100%', height: '800px' }}
              title="Wall Hanging Marquee Letters Quote Form"
            />
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
