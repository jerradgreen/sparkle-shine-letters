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
    <section className="py-16 bg-slate-50/80 border-y border-slate-200/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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