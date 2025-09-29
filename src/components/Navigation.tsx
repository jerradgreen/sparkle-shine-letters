import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://www.vintagemarqueelights.com" className="text-foreground hover:text-primary font-medium">
              Home
            </a>
            
            <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium">
              Build a Rental Inventory
            </Link>
            
            <Link to="/event-standup-signs" className="text-foreground hover:text-primary font-medium">
              36/48" Stand-Up Letters
            </Link>
            
            <a href="https://www.vintagemarqueelights.com" className="text-foreground hover:text-primary font-medium">
              Custom Signs
            </a>
            
            <a href="https://vintagemarqueelights.com/pages/custom-sign-request-form" className="text-foreground hover:text-primary font-medium">
              Custom Request Form
            </a>
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
              <a
                href="https://www.vintagemarqueelights.com"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              
              <Link
                to="/rental-inventory"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Build a Rental Inventory
              </Link>
              
              <Link
                to="/event-standup-signs"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                36/48" Stand-Up Letters
              </Link>
              
              <a
                href="https://www.vintagemarqueelights.com"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Custom Signs
              </a>
              
              <a
                href="https://vintagemarqueelights.com/pages/custom-sign-request-form"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Custom Request Form
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;