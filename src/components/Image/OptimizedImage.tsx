import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className 
}: OptimizedImageProps) {
  // Construct optimized Unsplash URL with compression and sizing
  const optimizedUrl = new URL(src);
  optimizedUrl.searchParams.set('w', width.toString());
  optimizedUrl.searchParams.set('h', height.toString());
  optimizedUrl.searchParams.set('q', '75'); // Compression quality
  optimizedUrl.searchParams.set('fit', 'crop');
  optimizedUrl.searchParams.set('auto', 'format');

  return (
    <img
      src={optimizedUrl.toString()}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={className}
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        img.src = 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=300&q=75&fit=crop'; // Fallback image
      }}
    />
  );
}