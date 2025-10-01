import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShopifyHeader from "@/components/ShopifyHeader";
import { HomeHighlightsSection } from "@/components/HomeHighlightsSection";
import { Star } from "lucide-react";

// Import all assets
import eventStandup from "@/assets/event-standup.jpg";
import layeredSigns from "@/assets/layered-signs.jpg";
import rentalInventory from "@/assets/setup-1.jpeg";
import foodTruckBarMonte from "@/assets/food-truck-bar-monte.jpg";
import chopSueySign from "@/assets/chop-suey-sign.jpg";

const signStyles = [
  {
    title: "Individual Wall Letters",
    description: "Separate marquee letters that hang on walls like artwork. Perfect for restaurants, shops, home decor or anywhere that needs a pop!",
    image: chopSueySign,
    link: "/wall-hanging-signs",
    imagePosition: "center 10%",
  },
  {
    title: "3D Layered/All-in-One Logos, Designs",
    description: "Stunning 3D dimensional signs with multiple layers. Premium depth and visual impact.",
    image: layeredSigns,
    link: "/layered-signs",
  },
  {
    title: "Food Truck Signs",
    description: "Bold illuminated signage for food trucks, mobile vendors. More eyeballs, more sales!",
    image: foodTruckBarMonte,
    link: "/food-truck-signs",
    imagePosition: "center 10%",
  },
  {
    title: "36\" - 48\" Stand-Up Signs for Events",
    description: "Large, commercial grade, freestanding marquee letters for weddings, corporate events, or any celebration.",
    image: eventStandup,
    link: "/event-standup-signs",
    imagePosition: "center 35%",
    imageScale: "scale-125",
  },
  {
    title: "Rental Inventory Packages",
    description: "Purchase a rental inventory package and start your own marquee light rental business, or expand your current offerings.",
    image: rentalInventory,
    link: "/rental-inventory",
  },
  {
    title: "Not Sure? Let's Talk!",
    description: "Have something totally different in mind? We love custom projects. Tell us your vision.",
    image: "https://dl.dropboxusercontent.com/scl/fi/zow5dope9wbfhay9lfcmq/custom-collage3.jpg?rlkey=btz40y0zyzbeb7h7y9kuajvbj",
    link: "https://vintagemarqueelights.com/pages/custom-sign-request-form",
    isExternal: true,
    hideBottomText: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vintage Marquee Lights - Custom Marquee Signs & Letters | Original Since 2008</title>
        <meta name="description" content="Premium custom marquee signs and letters. Choose from wall-hanging letters, 3D layered signs, food truck signage, event letters, or rental inventory packages. Family-owned since 2008." />
        <meta name="keywords" content="marquee signs, vintage marquee lights, custom marquee letters, wall hanging signs, event signs, food truck signs, layered signs, sign rental business" />
        <link rel="canonical" href="https://vintagemarqueelights.com/" />
      </Helmet>
      <Navigation />
      <ShopifyHeader />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-4">
        {/* Hero Section */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Trusted by Thousands. Built for the Spotlight.
          </h1>
          <p className="text-lg text-muted-foreground mb-2 max-w-3xl mx-auto">
            Choose the marquee sign style that fits your vision and see how easy it is to make it yours.
          </p>
          <p className="text-xl font-medium text-foreground max-w-3xl mx-auto mb-1">
            💡 Just click the style below to get started.
          </p>
          <p className="text-sm text-muted-foreground italic max-w-3xl mx-auto">
            Trusted by thousands of businesses, event pros, and creatives across the U.S.
          </p>
        </div>

        {/* Three Features Section */}
        <HomeHighlightsSection />

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
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                              <h3 className="text-white font-bold text-2xl mb-2">
                                {style.title}
                              </h3>
                              <p className="text-white/90 text-base">
                                {style.description}
                              </p>
                              {!style.hideBottomText && (
                                <div className="mt-4 text-white text-xs flex items-center gap-1">
                                  click for more <span className="text-sm">→</span>
                                </div>
                              )}
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
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                              <h3 className="text-white font-bold text-2xl mb-2">
                                {style.title}
                              </h3>
                              <p className="text-white/90 text-base">
                                {style.description}
                              </p>
                              {!style.hideBottomText && (
                                <div className="mt-4 text-white text-xs flex items-center gap-1">
                                  click for more <span className="text-sm">→</span>
                                </div>
                              )}
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

        {/* 5-Star Review Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-2">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-center text-muted-foreground mb-4 italic">
                "From initial concept sketches to the final mockups and delivery, the entire process was seamless. The finished sign exceeded our expectations and has become a signature piece across all our locations. Professional, high-quality work from start to finish."
              </p>
              <p className="text-center font-semibold text-foreground">
                — Michael A., SC
              </p>
              <p className="text-center text-sm text-muted-foreground">
                Chain of Retail Food Stores
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Instagram Gallery Section */}
        <div id="gallery" className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Our Recent Work</h3>
          <p className="text-muted-foreground mb-4">
            Follow us on Instagram to see our latest creations and projects
          </p>
          
          <div className="flex justify-center">
            <iframe 
              src="https://snapwidget.com/embed/1103824" 
              className="snapwidget-widget max-w-full" 
              allowTransparency={true} 
              frameBorder="0" 
              scrolling="no" 
              style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '1275px', height: 'auto', aspectRatio: '1/1' }} 
              title="Posts from Instagram"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="text-center py-12 px-6 bg-muted/20 rounded-lg mb-12">
          <p className="text-lg md:text-xl text-foreground mb-6">
            Got a quick question or just starting to explore?<br />
            We're happy to help — send us a message below.
          </p>
          
          <div className="max-w-2xl mx-auto mb-6">
            <iframe 
              src="https://www.cognitoforms.com/f/dufgHGZ4sU6F2rV69vJTrA/5" 
              allow="payment" 
              style={{border: 0, width: '100%'}} 
              height="492"
              title="Contact Form"
            />
          </div>
          
          <p className="text-muted-foreground">
            Need a full quote or want to design your sign now?<br />
            👉 <a href="https://vintagemarqueelights.com/pages/custom-sign-request-form" className="text-primary hover:underline font-medium">Click here to use our full request form</a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;