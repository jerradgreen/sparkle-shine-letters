import { useState } from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import { TemplateConfig } from '@/types/template';
import { X } from 'lucide-react';

interface GallerySectionProps {
  config: TemplateConfig['gallery'];
}

export const GallerySection = ({ config }: GallerySectionProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const selectedImage = selectedImageIndex !== null ? config.images[selectedImageIndex] : null;

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
          <p className="text-sm font-medium text-primary">
            Click any photo to enlarge it.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.images.map((image, index) => (
            <button
              type="button"
              key={index}
              className="group relative overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`Enlarge ${image.alt}`}
            >
              <div className="aspect-square">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-3 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                Click to enlarge
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative max-h-[90vh] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute -right-2 -top-12 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close enlarged image"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm text-white/80">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};
