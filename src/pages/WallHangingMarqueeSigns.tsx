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
import PerformantImage from "@/components/PerformantImage";
import heroImage from "@/assets/wall-hanging.jpg";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const WallHangingMarqueeSigns = () => {
  const navigate = useNavigate();
  
  const openQuoteForm = () => {
    navigate('/quote/wall-hanging');
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
          href={heroImage}
          fetchPriority="high"
          imageSrcSet={`${heroImage} 1x`}
          imageSizes="(max-width: 1023px) 100vw, 50vw"
        />
      </Helmet>
      <PageTemplate 
        config={wallHangingConfig}
        canonicalUrl="https://inventory.vintagemarqueelights.com/wall-hanging-signs"
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
                src={heroImage} 
                alt="Beer Happy wall-hanging marquee letters" 
                className="rounded-lg shadow-2xl w-full h-64 object-cover"
                priority={true}
                fetchPriority="high"
                sizes="100vw"
                showPlaceholder={false}
              />
            </div>
            
            {/* Mobile content */}
            <div className="text-left">
              <h1 className="text-xl font-bold text-foreground mb-2 leading-tight">
                {wallHangingConfig.hero.headline}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {wallHangingConfig.hero.subheadline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Frequently commissioned by interior designers, restaurant owners, and brand builders seeking distinctive marquee wall art.
              </p>
              
               {/* Pricing Info */}
               <p className="text-sm font-semibold text-foreground mb-4 leading-relaxed">
                 Most hand-fabricated, artisan metal marquee letter custom builds range $2500-$7000+ depending on size and complexity.
               </p>

               {/* Mobile CTA buttons */}
               <div className="space-y-3 mb-6">
                 <Button 
                   size="lg" 
                   className="text-base px-8 py-6 w-full"
                   onClick={openQuoteForm}
                 >
                   Get Your Custom Quote
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
                <div className="flex gap-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-2 text-center">
                  "These signs are absolutely stunning! The quality is top-notch and they add such character to our space."
                </p>
                <p className="text-xs text-muted-foreground font-semibold text-center">— Michael A., SC</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Image on left */}
            <div className="relative">
              <PerformantImage 
                src={heroImage} 
                alt="Beer Happy wall-hanging marquee letters" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                loading="lazy"
                fetchPriority="low"
                sizes="50vw"
              />
            </div>
            
            <div className="text-left">
              <h1 className="text-2xl xl:text-3xl font-bold text-foreground mb-3 leading-tight">
                {wallHangingConfig.hero.headline}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">
                {wallHangingConfig.hero.subheadline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Frequently commissioned by interior designers, restaurant owners, and brand builders seeking distinctive marquee wall art.
              </p>
               
               {/* Pricing Info */}
               <p className="text-sm font-semibold text-foreground mb-4 leading-relaxed">
                 Most hand-fabricated, artisan metal marquee letter custom builds range $2500-$7000+ depending on size and complexity.
               </p>

               <div className="space-y-3 mb-6">
                 <Button 
                   size="lg" 
                   className="text-lg px-8 py-6 w-full"
                   onClick={openQuoteForm}
                 >
                   Get Your Custom Quote
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
                <div className="flex gap-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-2 text-center">
                  "These signs are absolutely stunning! The quality is top-notch and they add such character to our space."
                </p>
                <p className="text-xs text-muted-foreground font-semibold text-center">— Michael A., SC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - 3 features */}
      <section className="py-6 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
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
              <CardContent className="p-4 flex items-center gap-4">
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
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Any Font Style</h3>
                  <p className="text-xs text-muted-foreground">Choose from script, block, serif, or custom fonts to match your brand</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example gallery moved higher so visitors see finished signs before deeper copy */}
      {/* Gallery */}
      <section id="gallery" className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <GallerySection config={wallHangingConfig.gallery} />
        </div>
      </section>

      {/* Who Orders Custom Marquee Signs */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Who Orders Custom Marquee Signs?</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Custom Signs for Bars, Restaurants, and Retail</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A custom marquee sign isn't just decoration. It's the focal point of your space and a piece of functional art that no one else in the world has. Whether it's a glowing "BAR" sign that draws customers in the moment they walk through the door, your restaurant's name illuminating the dining room in warm vintage light, or a bespoke statement piece anchoring your retail storefront, these handcrafted steel signs create an atmosphere that flat, mass-produced signage simply cannot touch. Every letter is cut, painted, wired, and assembled by hand. No two signs are exactly alike.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">The Ultimate Home Bar and Studio Statement</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You don't have to be a commercial business to want commercial-grade artisan craftsmanship. We build custom lighted signs for home bars, man caves, creative studios, and game rooms across the country. Spell out your family name, your favorite quote, or your personal brand in authentic, vintage-style marquee letters that hang cleanly on standard drywall and glow with the kind of warm, timeless light you just can't get from a store-bought sign. These are heirloom-quality pieces built to be passed down, not thrown out.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Schools, Gyms, and Corporate Offices</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When you want to build school spirit or corporate culture, standard printed signs fade into the background. A custom, hand-fabricated metal marquee sign in your gym, locker room, or office lobby commands attention the moment someone walks in. We build rugged, heavy-duty steel letters that withstand the test of time while delivering a premium, architectural look that says your brand takes itself seriously.
              </p>
            </div>
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
                    Crafted from solid, hand-painted steel by skilled artisan fabricators. No plastic, no cheap foam, no shortcuts. Our custom signs have a rugged, industrial feel and a vintage finish that naturally develops character over time. They look incredible even when the lights are off.
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
                    From neighborhood restaurants and dive bars to high-end retail shops, corporate offices, and curated homes, these custom lighted signs transform any blank wall into a destination. We have been building commissioned marquee letter installations since 2008, and our work hangs in thousands of spaces nationwide.
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
                  <h3 className="font-bold mb-2">10. Built to Last by People Who Care</h3>
                  <p className="text-muted-foreground text-sm">
                    Whether it's a statement piece for your living room or a permanent installation for your storefront, these custom marquee signs are built for the long haul by artisan fabricators who take pride in every weld, every brushstroke, and every bulb socket. Trusted by thousands of businesses and creatives nationwide since 2008.
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
              onClick={openQuoteForm}
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How to Get Started</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-muted/40 ring-1 ring-border/40">
              <PerformantImage 
                src="https://cdn.shopify.com/s/files/1/1403/8315/files/1_lights_on_studio.webp?v=1759678401" 
                alt="Step 1 - vintage marquee number 1" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                fetchPriority="low"
              />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 1: Tell Us What You Want</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose your letters, font style, size, and finish. We'll create a custom quote based on your exact specifications.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-muted/40 ring-1 ring-border/40">
              <PerformantImage 
                src="https://cdn.shopify.com/s/files/1/1403/8315/files/2_lights_on_studio.webp?v=1759678401" 
                alt="Step 2 - vintage marquee number 2" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                fetchPriority="low"
              />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 2: We Handcraft Your Sign</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each letter is hand-painted, wired, and tested. Your custom sign is built with care and attention to detail.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-muted/40 ring-1 ring-border/40">
              <PerformantImage 
                src="https://cdn.shopify.com/s/files/1/1403/8315/files/3_lights_on_studio.webp?v=1759678401" 
                alt="Step 3 - vintage marquee number 3" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                fetchPriority="low"
              />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 3: Hang & Enjoy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive your sign ready to hang. Simple wall mounting, plug in, and watch your space transform.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-10 px-4 bg-muted/30">
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
                  <h3 className="font-bold mb-1">Step 3: Final Result</h3>
                  <p className="text-sm text-muted-foreground">Your custom statement piece ready to shine</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Form Anchor - No embedded form */}
      <section id="quote-form" className="py-2">
        {/* This section serves as scroll anchor for CTA buttons */}
      </section>

      {/* Designed to Hang Like Art */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Custom Marquee Signs That Hang Like Art</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            These custom marquee signs are fabricated from steel and designed to hang cleanly on standard wall surfaces. Whether you want a custom sign for your bar, restaurant, home, or studio, they mount simply like framed artwork while delivering the presence of a real illuminated statement piece. Order any word, name, or phrase and we build it by hand.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-2">{wallHangingConfig.faq.title}</h2>
          <p className="text-center text-muted-foreground mb-8">
            Everything you need to know about ordering a custom marquee sign
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
            <div key="faq-cost" className="space-y-2">
              <h3 className="text-lg font-bold">How much does a custom marquee sign cost?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pricing depends entirely on the size, font style, and number of letters. A simple 3-letter "BAR" sign will cost significantly less than a 15-letter restaurant name in an ornate script font. Most of our custom wall-hanging marquee projects range between $2,500 and $7,000. When you submit a request, we provide a precise, no-obligation quote based on your exact needs.
              </p>
            </div>
            <div key="faq-business-name" className="space-y-2">
              <h3 className="text-lg font-bold">Can I get my business name made into a custom sign?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes, absolutely. We can hand-fabricate any word, name, or phrase. We offer several standard font styles including block, serif, and script, or we can work with your specific brand font to create a truly bespoke custom lighted sign that perfectly matches your business identity. If you can dream it, we can build it.
              </p>
            </div>
            <div key="faq-electrician" className="space-y-2">
              <h3 className="text-lg font-bold">Do I need to hire an electrician to install this?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No. Our wall-hanging marquee signs plug directly into a standard wall outlet, just like a lamp. No hardwiring, no conduit, no professional electrician required. This makes them incredibly easy to install in homes, offices, or leased commercial spaces where you can't make permanent electrical modifications.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mt-8 max-w-5xl mx-auto">
            Looking for freestanding letters instead? Explore our{' '}
            <a href="/event-standup-signs" className="text-primary underline hover:text-primary/80 transition-colors">
              36" and 48" stand-up marquee letters
            </a>.
          </p>

          <p className="text-muted-foreground text-sm mt-4 max-w-5xl mx-auto">
            If you need a fully branded mark rather than individual letters, explore our{' '}
            <a href="/3d-logos" className="text-primary underline hover:text-primary/80 transition-colors">
              Custom Logo Signs
            </a>{' '}
            fabricated in layered metal.
          </p>

          <p className="text-muted-foreground text-sm mt-4 max-w-5xl mx-auto">
            Buying for a school, university, or athletic department? Read{' '}
            <a href="/blog/why-schools-buy-commercial-marquee-letters" className="text-primary underline hover:text-primary/80 transition-colors">
              Why Schools Buy Commercial Marquee Letters
            </a>.
          </p>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={openQuoteForm}
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>


      <ShopifyFooter />
    </PageTemplate>
    </>
  );
};

export default WallHangingMarqueeSigns;
