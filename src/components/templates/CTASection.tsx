import { Button } from '@/components/ui/button';
import { TemplateConfig } from '@/types/template';

interface CTASectionProps {
  config: TemplateConfig;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

export const CTASection = ({ config, onPrimaryCTA, onSecondaryCTA }: CTASectionProps) => {
  const handlePrimaryCTA = () => {
    if (onPrimaryCTA) {
      onPrimaryCTA();
    } else {
      // Default action - scroll to pricing
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSecondaryCTA = () => {
    if (onSecondaryCTA) {
      onSecondaryCTA();
    } else {
      // Default action - scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Urgency Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join successful entrepreneurs who have transformed their {config.business.industry} business with our proven system.
            </p>
          </div>
          
          {/* Benefits Reminder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Fast ROI</div>
              <p className="text-sm text-muted-foreground">Start earning within 30 days</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Complete System</div>
              <p className="text-sm text-muted-foreground">Everything included</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Lifetime Support</div>
              <p className="text-sm text-muted-foreground">We're here to help you succeed</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={handlePrimaryCTA}
            >
              {config.hero.ctaText}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={handleSecondaryCTA}
            >
              Contact Us First
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="pt-8 border-t border-border/50 space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ 30-Day Money Back Guarantee</span>
              <span>✓ No Hidden Fees</span>
              <span>✓ Secure Payment Processing</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              Protected by industry-standard security. Your information is safe and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};