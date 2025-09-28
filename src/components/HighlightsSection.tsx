import { CheckCircle, Sparkles, Zap } from 'lucide-react';

export const HighlightsSection = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "Unmatched Durability",
      description: "Commercial-grade construction built to withstand any event"
    },
    {
      icon: Sparkles,
      title: "Premium Visual Impact", 
      description: "Professional lighting that creates stunning focal points"
    },
    {
      icon: Zap,
      title: "Dynamic Lighting Options",
      description: "Customizable illumination to match any event theme"
    }
  ];

  return (
    <section className="py-8 bg-slate-50/80 border-y border-slate-200/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="flex md:flex-col items-center md:text-center space-x-4 md:space-x-0 md:space-y-3 bg-white/60 p-4 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1 md:flex-none">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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