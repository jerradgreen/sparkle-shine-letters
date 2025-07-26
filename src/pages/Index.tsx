import { useState, useEffect } from "react";
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
    title: "Wall-Hanging Letters",
    image: wallHanging,
    link: "/wall-hanging",
  },
  {
    title: "Event / Stand-Up Letters",
    image: eventStandup,
    link: "/event-standup",
  },
  {
    title: "3D Layered Signs",
    image: layeredSigns,
    link: "/layered-signs",
  },
  {
    title: "Not Sure Yet",
    image: "https://dl.dropboxusercontent.com/scl/fi/zow5dope9wbfhay9lfcmq/custom-collage3.jpg?rlkey=btz40y0zyzbeb7h7y9kuajvbj",
    link: "/contact",
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
      <div className="text-center py-8 px-6">
        <p className="text-lg md:text-xl font-semibold text-foreground max-w-4xl mx-auto">
          Trusted by thousands of businesses, bars, and event pros since 2008.<br />
          Proudly family-owned and the ORIGINAL Vintage Marquee Lights brand.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* What Style Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Choose what style of sign you are wanting to create
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signStyles.map((style, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link to={style.link}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={style.image}
                        alt={style.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-xl font-semibold text-center">
                            {style.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Options */}
        <div className="text-center space-y-6 mb-12">
          <div>
            <Link to="/rental-inventory">
              <Button 
                size="lg" 
                className="text-xl px-12 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold"
              >
                Build a Rental Inventory
              </Button>
            </Link>
          </div>
          
          <div>
            <Link to="/in-stock">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                ✨ Check and see what we have in stock
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