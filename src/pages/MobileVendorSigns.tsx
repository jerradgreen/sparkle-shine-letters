import { PageTemplate } from "@/components/templates/PageTemplate";
import { TestimonialSection } from "@/components/templates/TestimonialSection";
import { GallerySection } from "@/components/templates/GallerySection";
import { foodTruckSignsConfig } from "@/config/templateConfigs";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Lightbulb, Palette } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";

import PerformantImage from "@/components/PerformantImage";
import foodTruckHero from "@/assets/food-truck-bar-monte.jpg";
import jerradPortraitAsset from "@/assets/custom-signs/jerrad-approved-portrait.webp.asset.json";
import fabricationCrewWeldingAsset from "@/assets/custom-signs/fabrication-crew-welding.webp.asset.json";
import fabricationCrewOneAsset from "@/assets/custom-signs/fabrication-crew-1.webp.asset.json";
import fabricationCrewThreeAsset from "@/assets/custom-signs/fabrication-crew-3.webp.asset.json";
import steakstopLeadAsset from "@/assets/custom-signs/steakstop-lead.webp.asset.json";
import steakstopMockupAsset from "@/assets/custom-signs/steakstop-mockup.webp.asset.json";
import steakstopShopAsset from "@/assets/custom-signs/steakstop-shop.webp.asset.json";
import steakstopInstalledAsset from "@/assets/custom-signs/steakstop-installed.webp.asset.json";
import steakstopDuskAsset from "@/assets/custom-signs/steakstop-dusk.webp.asset.json";

