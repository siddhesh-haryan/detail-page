// components/LogoSlider.tsx
"use client"
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import Image from 'next/image';

SwiperCore.use([]);

interface LogoSliderProps {}

const LogoSlider: FC<LogoSliderProps> = () => {
    return (
      <div className="client_logos py-8">
        <div className="trusted_brands text-center mb-6">
          <div className="flex items-center justify-center">
            <hr className="flex-grow border-t border-zinc-400 mx-4" />
            <span className="text-xl md:text-2xl font-medium">
              Trusted by conglomerates, enterprises, and startups alike
            </span>
            <hr className="flex-grow border-t border-zinc-400 mx-4" />
          </div>
        </div>
        <Swiper
          spaceBetween={10} // Reduced gap between logos
          loop={true} // No looping
          slidesPerView={2} // Default number of slides for smaller screens
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 }, // Display 6 slides on larger screens
          }}
          grabCursor={true} // Enables drag behavior with the mouse cursor
          className="swiper-container"
        >
          <SwiperSlide>
            <Image width={100} height={100} className="mx-auto" src="/assets/images/kfc-logo.webp" alt="KFC" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src="/assets/images/kpmg-logo.webp" alt="KPMG" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src="/assets/images/kfc-logo.webp" alt="Domino's" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src="/assets/images/kpmg-logo.webp" alt="Google" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src="/assets/images/kfc-logo.webp" alt="BCG" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={100} src="/assets/images/kpmg-logo.webp" alt="Americana" className="mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };
export default LogoSlider;
