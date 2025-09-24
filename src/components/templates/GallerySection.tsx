import { useState } from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import { TemplateConfig } from '@/types/template';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GallerySectionProps {
  config: TemplateConfig['gallery'];
}

export const GallerySection = ({ config }: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + config.images.length) % config.images.length
      : (selectedImage + 1) % config.images.length;
    
    setSelectedImage(newIndex);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {config.images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <p className="text-sm font-medium">Click to view</p>
                  {image.caption && (
                    <p className="text-xs mt-2 opacity-80">{image.caption}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
          <DialogContent className="max-w-6xl w-full h-full max-h-[90vh] p-0 bg-black/95">
            {selectedImage !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </Button>
                
                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
                
                {/* Image */}
                <div className="w-full h-full flex items-center justify-center p-8">
                  <OptimizedImage
                    src={config.images[selectedImage].src}
                    alt={config.images[selectedImage].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Caption */}
                {config.images[selectedImage].caption && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="text-sm bg-black/50 px-4 py-2 rounded-full">
                      {config.images[selectedImage].caption}
                    </p>
                  </div>
                )}
                
                {/* Image Counter */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                  {selectedImage + 1} / {config.images.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};