import { TemplateConfig } from '@/types/template';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQSectionProps {
  config: TemplateConfig['faq'];
}

export const FAQSection = ({ config }: FAQSectionProps) => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {config.title}
            </span>
          </h2>
        </div>
        
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {config.items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background/80 backdrop-blur-sm border rounded-lg px-6 hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg pr-4">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Get Quote CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => window.open('https://www.cognitoforms.com/VintageMarqueeLights/EventStyleLettersQuoteForm', '_blank')}
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-300 text-lg"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};