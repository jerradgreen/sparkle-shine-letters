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
          className="w-full h-full object-cover object-[center_60%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content - Text at top */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto md:-mt-12">
        <div className="space-y-1">
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

      {/* Bottom section - Review and Button */}
      <div className="relative z-10 flex flex-col items-center gap-3 mx-4">
        {/* 5 Star Review from Ashley L. */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 w-full max-w-2xl">
          <div className="flex justify-center mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-base">★</span>
            ))}
          </div>
          <p className="text-white text-xs md:text-sm text-center italic mb-1">
            "We purchased marquee letters for our company event and they look absolutely amazing! The quality is outstanding and we plan on using them year after year for all our corporate gatherings."
          </p>
          <p className="text-white/80 text-xs text-center font-medium">
            Ashley L. - North Carolina
          </p>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToVisualizer}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm md:text-base px-6 md:px-8 shadow-lg"
        >
          Pick Your Letters – Preview Your Setup
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};