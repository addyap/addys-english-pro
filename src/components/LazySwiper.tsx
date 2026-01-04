import React, { memo, useEffect, useState } from 'react';

interface ClientLogo {
  src: string;
  alt: string;
  name: string;
}

interface LazyClientCarouselProps {
  logos: ClientLogo[];
}

// Placeholder while Swiper loads - matches final carousel height
const CarouselSkeleton = memo(() => (
  <div className="flex gap-4 overflow-hidden pb-8 justify-center h-[140px] items-center">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex flex-col items-center min-w-[120px]">
        <div className="h-20 w-20 bg-muted animate-pulse rounded-lg mb-2" />
        <div className="h-4 w-24 bg-muted animate-pulse rounded" />
      </div>
    ))}
  </div>
));

export const LazyClientCarousel = memo<LazyClientCarouselProps>(({ logos }) => {
  const [SwiperComponents, setSwiperComponents] = useState<{
    Swiper: any;
    SwiperSlide: any;
    Autoplay: any;
  } | null>(null);

  useEffect(() => {
    // Dynamically import Swiper when component mounts
    Promise.all([
      import('swiper/react'),
      import('swiper/modules'),
    ]).then(([swiperMod, modulesMod]) => {
      // Import CSS after JS modules
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(link);
      
      setSwiperComponents({
        Swiper: swiperMod.Swiper,
        SwiperSlide: swiperMod.SwiperSlide,
        Autoplay: modulesMod.Autoplay,
      });
    });
  }, []);

  if (!SwiperComponents) {
    return <CarouselSkeleton />;
  }

  const { Swiper, SwiperSlide, Autoplay } = SwiperComponents;

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        480: { slidesPerView: 2, spaceBetween: 30 },
        640: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 }
      }}
      loop={true}
      speed={800}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      modules={[Autoplay]}
      className="pb-8"
      style={{ '--swiper-wrapper-transition-timing-function': 'linear' } as React.CSSProperties}
    >
      {/* Duplicate logos for seamless infinite loop */}
      {[...logos, ...logos].map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 sm:h-24 object-contain mb-2"
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
            />
            <p className="text-xs sm:text-sm font-medium text-primary text-center">{logo.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default LazyClientCarousel;
