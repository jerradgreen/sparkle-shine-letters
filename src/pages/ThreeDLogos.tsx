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
                alt="Tuck's Truffles custom layered logo sign" 
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
              <p className="text-sm font-semibold text-foreground mb-6 leading-relaxed">
                Custom logo signs typically start around $1,500. Most commissioned pieces range from $2,500–$7,500+ depending on size, layers, and detail.
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
              <p className="text-sm font-semibold text-foreground mb-6 leading-relaxed">
                Custom logo signs typically start around $1,500. Most commissioned pieces range from $2,500–$7,500+ depending on size, layers, and detail.
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
                alt="Tuck's Truffles custom layered logo sign" 
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
                  <p className="text-xs text-muted-foreground">Custom metal signs built by hand with real depth and dimension for dramatic visual impact</p>
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
                  <p className="text-xs text-muted-foreground">Match your exact brand colors with custom paint, printing, or powder coating</p>
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

      {/* Example gallery moved higher so visitors see finished signs before deeper copy */}
      {/* Gallery */}
      <section id="gallery" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <GallerySection config={logoSignsConfig.gallery} />
        </div>
      </section>
      {/* Authority Section 1 */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Custom Signs for Restaurants, Bars, Offices, and Retail</h2>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A well-placed custom business sign does more than mark a space. It becomes the physical anchor of your brand, a handcrafted piece of art that tells your customers exactly who you are before you say a word. Whether it's a glowing logo mounted behind the bar in a restaurant, a dimensional metal sign greeting clients in an office lobby, or a bespoke statement piece drawing eyes in a retail storefront, a custom logo sign turns an ordinary wall into a memorable brand moment. These are the pieces your customers photograph, share on social media, and remember long after they leave.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our custom business signs are designed specifically for high-visibility placements: corporate lobbies, reception areas, feature walls, entry points, and bar backs. Each piece is commissioned around your specific logo, your exact brand colors, and your physical space. The result is not a sign. It is a sculptural brand installation.
          </p>
        </div>
      </section>

      {/* Authority Section 2 */}
      <section className="py-10 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Custom Metal Signs That Actually Look Like Your Brand</h2>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Flat, printed signage fades into the background. A custom hand-fabricated metal sign commands attention because it occupies real space. We cut your logo from precision-grade metal and build it layer by layer, entirely by hand, to create real depth and dimension. Light catches the edges, shadows shift across the surface throughout the day, and your logo feels alive on the wall in a way that no printed, routed, or neon sign can replicate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every commission is bespoke and one of a kind. We match your brand colors precisely, engineer each layer for maximum visual impact, and apply finishes by hand with the kind of care that mass production simply cannot deliver. The result is a custom sign that feels architectural, elevated, and unmistakably yours. From neighborhood cafés to corporate headquarters, we build the artisan metal signs that anchor your brand's identity in the physical world.
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
              <h3 className="text-xl font-bold mb-3 text-foreground">Submit Your Idea, Design, or Logo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Send us your idea, design, logo file, sketch, or concept. We'll discuss size, colors, materials, and any special requests.
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

      {/* What Makes a Great Custom Logo Sign? */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Makes a Great Custom Logo Sign?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-3 text-foreground">Placement Is Everything</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The best custom business signs are placed where they cannot be missed. For restaurants and bars, the wall directly behind the bar or the main dining room focal wall are the most powerful placements. For corporate offices, the reception desk or the main lobby wall sets the tone the moment a client walks in. We can help you think through placement as part of the design process.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-3 text-foreground">Lighting Options</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                While many of our custom logo signs look incredible as standalone dimensional metal art pieces, adding illumination takes them to the next level. We can incorporate backlighting to create a dramatic halo effect that makes your logo pop off the wall, or integrate our signature vintage marquee bulbs directly into the design for a classic, high-impact glow that is unmistakably Vintage Marquee Lights.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-3 text-foreground">What if I Don't Have a Vector Logo?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Don't worry. While a vector file like an Illustrator or EPS file gives us the cleanest starting point, we work with business owners every single day who only have a JPEG, a PNG, or even just a sketch on paper. Send us what you have. Our design team will help translate your concept into a precise, buildable design, and we will not start fabricating until you have approved every detail of the mockup.
              </p>
            </div>
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
            <div key="faq-cost" className="space-y-2">
              <h3 className="font-bold text-lg">How much does a custom business sign cost?</h3>
              <p className="text-muted-foreground text-sm">
                Because every logo is unique, pricing varies based on the overall size, the number of colors, and the complexity of the design. A simple, single-color metal logo will cost less than a highly detailed, multi-color illuminated sign. Custom logo signs typically start around $1,500, with most commissioned pieces ranging from $2,500 to $7,500+. We charge based on square inches and color count, and we provide a precise, no-obligation quote once we see your design and understand your space.
              </p>
            </div>
            <div key="faq-business-sign-electricity" className="space-y-2">
              <h3 className="font-bold text-lg">Do custom logo signs require electricity?</h3>
              <p className="text-muted-foreground text-sm">
                It depends on your design choice. If you choose an illuminated sign with backlighting or marquee bulbs, it will require power. Most of our illuminated custom signs plug directly into a standard wall outlet, making installation easy without the need for an electrician. If you choose a non-illuminated dimensional metal sign, no power is required at all. It simply mounts to the wall like a piece of art.
              </p>
            </div>
            <div key="faq-neon-difference" className="space-y-2">
              <h3 className="font-bold text-lg">What is the difference between this and a neon sign?</h3>
              <p className="text-muted-foreground text-sm">
                Neon signs are made from fragile glass tubes or LED strips that mimic the look. Our custom business signs are fabricated from solid, heavy-duty metal, built by hand, and designed to last for decades. They offer a far more substantial, architectural, and premium look. A metal sign looks incredible during the day when the lights are off, whereas a neon sign often disappears entirely when not illuminated. Metal also ages beautifully, developing character over time rather than yellowing or breaking.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mt-8 max-w-5xl mx-auto">
            In addition to custom metal business signs, we also manufacture{' '}
            <a href="/rental-inventory" className="text-primary underline hover:text-primary/80 transition-colors">
              commercial marquee letter rental business packages
            </a>{' '}
             for entrepreneurs and event companies looking to build a scalable rental division.
          </p>

          <p className="text-muted-foreground text-sm mt-4 max-w-5xl mx-auto">
            While custom business signs are typically designed for permanent branding installations, some entrepreneurs expand into freestanding marquee inventory as part of a <a href="/rental-business" className="text-primary underline hover:text-primary/80 transition-colors">broader event-focused business model</a>.
          </p>
        </div>
      </section>

      <ShopifyFooter />
      </PageTemplate>
    </>
  );
};

export default ThreeDLogos;
