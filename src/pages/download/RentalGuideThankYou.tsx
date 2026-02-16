import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const RentalGuideThankYou = () => {
  useEffect(() => {
    (window as any).fbq?.('track', 'Lead');
  }, []);
  const pdfUrl = "/downloads/rental-business-guide.pdf";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Download Your Free Rental Guide - Vintage Marquee Lights</title>
        <meta name="description" content="Your free marquee light rental business guide is ready to download" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Success! Your Guide is Ready
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your interest in starting a marquee light rental business!
          </p>

          {/* Download Button */}
          <div className="bg-card border rounded-lg p-8 mb-8">
            <Download className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Download Your Free Guide</h2>
            <p className="text-muted-foreground mb-6">
              Click below to instantly download your comprehensive rental business infographic
            </p>
            <a 
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Guide
              </Button>
            </a>
          </div>


          {/* Next Steps */}
          <div className="text-left mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h2>
            <div className="flex justify-center">
              <Link to="/quote/rental-inventory" className="w-full max-w-md">
                <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                  <h3 className="text-xl font-semibold mb-2">Rental Inventory Quote</h3>
                  <p className="text-muted-foreground mb-4">
                    Let us help you build the perfect rental package for your business
                  </p>
                  <Button variant="outline" className="w-full">
                    Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>

          <Link to="/">
            <Button variant="ghost" className="text-muted-foreground">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RentalGuideThankYou;
