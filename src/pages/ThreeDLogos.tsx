import { PageTemplate } from "@/components/templates/PageTemplate";
import { TestimonialSection } from "@/components/templates/TestimonialSection";
import { GallerySection } from "@/components/templates/GallerySection";
import { logoSignsConfig } from "@/config/templateConfigs";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Eye, Zap, Building2, Palette, Lightbulb, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import PerformantImage from "@/components/PerformantImage";

const ThreeDLogos = () => {
  const navigate = useNavigate();
  
  const openQuoteForm = () => {
    navigate('/quote/3d-logos');
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <link 
          rel="preload" 
          as="image" 
          href={logoSignsConfig.hero.heroImage}
          fetchPriority="high"
          imageSrcSet={`${logoSignsConfig.hero.heroImage} 1x`}
          imageSizes="100vw"
        />
      </Helmet>
      <PageTemplate 
        config={logoSignsConfig}
        canonicalUrl="https://inventory.vintagemarqueelights.com/3d-logos"
        showNavigation={true}
        showFooter={false}
      >
        <ShopifyHeader />
      
      {/* Hero Section */}
      <section className="relative py-8 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile image first */}
            <div className="mb-4">
              <PerformantImage 
                src={logoSignsConfig.hero.heroImage} 
                alt="Tuck's Truffles 3D layered logo sign" 
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
                priority={true}
                fetchPriority="high"
                sizes="100vw"
                showPlaceholder={false}
              />
            </div>
            
            {/* Mobile content */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                {logoSignsConfig.hero.headline}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {logoSignsConfig.hero.subheadline}
              </p>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Built by experienced metal fabricators — not mass-produced.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Custom 3D layered metal signs typically start around $1,500. Most commissioned pieces range from $2,500–$7,500+ depending on size, layers, and detail.
              </p>
              
              {/* Mobile CTA buttons */}
              <div className="space-y-3 mb-6">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 w-full"
                  onClick={openQuoteForm}
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
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {logoSignsConfig.hero.subheadline}
              </p>
              
              <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                Built by experienced metal fabricators — not mass-produced.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Custom 3D layered metal signs typically start around $1,500. Most commissioned pieces range from $2,500–$7,500+ depending on size, layers, and detail.
              </p>
              
              <div className="space-y-3 mb-6">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 w-full"
                  onClick={openQuoteForm}
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
              <PerformantImage 
                src={logoSignsConfig.hero.heroImage} 
                alt="Tuck's Truffles 3D layered logo sign" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                loading="lazy"
                fetchPriority="low"
                sizes="50vw"
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
              <CardContent className="p-4 flex items-center gap-4 min-h-[100px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Custom Layers, Real Depth</h3>
                  <p className="text-xs text-muted-foreground">Multi-layered metal signs built by hand for dramatic dimensional branding</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4 min-h-[100px]">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Unlimited Colors & Branding</h3>
                  <p className="text-xs text-muted-foreground">Match your brand style with layered paint, printing, or powder coating</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
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

      {/* Trust Bar */}
      <section className="py-4 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-medium">
            {logoSignsConfig.hero.trustBar}
          </p>
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
              onClick={openQuoteForm}
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
                Your sign arrives ready to hang. Just mount it and watch your brand come to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Sketch to Statement Piece Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-foreground">From Sketch to Statement Piece</h2>
          <p className="text-center text-muted-foreground mb-8">
            Watch your vision come to life with handcrafted precision
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <video 
                  src="/process-step-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-1">Step 1: Your Vision</h3>
                  <p className="text-sm text-muted-foreground">Share your ideas and we'll bring them to life</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <video 
                  src="/process-step-2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-1">Step 2: Expert Crafting</h3>
                  <p className="text-sm text-muted-foreground">Watch your sign come together with care</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <video 
                  src="/process-step-3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-1">Step 3: Final Reveal</h3>
                  <p className="text-sm text-muted-foreground">Your custom sign ready to shine</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="quote-form" className="py-10 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">{logoSignsConfig.faq.title}</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {logoSignsConfig.faq.items.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-lg">{item.question}</h3>
                <p className="text-muted-foreground text-sm">{item.answer}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm mt-8 max-w-5xl mx-auto">
            In addition to custom layered and dimensional signage, we also manufacture{' '}
            <a href="/rental-inventory" className="text-primary underline hover:text-primary/80 transition-colors">
              commercial marquee letter rental business packages
            </a>{' '}
            for entrepreneurs and event companies looking to build a scalable rental division.
          </p>
        </div>
      </section>

      <ShopifyFooter />
      </PageTemplate>
    </>
  );
};

export default ThreeDLogos;
