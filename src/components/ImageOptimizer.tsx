import React from 'react';
import LazyImage from './LazyImage';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Image Optimizer Component
 * Handles responsive images with lazy loading and optimization
 */
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
}) => {
  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc || baseSrc.startsWith('data:')) {
      return undefined;
    }

    // For external images, return as-is
    if (baseSrc.startsWith('http')) {
      return `${baseSrc} 1x`;
    }

    return undefined;
  };

  const srcSet = generateSrcSet(src);

  if (priority) {
    // For priority images, load immediately without lazy loading
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <LazyImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default ImageOptimizer;
