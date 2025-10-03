import React, { useState } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  sizes = '100vw',
  priority = false
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate WebP and AVIF sources if the image is not already optimized
  const getOptimizedSources = (originalSrc: string) => {
    if (originalSrc.includes('lovable-uploads') || originalSrc.startsWith('data:')) {
      return []; // Already optimized or data URI
    }
    
    const baseUrl = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    return [
      { srcSet: `${baseUrl}.avif`, type: 'image/avif' },
      { srcSet: `${baseUrl}.webp`, type: 'image/webp' }
    ];
  };

  const sources = getOptimizedSources(src);

  return (
    <picture>
      {sources.map((source, index) => (
        <source 
          key={index}
          srcSet={source.srcSet} 
          type={source.type}
        />
      ))}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};

export default ImageOptimizer;