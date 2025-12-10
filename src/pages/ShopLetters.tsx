import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search, ShoppingCart } from "lucide-react";
import { ShopifyProduct, storefrontApiRequest, GET_PRODUCTS_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "@/components/CartDrawer";

const ShopLetters = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredProducts(
        products.filter(product =>
          product.node.title.toLowerCase().includes(query) ||
          product.node.description.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery, products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await storefrontApiRequest(GET_PRODUCTS_QUERY, { first: 100 });
      const fetchedProducts = data.data.products.edges;
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Shop 36" Marquee Letters - Vintage Marquee Lights</title>
        <meta name="description" content="Browse and purchase individual 36-inch marquee letters, numbers, and symbols. Commercial-grade steel construction with LED lighting, perfect for events and celebrations." />
        <meta name="keywords" content="36 inch marquee letters, event letters, LED marquee signs, vintage marquee lights, wedding letters, celebration signs" />
      </Helmet>
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop 36" Marquee Letters
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Commercial-grade 36-inch marquee letters with LED lighting. Perfect for events, weddings, and celebrations.
              </p>
            </div>

            {/* Search & Cart */}
            <div className="flex gap-4 mb-8 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search letters, numbers, or symbols..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <CartDrawer />
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try a different search term" : "Products will appear here once they're added to your store"}
                </p>
              </div>
            )}

            {/* Products Grid */}
            {!loading && filteredProducts.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {filteredProducts.map((product) => {
                  const variant = product.node.variants.edges[0]?.node;
                  const image = product.node.images.edges[0]?.node;
                  
                  return (
                    <div
                      key={product.node.id}
                      className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all"
                    >
                      <Link to={`/product/${product.node.handle}`} className="block">
                        <div className="aspect-square bg-secondary/20 overflow-hidden">
                          {image && (
                            <img
                              src={image.url}
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          )}
                        </div>
                      </Link>
                      
                      <div className="p-4">
                        <Link to={`/product/${product.node.handle}`}>
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {product.node.title}
                          </h3>
                        </Link>
                        <p className="text-lg font-bold mb-3">
                          ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                        </p>
                        
                        <Button
                          onClick={() => handleAddToCart(product)}
                          disabled={!variant?.availableForSale}
                          className="w-full"
                          size="sm"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShopLetters;
