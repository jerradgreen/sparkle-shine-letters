import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, X } from "lucide-react";
import logoImage from "@/assets/logo.png";

const ShopifyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-teal-600 text-white text-center py-2 px-4">
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
                <div className="relative group">
                  <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                    Custom Signs
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <a href="https://vintagemarqueelights.com/collections/wall-hanging-letters" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wall-Hanging Letters</a>
                      <a href="https://vintagemarqueelights.com/collections/event-stand-up-letters" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Event / Stand-Up Letters</a>
                      <a href="https://vintagemarqueelights.com/collections/layered-signs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">3D Layered Signs</a>
                      <a href="/rental-inventory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Build a Rental Inventory</a>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://vintagemarqueelights.com/pages/gallery" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Gallery
                </a>
                <a 
                  href="https://vintagemarqueelights.com/pages/about" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://vintagemarqueelights.com/cart" className="text-gray-700 hover:text-gray-900">
                <ShoppingCart className="h-6 w-6" />
              </a>
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium"
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
              <a href="https://vintagemarqueelights.com/collections/wall-hanging-letters" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Wall-Hanging Letters
              </a>
              <a href="https://vintagemarqueelights.com/collections/event-stand-up-letters" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Event / Stand-Up Letters
              </a>
              <a href="https://vintagemarqueelights.com/collections/layered-signs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                3D Layered Signs
              </a>
              <a href="/rental-inventory" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Build a Rental Inventory
              </a>
              <a href="https://vintagemarqueelights.com/pages/gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Gallery
              </a>
              <a href="https://vintagemarqueelights.com/pages/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="https://vintagemarqueelights.com/cart" className="text-gray-700 hover:text-gray-900">
                  <ShoppingCart className="h-6 w-6" />
                </a>
                <Button 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium"
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