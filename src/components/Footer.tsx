import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Main Navigation - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-lg">Products</h4>
            <div className="flex flex-col gap-3">
              <Link 
                to="/wall-hanging-signs" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Wall-Hanging Letters
              </Link>
              <Link 
                to="/event-standup-signs" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Event / Stand-Up Letters
              </Link>
              <Link 
                to="/3d-logos" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                3D Logos
              </Link>
              <Link 
                to="/mobile-vendor-signs" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Mobile Vendor Signs
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-lg">Services</h4>
            <div className="flex flex-col gap-3">
              <Link 
                to="/rental-inventory" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Build a Rental Inventory
              </Link>
              <a 
                href="https://www.cognitoforms.com/VintageMarqueeLights/CustomVintageMarqueeLightsQuoteRequest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Custom Request Form
              </a>
              <a 
                href="https://www.cognitoforms.com/VintageMarqueeLights/CustomVintageMarqueeLightsQuoteRequest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Not Sure?
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-lg">Company</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://vintagemarqueelights.com/pages/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <button
                onClick={scrollToGallery}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Gallery
              </button>
              <a 
                href="https://vintagemarqueelights.com/policies/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-border">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Made In:</h4>
            <p className="text-muted-foreground leading-relaxed">
              Myrtle Beach, SC<br />
              Boise, ID<br />
              Chicago, IL<br />
              Marietta, GA<br />
              Winston-Salem, NC<br />
              and beyond!
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
            <p className="text-muted-foreground">
              Instagram: @vintagemarqueelights
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Vintage Marquee Lights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;