import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const customSignsLinks = [
    { title: "Wall-Hanging Letters", href: "/wall-hanging" },
    { title: "Event / Stand-Up Letters", href: "/event-standup" },
    { title: "3D Layered Signs", href: "/layered-signs" },
    { title: "Rental Inventory", href: "/rental-inventory" },
    { title: "Not Sure Yet", href: "/contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary font-medium">
                <span>Custom Signs</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                {customSignsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="text-foreground hover:text-primary">
                      {link.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium">
              Build a Rental Inventory
            </Link>
            
            <button
              onClick={scrollToGallery}
              className="text-foreground hover:text-primary font-medium"
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="py-2">
                <span className="text-foreground font-medium">Custom Signs</span>
                <div className="ml-4 mt-2 space-y-2">
                  {customSignsLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-muted-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/rental-inventory"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Build a Rental Inventory
              </Link>
              
              <button
                onClick={scrollToGallery}
                className="text-foreground hover:text-primary font-medium py-2 text-left"
              >
                Gallery
              </button>
              
              <Link
                to="/about"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;