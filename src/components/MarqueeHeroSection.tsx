import { Button } from '@/components/ui/button';

// Locally hosted optimized WebP image for faster LCP
const heroLockwoods = '/images/hero-lockwoods.webp';

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
    <section className="relative h-[55vh] md:h-[70vh] flex flex-col justify-between px-4 pt-8 md:pt-16 pb-2 md:pb-3 overflow-hidden">
      {/* Background Image with Overlay - Optimized for LCP */}
      <div className="absolute inset-0">
        <img
          src={heroLockwoods}
          alt="36-inch stand-up marquee letters spelling THE LOCKWOODS at an elegant event venue"
          className="w-full h-full object-cover object-[center_70%]"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          width="1200"
          height="800"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content - Text at top */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto md:-mt-12">
        <div className="space-y-0.5">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Commercial 36″ &amp; 48″ Stand-Up Marquee Letters
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Built for schools, universities, corporations, and event companies that need bold, reusable signage for every occasion.
          </p>
        </div>

        {/* Mobile-only pricing text */}
         <div className="md:hidden mt-3 text-center max-w-2xl mx-auto">
           <p className="text-sm font-semibold leading-snug">
              36″ letters starting at $800. Letters, numbers, symbols, and topper phrases available.
            </p>
        </div>
      </div>

      {/* Pricing Info - Above review */}
       <div className="hidden md:block relative z-10 text-center text-white max-w-2xl mx-auto space-y-1 mt-auto mb-1">
         <p className="text-sm md:text-base font-semibold leading-snug">
           36″ letters starting at $800. Letters, numbers, symbols, and topper phrases available.
         </p>
      </div>

      {/* Bottom section - Review (mobile at bottom, desktop with button) */}
      <div className="relative z-10 mx-4 pb-0">
        {/* 5 Star Review from Ashley L. - Mobile: at bottom, Desktop: with button */}
        <div className="md:hidden bg-white/10 backdrop-blur-sm rounded-lg p-3 w-full max-w-2xl mx-auto">
          <div className="flex justify-center mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-base">★</span>
            ))}
          </div>
          <p className="text-white text-xs text-center italic mb-1">
            "We purchased marquee letters for our company event and they look absolutely amazing! The quality is outstanding and we plan on using them year after year for all our corporate gatherings."
          </p>
          <p className="text-white/80 text-xs text-center font-medium">
            Ashley L. - North Carolina
          </p>
        </div>

        {/* Desktop: Review and Button together */}
        <div className="hidden md:flex flex-col items-center gap-3">
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
          
          <Button 
            onClick={scrollToVisualizer}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm md:text-base px-6 md:px-8 shadow-lg"
          >
            Pick Your Letters – Preview Your Setup
          </Button>
        </div>
      </div>
    </section>
  );
};