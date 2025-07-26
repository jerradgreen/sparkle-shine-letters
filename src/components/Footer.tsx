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
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 mb-8">
          <Link to="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/wall-hanging" className="text-foreground hover:text-primary font-medium">
            Wall-Hanging Letters
          </Link>
          <Link to="/event-standup" className="text-foreground hover:text-primary font-medium">
            Event / Stand-Up Letters
          </Link>
          <Link to="/layered-signs" className="text-foreground hover:text-primary font-medium">
            3D Layered Signs
          </Link>
          <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium">
            Rental Inventory
          </Link>
          <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium">
            Build a Rental Inventory
          </Link>
          <button
            onClick={scrollToGallery}
            className="text-foreground hover:text-primary font-medium text-left"
          >
            Gallery
          </button>
          <Link to="/about" className="text-foreground hover:text-primary font-medium">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary font-medium">
            Contact
          </Link>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Contact</h4>
            <p className="text-muted-foreground">
              Email: hello@vintagemarqueelights.com
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Location</h4>
            <p className="text-muted-foreground">Myrtle Beach, SC</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
            <p className="text-muted-foreground">
              Instagram: @vintagemarqueelights
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground">
            © 2025 Vintage Marquee Lights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;