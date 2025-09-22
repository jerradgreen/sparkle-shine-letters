import { Facebook, Instagram } from "lucide-react";

const ShopifyFooter = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold text-foreground">FOLLOW</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/vintagemarqueelights" 
              className="w-12 h-12 border-2 border-muted-foreground/40 rounded-full flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.pinterest.com/vintagemarqueelights" 
              className="w-12 h-12 border-2 border-muted-foreground/40 rounded-full flex items-center justify-center text-muted-foreground hover:text-red-600 hover:border-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-5 h-5 flex items-center justify-center text-sm font-bold">P</div>
            </a>
            <a 
              href="https://www.instagram.com/vintagemarqueelights" 
              className="w-12 h-12 border-2 border-muted-foreground/40 rounded-full flex items-center justify-center text-muted-foreground hover:text-pink-600 hover:border-pink-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ShopifyFooter;