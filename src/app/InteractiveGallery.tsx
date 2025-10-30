"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Custom styles for the gallery to ensure a sleek look
const galleryStyles = `
.mySwiper .swiper-slide {
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}
.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
.mySwiper .swiper-wrapper {
  padding-top: 10px; /* Space for the active thumb to pop */
}
.mainSwiper .swiper-button-next, .mainSwiper .swiper-button-prev {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 44px;
  height: 44px;
}
.mainSwiper .swiper-button-next:after, .mainSwiper .swiper-button-prev:after {
  font-size: 20px;
  font-weight: bold;
}
`;

const images = [
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg"
];

export default function InteractiveGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <>
      <style>{galleryStyles}</style>
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper h-64 md:h-96 w-full rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Galerija slika ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 h-20 md:h-28 w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
             <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
