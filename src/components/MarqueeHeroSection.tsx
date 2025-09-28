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
    <section className="relative h-[50vh] md:h-[70vh] flex flex-col justify-between px-4 pt-8 md:pt-16 pb-6 md:pb-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroLockwoods}
          alt="THE LOCKWOODS marquee letters with couple dancing at elegant event"
          className="w-full h-full object-cover object-[center_80%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content - Text at top */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto md:-mt-12">
        <div className="space-y-2 md:space-y-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Stand-up, Commercial Grade Marquee Lights
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-95 max-w-3xl mx-auto">
            Marquee Lights That Make Every Event Unforgettable
          </p>
        </div>
      </div>
        
      {/* Buttons - side by side on mobile */}
      <div className="relative z-10 flex flex-row gap-3 md:gap-6 justify-center items-center max-w-4xl mx-auto mt-8">
        <Button 
          size="lg" 
          className="text-xs md:text-lg px-4 md:px-10 py-3 md:py-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={openQuoteForm}
        >
          <span className="hidden md:inline">Get a Quote</span>
          <span className="md:hidden">Get Quote</span>
        </Button>
        
        <Button 
          size="lg" 
          className="text-xs md:text-lg px-3 md:px-8 py-3 md:py-6 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={scrollToVisualizer}
        >
          <span className="hidden md:inline">Try the Visualizer</span>
          <span className="md:hidden">Try Visualizer</span>
        </Button>
      </div>

      {/* 5 Star Review from Ashley L. */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 mx-4 md:mx-auto max-w-md">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
        <p className="text-white text-sm text-center italic mb-2">
          "We purchased marquee letters for our company event and they look absolutely amazing! The quality is outstanding and we plan on using them year after year for all our corporate gatherings."
        </p>
        <p className="text-white/80 text-xs text-center font-medium">
          Ashley L. - North Carolina
        </p>
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