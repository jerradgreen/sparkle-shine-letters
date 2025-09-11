import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail } from "lucide-react";

const ShopifyFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left side - Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">FOLLOW</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/vintagemarqueelights" 
                className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.pinterest.com/vintagemarqueelights" 
                className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-5 h-5 flex items-center justify-center text-sm font-bold">P</div>
              </a>
              <a 
                href="https://www.instagram.com/vintagemarqueelights" 
                className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:border-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <a href="https://vintagemarqueelights.com" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  HOME
                </a>
                <a href="https://vintagemarqueelights.com/pages/privacy-policy" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  PRIVACY POLICY
                </a>
                <a href="/rental-inventory" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  RENTAL INVENTORY PURCHASE
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="https://vintagemarqueelights.com/pages/custom-sign-request-form" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  CUSTOM SIGN QUOTE
                </a>
                <a href="https://vintagemarqueelights.com/pages/refund-policy" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  REFUND POLICY
                </a>
                <a href="https://vintagemarqueelights.com/pages/projects-blog" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  PROJECTS BLOG
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="https://vintagemarqueelights.com/pages/about" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  ABOUT US
                </a>
                <a href="https://vintagemarqueelights.com/pages/shipping-policy" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  SHIPPING POLICY
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="https://vintagemarqueelights.com/pages/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  CONTACT US
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="https://vintagemarqueelights.com/pages/reviews" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  REVIEWS
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Sign up to get the latest on sales, new releases and more...
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1"
                />
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="text-sm text-gray-600">
                  © 2025 Vintage Marquee Lights.
                </p>
                <p className="text-sm text-gray-600">
                  Powered by Shopify
                </p>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="flex flex-wrap gap-2">
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-blue-600">American Express</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-gray-700">Apple Pay</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-blue-500">Diners Club</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-orange-600">Discover</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-gray-700">Google Pay</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-red-600">Mastercard</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-blue-600">PayPal</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-purple-600">Shop Pay</span>
              </div>
              <div className="bg-white border border-gray-300 rounded px-2 py-1">
                <span className="text-xs font-medium text-blue-600">Visa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ShopifyFooter;