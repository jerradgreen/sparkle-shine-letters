import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TemplateConfig } from '@/types/template';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  config: TemplateConfig['pricing'];
  onPackageSelect?: (packageName: string) => void;
}

export const PricingSection = ({ config, onPackageSelect }: PricingSectionProps) => {
  const handlePackageSelect = (packageName: string) => {
    if (onPackageSelect) {
      onPackageSelect(packageName);
    } else {
      // Default action - scroll to contact or open modal
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {config.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {config.subtitle}
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`group relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                index === 1 ? 'border-primary shadow-xl scale-105' : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="text-muted-foreground">{pkg.description}</p>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {pkg.priceRange}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Investment Range
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    index === 1 
                      ? 'bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl' 
                      : 'variant-outline hover:bg-primary hover:text-primary-foreground'
                  }`}
                  onClick={() => handlePackageSelect(pkg.name)}
                >
                  {pkg.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All packages include comprehensive training, marketing materials, and ongoing support. 
            No hidden fees or recurring costs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ Fast ROI Potential</span>
            <span>✓ No Territory Restrictions</span>
            <span>✓ Lifetime Support</span>
            <span>✓ Marketing Materials Included</span>
          </div>
        </div>
      </div>
    </section>
  );
};