export const HomeHighlightsSection = () => {
  const highlights = [
    {
      icon: "📏",
      title: "Custom-Built for Any Size Job",
      description: "Whether it's one bold word or a full-scale logo wall, we build signs to fit your space, your audience, and your goals."
    },
    {
      icon: "🎨",
      title: "Made to Match Your Vision",
      description: "From bold statement pieces to clean modern branding, each sign is designed to fit your style, space, and purpose."
    },
    {
      icon: "🔌",
      title: "Lit, Wired, Ready to Shine",
      description: "All signs arrive pre-wired with plug-in bulbs or lighting — just hang it up and plug it in."
    }
  ];

  return (
    <section className="py-8 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-2xl text-primary-foreground hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {highlight.title}
              </h3>
              <div className="w-12 h-0.5 bg-primary mx-auto"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
