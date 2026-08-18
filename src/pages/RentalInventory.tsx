import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Lightbulb, Star, Package, Clock, Mail, Zap, DollarSign, Percent, Check, Type, FileText, Hash, Circle, Square, Triangle, ExternalLink, Monitor, Globe, X } from "lucide-react";
import ShopifyHeader from "@/components/ShopifyHeader";
import ShopifyFooter from "@/components/ShopifyFooter";
import Navigation from "@/components/Navigation";
import PerformantImage from "@/components/PerformantImage";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RentalGuideDownloadSection } from "@/components/RentalGuideDownloadSection";
import { LetterViewer3D } from "@/components/LetterViewer3D";

// Locally hosted optimized images for faster LCP
const heroImage = "/images/hero-rental-setup.webp";
const heroImageMobile = "/images/hero-rental-setup.webp";
const elev8Image = "https://cdn.shopify.com/s/files/1/1403/8315/files/elev8.jpg?v=1759695171&width=800&format=webp";
const year1969Image = "https://cdn.shopify.com/s/files/1/1403/8315/files/1969_dda088f4-5c78-4279-a35a-1ec3a0cdb96e.jpg?v=1759689998&width=800&format=webp";
const marryMeImage = "https://cdn.shopify.com/s/files/1/1403/8315/files/marry_me.jpg?v=1678754881&width=800&format=webp";
const setup1Image = "https://cdn.shopify.com/s/files/1/1403/8315/files/Screenshot_2025-05-30_at_9.00.29_AM-topaz.jpg?v=1759690055&width=800&format=webp";
const setup2Image = "https://cdn.shopify.com/s/files/1/1403/8315/files/Screenshot_2025-05-30_at_9.01.21_AM-topaz_copy.jpg?v=1759690105&width=800&format=webp";
const marqueeDetailImage = "https://cdn.shopify.com/s/files/1/1403/8315/files/DSCF1221_copy.jpg?v=1759690151&width=800&format=webp";
const marquee1Image = "https://cdn.shopify.com/s/files/1/1403/8315/files/1_lights_on_studio.webp";
const marquee2Image = "https://cdn.shopify.com/s/files/1/1403/8315/files/2_lights_on_studio.webp";
const marquee3Image = "https://cdn.shopify.com/s/files/1/1403/8315/files/3_lights_on_studio.webp";

type RentalGalleryImage = {
  src: string;
  alt: string;
};

const exampleRentalInventoryGallery: RentalGalleryImage[] = [
  {
    src: elev8Image,
    alt: "ELEV8 marquee letters setup",
  },
  {
    src: year1969Image,
    alt: "1969 marquee numbers display",
  },
  {
    src: marryMeImage,
    alt: "Marry Me marquee letters wedding setup",
  },
  {
    src: setup1Image,
    alt: "Marquee letters event setup",
  },
  {
    src: setup2Image,
    alt: "Professional marquee letter display",
  },
  {
    src: marqueeDetailImage,
    alt: "Close-up of marquee letter construction and quality",
  },
];

import testimonialSarahImage from "@/assets/testimonial-sarah.jpg";
import testimonialMikeImage from "@/assets/testimonial-mike.jpg";

const cdMarqueesFounderImage = "/images/cd-marquees/cd-marquees-founders.webp";
const cdMarqueesGallery = [
  {
    src: "/images/cd-marquees/all-the-feels-marquee.webp",
    alt: "ALLTHEFEELS marquee lights at an outdoor C&D Marquees event setup"
  },
  {
    src: "/images/cd-marquees/love-marquee-balloon-backdrop.webp",
    alt: "LOVE marquee lights with a red and pink balloon backdrop by C&D Marquees"
  },
  {
    src: "/images/cd-marquees/new-edition-marquee.webp",
    alt: "NEW EDITION marquee lights with a black and silver balloon backdrop by C&D Marquees"
  },
  {
    src: "/images/cd-marquees/maria-marquee-event.webp",
    alt: "MARIA marquee lights in a pink event room by C&D Marquees"
  }
];

const djFrancoHeroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/hduztCJqumpVuYzd.webp";
const djFrancoGallery = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/reXuirzAXVKMdfED.webp",
    alt: "VOSS marquee letters displayed inside the DJ Franco Events venue"
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/khjlOFdwAGMpPYTg.webp",
    alt: "THE FOSTERS marquee letters displayed in an event space"
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663459706891/VaYUzgyOLxyzMFQs.webp",
    alt: "OBRIEN marquee letters with color-changing bulbs"
  }
];

