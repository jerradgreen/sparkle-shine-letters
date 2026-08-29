const ShopifyHeader = () => {
  return (
    <header className="w-full bg-gradient-to-br from-primary/10 to-accent/10">
      {/* Top Banner */}
      <div className="bg-[hsl(197,85%,35%)] text-primary-foreground text-center py-2 px-4">
        <p className="text-sm font-semibold">
          The Original Vintage Marquee Light Makers
        </p>
      </div>

      {/* Simplified Header with Logo Only */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2">
            <a href="/" className="flex items-center">
              <img 
                src="https://cdn.shopify.com/s/files/1/1403/8315/files/small_logo.webp?v=1759941778" 
                alt="Vintage Marquee Lights" 
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopifyHeader;