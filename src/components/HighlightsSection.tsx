import { Check, Star, Truck } from 'lucide-react';

export const HighlightsSection = () => {
  const highlights = [
    {
      icon: Check,
      title: "Durable & Self-Standing",
      description: "Made from powder-coated steel with extra-deep sides, these letters are built to last and stand on their own."
    },
  {
    icon: Star,
      title: "Bold & Bright", 
      description: "At 36\" to 48\" tall with LED bulbs and a sleek finish, they make a big impact at weddings, proms, and parties."
    },
  {
    icon: Truck,
      title: "Easy to Use & Transport",
      description: "Arrive pre-lit and ready to go, with optional reusable foam-lined boxes for simple storage and travel."
    }
  ];

  return (
    <section className="py-6 md:py-4 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-6">
          Why marquee letters and signs win every event
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="flex md:flex-row items-center md:text-left space-x-4 md:space-x-3 md:space-y-0 bg-card p-3 md:p-2 rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 md:w-4 md:h-4 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-sm font-semibold text-foreground mb-1 md:mb-0">
                    {highlight.title}
                  </h3>
                  <p className="text-sm md:text-xs text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};