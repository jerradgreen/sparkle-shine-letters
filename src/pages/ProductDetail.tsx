import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart, ChevronRight } from "lucide-react";
import { ShopifyProduct, storefrontApiRequest, GET_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "@/components/CartDrawer";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    if (handle) {
      fetchProduct();
    }
  }, [handle]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await storefrontApiRequest(GET_PRODUCT_BY_HANDLE_QUERY, { handle });
      setProduct(data.data.productByHandle);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    const variant = product.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem = {
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Product not found</h2>
              <Link to="/shop/36-inch-letters">
                <Button>Back to Shop</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const variant = product.variants.edges[0]?.node;
  const image = product.images.edges[0]?.node;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product.title} - Vintage Marquee Lights</title>
        <meta name="description" content={product.description || `Purchase ${product.title} - commercial-grade marquee letter with LED lighting.`} />
        <meta name="keywords" content="36 inch marquee letter, event letter, LED marquee sign, vintage marquee light" />
      </Helmet>
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/shop/36-inch-letters" className="hover:text-foreground">Shop Letters</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{product.title}</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Image */}
              <div className="bg-secondary/20 rounded-lg overflow-hidden aspect-square">
                {image && (
                  <img
                    src={image.url}
                    alt={image.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      {product.title}
                    </h1>
                    <p className="text-3xl font-bold text-primary">
                      ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
                    </p>
                  </div>
                  <CartDrawer />
                </div>

                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground">
                    {product.description || "Commercial-grade 36-inch marquee letter with LED lighting. Powder-coated steel construction, perfect for events, weddings, and celebrations."}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <label className="font-medium">Quantity:</label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center font-semibold">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    disabled={!variant?.availableForSale}
                    className="w-full"
                    size="lg"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {variant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>

                <div className="bg-secondary/20 rounded-lg p-6 space-y-2">
                  <h3 className="font-semibold">Product Details</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Commercial-grade steel construction</li>
                    <li>• Powder-coated finish</li>
                    <li>• LED lighting included</li>
                    <li>• 36-inch height</li>
                    <li>• Perfect for events and celebrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
