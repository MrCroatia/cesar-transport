"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const images = [
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg",
  "/van.jpg"
];

export default function InteractiveGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-[400px] cursor-pointer"
        onClick={openModal}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              width={500}
              height={300}
              className="block w-auto h-auto max-h-full max-w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full h-full"
            >
              {images.map((src, index) => (
                <SwiperSlide 
                  key={index} 
                  className="w-[50vw] h-[50vh] bg-center bg-cover self-center"
                >
                  <Image 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    layout="fill" 
                    objectFit="contain" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
