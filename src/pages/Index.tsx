import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShopifyHeader from "@/components/ShopifyHeader";
import { HomeHighlightsSection } from "@/components/HomeHighlightsSection";
import { foodTruckSignsConfig, logoSignsConfig, standUpSignsConfig, wallHangingConfig } from "@/config/templateConfigs";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// All images now loaded from Shopify CDN for optimal performance with explicit dimensions
const getResponsiveShopifyImageSet = (imageUrl: string) => {
  if (!imageUrl.includes('_800x.')) return undefined;

  return [
    `${imageUrl.replace('_800x.', '_400x.')} 400w`,
    `${imageUrl.replace('_800x.', '_600x.')} 600w`,
    `${imageUrl} 800w`,
  ].join(', ');
};

const homepageReviews = [
  ...wallHangingConfig.testimonials.items,
  ...standUpSignsConfig.testimonials.items,
  ...foodTruckSignsConfig.testimonials.items,
  ...logoSignsConfig.testimonials.items,
];

const signStyles = [
  {
    title: "Individual Wall Letters",
    description: "Separate marquee letters that hang on walls like artwork. Perfect for restaurants, shops, home decor or anywhere that needs a pop!",
    image: "https://cdn.shopify.com/s/files/1/1403/8315/files/Chop_Suey_a1aaee95-b586-4fb9-880d-2bc12998e8ee_800x.jpg?v=1759691041",
    link: "/wall-hanging-signs",
    imagePosition: "center 10%",
    width: 1200,
    height: 900,
    fetchPriority: "high" as const,
  },
  {
    title: "3D Layered/All-in-One Logos, Designs",
    description: "Stunning 3D dimensional signs with multiple layers. Premium depth and visual impact.",
    image: "https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_6390_layered-sign_800x.jpg?v=1759694027",
    link: "/3d-logos",
    width: 1200,
    height: 900,
  },
  {
    title: "Rental Inventory Packages",
    description: "Purchase a rental inventory package and start your own marquee light rental business, or expand your current offerings.",
    image: "https://cdn.shopify.com/s/files/1/1403/8315/files/Screenshot_2025-05-30_at_9.00.29_AM-topaz_800x.jpg?v=1759690055",
    link: "/rental-inventory",
    width: 1200,
    height: 900,
  },
  {
    title: "36\" - 48\" Stand-Up Signs for Events",
    description: "Large, commercial grade, freestanding marquee letters for weddings, corporate events, or any celebration.",
    image: "https://cdn.shopify.com/s/files/1/1403/8315/files/drewia_hill_lowres_800x.jpg?v=1759248963",
    link: "/event-standup-signs",
    imagePosition: "center 35%",
    imageScale: "scale-125",
    width: 1200,
    height: 900,
  },
  {
    title: "Food Truck Signs",
    description: "Bold illuminated signage for food trucks, mobile vendors. More eyeballs, more sales!",
    image: "https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_9138_800x.jpg?v=1759690342",
    link: "/mobile-vendor-signs",
    imagePosition: "center 10%",
    width: 1200,
    height: 900,
  },
  {
    title: "Not Sure? Let's Talk!",
    description: "Have something totally different in mind? We love custom projects. Tell us your vision.",
    image: "https://cdn.shopify.com/s/files/1/1403/8315/files/custom_collage3.webp?v=1759890260",
    link: "/quote/custom",
    isExternal: false,
    width: 724,
    height: 625,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [showInstagram, setShowInstagram] = useState(false);
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showInstagram) {
            setShowInstagram(true);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (instagramRef.current) {
      observer.observe(instagramRef.current);
    }

    return () => observer.disconnect();
  }, [showInstagram]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Custom Marquee Signs & Letters | Vintage Marquee Lights</title>
        <meta name="description" content="Custom marquee signs and letters built to own since 2008. Wall-hanging letters, 3D logo signs, food truck signage, event letters, and rental inventory." />
        <meta name="keywords" content="marquee signs, vintage marquee lights, custom marquee letters, wall hanging signs, event signs, food truck signs, layered signs, sign rental business" />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Custom Marquee Signs & Letters | Vintage Marquee Lights" />
        <meta property="og:description" content="Custom marquee signs and letters built to own since 2008. Wall-hanging, 3D logo, food truck, event letters, and rental inventory." />
        <meta property="og:url" content="https://inventory.vintagemarqueelights.com/" />
        <link
          rel="preload"
          as="image"
          href={signStyles[0].image}
          fetchPriority="high"
        />
      </Helmet>
      <Navigation />
      <ShopifyHeader />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-4">
        {/* Hero Section */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Custom Marquee Signs & Letters — Trusted by Thousands Since 2008
          </h1>
          <p className="text-lg text-[hsl(197,35%,45%)] mb-2 max-w-3xl mx-auto font-medium">
            Choose the marquee sign style that fits your vision and see how easy it is to make it yours.
          </p>
          <p className="text-xl font-medium text-foreground max-w-3xl mx-auto">
            💡 Just click the style below to get started.
          </p>
        </div>


        {/* Visual Selection Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {signStyles.map((style, index) => {
              return (
                <Card 
                  key={index} 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <CardContent className="p-0">
                    {style.isExternal ? (
                      <a href={style.link} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="relative overflow-hidden">
                          <img
                            src={style.image}
                            alt={style.title}
                            className={`w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ${style.imageScale || ''}`}
                            style={{ objectPosition: style.imagePosition || 'center' }}
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding={index === 0 ? "sync" : "async"}
                            width={style.width}
                            height={style.height}
                            srcSet={getResponsiveShopifyImageSet(style.image)}
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            fetchPriority={index === 0 ? "high" : "auto"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                              <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-white font-bold text-2xl mb-2">
                                  {style.title}
                                </h3>
                                <p className="text-white/90 text-sm leading-snug">
                                  {style.description}
                                </p>
                              </div>
                              <div className="text-white text-xs flex items-center gap-1 mt-auto">
                                click for more <span className="text-sm">→</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                       <Link to={style.link} className="block">
                        <div className="relative overflow-hidden">
                          <img
                            src={style.image}
                            alt={style.title}
                            className={`w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ${style.imageScale || ''}`}
                            style={{ objectPosition: style.imagePosition || 'center' }}
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding={index === 0 ? "sync" : "async"}
                            width={style.width}
                            height={style.height}
                            srcSet={getResponsiveShopifyImageSet(style.image)}
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            fetchPriority={index === 0 ? "high" : "auto"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                              <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-white font-bold text-2xl mb-2">
                                  {style.title}
                                </h3>
                                <p className="text-white/90 text-sm leading-snug">
                                  {style.description}
                                </p>
                              </div>
                              <div className="text-white text-xs flex items-center gap-1 mt-auto">
                                click for more <span className="text-sm">→</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Three Features Section */}
        <HomeHighlightsSection />

        {/* Text-Only Reviews Section */}
        <section className="mb-12 max-w-7xl mx-auto" aria-labelledby="homepage-reviews-heading">
          <div className="text-center mb-8">
            <h2 id="homepage-reviews-heading" className="text-3xl font-bold text-foreground mb-3">
              What Customers Say About Vintage Marquee Lights
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Real feedback from wall-hanging sign buyers, event professionals, mobile vendors, and custom logo customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {homepageReviews.map((review, index) => (
              <Card key={`${review.name}-${index}`} className="h-full bg-card border-border shadow-sm">
                <CardContent className="p-5 flex h-full flex-col">
                  <div className="flex mb-3" aria-label={`${review.rating} star review`}>
                    {Array.from({ length: review.rating }).map((_, star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed flex-1">
                    &ldquo;{review.content}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-border pt-3">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Instagram Gallery Section - Lazy loaded for performance */}
        <div id="gallery" className="text-center mb-12" ref={instagramRef}>
          <h2 className="text-2xl font-bold mb-6">Our Instagram Feed</h2>
          <p className="text-muted-foreground mb-4">
            Follow us on Instagram to see our latest creations and projects
          </p>
          
          <div className="flex justify-center">
            {showInstagram ? (
              <iframe 
                src="https://snapwidget.com/embed/1103824" 
                className="snapwidget-widget max-w-full" 
                allowTransparency={true} 
                frameBorder="0" 
                scrolling="no" 
                style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '1275px', height: 'auto', aspectRatio: '1/1' }} 
                title="Posts from Instagram"
              />
            ) : (
              <div 
                className="bg-muted animate-pulse max-w-full" 
                style={{ width: '100%', maxWidth: '1275px', aspectRatio: '1/1' }}
              />
            )}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="text-center py-16 px-6 bg-muted/20 rounded-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Not sure which style is right for you?
          </h2>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            👉 Click to select your style of sign
          </button>
        </div>

        {/* Custom Logo Signs contextual link */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Our <Link to="/3d-logos" className="text-primary underline hover:text-primary/80 transition-colors font-semibold">Custom Logo Signs</Link> are fabricated in layered metal with dimensional depth and hand-finished detail, designed to become the focal point of restaurants, boutiques, and office interiors. These commissioned builds elevate brand presence beyond flat signage and create a statement that feels architectural and intentional.
          </p>
        </div>

        {/* Contextual Authority / SEO Section */}
        <div className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Start a Commercial Marquee Letter Rental Business
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our{' '}
            <Link to="/rental-inventory" className="text-primary underline hover:text-primary/80 transition-colors font-semibold">
              commercial marquee letter rental business packages
            </Link>{' '}
            are built for entrepreneurs and event rental companies who want durable, high-ROI inventory designed for repeated bookings and long-term profitability. Learn more about{' '}
            <Link to="/rental-business" className="text-primary underline hover:text-primary/80 transition-colors font-semibold">
              starting a marquee letter rental business
            </Link>, from startup costs to scaling your inventory.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;