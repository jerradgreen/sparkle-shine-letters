import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MobileVendorThankYou = () => {
  useEffect(() => {
    (window as any).fbq?.('track', 'Lead');
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Thank You - Vintage Marquee Lights</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      
      <main className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl">
          We've received your submission and will get back to you shortly. 
          Our team is excited to help bring your vision to life with our custom marquee signs!
        </p>
        <Link to="/">
          <Button size="lg" className="text-lg px-8">
            Return to Home
          </Button>
        </Link>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileVendorThankYou;
