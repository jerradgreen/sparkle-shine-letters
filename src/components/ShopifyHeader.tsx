import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, X } from "lucide-react";
import logoImage from "@/assets/logo.png";

const ShopifyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-sm font-medium">
          The Original Vintage Marquee Light Makers
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="https://vintagemarqueelights.com" className="flex items-center">
                <img 
                  src={logoImage} 
                  alt="Vintage Marquee Lights" 
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a 
                  href="https://vintagemarqueelights.com" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a 
                  href="https://vintagemarqueelights.com/pages/custom-sign-request-form" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Custom Request Form
                </a>
                <a 
                  href="/rental-inventory" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Build a Rental Inventory
                </a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://vintagemarqueelights.com/cart" className="text-gray-700 hover:text-gray-900">
                <ShoppingCart className="h-6 w-6" />
              </a>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-medium"
                onClick={() => window.open('https://vintagemarqueelights.com/pages/custom-sign-request-form', '_blank')}
              >
                GET A QUOTE
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="https://vintagemarqueelights.com" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Home
              </a>
              <a href="https://vintagemarqueelights.com/pages/custom-sign-request-form" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Custom Request Form
              </a>
              <a href="/rental-inventory" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Build a Rental Inventory
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="https://vintagemarqueelights.com/cart" className="text-gray-700 hover:text-gray-900">
                  <ShoppingCart className="h-6 w-6" />
                </a>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-medium"
                  onClick={() => window.open('https://vintagemarqueelights.com/pages/custom-sign-request-form', '_blank')}
                >
                  GET A QUOTE
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default ShopifyHeader;