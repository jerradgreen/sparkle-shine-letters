import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Download } from "lucide-react";
import { Helmet } from "react-helmet-async";

const RentalInventoryThankYou = () => {
  useEffect(() => {
    (window as any).fbq?.('track', 'Lead');
  }, []);
  const pdfUrl = "/downloads/rental-business-guide.pdf";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Thank You - Vintage Marquee Lights</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Thank You!
          </h1>

          {/* Email notice */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8 flex items-center gap-4 text-left">
            <Mail className="w-10 h-10 text-primary flex-shrink-0" />
            <div>
              <p className="text-lg font-semibold">We will email you rental package pricing info.</p>
              <p className="text-muted-foreground">Please check your email in about 10–15 minutes.</p>
            </div>
          </div>

          {/* PDF download card */}
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

export default RentalInventoryThankYou;
