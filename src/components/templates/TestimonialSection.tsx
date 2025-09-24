import OptimizedImage from '@/components/OptimizedImage';
import { TemplateConfig } from '@/types/template';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialSectionProps {
  config: TemplateConfig['testimonials'];
}

export const TestimonialSection = ({ config }: TestimonialSectionProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {config.title}
            </span>
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.items.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-6">
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-center">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                
                {/* Customer Info */}
                <div className="flex flex-col items-center space-y-3 pt-4 border-t border-border/50">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <OptimizedImage
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold">4.9/5 Rating</span>
          </div>
          <p className="text-muted-foreground">
            Based on {config.items.length}+ verified customer reviews
          </p>
        </div>
      </div>
    </section>
  );
};