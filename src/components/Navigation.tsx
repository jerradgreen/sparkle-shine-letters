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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CartDrawer } from "@/components/CartDrawer";
import { SignStyleImageGrid } from "@/components/SignStyleImageGrid";

const Navigation = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignTypeDialogOpen, setIsSignTypeDialogOpen] = useState(false);

  const handleSignTypeSelect = (path: string) => {
    setIsSignTypeDialogOpen(false);
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const signTypeDialog = (
    <Dialog open={isSignTypeDialogOpen} onOpenChange={setIsSignTypeDialogOpen}>
      <DialogTrigger asChild>
        <button className="text-foreground hover:text-primary font-medium">
          Custom Request Form
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">What type of sign are you interested in?</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <SignStyleImageGrid variant="compact" onSelect={handleSignTypeSelect} />
        </div>
      </DialogContent>
    </Dialog>
  );

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
                  <Link to="/event-standup-signs" className="cursor-pointer">Stand-Up Letters</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/rental-inventory" className="cursor-pointer">Rental Inventory</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/quote/not-sure" className="cursor-pointer">Not Sure</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium">
              Start Your Rental Biz
            </Link>
            
            <Link to="/event-standup-signs" className="text-foreground hover:text-primary font-medium">
              36/48" Stand-Up Letters
            </Link>

            {signTypeDialog}
          </div>

          <div className="ml-auto">
            <CartDrawer />
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
                  <Link to="/wall-hanging-signs" className="text-foreground hover:text-primary font-medium py-1" onClick={() => setIsMobileMenuOpen(false)}>Wall Letters</Link>
                  <Link to="/3d-logos" className="text-foreground hover:text-primary font-medium py-1" onClick={() => setIsMobileMenuOpen(false)}>3D Logos</Link>
                  <Link to="/mobile-vendor-signs" className="text-foreground hover:text-primary font-medium py-1" onClick={() => setIsMobileMenuOpen(false)}>Mobile Vendors</Link>
                  <Link to="/event-standup-signs" className="text-foreground hover:text-primary font-medium py-1" onClick={() => setIsMobileMenuOpen(false)}>Stand-Up Letters</Link>
                  <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium py-1" onClick={() => setIsMobileMenuOpen(false)}>Rental Inventory</Link>
                  <Link to="/quote/not-sure" className="text-foreground hover:text-primary font-medium py-1" onClick={() => setIsMobileMenuOpen(false)}>Not Sure</Link>
                </div>
              </div>
              
              <Link to="/rental-inventory" className="text-foreground hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Start Your Rental Biz
              </Link>
              
              <Link to="/event-standup-signs" className="text-foreground hover:text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                36/48" Stand-Up Letters
              </Link>

              {signTypeDialog}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
