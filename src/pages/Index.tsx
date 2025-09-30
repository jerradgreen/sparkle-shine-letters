import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import all assets
import logo from "@/assets/logo.png";
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
import foodTruckSign from "@/assets/carousel-11.jpg";
import rentalInventory from "@/assets/setup-1.jpeg";

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
    image: wallHanging,
    link: "/wall-hanging-signs",
  },
  {
    title: "Layered/All-in-One Signs",
    description: "Stunning 3D dimensional signs with multiple layers. Premium depth and visual impact.",
    image: layeredSigns,
    link: "/layered-signs",
  },
  {
    title: "Food Truck Signs",
    description: "Bold illuminated signage for food trucks & mobile vendors. Weather-resistant & eye-catching.",
    image: foodTruckSign,
    link: "/food-truck-signs",
  },
  {
    title: "36\"/48\" Event Letters",
    description: "Large freestanding marquee letters for weddings, parties & corporate events. Easy setup.",
    image: eventStandup,
    link: "/event-standup-signs",
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
      
      {/* Header with Logo */}
      <header className="p-6 text-center">
        <img 
          src={logo} 
          alt="Vintage Marquee Lights" 
          className="mx-auto max-h-24 md:max-h-32 w-auto"
        />
      </header>

      {/* Hero Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full">
          {shuffledImages.map((item, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? 'block' : 'hidden'
              } w-full flex justify-center`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: '48vh' }}
              />
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
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Credibility Blurb */}
      <div className="text-center py-8 px-6 bg-muted/30">
        <p className="text-lg md:text-xl font-semibold text-foreground max-w-4xl mx-auto">
          Trusted by thousands of businesses, bars, and event pros since 2008.<br />
          Proudly family-owned and the ORIGINAL Vintage Marquee Lights brand.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Visual Selection Grid */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Style Are You Looking For?
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Click on the style that best matches your vision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {signStyles.map((style, index) => {
              const isNotSure = style.title.includes("Not Sure");
              
              return (
                <Card 
                  key={index} 
                  className={`group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                    isNotSure ? 'border-4 border-primary md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    {style.isExternal ? (
                      <a href={style.link} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="relative overflow-hidden">
                          <img
                            src={style.image}
                            alt={style.title}
                            className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                              isNotSure ? 'h-80' : 'h-72'
                            }`}
                          />
                          <div className={`absolute inset-0 transition-all duration-300 ${
                            isNotSure 
                              ? 'bg-primary/40 group-hover:bg-primary/50' 
                              : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90'
                          }`}>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                              <h3 className={`text-white font-bold mb-2 ${
                                isNotSure ? 'text-3xl md:text-4xl' : 'text-2xl'
                              }`}>
                                {style.title}
                              </h3>
                              <p className={`text-white/90 ${
                                isNotSure ? 'text-lg md:text-xl' : 'text-base'
                              }`}>
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
                            className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                              isNotSure ? 'h-80' : 'h-72'
                            }`}
                          />
                          <div className={`absolute inset-0 transition-all duration-300 ${
                            isNotSure 
                              ? 'bg-primary/40 group-hover:bg-primary/50' 
                              : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90'
                          }`}>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                              <h3 className={`text-white font-bold mb-2 ${
                                isNotSure ? 'text-3xl md:text-4xl' : 'text-2xl'
                              }`}>
                                {style.title}
                              </h3>
                              <p className={`text-white/90 ${
                                isNotSure ? 'text-lg md:text-xl' : 'text-base'
                              }`}>
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