const MobileVendorSigns = () => {
  const navigate = useNavigate();
  
  const openQuoteForm = () => {
    navigate('/quote/mobile-vendor');
  };


  return (
    <PageTemplate 
      config={foodTruckSignsConfig}
      canonicalUrl="https://inventory.vintagemarqueelights.com/mobile-vendor-signs"
      showNavigation={true}
      showFooter={false}
    >
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={foodTruckHero}
          fetchPriority="high"
          imageSrcSet={`${foodTruckHero} 1024w`}
          imageSizes="(max-width: 1024px) 100vw, 50vw"
        />
      </Helmet>
      <ShopifyHeader />
      
      {/* Hero Section */}
      <section className="relative py-8 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile image first */}
            <div className="mb-4">
              <PerformantImage 
                src={foodTruckHero} 
                alt="Bar Monte food truck with custom illuminated marquee sign mounted on the roof" 
                className="rounded-lg shadow-2xl w-full h-auto object-contain bg-muted"
                priority={true}
                fetchPriority="high"
                sizes="100vw"
                showPlaceholder={false}
              />
            </div>
            
            {/* Mobile content */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                {foodTruckSignsConfig.hero.headline}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {foodTruckSignsConfig.hero.subheadline}
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Hand-crafted by experienced metal fabricators — not mass-produced plastic signage. Whether you want an illuminated or light up food truck sign, every piece is built to last.
              </p>
              <p className="text-sm font-semibold text-foreground mb-6 leading-relaxed">
                Custom mobile vendor signs typically start around $3,000. Most full builds range from $5,000–$10,000 depending on size, font style, and details.
              </p>
              <p className="text-sm font-semibold mb-6">
                <a href="https://vintagemarqueelights.approvepayments.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">Financing Available</a> — as low as $100/month
              </p>
              
              <Button 
                size="lg" 
                className="text-base px-8 py-6 w-full"
                onClick={openQuoteForm}
              >
                {foodTruckSignsConfig.hero.ctaText}
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Text on left */}
            <div className="text-left">
              <h1 className="text-3xl xl:text-4xl font-bold text-foreground mb-4 leading-tight">
                {foodTruckSignsConfig.hero.headline}
              </h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {foodTruckSignsConfig.hero.subheadline}
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Hand-crafted by experienced metal fabricators — not mass-produced plastic signage. Whether you want an illuminated or light up food truck sign, every piece is built to last.
              </p>
              <p className="text-sm font-semibold text-foreground mb-6 leading-relaxed">
                Custom mobile vendor signs typically start around $3,000. Most full builds range from $5,000–$10,000 depending on size, font style, and details.
              </p>
              <p className="text-sm font-semibold mb-6">
                <a href="https://vintagemarqueelights.approvepayments.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">Financing Available</a> — as low as $100/month
              </p>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 w-full"
                onClick={openQuoteForm}
              >
                {foodTruckSignsConfig.hero.ctaText}
              </Button>
            </div>

            {/* Image on right */}
            <div className="relative">
              <PerformantImage 
                src={foodTruckHero} 
                alt="Bar Monte food truck with custom illuminated marquee sign mounted on the roof" 
                className="rounded-lg shadow-2xl w-full h-auto object-contain bg-muted"
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
          <h2 className="text-3xl font-bold text-center mb-6">Built for Mobile Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4 min-h-[100px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Made for the Road</h3>
                  <p className="text-xs text-muted-foreground">Designed for food trucks, trailers, and mobile vendors.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4 min-h-[100px]">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Glows Day and Night</h3>
                  <p className="text-xs text-muted-foreground">Illuminated marquee letters draw attention at events and festivals.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4 min-h-[100px]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Custom Words or Logos</h3>
                  <p className="text-xs text-muted-foreground">Spell your truck name or showcase your dimensional logo.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example gallery moved higher so visitors see finished signs before deeper copy */}
      {/* Gallery */}
      <section id="gallery" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <GallerySection config={foodTruckSignsConfig.gallery} />
        </div>
      </section>

      {/* Founder introduction */}
      <section className="border-t border-border/60 bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded border border-border/60 bg-background">
              <img
                src={jerradPortraitAsset.url}
                alt="Jerrad, founder of Vintage Marquee Lights"
                className="max-h-[450px] w-full object-contain"
                loading="lazy"
                width={1122}
                height={1402}
              />
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                Meet the founder
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Hi, I’m Jerrad, founder of Vintage Marquee Lights.
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                Since VML started in 2008, we’ve helped customers turn their ideas into custom
                pieces that feel right at home in their business or space.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                You’ll work with me and my team to figure out the size, style, and details.
                Bring your logo, a sketch, or an idea you’re not quite sure how to explain
                yet—we’ll take it from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEAKSTOP project story */}
      <section className="border-y border-border/60 bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  A custom project · STEAKSTOP
                </p>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  From a design to the top of the trailer.
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  STEAKSTOP began as a design for dimensional illuminated letters. The finished
                  sign pairs bold letterforms with a red finish and warm globe bulbs, then brings
                  the name above the trailer as a complete rooftop installation.
                </p>
              </div>
              <figure className="min-w-0">
                <div className="overflow-hidden rounded border border-border/60 bg-background">
                  <img
                    src={steakstopLeadAsset.url}
                    alt="STEAKSTOP illuminated red letters installed above a black food trailer"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                    width={1206}
                    height={1156}
                  />
                </div>
                <figcaption className="pt-3 text-sm text-muted-foreground">
                  The finished STEAKSTOP sign installed above the trailer.
                </figcaption>
              </figure>
            </div>

            <div className="mt-16 border-t border-border/70 pt-14 md:mt-20 md:pt-16">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                From concept to finished piece
              </p>
              <div className="grid items-start gap-6 md:grid-cols-2">
                <figure className="min-w-0">
                  <div className="flex min-h-[220px] items-center overflow-hidden rounded border border-border/60 bg-background p-4 sm:min-h-[300px] sm:p-6">
                    <img
                      src={steakstopMockupAsset.url}
                      alt="Design mockup of gold illuminated STEAKSTOP letters"
                      className="h-auto w-full object-contain"
                      loading="lazy"
                      width={1348}
                      height={308}
                    />
                  </div>
                  <figcaption className="pt-3 text-sm text-muted-foreground">Design mockup</figcaption>
                </figure>
                <figure className="min-w-0">
                  <div className="overflow-hidden rounded border border-border/60 bg-background">
                    <img
                      src={steakstopShopAsset.url}
                      alt="Finished red illuminated STEAKSTOP letters standing in the shop"
                      className="aspect-[4/3] h-auto w-full object-contain"
                      loading="lazy"
                      width={1440}
                      height={1080}
                    />
                  </div>
                  <figcaption className="pt-3 text-sm text-muted-foreground">Finished in the shop</figcaption>
                </figure>
              </div>
            </div>

            <div className="mt-16 border-t border-border/70 pt-14 md:mt-20 md:pt-16">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                On the trailer
              </p>
              <h3 className="mb-8 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Two views of the finished sign.
              </h3>
              <div className="grid items-start gap-6 md:grid-cols-2">
                <figure className="min-w-0">
                  <div className="overflow-hidden rounded border border-border/60 bg-background">
                    <img
                      src={steakstopInstalledAsset.url}
                      alt="Straight-on view of illuminated STEAKSTOP letters above the food trailer"
                      className="h-auto w-full object-contain"
                      loading="lazy"
                      width={1206}
                      height={883}
                    />
                  </div>
                  <figcaption className="pt-3 text-sm text-muted-foreground">
                    The full rooftop sign above the service windows.
                  </figcaption>
                </figure>
                <figure className="min-w-0">
                  <div className="overflow-hidden rounded border border-border/60 bg-background">
                    <img
                      src={steakstopDuskAsset.url}
                      alt="Close angled view of illuminated red STEAKSTOP letters at dusk"
                      className="h-auto w-full object-contain"
                      loading="lazy"
                      width={1206}
                      height={895}
                    />
                  </div>
                  <figcaption className="pt-3 text-sm text-muted-foreground">
                    Illuminated letters viewed at dusk.
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="mt-16 border-t border-border/70 pt-14 md:mt-20 md:pt-16">
              <h3 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                A look inside the shop
              </h3>
              <figure>
                <div className="grid gap-5 md:grid-cols-3 md:gap-4 lg:gap-5">
                  {[
                    {
                      src: fabricationCrewWeldingAsset.url,
                      alt: "Fabrication crew member welding a round metal sign in the shop",
                    },
                    {
                      src: fabricationCrewOneAsset.url,
                      alt: "Fabrication crew member welding a curved metal piece at a worktable",
                    },
                    {
                      src: fabricationCrewThreeAsset.url,
                      alt: "Fabrication crew member grinding a metal piece at a worktable",
                    },
                  ].map((photo) => (
                    <div
                      key={photo.src}
                      className="aspect-[2/3] w-full overflow-hidden rounded border border-border/60 bg-background"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                        width={1000}
                        height={1500}
                      />
                    </div>
                  ))}
                </div>
                <figcaption className="pt-3 text-sm text-muted-foreground">
                  Behind the scenes with our fabrication crew.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Food Truck & Trailer Signage — SEO Depth Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Custom Food Truck & Trailer Signage</h2>
          <div className="space-y-4 max-w-5xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our custom food truck signage and trailer signage is fabricated from welded steel and designed for bold visual impact across mobile environments — from food trucks and coffee trailers to mobile bars, pop-ups, and event vendor setups. Every illuminated food truck sign is hand-built with marquee-style bulbs or LED options to maximize visibility day and night.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We can fabricate permanent, removable, or fold-down bracket options depending on how you plan to mount your sign. Final installation and mounting methods are handled by the customer or their installer based on their specific vehicle setup.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              For fully integrated brand marks and dimensional metal logo builds, explore our <Link to="/3d-logos" className="text-primary underline hover:text-primary/80 transition-colors">Custom Logo Signs</Link>. Need freestanding illuminated letters for mobile displays and events? Check out our <Link to="/event-standup-signs" className="text-primary underline hover:text-primary/80 transition-colors">36"/48" Stand-Up Letters</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <TestimonialSection config={foodTruckSignsConfig.testimonials} />
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




      {/* FAQ Section */}
      <section id="quote-form" className="py-10 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">{foodTruckSignsConfig.faq.title}</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {foodTruckSignsConfig.faq.items.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-lg">{item.question}</h3>
                <p className="text-muted-foreground text-sm">{item.answer}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm mt-8 max-w-5xl mx-auto">
            Looking to add another revenue stream? Explore our{' '}
            <a href="/rental-inventory" className="text-primary underline hover:text-primary/80 transition-colors">
              commercial marquee letter rental packages
            </a>{' '}
            designed for consistent income through repeat bookings.
          </p>

          <p className="text-muted-foreground text-sm mt-4 max-w-5xl mx-auto">
            You can also diversify your services by <a href="/rental-business" className="text-primary underline hover:text-primary/80 transition-colors">starting a marquee letter rental business</a> to increase average booking value and recurring revenue potential.
          </p>

        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Stand Out?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join successful entrepreneurs who have transformed their food service with an incredible sign that makes people notice them!
          </p>
          <Button 
            size="lg" 
            className="text-lg px-12 py-6"
            onClick={openQuoteForm}
          >
            Get Quote
          </Button>
        </div>
      </section>

      <ShopifyFooter />
    </PageTemplate>
  );
};

export default MobileVendorSigns;
