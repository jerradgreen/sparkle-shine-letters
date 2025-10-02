import { PageTemplate } from "@/components/templates/PageTemplate";
import { TestimonialSection } from "@/components/templates/TestimonialSection";
import { GallerySection } from "@/components/templates/GallerySection";
import { logoSignsConfig } from "@/config/templateConfigs";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Eye, Zap, Building2, Palette, Lightbulb, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

              {/* Review */}
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="flex gap-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-2 text-center">
                  "We love our new sign! It completely transformed our office wall and made our brand pop. Everyone asks where we got it."
                </p>
                <p className="text-xs text-muted-foreground font-semibold text-center">— Crystal R., Boutique Owner</p>
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

              {/* Review */}
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="flex gap-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-2 text-center">
                  "We love our new sign! It completely transformed our office wall and made our brand pop. Everyone asks where we got it."
                </p>
                <p className="text-xs text-muted-foreground font-semibold text-center">— Crystal R., Boutique Owner</p>
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
                  <p className="text-xs text-muted-foreground">Multi-layered metal signs cut and built by hand for visual impact</p>
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
                  <p className="text-xs text-muted-foreground">Match any logo colors, brand style, or textures with full customization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Easy to Install</h3>
                  <p className="text-xs text-muted-foreground">Lightweight options for walls, trade shows, lobbies, and events</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-medium">
            {logoSignsConfig.hero.trustBar}
          </p>
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
            <h2 className="text-3xl font-bold mb-2">10 Reasons to Choose a 3D Logo Sign for Your Brand</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">1. Unmatched Visual Impact</h3>
                  <p className="text-muted-foreground text-sm">
                    3D layered signs create dramatic depth that flat signs simply can't match. Your logo literally jumps off the wall and commands attention in any space.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">2. Perfect Brand Color Matching</h3>
                  <p className="text-muted-foreground text-sm">
                    We match your exact brand colors using Pantone codes, hex values, or physical samples. Your logo will look exactly as it should, every single time.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">3. Instagram-Ready Design</h3>
                  <p className="text-muted-foreground text-sm">
                    These signs photograph beautifully from every angle. The dimensional layers create natural shadows that make photos pop on social media and marketing materials.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">4. Versatile for Any Space</h3>
                  <p className="text-muted-foreground text-sm">
                    Perfect for office lobbies, retail stores, trade show booths, restaurant walls, event backdrops, photo walls, and anywhere your brand needs to shine.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">5. Surprisingly Lightweight</h3>
                  <p className="text-muted-foreground text-sm">
                    Despite the dramatic appearance, our precision-cut metal layers are lightweight and easy to mount. No structural reinforcement needed for most walls.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">6. Professional Hand Craftsmanship</h3>
                  <p className="text-muted-foreground text-sm">
                    Each layer is precision-cut, hand-assembled, carefully painted, and quality-tested. This is artisan-level work that shows in every detail.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">7. Optional LED Backlighting</h3>
                  <p className="text-muted-foreground text-sm">
                    Add dramatic LED backlighting to create a halo effect that makes your logo glow. Perfect for evening events, dimly lit spaces, and extra wow factor.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">8. Great for Mobile Branding</h3>
                  <p className="text-muted-foreground text-sm">
                    Food trucks, trailers, and mobile vendors love our lightweight construction. Bold branding without adding excessive weight to your vehicle or setup.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">9. Built to Last</h3>
                  <p className="text-muted-foreground text-sm">
                    Quality materials and construction mean your sign will look amazing for years. This is an investment in your brand that pays dividends in impressions and recognition.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">10. Works Without a Final Logo</h3>
                  <p className="text-muted-foreground text-sm">
                    Don't have a finalized logo yet? No problem. We can work with rough concepts, provide design recommendations, or help you visualize options before you commit.
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
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {logoSignsConfig.faq.title}
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {logoSignsConfig.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Your logo deserves to be seen in 3D.</h3>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://www.cognitoforms.com/VintageMarqueeLights/EventStyleLettersQuoteForm', '_blank')}
            >
              Get My Custom 3D Logo Quote
            </Button>
          </div>
        </div>
      </section>

      <ShopifyFooter />
    </PageTemplate>
  );
};

export default ThreeDLogos;
