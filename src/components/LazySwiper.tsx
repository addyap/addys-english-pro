import React, { memo, useEffect, useState } from 'react';

interface ClientLogo {
  src: string;
  alt: string;
  name: string;
}

interface LazyClientCarouselProps {
  logos: ClientLogo[];
}

// Placeholder while Swiper loads
const CarouselSkeleton = memo(() => (
  <div className="flex gap-8 overflow-hidden pb-8 justify-center">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex flex-col items-center min-w-[200px]">
        <div className="h-24 w-24 bg-muted animate-pulse rounded-lg mb-2" />
        <div className="h-4 w-32 bg-muted animate-pulse rounded" />
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
      spaceBetween={40}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }}
      loop={false}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
      className="pb-8"
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-24 object-contain mb-2"
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm font-medium text-primary">{logo.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default LazyClientCarousel;