const RentalInventory = () => {
  const navigate = useNavigate();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<RentalGalleryImage | null>(null);
  
  const openQuoteForm = () => {
    navigate('/quote/rental-inventory');
  };

  const showWebsiteSection = false;


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Marquee Letter Rental Inventory Packages | VML</title>
        <meta name="description" content='Commercial-grade 36" and 48" marquee letter rental inventory packages for event businesses. ROI ranges, package pricing, and scalable letter, number, and symbol sets.' />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/rental-inventory" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Marquee Letter Rental Inventory Packages | VML" />
        <meta property="og:description" content='Commercial-grade 36" and 48" marquee letter rental inventory packages for event businesses.' />
        <meta property="og:url" content="https://inventory.vintagemarqueelights.com/rental-inventory" />
        {/* Preload locally hosted hero image for optimal LCP */}
        <link 
          rel="preload" 
          as="image" 
          href={heroImage}
          fetchPriority="high"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Marquee Letter Rental Business Package",
          "description": "Commercial-grade marquee letter rental business packages built for entrepreneurs and event rental companies. Start or expand your marquee rental inventory with durable, revenue-producing assets.",
          "brand": { "@type": "Brand", "name": "Vintage Marquee Lights" },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Vintage Marquee Lights" }
          },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "47" }
        })}</script>
      </Helmet>
      <Navigation />
      <ShopifyHeader />
      {/* Hero Section */}
      <section className="relative py-2 px-4 text-center bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden -mt-2">
            {/* Mobile image first */}
            <div className="mb-3">
            <PerformantImage 
              src={heroImageMobile}
              alt="Professional marquee letter rental setup at Drewia Hill event showcasing profitable event rental business opportunity" 
              className="rounded-lg shadow-2xl w-full h-48 object-cover object-[center_65%]"
              priority={true}
              fetchPriority="high"
              sizes="100vw"
            />
            </div>
            
            {/* Mobile subtitle after image */}
            <p className="text-lg font-semibold text-accent mb-1 text-center">
               Built for Entrepreneurs & Established Event Rental Companies
             </p>
             
             {/* Mobile content */}
             <div className="text-left">
               <h1 className="text-xl font-bold text-foreground mb-2 leading-tight">
                  Marquee Letter Rental Business Inventory – Commercial-Grade 36″ &amp; 48″ Letters
                </h1>
                <p className="text-base text-muted-foreground leading-snug mb-2">
                  Our commercial-grade marquee letter packages are designed for repeat rentals, long-term durability, and strong ROI. Get a proven inventory foundation with premium 36″ letters, durable finishes, and logistics handled—so you can launch faster or scale what you already have.
               </p>
<p className="text-sm font-semibold text-foreground leading-relaxed mb-3">
	                 Rental inventory packages are revenue-producing assets — not décor. Most clients invest $15,000-$35,000 depending on configuration. With consistent bookings, many recover their investment within the first year and continue generating profit for years after.
	               </p>
               <p className="text-sm font-semibold mb-3">
                 <a href="https://vintagemarqueelights.approvepayments.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">Financing Available</a> — as low as $295/month
               </p>
              
               <div className="bg-muted/30 rounded-lg p-3 text-center -mt-2">
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-0.5 leading-relaxed">
                  "The quality is exactly what we needed for our rental business. Best investment we've made for expanding our event services."
                </blockquote>
                <cite className="text-sm text-foreground font-semibold">— Farrah W., Tennessee</cite>
              </div>
              
              {/* Mobile CTA button after review */}
              <div className="-mt-3">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 w-full"
                onClick={openQuoteForm}
               >
                 Request Package Pricing
               </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
               <p className="text-lg font-semibold text-accent mb-2">
                  Built for Entrepreneurs & Established Event Rental Companies
               </p>
               <h1 className="text-2xl xl:text-3xl font-bold text-foreground mb-4 leading-tight">
                   Marquee Letter Rental Business Inventory – Commercial-Grade 36″ &amp; 48″ Letters
                 </h1>
               <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                 Our commercial-grade marquee letter packages are designed for repeat rentals, long-term durability, and strong ROI. Get a proven inventory foundation with premium 36″ letters, durable finishes, and logistics handled—so you can launch faster or scale what you already have.
               </p>
