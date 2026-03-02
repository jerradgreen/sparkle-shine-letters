import { Ruler, Palette, Zap } from 'lucide-react';

export const HomeHighlightsSection = () => {
  const highlights = [
    {
      icon: Ruler,
      title: "Custom-Built for Any Size Job",
      description: "Whether it's one bold word or a full-scale logo wall, we build signs to fit your space, your audience, and your goals.",
      bgColor: "bg-blue-100"
    },
    {
      icon: Palette,
      title: "Made to Match Your Vision",
      description: "From bold statement pieces to clean modern branding, each sign is designed to fit your style, space, and purpose.",
      bgColor: "bg-orange-100"
    },
    {
      icon: Zap,
      title: "Lit, Wired, Ready to Shine",
      description: "All signs arrive pre-wired with plug-in bulbs or lighting — just hang it up and plug it in.",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section className="py-8 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">Handcrafted Marquee Signs for Every Space</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className={`mx-auto w-16 h-16 rounded-full ${highlight.bgColor} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {highlight.title}
                </h3>
                <div className="w-12 h-0.5 bg-primary mx-auto"></div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
