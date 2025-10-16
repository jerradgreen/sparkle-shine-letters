import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary font-medium flex items-center gap-1">
                Custom Signs <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background">
                <DropdownMenuItem asChild>
                  <Link to="/wall-hanging-signs" className="cursor-pointer">Wall Letters</Link>
                </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/3d-logos" className="cursor-pointer">3D Logos</Link>
              </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mobile-vendor-signs" className="cursor-pointer">Mobile Vendors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/event-standup-signs" className="cursor-pointer">Event Signs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/quote/custom" className="cursor-pointer">Not Sure</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium">
              Build a Rental Inventory
            </Link>
            
            <Link to="/event-standup-signs" className="text-foreground hover:text-primary font-medium">
              36/48" Stand-Up Letters
            </Link>
            
            <Link to="/quote/custom" className="text-foreground hover:text-primary font-medium">
              Custom Request Form
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
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
                <div className="text-foreground font-medium mb-2">Custom Signs</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link
                    to="/wall-hanging-signs"
                    className="text-foreground hover:text-primary font-medium py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wall Letters
                  </Link>
                  <Link
                    to="/3d-logos"
                    className="text-foreground hover:text-primary font-medium py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    3D Logos
                  </Link>
                  <Link
                    to="/mobile-vendor-signs"
                    className="text-foreground hover:text-primary font-medium py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mobile Vendors
                  </Link>
                  <Link
                    to="/event-standup-signs"
                    className="text-foreground hover:text-primary font-medium py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Event Signs
                  </Link>
                  <Link
                    to="/quote/custom"
                    className="text-foreground hover:text-primary font-medium py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Not Sure
                  </Link>
                </div>
              </div>
              
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
              
              <Link
                to="/quote/custom"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Custom Request Form
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;