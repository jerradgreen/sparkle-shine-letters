import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShopifyHeader from "@/components/ShopifyHeader";

// Import all assets
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import carousel8 from "@/assets/carousel-8.jpg";
import carousel9 from "@/assets/carousel-9.png";
import carousel10 from "@/assets/carousel-10.jpg";
import carousel11 from "@/assets/carousel-11.jpg";
import wallHanging from "@/assets/wall-hanging.jpg";
import eventStandup from "@/assets/event-standup.jpg";
import layeredSigns from "@/assets/layered-signs.jpg";
import rentalInventory from "@/assets/setup-1.jpeg";
import foodTruckBarMonte from "@/assets/food-truck-bar-monte.jpg";
import chopSueySign from "@/assets/chop-suey-sign.jpg";

const carouselData = [
  { image: carousel1, title: "Separate Marquee Letters" },
  { image: carousel2, title: "Custom Event Signage" },
  { image: carousel3, title: "3D Layered Signs" },
  { image: carousel4, title: "Arcade Style Letters" },
  { image: carousel5, title: "Premium Marquee Display" },
  { image: carousel6, title: "Professional Event Setup" },
  { image: carousel7, title: "Vintage Marquee Collection" },
  { image: carousel8, title: "Corporate Event Signage" },
  { image: carousel9, title: "Custom Brand Display" },
  { image: carousel10, title: "Restaurant & Bar Signs" },
  { image: carousel11, title: "Food Service Signage" },
];

const signStyles = [
  {
    title: "Individual Wall Letters",
    description: "Separate marquee letters that hang on walls like artwork. Perfect for shops, studios & home décor.",
    image: chopSueySign,
    link: "/wall-hanging-signs",
    imagePosition: "center 25%",
  },
  {
    title: "3D Layered/All-in-One Logos, Designs",
    description: "Stunning 3D dimensional signs with multiple layers. Premium depth and visual impact.",
    image: layeredSigns,
    link: "/layered-signs",
  },
  {
    title: "Food Truck Signs",
    description: "Bold illuminated signage for food trucks & mobile vendors. More eyeballs = more sales!",
    image: foodTruckBarMonte,
    link: "/food-truck-signs",
    imagePosition: "center 25%",
  },
  {
    title: "36\"/48\" Event Letters",
    description: "Large freestanding marquee letters for weddings, parties & corporate events. Easy setup.",
    image: eventStandup,
    link: "/event-standup-signs",
    imagePosition: "center 35%",
    imageScale: "scale-125",
  },
  {
    title: "Build Rental Inventory",
    description: "Start your own marquee sign rental business. Complete packages with ongoing support.",
    image: rentalInventory,
    link: "/rental-inventory",
  },
  {
    title: "Not Sure? Let's Talk!",
    description: "Have something totally different in mind? We love custom projects. Tell us your vision.",
    image: "https://dl.dropboxusercontent.com/scl/fi/zow5dope9wbfhay9lfcmq/custom-collage3.jpg?rlkey=btz40y0zyzbeb7h7y9kuajvbj",
    link: "https://vintagemarqueelights.com/pages/custom-sign-request-form",
    isExternal: true,
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shuffledImages, setShuffledImages] = useState(carouselData);

  // Shuffle array function
  const shuffleArray = (array: typeof carouselData) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Randomize order on component mount
  useEffect(() => {
    setShuffledImages(shuffleArray(carouselData));
  }, []);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % shuffledImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % shuffledImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            What Style Are You Looking For?
          </h1>
          <p className="text-lg text-muted-foreground mb-1 max-w-3xl mx-auto">
            Click on the style that best matches your vision
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Trusted by thousands of businesses, event pros, and creatives across the U.S.
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
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                              <h3 className="text-white font-bold text-2xl mb-2">
                                {style.title}
                              </h3>
                              <p className="text-white/90 text-base">
                                {style.description}
                              </p>
                              <div className="mt-4 text-white font-bold text-lg flex items-center gap-2">
                                Get a custom quote <span className="text-2xl">→</span>
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
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                              <h3 className="text-white font-bold text-2xl mb-2">
                                {style.title}
                              </h3>
                              <p className="text-white/90 text-base">
                                {style.description}
                              </p>
                              <div className="mt-4 text-white font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Click to explore <span className="text-xl">→</span>
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

        {/* Carousel Section */}
        <div className="relative w-full overflow-hidden mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Recent Projects</h2>
          <div className="relative w-full">
            {shuffledImages.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? 'block' : 'hidden'
                } w-full flex flex-col items-center`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ maxHeight: '48vh' }}
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {shuffledImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stock Check CTA */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 max-w-2xl mx-auto border border-orange-200">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Looking for Ready-to-Ship Items?</h3>
            <p className="text-muted-foreground mb-6">Check our in-stock inventory for immediate availability</p>
            <Link to="/in-stock">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-orange-50">
                ✨ View In-Stock Items
              </Button>
            </Link>
          </div>
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