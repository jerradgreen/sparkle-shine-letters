import { PageTemplate } from "@/components/templates/PageTemplate";
import { TestimonialSection } from "@/components/templates/TestimonialSection";
import { GallerySection } from "@/components/templates/GallerySection";
import { logoSignsConfig } from "@/config/templateConfigs";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Eye, Zap, Building2, Palette, Lightbulb, Check } from "lucide-react";

import OptimizedImage from "@/components/OptimizedImage";
import logoHero from "@/assets/logo-tucks-1.jpg";

const ThreeDLogos = () => {
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
      config={logoSignsConfig}
      canonicalUrl="https://www.vintagemarqueelights.com/3d-logos"
      showNavigation={true}
      showFooter={false}
      showChatbot={false}
    >
      <ShopifyHeader />
      
      {/* Hero Section */}
      <section className="relative py-8 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile image first */}
            <div className="mb-4">
              <OptimizedImage 
                src={logoHero} 
                alt="Tuck's Truffles 3D layered logo sign" 
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
                loading="eager"
              />
            </div>
            
            {/* Mobile content */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                {logoSignsConfig.hero.headline}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {logoSignsConfig.hero.subheadline}
              </p>
              
              {/* Mobile CTA buttons */}
              <div className="space-y-3 mb-6">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 w-full"
                  onClick={scrollToForm}
                >
                  {logoSignsConfig.hero.ctaText}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base px-8 py-6 w-full"
                  onClick={scrollToGallery}
                >
                  {logoSignsConfig.hero.secondaryCtaText}
                </Button>
              </div>

              {/* 3 Reviews */}
              <div className="space-y-3">
                {logoSignsConfig.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="bg-card/50 p-3 rounded-lg border border-primary/20">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic mb-2">
                      "{testimonial.content}"
                    </p>
                    <p className="text-xs text-muted-foreground font-semibold">
                      — {testimonial.name}, {testimonial.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Text on left */}
            <div className="text-left">
              <h1 className="text-3xl xl:text-4xl font-bold text-foreground mb-4 leading-tight">
                {logoSignsConfig.hero.headline}
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {logoSignsConfig.hero.subheadline}
              </p>
              
              <div className="space-y-3 mb-6">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 w-full"
                  onClick={scrollToForm}
                >
                  {logoSignsConfig.hero.ctaText}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 w-full"
                  onClick={scrollToGallery}
                >
                  {logoSignsConfig.hero.secondaryCtaText}
                </Button>
              </div>

              {/* 3 Reviews */}
              <div className="space-y-3">
                {logoSignsConfig.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="bg-card/50 p-3 rounded-lg border border-primary/20">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic mb-2">
                      "{testimonial.content}"
                    </p>
                    <p className="text-xs text-muted-foreground font-semibold">
                      — {testimonial.name}, {testimonial.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image on right */}
            <div className="relative">
              <OptimizedImage 
                src={logoHero} 
                alt="Tuck's Truffles 3D layered logo sign" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - 3 features above fold */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Custom Layers, Real Depth</h3>
                  <p className="text-xs text-muted-foreground">Multi-layered metal signs built by hand for dramatic dimensional branding</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Unlimited Colors & Branding</h3>
                  <p className="text-xs text-muted-foreground">Match your brand style with layered paint, printing, or powder coating</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Installs Like Art, Glows Like Magic</h3>
                  <p className="text-xs text-muted-foreground">Hangs like a picture and plugs in like a lamp — easy and seamless</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Features Grid - 6 reasons */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {logoSignsConfig.features.title}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">{logoSignsConfig.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logoSignsConfig.features.items.map((feature, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Reasons Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">10 Reasons to Choose a 3D Logo Sign for Your Brand or Event</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Multi-layered metal construction</h3>
                  <p className="text-muted-foreground text-sm">
                    Each layer is precision-cut and hand-assembled to create authentic dimensional depth that makes your brand pop.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Bold dimensional branding</h3>
                  <p className="text-muted-foreground text-sm">
                    Your logo jumps off the wall with dramatic shadows and depth that flat signs simply can't achieve.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Easy installation</h3>
                  <p className="text-muted-foreground text-sm">
                    Hangs like a picture frame with included mounting hardware—no complex installation or professional help required.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Fully customizable color and design</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect color matching using HEX, Pantone, or CMYK references—your brand colors, exactly as they should be.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Lightweight and wall-mountable</h3>
                  <p className="text-muted-foreground text-sm">
                    Despite the dramatic appearance, these signs are surprisingly lightweight and mount easily on any standard wall.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Great for events, offices, retail, or homes</h3>
                  <p className="text-muted-foreground text-sm">
                    Versatile enough for corporate lobbies, trade shows, retail displays, restaurants, studios, and even home décor.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Optional lighting and finishes</h3>
                  <p className="text-muted-foreground text-sm">
                    Add LED backlighting for a dramatic glow effect, or choose from various finish options to match your aesthetic.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Built to last and ship-ready</h3>
                  <p className="text-muted-foreground text-sm">
                    Quality materials and expert craftsmanship ensure your sign looks amazing for years, securely packaged for safe delivery.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Enhances photo ops and brand visibility</h3>
                  <p className="text-muted-foreground text-sm">
                    The dimensional design photographs beautifully, creating Instagram-worthy moments that amplify your brand presence.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Trusted by creative pros nationwide</h3>
                  <p className="text-muted-foreground text-sm">
                    Event planners, business owners, and designers rely on our quality craftsmanship and customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <TestimonialSection config={logoSignsConfig.testimonials} />
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
      <section id="gallery" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <GallerySection config={logoSignsConfig.gallery} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Submit Your Logo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Send us your logo file or concept. We'll discuss size, colors, materials, and any special requests.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Approve the Mockup</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We create a detailed mockup showing layers, colors, and dimensions. You approve before we start building.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">We Build It by Hand</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each layer is precision-cut, hand-assembled, painted to perfection, and quality-tested.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-secondary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Ships Ready to Install</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your sign arrives with mounting hardware and instructions. Just hang it up and watch your brand come to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="quote-form" className="py-10 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
            {logoSignsConfig.faq.title}
          </h2>
          
          <div className="space-y-8">
            {logoSignsConfig.faq.items.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to see your logo come to life in 3D?</h3>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={scrollToForm}
            >
              Start My 3D Logo Quote
            </Button>
          </div>
        </div>
      </section>

      <ShopifyFooter />
    </PageTemplate>
  );
};

export default ThreeDLogos;
