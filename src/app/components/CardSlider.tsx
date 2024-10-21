"use client";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function CardSlider({ cards }: { cards: ServiceCardProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };
  const handleTouchStart = () => {
    if (swiperRef.current) {
      swiperRef.current.el.style.cursor = "grabbing";
    }
  };

  const handleTouchEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.el.style.cursor = "default";
    }
  };
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our Latest Suite of<br />Custom ERP Services
        </h1>
        <p className="text-lg mb-12 max-w-3xl">
          Appinventiv's highly skilled team of ERP developers, QA engineers, business analysts, IT consultants, and
          project managers leave no stone unturned in creating the most dynamic and high-end ERP software systems for your business.
        </p>

        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-semibold">{`${currentIndex + 1 < 10 ? '0' : ''}${currentIndex + 1} — ${cards.length < 10 ? '0' : ''}${cards.length}`}</span>
          <div className="flex gap-4">
            <button onClick={handlePrev} className="p-2 border border-zinc-50 rounded-xl bg-zinc-100">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button onClick={handleNext} className="p-2 border border-zinc-50 rounded-xl bg-zinc-100">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={12}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="!pb-8 h-[500px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleTouchStart}
          onMouseLeave={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="h-auto">
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <div className="rounded-2xl p-6 flex flex-col h-full border-zinc-300 border-[1px] transform hover:bg-gradient-to-r hover:from-[#062C7E] hover:to-[#2150FD] hover:text-white">
        <div className="bg-zinc-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-zinc-200">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold mb-4 ease-in-out">{title}</h2>
        <p className="flex-grow ease-in-out">{description}</p>
      </div>
    );
  }
  
  
