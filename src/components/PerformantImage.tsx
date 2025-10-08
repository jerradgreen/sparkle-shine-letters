import { useState } from "react";

interface PerformantImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  style?: React.CSSProperties;
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  showPlaceholder?: boolean;
}

/**
 * High-performance image component with optimized loading strategies
 * Uses modern best practices for LCP and performance optimization
 */
const PerformantImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy", 
  priority = false, 
  style,
  fetchPriority = "auto",
  sizes,
  showPlaceholder = true
}: PerformantImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {showPlaceholder && !isLoaded && (
        <div className={`absolute inset-0 bg-muted animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${showPlaceholder ? 'transition-opacity duration-300' : ''} ${
          showPlaceholder ? (isLoaded ? 'opacity-100' : 'opacity-0') : 'opacity-100'
        }`}
        style={style}
        loading={priority ? "eager" : loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : fetchPriority}
        sizes={sizes}
      />
    </div>
  );
};

export default PerformantImage;
