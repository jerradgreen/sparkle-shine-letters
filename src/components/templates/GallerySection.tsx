import OptimizedImage from '@/components/OptimizedImage';
import { TemplateConfig } from '@/types/template';

interface GallerySectionProps {
  config: TemplateConfig['gallery'];
}

export const GallerySection = ({ config }: GallerySectionProps) => {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {config.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {config.subtitle}
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg bg-muted"
            >
              <div className="aspect-square">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-2">
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};