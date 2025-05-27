import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';

import slider1 from '../assets/slider1.jpeg';
import slider2 from '../assets/slider2.jpeg';

const slides = [
  { 
    image: slider1,
    alt: "Slide 1 - Professional content"
  },
  { 
    image: slider2,
    alt: "Slide 2 - Professional content"
  },
];

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Preload images for better performance
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });

    // Add intersection observer for performance optimization
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start autoplay when slider comes into view
            if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.autoplay.start();
            }
          } else {
            // Pause autoplay when slider is out of view
            if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.autoplay.stop();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const sliderElement = document.querySelector('.slider-section');
    if (sliderElement) {
      observer.observe(sliderElement);
    }

    return () => {
      if (sliderElement) {
        observer.unobserve(sliderElement);
      }
    };
  }, []);

  const handleSlideChange = (swiper) => {
    // Add custom animations or analytics tracking here if needed
    console.log('Slide changed to:', swiper.activeIndex);
  };

  const handleAutoplayStop = () => {
    // Handle autoplay stop events
    console.log('Autoplay stopped');
  };

  return (
    <section className="slider-section" role="banner" aria-label="Image slider">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          renderBullet: (index, className) => {
            return `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`;
          }
        }}
        speed={800}
        allowTouchMove={true}
        grabCursor={true}
        watchSlidesProgress={true}
        preventInteractionOnTransition={true}
        className="dietitian-swiper"
        onSlideChange={handleSlideChange}
        onAutoplayStop={handleAutoplayStop}
        // Accessibility improvements
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}'
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slider-bg"
              style={{ 
                backgroundImage: `url(${slide.image})`,
              }}
              role="img"
              aria-label={slide.alt}
            >
              {/* Enhanced with hidden img tag for better SEO and accessibility */}
              <img 
                src={slide.image} 
                alt={slide.alt}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                  visibility: 'hidden'
                }}
                loading="eager"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;