<p className="text-sm font-semibold text-foreground mb-4 leading-relaxed">
	                 Rental inventory packages are revenue-producing assets — not décor. Most clients invest $15,000-$35,000 depending on configuration. With consistent bookings, many recover their investment within the first year and continue generating profit for years after.
	               </p>
               <p className="text-sm font-semibold mb-4">
                 <a href="https://vintagemarqueelights.approvepayments.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">Financing Available</a> — as low as $295/month
               </p>
            <Button
              size="lg" 
              className="text-lg px-8 py-6 w-full mb-4"
              onClick={openQuoteForm}
             >
               Request Package Pricing
             </Button>
              
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-2 leading-relaxed">
                  "The quality is exactly what we needed for our rental business. Best investment we've made for expanding our event services."
                </blockquote>
                <cite className="text-sm text-foreground font-semibold">— Farrah W., Tennessee</cite>
              </div>
            </div>
            <div className="relative">
              <PerformantImage 
                src={heroImage} 
                alt="Drewia Hill marquee letters event setup" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compact customer proof strip */}
      <section className="py-6 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/10">Customer Stories</Badge>
            <h2 className="text-lg md:text-xl font-bold text-foreground">
              Two ways VML rental inventory becomes revenue
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-primary/20 bg-card shadow-sm p-4 md:p-5">
              <div className="grid gap-4 sm:grid-cols-[96px_1fr] sm:items-center">
                <PerformantImage
                  src={cdMarqueesFounderImage}
                  alt="Dion and Chantal Powell with C&D Marquees letters"
                  className="hidden sm:block w-24 h-24 object-cover rounded-xl"
                  loading="lazy"
                  sizes="96px"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">C&amp;D Marquees: start a rental brand</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Dion and Chantal Powell used VML marquee lights as the foundation for a Charlotte event rental brand.
                  </p>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href="#cd-marquees-story">Read the C&amp;D Story</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-card shadow-sm p-4 md:p-5">
              <div className="grid gap-4 sm:grid-cols-[96px_1fr] sm:items-center">
                <PerformantImage
                  src={djFrancoHeroImage}
                  alt="DJ Franco Events marquee letters inside an event space"
                  className="hidden sm:block w-24 h-24 object-cover rounded-xl"
                  loading="lazy"
                  sizes="96px"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">DJ Franco Events: add a premium upsell</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Franco shows how an existing DJ, venue, or event business can turn marquee letters into an easy event upgrade.
                  </p>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href="#dj-franco-events-story">Read Franco's Story</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button className="w-full sm:w-auto" onClick={openQuoteForm}>
              Request Package Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* High-priority conversion sections moved up near the top */}
      {/* Packages & Pricing */}
      <section id="packages" className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Rental Inventory Packages</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 text-center">
            Our rental inventory packages range from 25 to 112+ pieces and are designed specifically for event rental companies. Whether you're launching a new marquee letter rental business or expanding an existing operation, each package is built around the highest-demand characters to maximize booking flexibility from day one.
          </p>
          <p className="text-xl text-center text-muted-foreground mb-12">
            We offer flexible packages designed to grow with your rental business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-card-foreground">Investment Range</h3>
                </div>
                <p className="text-3xl font-bold text-primary mb-4">$12,500–$40,000</p>
                <p className="text-muted-foreground">Most clients invest in this range for a complete rental inventory, depending on package size and delivery location.</p>
              </CardContent>
            </Card>

            <Card className="border-secondary border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-card-foreground">Best Price</h3>
                </div>
                <p className="text-3xl font-bold text-secondary mb-4">~$300 per letter (Elite Pack)</p>
                <p className="text-muted-foreground">Includes 36″ self-standing marquee letters made of powder-coated steel, with LED bulbs and reusable foam-lined transport boxes and more!</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Final pricing depends on the exact mix and style of letters—including any upgrades like color-changing bulbs or LED neon options—as well as your preferred timeline and shipping destination. Reach out for a custom quote and we'll help build the perfect inventory for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Website Feature Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Available With Your Package
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Your Business Gets Its Own Website</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Larger packages include a fully built, ready-to-launch website for your business — and it can be added to any package. Your brand, your pricing, your photos, live at your own domain.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Browser mockup */}
            <div className="relative">
              <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-muted px-4 py-3 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground font-mono">
                    marquee.yourbusiness.com
                  </div>
                </div>
                {/* Site preview screenshot */}
                <div className="relative">
                  <img
                    src="/images/demo-site-preview.webp"
                    alt="Demo rental website homepage preview"
                    className="w-full block"
                    loading="lazy"
                  />
                  {/* Demo overlay badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    DEMO SITE
                  </div>
                </div>
              </div>
              {/* View demo link */}
              <div className="text-center mt-4">
                <a
                  href="https://marquee.jerradgreen.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View the live demo site
                </a>
              </div>
            </div>

            {/* Feature list */}
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Built and ready to launch</h3>
                  <p className="text-muted-foreground text-sm">Your site is fully built before you receive your letters. Gallery, pricing, inquiry form, and availability calendar are all included.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Your domain, your brand</h3>
                  <p className="text-muted-foreground text-sm">Connect your own domain name and it looks completely custom — like you built it yourself.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Marquee letter visualizer</h3>
                  <p className="text-muted-foreground text-sm">Customers can type any phrase and see exactly what their letters will look like before they book. A powerful tool that turns interest into reservations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Easy admin dashboard</h3>
                  <p className="text-muted-foreground text-sm">Update your pricing, swap photos, manage inquiries, and edit your FAQ — all from a simple dashboard. No technical skills needed.</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground italic">Already have a website? No problem. We can connect the rental site as a subdomain so it works alongside what you already have.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section — directly under hero, above "Why Most Event Businesses" */}
      <section id="4ft-marquee-letters" className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 text-center">
            Build Your Marquee Letter Rental Business with the Right Inventory
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            If you're building or expanding a marquee letter rental business, your inventory determines your earning capacity. Our commercial-grade 36″ letters are the industry standard for rental companies, with 48″ options available for larger-scale displays and premium bookings. Complete inventory includes letters, numbers, symbols, and optional double-row display stands — allowing you to service weddings, corporate events, school functions, milestone celebrations, and fully custom names or event titles without turning away high-value bookings.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            This page outlines realistic inventory investment ranges (typically $12,000–$35,000 depending on scope), revenue potential per event, and how to structure scalable inventory correctly from the start.
          </p>
        </div>
      </section>

      {/* H2 Section — Commercial-Grade Inventory */}
      <section id="full-alphabet-sets" className="py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
            Commercial-Grade Marquee Rental Inventory
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            Owning your own marquee letter rental inventory allows you to generate revenue from repeat bookings without paying franchise fees or ongoing royalties. Our commercial marquee letters are available in complete sets — letters A–Z, numbers 0–9, symbols such as the ampersand and other common event characters — along with optional double-row display stands. The 36-inch marquee letters are the most common rental size, while 48-inch marquee letters are available for higher-impact displays and premium bookings.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Because of commercial production efficiencies, building complete inventory up front is significantly more cost-effective than ordering small quantities over time. Each piece is built from steel with a durable powder-coated finish, designed for repeated transport and long-term use — these are revenue-producing assets, not decorative props.
          </p>
        </div>
      </section>

      <LetterViewer3D />

      {/* Feature Cards */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-4 h-full flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Durable & Long‑Lasting</h3>
                  <p className="text-xs text-muted-foreground">Commercial grade, powder‑coated steel built to withstand years of events.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Top‑Tier Craftsmanship</h3>
                  <p className="text-xs text-muted-foreground">Extra‑deep, self‑standing design with a high‑gloss finish and closed backs to hide wiring.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-card-foreground">Reusable Foam‑Lined Boxes</h3>
                  <p className="text-xs text-muted-foreground">Every order ships in protective boxes you can use again and again for safe transport.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile-only CTA button */}
          <div className="lg:hidden text-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 w-full"
              onClick={openQuoteForm}
             >
               Request Package Pricing
             </Button>
          </div>
        </div>
      </section>

      {/* Why Most Event Businesses Leave Money on the Table */}
      <section className="py-2 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Most Event Businesses Leave Money on the Table</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">You're outsourcing marquee letters and losing money on every event.</h3>
                <p className="text-base text-muted-foreground">YOU are booking the client… but someone else is collecting a portion of the profit. Why not keep it all?</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">You're working hard, but not building YOUR business.</h3>
                <p className="text-base text-muted-foreground">Whether you're working for someone else or renting cheap inventory, you're building THEIR brand — not YOURS.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Your profit per event is capped, no matter how busy you are.</h3>
                <p className="text-base text-muted-foreground">You need products that make more with less effort. Our letters are eye-catching, low-maintenance, and book themselves.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              No Franchise Fees: Keep 100% of your rental revenue
            </Badge>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="pricing-packages" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">What Does the ROI Look Like for a Marquee Letter Rental Business?</h2>
          <div className="space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              Unlike many event investments that are single-use or trend-dependent, commercial-grade marquee letters are durable revenue assets designed to generate repeat bookings for years.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              A typical 36″ marquee letter rental ranges from $75–$125 per letter per event, depending on market and event type. Many bookings include 4–6 letters or numbers, placing average event revenue between $400–$700+ per booking.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              For rental companies securing just 3–5 events per month, that can represent $1,200–$3,500+ in monthly revenue from the same inventory set.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              While results vary based on pricing, marketing, and local demand, many operators recover their initial investment within the first year and continue generating revenue long after break-even. Because the letters are built from steel and designed for transport, they're intended to withstand frequent rentals and long-term use.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Rather than viewing marquee letters as décor, successful event businesses treat them as scalable inventory — assets that can book across weddings, corporate events, proms, milestone birthdays, and private parties year after year.
            </p>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section - Starting a Marquee Letter Rental Business */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Frequently Asked Questions About Starting a Marquee Letter Rental Business
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">How much does it cost to start a marquee letter rental business?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Startup investment varies depending on inventory size, but most professional rental operators begin with $15,000–$35,000 in commercial-grade letters, numbers, and toppers. The key is selecting high-demand characters that book consistently across weddings, corporate events, and private parties.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">How much can you make renting marquee letters?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">A typical 36″ marquee letter rents for $75–$125 per letter per event. Most bookings include 4–6 letters or numbers, generating $400–$700+ per event. With just 3–5 bookings per month, many operators generate $1,200–$3,500+ monthly from the same inventory.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What inventory should I buy first?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">The most versatile starting inventory includes 36″ A–Z letters, popular numbers (0–9), and common word toppers like "MR & MRS," "LOVE," and "THE." High-demand characters maximize booking flexibility while minimizing storage complexity.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">How long does it take to recover your investment?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Many rental companies recover their initial investment within the first year through consistent bookings and repeat clients. Because commercial-grade letters are built for durability and transport, they continue generating revenue for years beyond break-even.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Are commercial marquee letters different from decorative props?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">Yes. Commercial-grade marquee letters are designed for repeated rentals, transportation, and long-term durability. They use steel construction, professional finishes, and serviceable LED systems — unlike decorative or consumer-grade products.</p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mt-8 text-center">
            Ready to launch? <button onClick={openQuoteForm} className="text-primary hover:underline font-semibold cursor-pointer bg-transparent border-none p-0 inline text-base">Explore our complete marquee letter rental business packages</button>.
          </p>
        </div>
      </section>

      {/* You Don't Need a Franchise Section */}
      <section id="business" className="py-12 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Content - takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">You Don't Need a Franchise. You Just Need the Right Inventory.</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Get your own collection of professional-grade marquee letters — built to last, ready to rent, and designed to pay for themselves fast. No royalty fees. No chasing suppliers. Just premium product and full control.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">I've Seen the Struggle. That's Why I Built This.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Over 10+ years, I've worked with event pros who were constantly outsourcing marquee letters — watching someone else make the real money. I spent the last decade developing the highest quality marquee letters on the market — durable, self-standing, beautifully powder-coated, and designed specifically for the rental industry.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">You're Tapping Into a Proven System</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    I'm Jerrad Green, founder of Vintage Marquee Lights. I've helped business owners across the country create show-stopping displays that get eyeballs and bring in money.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These aren't off-the-shelf letters. Every detail was built from real-world rental industry experience. When you order from us, you're getting a shortcut to high-impact results — without the trial and error.
                  </p>
                </div>
              </div>

              {/* Image - takes 1 column */}
              <div className="lg:col-span-1">
              <PerformantImage 
                src="https://cdn.shopify.com/s/files/1/1403/8315/files/family_lores.webp?v=1759926679" 
                alt="Jerrad Green and family, founders of Vintage Marquee Lights rental business" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
                fetchPriority="low"
                sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), 33vw"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What You Get When You Own This Inventory</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Start Earning Fast — No Guesswork</h3>
              <p className="text-sm text-muted-foreground">Pre-packed with the most requested letters and symbols</p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Make More Per Event — With Less Effort</h3>
              <p className="text-sm text-muted-foreground">Premium, self-standing steel letters with a high-end finish</p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Keep Every Dollar — No Strings Attached</h3>
              <p className="text-sm text-muted-foreground">100% yours to own — no franchise, no royalty fees, no limits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Guide Download Section */}
      <div id="rental-biz-guide">
        <RentalGuideDownloadSection />
      </div>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="mb-4">
                <PerformantImage 
                  src={testimonialSarahImage} 
                  alt="Sarah M. satisfied marquee letter rental business customer testimonial" 
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                  loading="lazy"
                  sizes="64px"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <blockquote className="text-base text-muted-foreground italic mb-4 leading-relaxed">
                "I run a balloon arch and decor company, and adding these marquee letters was a game changer. Now I can offer complete event packages and my profit per event has doubled."
              </blockquote>
              <cite className="text-sm text-foreground font-semibold">— Sarah M., California</cite>
            </div>

            {/* Testimonial 2 */}
            <div className="text-center p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="mb-4">
                <img 
                  src={testimonialMikeImage} 
                  alt="Mike R. testimonial photo" 
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <blockquote className="text-base text-muted-foreground italic mb-4 leading-relaxed">
                "These letters transformed our event business overnight. Clients are booking us specifically for the marquee letters now. The quality is absolutely stunning and they're so easy to transport."
              </blockquote>
              <cite className="text-sm text-foreground font-semibold">— Mike R., Texas</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Full C&D Marquees customer story */}
      <section id="cd-marquees-story" className="py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">Customer Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How C&amp;D Marquees built a Charlotte event rental brand around marquee lights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dion and Chantal Powell are the husband-and-wife team behind C&amp;D Marquees and Event Rentals, a family-owned Charlotte rental business built around beautiful event displays, marquee lights, floral walls, and memorable celebration moments.
            </p>
          </div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start mb-8">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-border max-w-[340px] w-full mx-auto lg:mx-0">
              <PerformantImage
                src={cdMarqueesFounderImage}
                alt="Dion and Chantal Powell with C&D Marquees letters"
                className="w-full h-64 md:h-72 lg:h-80 object-cover object-center"
                loading="lazy"
                sizes="(max-width: 1024px) 340px, 320px"
              />
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">A real example of what the right inventory can become</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Their business is a strong example of what a marquee sign package can become when it is treated like the start of a brand, not just another event rental item. Their lights help create the kind of photo-ready setups people remember at birthdays, weddings, corporate events, school celebrations, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chantal also does a great job showing the business on Instagram. If you want to see how they market their marquee lights, event setups, and finished displays, take a look at <a href="https://www.instagram.com/cdmarquees/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-4">@cdmarquees</a>.
              </p>

              <div className="bg-muted/40 border-l-4 border-primary rounded-xl p-5">
                <blockquote className="text-lg text-foreground font-semibold leading-relaxed italic mb-4">
                  “Vintage Marquee Lights helped us start with marquee signs we felt proud to put in front of clients. The lights gave us a professional look from day one, and that made it easier to show up with confidence, create beautiful setups, and keep building the C&amp;D brand.”
                </blockquote>
                <cite className="text-sm text-muted-foreground font-semibold not-italic">
                  Dion &amp; Chantal Powell, C&amp;D Marquees and Event Rentals
                </cite>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Own the inventory</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">No franchise fees, no royalties, and no territory restrictions.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Serve more events</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">One package can support weddings, birthdays, schools, corporate events, showers, and more.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Rent it again</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Set up the letters for one celebration, then use the same inventory for the next booking.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-2">Build your brand</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">C&amp;D shows how marquee lights can become part of a local event rental identity.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">A few of their setups</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                This is the kind of visual proof that helps a rental business sell itself. Once people can picture the lights at their own event, the conversation gets easier.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {cdMarqueesGallery.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  className="group relative rounded-xl overflow-hidden shadow-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setSelectedGalleryImage(image)}
                  aria-label={`Enlarge ${image.alt}`}
                >
                  <PerformantImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-3 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                    Click to enlarge
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Want to talk through your package options?</h3>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-6 leading-relaxed">
              We can help you compare package sizes, plan around the 12 to 14 week delivery timeline, and think through the inventory that makes the most sense for your market.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={openQuoteForm}>
              Request Package Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* DJ Franco Events customer story */}
      <section id="dj-franco-events-story" className="py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/10">Customer Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How DJ Franco Events added marquee letters as a built-in event upgrade
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Franco shows the second path for VML rental inventory buyers. Instead of starting a dedicated marquee rental company from zero, an established DJ, venue, or event business can add marquee letters to the client conversations already happening every week.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start mb-8">
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">A premium upsell for a business that already books events</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DJ Franco Events is already built around entertainment, planning, production, rentals, and event enhancements. Adding marquee letters gave the business another photo-ready upgrade clients can add when they are planning the rest of their event.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This is why marquee letters work well for DJs, venues, planners, photo booth companies, balloon artists, decorators, and rental companies. The demand is already in the room. The letters make the package more visual, more personal, and easier to photograph.
              </p>

              <div className="bg-muted/40 border-l-4 border-accent rounded-xl p-5">
                <blockquote className="text-lg text-foreground font-semibold leading-relaxed italic mb-4">
                  “We added marquee letters because they fit naturally into the events we already host and produce. They give our clients another way to personalize the space and create a photo-ready moment without having to bring in another vendor.”
                </blockquote>
                <cite className="text-sm text-muted-foreground font-semibold not-italic">
                  DJ Franco Events
                </cite>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-border max-w-[380px] w-full mx-auto lg:mx-0 order-1 lg:order-2">
              <PerformantImage
                src={djFrancoHeroImage}
                alt="DJ Franco Events marquee letters set up inside an event space"
                className="w-full h-72 md:h-80 lg:h-[420px] object-cover object-center"
                loading="lazy"
                sizes="(max-width: 1024px) 380px, 360px"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            <Card className="border-accent/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-foreground mb-2">Fits the same sale</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Clients already choosing music, rentals, lighting, and decor can add letters as one more upgrade.</p>
              </CardContent>
            </Card>
            <Card className="border-accent/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-foreground mb-2">Turns a venue into a showroom</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Every setup helps future clients picture names, phrases, and branded moments at their own event.</p>
              </CardContent>
            </Card>
            <Card className="border-accent/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-foreground mb-2">Creates social proof</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Names and phrases give event businesses content that explains the product without a long pitch.</p>
              </CardContent>
            </Card>
            <Card className="border-accent/20">
              <CardContent className="p-5">
                <Check className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-foreground mb-2">Serves many event types</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Weddings, birthdays, corporate events, proms, and private parties can all use the same core inventory.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">A few looks from Franco's event space</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                These setups show how marquee letters can become a simple add-on that makes an existing event package feel more complete and more memorable.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {djFrancoGallery.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  className="group relative rounded-xl overflow-hidden shadow-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setSelectedGalleryImage(image)}
                  aria-label={`Enlarge ${image.alt}`}
                >
                  <PerformantImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-3 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                    Click to enlarge
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-accent text-accent-foreground rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Already in the event business?</h3>
            <p className="text-accent-foreground/90 max-w-2xl mx-auto mb-6 leading-relaxed">
              We can help you think through which package gives you enough letters, numbers, and phrase options to add marquee rentals to the business you already have.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={openQuoteForm}>
              Request Package Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">How to Get Started</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-lg overflow-hidden bg-muted/40 ring-1 ring-border/40">
              <PerformantImage 
                src="https://cdn.shopify.com/s/files/1/1403/8315/files/1_lights_on_studio.webp?v=1759678401" 
                alt="Step 1" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                fetchPriority="low"
                sizes="128px"
              />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 1: Get a Quote in Around 5 Minutes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fill out a quick form and we'll send you pricing, package options, and everything you need to make the right move. Flexible financing is available through Shop Pay Installments — approval takes seconds, no lengthy application.
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
                alt="Step 2" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                fetchPriority="low"
                sizes="128px"
              />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 2: We Handle Everything</h3>
              <p className="text-muted-foreground leading-relaxed">
                From production to freight, we coordinate every detail — your inventory arrives ready to rent, with nothing left to figure out.
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
                alt="Step 3" 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                fetchPriority="low"
                sizes="128px"
              />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Step 3: Launch, Rent, and Grow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start booking rentals, keep every dollar, and grow a business that's fully yours — with products that pay for themselves again and again.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            onClick={openQuoteForm}
          >
            Get Package Pricing Now
          </Button>
        </div>
      </section>

      {/* 10 Reasons Section */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">10 Reasons Clients Choose Vintage Marquee Lights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Unmatched Durability</h3>
                  <p className="text-muted-foreground">These aren't flimsy wooden frames. Our steel letters are powder-coated, self-standing, and built to survive years of rentals and transport.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Zero Franchise or Royalty Fees</h3>
                  <p className="text-muted-foreground">You keep 100% of what you earn. No licensing. No middleman. No surprise costs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Complete, Ready‑to‑Rent Packages</h3>
                  <p className="text-muted-foreground">You don't have to guess what letters you need — we deliver full sets of high-demand characters so you start renting right away.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">End-to-End Logistics Handled</h3>
                  <p className="text-muted-foreground">From production to freight, packaging to delivery — we manage it all so you don't have to chase supply chains.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Premium Visual Impact</h3>
                  <p className="text-muted-foreground">These aren't mere signs — they command attention in photos, events, and social media. You look premium; your clients notice.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Scalable & Expandable Inventory</h3>
                  <p className="text-muted-foreground">Your setup today can grow — you can add modules, symbols, or backup letters without redoing your system.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Nationwide Reach / Delivery Capability</h3>
                  <p className="text-muted-foreground">No matter where your business is, you can order and get consistent service — not just local limitations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Tested & Proven in the Field</h3>
                  <p className="text-muted-foreground">These letters aren't just manufactured — they were developed through real-world use over a decade in the rental space.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Dynamic Lighting Options</h3>
                  <p className="text-muted-foreground">Upgrade to color-changing bulbs or a full LED neon-style look for clients who want something bold and modern.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Custom Shapes Available</h3>
                  <p className="text-muted-foreground">Need a heart, a hashtag, or something totally unique? We can design and produce custom shapes to make your rentals stand out even more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section id="included" className="py-16 px-4 bg-muted/20 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What's Included in a Rental Inventory Package</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            Every rental inventory package includes commercial-grade steel marquee letters, numbers, and symbols — along with LED bulbs, reusable foam-lined shipping boxes for safe transport and storage, and professional powder-coated finishes built to withstand years of repeated rental use.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature A - Blue */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Extra-Deep, Self-Standing Construction</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Built with depth and balance for maximum stability.</p>
              </CardContent>
            </Card>

            {/* Feature B - Orange */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Fully Enclosed Backs</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">All wiring and sockets are hidden inside closed backs for a clean, professional appearance and safer transport.</p>
              </CardContent>
            </Card>

            {/* Feature C - Blue */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Powder-Coated Steel Finish</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Tough, sleek, and weather-resistant — your letters hold up to repeated rentals.</p>
              </CardContent>
            </Card>

            {/* Feature D - Orange */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">LED Bulbs (Warm or Color-Changing)</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Every unit includes long-lasting LED bulbs — with optional RGB color-changing or neon-style upgrades available.</p>
              </CardContent>
            </Card>

            {/* Feature E - Blue */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Star className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Reusable Foam-Lined Shipping Boxes</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Every package is shipped in durable foam-lined boxes you can reuse for safe storage, transport, and organization.</p>
              </CardContent>
            </Card>

            {/* Feature F - Orange */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">Optional Display Stands for Multi-Row Setups</h3>
                <div className="w-12 h-px bg-border mx-auto mb-3"></div>
                <p className="text-sm text-muted-foreground">Add-on base stands make it easy to stack letters in multiple rows for layered phrases or stage-height signage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={openQuoteForm}
          >
            Get Package Pricing Now
          </Button>
        </div>
      </section>

      {/* Learn More About Starting a Rental Business */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
            Learn More About Starting a Marquee Letter Rental Business
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 text-center">
            If you're researching how to start or scale a marquee letter rental business, these in-depth guides break down startup investment, inventory strategy, and long-term profitability.
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed space-y-3 pl-4">
            <li>
              <Link to="/rental-business/startup-cost" className="text-primary hover:underline font-semibold">How Much Does It Cost to Start a Marquee Letter Rental Business?</Link>
            </li>
            <li>
              <Link to="/rental-business/building-a-scalable-inventory" className="text-primary hover:underline font-semibold">Building a Scalable Marquee Letter Inventory</Link>
            </li>
            <li>
              <Link to="/rental-business/profitability" className="text-primary hover:underline font-semibold">Marquee Letter Rental Business Profitability Guide</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions (and How We've Got You Covered)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product & Customization Group */}
            {/* FAQ Item 1 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Can I powder-coat the letters in a custom color?</h3>
              <p className="text-sm text-muted-foreground">Yes — we can powder coat in just about any color. That said, white is by far the most versatile for weddings, corporate events, proms, and everything in between.</p>
            </div>

            {/* FAQ Item 7 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Can I customize or change a package to fit my needs?</h3>
              <p className="text-sm text-muted-foreground">Absolutely. Our standard packages are based on years of rental data, but you can select the exact mix of letters, numbers, symbols, toppers, or lighting options that match your niche or market.</p>
            </div>

            {/* FAQ Item 9 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What size are the letters? And do you offer larger ones?</h3>
              <p className="text-sm text-muted-foreground">All of our rental packages include 36" tall letters, which are the perfect mix of visibility and practicality.</p>
              <p className="text-sm text-muted-foreground mt-1">We do offer 48" letters as well — they look amazing but require more space, effort, and cost to handle.</p>
            </div>

            {/* FAQ Item 10 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What are toppers?</h3>
              <p className="text-sm text-muted-foreground">Toppers are 15" tall word signs like THE, MR&MRS, CLASS OF, and BABY. Each phrase is pre-mounted on a shared base so you can easily set them on top of your 36" letters for layered displays — and extra rental income.</p>
            </div>

            {/* Business & Pricing Group */}
            {/* FAQ Item 2 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What are the payment terms?</h3>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">We try to make it easy on you.</p>
                <ul className="list-disc list-inside space-y-1 ml-3 text-xs">
                  <li>Wire transfer gets you a 3% discount and keeps production moving at top speed.</li>
                  <li>Credit cards are accepted but include a 3% fee to offset high transaction costs.</li>
                  <li>Checks are accepted but can take up to 10 days to clear — production won't start until they do.</li>
                  <li>Shop Pay Installments is also available if you want to break it into monthly payments — production starts immediately upon approval.</li>
                </ul>
              </div>
            </div>

            {/* FAQ Item 8 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Which package is the most popular?</h3>
              <p className="text-sm text-muted-foreground">The 112-piece Elite Package is by far the most popular. It has the best cost-per-letter and gives you enough inventory to handle multiple events per weekend — which means higher returns and better flexibility.</p>
            </div>

            {/* FAQ Item 12 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: How much can I rent the letters for?</h3>
              <p className="text-sm text-muted-foreground">Typical rates range from $75–$150 per letter, depending on your market.</p>
              <p className="text-sm text-muted-foreground mt-1">You can also offer bundles, delivery/setup add-ons, or even client pickup (with proper documentation and damage policies). You're in control of the pricing — it's your business.</p>
            </div>

            {/* Manufacturing & Quality Group */}
            {/* FAQ Item 4 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Where are these made?</h3>
              <p className="text-sm text-muted-foreground">We manufacture our letters overseas through a trusted production partner I've worked with for over 10 years.</p>
              <p className="text-sm text-muted-foreground mt-1">That relationship is what allows us to offer this level of quality, powder coating, precision packing, and attention to detail — all at a price that simply wouldn't be possible if made locally.</p>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Is there a warranty?</h3>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Yes.</p>
                <ul className="list-disc list-inside space-y-1 ml-3 text-xs">
                  <li>We replace any items damaged beyond simple repair during shipping or due to a manufacturing issue.</li>
                  <li>We do not replace items damaged from dropping, tipping, or event misuse.</li>
                  <li>That said, the product is built strong and packed well — breakage is rare, and we'll always take care of you if it's something on our end.</li>
                </ul>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What kind of bulbs do you use?</h3>
              <p className="text-sm text-muted-foreground">We use LED bulbs with E12 (candelabra) bases — long-lasting, energy efficient, and easy to replace.</p>
              <p className="text-sm text-muted-foreground mt-1">You'll receive spare bulbs with your order, and if you ever need more, we can ship replacements. You can also find fun or creative options on Amazon that fit the same base.</p>
            </div>

            {/* Logistics & Storage Group */}
            {/* FAQ Item 3 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: How long does it take from payment to delivery?</h3>
              <p className="text-sm text-muted-foreground">Once payment is received, delivery takes approximately 3–4 months. That includes production time, international freight, final delivery scheduling, and custom packing.</p>
              <p className="text-sm text-muted-foreground mt-1">It's a long timeline, but it's what makes it possible to get a premium product at this price point. You'll get updates along the way, and the final carrier will call you to coordinate delivery.</p>
            </div>

            {/* FAQ Item - What if I need something sooner */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: What if I need something sooner?</h3>
              <p className="text-sm text-muted-foreground">It's possible to air freight a small number of letters for an additional cost. That way, you can start showing off your new inventory, build marketing buzz, and begin drumming up business while the rest of your order is still en route.</p>
            </div>

            {/* FAQ Item 11 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Are the foam-lined boxes going to last?</h3>
              <p className="text-sm text-muted-foreground">Yes. They're custom-designed for durability and protection. For best results, tape the corners when you receive them — it strengthens the boxes for years of loading and unloading. Many clients use them as long-term storage and transport systems.</p>
            </div>

            {/* FAQ Item 13 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: How much storage space will I need?</h3>
              <p className="text-sm text-muted-foreground">Keeping everything in boxes? Plan for 300–400 sq ft and solid shelving.</p>
              <p className="text-sm text-muted-foreground mt-1">One client removed the boxes and fit an entire 112-piece package into a 10×20 unit using Uline shelves. Either way, efficient organization will make a huge difference.</p>
            </div>
            {/* FAQ Item 14 */}
            <div className="border-b border-border pb-4">
              <h3 className="text-base font-bold mb-2 text-foreground">Q: Is this for event rentals or starting my own rental business?</h3>
              <p className="text-sm text-muted-foreground">These packages are specifically built for entrepreneurs and event rental companies who want to own their own marquee letter rental inventory. This is not a short-term event rental — it's a business investment.</p>
            </div>
          </div>

          {/* Objection Busters Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Objection Busters</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Objection 1 */}
              <div className="border-b border-border pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"Will this really make me money?"</h4>
                <p className="text-sm text-muted-foreground mb-1">That depends on your hustle and motivation. The opportunity is here — marquee letters are in demand — but like any business, success is earned.</p>
                <p className="text-sm text-muted-foreground mb-1">Post on social media, connect with local vendors, offer setups for styled shoots or charity events, and get visible in your community.</p>
                <p className="text-sm text-muted-foreground">This model rewards effort — the more you put in, the faster you grow. You're not buying a passive product; you're building a business that's fully yours.</p>
              </div>

              {/* Objection 2 */}
              <div className="border-b border-border pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"What if I don't rent anything right away?"</h4>
                <p className="text-sm text-muted-foreground">You're not paying any ongoing fees. You own the inventory and can build your rental business at your own pace — while keeping 100% of the profits.</p>
              </div>

              {/* Objection 3 */}
              <div className="border-b border-border pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"Will I be stuck replacing bulbs all the time?"</h4>
                <p className="text-sm text-muted-foreground">Nope. These LED bulbs last a long time. You'll get extras in the box, and we can ship you more any time.</p>
              </div>

              {/* Objection 4 */}
              <div className="pb-4">
                <h4 className="text-base font-bold mb-2 text-foreground">"Isn't overseas shipping risky or complicated?"</h4>
                <p className="text-sm text-muted-foreground">We handle all logistics and shipping. The price we quote already includes freight and delivery, and we manage every step until the inventory is in your hands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="examples" className="py-8 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Example Rental Inventory Sets</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            See how rental companies and event businesses use our marquee letter inventory at weddings, corporate events, and private celebrations. These are real configurations from active rental operators.
          </p>
          <p className="text-sm font-medium text-primary text-center mb-6">
            Click any photo to enlarge it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exampleRentalInventoryGallery.map((image) => (
              <button
                key={image.src}
                type="button"
                className="group relative overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setSelectedGalleryImage(image)}
                aria-label={`Enlarge ${image.alt}`}
              >
                <PerformantImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-3 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                  Click to enlarge
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
            How to Start a Marquee Letter Rental Business
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            Starting a marquee letter rental business begins with choosing high-demand inventory that can book consistently across weddings, corporate events, proms, and private parties. The most successful rental companies focus on versatile 36″ letters, popular numbers, and word toppers that maximize booking flexibility while minimizing storage complexity.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Instead of piecing inventory together over time, many entrepreneurs launch faster with complete, ready-to-rent packages that include durable steel letters, LED lighting, protective transport boxes, and a proven mix of high-demand characters. With proper pricing, marketing, and local vendor partnerships, many rental businesses recover their initial investment within the first year and continue generating revenue from the same inventory for years to come.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
            Our marquee letter rental business packages are built for entrepreneurs and established event rental companies nationwide who want commercial-grade inventory designed for repeat bookings, safe transport, and long-term profitability. These are revenue-producing rental assets — not decorative props — engineered specifically for professional rental operations.
          </p>
        </div>
      </section>



      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">When Can You Get Them?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Because we manufacture overseas and ship by ocean freight to keep pricing low, delivery takes time—but it's worth the wait.
          </p>
          
          <Card className="border-accent border-2 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-12 h-12 text-accent mr-4" />
                <h3 className="text-3xl font-bold text-card-foreground">3–4 months, with express options available</h3>
              </div>
              <p className="text-xl text-muted-foreground">From order to delivery</p>
            </CardContent>
          </Card>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Planning ahead ensures you get the best value without rush fees. Reserve your set early to stay ahead of peak event seasons.
          </p>
        </div>
      </section>


      {/* CTA Section */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Next Steps</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Ready to start with a few letters or jump into a larger package? Let us know which package interests you or share a custom list of letters and numbers you need. We'll prepare a detailed quote and timeline ASAP.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={openQuoteForm}
            >
              Get Package Pricing Now
            </Button>
          </div>
          
          <p className="mt-8 text-lg opacity-90">
            We look forward to helping you build a rental inventory that stands out at every event.
          </p>
        </div>
      </section>

      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedGalleryImage.alt}
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute -right-2 -top-12 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setSelectedGalleryImage(null)}
              aria-label="Close enlarged image"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedGalleryImage.src}
              alt={selectedGalleryImage.alt}
              className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm text-white/80">{selectedGalleryImage.alt}</p>
          </div>
        </div>
      )}

      <ShopifyFooter />
    </div>
  );
};

export default RentalInventory;
