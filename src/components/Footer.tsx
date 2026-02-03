import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const signTypeOptions = [
  { label: "Wall Letters", description: "Custom marquee letters for walls", path: "/quote/wall-hanging" },
  { label: "3D Layered Signs", description: "For logos/more complicated designs in a round, square or any shape", path: "/quote/3d-logos" },
  { label: "Mobile Vendors", description: "Signs for food trucks & carts", path: "/quote/mobile-vendor" },
  { label: "Stand-Up Letters", description: "36\" & 48\" event letters", path: "/quote/event-standup" },
  { label: "Rental Inventory", description: "Start your rental business", path: "/quote/rental-inventory" },
  { label: "Not Sure / Other", description: "We'll help you figure it out", path: "/quote/custom" },
];

const Footer = () => {
  const navigate = useNavigate();
  const [isSignTypeDialogOpen, setIsSignTypeDialogOpen] = useState(false);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignTypeSelect = (path: string) => {
    setIsSignTypeDialogOpen(false);
    navigate(path);
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
              <Link 
                to="/rental-inventory" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Start Your Rental Biz
              </Link>
              <Link 
                to="/quote/custom"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Not Sure?
              </Link>
              <button
                onClick={scrollToGallery}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Gallery
              </button>
              <a 
                href="https://vintagemarqueelights.com/blogs/news"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects Blog
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-lg">Contact</h4>
            <div className="flex flex-col gap-3">
              <Dialog open={isSignTypeDialogOpen} onOpenChange={setIsSignTypeDialogOpen}>
                <DialogTrigger asChild>
                  <button className="text-muted-foreground hover:text-primary transition-colors text-left">
                    Custom Request Form
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">What type of sign are you interested in?</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {signTypeOptions.map((option) => (
                      <button
                        key={option.path}
                        onClick={() => handleSignTypeSelect(option.path)}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-background hover:bg-accent hover:border-primary transition-colors text-center"
                      >
                        <span className="font-medium text-foreground">{option.label}</span>
                        <span className="text-xs text-muted-foreground mt-1">{option.description}</span>
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-lg">Company</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a 
                href="https://vintagemarqueelights.com/pages/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="https://vintagemarqueelights.com/policies/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            
            <div className="mb-6">
              <h5 className="font-semibold text-foreground mb-2 text-sm">Made In:</h5>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Myrtle Beach, SC<br />
                Boise, ID<br />
                Chicago, IL<br />
                Marietta, GA<br />
                Winston-Salem, NC<br />
                and beyond!
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2 text-sm">Follow Us</h5>
              <p className="text-muted-foreground text-sm">
                Instagram: @vintagemarqueelights<br />
                Facebook: @vintagemarqueelights
              </p>
            </div>
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