import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { TemplateConfig } from '@/types/template';

interface HeroSectionProps {
  config: TemplateConfig['hero'];
  onCTAClick?: () => void;
}

export const HeroSection = ({ config, onCTAClick }: HeroSectionProps) => {
  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      // Default action - scroll to pricing or open modal
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getLayoutClasses = () => {
    switch (config.layout) {
      case 'image-left':
        return 'lg:flex-row';
      case 'image-right':
        return 'lg:flex-row-reverse';
      case 'centered':
      default:
        return 'lg:flex-col';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Content Container */}
      <div className={`relative z-10 container mx-auto max-w-7xl flex flex-col ${getLayoutClasses()} items-center gap-12 lg:gap-20`}>
        
        {/* Text Content */}
        <div className={`flex-1 text-center ${config.layout !== 'centered' ? 'lg:text-left' : ''} space-y-8`}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {config.headline}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              {config.subheadline}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              {config.ctaText}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => {
                const gallerySection = document.getElementById('gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Gallery
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className={`flex-1 ${config.layout === 'centered' ? 'max-w-4xl' : 'max-w-2xl'} w-full`}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
            <OptimizedImage
              src={config.heroImage}
              alt={config.heroImageAlt}
              className="relative rounded-2xl shadow-2xl w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};