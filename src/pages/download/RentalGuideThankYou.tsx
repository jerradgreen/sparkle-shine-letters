import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

const RentalGuideThankYou = () => {
  const pdfUrl = "https://cdn.shopify.com/s/files/1/1403/8315/files/start_marquee_business_infographic_copy.pdf?v=1760708935";

  useEffect(() => {
    const trackThankYouPageView = async () => {
      try {
        const sessionId = sessionStorage.getItem('rental_guide_session') || crypto.randomUUID();
        
        await supabase.functions.invoke('track-download', {
          body: {
            event_type: 'thank_you_page_view',
            referrer: document.referrer || 'direct',
            user_agent: navigator.userAgent,
            session_id: sessionId,
          }
        });

        console.log('Tracked thank you page view');
      } catch (error) {
        console.error('Error tracking thank you page view:', error);
      }
    };

    trackThankYouPageView();
  }, []);

  const handleDownloadClick = async () => {
    try {
      const sessionId = sessionStorage.getItem('rental_guide_session') || crypto.randomUUID();
      
      await supabase.functions.invoke('track-download', {
        body: {
          event_type: 'download_click',
          referrer: document.referrer || 'direct',
          user_agent: navigator.userAgent,
          session_id: sessionId,
        }
      });

      console.log('Tracked download click');
    } catch (error) {
      console.error('Error tracking download click:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Download Your Free Rental Guide - Vintage Marquee Lights</title>
        <meta name="description" content="Your free marquee light rental business guide is ready to download" />
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
              download="marquee-light-rental-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
            >
              <Button size="lg" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Guide
              </Button>
            </a>
          </div>

          {/* Email Confirmation */}
          <div className="bg-muted/50 border rounded-lg p-6 mb-12">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              A copy of this guide has also been sent to your email for easy access later
            </p>
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
