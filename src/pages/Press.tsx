import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ShopifyHeader from '@/components/ShopifyHeader';
import ShopifyFooter from '@/components/ShopifyFooter';
import PageTemplate from '@/components/templates/PageTemplate';

const Press = () => {
  const pressMentions = [
    {
      source: "America's Got Talent",
      image: "/images/press-agt.png",
      alt: "Vintage Marquee Lights star sign on the set of America's Got Talent",
      description: "Our classic marquee star sign featured prominently on the backstage set of NBC's hit show America's Got Talent."
    },
    {
      source: "The Rachael Ray Show",
      image: "/images/press-rachael-ray.png",
      alt: "Vintage Marquee Lights arrow sign featured on The Rachael Ray Show",
      description: "A custom distressed metal marquee arrow light showcased as a set piece on the daytime talk show."
    },
    {
      source: "Cecily Strong (SNL)",
      image: "/images/press-cecily-strong.jpg",
      alt: "SNL cast member Cecily Strong with her custom C marquee letter from Vintage Marquee Lights",
      description: "Saturday Night Live star Cecily Strong featured in a home tour photoshoot with her custom yellow 'C' marquee letter."
    },
    {
      source: "Barenaked Ladies Tour",
      image: "/images/press-barenaked-ladies.jpg",
      alt: "Barenaked Ladies concert stage featuring large illuminated marquee letters spelling the band name",
      description: "Custom commercial-grade marquee letters built for the Barenaked Ladies national concert tour stage set."
    },
    {
      source: "Martha Stewart Weddings",
      image: "/images/press-martha-stewart.jpg",
      alt: "Vintage Marquee Lights star featured in Martha Stewart Weddings",
      description: "Our rustic marquee star selected as a top registry pick by the editors at Martha Stewart Weddings."
    },
    {
      source: "Fox News",
      image: "/images/press-fox6.png",
      alt: "Vintage Marquee Lights featured on Fox 6 News morning segment",
      description: "Featured in a morning news segment highlighting unique home decor and event styling trends."
    }
  ];

  const clientLogos = [
    "The Ellen DeGeneres Show",
    "Fuller House (Netflix)",
    "West Elm",
    "Anthropologie",
    "Pottery Barn",
    "Zaxby's",
    "Ruby Tuesday",
    "Subway",
    "Brookstone"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>As Seen In: Press & Media Coverage | Vintage Marquee Lights</title>
        <meta name="description" content="See where Vintage Marquee Lights has been featured, including America's Got Talent, The Rachael Ray Show, Martha Stewart Weddings, and major retail brands." />
        <link rel="canonical" href="https://inventory.vintagemarqueelights.com/press" />
      </Helmet>

      <ShopifyHeader />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            As Seen On Screen & Stage
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since we started the marquee light trend, our custom signs have been featured on national television, in major magazines, on concert tours, and in the homes of celebrities. We build the signs the pros trust.
          </p>
        </div>

        {/* Featured Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pressMentions.map((item, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm">
              <div className="h-64 overflow-hidden bg-muted flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.source}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notable Clients List */}
        <div className="bg-muted rounded-xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Trusted By Global Brands & Productions
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="px-6 py-3 bg-background rounded-full border border-border text-foreground font-medium shadow-sm">
                {client}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Plus features in Glitter Magazine, POSH Magazine, Northern Virginia Magazine, HGTV FrontDoor, Mental Floss, and dozens of local news stations across the country.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ready to build your own custom sign?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/quote/custom" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Custom Quote
            </Link>
            <Link 
              to="/rental-inventory" 
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-colors"
            >
              Start a Rental Business
            </Link>
          </div>
        </div>
      </main>

      <ShopifyFooter />
    </div>
  );
};

export default Press;
