import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail } from "lucide-react";

const ShopifyFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Media Section */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com/vintagemarqueelights" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a 
              href="https://www.instagram.com/vintagemarqueelights" 
              className="text-gray-600 hover:text-pink-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a 
              href="mailto:hello@vintagemarqueelights.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://vintagemarqueelights.com/collections/wall-hanging-letters" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Wall-Hanging Letters
                </a>
              </li>
              <li>
                <a href="https://vintagemarqueelights.com/collections/event-stand-up-letters" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Event / Stand-Up Letters
                </a>
              </li>
              <li>
                <a href="https://vintagemarqueelights.com/collections/layered-signs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  3D Layered Signs
                </a>
              </li>
              <li>
                <a href="/rental-inventory" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Build a Rental Inventory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://vintagemarqueelights.com/pages/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://vintagemarqueelights.com/pages/gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="https://vintagemarqueelights.com/pages/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://vintagemarqueelights.com/pages/custom-sign-request-form" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Custom Request Form
                </a>
              </li>
              <li>
                <a href="https://vintagemarqueelights.com/pages/shipping-info" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="https://vintagemarqueelights.com/pages/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Stay updated with our latest designs and special offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 text-sm"
              />
              <Button 
                size="sm" 
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">We Accept</h4>
            <div className="flex justify-center space-x-4">
              <div className="bg-white border border-gray-300 rounded px-3 py-2 text-xs font-medium text-gray-700">
                Visa
              </div>
              <div className="bg-white border border-gray-300 rounded px-3 py-2 text-xs font-medium text-gray-700">
                Mastercard
              </div>
              <div className="bg-white border border-gray-300 rounded px-3 py-2 text-xs font-medium text-gray-700">
                American Express
              </div>
              <div className="bg-white border border-gray-300 rounded px-3 py-2 text-xs font-medium text-gray-700">
                Discover
              </div>
              <div className="bg-white border border-gray-300 rounded px-3 py-2 text-xs font-medium text-gray-700">
                PayPal
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2025 Vintage Marquee Lights. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://vintagemarqueelights.com/policies/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="https://vintagemarqueelights.com/policies/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
              <span className="text-sm text-gray-400">
                Powered by Shopify
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ShopifyFooter;