import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import heroLockwoods from '@/assets/hero-lockwoods.jpg';

export const MarqueeHeroSection = () => {
  const scrollToVisualizer = () => {
    const visualizer = document.querySelector('.marquee-visualizer');
    if (visualizer) {
      visualizer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQuoteForm = () => {
    const base = 'https://www.cognitoforms.com/VintageMarqueeLights/EventStyleLettersQuoteForm';
    window.open(base, '_blank');
  };

  return (
    <section className="relative h-screen flex items-start justify-center px-4 pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroLockwoods}
          alt="THE LOCKWOODS marquee letters with couple dancing at elegant event"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Stand-up, Commercial Grade Marquee Lights
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed opacity-95 max-w-3xl mx-auto">
            Marquee Lights That Make Every Event Unforgettable
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-32 md:mt-40">
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={openQuoteForm}
          >
            Get Your Quote in Under 5 min
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={scrollToVisualizer}
          >
            Try the Visualizer
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};