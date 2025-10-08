import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  style?: React.CSSProperties;
  fetchPriority?: "high" | "low" | "auto";
}

const OptimizedImage = ({ src, alt, className = "", loading = "lazy", priority = false, style, fetchPriority = "auto" }: OptimizedImageProps) => {
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
      {!isLoaded && (
        <div className={`absolute inset-0 bg-muted animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={style}
        loading={priority ? "eager" : loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        fetchPriority={priority ? "high" : fetchPriority}
      />
    </div>
  );
};

export default OptimizedImage;